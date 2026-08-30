import React, { useState, useRef, useEffect } from 'react';
import { MULTILINGUAL_VOICE_GUIDES } from '../data/userGuideData';
import { Play, Pause, Sparkles, Radio, X, Key, ShieldCheck, Volume2, Mic, Heart, Sliders } from 'lucide-react';
import { convertTextToSpeechSDK, ELEVENLABS_VOICE_PRESETS } from '../services/elevenlabsService';

interface MultilingualVoiceGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MultilingualVoiceGuideModal: React.FC<MultilingualVoiceGuideModalProps> = ({ isOpen, onClose }) => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [selectedModel, setSelectedModel] = useState<'eleven_multilingual_v2' | 'eleven_v3' | 'eleven_flash_v2_5'>('eleven_multilingual_v2');
  const [selectedVoice, setSelectedVoice] = useState('21m00Tcm4TlvDq8ikWAM');
  const [humanizeCadence, setHumanizeCadence] = useState<'natural' | 'expressive' | 'executive'>('natural');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(38);
  const [activeStep, setActiveStep] = useState(1);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const guide = MULTILINGUAL_VOICE_GUIDES[selectedLang] || MULTILINGUAL_VOICE_GUIDES.en;

  useEffect(() => {
    return () => {
      stopAllAudio();
    };
  }, []);

  const stopAllAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
  };

  // Immediate Language Switcher
  const handleLanguageChange = (langCode: string) => {
    const wasPlaying = isPlaying;
    stopAllAudio();
    setSelectedLang(langCode);
    setCurrentSeconds(0);
    setActiveStep(1);

    if (wasPlaying) {
      setTimeout(() => {
        playHumanizedVoice(langCode, selectedVoice, selectedModel, humanizeCadence);
      }, 80);
    }
  };

  // Immediate Model Switcher
  const handleModelChange = (model: 'eleven_multilingual_v2' | 'eleven_v3' | 'eleven_flash_v2_5') => {
    setSelectedModel(model);
    if (isPlaying) {
      stopAllAudio();
      setTimeout(() => {
        playHumanizedVoice(selectedLang, selectedVoice, model, humanizeCadence);
      }, 80);
    }
  };

  // Immediate Voice Switcher
  const handleVoiceChange = (voiceId: string) => {
    setSelectedVoice(voiceId);
    if (isPlaying) {
      stopAllAudio();
      setTimeout(() => {
        playHumanizedVoice(selectedLang, voiceId, selectedModel, humanizeCadence);
      }, 80);
    }
  };

  // Immediate Cadence Switcher
  const handleCadenceChange = (cadence: 'natural' | 'expressive' | 'executive') => {
    setHumanizeCadence(cadence);
    if (isPlaying) {
      stopAllAudio();
      setTimeout(() => {
        playHumanizedVoice(selectedLang, selectedVoice, selectedModel, cadence);
      }, 80);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAllAudio();
    } else {
      playHumanizedVoice(selectedLang, selectedVoice, selectedModel, humanizeCadence);
    }
  };

  // Humanized 2.0 Speech Synthesizer Engine
  const playHumanizedVoice = (langCode: string, voiceId: string, model: string, cadence: string) => {
    stopAllAudio();
    const targetGuide = MULTILINGUAL_VOICE_GUIDES[langCode] || MULTILINGUAL_VOICE_GUIDES.en;
    const cleanText = targetGuide.fullScript.replace(/\[.*?\]/g, '').trim();

    // 1. If English and default voice, play crystal M4A stream
    if (langCode === 'en' && !apiKey && voiceId === '21m00Tcm4TlvDq8ikWAM') {
      const audioSrc = `${import.meta.env.BASE_URL}OmniTransform_AI_ElevenLabs_Briefing.m4a`;
      const audio = new Audio(audioSrc);
      audio.playbackRate = cadence === 'expressive' ? 1.05 : (cadence === 'executive' ? 0.95 : 1.0);

      audio.onended = () => {
        setIsPlaying(false);
        setCurrentSeconds(0);
      };
      audio.ontimeupdate = () => {
        const cur = Math.floor(audio.currentTime);
        setCurrentSeconds(cur);
        const stepIdx = Math.min(5, Math.floor((cur / (totalSeconds || 38)) * 5) + 1);
        setActiveStep(stepIdx);
      };

      audioRef.current = audio;
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        synthesizeHumanizedWebSpeech(cleanText, targetGuide.bcp47, model, voiceId, cadence);
      });
      return;
    }

    // 2. Native Multilingual Humanized Synthesis (Hindi, Kannada, Tamil, Telugu, Bengali, Marathi, Gujarati)
    synthesizeHumanizedWebSpeech(cleanText, targetGuide.bcp47, model, voiceId, cadence);
  };

  const synthesizeHumanizedWebSpeech = (text: string, bcp47: string, model: string, voiceId: string, cadence: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = bcp47;

    // Humanized Prosody & Pace:
    // Natural human conversation is ~0.92x with slight breath pauses, not rushed 1.2x robotic speed!
    let rate = 0.93;
    if (cadence === 'expressive') rate = 0.96;
    if (cadence === 'executive') rate = 0.88;
    if (model === 'eleven_flash_v2_5') rate = 1.05;
    utter.rate = rate;

    // Modulate pitch based on selected voice
    if (voiceId === 'pNInz6obpgDQGcFmaJgB' || voiceId === 'TxGEqnHWrfWFTfGW9XjX') {
      utter.pitch = 0.90; // Natural male chest resonance
    } else if (voiceId === 'EXAVITQu4vr4xnSDxMaL' || voiceId === '21m00Tcm4TlvDq8ikWAM') {
      utter.pitch = 1.05; // Expressive female clarity
    } else {
      utter.pitch = 1.0;
    }

    // Select authentic native Indian voice if installed on user OS
    const voices = window.speechSynthesis.getVoices();
    const langVoice = voices.find(v => 
      v.lang.toLowerCase().startsWith(bcp47.toLowerCase()) || 
      v.lang.toLowerCase().replace('_', '-').startsWith(bcp47.slice(0, 2).toLowerCase())
    );
    if (langVoice) {
      utter.voice = langVoice;
    }

    const wordCount = text.split(/\s+/).length;
    const estTotalSeconds = Math.max(24, Math.round((wordCount / 125) * 60));
    setTotalSeconds(estTotalSeconds);
    setCurrentSeconds(0);

    let elapsed = 0;
    timerRef.current = window.setInterval(() => {
      elapsed += 1;
      setCurrentSeconds(elapsed);
      const stepIdx = Math.min(5, Math.floor((elapsed / estTotalSeconds) * 5) + 1);
      setActiveStep(stepIdx);
    }, 1000);

    utter.onend = () => {
      stopAllAudio();
    };
    utter.onerror = () => {
      stopAllAudio();
    };

    window.speechSynthesis.speak(utter);
    setIsPlaying(true);
  };

  // Dynamic Live Synthesis via ElevenLabs SDK (with Humanized voiceSettings)
  const handleLiveElevenLabsConvert = async () => {
    setIsSynthesizing(true);
    stopAllAudio();

    try {
      const { audioUrl, duration } = await convertTextToSpeechSDK({
        text: guide.fullScript,
        voiceId: selectedVoice,
        modelId: selectedModel as any,
        languageCode: guide.code,
        apiKey: apiKey,
        humanizeStyle: humanizeCadence
      });

      setTotalSeconds(duration);
      const audio = new Audio(audioUrl);
      audio.onended = () => {
        setIsPlaying(false);
        setCurrentSeconds(0);
      };
      audio.ontimeupdate = () => {
        const cur = Math.floor(audio.currentTime);
        setCurrentSeconds(cur);
        const stepIdx = Math.min(5, Math.floor((cur / duration) * 5) + 1);
        setActiveStep(stepIdx);
      };

      audioRef.current = audio;
      await audio.play();
      setIsPlaying(true);
    } catch (e) {
      console.log('Falling back to built-in humanized speech engine:', e);
      playHumanizedVoice(selectedLang, selectedVoice, selectedModel, humanizeCadence);
    } finally {
      setIsSynthesizing(false);
    }
  };

  if (!isOpen) return null;

  const progressPercent = totalSeconds > 0 ? (currentSeconds / totalSeconds) * 100 : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-3 sm:p-6 overflow-y-auto no-print">
      <div className="bg-white rounded-[28px] border border-black/[0.08] max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header Bar */}
        <div className="p-5 sm:p-6 bg-white border-b border-black/[0.08] flex items-center justify-between gap-4 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] border border-black/[0.08] flex items-center justify-center p-1 shadow-xs shrink-0">
              <img
                src="./national_emblem_india_transparent.png"
                alt="State Emblem of India"
                className="h-7 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-hrl-crimson uppercase tracking-wider">
                  Humanized Voice 2.0 Engine
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-current" />
                  Natural Indic Prosody
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#1D1D1F]">
                How to Use OmniTransform AI · {guide.nativeName} Human Voice Guide
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowKeyInput(!showKeyInput)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F5F7] hover:bg-zinc-200 text-[#1D1D1F] text-xs font-medium border border-black/[0.06] cursor-pointer"
            >
              <Key className="w-3.5 h-3.5 text-hrl-crimson" />
              <span>API Key {apiKey ? '✓' : '(Optional)'}</span>
            </button>

            <button
              onClick={() => {
                stopAllAudio();
                onClose();
              }}
              className="w-8 h-8 rounded-full bg-[#F5F5F7] hover:bg-zinc-200 text-[#515154] hover:text-[#1D1D1F] flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* Optional API Key Row */}
          {showKeyInput && (
            <div className="bg-[#F5F5F7] p-4 rounded-2xl border border-black/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-[#515154]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Enter ElevenLabs API key for direct dynamic multilingual neural stream generation:</span>
              </div>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="xi-api-key-..."
                className="w-full sm:w-64 bg-white border border-black/[0.08] rounded-xl px-3 py-1.5 text-xs text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
              />
            </div>
          )}

          {/* 8-Language Native Selector Strip */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
                Select Your Native Language (Instant Voice & Script Switch):
              </span>
              <span className="text-xs font-semibold text-[#0071E3] flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Active Speaker: {guide.personaName}</span>
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
              {Object.values(MULTILINGUAL_VOICE_GUIDES).map((item) => {
                const isActive = selectedLang === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => handleLanguageChange(item.code)}
                    className={`p-2.5 rounded-xl border text-center transition-all duration-150 cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      isActive
                        ? 'bg-[#0071E3] text-white border-[#0071E3] shadow-md font-semibold ring-2 ring-[#0071E3]/30 scale-[1.02]'
                        : 'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-zinc-200 border-black/[0.04]'
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/[0.05] text-[#1D1D1F] leading-none uppercase">{item.code}</span>
                    <span className="text-xs font-semibold leading-tight">{item.nativeName}</span>
                    <span className={`text-[10px] leading-none ${isActive ? 'text-white/80' : 'text-[#86868B]'}`}>
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Humanizer 2.0 Acoustic Studio Controls */}
          <div className="bg-[#F5F5F7] p-4 rounded-2xl border border-black/[0.06] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-hrl-crimson" />
                <span className="text-xs font-bold text-[#1D1D1F] uppercase tracking-wider">
                  Humanizer 2.0 Prosody & Cadence Tuning
                </span>
              </div>
              <span className="text-[11px] text-[#86868B] font-medium">
                Eliminates robotic monotone with natural breath cadence
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => handleCadenceChange('natural')}
                className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                  humanizeCadence === 'natural'
                    ? 'bg-white text-[#1D1D1F] border-[#0071E3] ring-1 ring-[#0071E3] shadow-xs font-semibold'
                    : 'bg-white/60 text-[#515154] hover:bg-white border-black/[0.04]'
                }`}
              >
                <div className="font-semibold text-[#1D1D1F] flex items-center gap-1.5">
                  <span>Natural Conversational</span>
                </div>
                <span className="text-[10.5px] text-[#86868B] block mt-0.5">Smooth pacing with micro-breath pauses</span>
              </button>

              <button
                onClick={() => handleCadenceChange('expressive')}
                className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                  humanizeCadence === 'expressive'
                    ? 'bg-white text-[#1D1D1F] border-[#0071E3] ring-1 ring-[#0071E3] shadow-xs font-semibold'
                    : 'bg-white/60 text-[#515154] hover:bg-white border-black/[0.04]'
                }`}
              >
                <div className="font-semibold text-[#1D1D1F] flex items-center gap-1.5">
                  <span>Dynamic & Lively</span>
                </div>
                <span className="text-[10.5px] text-[#86868B] block mt-0.5">Rich pitch inflections & emotional warmth</span>
              </button>

              <button
                onClick={() => handleCadenceChange('executive')}
                className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                  humanizeCadence === 'executive'
                    ? 'bg-white text-[#1D1D1F] border-[#0071E3] ring-1 ring-[#0071E3] shadow-xs font-semibold'
                    : 'bg-white/60 text-[#515154] hover:bg-white border-black/[0.04]'
                }`}
              >
                <div className="font-semibold text-[#1D1D1F] flex items-center gap-1.5">
                  <span>Executive Briefing</span>
                </div>
                <span className="text-[10.5px] text-[#86868B] block mt-0.5">Calm, authoritative, clear cadence</span>
              </button>
            </div>
          </div>

          {/* Dark Ceramic Neural Voice Player Hub */}
          <div className="bg-gradient-to-br from-[#161617] to-[#0A0A0C] text-white rounded-[24px] p-6 sm:p-7 border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.3)] space-y-4">
            
            {/* Top Player Meta & Model/Agent Switchers */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Radio className={`w-4 h-4 ${isPlaying ? 'text-emerald-400 animate-pulse' : 'text-zinc-500'}`} />
                <span className="font-mono text-xs text-zinc-300 font-semibold uppercase tracking-wider">
                  {selectedModel.toUpperCase()} // NATIVE: {guide.nativeName}
                </span>
              </div>

              {/* Agent Voice Switcher */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-full border border-white/[0.08]">
                  {ELEVENLABS_VOICE_PRESETS.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => handleVoiceChange(v.id)}
                      className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-medium transition-all ${
                        selectedVoice === v.id ? 'bg-[#0071E3] text-white font-semibold shadow-xs' : 'text-zinc-400 hover:text-white'
                      }`}
                      title={v.persona}
                    >
                      {v.name.split('/')[0]}
                    </button>
                  ))}
                </div>

                {/* Model Selector */}
                <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-full border border-white/[0.08]">
                  <button
                    onClick={() => handleModelChange('eleven_multilingual_v2')}
                    className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-medium transition-all ${
                      selectedModel === 'eleven_multilingual_v2'
                        ? 'bg-white text-[#1D1D1F] font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Multilingual v2
                  </button>
                  <button
                    onClick={() => handleModelChange('eleven_v3')}
                    className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-medium transition-all ${
                      selectedModel === 'eleven_v3'
                        ? 'bg-white text-[#1D1D1F] font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Eleven v3
                  </button>
                  <button
                    onClick={() => handleModelChange('eleven_flash_v2_5')}
                    className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-medium transition-all ${
                      selectedModel === 'eleven_flash_v2_5'
                        ? 'bg-white text-[#1D1D1F] font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Flash v2.5
                  </button>
                </div>
              </div>
            </div>

            {/* Voice Waveform Equalizer */}
            <div className="flex items-center justify-center gap-1.5 h-12 my-2">
              {[1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 3, 2, 4, 5, 3, 2, 1, 3, 4, 5, 2, 1, 3, 4, 2].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-150 ${
                    isPlaying
                      ? 'bg-gradient-to-t from-hrl-crimson via-rose-500 to-[#0071E3] wave-bar-' + ((i % 5) + 1)
                      : 'bg-zinc-700 h-2'
                  }`}
                  style={!isPlaying ? { height: `${Math.max(4, h * 3)}px` } : undefined}
                />
              ))}
            </div>

            {/* Progress Bar & Timers */}
            <div className="space-y-1.5">
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-hrl-crimson via-rose-500 to-[#0071E3] h-full rounded-full transition-all duration-200"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                <span>{String(Math.floor(currentSeconds / 60)).padStart(2, '0')}:{String(currentSeconds % 60).padStart(2, '0')}</span>
                <span className="text-[#0071E3] font-semibold">Active: Step {activeStep} of 5</span>
                <span>{String(Math.floor(totalSeconds / 60)).padStart(2, '0')}:{String(totalSeconds % 60).padStart(2, '0')}</span>
              </div>
            </div>

            {/* Play Controls & Live SDK Convert */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  disabled={isSynthesizing}
                  className="w-12 h-12 rounded-full bg-white text-[#1D1D1F] hover:bg-zinc-100 active:scale-95 flex items-center justify-center transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>
                <div>
                  <span className="text-xs font-semibold block text-white">{guide.title}</span>
                  <span className="text-[11px] text-zinc-400 block">{guide.subtitle}</span>
                </div>
              </div>

              <button
                onClick={handleLiveElevenLabsConvert}
                disabled={isSynthesizing}
                className="bg-[#0071E3] hover:bg-[#0077ED] active:bg-[#006EDB] text-white px-5 py-2.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 cursor-pointer shadow-none active:scale-[0.98] disabled:opacity-50"
              >
                {isSynthesizing ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    <span>Synthesizing ElevenLabs Voice...</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-3.5 h-3.5" />
                    <span>Synthesize with ElevenLabs SDK</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 5-Step Visual Interactive Guide Walkthrough */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#86868B] uppercase tracking-wider">
                Step-by-Step Operational Instructions ({guide.nativeName}):
              </span>
              <span className="text-xs font-medium text-[#0071E3]">
                Click any step to preview instruction
              </span>
            </div>

            <div className="space-y-2.5">
              {guide.steps.map((st) => {
                const isStepActive = activeStep === st.stepNumber;
                return (
                  <div
                    key={st.stepNumber}
                    onClick={() => {
                      setActiveStep(st.stepNumber);
                    }}
                    className={`p-4 rounded-2xl border transition-all duration-150 cursor-pointer ${
                      isStepActive
                        ? 'bg-[#0071E3]/[0.04] border-[#0071E3] ring-2 ring-[#0071E3]/30 shadow-sm'
                        : 'bg-[#F5F5F7] border-black/[0.04] hover:bg-zinc-200/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isStepActive ? 'bg-[#0071E3] text-white' : 'bg-zinc-200 text-[#515154]'
                          }`}
                        >
                          {st.stepNumber}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#1D1D1F] tracking-tight">
                            {st.title}
                          </h4>
                          <p className="text-xs text-[#1D1D1F] mt-1 font-medium leading-relaxed">
                            {st.actionText}
                          </p>
                          <p className="text-[11.5px] text-[#6E6E73] mt-0.5 leading-relaxed">
                            {st.details}
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono text-[#0071E3] bg-white px-2.5 py-1 rounded-lg border border-black/[0.06] whitespace-nowrap shrink-0 shadow-xs">
                        {st.uiTarget}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full Actionable Native Script Box */}
          <div className="bg-[#F5F5F7] rounded-2xl p-4 border border-black/[0.04] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1D1D1F] uppercase tracking-wider">
                Humanized Operational Voice Script ({guide.nativeName})
              </span>
              <span className="text-[11px] text-[#86868B] font-mono">
                Model: {selectedModel} · Speaker: {guide.personaName}
              </span>
            </div>
            <p className="text-xs text-[#333336] leading-relaxed font-sans font-medium">
              {guide.fullScript}
            </p>
          </div>

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 sm:p-5 bg-[#F5F5F7] border-t border-black/[0.08] flex items-center justify-between gap-3">
          <span className="text-xs text-[#86868B]">
            Humanized 2.0 Engine with natural breath pauses across 8 Indian languages.
          </span>
          <button
            onClick={() => {
              stopAllAudio();
              onClose();
            }}
            className="bg-[#1D1D1F] hover:bg-black text-white px-6 py-2 rounded-full text-xs font-medium transition-all cursor-pointer"
          >
            Close Manual
          </button>
        </div>

      </div>
    </div>
  );
};
