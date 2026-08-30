export interface GuideStep {
  stepNumber: number;
  title: string;
  actionText: string;
  details: string;
  uiTarget: string;
}

export interface LanguageVoiceGuide {
  code: string;
  bcp47: string;
  name: string;
  nativeName: string;
  flag: string;
  personaName: string;
  title: string;
  subtitle: string;
  fullScript: string;
  steps: GuideStep[];
}

export const MULTILINGUAL_VOICE_GUIDES: Record<string, LanguageVoiceGuide> = {
  en: {
    code: 'en',
    bcp47: 'en-IN',
    name: 'Indian English',
    nativeName: 'English (India)',
    flag: '🇮🇳',
    personaName: 'Aditi · Natural Indian Voice',
    title: 'Interactive Webpage Walkthrough',
    subtitle: 'Clear, human-narrated guide to transform complex documents in seconds.',
    fullScript: 'Hello there! Let me guide you through OmniTransform AI step by step. ... First, scroll to the Document Ingestion section and click on any sample advisory... or drop in your own technical PDF. ... Next, look at the top navigation bar and select your target audience: choose "Executive" for high-level summaries, "Technical" for deep-dive analysis, or "Public" for easy citizen alerts. ... Now, click the red "Transform Document Now" button. ... In less than ten seconds, our single-pass pipeline parses tables, coordinates, and text. ... Finally, explore the five tabs below: your 1-Page Executive Memo, Meeting Slides, Bento Infographics, Regional News, and Neural Voice AI. ... You can also click any citation badge to verify the exact source proof on the original PDF!',
    steps: [
      {
        stepNumber: 1,
        title: 'Step 1: Select or Upload PDF Document',
        actionText: 'Click one of the 3 advisory preset cards, or drag-and-drop your custom PDF into the upload zone.',
        details: 'Supports complex technical advisories, tables, and 50+ page reports.',
        uiTarget: 'Document Ingestion Zone'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Choose Target Audience Persona',
        actionText: 'Click "Executive", "Technical", or "Public" in the top navigation bar.',
        details: 'Dynamically shifts language complexity and executive tone instantly.',
        uiTarget: 'Audience Persona Selector'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Click "Transform Document Now"',
        actionText: 'Click the primary red button to execute the single-pass neural pipeline.',
        details: 'Real-time OCR, entity grounding, and 5-format generation finish in <10 seconds.',
        uiTarget: 'Primary Action CTA & Visualizer'
      },
      {
        stepNumber: 4,
        title: 'Step 4: Explore 5 Synchronized Formats',
        actionText: 'Click across Tabs 1 through 5 to view the generated outputs.',
        details: '1. Executive Memo, 2. Meeting Slides, 3. Infographics, 4. 4 Indian Languages, 5. Voice AI.',
        uiTarget: 'Output Dashboard Tabs'
      },
      {
        stepNumber: 5,
        title: 'Step 5: Verify Citations & Live Voice AI',
        actionText: 'Click citation pills (e.g. [p.3:12]) and test the ElevenLabs prompt studio.',
        details: 'Verify coordinate bounding boxes on original PDF and synthesize custom neural speech.',
        uiTarget: 'Citation Inspector & Voice AI Studio'
      }
    ]
  },
  hi: {
    code: 'hi',
    bcp47: 'hi-IN',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    personaName: 'रोहित · प्राकृतिक हिन्दी स्वर',
    title: 'वेबसाइट उपयोग करने की सरल विधि',
    subtitle: 'दस्तावेज़ रूपांतरण और 5 आउटपुट प्रारूपों का उपयोग करने के स्पष्ट निर्देश।',
    fullScript: 'नमस्ते! आइए समझते हैं कि ओमनीट्रांसफॉर्म एआई का उपयोग कैसे करें। ... सबसे पहले, दस्तावेज़ अनुभाग में जाएं... और दिए गए तकनीकी दस्तावेज़ों में से किसी एक पर क्लिक करें, या अपनी खुद की पीडीएफ फाइल अपलोड करें। ... इसके बाद, शीर्ष नेविगेशन बार में अपना दर्शक वर्ग चुनें: जैसे कि "कार्यकारी", "तकनीकी", या "नागरिक"। ... अब, लाल रंग के "Transform Document Now" बटन पर क्लिक करें। ... केवल 10 सेकंड में हमारा एआई इंजन संपूर्ण विश्लेषण तैयार कर देगा। ... इसके बाद नीचे दिए गए 5 टैब देखें: पहला कार्यकारी मेमो, दूसरा प्रेजेंटेशन स्लाइड्स, तीसरा इन्फोग्राफिक्स, चौथा क्षेत्रीय समाचार, और पांचवां ऑडियो पॉडकास्ट। ... आप किसी भी संदर्भ बैज पर क्लिक करके मूल पीडीएफ की जांच भी कर सकते हैं!',
    steps: [
      {
        stepNumber: 1,
        title: 'चरण 1: दस्तावेज़ चुनें या पीडीएफ अपलोड करें',
        actionText: 'दिए गए 3 तकनीकी दस्तावेज़ों में से एक पर क्लिक करें या अपनी पीडीएफ फाइल ड्रैग करें।',
        details: 'एनटीआरओ और सरकारी तकनीकी दस्तावेज़ों का संपूर्ण समर्थन।',
        uiTarget: 'दस्तावेज़ चयन अनुभाग'
      },
      {
        stepNumber: 2,
        title: 'चरण 2: दर्शक वर्ग (Persona) चुनें',
        actionText: 'शीर्ष बार में "Executive", "Technical", या "Public" में से एक चुनें।',
        details: 'दस्तावेज़ की भाषा और विश्लेषण गहराई तुरंत बदल जाती है।',
        uiTarget: 'ऑडियंस चयन बार'
      },
      {
        stepNumber: 3,
        title: 'चरण 3: "Transform Document Now" पर क्लिक करें',
        actionText: 'लाल बटन दबाकर 10 सेकंड में 5 प्रारूप तैयार करें।',
        details: 'रीयल-टाइम विज़ुअलाइज़र में प्रत्येक चरण की प्रगति देखें।',
        uiTarget: 'मुख्य रूपांतरण बटन'
      },
      {
        stepNumber: 4,
        title: 'चरण 4: 5 प्रारूपों का अन्वेषण करें',
        actionText: 'टैब 1 से 5 पर क्लिक करके मेमो, स्लाइड्स, इन्फोग्राफिक्स और पॉडकास्ट देखें।',
        details: 'सभी प्रारूप एक साथ 100% समन्वयित रूप से उपलब्ध हैं।',
        uiTarget: 'आउटपुट डैशबोर्ड टैब्स'
      },
      {
        stepNumber: 5,
        title: 'चरण 5: संदर्भ जांचें और वॉयस AI का उपयोग करें',
        actionText: 'साइटेशन बैज पर क्लिक करें और इलेवनलैब्स वॉयस स्टूडियो में नया भाषण बनाएं।',
        details: 'सटीक पृष्ठ संदर्भ और लाइव भाषण संश्लेषण का आनंद लें।',
        uiTarget: 'साइटेशन इंस्पेक्टर & वॉयस स्टूडियो'
      }
    ]
  },
  kn: {
    code: 'kn',
    bcp47: 'kn-IN',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    flag: '🇮🇳',
    personaName: 'ಅನನ್ಯ · ನೈಸರ್ಗಿಕ ಕನ್ನಡ ಧ್ವನಿ',
    title: 'ವೆಬ್‌ಸೈಟ್ ಬಳಸುವ ಸುಲಭ ವಿಧಾನ',
    subtitle: 'ದಾಖಲೆಗಳನ್ನು ಪರಿವರ್ತಿಸಲು ಹಂತ-ಹಂತದ ಮಾನವೀಯ ಧ್ವನಿ ವಿವರಣೆ.',
    fullScript: 'ನಮಸ್ಕಾರ! ಓಮ್ನಿಟ್ರಾನ್ಸ್‌ಫಾರ್ಮ್ AI ಅನ್ನು ಸುಲಭವಾಗಿ ಬಳಸುವುದು ಹೇಗೆ ಎಂದು ನೋಡೋಣ. ... ಮೊದಲನೆಯದಾಗಿ, ಡಾಕ್ಯುಮೆಂಟ್ ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ... ಅಲ್ಲಿರುವ ಮಾದರಿ ವರದಿಗಳಲ್ಲಿ ಒಂದನ್ನು ಆಯ್ಕೆಮಾಡಿ, ಅಥವಾ ನಿಮ್ಮ ಸ್ವಂತ PDF ಫೈಲ್ ಅನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ... ನಂತರ, ಮೇಲ್ಭಾಗದ ಮೆನುವಿನಲ್ಲಿ ನಿಮ್ಮ ಪ್ರೇಕ್ಷಕರನ್ನು ಆಯ್ಕೆಮಾಡಿ: "ಕಾರ್ಯನಿರ್ವಾಹಕ", "ತಾಂತ್ರಿಕ", ಅಥವಾ "ಸಾರ್ವಜನಿಕ". ... ಈಗ, ಕೆಂಪು ಬಣ್ಣದ "Transform Document Now" ಬಟನ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ. ... ಕೇವಲ 10 ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಎಲ್ಲಾ 5 ಮಾಧ್ಯಮಗಳು ಸಿದ್ಧವಾಗುತ್ತವೆ. ... ಕೊನೆಯದಾಗಿ, ಕೆಳಗಿರುವ 5 ಟ್ಯಾಬ್‌ಗಳನ್ನು ತೆರೆದು: 1-ಪುಟದ ಮೆಮೊ, ಪ್ರೆಸೆಂಟೇಶನ್ ಸ್ಲೈಡ್‌ಗಳು, ಇನ್‌ಫೋಗ್ರಾಫಿಕ್ಸ್ ಮತ್ತು ಆಡಿಯೋ ಪಾಡ್‌ಕ್ಯಾಸ್ಟ್ ಅನ್ನು ಪರಿಶೀಲಿಸಿ!',
    steps: [
      {
        stepNumber: 1,
        title: 'ಹಂತ 1: ದಾಖಲೆ ಆರಿಸಿ ಅಥವಾ PDF ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
        actionText: 'ಲಭ್ಯವಿರುವ 3 ತಾಂತ್ರಿಕ ದಾಖಲೆಗಳಲ್ಲಿ ಒಂದನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ನಿಮ್ಮ PDF ಹಾಕಿ.',
        details: 'NTRO ಮತ್ತು ಸರ್ಕಾರಿ ವರದಿಗಳ ಪೂರ್ಣ ಬೆಂಬಲ.',
        uiTarget: 'ಡಾಕ್ಯುಮೆಂಟ್ ವಿಭಾಗ'
      },
      {
        stepNumber: 2,
        title: 'ಹಂತ 2: ಪ್ರೇಕ್ಷಕರ ಗುಂಪನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        actionText: 'ಮೇಲಿನ ಬಾರ್‌ನಲ್ಲಿ Executive, Technical ಅಥವಾ Public ಆಯ್ಕೆಮಾಡಿ.',
        details: 'ವಿಷಯದ ಆಳ ಮತ್ತು ಶೈಲಿಯನ್ನು ತಕ್ಷಣ ಹೊಂದಿಸುತ್ತದೆ.',
        uiTarget: 'ಆಡಿಯನ್ಸ್ ಸೆಲೆಕ್ಟರ್'
      },
      {
        stepNumber: 3,
        title: 'ಹಂತ 3: "Transform Document Now" ಕ್ಲಿಕ್ ಮಾಡಿ',
        actionText: 'ಕೆಂಪು ಬಟನ್ ಒತ್ತಿ ಕೇವಲ 10 ಸೆಕೆಂಡುಗಳಲ್ಲಿ 5 ಮಾಧ್ಯಮಗಳನ್ನು ರಚಿಸಿ.',
        details: 'ಲೈವ್ ಪ್ರಕ್ರಿಯೆಯ ಪ್ರಗತಿಯನ್ನು ವೀಕ್ಷಿಸಿ.',
        uiTarget: 'ಮುಖ್ಯ ಬಟನ್ & ಪೈಪ್‌ಲೈನ್'
      },
      {
        stepNumber: 4,
        title: 'ಹಂತ 4: 5 ಫಲಿತಾಂಶಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
        actionText: 'ಟ್ಯಾಬ್ 1 ರಿಂದ 5 ರವರೆಗೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಮೆಮೊ, ಸ್ಲೈಡ್ ಮತ್ತು ಕನ್ನಡ ವರದಿಗಳನ್ನು ನೋಡಿ.',
        details: 'ಎಲ್ಲಾ 5 ಮಾಧ್ಯಮಗಳು ಸಿಂಕ್ರೊನೈಸ್ ಆಗಿರುತ್ತವೆ.',
        uiTarget: 'ಔಟ್‌ಪುಟ್ ಟ್ಯಾಬ್‌ಗಳು'
      },
      {
        stepNumber: 5,
        title: 'ಹಂತ 5: ಉಲ್ಲೇಖಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ & ಧ್ವನಿ AI ಬಳಸಿ',
        actionText: 'ಉಲ್ಲೇಖ ಲಿಂಕ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ElevenLabs ಧ್ವನಿ ರಚಿಸಿ.',
        details: 'ಮೂಲ ಪುಟದ ನಿರ್ದೇಶಾಂಕಗಳು ಮತ್ತು ಲೈವ್ ಆಡಿಯೋ.',
        uiTarget: 'ಸೈಟೇಶನ್ & ElevenLabs ಸ್ಟುಡಿಯೋ'
      }
    ]
  },
  ta: {
    code: 'ta',
    bcp47: 'ta-IN',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    flag: '🇮🇳',
    personaName: 'அருண் · இயல்பான தமிழ் குரல்',
    title: 'வலைத்தளத்தை பயன்படுத்தும் முறை',
    subtitle: 'ஆவணங்களை நொடிகளில் மாற்றுவதற்கான எளிய குரல் வழிகாட்டல்.',
    fullScript: 'வணக்கம்! ஓம்னிட்ரான்ஸ்ஃபார்ம் AI தளத்தை எவ்வாறு பயன்படுத்துவது என்று பார்ப்போம். ... முதலில், ஆவண பகுதிக்குச் சென்று... மாதிரி அறிக்கைகளில் ஒன்றை கிளிக் செய்யவும், அல்லது உங்கள் சொந்த PDF கோப்பை பதிவேற்றவும். ... பின்னர், மேல் பட்டியில் உங்கள் பார்வையாளர் வகையை தேர்ந்தெடுக்கவும்: "நிர்வாகி", "தொழில்நுட்பம்", அல்லது "பொதுமக்கள்". ... இப்போது, சிவப்பு நிற "Transform Document Now" பொத்தானை கிளிக் செய்யுங்கள். ... வெறும் 10 வினாடிகளில் உங்கள் ஆவணம் ஐந்து வடிவங்களாக மாறும். ... இறுதியாக, கீழே உள்ள 5 தாவல்களை திறந்து: நிர்வாக குறிப்பு, விளக்கக்காட்சி ஸ்லைடுகள், வரைபடங்கள் மற்றும் குரல் பதிவை ஆராயுங்கள்!',
    steps: [
      {
        stepNumber: 1,
        title: 'படி 1: ஆவணத்தைத் தேர்ந்தெடுக்கவும் அல்லது பதிவேற்றவும்',
        actionText: 'மாதிரி ஆவணங்களை கிளிக் செய்யவும் அல்லது உங்கள் PDF கோப்பை இழுத்து விடவும்.',
        details: 'சிக்கலான தொழில்நுட்ப ஆவணங்களை உடனடியாக ஏற்கும்.',
        uiTarget: 'ஆவண பதிவேற்ற பகுதி'
      },
      {
        stepNumber: 2,
        title: 'படி 2: பார்வையாளர் வகையை தேர்வு செய்யவும்',
        actionText: 'மேல் பட்டியில் Executive, Technical அல்லது Public என்பதை கிளிக் செய்யவும்.',
        details: 'உடனடி நடை மற்றும் ஆழ மாற்றம்.',
        uiTarget: 'பார்வையாளர் பட்டி'
      },
      {
        stepNumber: 3,
        title: 'படி 3: "Transform Document Now" கிளிக் செய்யவும்',
        actionText: 'சிவப்பு பொத்தானை அழுத்தி 10 வினாடிகளில் 5 வெளியீடுகளைப் பெறுங்கள்.',
        details: 'நேரலை முன்னேற்றக் காட்டி.',
        uiTarget: 'முதன்மை பொத்தான்'
      },
      {
        stepNumber: 4,
        title: 'படி 4: 5 வெளியீடுகளை ஆராயுங்கள்',
        actionText: 'தாவல் 1 முதல் 5 வரை கிளிக் செய்து மெமோ, ஸ்லைடுகள் மற்றும் தமிழ் செய்திகளைப் பாருங்கள்.',
        details: 'முழுமையான ஒருங்கிணைந்த வடிவங்கள்.',
        uiTarget: 'வெளியீட்டு பலகை'
      },
      {
        stepNumber: 5,
        title: 'படி 5: ஆதாரங்களை சரிபார்க்கவும் & குரல் AI',
        actionText: 'மேற்கோள் இணைப்புகளை கிளிக் செய்து ElevenLabs குரல் அமைப்பை இயக்கவும்.',
        details: 'துல்லியமான பக்க ஆதாரங்கள் மற்றும் நேரலை குரல்.',
        uiTarget: 'மேற்கோள் & ElevenLabs கூடம்'
      }
    ]
  },
  te: {
    code: 'te',
    bcp47: 'te-IN',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    flag: '🇮🇳',
    personaName: 'కృష్ణ · సహజ తెలుగు స్వరం',
    title: 'వెబ్‌సైట్ వాడే విధానం',
    subtitle: 'పత్రాలను సులభంగా మార్చేందుకు స్పష్టమైన సూచనలు.',
    fullScript: 'నమస్కారం! ఓమ్నిట్రాన్స్‌ఫార్మ్ AI ని ఎలా ఉపయోగించాలో సులభంగా చూద్దాం. ... మొదటగా, డాక్యుమెంట్ విభాగానికి వెళ్లి... నమూనా నివేదికలలో ఒకదాన్ని ఎంచుకోండి, లేదా మీ స్వంత PDFని అప్‌లోడ్ చేయండి. ... తర్వాత, పై నావిగేషన్ బార్‌లో మీ కేటగిరీని ఎంచుకోండి: "ఎగ్జిక్యూటివ్", "టెక్నికల్", లేదా "పబ్లిక్". ... ఇప్పుడు, ఎరుపు రంగు "Transform Document Now" బటన్‌పై క్లిక్ చేయండి. ... కేవలం 10 సెకన్లలో ఐదు ఫార్మాట్‌లు సిద్ధమవుతాయి. ... చివరగా, క్రింది 5 ట్యాబ్‌లను చూసి: మెమో, స్లైడ్‌లు, ఇన్ఫోగ్రాఫిక్స్ మరియు వాయిస్ పాడ్‌కాస్ట్‌ను పరిశీలించండి!',
    steps: [
      {
        stepNumber: 1,
        title: 'దశ 1: పత్రాన్ని ఎంచుకోండి లేదా PDF అప్‌లోడ్ చేయండి',
        actionText: 'నమూనా డాక్యుమెంట్‌పై క్లిಕ್ చేయండి లేదా మీ PDFని డ్రాగ్ చేయండి.',
        details: 'సాంకేతిక పత్రాలకు పూర్తి మద్దతు.',
        uiTarget: 'డాక్యుమెంట్ విభాగం'
      },
      {
        stepNumber: 2,
        title: 'దశ 2: ప్రేక్షకుల రకాన్ని ఎంచుకోండి',
        actionText: 'Executive, Technical లేదా Public బటన్‌ను క్లిక్ చేయండి.',
        details: 'విషయ శైలి క్షణాల్లో మారుతుంది.',
        uiTarget: 'ఆడియన్స్ బార్'
      },
      {
        stepNumber: 3,
        title: 'దశ 3: "Transform Document Now" పై క్లిక్ చేయండి',
        actionText: 'ఎరుపు బటన్ నొక్కి 10 సెకన్లలో 5 ఫార్మాట్‌లను పొందండి.',
        details: 'లైవ్ ప్రోగ్రెస్ ట్రాకింగ్.',
        uiTarget: 'ప్రధాన బటన్'
      },
      {
        stepNumber: 4,
        title: 'దశ 4: 5 ఫార్మాట్‌లను చూడండి',
        actionText: 'ట్యాబ్ 1 నుండి 5 వరకు క్లిಕ್ చేసి ఫలితాలు చూడండి.',
        details: 'సమకాలీకరించబడిన అవుట్‌పుట్.',
        uiTarget: 'అవుట్‌పుట్ డ్యాష్‌బోర్ڈ'
      },
      {
        stepNumber: 5,
        title: 'దశ 5: ఆధారాల ధృవీకరణ & ElevenLabs AI',
        actionText: 'సైటేషన్ లింక్‌లు క్లిక్ చేయండి మరియు ElevenLabs వాయిస్ వాడండి.',
        details: 'ఖచ్చితమైన ఆధారాలు.',
        uiTarget: 'సైటేషన్స్ & వాయిస్ స్టూడియో'
      }
    ]
  },
  bn: {
    code: 'bn',
    bcp47: 'bn-IN',
    name: 'Bengali',
    nativeName: 'বাংলা',
    flag: '🇮🇳',
    personaName: 'পূজা · স্বাভাবিক বাংলা কণ্ঠস্বর',
    title: 'সহজ ব্যবহার নির্দেশিকা',
    subtitle: 'নথি রূপান্তর এবং ৫টি আউটপুট ব্যবহারের জন্য স্পষ্ট গাইড।',
    fullScript: 'নমস্কার! চলুন জেনে নেওয়া যাক অমনিট্রান্সফর্ম এআই ব্যবহারের সহজ উপায়। ... প্রথমে, ডকুমেন্ট সেকশনে গিয়ে একটি নমুনা রিপোর্ট নির্বাচন করুন... অথবা আপনার নিজস্ব পিডিএফ ফাইল আপলোড করুন। ... তারপর, ওপরের বারে আপনার অডিয়েন্স বেছে নিন: "এক্সিকিউটিভ", "টেকনিক্যাল", অথবা "পাবলিক"। ... এবার, লাল "Transform Document Now" বাটনে ক্লিক করুন। ... মাত্র ১০ সেকেন্ডের মধ্যে আমাদের এআই ইঞ্জিন ৫টি ফরম্যাট প্রস্তুত করে দেবে। ... শেষে, নিচের ৫টি ট্যাব থেকে আপনার মেমো, স্লাইডস, ইনফোগ্রাফিক্স এবং অডিও শুনে নিন!',
    steps: [
      {
        stepNumber: 1,
        title: 'ধাপ ১: ডকুমেন্ট নির্বাচন বা পিডিএফ আপলোড',
        actionText: 'নমুনা নথিতে ক্লিক করুন অথবা আপনার পিডিএফ ফাইলটি ড্রপ করুন।',
        details: 'যেকোনো প্রযুক্তিগত নথির সমর্থন।',
        uiTarget: 'ডকুমেন্ট আপলোড সেকশন'
      },
      {
        stepNumber: 2,
        title: 'ধাপ ২: অডিয়েন্স নির্বাচন করুন',
        actionText: 'Executive, Technical বা Public অপশনে ক্লিক করুন।',
        details: 'তাত্ক্ষণিক ভাষা ও বিন্যাস রূপান্তর।',
        uiTarget: 'অডিয়েন্স বার'
      },
      {
        stepNumber: 3,
        title: 'ধাপ ৩: "Transform Document Now" ক্লিক করুন',
        actionText: 'লাল বাটনে ক্লিক করে ১০ সেকেন্ডে ৫টি ফরম্যাট পান।',
        details: 'রিয়েল-টাইম ট্র্যাকিং।',
        uiTarget: 'মূল বাটন'
      },
      {
        stepNumber: 4,
        title: 'ধাপ ৪: ৫টি ফরম্যাট এক্সপ্লোর করুন',
        actionText: 'ট্যাব ১ থেকে ৫ ক্লিক করে মেমো এবং স্লাইডস দেখুন।',
        details: 'সম্পূর্ণ সমন্বিত আউটপুট।',
        uiTarget: 'আউটপুট ড্যাশবোর্ড'
      },
      {
        stepNumber: 5,
        title: 'ধাপ ৫: সাইটেশন যাচাই ও ElevenLabs ভয়েস',
        actionText: 'সাইটেশন ব্যাজে ক্লিক করুন এবং ElevenLabs ভয়েস তৈরি করুন।',
        details: 'সঠিক তথ্য প্রমাণ।',
        uiTarget: 'সাইটেশন ও ভয়েস স্টুডিও'
      }
    ]
  },
  mr: {
    code: 'mr',
    bcp47: 'mr-IN',
    name: 'Marathi',
    nativeName: 'मराठी',
    flag: '🇮🇳',
    personaName: 'कबीर · अस्खलित मराठी आवाज',
    title: 'वेबसाइट वापरण्याची सोपी पद्धत',
    subtitle: 'दस्तऐवज रूपांतरित करण्यासाठी आणि ५ स्वरूपे वापरण्यासाठी स्पष्ट मार्गदर्शन.',
    fullScript: 'नमस्कार! ओम्नीट्रान्सफॉर्म AI चा वापर कसा करावा हे समजून घेऊया. ... सर्वात आधी, दस्तऐवज विभागात जाऊन उपलब्ध अहवालांपैकी एक निवडा... किंवा तुमची स्वतःची PDF फाईल अपलोड करा. ... त्यानंतर, वरच्या पट्टीवरून तुमचा प्रेक्षक वर्ग निवडा: "एक्झिक्युटिव्ह", "टेक्निकल", किंवा "नागरिक". ... आता, लाल रंगाच्या "Transform Document Now" बटनावर क्लिक करा. ... अवघ्या १० सेकंदात सर्व ५ फॉरमॅट्स तयार होतील. ... शेवटी, खालील ५ टॅब तपासून मेमो, स्लाईड्स, इन्फोग्राफिक्स आणि ऑडिओ पॉडकास्टचा आनंद घ्या!',
    steps: [
      {
        stepNumber: 1,
        title: 'पायरी १: दस्तऐवज निवडा किंवा PDF अपलोड करा',
        actionText: 'दिलेल्या अहवालावर क्लिक करा किंवा तुमची PDF ड्रॅग करा.',
        details: 'तांत्रिक दस्तऐवजांचे जलद विश्लेषण.',
        uiTarget: 'दस्तऐवज विभाग'
      },
      {
        stepNumber: 2,
        title: 'पायरी २: प्रेक्षक प्रकार निवडा',
        actionText: 'Executive, Technical किंवा Public बटनावर क्लिक करा.',
        details: 'भाषेचे त्वरित समायोजन.',
        uiTarget: 'प्रेक्षक पट्टी'
      },
      {
        stepNumber: 3,
        title: 'पायरी ३: "Transform Document Now" वर क्लिक करा',
        actionText: 'लाल बटनावर क्लिक करून अवघ्या १० सेकंदात ५ फॉरमॅट्स मिळवा.',
        details: 'थेट प्रगती अहवाल.',
        uiTarget: 'मुख्य रूपांतरण बटण'
      },
      {
        stepNumber: 4,
        title: 'पायरी ४: ५ फॉरमॅट्स तपासा',
        actionText: 'टॅब १ ते ५ वर क्लिक करून मेमो आणि सादरीकरण स्लाईड्स पहा.',
        details: 'सर्व फॉरमॅट एकाच वेळी तयार.',
        uiTarget: 'आउटपुट डॅशबोर्ड'
      },
      {
        stepNumber: 5,
        title: 'पायरी ५: संदर्भ पडताळणी & ElevenLabs व्हॉइस',
        actionText: 'सायटेशनवर क्लिक करा आणि ElevenLabs व्हॉइस मॉडेल वापरा.',
        details: 'अचूक पृष्ठ संदर्भ पुरावा.',
        uiTarget: 'सायटेशन आणि व्हॉइस स्टुडिओ'
      }
    ]
  },
  gu: {
    code: 'gu',
    bcp47: 'gu-IN',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    flag: '🇮🇳',
    personaName: 'દિવ્યા · કુદરતી ગુજરાતી અવાજ',
    title: 'વેબસાઇટ વાપરવાની સરળ રીત',
    subtitle: 'દસ્તાવેજોને સરળતાથી રૂપાંતરિત કરવા માટેનું સ્પષ્ટ ઓડિયો માર્ગદર્શન.',
    fullScript: 'નમસ્તે! ઓમ્નીટ્રાન્સફોર્મ AI નો ઉપયોગ કરવાની સરળ રીત સમજીએ. ... સૌથી પહેલાં, દસ્તાવેજ વિભાગમાં જાઓ... અને આપેલા નમૂના દસ્તાવેજોમાંથી એક પસંદ કરો, અથવા તમારી પોતાની PDF અપલોડ કરો. ... તે પછી, ટોચના બારમાંથી શ્રોતા પ્રકાર પસંદ કરો: "એક્ઝિક્યુટિવ", "ટેકનિકલ", અથવા "પબ્લિક". ... હવે, લાલ રંગના "Transform Document Now" બટન પર ક્લિક કરો. ... માત્ર ૧૦ સેકન્ડમાં તમામ ૫ ફોર્મેટ્સ તૈયાર થઈ જશે. ... છેલ્લે, નીચેના ૫ ટેબ ખોલીને મેમો, સ્લાઇડ્સ, ઇન્ફોગ્રાફિક્સ અને પોડકાસ્ટ મેળવો!',
    steps: [
      {
        stepNumber: 1,
        title: 'પગલું 1: દસ્તાવેજ પસંદ કરો અથવા PDF અપલોડ કરો',
        actionText: 'આપેલા દસ્તાવેજ પર ક્લિક કરો અથવા તમારી PDF ખેંચીને લાવો.',
        details: 'મોટા અહેવાલો માટે સક્ષમ.',
        uiTarget: 'દસ્તાવેજ વિભાગ'
      },
      {
        stepNumber: 2,
        title: 'પગલું 2: શ્રોતા પ્રકાર પસંદ કરો',
        actionText: 'Executive, Technical અથવા Public બટન પર ક્લિક કરો.',
        details: 'ઝડપી શૈલી ફેરફાર.',
        uiTarget: 'ઓડિયન્સ સિલેક્ટર'
      },
      {
        stepNumber: 3,
        title: 'પગલું 3: "Transform Document Now" ક્લિક કરો',
        actionText: 'લાલ બટન દબાવીને 10 સેકન્ડમાં 5 ફોર્મેટ્સ મેળવો.',
        details: 'લાઈવ પ્રક્રિયા ટ્રેકિંગ.',
        uiTarget: 'મુખ્ય બટન'
      },
      {
        stepNumber: 4,
        title: 'પગલું 4: 5 ફોર્મેટ્સ તપાસો',
        actionText: 'ટેબ 1 થી 5 પર ક્લિક કરીને મેમો, સ્લાઇડ્સ અને ઓડિયો જુઓ.',
        details: 'સંકલિત પરિણામો.',
        uiTarget: 'આઉટપુટ ડેશબોર્ડ'
      },
      {
        stepNumber: 5,
        title: 'પગલું 5: સંદર્ભ ચકાસણી & ElevenLabs વોઇસ AI',
        actionText: 'સાયટેશન બેજ પર ક્લિક કરો અને ElevenLabs વોઇસ ટેસ્ટ કરો.',
        details: 'ચોક્કસ પેજ સંદર્ભો.',
        uiTarget: 'સાયટેશન & વોઇસ સ્ટુડિયો'
      }
    ]
  }
};
