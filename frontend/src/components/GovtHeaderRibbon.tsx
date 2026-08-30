import React from 'react';

export const GovtHeaderRibbon: React.FC = () => {
  return (
    <div className="bg-[#FAFAFC] border-b border-black/[0.06] py-1.5 select-none no-print transition-all w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Government of India & Institutional Logos Strip (Clean, Non-Redundant) */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 overflow-x-auto no-scrollbar py-0.5">
          
          {/* Ministry of Education - Government of India (Includes Official Apex Emblem) */}
          <div className="flex items-center h-6 shrink-0">
            <img
              src="./gov_moe_logo_transparent.png"
              alt="Ministry of Education - Government of India"
              className="h-5 sm:h-5.5 max-h-6 w-auto object-contain block"
            />
          </div>

          <div className="h-3 w-px bg-black/[0.08] shrink-0" />

          {/* AICTE */}
          <div className="flex items-center h-6 shrink-0">
            <img
              src="./gov_aicte_logo_transparent.png"
              alt="All India Council for Technical Education (AICTE)"
              className="h-5 sm:h-5.5 max-h-6 w-auto object-contain block"
            />
          </div>

          <div className="h-3 w-px bg-black/[0.08] shrink-0" />

          {/* MoE's Innovation Cell */}
          <div className="flex items-center h-6 shrink-0">
            <img
              src="./gov_mic_logo_transparent.png"
              alt="MoE's Innovation Cell (MIC)"
              className="h-5 sm:h-5.5 max-h-6 w-auto object-contain block"
            />
          </div>

          <div className="h-3 w-px bg-black/[0.08] shrink-0" />

          {/* Smart India Hackathon 2026 */}
          <div className="flex items-center h-6 shrink-0">
            <img
              src="./gov_sih_logo_transparent.png"
              alt="Smart India Hackathon 2026"
              className="h-5 sm:h-5.5 max-h-6 w-auto object-contain block"
            />
          </div>
        </div>

        {/* Right Institutional Verification Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-[10.5px] sm:text-[11px] font-medium text-[#515154] tracking-tight whitespace-nowrap">
            Government of India · Innovation Initiative
          </span>
        </div>
      </div>
    </div>
  );
};
