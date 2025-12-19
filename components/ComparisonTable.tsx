import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { Check, X, Info } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison-table" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">At a Glance</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Quick Comparison Overview
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            See how the leading platforms stack up across critical dimensions.
          </p>
        </div>

        <div className="relative rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold text-slate-900 sticky left-0 bg-slate-50 z-10 w-48 shadow-sm">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold min-w-[140px]">Second Nature</th>
                  <th scope="col" className="px-6 py-4 font-semibold min-w-[140px]">Hyperbond</th>
                  <th scope="col" className="px-6 py-4 font-semibold min-w-[140px]">Quantified</th>
                  <th scope="col" className="px-6 py-4 font-semibold min-w-[140px]">Mindtickle</th>
                  <th scope="col" className="px-6 py-4 font-semibold min-w-[140px]">Yoodli</th>
                  <th scope="col" className="px-6 py-4 font-bold text-blue-700 bg-blue-50 border-b border-blue-100 min-w-[180px]">
                    Tough Tongue AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, index) => (
                  <tr key={index} className={`border-b border-slate-100 last:border-none hover:bg-slate-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <th scope="row" className="px-6 py-4 font-medium text-slate-900 sticky left-0 bg-white z-10 shadow-sm border-r border-slate-100">
                      {row.feature}
                    </th>
                    <td className="px-6 py-4 text-slate-600">{row.secondNature}</td>
                    <td className="px-6 py-4 text-slate-600">{row.hyperbond}</td>
                    <td className="px-6 py-4 text-slate-600">{row.quantified}</td>
                    <td className="px-6 py-4 text-slate-600">{row.mindtickle}</td>
                    <td className="px-6 py-4 text-slate-600">{row.yoodli}</td>
                    <td className="px-6 py-4 font-semibold text-blue-800 bg-blue-50/50 border-l border-blue-100 relative">
                        {row.toughTongue}
                        {row.feature === "Audio Processing" && <span className="absolute top-2 right-2 text-blue-500"><Check className="w-3 h-3"/></span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 text-xs text-slate-400 text-center">
            Scroll horizontally to see all platforms
        </div>
      </div>
    </section>
  );
};