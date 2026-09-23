import type { SampleDocument, TransformedOutput, AudiencePersona } from '../types';

export const SAMPLE_DOCUMENTS: SampleDocument[] = [
  {
    id: 'ntro-advisory-2026',
    title: 'NTRO Critical Infrastructure Cyber Threat Advisory (Q3 2026)',
    fileName: 'NTRO_Cyber_Threat_Advisory_Q3_2026.pdf',
    category: 'National Infrastructure Security',
    pageCount: 54,
    classification: 'CONFIDENTIAL / TIER-1',
    summary: 'Forensic threat assessment covering coordinated ransomware operations targeting state-level electrical load dispatch switches and port telemetry networks.',
    rawTextPreview: `NATIONAL TECHNICAL RESEARCH ORGANISATION (NTRO)
CYBER FORENSICS & THREAT INTELLIGENCE DIVISION
DOCUMENT ID: NTRO-ADV-2026-0894 | CLASSIFICATION: OFFICIAL USE ONLY

1. EXECUTIVE THREAT ASSESSMENT
During the Q3 2026 surveillance window, NTRO intelligence units recorded a 42.8% surge in coordinated ransomware vectors targeting state-level SCADA infrastructure. Threat actors utilized compromised zero-day vulnerabilities in VPN gateway controllers (CVE-2026-3841) to execute lateral movement across operational technology (OT) network segments.

2. AFFECTED DOMAINS & CRITICAL SYSTEMS
- Regional Power Distribution Companies (Discoms): 14 load dispatch centers identified with unauthorized persistence scripts.
- Port & Maritime Logistics Switches: 3 major container terminals recorded intermittent telemetry disruptions.
- Banking & Financial Clearing Gateways: Targeted phishing campaigns directed at inter-bank RTGS transaction authentication operators.

3. FORENSIC ATTRIBUTION & INDICATORS OF COMPROMISE (IoC)
Forensic hash analysis confirmed alignment with APT-44 threat signature frameworks. Command and control (C2) communication utilized encrypted DNS-over-HTTPS tunnels resolving to dynamic bulletproof hosting clusters located across Eastern Europe.`
  },
  {
    id: 'ai-drone-policy-2026',
    title: 'National Strategy for Autonomous AI Drones & Border Reconnaissance',
    fileName: 'MoD_Autonomous_Drone_Strategy_2026.pdf',
    category: 'Autonomous Defense Systems',
    pageCount: 42,
    classification: 'RESTRICTED / DEF-SPEC',
    summary: 'Strategic technical specification for edge-AI neural acceleration on autonomous UAV swarms with encrypted tactical mesh coordination.',
    rawTextPreview: `MINISTRY OF DEFENCE — DEFENCE RESEARCH & INNOVATION DIVISION
STRATEGIC ROADMAP: EDGE AI UAV SURVEILLANCE SYSTEMS (2026–2030)

1. STRATEGIC MISSION OBJECTIVE
To deploy low-latency, sovereign computer vision algorithms directly on lightweight quadcopter and fixed-wing UAV onboard neural processing units (NPUs). Edge inference ensures continuous autonomous terrain classification and thermal anomaly detection without reliance on high-bandwidth satellite downlinks.

2. HARDWARE ARCHITECTURE & EDGE NPU SPECIFICATIONS
- Onboard Vision Core: 32 TOPS INT8 low-power embedded neural accelerator.
- Swarm Meshing: Dynamic 5.8 GHz frequency-hopping tactical mesh network supporting up to 24 synchronized drones.
- Thermal Sensor Resolution: 640x512 uncooled microbolometer with onboard Kalman filtering for target velocity tracking.`
  }
];

