import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './ui/AnimatedText';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaSpinner } from 'react-icons/fa';

export default function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitting: false,
    submitted: false,
    error: null
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ ...formState, submitting: true });
    
    // This would be replaced with actual form submission logic in a real implementation
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: '',
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="neural-pattern-contact" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" className="fill-primary-500" />
            <path d="M0,20 L40,20 M20,0 L20,40" stroke="#40A9FF" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-pattern-contact)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <AnimatedText
            text="Get In Touch"
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            TextElement="h2"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Interested in collaborating or have a question? Feel free to reach out through any of these channels or the form below.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="md:w-1/2">
            <div className="card-highlight p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <a href="mailto:Lpanch2@emory.edu" className="text-gray-300 hover:text-primary-400 transition">
                      Lpanch2@emory.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mr-4">
                    <FaLinkedin className="text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/lovelyyeswanth" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary-400 transition"
                    >
                      linkedin.com/in/lovelyyeswanth
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mr-4">
                    <FaGithub className="text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">GitHub</h4>
                    <a 
                      href="https://github.com/lyeswanthp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary-400 transition"
                    >
                      github.com/lyeswanthp
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-dark-700">
                <h4 className="text-lg font-medium text-white mb-4">Available For</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary-500/10 rounded-full text-sm text-primary-400">
                    AI Engineering
                  </span>
                  <span className="px-4 py-2 bg-primary-500/10 rounded-full text-sm text-primary-400">
                    Machine Learning
                  </span>
                  <span className="px-4 py-2 bg-primary-500/10 rounded-full text-sm text-primary-400">
                    Research Collaboration
                  </span>
                  <span className="px-4 py-2 bg-primary-500/10 rounded-full text-sm text-primary-400">
                    Consulting
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="md:w-1/2">
            <div className="card-highlight p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
              
              {formState.submitted ? (
                <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 text-center">
                  <FaPaperPlane className="text-primary-400 text-2xl mx-auto mb-3" />
                  <h4 className="text-xl font-medium text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">
                    Thank you for reaching out! I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaUser className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-700 border border-dark-600 text-white rounded-lg pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaEnvelope className="text-gray-500" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-700 border border-dark-600 text-white rounded-lg pl-10 p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-dark-700 border border-dark-600 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-medium rounded-lg transition shadow-lg hover:shadow-primary-500/30 flex items-center justify-center"
                  >
                    {formState.submitting ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}