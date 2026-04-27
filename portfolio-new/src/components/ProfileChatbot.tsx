import { useRef, useState } from 'react';
import type { FormEvent } from 'react';

type Source = { title: string; text?: string };
type Message = { role: 'user' | 'assistant'; text: string; sources?: Source[] };

const apiUrl = import.meta.env.VITE_CHATBOT_API_URL ?? 'http://127.0.0.1:8000';
const apiToken = import.meta.env.VITE_CHATBOT_TOKEN ?? '';

export default function ProfileChatbot() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Ask me about Lovely Yeswanth's profile, projects, research, or skills." },
  ]);
  const [streaming, setStreaming] = useState(false);

  const abortRef = useRef<AbortController | null>(null);
  const streamingMsgRef = useRef<number | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const question = text.trim();
    if (!question || streaming) return;

    setText('');
    setMessages((prev) => [...prev, { role: 'user', text: question }]);
    setStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;
    const msgIdx = messages.length + 1; // index of the assistant message we'll stream into

    setMessages((prev) => [...prev, { role: 'assistant', text: '' }]);
    streamingMsgRef.current = msgIdx;

    try {
      const headers: Record<string, string> = {
        'content-type': 'application/json',
      };
      if (apiToken) headers['x-chatbot-token'] = apiToken;

      const res = await fetch(`${apiUrl}/chat`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ question }),
        signal: controller.signal,
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6);
          if (data === '[DONE]') continue;

          let event: { token?: string; sources?: Source[]; error?: string };
          try {
            event = JSON.parse(data);
          } catch {
            continue;
          }

          if (event.error) {
            setMessages((prev) => [
              ...prev.slice(0, -1),
              { role: 'assistant', text: 'Assistant is temporarily offline. Please try again later.' },
            ]);
            setStreaming(false);
            return;
          }

          if (event.token) {
            setMessages((prev) => {
              const updated = [...prev];
              const last = updated[updated.length - 1];
              if (last?.role === 'assistant') {
                last.text += event.token!;
              }
              return updated;
            });
          }

          if (event.sources) {
            setMessages((prev) => {
              const updated = [...prev];
              const last = updated[updated.length - 1];
              if (last?.role === 'assistant') {
                last.sources = event.sources;
              }
              return updated;
            });
          }
        }
      }
    } catch (err) {
      if ((err as Error).name === 'AbortError') {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: 'assistant', text: 'Response cancelled.' },
        ]);
      } else {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: 'assistant', text: 'Assistant is temporarily offline. Please try again later.' },
        ]);
      }
    } finally {
      setStreaming(false);
      abortRef.current = null;
      streamingMsgRef.current = null;
    }
  };

  const handleClose = () => {
    abortRef.current?.abort();
    setOpen(false);
  };

  return (
    <div className="chatbot-shell">
      {open ? (
        <div className="chatbot-panel">
          <div className="chatbot-head">
            <span>Profile Assistant</span>
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-msg ${msg.role}`}>
                <p>{msg.text}</p>
                {msg.sources && msg.sources.length > 0 ? (
                  <div className="chatbot-sources">
                    {msg.sources.map((s, sIdx) => (
                      <small key={sIdx}>{s.title}</small>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            {streaming ? (
              <div className="chatbot-msg assistant streaming">
                <p>Thinking...</p>
              </div>
            ) : null}
          </div>
          <form onSubmit={submit} className="chatbot-form">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ask about profile..."
              maxLength={400}
              disabled={streaming}
            />
            <button type="submit" disabled={streaming || !text.trim()}>
              Send
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        className="chatbot-fab"
        onClick={() => (open ? handleClose() : setOpen(true))}
      >
        {open ? '−' : 'Chat'}
      </button>
    </div>
  );
}