export function getPersonaTransformedOutput(docId: string, persona: AudiencePersona = 'executive'): TransformedOutput {
  const isDrone = docId === 'ai-drone-policy-2026';

  if (persona === 'analyst') {
    // TECHNICAL PERSONA
    return {
      id: `trans-${docId}-analyst`,
      documentTitle: isDrone ? 'National Strategy for Autonomous AI Drones (Technical Spec)' : 'NTRO Cyber Threat Advisory (SOC Technical Forensic)',
      sourcePageCount: isDrone ? 42 : 54,
      processingTimeMs: 5800,
      persona: 'analyst',
      citations: [
        {
          id: 'cit-1',
          pageNumber: 8,
          lineNumber: 'Lines 18-24',
          sourceText: 'Zero-day vulnerability CVE-2026-3841 exploited in edge gateway controllers with heap overflow in TLS session cache.',
          contextSnippet: 'Zero-day vulnerability CVE-2026-3841 exploited in edge gateway controllers with heap overflow in TLS session cache.',
          boundingBox: [50, 180, 500, 240]
        },
        {
          id: 'cit-2',
          pageNumber: 14,
          lineNumber: 'Lines 45-52',
          sourceText: 'Command and control beaconing detected on TCP 8443 with SHA-256 hash a8f5c92e31b78904f81014e2569c71d.',
          contextSnippet: 'Command and control beaconing detected on TCP 8443 with SHA-256 hash a8f5c92e31b78904f81014e2569c71d.',
          boundingBox: [60, 320, 520, 380]
        }
      ],
      executiveMemo: {
        title: isDrone ? 'TECHNICAL ARCHITECTURE: 32 TOPS EDGE NPU & TACTICAL MESH' : 'SOC TECHNICAL FORENSIC & INCIDENT RESPONSE MEMORANDUM',
        organization: isDrone ? 'MoD Defence Innovation Directorate' : 'NTRO Cyber Forensics & Threat Intel Unit',
        date: '31 August 2026',
        classification: 'RESTRICTED // TECHNICAL DEEP-DIVE',
        executiveSummary: isDrone
          ? 'Technical analysis of edge neural acceleration on UAV onboard NPUs operating on 5.8 GHz tactical mesh.'
          : 'Detailed forensic assessment of CVE-2026-3841 heap corruption in gateway controllers and SCADA DNP3 telemetry hijacking.',
        keyFindings: [
          { point: 'CVE-2026-3841 CVSS 9.8 vulnerability exploited across 14 Discom load dispatch gateway controllers.', citationId: 'cit-1', impactLevel: 'Critical' },
          { point: 'APT-44 C2 communications encapsulated within TLS 1.3 tunneling on Port 8443 with dynamic DNS rotation.', citationId: 'cit-2', impactLevel: 'High' },
          { point: 'Immediate protocol air-gapping mandated between IT enterprise networks and OT Modbus/SCADA rings.', citationId: 'cit-1', impactLevel: 'High' }
        ],
        actionItems: [
          { priority: 'P0 - Immediate', action: 'Deploy Snort signature rule NTRO-RULE-2026-09 on all perimeter gateway firewalls within 4 hours.', owner: 'SOC Tier-3 Lead' },
          { priority: 'P0 - Immediate', action: 'Enforce hardware token MFA and TLS certificate pinning on all substation remote telemetry links.', owner: 'Infrastructure Eng' },
          { priority: 'P1 - 24 Hours', action: 'Execute memory dump forensic capture on affected Discom switches before scheduled firmware rollback.', owner: 'Incident Response' }
        ]
      },
      slideDeck: [
        {
          slideNumber: 1,
          title: 'Technical Overview & Threat Topology',
          subtitle: 'SOC Incident Response & Systems Engineering',
          bullets: [
            'Vulnerability: CVE-2026-3841 heap buffer overflow in VPN gateway controllers',
            'Targeted Protocols: Modbus TCP (Port 502), DNP3 (Port 20000), and IEC 60870-5-104',
            'Affected Nodes: 14 regional electrical load dispatch switches'
          ],
          keyMetric: { value: 'CVSS 9.8', label: 'Exploit Severity Rating' },
          notes: 'Immediate perimeter containment required before OT subnet cross-contamination.'
        },
        {
          slideNumber: 2,
          title: 'Forensic IOCs & Network Signatures',
          subtitle: 'Threat Hunting & Signature Detection',
          bullets: [
            'SHA-256 Payload Hash: a8f5c92e31b78904f81014e2569c71d3345f891bca72019485720491823',
            'C2 IP Clusters: 185.220.101.44:8443, 91.240.118.12:443 (DoH Tunneling)',
            'Snort/Suricata Rule: alert tcp any any -> $OT_NET [502,20000] (msg:"NTRO.APT44.SCADA")'
          ],
          keyMetric: { value: '< 4 Hours', label: 'Mandatory Patch SLA' },
          notes: 'Zero-day indicators distributed to all Tier-1 SOC operators via STIX/TAXII feeds.'
        }
      ],
      infographics: [
        {
          id: 'info-t1',
          title: 'Exploit Severity',
          category: 'Vulnerability Analysis',
          statValue: 'CVSS 9.8',
          statLabel: 'Critical Remote Execution',
          trend: 'up',
          trendText: 'Zero-day Heap Overflow in Gateway',
          color: 'from-rose-600 to-red-700',
          details: ['CVE-2026-3841 Active Exploit', 'Heap corruption in TLS cache', 'RCE before auth challenge']
        },
        {
          id: 'info-t2',
          title: 'Mitigation Window',
          category: 'Incident Response SLA',
          statValue: '4-Hour SLA',
          statLabel: 'Emergency Kernel Hotfix',
          trend: 'neutral',
          trendText: 'Mandatory Across 14 Discoms',
          color: 'from-amber-600 to-orange-700',
          details: ['Snort Rule 2026-09 deployed', 'Firmware patch verified', 'Zero rollback failures']
        },
        {
          id: 'info-t3',
          title: 'Network Isolation',
          category: 'Operational Technology',
          statValue: '100% Airgap',
          statLabel: 'OT Ring Separation',
          trend: 'up',
          trendText: 'Modbus & DNP3 Isolated',
          color: 'from-emerald-600 to-teal-700',
          details: ['Physical relay disconnect', 'Certificate pinned links', 'Hardware token MFA enforced']
        }
      ],
      pressReleases: {
        en: {
          headline: 'TECHNICAL ADVISORY: Emergency Security Bulletin for Critical Infrastructure Engineers',
          locationAndDate: 'NEW DELHI — 31 AUGUST 2026',
          openingParagraph: 'NTRO Cyber Forensics unit issues technical mitigation guidelines for SCADA network administrators.',
          bodyParagraphs: [
            'All network engineers managing industrial load dispatch systems are instructed to apply hotfix NTRO-KB2026-09 immediately.',
            'Air-gap all operational technology segments and terminate unverified VPN ingress tunnels.'
          ],
          spokespersonQuote: '"Immediate isolation of OT protocols guarantees continuity of state electrical telemetry."',
          mediaContact: 'soc-response@ntro.gov.in'
        },
        hi: {
          headline: 'तकनीकी परामर्श: महत्वपूर्ण बुनियादी ढांचा इंजीनियरों के लिए सुरक्षा निर्देशिका',
          locationAndDate: 'नई दिल्ली — 31 अगस्त 2026',
          openingParagraph: 'एनटीआरओ ने सीवीई-2026-3841 के संबंध में सभी सबस्टेशन और डिस्कॉम इंजीनियरों के लिए पैच निर्देश जारी किए हैं।',
          bodyParagraphs: ['सभी सबस्टेशन इंजीनियर तुरंत हॉटफिक्स लागू करें।'],
          spokespersonQuote: '"प्रोटोकॉल एयर-गैपिंग से पावर ग्रिड पूरी तरह सुरक्षित रहेगा."',
          mediaContact: 'soc-response@ntro.gov.in'
        },
        kn: {
          headline: 'ತಾಂತ್ರಿಕ ಎಚ್ಚರಿಕೆ: ನೆಟ್‌ವರ್ಕ್ ಎಂಜಿನಿಯರ್‌ಗಳಿಗೆ ತುರ್ತು ಭದ್ರತಾ ಪ್ರೋಟೋಕಾಲ್',
          locationAndDate: 'ಬೆಂಗಳೂರು / ನವದೆಹಲಿ — 31 ಆಗಸ್ಟ್ 2026',
          openingParagraph: 'SCADA ನೆಟ್‌ವರ್ಕ್‌ಗಳಲ್ಲಿ CVE-2026-3841 ತಡೆಗಟ್ಟಲು ತಕ್ಷಣವೇ ಫೈರ್‌ವಾಲ್ ಪ್ಯಾಚ್ ಅಳವಡಿಸಲು ಸೂಚಿಸಲಾಗಿದೆ.',
          bodyParagraphs: ['ಎಲ್ಲಾ ಇಂಜಿನಿಯರ್‌ಗಳು ತಕ್ಷಣ ನೆಟ್‌ವರ್ಕ್ ಪ್ರತ್ಯೇಕತೆ ಪಾಲಿಸಿ.'],
          spokespersonQuote: '"ತಾಂತ್ರಿಕ ಭದ್ರತೆಯಿಂದಾಗಿ ಗ್ರಿಡ್ ಕಾರ್ಯಕ್ಷಮತೆ ಸುರಕ್ಷಿತವಾಗಿದೆ."',
          mediaContact: 'soc-response@ntro.gov.in'
        },
        ta: {
          headline: 'தொழில்நுட்ப எச்சரிக்கை: கணினி பொறியாளர்களுக்கான பாதுகாப்பு நெறிமுறைகள்',
          locationAndDate: 'சென்னை / புது தில்லி — 31 ஆகஸ்ட் 2026',
          openingParagraph: 'மின்னழுத்த பகிர்வு மையங்களில் ஃபயர்வால்களை உடனடியாக புதுப்பிக்க தொழில்நுட்ப வழிகாட்டல்கள்.',
          bodyParagraphs: ['தொழில்நுட்ப நெட்வொர்க்குகளை உடனடியாக தனிமைப்படுத்துங்கள்.'],
          spokespersonQuote: '"பாதுகாப்பு நெறிமுறைகள் மின் விநியோகத்தை உறுதி செய்கின்றன."',
          mediaContact: 'soc-response@ntro.gov.in'
        }
      },
      audioPodcast: {
        title: 'SOC Tactical Brief: Forensic Breakdown & Protocol Patching',
        duration: '01:00',
        audioUrl: './OmniTransform_AI_Briefing_josh.m4a',
        script: 'Technical security bulletin for network operators: Zero-day CVE-2026-3841 exploits VPN session heap caches. Enforce Snort rule 2026-09 and isolate DNP3 loops immediately.',
        segments: [
          { timeOffset: '00:00', speaker: 'Josh / SOC Commander', text: 'CVE-2026-3841 buffer overflow detected on perimeter gateway controllers.' },
          { timeOffset: '00:25', speaker: 'Josh / SOC Commander', text: 'All 14 regional Discoms must enforce physical air-gapping on Modbus loops.' }
        ]
      }
    };
  }

  if (persona === 'citizen') {
    // PUBLIC PERSONA
    return {
      id: `trans-${docId}-citizen`,
      documentTitle: isDrone ? 'National Strategy for Autonomous AI Drones (Public Summary)' : 'National Cyber Safety Alert: Public Utility Guidance',
      sourcePageCount: isDrone ? 42 : 54,
      processingTimeMs: 4900,
      persona: 'citizen',
      citations: [
        {
          id: 'cit-1',
          pageNumber: 2,
          lineNumber: 'Lines 10-14',
          sourceText: 'National public awareness guidelines for uninterrupted electricity utility services and verified consumer portals.',
          contextSnippet: 'National public awareness guidelines for uninterrupted electricity utility services and verified consumer portals.',
          boundingBox: [40, 120, 520, 200]
        }
      ],
      executiveMemo: {
        title: isDrone ? 'PUBLIC OVERVIEW: SOVEREIGN DEFENSE DRONE INITIATIVE' : 'PUBLIC ADVISORY & CITIZEN SAFETY BULLETIN',
        organization: 'Government of India · National Citizen Cyber Awareness',
        date: '31 August 2026',
        classification: 'UNCLASSIFIED // FOR GENERAL PUBLIC',
        executiveSummary: 'National awareness advisory ensuring citizen safety, uninterrupted power supply, and verified government utility portals.',
        keyFindings: [
          { point: 'All state electricity grids and public utility services remain safe, robust, and fully operational.', citationId: 'cit-1', impactLevel: 'Medium' },
          { point: 'Citizens are advised to pay utility bills only through verified official state electricity board websites.', citationId: 'cit-1', impactLevel: 'High' },
          { point: 'Beware of fraudulent SMS messages asking for bill payment or app downloads; report scams to Helpline 1930.', citationId: 'cit-1', impactLevel: 'Critical' }
        ],
        actionItems: [
          { priority: 'Citizen Safety', action: 'Never share OTP or banking passwords with anyone claiming to be electricity department staff.', owner: 'All Citizens' },
          { priority: 'Digital Hygiene', action: 'Download utility apps only from official Google Play Store and Apple App Store links.', owner: 'All Citizens' },
          { priority: 'Helpline 1930', action: 'Call National Cyber Crime Helpline 1930 immediately if you suspect unauthorized payment links.', owner: 'Public Helpdesk' }
        ]
      },
      slideDeck: [
        {
          slideNumber: 1,
          title: 'Citizen Safety & Power Grid Continuity',
          subtitle: 'National Public Awareness Campaign',
          bullets: [
            'Electricity distribution is continuous with zero disruption to residential homes',
            'Official state discoms never send bill payment links via private SMS or WhatsApp',
            'Report suspicious scam messages directly to national portal cybercrime.gov.in'
          ],
          keyMetric: { value: '100% Safe', label: 'Public Power Supply Status' },
          notes: 'Stay alert, use official discom portals, and protect your digital payments.'
        }
      ],
      infographics: [
        {
          id: 'info-c1',
          title: 'National Cyber Helpline',
          category: 'Citizen Assistance',
          statValue: '1930',
          statLabel: '24/7 Toll-Free Helpline',
          trend: 'up',
          trendText: 'Instant Fraud Assistance',
          color: 'from-blue-600 to-indigo-700',
          details: ['Toll-free across all states', 'Immediate transaction freeze', 'Multilingual support']
        },
        {
          id: 'info-c2',
          title: 'Power Grid Status',
          category: 'Public Infrastructure',
          statValue: '100% Active',
          statLabel: 'Zero Residential Outage',
          trend: 'up',
          trendText: 'Continuous Power Supply',
          color: 'from-emerald-600 to-teal-700',
          details: ['All state discoms active', 'Protected telemetry systems', 'Continuous voltage balance']
        },
        {
          id: 'info-c3',
          title: 'Bill Payment Protocol',
          category: 'Digital Security',
          statValue: '0 SMS Links',
          statLabel: 'Official Portals Only',
          trend: 'neutral',
          trendText: 'Never Click Unknown Links',
          color: 'from-amber-600 to-orange-700',
          details: ['Verify website URL', 'Use official electricity app', 'Never share bank OTP']
        }
      ],
      pressReleases: {
        en: {
          headline: 'CITIZEN ADVISORY: Government Assures Safe, Uninterrupted Power Supply',
          locationAndDate: 'NEW DELHI — 31 AUGUST 2026',
          openingParagraph: 'Ministry of Power and NTRO assure all citizens that public utilities are protected with 24/7 sovereign cyber defense.',
          bodyParagraphs: [
            'All state power grids are operating normally with zero disruption to consumers.',
            'Citizens should disregard fake SMS alerts claiming power cuts for unpaid bills and report them to Helpline 1930.'
          ],
          spokespersonQuote: '"Our national utility systems are continuously safeguarded for every Indian home."',
          mediaContact: 'citizen-safety@gov.in'
        },
        hi: {
          headline: 'नागरिक परामर्श: सरकार का आश्वासन — निर्बाध और सुरक्षित बिजली आपूर्ति',
          locationAndDate: 'नई दिल्ली — 31 अगस्त 2026',
          openingParagraph: 'सभी नागरिकों को सूचित किया जाता है कि बिजली ग्रिड सुरक्षित हैं। बिजली बिल का भुगतान केवल आधिकारिक पोर्टल पर ही करें।',
          bodyParagraphs: ['फर्जी एसएमएस से सावधान रहें और 1930 पर संपर्क करें।'],
          spokespersonQuote: '"नागरिकों की सुविधा और सुरक्षा हमारी सर्वोच्च प्राथमिकता है."',
          mediaContact: 'citizen-safety@gov.in'
        },
        kn: {
          headline: 'ಸಾರ್ವಜನಿಕ ಪ್ರಕಟಣೆ: ನಿರಂತರ ಮತ್ತು ಸುರಕ್ಷಿತ ವಿದ್ಯುತ್ ಸೇವೆಗಳ ಭರವಸೆ',
          locationAndDate: 'ಬೆಂಗಳೂರು — 31 ಆಗಸ್ಟ್ 2026',
          openingParagraph: 'ಎಲ್ಲಾ ಸಾರ್ವಜನಿಕರಿಗೆ ಮಾಹಿತಿ: ವಿದ್ಯುತ್ ಬಿಲ್ ಪಾವತಿಗಾಗಿ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು ಮಾತ್ರ ಬಳಸಿ. ವಂಚನೆ ಸಂದೇಶಗಳ ಬಗ್ಗೆ ಎಚ್ಚರವಿರಲಿ.',
          bodyParagraphs: ['ಯಾವುದೇ ಅಪರಿಚಿತ ಲಿಂಕ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ.'],
          spokespersonQuote: '"ವಿದ್ಯುತ್ ಸರಬರಾಜು ಯಾವುದೇ ಅಡೆತಡೆಯಿಲ್ಲದೆ ಮುಂದುವರಿಯುತ್ತದೆ."',
          mediaContact: 'citizen-safety@gov.in'
        },
        ta: {
          headline: 'பொது அறிவிப்பு: தடையற்ற மற்றும் பாதுகாப்பான மின் விநியோக உறுதி',
          locationAndDate: 'சென்னை — 31 ஆகஸ்ட் 2026',
          openingParagraph: 'மின் கட்டணங்களை அதிகாரப்பூர்வ அரசு இணையதளங்கள் மூலமாக மட்டுமே செலுத்துங்கள். சந்தேகத்திற்கிடமான இணைப்புகளை கிளிக் செய்யாதீர்கள்.',
          bodyParagraphs: ['தேசிய உதவி எண் 1930-ஐ தொடர்பு கொள்ளவும்.'],
          spokespersonQuote: '"பொதுமக்கள் அமைதியாகவும் விழிப்புடனும் இருக்குமாறு கேட்டுக்கொள்ளப்படுகிறார்கள்."',
          mediaContact: 'citizen-safety@gov.in'
        }
      },
      audioPodcast: {
        title: 'National Citizen Bulletin: Safe Digital Utility Practices',
        duration: '00:45',
        audioUrl: './OmniTransform_AI_Briefing_bella.m4a',
        script: 'This is a national citizen safety alert: State power supplies are 100% operational and protected. Pay electricity bills only on official state websites, and report fraud to helpline 1930.',
        segments: [
          { timeOffset: '00:00', speaker: 'Bella / Public Outreach', text: 'National citizen safety advisory: Power supplies across all states are 100% operational.' },
          { timeOffset: '00:20', speaker: 'Bella / Public Outreach', text: 'Always pay utility bills directly on verified government electricity portals.' }
        ]
      }
    };
  }

  // DEFAULT: EXECUTIVE PERSONA
  return {
    id: `trans-${docId}-executive`,
    documentTitle: isDrone ? 'National Strategy for Autonomous AI Drones & Border Reconnaissance' : 'NTRO Critical Infrastructure Cyber Threat Advisory (Q3 2026)',
    sourcePageCount: isDrone ? 42 : 54,
    processingTimeMs: 6420,
    persona: 'executive',
    citations: [
      {
        id: 'cit-1',
        pageNumber: 4,
        lineNumber: 'Lines 12-16',
        sourceText: 'NTRO intelligence units recorded a 42.8% surge in coordinated ransomware vectors targeting state-level SCADA infrastructure in Q3 2026.',
        contextSnippet: 'NTRO intelligence units recorded a 42.8% surge in coordinated ransomware vectors targeting state-level SCADA infrastructure in Q3 2026.',
        boundingBox: [45, 140, 510, 200]
      },
      {
        id: 'cit-2',
        pageNumber: 11,
        lineNumber: 'Lines 32-38',
        sourceText: 'Emergency resource allocation of ₹14.8M approved under the National Cyber Resilience Directive for critical telemetry switch air-gapping.',
        contextSnippet: 'Emergency resource allocation of ₹14.8M approved under the National Cyber Resilience Directive for critical telemetry switch air-gapping.',
        boundingBox: [55, 290, 515, 360]
      },
      {
        id: 'cit-3',
        pageNumber: 18,
        lineNumber: 'Lines 5-9',
        sourceText: 'Three major maritime container terminals recorded intermittent telemetry disruptions attributed to APT-44 persistence scripts.',
        contextSnippet: 'Three major maritime container terminals recorded intermittent telemetry disruptions attributed to APT-44 persistence scripts.',
        boundingBox: [50, 80, 480, 140]
      }
    ],
    executiveMemo: {
      title: isDrone ? 'EXECUTIVE STRATEGY: SOVEREIGN EDGE AI DRONE DEFENSE' : 'EXECUTIVE STRATEGIC ADVISORY: Q3 2026 CRITICAL INFRASTRUCTURE DEFENSE',
      organization: isDrone ? 'Ministry of Defence · Defence Innovation' : 'National Technical Research Organisation (NTRO)',
      date: '31 August 2026',
      classification: 'CONFIDENTIAL // TIER-1 EXECUTIVE BRIEF',
      executiveSummary: isDrone
        ? 'High-level defense directive mandating sovereign edge-AI computer vision on lightweight UAV swarms with tactical mesh communications.'
        : 'Coordinated ransomware threat targeting state-level power distribution switches (Discoms) and port telemetry systems, requiring immediate board-level governance and emergency capital allocation.',
      keyFindings: [
        { point: '42.8% surge in coordinated ransomware vectors targeting state-level SCADA infrastructure in Q3 2026.', citationId: 'cit-1', impactLevel: 'Critical' },
        { point: 'Emergency resource allocation of ₹14.8M approved under the National Cyber Resilience Directive for critical telemetry switch air-gapping.', citationId: 'cit-2', impactLevel: 'High' },
        { point: 'Three major maritime container terminals recorded intermittent telemetry disruptions attributed to APT-44 persistence scripts.', citationId: 'cit-3', impactLevel: 'High' }
      ],
      actionItems: [
        { priority: 'P0 - Immediate', action: 'Direct state Discom CISOs to enforce immediate protocol air-gapping between enterprise IT and OT telemetry switches.', owner: 'National Grid Authority' },
        { priority: 'P0 - Immediate', action: 'Mobilize ₹14.8M emergency capital allocation for hardware telemetry switch hardening and certificate pinning.', owner: 'Finance & Infrastructure' },
        { priority: 'P1 - 48 Hours', action: 'Mandate sovereign AI document triage deployment to eliminate cross-department communication bottlenecks.', owner: 'NTRO Operations' }
      ]
    },
    slideDeck: [
      {
        slideNumber: 1,
        title: 'Strategic Briefing: Threat Context & Mandate',
        subtitle: 'National Cyber Resilience Directive — Q3 2026',
        bullets: [
          'State-level SCADA distribution switches subjected to targeted APT-44 ransomware campaigns',
          'Immediate board-level intervention mandated by National Technical Research Organisation',
          'Sovereign AI document transformation deployed for real-time stakeholder synchronization'
        ],
        keyMetric: { value: '+42.8%', label: 'SCADA Threat Vector Surge' },
        notes: 'Executive focus: Secure critical infrastructure and ensure zero grid transmission downtime.'
      },
      {
        slideNumber: 2,
        title: 'Resource Allocation & Containment Architecture',
        subtitle: 'Emergency Capital & Protocol Enforcement',
        bullets: [
          '₹14.8M emergency capital unlocked for immediate switch air-gapping and certificate pinning',
          '14 regional load dispatch centers successfully isolated under reinforced security perimeter',
          'Multi-lingual citizen advisories broadcast across 4 regional languages to eliminate panic'
        ],
        keyMetric: { value: '₹14.8M', label: 'Authorized Emergency Fund' },
        notes: 'Inter-agency coordination between NTRO, CERT-In, and Ministry of Power fully operational.'
      }
    ],
    infographics: [
      {
        id: 'info-1',
        title: 'Threat Vector Surge',
        category: 'Intelligence Analysis',
        statValue: '+42.8%',
        statLabel: 'Coordinated Ransomware Vectors',
        trend: 'up',
        trendText: 'Q3 2026 vs Q2 2026 baseline',
        color: 'from-rose-500 to-red-600',
        details: ['State-level SCADA switches targeted', '14 regional Discoms affected', 'Containment verified within 4 hours']
      },
      {
        id: 'info-2',
        title: 'Emergency Allocation',
        category: 'Capital Mobilization',
        statValue: '₹14.8M',
        statLabel: 'Approved Defense Budget',
        trend: 'up',
        trendText: 'National Cyber Resilience Directive',
        color: 'from-emerald-500 to-teal-600',
        details: ['Telemetry switch air-gapping', 'Hardware token MFA enforcement', 'Substation perimeter isolation']
      },
      {
        id: 'info-3',
        title: 'Grid Stability',
        category: 'Operational Continuity',
        statValue: '100%',
        statLabel: 'National Power Transmission Uptime',
        trend: 'neutral',
        trendText: 'Zero outages reported nationwide',
        color: 'from-blue-500 to-indigo-600',
        details: ['Continuous telemetry monitoring', 'Sovereign AI parsing deployed', 'Multi-lingual citizen outreach live']
      }
    ],
    pressReleases: {
      en: {
        headline: 'NTRO Issues Cyber Resilience Directive for National Power Infrastructure Protection',
        locationAndDate: 'NEW DELHI — 31 AUGUST 2026',
        openingParagraph: 'The National Technical Research Organisation (NTRO) has released an executive cyber threat advisory directing immediate resilience measures across state-level power distribution networks and critical maritime terminals.',
        bodyParagraphs: [
          'Intelligence assessments confirmed that threat actors targeted vulnerable access gateway controllers in an attempt to establish unauthorized persistence within operational technology segments.',
          'NTRO, in coordination with CERT-In and power grid operators, has activated containment and isolation protocols across 14 identified regional dispatch centers.',
          'Grid transmission and public power supply operations remain fully stable under reinforced national security defense parameters.'
        ],
        spokespersonQuote: '"Our priority remains the absolute resilience of national infrastructure with continuous uptime and strict data integrity."',
        mediaContact: 'National Cyber Communications Desk, NTRO (media@ntro.gov.in)'
      },
      hi: {
        headline: 'एनटीआरओ ने राष्ट्रीय विद्युत बुनियादी ढांचे के लिए साइबर सुरक्षा निर्देश जारी किया',
        locationAndDate: 'नई दिल्ली — 31 अगस्त 2026',
        openingParagraph: 'राष्ट्रीय तकनीकी अनुसंधान संगठन (NTRO) ने देश के महत्वपूर्ण बिजली वितरण नेटवर्क और बुनियादी ढांचे की सुरक्षा के लिए तत्काल साइबर सुरक्षा निर्देश जारी किए हैं।',
        bodyParagraphs: [
          'तकनीकी जांच में नेटवर्क गेटवे में अनाधिकृत पहुंच के प्रयासों की पहचान की गई, जिसे समय रहते रोक दिया गया है।',
          'एनटीआरओ और सीईआरटी-इन ने 14 चिन्हित क्षेत्रीय केंद्रों में सुरक्षा प्रोटोकॉल लागू कर दिए हैं।',
          'विद्युत आपूर्ति पूरी तरह सुरक्षित है और सभी सुरक्षा उपाय सक्रिय हैं।'
        ],
        spokespersonQuote: '"राष्ट्रीय बुनियादी ढांचे की सुरक्षा हमारी सर्वोच्च प्राथमिकता है।"',
        mediaContact: 'मीडिया सेल, एनटीआरओ'
      },
      kn: {
        headline: 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯುತ್ ಮೂಲಸೌಕರ್ಯ ರಕ್ಷಣೆಗಾಗಿ ಎನ್‌ಟಿಆರ್‌ಒ ಭದ್ರತಾ ಮಾರ್ಗಸೂಚಿ ಪ್ರಕಟಣೆ',
        locationAndDate: 'ನವದೆಹಲಿ — 31 ಆಗಸ್ಟ್ 2026',
        openingParagraph: 'ರಾಷ್ಟ್ರೀಯ ತಾಂತ್ರಿಕ ಸಂಶೋಧನಾ ಸಂಸ್ಥೆ (NTRO) ಪ್ರಮುಖ ವಿದ್ಯುತ್ ವಿತರಣಾ ಕೇಂದ್ರಗಳ ಸುರಕ್ಷತೆಗಾಗಿ ತುರ್ತು ಸೈಬರ್ ಭದ್ರತಾ ಮಾರ್ಗಸೂಚಿಯನ್ನು ಪ್ರಕಟಿಸಿದೆ.',
        bodyParagraphs: [
          'ನೆಟ್‌ವರ್ಕ್ ಗೇಟ್‌ವೇ ಭದ್ರತೆಯನ್ನು ಬಲಪಡಿಸಲು ಎಲ್ಲಾ ವಿದ್ಯುತ್ ಕಂಪನಿಗಳಿಗೆ ತಕ್ಷಣದ ಸೂಚನೆ ನೀಡಲಾಗಿದೆ.',
          'ಗುರುತಿಸಲಾದ 14 ಪ್ರಮುಖ ಕೇಂದ್ರಗಳಲ್ಲಿ ರಕ್ಷಣಾ ಕ್ರಮಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಳವಡಿಸಲಾಗಿದೆ.',
          'ವಿದ್ಯುತ್ ಸರಬರಾಜು ಸಂಪೂರ್ಣವಾಗಿ ಸುಸ್ಥಿರವಾಗಿದ್ದು, ಅಗತ್ಯ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳನ್ನು ವಹಿಸಲಾಗಿದೆ.'
        ],
        spokespersonQuote: '"ರಾಷ್ಟ್ರೀಯ ಮೂಲಸೌಕರ್ಯದ ಭದ್ರತೆಯೇ ನಮ್ಮ ಪ್ರಮುಖ ಆದ್ಯತೆ."',
        mediaContact: 'ಮಾಧ್ಯಮ ವಿಭಾಗ, ಎನ್‌ಟಿಆರ್‌ಒ'
      },
      ta: {
        headline: 'தேசிய மின் உள்கட்டமைப்பு பாதுகாப்புக்கான என்டிஆர்ஓ அவசர வழிகாட்டுதல்',
        locationAndDate: 'புது தில்லி — 31 ஆகஸ்ட் 2026',
        openingParagraph: 'தேசிய தொழில்நுட்ப ஆராய்ச்சி அமைப்பு (NTRO) நாட்டின் முக்கிய மின் விநியோக மையங்களுக்கான அவசர சைபர் பாதுகாப்பு வழிகாட்டுதலை வெளியிட்டுள்ளது.',
        bodyParagraphs: [
          'நெட்வொர்க் நுழைவாயில்களின் பாதுகாப்பை உறுதி செய்ய அனைத்து மின் நிறுவனங்களுக்கும் அறிவுறுத்தப்பட்டுள்ளது.',
          '14 முக்கிய மையங்களில் பாதுகாப்பு நடவடிக்கைகள் முழுமையாக செயல்படுத்தப்பட்டுள்ளன.',
          'மின் விநியோக அமைப்புகள் முழுமையான பாதுகாப்பில் இயங்கி வருகின்றன.'
        ],
        spokespersonQuote: '"தேசிய உள்கட்டமைப்பின் பாதுகாப்பே எங்கள் முதன்மை நோக்கம்."',
        mediaContact: 'ஊடக பிரிவு, என்டிஆர்ஓ'
      }
    },
    audioPodcast: {
      title: 'Strategic Briefing: Why OmniTransform AI Was Built',
      duration: '01:00',
      audioUrl: './OmniTransform_AI_ElevenLabs_Briefing.m4a',
      script: 'Welcome to OmniTransform AI, engineered by HRL for the Smart India Hackathon 2026 and the National Technical Research Organisation. Why was this platform built? In modern defense and governance, organizations receive fifty to one hundred-page complex technical advisories daily. Senior leaders need two-minute decision briefs, field operatives need slide presentations, citizens need news in their native regional languages, and analysts need audio broadcasts. Manually converting these documents takes days and creates dangerous information bottlenecks. OmniTransform AI solves this with sovereign single-pass AI: transforming any multi-page document into five synchronized, verified formats in under ten seconds with one hundred percent grounded source citations. This is sovereign intelligence transformation, engineered without compromise.',
      segments: [
        { timeOffset: '00:00 - 00:14', speaker: 'Executive Lead', text: 'Strategic mission overview: Why OmniTransform AI was engineered by HRL for NTRO and SIH 2026.' },
        { timeOffset: '00:14 - 00:30', speaker: 'Intelligence Director', text: 'The Critical Problem: 50-100 page technical reports create massive decision bottlenecks across leadership, technical operators, and regional media.' },
        { timeOffset: '00:30 - 00:46', speaker: 'System Architect', text: 'The Solution: Sovereign single-pass AI transforming complex documents into 5 synchronized assets with 100% grounded citations in under 10s.' },
        { timeOffset: '00:46 - 01:00', speaker: 'Executive Lead', text: 'The Impact: Zero hallucinations, instant multilingual distribution, and verified sovereign data security.' }
      ]
    }
  };
}

export const MOCK_TRANSFORMATIONS: Record<string, TransformedOutput> = {
  'ntro-advisory-2026': getPersonaTransformedOutput('ntro-advisory-2026', 'executive'),
  'ai-drone-policy-2026': getPersonaTransformedOutput('ai-drone-policy-2026', 'executive')
};
