/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsStrip } from './components/StatsStrip';
import { ProgramsSection } from './components/ProgramsSection';
import { AboutSection } from './components/AboutSection';
import { TrainersSection } from './components/TrainersSection';
import { MembershipsSection } from './components/MembershipsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { CtaSection } from './components/CtaSection';
import { ContactFooter } from './components/ContactFooter';

import { FreeTrialModal } from './components/modals/FreeTrialModal';
import { ProgramDetailModal } from './components/modals/ProgramDetailModal';
import { PlanCheckoutModal } from './components/modals/PlanCheckoutModal';
import { ClassBookingModal } from './components/modals/ClassBookingModal';
import { PhilosophyModal } from './components/modals/PhilosophyModal';

import { Program, MembershipPlan, ClassSession } from './data/gymData';

export default function App() {
  // Modal states
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [trialInitialProgram, setTrialInitialProgram] = useState('Strength & Conditioning');

  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [planIsAnnual, setPlanIsAnnual] = useState(false);
  const [selectedSession, setSelectedSession] = useState<ClassSession | null>(null);
  const [bookedSessionIds, setBookedSessionIds] = useState<string[]>([]);
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);

  // Handlers
  const handleOpenTrial = (programName = 'Strength & Conditioning') => {
    setTrialInitialProgram(programName);
    setIsTrialOpen(true);
  };

  const handleSelectProgram = (program: Program) => {
    setSelectedProgram(program);
  };

  const handleSelectPlan = (plan: MembershipPlan, isAnnual: boolean) => {
    setSelectedPlan(plan);
    setPlanIsAnnual(isAnnual);
  };

  const handleBookSession = (session: ClassSession) => {
    setSelectedSession(session);
  };

  const handleSessionBookingSuccess = (sessionId: string) => {
    setBookedSessionIds((prev) => [...prev, sessionId]);
  };

  const handleBookTrainer = (trainerName: string) => {
    handleOpenTrial(`1-on-1 Coaching with ${trainerName}`);
  };

  return (
    <div className="min-h-screen bg-[#0B0D0C] text-[#F5F5F0] flex flex-col font-sans selection:bg-[#C6FF3D] selection:text-[#0B0D0C]">
      {/* Primary Navigation */}
      <Navbar onOpenTrial={() => handleOpenTrial()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onOpenTrial={() => handleOpenTrial()} />
        <StatsStrip />
        <ProgramsSection onSelectProgram={handleSelectProgram} />
        <AboutSection
          onOpenPhilosophy={() => setIsPhilosophyOpen(true)}
          onOpenTrial={() => handleOpenTrial()}
        />
        <TrainersSection onBookTrainer={handleBookTrainer} />
        <MembershipsSection onSelectPlan={handleSelectPlan} />
        <ScheduleSection
          onBookSession={handleBookSession}
          bookedSessionIds={bookedSessionIds}
        />
        <TestimonialsSection onOpenTrial={() => handleOpenTrial()} />
        <GallerySection />
        <CtaSection onOpenTrial={() => handleOpenTrial()} />
      </main>

      {/* Contact & Footer */}
      <ContactFooter onOpenTrial={() => handleOpenTrial()} />

      {/* Interactive Modals */}
      <FreeTrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
        initialProgram={trialInitialProgram}
      />

      <ProgramDetailModal
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onStartTrial={(title) => handleOpenTrial(title)}
      />

      <PlanCheckoutModal
        plan={selectedPlan}
        isAnnual={planIsAnnual}
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        onConfirmTrialInstead={() => handleOpenTrial(selectedPlan ? `${selectedPlan.name} Trial` : 'Trial')}
      />

      <ClassBookingModal
        session={selectedSession}
        isOpen={!!selectedSession}
        onClose={() => setSelectedSession(null)}
        onSuccess={handleSessionBookingSuccess}
      />

      <PhilosophyModal
        isOpen={isPhilosophyOpen}
        onClose={() => setIsPhilosophyOpen(false)}
        onStartTrial={() => handleOpenTrial()}
      />
    </div>
  );
}
