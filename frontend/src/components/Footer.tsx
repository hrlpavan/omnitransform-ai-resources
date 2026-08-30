import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F5F7] border-t border-black/[0.08] mt-20 pt-10 pb-12 text-[#86868B] text-[12px] leading-[1.4] no-print w-full select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* 1. Official Accreditation & Verification Footnotes */}
        <div className="space-y-1.5 font-normal text-[#86868B] text-[11.5px] leading-relaxed border-b border-black/[0.08] pb-6">
          <p>
            1. HRL International Private Limited is an incorporated corporate entity registered in Mangaluru, Karnataka, India.
          </p>
          <p>
            2. Verified credentials awarded via JPMorgan Chase & Co. and Deloitte Australia through Forage accreditation platforms. DaVinci Resolve 20 certification awarded by Blackmagic Design.
          </p>
          <p>
            3. Developed for the Smart India Hackathon 2026 (PS26154) under the National Technical Research Organisation (NTRO), Ministry of Education, and AICTE.
          </p>
        </div>

        {/* 2. Structured 4-Column Directory Grid (Apple Bento HIG Architecture) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-[12px]">
          {/* Column 1: Organization */}
          <div className="space-y-2.5">
            <span className="font-semibold text-[#1D1D1F] block text-xs tracking-tight">Organization</span>
            <ul className="space-y-1.5 text-[#6E6E73]">
              <li>HRL International Pvt Ltd</li>
              <li>Founder: Pavan Kumar Sadashiv</li>
              <li>Location: Mangaluru, Karnataka</li>
              <li>Team ID: 104580</li>
            </ul>
          </div>

          {/* Column 2: Verifications & Credentials */}
          <div className="space-y-2.5">
            <span className="font-semibold text-[#1D1D1F] block text-xs tracking-tight">Accreditations</span>
            <ul className="space-y-1.5 text-[#6E6E73]">
              <li>JPMorgan Chase & Co. Verified</li>
              <li>Deloitte Australia Verified</li>
              <li>Blackmagic DaVinci 20 Certified</li>
              <li>ElevenLabs SDK Partner</li>
            </ul>
          </div>

          {/* Column 3: Creative & Media Network */}
          <div className="space-y-2.5">
            <span className="font-semibold text-[#1D1D1F] block text-xs tracking-tight">Media Network</span>
            <ul className="space-y-1.5 text-[#6E6E73]">
              <li><span className="text-hrl-crimson font-medium">@hrlpremiumstudio</span></li>
              <li><span className="text-hrl-crimson font-medium">@hrlefx (Film Edits)</span></li>
              <li><span className="text-hrl-crimson font-medium">@hrlflix</span></li>
              <li><span className="text-hrl-crimson font-medium">@hrlstayupdated</span></li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-2.5">
            <span className="font-semibold text-[#1D1D1F] block text-xs tracking-tight">Corporate Inquiries</span>
            <ul className="space-y-1.5 text-[#6E6E73]">
              <li>
                <a
                  href="mailto:hrlinternationalprivatelimited@gmail.com"
                  className="text-[#0071E3] hover:underline block break-all"
                >
                  hrlinternationalprivatelimited@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0071E3] hover:underline"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hrlpavan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0071E3] hover:underline"
                >
                  GitHub (@hrlpavan)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Apple Crisp Divider Line */}
        <div className="border-t border-black/[0.08]" />

        {/* 4. Structured Bottom Legal Row (Apple.com Exact Alignment) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-[#86868B] pt-1">
          {/* Copyright */}
          <div>
            Copyright © 2026 Pavan Kumar Sadashiv. HRL International™ and HRL International Private Limited™ are asserted trademarks. All rights reserved.
          </div>

          {/* Legal Links Bar with Bullet Separators */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[#515154] shrink-0">
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Terms of Use</a>
            <span>·</span>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Corporate Verification</a>
            <span>·</span>
            <a href="#" className="text-hrl-crimson hover:underline font-medium">Copyright & DMCA</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
