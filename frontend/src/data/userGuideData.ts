export interface GuideStep {
  stepNumber: number;
  title: string;
  description: string;
  tip: string;
  uiTarget: string;
}

export interface LanguageVoiceGuide {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  title: string;
  subtitle: string;
  fullScript: string;
  voiceId: string;
  steps: GuideStep[];
}

export const MULTILINGUAL_VOICE_GUIDES: Record<string, LanguageVoiceGuide> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    title: 'Platform Master Walkthrough',
    subtitle: 'Step-by-step voice guidance for multi-format content engineering.',
    voiceId: '21m00Tcm4TlvDq8ikWAM',
    fullScript: 'Welcome to OmniTransform AI! [cheerfully] This sovereign platform converts complex technical advisories into five synchronized formats in under 10 seconds. [whispers] First, select a sample document or upload your own PDF. Next, choose your target audience: Executive, Technical, or Public. Click "Transform Document Now" to initiate the single-pass neural pipeline. Explore the Executive Memo, Keynote Slides, Bento Infographics, Indic Press Bulletins, and Voice Podcast. [clearly] Every single finding is backed by 100% verifiable source citations with bounding-box coordinates.',
    steps: [
      {
        stepNumber: 1,
        title: 'Select or Upload Document',
        description: 'Choose from preset NTRO and MoE technical advisories, or upload your own PDF report.',
        tip: 'Supports multi-page technical documents up to 50+ pages.',
        uiTarget: 'Document Ingestion Section'
      },
      {
        stepNumber: 2,
        title: 'Select Audience Persona',
        description: 'Use the top navigation pills to tune tone: Executive (high-level), Technical (in-depth), or Public (accessible).',
        tip: 'Re-tunes content instantly without re-reading the document.',
        uiTarget: 'Audience Persona Strip'
      },
      {
        stepNumber: 3,
        title: 'Trigger Single-Pass Neural Engine',
        description: 'Click "Transform Document Now" to run structured parsing, OCR bounding, and 5-format generation.',
        tip: 'Pipeline completes in under 10 seconds with sub-second step telemetry.',
        uiTarget: 'Pipeline Visualizer'
      },
      {
        stepNumber: 4,
        title: 'Inspect 5 Synchronized Formats',
        description: 'Switch between 1. Executive Memo, 2. Meeting Slides, 3. Infographics, 4. Regional News, and 5. Voice AI.',
        tip: 'All formats are 100% grounded in source text.',
        uiTarget: 'Output Dashboard Tabs'
      },
      {
        stepNumber: 5,
        title: 'Verify Grounded Citations & Live Voice AI',
        description: 'Click citation badges (e.g. [p.3:12]) to inspect coordinate proofs, and use the ElevenLabs Studio to test speech.',
        tip: 'Test emotional tags like [whispers] and [sarcastically] in the Voice Studio.',
        uiTarget: 'Citation Inspector & Voice Studio'
      }
    ]
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    title: 'प्लेटफ़ॉर्म उपयोग मार्गदर्शिका',
    subtitle: 'ओमनीट्रांसफॉर्म एआई का उपयोग करने के लिए संपूर्ण स्वर निर्देश।',
    voiceId: 'NOpBlnGInO9m6vDvFkFC',
    fullScript: 'ओमनीट्रांसफॉर्म एआई में आपका स्वागत है! [cheerfully] यह स्वदेशी प्लेटफॉर्म 50 से अधिक पृष्ठों के तकनीकी दस्तावेजों को केवल 10 सेकंड में 5 प्रारूपों में बदल देता है। [whispers] सबसे पहले, एक दस्तावेज़ चुनें या अपनी पीडीएफ फाइल अपलोड करें। फिर दर्शक चुनें: कार्यकारी, तकनीकी या नागरिक। "ट्रांसफॉर्म डॉक्यूमेंट" पर क्लिक करें। इसके बाद मेमो, स्लाइड्स, इन्फोग्राफिक्स, 4 भारतीय भाषाओं में प्रेस विज्ञप्ति और वॉयस पॉडकास्ट देखें। [clearly] प्रत्येक तथ्य 100% सत्यापित संदर्भों से प्रमाणित है।',
    steps: [
      {
        stepNumber: 1,
        title: 'दस्तावेज़ चुनें या अपलोड करें',
        description: 'एनटीआरओ या शिक्षा मंत्रालय के तकनीकी दस्तावेजों में से चुनें या अपना पीडीएफ अपलोड करें।',
        tip: '50 से अधिक पृष्ठों के जटिल दस्तावेजों का समर्थन करता है।',
        uiTarget: 'दस्तावेज़ अपलोड अनुभाग'
      },
      {
        stepNumber: 2,
        title: 'दर्शक वर्ग चुनें',
        description: 'कार्यकारी (Executive), विश्लेषक (Analyst), या जनसाधारण (Citizen) में से उपयुक्त विकल्प चुनें।',
        tip: 'दस्तावेज़ की भाषा और गहराई को तुरंत अनुकूलित करता है।',
        uiTarget: 'ऑडियंस चयन बार'
      },
      {
        stepNumber: 3,
        title: 'एआई रूपांतरण प्रारंभ करें',
        description: '"Transform Document Now" बटन दबाकर 10 सेकंड में 5 प्रारूप तैयार करें।',
        tip: 'रीयल-टाइम विज़ुअलाइज़र में प्रत्येक चरण की प्रगति देखें।',
        uiTarget: 'पाइपलाइन विज़ुअलाइज़र'
      },
      {
        stepNumber: 4,
        title: '5 आउटपुट प्रारूप देखें',
        description: 'एग्जीक्यूटिव मेमो, प्रेजेंटेशन स्लाइड्स, इन्फोग्राफिक्स, क्षेत्रीय समाचार और ऑडियो पॉडकास्ट देखें।',
        tip: 'सभी 5 प्रारूप एक साथ स्वचालित रूप से तैयार होते हैं।',
        uiTarget: 'आउटपुट डैशबोर्ड'
      },
      {
        stepNumber: 5,
        title: 'प्रमाणित संदर्भ और वॉयस एआई',
        description: 'सटीक पृष्ठ और पंक्ति संदर्भों की जांच करें और इलेवनलैब्स वॉयस स्टूडियो का उपयोग करें।',
        tip: 'इलेवनलैब्स SDK से सीधे लाइव भाषण उत्पन्न करें।',
        uiTarget: 'साइटेशन और वॉयस स्टूडियो'
      }
    ]
  },
  kn: {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    flag: '🇮🇳',
    title: 'ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಬಳಕೆ ಮಾರ್ಗದರ್ಶಿ',
    subtitle: 'ಓಮ್ನಿಟ್ರಾನ್ಸ್‌ಫಾರ್ಮ್ AI ಬಳಸುವ ಬಗೆಗಿನ ಸಂಪೂರ್ಣ ಧ್ವನಿ ವಿವರಣೆ.',
    voiceId: 'pNInz6obpgDQGcFmaJgB',
    fullScript: 'ಓಮ್ನಿಟ್ರಾನ್ಸ್‌ಫಾರ್ಮ್ AI ಗೆ ಸುಸ್ವಾಗತ! [cheerfully] ಈ ವೇದಿಕೆಯು ಕೇವಲ 10 ಸೆಕೆಂಡುಗಳಲ್ಲಿ ದೊಡ್ಡ ತಾಂತ್ರಿಕ ದಾಖಲೆಗಳನ್ನು 5 ವಿವಿಧ ರೂಪಗಳಿಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ. [whispers] ಮೊದಲು ಒಂದು ಮಾದರಿ ದಾಖಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ನಿಮ್ಮ ಪಿಡಿಎಫ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ನಂತರ ನಿಮ್ಮ ಪ್ರೇಕ್ಷಕರನ್ನು ಆಯ್ಕೆಮಾಡಿ: ಕಾರ್ಯನಿರ್ವಾಹಕ, ತಾಂತ್ರಿಕ ಅಥವಾ ಸಾರ್ವಜನಿಕ. "ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮ್ ಡಾಕ್ಯುಮೆಂಟ್" ಕ್ಲಿಕ್ ಮಾಡಿ. ಮೆಮೊ, ಸ್ಲೈಡ್‌ಗಳು, ಇನ್‌ಫೋಗ್ರಾಫಿಕ್ಸ್, ಕನ್ನಡ ಪತ್ರಿಕಾ ಪ್ರಕಟಣೆ ಮತ್ತು ವಾಯ್ಸ್ ಪಾಡ್‌ಕ್ಯಾಸ್ಟ್ ಅನ್ನು ವೀಕ್ಷಿಸಿ. [clearly] ಪ್ರತಿಯೊಂದು ಮಾಹಿತಿಯು ಮೂಲ ಪುಟದ ನಿಖರ ಉಲ್ಲೇಖಗಳೊಂದಿಗೆ ದೃಢೀಕರಿಸಲ್ಪಟ್ಟಿದೆ.',
    steps: [
      {
        stepNumber: 1,
        title: 'ದಾಖಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
        description: 'ಲಭ್ಯವಿರುವ NTRO ವರದಿಗಳನ್ನು ಆರಿಸಿ ಅಥವಾ ನಿಮ್ಮ ಸ್ವಂತ ತಾಂತ್ರಿಕ PDF ಕಡತವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
        tip: '50 ಕ್ಕೂ ಹೆಚ್ಚು ಪುಟಗಳ ಸಂಕೀರ್ಣ ದಾಖಲೆಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.',
        uiTarget: 'ದಾಖಲೆ ವಿಭಾಗ'
      },
      {
        stepNumber: 2,
        title: 'ಪ್ರೇಕ್ಷಕರ ಗುಂಪನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        description: 'ಕಾರ್ಯನಿರ್ವಾಹಕ (Executive), ತಾಂತ್ರಿಕ (Technical) ಅಥವಾ ಸಾರ್ವಜನಿಕ (Public) ಆಯ್ಕೆಮಾಡಿ.',
        tip: 'ವಿಷಯದ ಶೈಲಿಯನ್ನು ತಕ್ಷಣವೇ ಬದಲಾಯಿಸುತ್ತದೆ.',
        uiTarget: 'ಆಡಿಯನ್ಸ್ ಸೆಲೆಕ್ಟರ್'
      },
      {
        stepNumber: 3,
        title: 'ರೂಪಾಂತರ ಪ್ರಕ್ರಿಯೆ ಪ್ರಾರಂಭಿಸಿ',
        description: '"Transform Document Now" ಬಟನ್ ಒತ್ತಿ 10 ಸೆಕೆಂಡುಗಳಲ್ಲಿ 5 ರೂಪಗಳನ್ನು ಪಡೆಯಿರಿ.',
        tip: 'ಪ್ರಕ್ರಿಯೆಯ ಹಂತಗಳನ್ನು ಲೈವ್ ಆಗಿ ವೀಕ್ಷಿಸಿ.',
        uiTarget: 'ಪೈಪ್‌ಲೈನ್ ವಿಭಾಗ'
      },
      {
        stepNumber: 4,
        title: '5 ರೂಪಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
        description: 'ಕಾರ್ಯನಿರ್ವಾಹಕ ಮೆಮೊ, ಸ್ಲೈಡ್‌ಗಳು, ಇನ್‌ಫೋಗ್ರಾಫಿಕ್ಸ್, ಕನ್ನಡ ವರದಿ ಮತ್ತು ಧ್ವನಿ ಪಾಡ್‌ಕ್ಯಾಸ್ಟ್.',
        tip: 'ಎಲ್ಲಾ 5 ಮಾಧ್ಯಮಗಳು ಸಿಂಕ್ರೊನೈಸ್ ಆಗಿರುತ್ತವೆ.',
        uiTarget: 'ಔಟ್‌ಪುಟ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್'
      },
      {
        stepNumber: 5,
        title: 'ಉಲ್ಲೇಖಗಳ ಪರಿಶೀಲನೆ & ElevenLabs ಧ್ವನಿ',
        description: 'ಪುಟ ಮತ್ತು ಸಾಲಿನ ಆಧಾರಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಲೈವ್ ಧ್ವನಿ AI ಪರೀಕ್ಷಿಸಿ.',
        tip: 'ElevenLabs SDK ಮೂಲಕ ಲೈವ್ ಆಡಿಯೋ ಉತ್ಪಾದಿಸಿ.',
        uiTarget: 'ಸೈಟೇಶನ್ ಮತ್ತು ಧ್ವನಿ AI'
      }
    ]
  },
  ta: {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    flag: '🇮🇳',
    title: 'பயன்பாட்டு வழிகாட்டி',
    subtitle: 'ஓம்னிட்ரான்ஸ்ஃபார்ம் AI தளத்தை பயன்படுத்துவதற்கான குரல் வழிகாட்டல்.',
    voiceId: 'EXAVITQu4vr4xnSDxMaL',
    fullScript: 'ஓம்னிட்ரான்ஸ்ஃபார்ம் AI-க்கு வரவேற்கிறோம்! [cheerfully] இந்த தளம் சிக்கலான 50 பக்க ஆவணங்களை வெறும் 10 வினாடிகளில் 5 வடிவங்களாக மாற்றுகிறது. [whispers] முதலில் ஒரு ஆவணத்தை தேர்வு செய்யவும் அல்லது உங்கள் PDF கோப்பை பதிவேற்றவும். பின்னர் பார்வையாளர் வகையை தேர்ந்தெடுக்கவும்: நிர்வாகி, தொழில்நுட்பம் அல்லது பொது. "டிரான்ஸ்ஃபார்ம்" பொத்தானை கிளிக் செய்து மெமோ, ஸ்லைடுகள், இன்போகிராபிக்ஸ், தமிழ் செய்தி அறிக்கை மற்றும் குரல் போட்காஸ்ட்டை பெறுங்கள். [clearly] அனைத்து தகவல்களும் 100% மூல ஆவண ஆதாரங்களுடன் சரிபார்க்கப்பட்டவை.',
    steps: [
      {
        stepNumber: 1,
        title: 'ஆவணத்தைத் தேர்ந்தெடுக்கவும் அல்லது பதிவேற்றவும்',
        description: 'மாதிரி NTRO அறிக்கைகளை தேர்ந்தெடுக்கவும் அல்லது உங்கள் PDF கோப்பை பதிவேற்றவும்.',
        tip: 'பல பக்க ஆவணங்களை நொடிகளில் செயலாக்குகிறது.',
        uiTarget: 'ஆவண பதிவேற்ற பகுதி'
      },
      {
        stepNumber: 2,
        title: 'பார்வையாளர் வகையை தேர்வு செய்யவும்',
        description: 'நிர்வாகி (Executive), தொழில்நுட்பம் (Technical) அல்லது பொதுமக்களுக்கான (Public) வடிவத்தை தேர்ந்தெடுக்கவும்.',
        tip: 'உடனடி நடை மாற்றம்.',
        uiTarget: 'பார்வையாளர் பட்டி'
      },
      {
        stepNumber: 3,
        title: 'AI மாற்றத்தை தொடங்கவும்',
        description: '"Transform Document Now" கிளிக் செய்து 10 வினாடிகளில் 5 வெளியீடுகளைப் பெறுங்கள்.',
        tip: 'நேரலை முன்னேற்றக் காட்டி.',
        uiTarget: 'செயல்முறை காட்சி'
      },
      {
        stepNumber: 4,
        title: '5 வெளியீடுகளை ஆராயுங்கள்',
        description: 'நிர்வாக குறிப்பு, விளக்கக்காட்சி ஸ்லைடுகள், வரைபடங்கள், தமிழ் செய்தி மற்றும் குரல் பதிவு.',
        tip: 'முழுமையான ஒருங்கிணைந்த வடிவங்கள்.',
        uiTarget: 'வெளியீட்டு பலகை'
      },
      {
        stepNumber: 5,
        title: 'ஆதார சரிபார்ப்பு & ElevenLabs குரல்',
        description: 'துல்லியமான பக்க ஆதாரங்களை ஆய்வு செய்து, ElevenLabs நேரலை குரல் AI-ஐ பயன்படுத்தவும்.',
        tip: 'ElevenLabs SDK ஆதரவு.',
        uiTarget: 'ஆதாரங்கள் & குரல் கூடம்'
      }
    ]
  },
  te: {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    flag: '🇮🇳',
    title: 'ప్లాట్‌ఫారమ్ గైడ్',
    subtitle: 'ఓమ్నిట్రాన్స్‌ఫార్మ్ AI వినియోగ మార్గదర్శిని.',
    voiceId: 'TxGEqnHWrfWFTfGW9XjX',
    fullScript: 'ఓమ్నిట్రాన్స్‌ఫార్మ్ AI కి స్వాగతం! [cheerfully] ఈ ప్లాట్‌ఫారమ్ సంక్లిష్టమైన సాంకేతిక పత్రాలను కేవలం 10 సెకన్లలో 5 ఫార్మాట్‌లుగా మారుస్తుంది. [whispers] ముందుగా పత్రాన్ని ఎంచుకోండి లేదా మీ PDF ని అప్‌లోడ్ చేయండి. ఎగ్జిక్యూటివ్, టెక్నికల్ లేదా సిటిజెన్ కేటగిరీని ఎంచుకోండి. "ట్రాన్స్‌ఫార్మ్" పై క్లిక్ చేసి మెమో, స్లయిడ్‌లు, ఇన్ఫోగ్రాఫిక్స్ మరియు వాయిస్ పాడ్‌కాస్ట్‌ను పొందండి.',
    steps: [
      {
        stepNumber: 1,
        title: 'పత్రాన్ని ఎంచుకోండి లేదా అప్‌లోడ్ చేయండి',
        description: 'నమూనా NTRO నివేదికలను ఎంచుకోండి లేదా మీ PDFని అప్‌లోడ్ చేయండి.',
        tip: '50+ పేజీల పత్రాలకు మద్దతు.',
        uiTarget: 'డాక్యుమెంట్ విభాగం'
      },
      {
        stepNumber: 2,
        title: 'ప్రేక్షకుల రకాన్ని ఎంచుకోండి',
        description: 'ఎగ్జిక్యూటివ్, టెక్నికల్ లేదా పబ్లిక్ మోడ్ ఎంచుకోండి.',
        tip: 'క్షణాల్లో శైలి మార్పు.',
        uiTarget: 'ఆడియన్స్ బార్'
      },
      {
        stepNumber: 3,
        title: 'రూపాంతరాన్ని ప్రారంభించండి',
        description: '"Transform Document Now" క్లిక్ చేసి 10 సెకన్లలో ఫలితాలు పొందండి.',
        tip: 'లైవ్ ప్రోగ్రెస్ ట్రాకింగ్.',
        uiTarget: 'పైప్‌లైన్ విజువలైజర్'
      },
      {
        stepNumber: 4,
        title: '5 ఫార్మాట్‌లను పరిశీలించండి',
        description: 'మెమో, స్లైడ్‌లు, ఇన్ఫోగ్రాఫిక్స్, ప్రాంతీయ వార్తలు మరియు వాయిస్ AI.',
        tip: 'అన్ని ఫార్మాట్‌లు సమకాలీకరించబడ్డాయి.',
        uiTarget: 'అవుట్‌పుట్ డ్యాష్‌బోర్డ్'
      },
      {
        stepNumber: 5,
        title: 'ఆధారాల ధృవీకరణ & ElevenLabs AI',
        description: 'ఖచ్చితమైన మూల ఆధారాలను తనిఖీ చేయండి మరియు ElevenLabs వాయిస్ టెస్ట్ చేయండి.',
        tip: 'లైవ్ వాయిస్ సింథసిస్.',
        uiTarget: 'సైటేషన్స్ & వాయిస్ స్టూడియో'
      }
    ]
  },
  bn: {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    flag: '🇮🇳',
    title: 'ব্যবহার নির্দেশিকা',
    subtitle: 'অমনিট্রান্সফর্ম এআই প্ল্যাটফর্ম ব্যবহারের অডিও নির্দেশিকা।',
    voiceId: '21m00Tcm4TlvDq8ikWAM',
    fullScript: 'অমনিট্রান্সফর্ম এআই-তে স্বাগতম! [cheerfully] এই প্ল্যাটফর্মটি মাত্র ১০ সেকেন্ডে জটিল কারিগরি নথিগুলিকে ৫টি ভিন্ন বিন্যাসে রূপান্তরিত করে। [whispers] প্রথমে একটি নথি নির্বাচন করুন বা আপনার নিজস্ব পিডিএফ আপলোড করুন। দর্শক নির্বাচন করুন এবং "ট্রান্সফর্ম" ক্লিক করুন। মেমো, স্লাইড, ইনফোগ্রাফিক্স, এবং ভয়েস পডকাস্ট এক্সপ্লোর করুন। [clearly] প্রতিটি তথ্য ১০০% যাচাইকৃত তথ্যের ভিত্তিতে প্রস্তুত।',
    steps: [
      {
        stepNumber: 1,
        title: 'নথি নির্বাচন বা আপলোড করুন',
        description: 'প্রস্তুত নথি নির্বাচন করুন অথবা আপনার পিডিএফ ফাইল আপলোড করুন।',
        tip: '৫০+ পৃষ্ঠার নথির জন্য উপযুক্ত।',
        uiTarget: 'নথি আপলোড অংশ'
      },
      {
        stepNumber: 2,
        title: 'দর্শক বিভাগ নির্বাচন করুন',
        description: 'এক্সিকিউটিভ, টেকনিক্যাল অথবা পাবলিক মোড নির্বাচন করুন।',
        tip: 'মুহূর্তের মধ্যে বিষয়বস্তু রূপান্তর।',
        uiTarget: 'দর্শক মেনু'
      },
      {
        stepNumber: 3,
        title: 'রূপান্তর শুরু করুন',
        description: '"Transform Document Now" বাটনে ক্লিক করে ১০ সেকেন্ডে ৫টি ফরম্যাট পান।',
        tip: 'লাইভ প্রসেসিং টেলিমেট্রি।',
        uiTarget: 'পাইপলাইন ভিউ'
      },
      {
        stepNumber: 4,
        title: '৫টি ফরম্যাট অন্বেষণ করুন',
        description: 'এক্সিকিউটিভ মেমো, স্লাইডস, ইনফোগ্রাফিক্স এবং অডিও পডকাস্ট।',
        tip: 'সম্পূর্ণ সিনক্রোনাইজড।',
        uiTarget: 'আউটপুট ড্যাশবোর্ড'
      },
      {
        stepNumber: 5,
        title: 'উৎস প্রমাণ এবং ElevenLabs ভয়েস',
        description: 'উৎস রেফারেন্স চেক করুন এবং ElevenLabs ভয়েস স্টুডিও ব্যবহার করুন।',
        tip: 'ElevenLabs SDK ইন্টিগ্রেশন।',
        uiTarget: 'সাইটেশন ও অডিও'
      }
    ]
  },
  mr: {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    flag: '🇮🇳',
    title: 'वापर मार्गदर्शिका',
    subtitle: 'ओम्नीट्रान्सफॉर्म AI वापरण्यासाठी संपूर्ण व्हॉइस मार्गदर्शन.',
    voiceId: 'NOpBlnGInO9m6vDvFkFC',
    fullScript: 'ओम्नीट्रान्सफॉर्म AI मध्ये आपले स्वागत आहे! [cheerfully] हे व्यासपीठ ५० हून अधिक पानांचे तांत्रिक दस्तऐवज अवघ्या १० सेकंदात ५ वेगवेगळ्या स्वरूपात रूपांतरित करते. [whispers] प्रथम एक दस्तऐवज निवडा किंवा तुमची पीडीएफ फाइल अपलोड करा. प्रेक्षक प्रकार निवडा आणि "ट्रान्सफॉर्म" वर क्लिक करा. मेमो, स्लाईड्स, इन्फोग्राफिक्स आणि व्हॉइस पॉडकास्ट तपासा.',
    steps: [
      {
        stepNumber: 1,
        title: 'दस्तऐवज निवडा किंवा अपलोड करा',
        description: 'उपलब्ध अहवाल निवडा किंवा तुमची स्वतःची PDF अपलोड करा.',
        tip: 'मोठ्या तांत्रिक अहवालांसाठी उपयुक्त.',
        uiTarget: 'दस्तऐवज विभाग'
      },
      {
        stepNumber: 2,
        title: 'प्रेक्षक गट निवडा',
        description: 'एक्झिक्युटिव्ह, टेक्निकल किंवा सामान्य नागरिक पर्याय निवडा.',
        tip: 'शैलीचे त्वरित समायोजन.',
        uiTarget: 'प्रेक्षक पट्टी'
      },
      {
        stepNumber: 3,
        title: 'रूपांतरण सुरू करा',
        description: '"Transform Document Now" क्लिक करून १० सेकंदात परिणाम मिळवा.',
        tip: 'थेट प्रगती अहवाल.',
        uiTarget: 'पाइपलाइन दृश्य'
      },
      {
        stepNumber: 4,
        title: '५ स्वरूपे पहा',
        description: 'मेमो, सादरीकरण स्लाईड्स, इन्फोग्राफिक्स आणि ऑडिओ पॉडकास्ट.',
        tip: 'सर्व ५ फॉरमॅट एकाच वेळी तयार.',
        uiTarget: 'डॅशबोर्ड'
      },
      {
        stepNumber: 5,
        title: 'संदर्भ पडताळणी व ElevenLabs AI',
        description: 'अचूक पृष्ठ संदर्भ तपासा आणि ElevenLabs व्हॉइस मॉडेल वापरा.',
        tip: 'थेट व्हॉइस सिंथेसिस.',
        uiTarget: 'साइटेशन आणि व्हॉइस'
      }
    ]
  },
  gu: {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    flag: '🇮🇳',
    title: 'વપરાશ માર્ગદર્શિકા',
    subtitle: 'ઓમ્નીટ્રાન્સફોર્મ AI નો ઉપયોગ કરવા માટે વિગતવાર ઓડિયો માર્ગદર્શન.',
    voiceId: 'pNInz6obpgDQGcFmaJgB',
    fullScript: 'ઓમ્નીટ્રાન્સફોર્મ AI માં આપનું સ્વાગત છે! [cheerfully] આ પ્લેટફોર્મ માત્ર 10 સેકન્ડમાં જટિલ દસ્તાવેજોને 5 વિવિધ ફોર્મેટમાં રૂપાંતરિત કરે છે. [whispers] પહેલા દસ્તાવેજ પસંદ કરો અથવા તમારો PDF અપલોડ કરો. શ્રોતાઓનો પ્રકાર પસંદ કરો અને "ટ્રાન્સફોર્મ" ક્લિક કરો. મેમો, સ્લાઇડ્સ, ઇન્ફોગ્રાફિક્સ અને વોઇસ પોડકાસ્ટ મેળવો.',
    steps: [
      {
        stepNumber: 1,
        title: 'દસ્તાવેજ પસંદ કરો અથવા અપલોડ કરો',
        description: 'નમૂના NTRO દસ્તાવેજોમાંથી પસંદ કરો અથવા તમારો PDF અપલોડ કરો.',
        tip: 'મોટા દસ્તાવેજો માટે સક્ષમ.',
        uiTarget: 'દસ્તાવેજ વિભાગ'
      },
      {
        stepNumber: 2,
        title: 'શ્રોતાઓનો પ્રકાર પસંદ કરો',
        description: 'એક્ઝિક્યુટિવ, ટેકનિકલ અથવા પબ્લિક મોડ પસંદ કરો.',
        tip: 'ઝડપી શૈલી પરિવર્તન.',
        uiTarget: 'ઓડિયન્સ સિલેક્ટર'
      },
      {
        stepNumber: 3,
        title: 'રૂપાંતરણ શરૂ કરો',
        description: '"Transform Document Now" ક્લિક કરીને 10 સેકન્ડમાં પરિણામ મેળવો.',
        tip: 'લાઈવ પાઈપલાઈન ટ્રેકિંગ.',
        uiTarget: 'પાઈપલાઈન સ્ક્રીન'
      },
      {
        stepNumber: 4,
        title: '5 ફોર્મેટ જુઓ',
        description: 'એક્ઝિક્યુટિવ મેમો, સ્લાઇડ્સ, ઇન્ફોગ્રાફિક્સ અને ઓડિયો પોડકાસ્ટ.',
        tip: 'સંપૂર્ણ સંકલિત આઉટપુટ.',
        uiTarget: 'આઉટપુટ ડેશબોર્ડ'
      },
      {
        stepNumber: 5,
        title: 'સંદર્ભ ચકાસણી & ElevenLabs વોઇસ AI',
        description: 'ચોક્કસ પેજ સંદર્ભો તપાસો અને ElevenLabs SDK ટેસ્ટ કરો.',
        tip: 'લાઈવ વોઇસ ટેસ્ટિંગ.',
        uiTarget: 'સાયટેશન & વોઇસ'
      }
    ]
  }
};
