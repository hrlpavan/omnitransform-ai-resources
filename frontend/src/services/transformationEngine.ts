import type { TransformedOutput, AudiencePersona } from '../types';
import { getPersonaTransformedOutput } from '../data/sampleAdvisories';

export async function transformDocument(
  docId: string,
  persona: AudiencePersona = 'executive',
  onProgress?: (step: number, stepName: string) => void
): Promise<TransformedOutput> {
  const steps = [
    { step: 1, name: 'Spatial Coordinate & Table Extraction (PyMuPDF)' },
    { step: 2, name: 'Semantic Chunking & FAISS Vector Indexing' },
    { step: 3, name: `Multi-Persona Adaptive Tuning (${persona.toUpperCase()} Mode)` },
    { step: 4, name: 'Parallel Format Compilers (Slides, Infographics, Audio, Press)' },
    { step: 5, name: 'Reverse Citation Coordinate Mapping & Verification' }
  ];

  for (let i = 0; i < steps.length; i++) {
    if (onProgress) {
      onProgress(steps[i].step, steps[i].name);
    }
    await new Promise((resolve) => setTimeout(resolve, 700));
  }

  return getPersonaTransformedOutput(docId, persona);
}
