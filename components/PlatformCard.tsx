import React from 'react';
import { PlatformDetails } from '../types';
import { Check, X, DollarSign, Target } from 'lucide-react';

interface PlatformCardProps {
  platform: PlatformDetails;
}

export const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => {
  const isFeatured = platform.id === 'tough-tongue';

  return (
    <div className={`rounded-2xl overflow-hidden flex flex-col h-full ${isFeatured ? 'ring-2 ring-blue-600 shadow-2xl scale-[1.02] bg-white' : 'border border-slate-200 shadow-lg bg-white'}`}>
      <div className={`p-6 ${isFeatured ? 'bg-blue-600 text-white' : 'bg-slate-50 border-b border-slate-200'}`}>
        <h3 className={`text-2xl font-bold ${isFeatured ? 'text-white' : 'text-slate-900'}`}>{platform.name}</h3>
        <p className={`text-sm mt-1 ${isFeatured ? 'text-blue-100' : 'text-slate-500'}`}>{platform.tagline}</p>
      </div>
      
      <div className="p-6 flex-1 flex flex-col gap-6">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Overview</h4>
          <p className="text-sm text-slate-600 leading-relaxed">{platform.overview}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-green-600 mb-2 flex items-center gap-1">
            <Check className="w-4 h-4" /> Strengths
          </h4>
          <ul className="space-y-2">
            {platform.strengths.map((s, i) => (
              <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-2 flex items-center gap-1">
            <X className="w-4 h-4" /> Limitations
          </h4>
          <ul className="space-y-2">
            {platform.limitations.map((l, i) => (
              <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                 <span className="w-1.5 h-1.5 bg-red-300 rounded-full mt-1.5 shrink-0" />
                 <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 bg-slate-50 border-t border-slate-100 mt-auto space-y-3">
        <div className="flex items-start gap-3">
            <DollarSign className="w-5 h-5 text-slate-400 mt-0.5" />
            <div>
                <span className="text-xs font-semibold text-slate-900 uppercase block">Pricing</span>
                <span className="text-sm text-slate-600">{platform.pricing}</span>
            </div>
        </div>
        <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-slate-400 mt-0.5" />
             <div>
                <span className="text-xs font-semibold text-slate-900 uppercase block">Best For</span>
                <span className="text-sm text-slate-600">{platform.bestFor}</span>
            </div>
        </div>
      </div>
    </div>
  );
};