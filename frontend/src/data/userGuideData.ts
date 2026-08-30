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
  title: string;
  subtitle: string;
  fullScript: string;
  stepAudioScripts: string[];
  steps: GuideStep[];
}

export const MULTILINGUAL_VOICE_GUIDES: Record<string, LanguageVoiceGuide> = {
  en: {
    code: 'en',
    bcp47: 'en-IN',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    title: 'Interactive Webpage User Manual',
    subtitle: 'Clear operational steps to transform documents and explore 5 synchronized formats.',
    fullScript: 'Here is how to use OmniTransform AI step-by-step. Step 1: Scroll to the Document Ingestion section and click on any sample advisory, or drag-and-drop your own PDF report. Step 2: At the top navbar, select your audience persona: click Executive for strategic briefs, Technical for engineering analysis, or Public for citizen advisories. Step 3: Click the red "Transform Document Now" button and watch the live visualizer parse tables and OCR in under 10 seconds. Step 4: When ready, explore the 5 tabs below: Tab 1 for 1-Page Executive Memo, Tab 2 for Keynote Slides, Tab 3 for Bento Infographics, Tab 4 for 4 Indian Language Bulletins, and Tab 5 for Neural Audio. Step 5: Click any citation tag like [p.3:12] to inspect original PDF bounding boxes and verify source truth. Step 6: In Tab 5, test the ElevenLabs studio to synthesize custom speech with emotional tags.',
    stepAudioScripts: [
      'Step 1: Select an advisory preset or drag-and-drop your custom PDF document into the upload zone.',
      'Step 2: Choose your audience persona from the top navigation: Executive, Technical, or Public.',
      'Step 3: Click the red Transform Document Now button to start the multi-format transformation engine.',
      'Step 4: Explore the 5 synchronized output formats across the dashboard tabs: Memo, Slides, Infographics, Regional News, and Audio.',
      'Step 5: Click any citation badge to view exact source bounding box coordinates, and test the ElevenLabs voice synthesis studio.'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Step 1: Select or Upload PDF Document',
        actionText: 'Click one of the 3 advisory preset cards, or drag-and-drop your custom PDF into the upload zone.',
        details: 'Supports complex technical advisories and multi-page reports.',
        uiTarget: 'Document Ingestion Zone'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Choose Target Audience Persona',
        actionText: 'Click "Executive", "Technical", or "Public" in the top navigation bar.',
        details: 'Dynamically shifts language complexity, executive tone, and metrics without re-uploading.',
        uiTarget: 'Audience Persona Selector'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Click "Transform Document Now"',
        actionText: 'Click the primary red button to execute the single-pass neural pipeline.',
        details: 'Watch real-time OCR, entity grounding, and multi-format generation finish in <10 seconds.',
        uiTarget: 'Primary Action CTA & Pipeline Visualizer'
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
    title: 'वेबपेज का उपयोग कैसे करें',
    subtitle: 'दस्तावेज़ रूपांतरण और 5 आउटपुट प्रारूपों का उपयोग करने के चरणबद्ध निर्देश।',
    fullScript: 'ओमनीट्रांसफॉर्म एआई का उपयोग करने की चरणबद्ध विधि इस प्रकार है: पहला चरण: दस्तावेज़ अनुभाग में जाएं और दिए गए परामर्श दस्तावेज़ों में से किसी एक पर क्लिक करें, या अपनी खुद की पीडीएफ फाइल अपलोड करें। दूसरा चरण: शीर्ष नेविगेशन बार में अपना दर्शक वर्ग चुनें: कार्यकारी, तकनीकी या नागरिक। तीसरा चरण: लाल रंग के "Transform Document Now" बटन पर क्लिक करें और 10 सेकंड में संपूर्ण रूपांतरण पूरा होते देखें। चौथा चरण: नीचे दिए गए 5 टैब देखें: टैब 1 कार्यकारी मेमो, टैब 2 प्रेजेंटेशन स्लाइड्स, टैब 3 इन्फोग्राफिक्स, टैब 4 क्षेत्रीय समाचार, और टैब 5 ऑडियो पॉडकास्ट। पांचवां चरण: किसी भी साइटेशन बैज जैसे [p.3:12] पर क्लिक करके मूल पीडीएफ संदर्भ सत्यापित करें। छठा चरण: इलेवनलैब्स वॉयस स्टूडियो में लाइव आवाज बनाएं।',
    stepAudioScripts: [
      'चरण 1: दस्तावेज़ अनुभाग में जाकर किसी एक दस्तावेज़ का चयन करें या अपनी पीडीएफ फाइल अपलोड करें।',
      'चरण 2: शीर्ष नेविगेशन बार से अपने दर्शक का प्रकार चुनें: कार्यकारी, तकनीकी या नागरिक।',
      'चरण 3: लाल रंग के Transform Document Now बटन पर क्लिक करके 10 सेकंड में रूपांतरण प्रारंभ करें।',
      'चरण 4: नीचे दिए गए 5 टैब में मेमो, स्लाइड्स, इन्फोग्राफिक्स, क्षेत्रीय भाषा और ऑडियो देखें।',
      'चरण 5: साइटेशन लिंक पर क्लिक करके मूल पीडीएफ संदर्भ जांचें और इलेवनलैब्स ऑडियो स्टूडियो का परीक्षण करें।'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'चरण 1: दस्तावेज़ चुनें या पीडीएफ अपलोड करें',
        actionText: 'दिए गए 3 तकनीकी दस्तावेज़ों में से एक पर क्लिक करें या अपनी पीडीएफ फाइल ड्रैग-एंड-ड्रॉप करें।',
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
    title: 'ವೆಬ್‌ಪುಟವನ್ನು ಬಳಸುವ ವಿಧಾನ',
    subtitle: 'ದಾಖಲೆಗಳನ್ನು ಪರಿವರ್ತಿಸಲು ಮತ್ತು 5 ರೂಪಗಳನ್ನು ಬಳಸಲು ಹಂತ-ಹಂತದ ಸೂಚನೆಗಳು.',
    fullScript: 'ಓಮ್ನಿಟ್ರಾನ್ಸ್‌ಫಾರ್ಮ್ AI ಬಳಸುವ ಹಂತಗಳು ಹೀಗಿವೆ: ಹಂತ 1: ಡಾಕ್ಯುಮೆಂಟ್ ವಿಭಾಗದಲ್ಲಿ ನೀಡಿರುವ ಮಾದರಿ ವರದಿಗಳಲ್ಲಿ ಒಂದನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ನಿಮ್ಮ PDF ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ಹಂತ 2: ಮೇಲ್ಭಾಗದ ಮೆನುವಿನಲ್ಲಿ ನಿಮ್ಮ ಪ್ರೇಕ್ಷಕರನ್ನು ಆಯ್ಕೆಮಾಡಿ: ಕಾರ್ಯನಿರ್ವಾಹಕ, ತಾಂತ್ರಿಕ ಅಥವಾ ಸಾರ್ವಜನಿಕ. ಹಂತ 3: ಕೆಂಪು "Transform Document Now" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ, ಕೇವಲ 10 ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಪ್ರಕ್ರಿಯೆ ಪೂರ್ಣಗೊಳ್ಳುತ್ತದೆ. ಹಂತ 4: ಕೆಳಗಿನ 5 ಟ್ಯಾಬ್‌ಗಳನ್ನು ತೆರೆಯಿರಿ: 1-ಪುಟದ ಮೆಮೊ, ಪ್ರೆಸೆಂಟೇಶನ್ ಸ್ಲೈಡ್‌ಗಳು, ಇನ್‌ಫೋಗ್ರಾಫಿಕ್ಸ್, ಕನ್ನಡ ಸುದ್ದಿ ವರದಿ ಮತ್ತು ಆಡಿಯೋ ಪಾಡ್‌ಕ್ಯಾಸ್ಟ್. ಹಂತ 5: ಯಾವುದೇ ಉಲ್ಲೇಖ ಬ್ಯಾಡ್ಜ್ [p.3:12] ಕ್ಲಿಕ್ ಮಾಡಿ ಮೂಲ ಪುಟದ ಸಾಲುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ. ಹಂತ 6: ElevenLabs ಸ್ಟುಡಿಯೋ ಬಳಸಿ ಲೈವ್ ಧ್ವನಿ ಉತ್ಪಾದಿಸಿ.',
    stepAudioScripts: [
      'ಹಂತ 1: ಡಾಕ್ಯುಮೆಂಟ್ ವಿಭಾಗದಲ್ಲಿ ಒಂದು ಮಾದರಿ ವರದಿಯನ್ನು ಆರಿಸಿ ಅಥವಾ ನಿಮ್ಮ PDF ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
      'ಹಂತ 2: ಮೇಲ್ಭಾಗದ ಮೆನುವಿನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಾಹಕ, ತಾಂತ್ರಿಕ ಅಥವಾ ಸಾರ್ವಜನಿಕ ಪ್ರೇಕ್ಷಕರನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
      'ಹಂತ 3: ಕೆಂಪು Transform Document Now ಬಟನ್ ಒತ್ತಿ 10 ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಫಲಿತಾಂಶ ಪಡೆಯಿರಿ.',
      'ಹಂತ 4: ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿರುವ ಮೆಮೊ, ಸ್ಲೈಡ್‌ಗಳು, ಇನ್‌ಫೋಗ್ರಾಫಿಕ್ಸ್ ಮತ್ತು ಆಡಿಯೋ ಟ್ಯಾಬ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ.',
      'ಹಂತ 5: ಮೂಲ ಉಲ್ಲೇಖಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ElevenLabs ಧ್ವನಿ ಸ್ಟುಡಿಯೋ ಬಳಸಿ.'
    ],
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
    title: 'வலைப்பக்கத்தை பயன்படுத்தும் முறை',
    subtitle: 'ஆவணங்களை மாற்றுவதற்கும் 5 வடிவங்களை பயன்படுத்துவதற்கும் படிப்படியான வழிமுறைகள்.',
    fullScript: 'ஓம்னிட்ரான்ஸ்ஃபார்ம் AI-ஐ எவ்வாறு பயன்படுத்துவது என்பது இதோ: படி 1: ஆவண பகுதிக்குச் சென்று மாதிரி ஆவணங்களில் ஒன்றை கிளிக் செய்யவும் அல்லது உங்கள் PDF கோப்பை பதிவேற்றவும். படி 2: மேல் பட்டியில் பார்வையாளர் வகையை தேர்ந்தெடுக்கவும்: நிர்வாகி, தொழில்நுட்பம் அல்லது பொதுமக்கள். படி 3: சிவப்பு நிற "Transform Document Now" பொத்தானை கிளிக் செய்து 10 வினாடிகளில் முடிவுகளைப் பெறுங்கள். படி 4: கீழே உள்ள 5 தாவல்களை ஆராயுங்கள்: நிர்வாக குறிப்பு, விளக்கக்காட்சி ஸ்லைடுகள், இன்போகிராபிக்ஸ், தமிழ் செய்தி மற்றும் ஆடியோ போட்காஸ்ட். படி 5: மூல PDF ஆதாரங்களை சரிபார்க்க மேற்கோள் குறியீடுகளை கிளிக் செய்யவும். படி 6: ElevenLabs குரல் ஸ்டுடியோவில் புதிய ஆடியோவை உருவாக்கவும்.',
    stepAudioScripts: [
      'படி 1: மாதிரி ஆவணங்களில் ஒன்றை தேர்ந்தெடுக்கவும் அல்லது உங்கள் PDF கோப்பை பதிவேற்றவும்.',
      'படி 2: மேல் பட்டியில் நிர்வாகி, தொழில்நுட்பம் அல்லது பொது பார்வையாளர் வகையை தேர்ந்தெடுக்கவும்.',
      'படி 3: சிவப்பு Transform Document Now பொத்தானை கிளிக் செய்து 10 வினாடிகளில் மாற்றத்தை தொடங்குங்கள்.',
      'படி 4: கீழே உள்ள 5 தாவல்களில் மெமோ, ஸ்லைடுகள், வரைபடங்கள் மற்றும் ஆடியோவை ஆராயுங்கள்.',
      'படி 5: மேற்கோள் இணைப்புகளை கிளிக் செய்து ஆதாரங்களை சரிபார்க்கவும், ElevenLabs குரல் ஸ்டுடியோவை பயன்படுத்தவும்.'
    ],
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
    title: 'వెబ్‌పేజీని ఉపయోగించే విధానం',
    subtitle: 'పత్రాలను మార్చడానికి మరియు 5 ఫార్మాట్‌లను ఉపయోగించడానికి దశలవారీ సూచనలు.',
    fullScript: 'ఓమ్నిట్రాన్స్‌ఫార్మ్ AI ని ఉపయోగించే విధానం: దశ 1: డాక్యుమెంట్ విభాగంలో ఒక నమూనా పత్రాన్ని ఎంచుకోండి లేదా మీ PDFని అప్‌లోడ్ చేయండి. దశ 2: పై నావిగేషన్ బార్‌లో ఎగ్జిక్యూటివ్, టెక్నికల్ లేదా పబ్లిక్ వర్గాన్ని ఎంచుకోండి. దశ 3: ఎరుపు రంగు "Transform Document Now" బటన్‌పై క్లిక్ చేయండి. దశ 4: క్రింది 5 ట్యాబ్‌లను చూడండి: మెమో, స్లైడ్‌లు, ఇన్ఫోగ్రాఫిక్స్, వార్తలు మరియు వాయిస్ పాడ్‌కాస్ట్. దశ 5: మూల ఆధారాలను ధృవీకరించడానికి సైటేషన్ లింక్‌లను క్లిక్ చేయండి.',
    stepAudioScripts: [
      'దశ 1: ఒక నమూనా పత్రాన్ని ఎంచుకోండి లేదా మీ స్వంత PDFని అప్‌లోడ్ చేయండి.',
      'దశ 2: పై బార్‌లో ఎగ్జిక్యూటివ్, టెక్నికల్ లేదా పబ్లిక్ ఆడియన్స్‌ను ఎంచుకోండి.',
      'దశ 3: ఎరుపు Transform Document Now బటన్‌పై క్లిక్ చేసి 10 సెకన్లలో ఫలితాలు పొందండి.',
      'దశ 4: మెమో, స్లైడ్‌లు, ఇన్ఫోగ్రాఫిక్స్ మరియు ఆడియో ట్యాబ్‌లను పరిశీలించండి.',
      'దశ 5: మూల ఆధారాలను తనిఖీ చేయండి మరియు ElevenLabs వాయిస్ టెస్ట్ చేయండి.'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'దశ 1: పత్రాన్ని ఎంచుకోండి లేదా PDF అప్‌లోడ్ చేయండి',
        actionText: 'నమూనా డాక్యుమెంట్‌పై క్లిక్ చేయండి లేదా మీ PDFని డ్రాగ్ చేయండి.',
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
        actionText: 'ట్యాబ్ 1 నుండి 5 వరకు క్లిక్ చేసి ఫలితాలు చూడండి.',
        details: 'సమకాలీకరించబడిన అవుట్‌పుట్.',
        uiTarget: 'అవుట్‌పుట్ డ్యాష్‌బోర్డ్'
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
    title: 'ওয়েবপেজ ব্যবহারের নির্দেশিকা',
    subtitle: 'ডকুমেন্ট রূপান্তর এবং ৫টি ফরম্যাট ব্যবহারের ধাপে ধাপে নির্দেশনা।',
    fullScript: 'অমনিট্রান্সফর্ম এআই ব্যবহারের নিয়মাবলী: ধাপ ১: ডকুমেন্ট সেকশনে গিয়ে যেকোনো একটি নমুনা ডকুমেন্ট নির্বাচন করুন বা আপনার নিজস্ব পিডিএফ ফাইল আপলোড করুন। ধাপ ২: ওপরের নেভিগেশন বার থেকে অডিয়েন্স নির্বাচন করুন: এক্সিকিউটিভ, টেকনিক্যাল অথবা পাবলিক। ধাপ ৩: লাল "Transform Document Now" বাটনে ক্লিক করুন এবং ১০ সেকেন্ডে রূপান্তর সম্পন্ন হতে দেখুন। ধাপ ৪: নিচের ৫টি ট্যাব দেখুন: ১-পৃষ্ঠার মেমো, স্লাইডস, ইনফোগ্রাফিক্স, এবং অডিও পডকাস্ট। ধাপ ৫: যেকোনো সাইটেশন ব্যাজে ক্লিক করে মূল পিডিএফ তথ্য যাচাই করুন।',
    stepAudioScripts: [
      'ধাপ ১: একটি নমুনা ডকুমেন্ট নির্বাচন করুন অথবা আপনার নিজস্ব পিডিএফ ফাইল আপলোড করুন।',
      'ধাপ ২: ওপরের বার থেকে এক্সিকিউটিভ, টেকনিক্যাল অথবা পাবলিক মোড নির্বাচন করুন।',
      'ধাপ ৩: লাল Transform Document Now বাটনে ক্লিক করে ১০ সেকেন্ডে রূপান্তর শুরু করুন।',
      'ধাপ ৪: মেমো, স্লাইড, ইনফোগ্রাফিক্স এবং অডিও পডকাস্ট ট্যাবগুলো অন্বেষণ করুন।',
      'ধাপ ৫: সাইটেশন লিঙ্কে ক্লিক করে তথ্য যাচাই করুন এবং ElevenLabs ভয়েস পরীক্ষা করুন।'
    ],
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
    title: 'वेबपेज वापरण्याच्या पायऱ्या',
    subtitle: 'दस्तऐवज रूपांतरित करण्यासाठी आणि ५ फॉरमॅट्स वापरण्यासाठी टप्प्याटप्प्याने सूचना.',
    fullScript: 'ओम्नीट्रान्सफॉर्म AI वापरण्याची पद्धत अशी आहे: पायरी १: दस्तऐवज विभागात जाऊन उपलब्ध अहवालांपैकी एक निवडा किंवा तुमची स्वतःची PDF फाईल अपलोड करा. पायरी २: वरच्या नेव्हिगेशन बारमधून तुमचा प्रेक्षक वर्ग निवडा: एक्झिक्युटिव्ह, टेक्निकल किंवा सामान्य नागरिक. पायरी ३: लाल "Transform Document Now" बटनावर क्लिक करा आणि १० सेकंदात निकाल मिळवा. पायरी ४: खालील ५ टॅब तपासा: मेमो, स्लाईड्स, इन्फोग्राफिक्स आणि ऑडिओ पॉडकास्ट. पायरी ५: मूळ संदर्भांची पडताळणी करण्यासाठी सायटेशन बॅजवर क्लिक करा.',
    stepAudioScripts: [
      'पायरी १: एक नमुना दस्तऐवज निवडा किंवा तुमची स्वतःची PDF फाईल अपलोड करा.',
      'पायरी २: वरच्या पट्टीवरून एक्झिक्युटिव्ह, टेक्निकल किंवा पब्लिक पर्याय निवडा.',
      'पायरी ३: लाल Transform Document Now बटनावर क्लिक करून रूपांतरण सुरू करा.',
      'पायरी ४: मेमो, प्रेझेंटेशन स्लाईड्स, इन्फोग्राफिक्स आणि ऑडिओ टॅब पहा.',
      'पायरी ५: संदर्भ तपासण्यासाठी सायटेशनवर क्लिक करा आणि ElevenLabs व्हॉइस वापरा.'
    ],
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
    title: 'વેબપેજનો ઉપયોગ કરવાની રીત',
    subtitle: 'દસ્તાવેજ રૂપાંતરણ અને 5 આઉટપુટ ફોર્મેટનો ઉપયોગ કરવા માટેની માર્ગદર્શિકા.',
    fullScript: 'ઓમ્નીટ્રાન્સફોર્મ AI નો ઉપયોગ કરવાની રીત: પગલું 1: દસ્તાવેજ વિભાગમાં જઈને નમૂના દસ્તાવેજ પર ક્લિક કરો અથવા તમારી PDF અપલોડ કરો. પગલું 2: ટોચના બારમાંથી શ્રોતા પ્રકાર પસંદ કરો: એક્ઝિક્યુટિવ, ટેકનિકલ અથવા પબ્લિક. પગલું 3: લાલ "Transform Document Now" બટન પર ક્લિક કરો અને 10 સેકન્ડમાં રૂપાંતરણ પૂર્ણ થવા દો. પગલું 4: નીચેના 5 ટેબ તપાસો: મેમો, સ્લાઇડ્સ, ઇન્ફોગ્રાફિક્સ અને પોડકાસ્ટ. પગલું 5: સાયટેશન બેજ પર ક્લિક કરીને મૂળ PDF ના સંદર્ભો તપાસો.',
    stepAudioScripts: [
      'પગલું 1: નમૂના દસ્તાવેજ પસંદ કરો અથવા તમારી પોતાની PDF ફાઇલ અપલોડ કરો.',
      'પગલું 2: ટોચના બારમાંથી એક્ઝિક્યુટિવ, ટેકનિકલ અથવા પબ્લિક પસંદ કરો.',
      'પગલું 3: લાલ Transform Document Now બટન પર ક્લિક કરીને રૂપાંતરણ શરૂ કરો.',
      'પગલું 4: મેમો, સ્લાઇડ્સ, ઇન્ફોગ્રાફિક્સ અને ઓડિયો ટેબ તપાસો.',
      'પગલું 5: સંદર્ભો તપાસવા માટે સાયટેશન પર ક્લિક કરો અને ElevenLabs વોઇસ વાપરો.'
    ],
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
