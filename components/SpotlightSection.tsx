import React from 'react';
import { Mic, Image as ImageIcon, Layout, Edit3, Settings, MonitorPlay } from 'lucide-react';

export const SpotlightSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">The Platform Advantage</span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl lg:text-5xl">Why Tough Tongue AI is Different</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
            Most competitors are products. We are a platform. See why that matters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Mic className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Audio-First Processing</h3>
                <p className="text-slate-300 leading-relaxed">
                  Unlike text-based competitors, our AI <em>hears</em> you. It detects confidence, hesitation, defensive tone shifts, and energy drops. Feedback is based on how you sound to a prospect, not just the words you used.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
               <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <Settings className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">True Platform Customization</h3>
                <p className="text-slate-300 leading-relaxed">
                  Upload your actual call recordings, pitch decks, and battle cards. Define your own evaluation criteria. You aren't locked into generic sales templates; you build training that evolves as fast as your market does.
                </p>
              </div>
            </div>

             <div className="flex gap-4">
               <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <MonitorPlay className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Multimodal Video Analysis</h3>
                <p className="text-slate-300 leading-relaxed">
                  We analyze facial expressions, eye contact, and body language during video calls. Perfect for the modern remote sales environment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-slate-700 pb-4">Agentic Tools</h3>
            <p className="text-slate-400 mb-8">The AI isn't limited to conversation. It uses interactive tools to create immersive, realistic scenarios.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-blue-500 transition-colors">
                <ImageIcon className="h-8 w-8 text-blue-400 mb-3" />
                <h4 className="font-semibold text-white">Image Generation</h4>
                <p className="text-sm text-slate-400 mt-1">Visual context for scenarios (e.g. frustrated customer face).</p>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-yellow-500 transition-colors">
                <Layout className="h-8 w-8 text-yellow-400 mb-3" />
                <h4 className="font-semibold text-white">Slides Integration</h4>
                <p className="text-sm text-slate-400 mt-1">Practice demos while the AI navigates your actual deck.</p>
              </div>
              <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-pink-500 transition-colors">
                <Edit3 className="h-8 w-8 text-pink-400 mb-3" />
                <h4 className="font-semibold text-white">Interactive Notepad</h4>
                <p className="text-sm text-slate-400 mt-1">Practice taking notes or CRM entry while talking.</p>
              </div>
               <div className="p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:border-emerald-500 transition-colors">
                <div className="h-8 w-8 text-emerald-400 mb-3 font-mono font-bold border-2 border-emerald-400 rounded flex items-center justify-center text-xs">M</div>
                <h4 className="font-semibold text-white">Mermaid Diagrams</h4>
                <p className="text-sm text-slate-400 mt-1">Visualize complex decision trees and workflows.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};