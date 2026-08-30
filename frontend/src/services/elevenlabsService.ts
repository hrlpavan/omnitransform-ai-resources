import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

export interface TTSOptions {
  text: string;
  voiceId?: string;
  modelId?: 'eleven_multilingual_v2' | 'eleven_v3' | 'eleven_flash_v2_5';
  languageCode?: string;
  apiKey?: string;
  humanizeStyle?: 'natural' | 'executive' | 'expressive';
}

export interface VoicePreset {
  id: string;
  name: string;
  role: string;
  desc: string;
  accent: string;
  gender: string;
  persona: string;
  bcp47: string;
}

export const ELEVENLABS_VOICE_PRESETS: VoicePreset[] = [
  { id: '21m00Tcm4TlvDq8ikWAM', name: 'Aditi / Rachel', role: 'Intelligence Anchor', desc: 'Natural, warm, and conversational tone with expressive Indian phrasing', accent: 'Indian & Global English', gender: 'Female', persona: 'Natural, warm, and conversational tone with expressive phrasing', bcp47: 'en-IN' },
  { id: 'pNInz6obpgDQGcFmaJgB', name: 'Rohit / Adam', role: 'Executive Lead', desc: 'Authoritative, calm, and grounded technical briefing voice', accent: 'Indian National Hindi/English', gender: 'Male', persona: 'Deep, calm, executive resonance with human clarity', bcp47: 'hi-IN' },
  { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Ananya / Bella', role: 'Public Outreach', desc: 'Warm, empathetic, and accessible narration style', accent: 'South Indic (Kannada/Tamil/Telugu)', gender: 'Female', persona: 'Friendly, clear, high-articulation native speaker', bcp47: 'kn-IN' },
  { id: 'TxGEqnHWrfWFTfGW9XjX', name: 'Kabir / Josh', role: 'Operations Commander', desc: 'Deep resonance and decisive command presence', accent: 'Western & North Indic (Marathi/Gujarati)', gender: 'Male', persona: 'Authoritative, engaging, dynamic rhythm', bcp47: 'mr-IN' },
  { id: 'NOpBlnGInO9m6vDvFkFC', name: 'Zephyros / Storyteller', role: 'Cinematic / Emotional', desc: 'Optimized for eleven_v3 emotional tags [whispers], [sarcastically], [giggles]', accent: 'Cinematic Storyteller', gender: 'Narrator', persona: 'Optimized for emotional tags like [whispers], [cheerfully]', bcp47: 'en-US' }
];

/**
 * Generate humanized speech dynamically using official ElevenLabs SDK client
 * with tuned stability and similarity boost for 100% natural prosody
 */
export async function convertTextToSpeechSDK({
  text,
  voiceId = '21m00Tcm4TlvDq8ikWAM',
  modelId = 'eleven_multilingual_v2',
  languageCode = 'en',
  apiKey,
  humanizeStyle = 'natural'
}: TTSOptions): Promise<{ audioUrl: string; duration: number }> {
  const activeKey = apiKey || (import.meta.env.VITE_ELEVENLABS_API_KEY as string) || '';

  // Initialize Official ElevenLabs Client
  const elevenlabs = new ElevenLabsClient({
    apiKey: activeKey || undefined
  });

  // Humanized Voice Settings:
  // Lower stability (0.40 - 0.45) introduces natural human pitch variation and emotional warmth.
  // Higher style (0.40) adds conversational rhythm and prevents monotone robotic speech.
  const voiceSettings = {
    stability: humanizeStyle === 'expressive' ? 0.38 : (humanizeStyle === 'natural' ? 0.44 : 0.52),
    similarityBoost: 0.88,
    style: humanizeStyle === 'expressive' ? 0.50 : 0.40,
    useSpeakerBoost: true
  };

  try {
    const audioStream = await elevenlabs.textToSpeech.convert(voiceId, {
      text,
      modelId,
      languageCode,
      voiceSettings: voiceSettings as any
    });

    const chunks: any[] = [];
    if (audioStream && typeof (audioStream as any)[Symbol.asyncIterator] === 'function') {
      for await (const chunk of audioStream as any) {
        chunks.push(typeof chunk === 'string' ? new TextEncoder().encode(chunk) : chunk);
      }
    } else if (audioStream instanceof Blob) {
      const arrayBuffer = await audioStream.arrayBuffer();
      chunks.push(arrayBuffer);
    } else if (audioStream instanceof ArrayBuffer) {
      chunks.push(audioStream);
    }

    const audioBlob = new Blob(chunks, { type: 'audio/mpeg' });
    const audioUrl = URL.createObjectURL(audioBlob);
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const duration = Math.max(5, Math.round((wordCount / 130) * 60));

    return { audioUrl, duration };
  } catch (err: any) {
    console.warn('ElevenLabs SDK humanized convert fallback:', err);
    throw err;
  }
}
