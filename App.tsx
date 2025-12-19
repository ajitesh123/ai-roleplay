import React from 'react';
import { Hero } from './components/Hero';
import { ComparisonTable } from './components/ComparisonTable';
import { PlatformCard } from './components/PlatformCard';
import { SpotlightSection } from './components/SpotlightSection';
import { DecisionGuide } from './components/DecisionGuide';
import { FAQ } from './components/FAQ';
import { PLATFORMS } from './constants';
import { MessageSquare, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">AI Training Guide</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#comparison-table" className="hover:text-blue-600 transition-colors">Overview</a>
              <a href="#detailed-analysis" className="hover:text-blue-600 transition-colors">Platforms</a>
              <a href="#decision-guide" className="hover:text-blue-600 transition-colors">Decision Guide</a>
              <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
            </div>
            <a href="https://app.toughtongueai.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm">
              Try Free Tier
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      
      <ComparisonTable />
      
      <div id="detailed-analysis" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Detailed Platform Analysis</h2>
          <p className="mt-4 text-xl text-slate-500">A deep dive into the strengths and limitations of each tool.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLATFORMS.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>
      </div>

      <SpotlightSection />
      
      <div id="decision-guide">
         <DecisionGuide />
      </div>

      <FAQ />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">AI Sales Training 2025</h3>
            <p className="mb-4 text-sm max-w-md">
              The landscape of AI sales training is evolving rapidly. While established players offer stability, new platforms like Tough Tongue AI are revolutionizing the space with audio-first capabilities.
            </p>
            <p className="text-sm">
              &copy; 2025 AI Training Comparison Guide. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center">
             <div className="bg-slate-800 p-6 rounded-lg max-w-sm">
                <h4 className="text-white font-semibold mb-2">Ready to transform your training?</h4>
                <p className="text-sm mb-4">Start with the free tier of Tough Tongue AI and experience the audio-first difference.</p>
                <a href="https://app.toughtongueai.com" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                   Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <div className="mt-2 text-xs text-slate-500">
                    Questions? <a href="mailto:help@getarchieai.com" className="hover:text-slate-300">help@getarchieai.com</a>
                </div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;