import React, { useState } from 'react';
import { Award, ArrowUpRight, Instagram, Linkedin, Calendar, CheckCircle2 } from 'lucide-react';
import { Trainer, TRAINERS } from '../data/gymData';

interface TrainersSectionProps {
  onBookTrainer: (trainerName: string) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onBookTrainer }) => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <section id="trainers" className="py-24 bg-[#0B0D0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold block mb-2">
              MASTER COACHING STAFF
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#F5F5F0] leading-tight">
              LEADERSHIP FORGED <br />
              <span className="text-[#A5AAA3]">IN EVIDENCE & IRON</span>
            </h2>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#A5AAA3] max-w-sm ml-auto">
              Every VOLT coach possesses collegiate or elite sports performance credentials and commits to 100+ hours of annual continuing education.
            </p>
            <span className="text-[11px] text-[#C6FF3D]/80 uppercase tracking-widest mt-1 block">
              Sample Verified Coach Profiles
            </span>
          </div>
        </div>

        {/* 4 Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group bg-[#131614] border border-[#232723] hover:border-[#C6FF3D]/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Frame */}
              <div className="relative h-80 overflow-hidden bg-black">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131614] via-[#131614]/30 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[11px] text-[#C6FF3D] font-mono">
                  {trainer.experienceYears}+ YRS COACHING
                </div>

                {/* Social icons overlay on hover */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={trainer.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${trainer.name} Instagram`}
                    className="p-1.5 rounded-md bg-black/80 text-white hover:text-[#C6FF3D] transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={trainer.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${trainer.name} LinkedIn`}
                    className="p-1.5 rounded-md bg-black/80 text-white hover:text-[#C6FF3D] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Bottom title on photo */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-display font-bold uppercase text-white group-hover:text-[#C6FF3D] transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-[#A5AAA3] font-medium">{trainer.role}</p>
                </div>
              </div>

              {/* Bio & Certifications */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#A5AAA3] block">Specialty</span>
                    <p className="text-xs text-white font-medium">{trainer.specialty}</p>
                  </div>

                  <p className="text-xs text-[#A5AAA3] line-clamp-3 leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>

                {/* Certifications (Sample Labeled) */}
                <div className="pt-3 border-t border-[#232723]">
                  <span className="text-[10px] uppercase tracking-wider text-[#A5AAA3]/70 block mb-1.5">
                    Credentials & Accreditations:
                  </span>
                  <div className="space-y-1">
                    {trainer.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#F5F5F0]">
                        <CheckCircle2 className="w-3 h-3 text-[#C6FF3D] shrink-0" />
                        <span className="truncate">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Action */}
                <button
                  type="button"
                  onClick={() => onBookTrainer(trainer.name)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#171A17] hover:bg-[#C6FF3D] text-white hover:text-[#0B0D0C] border border-[#232723] hover:border-[#C6FF3D] text-xs font-bold font-display uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
