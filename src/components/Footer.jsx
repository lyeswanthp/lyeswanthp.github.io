import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center shadow-lg">
                <span className="text-white font-mono font-bold text-lg">LY</span>
              </div>
              <span className="text-xl font-medium text-white code-text">
                lovely<span className="text-primary-500">yeswanth</span>
              </span>
            </Link>
            <p className="text-gray-400 mt-4 max-w-md">
              AI Engineer & Machine Learning Researcher specializing in deep learning, LLMs, and RAG systems.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-20">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Navigate</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#about" className="text-gray-400 hover:text-primary-400 transition">About</Link>
                </li>
                <li>
                  <Link href="/#experience" className="text-gray-400 hover:text-primary-400 transition">Experience</Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-gray-400 hover:text-primary-400 transition">Projects</Link>
                </li>
                <li>
                  <Link href="/#skills" className="text-gray-400 hover:text-primary-400 transition">Skills</Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-400 hover:text-primary-400 transition">Contact</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/lyeswanthp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition flex items-center">
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/lovelyyeswanth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition flex items-center">
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:Lpanch2@emory.edu" className="text-gray-400 hover:text-primary-400 transition flex items-center">
                    <FaEnvelope className="mr-2" /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Lovely Yeswanth Panchumarthi. All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center">
            Built with <FaHeart className="text-primary-500 mx-1" /> using Next.js and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}