import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                2025 Industry Report
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">AI Sales Training Tools</span>{' '}
                <span className="block text-blue-600 xl:inline">Comparison Guide</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A comprehensive analysis of the top AI roleplay platforms: Second Nature, Hyperbond, Quantified, Mindtickle, Yoodli, and Tough Tongue AI.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#comparison-table" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg">
                    View Comparison
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#detailed-analysis" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg">
                    Detailed Analysis
                  </a>
                </div>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-6">
                 <p className="text-sm text-slate-500 mb-2 font-medium">Evaluate based on real capabilities:</p>
                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> Conversation Realism</div>
                    <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> Feedback Quality</div>
                    <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500"/> Customization</div>
                 </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-slate-50 border-l border-slate-100">
         {/* Abstract visualization of analysis */}
         <div className="h-full w-full flex items-center justify-center p-8">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md opacity-80">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 transform translate-y-4">
                    <div className="h-2 w-12 bg-blue-100 rounded mb-4"></div>
                    <div className="h-20 bg-slate-50 rounded-lg border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs">Audio Processing</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 transform -translate-y-4">
                    <div className="h-2 w-12 bg-green-100 rounded mb-4"></div>
                    <div className="h-20 bg-slate-50 rounded-lg border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs">Interactive Tools</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 transform translate-y-2">
                     <div className="h-2 w-12 bg-purple-100 rounded mb-4"></div>
                    <div className="h-20 bg-slate-50 rounded-lg border border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-xs">Analytics</div>
                </div>
                <div className="bg-blue-600 p-6 rounded-xl shadow-xl transform -translate-y-2 text-white">
                     <div className="h-2 w-12 bg-blue-400 rounded mb-4"></div>
                     <div className="font-bold text-lg leading-tight">Superior <br/>Choice</div>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};