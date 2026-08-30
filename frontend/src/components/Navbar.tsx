import React from 'react';
import type { AudiencePersona } from '../types';
import { Download, TrendingUp, Mic } from 'lucide-react';

interface NavbarProps {
  onOpenVoiceGuide?: () => void;
  currentPersona: AudiencePersona;
  onPersonaChange: (p: AudiencePersona) => void;
  isProcessing: boolean;
  onOpenVentureModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPersona,
  onPersonaChange,
  isProcessing,
  onOpenVentureModal,
  onOpenVoiceGuide
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl backdrop-saturate-180 border-b border-black/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.02)] no-print transition-all w-full select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3 sm:gap-4">
          
          {/* Brand Identity & Title */}
          <div className="flex items-center space-x-3 shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="./hrl_logo_transparent.png"
                alt="HRL International"
                className="h-5 sm:h-5.5 max-h-6 w-auto object-contain block"
              />
            </a>
            <div className="hidden sm:block pl-3 border-l border-black/[0.08]">
              <span className="font-semibold text-xs sm:text-[13px] tracking-tight text-[#1D1D1F] block leading-tight">
                OmniTransform AI
              </span>
              <span className="text-[8.5px] sm:text-[9px] text-[#86868B] font-medium tracking-wider uppercase block leading-none mt-0.5">
                Content Transformation Platform
              </span>
            </div>
          </div>

          {/* Segmented Persona Selector (Center Stage · Apple macOS / iOS Style) */}
          <div className="flex items-center bg-black/[0.05] p-0.5 sm:p-1 rounded-full border border-black/[0.04] h-8 sm:h-9 shrink-0">
            <span className="text-[11px] text-[#86868B] font-semibold px-2 hidden lg:inline whitespace-nowrap">
              Audience:
            </span>
            <button
              onClick={() => onPersonaChange('executive')}
              disabled={isProcessing}
              className={`text-[11px] sm:text-xs px-3 sm:px-3.5 h-7 rounded-full font-medium transition-all duration-150 cursor-pointer whitespace-nowrap flex items-center justify-center ${
                currentPersona === 'executive'
                  ? 'bg-white text-[#1D1D1F] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] font-semibold'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              Executive
            </button>
            <button
              onClick={() => onPersonaChange('analyst')}
              disabled={isProcessing}
              className={`text-[11px] sm:text-xs px-3 sm:px-3.5 h-7 rounded-full font-medium transition-all duration-150 cursor-pointer whitespace-nowrap flex items-center justify-center ${
                currentPersona === 'analyst'
                  ? 'bg-white text-[#1D1D1F] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] font-semibold'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => onPersonaChange('citizen')}
              disabled={isProcessing}
              className={`text-[11px] sm:text-xs px-3 sm:px-3.5 h-7 rounded-full font-medium transition-all duration-150 cursor-pointer whitespace-nowrap flex items-center justify-center ${
                currentPersona === 'citizen'
                  ? 'bg-white text-[#1D1D1F] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] font-semibold'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              Public
            </button>
          </div>

          {/* Clean 3-Action Cluster (Streamlined Apple HIG Visual Hierarchy) */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* 1. Multilingual Voice Guide (Secondary Action Pill) */}
            <button
              onClick={onOpenVoiceGuide}
              className="flex items-center gap-1.5 px-3 h-8 sm:h-9 rounded-full bg-[#0071E3]/[0.08] hover:bg-[#0071E3]/[0.14] active:scale-[0.98] text-[#0071E3] text-xs font-semibold transition-all border border-[#0071E3]/20 cursor-pointer shadow-none whitespace-nowrap shrink-0"
              title="Interactive Multilingual Voice Walkthrough in 8 Languages"
            >
              <Mic className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
              <span className="hidden sm:inline">Voice Guide</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#0071E3] text-white leading-none">
                8 Langs
              </span>
            </button>

            {/* 2. Venture & GTM (Tertiary Subtle Action) */}
            <button
              onClick={onOpenVentureModal}
              className="hidden md:flex items-center gap-1.5 px-3 h-8 sm:h-9 rounded-full bg-black/[0.04] hover:bg-black/[0.08] active:scale-[0.98] text-[#1D1D1F] text-xs font-medium transition-all border border-black/[0.04] cursor-pointer shadow-none whitespace-nowrap shrink-0"
            >
              <TrendingUp className="w-3.5 h-3.5 text-hrl-crimson" />
              <span>Venture & GTM</span>
            </button>

            {/* 3. Pitch Deck Download (Primary Action CTA) */}
            <a
              href="https://github.com/hrlpavan/omnitransform-ai-resources/raw/main/SIH2026_Idea_Presentation_PS26154.pptx"
              className="bg-[#0071E3] hover:bg-[#0077ED] active:bg-[#006EDB] active:scale-[0.98] text-white px-3.5 sm:px-4 h-8 sm:h-9 rounded-full text-xs font-medium shadow-none hover:shadow-sm transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span>Pitch Deck</span>
            </a>

          </div>
        </div>
      </div>
    </header>
  );
};
