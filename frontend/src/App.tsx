import React, { useState } from 'react';
import type { AudiencePersona, SampleDocument, TransformedOutput, Citation } from './types';
import { SAMPLE_DOCUMENTS, getPersonaTransformedOutput } from './data/sampleAdvisories';
import { transformDocument } from './services/transformationEngine';
import { GovtHeaderRibbon } from './components/GovtHeaderRibbon';
import { Navbar } from './components/Navbar';
import { WorkforceAwarenessBanner } from './components/WorkforceAwarenessBanner';
import { DocumentUploader } from './components/DocumentUploader';
import { PipelineVisualizer } from './components/PipelineVisualizer';
import { OutputDashboard } from './components/OutputDashboard';
import { ProjectUpdatesAudioHub } from './components/ProjectUpdatesAudioHub';
import { VoiceFAQSection } from './components/VoiceFAQSection';
import { CitationInspectorModal } from './components/CitationInspectorModal';
import { VentureStrategyModal } from './components/VentureStrategyModal';
import { WorkforceModal } from './components/WorkforceModal';
import { MultilingualVoiceGuideModal } from './components/MultilingualVoiceGuideModal';
import { Footer } from './components/Footer';
import { Shield, Cpu, Users } from 'lucide-react';
import confetti from 'canvas-confetti';

export const App: React.FC = () => {
  const [currentPersona, setCurrentPersona] = useState<AudiencePersona>('executive');
  const [selectedDoc, setSelectedDoc] = useState<SampleDocument | null>(SAMPLE_DOCUMENTS[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pipelineStep, setPipelineStep] = useState(0);
  const [pipelineStepName, setPipelineStepName] = useState('');
  const [transformedOutput, setTransformedOutput] = useState<TransformedOutput | null>(
    getPersonaTransformedOutput('ntro-advisory-2026', 'executive')
  );
  const [activeCitation, setActiveCitation] = useState<Citation | null>(null);
  const [showVentureModal, setShowVentureModal] = useState<boolean>(false);
  const [showWorkforceModal, setShowWorkforceModal] = useState<boolean>(false);
  const [showVoiceGuideModal, setShowVoiceGuideModal] = useState<boolean>(false);
  const [personaToast, setPersonaToast] = useState<{ show: boolean; title: string; desc: string } | null>(null);

  const handleStartTransform = async () => {
    if (!selectedDoc) return;

    setIsProcessing(true);
    setPipelineStep(1);
    setTransformedOutput(null);

    try {
      const result = await transformDocument(
        selectedDoc.id,
        currentPersona,
        (step, stepName) => {
          setPipelineStep(step);
          setPipelineStepName(stepName);
        }
      );

      setTransformedOutput(result);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {}
    } catch (err) {
      console.error('Transformation failed', err);
    } finally {
      setIsProcessing(false);
    }
  };

  // Instant Persona Switching: Dynamically re-grounds all 5 output formats!
  const handlePersonaChange = (p: AudiencePersona) => {
    setCurrentPersona(p);
    const activeDocId = selectedDoc ? selectedDoc.id : 'ntro-advisory-2026';
    const updated = getPersonaTransformedOutput(activeDocId, p);
    setTransformedOutput(updated);

    const personaDescriptions = {
      executive: {
        title: 'Executive Leadership Mode Active',
        desc: 'Re-grounded 5 formats for C-Suite Briefing, Strategic ROI & Governance Directives'
      },
      analyst: {
        title: 'Technical & SOC Analysis Mode Active',
        desc: 'Re-grounded 5 formats with CVE-2026-3841 Forensics, Raw IOCs & Engineering Hotfixes'
      },
      citizen: {
        title: 'Public Citizen Advisory Mode Active',
        desc: 'Re-grounded 5 formats for Plain-Language Public Awareness & Helpline 1930 Support'
      }
    };

    setPersonaToast({
      show: true,
      title: personaDescriptions[p].title,
      desc: personaDescriptions[p].desc
    });

    setTimeout(() => {
      setPersonaToast(null);
    }, 3200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans">
      <GovtHeaderRibbon />
      <Navbar
        currentPersona={currentPersona}
        onPersonaChange={handlePersonaChange}
        isProcessing={isProcessing}
        onOpenVentureModal={() => setShowVentureModal(true)}
        onOpenVoiceGuide={() => setShowVoiceGuideModal(true)}
      />

      {/* Floating Persona Switch Toast Notification */}
      {personaToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1D1D1F] text-white p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-200 no-print max-w-md">
          <div className="w-9 h-9 rounded-xl bg-[#0071E3] flex items-center justify-center text-white shrink-0">
            {currentPersona === 'executive' && <Shield className="w-5 h-5" />}
            {currentPersona === 'analyst' && <Cpu className="w-5 h-5" />}
            {currentPersona === 'citizen' && <Users className="w-5 h-5" />}
          </div>
          <div>
            <span className="text-xs font-bold text-white block">{personaToast.title}</span>
            <span className="text-[11px] text-zinc-300 block leading-tight mt-0.5">{personaToast.desc}</span>
          </div>
        </div>
      )}

      <main className="flex-1 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-8 space-y-10">
        {/* Sovereign Workforce Awareness Banner */}
        <WorkforceAwarenessBanner onOpenReport={() => setShowWorkforceModal(true)} />

        <DocumentUploader
          selectedDoc={selectedDoc}
          onSelectDoc={(doc) => {
            setSelectedDoc(doc);
            if (doc) {
              setTransformedOutput(getPersonaTransformedOutput(doc.id, currentPersona));
            }
          }}
          onStartTransform={handleStartTransform}
          isProcessing={isProcessing}
        />

        <PipelineVisualizer
          currentStep={pipelineStep}
          currentStepName={pipelineStepName}
          isProcessing={isProcessing}
        />

        {transformedOutput && (
          <OutputDashboard
            output={transformedOutput}
            onOpenCitation={setActiveCitation}
          />
        )}

        {/* Real-time Project Updates Audio Hub */}
        <ProjectUpdatesAudioHub />

        {/* Conversational Voice FAQ Section */}
        <VoiceFAQSection />
      </main>

      <Footer />

      {/* Interactive Modals */}
      {activeCitation && (
        <CitationInspectorModal
          citation={activeCitation}
          onClose={() => setActiveCitation(null)}
        />
      )}

      <VentureStrategyModal
        isOpen={showVentureModal}
        onClose={() => setShowVentureModal(false)}
      />

      <WorkforceModal
        isOpen={showWorkforceModal}
        onClose={() => setShowWorkforceModal(false)}
      />

      <MultilingualVoiceGuideModal
        isOpen={showVoiceGuideModal}
        onClose={() => setShowVoiceGuideModal(false)}
      />
    </div>
  );
};

export default App;
