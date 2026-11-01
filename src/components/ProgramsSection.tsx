import React, { useState } from 'react';
import { ArrowUpRight, Flame, Clock, Dumbbell, Filter } from 'lucide-react';
import { Program, PROGRAMS } from '../data/gymData';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'strength', label: 'Strength' },
    { id: 'hiit', label: 'HIIT & Conditioning' },
    { id: 'coaching', label: '1-on-1 Coaching' },
    { id: 'mobility', label: 'Mobility & Recovery' },
  ];

  const filteredPrograms =
    activeCategory === 'all'
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === activeCategory || (activeCategory === 'strength' && p.category === 'hypertrophy'));

  return (
    <section id="programs" className="py-24 bg-[#0B0D0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold block mb-2">
              DISCIPLINE & DOMINANCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
              ENGINEERED TRAINING <br />
              <span className="text-[#A5AAA3]">FOR SERIOUS ATHLETES</span>
            </h2>
          </div>
          <p className="text-sm text-[#A5AAA3] max-w-md leading-relaxed">
            Every program at VOLT ATHLETICS is built upon proven sports physiology and progressive overload. Choose your discipline and forge measurable progress.
          </p>
        </div>

        {/* Filter Tabs (Functional segmented controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#232723]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#C6FF3D] text-[#0B0D0C] shadow-md shadow-[#C6FF3D]/10 font-bold'
                  : 'bg-[#171A17] text-[#A5AAA3] hover:text-white hover:bg-[#232723]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid - Asymmetric Layout with varied spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program, index) => {
            const isMarquee = index === 0;

            return (
              <div
                key={program.id}
                className={`group relative bg-[#131614] border border-[#232723] hover:border-[#C6FF3D]/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  isMarquee && activeCategory === 'all' ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Frame with zoom on hover */}
                <div
                  className={`relative overflow-hidden bg-black ${
                    isMarquee && activeCategory === 'all' ? 'h-64 sm:h-80' : 'h-60'
                  }`}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131614] via-[#131614]/30 to-transparent" />

                  {/* Top unboxed metadata */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                      <span className="text-[#C6FF3D] font-semibold">{program.difficulty}</span>
                      <span aria-hidden="true" className="text-white/40">·</span>
                      <span className="text-[#A5AAA3]">{program.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-white group-hover:text-[#C6FF3D] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs text-[#A5AAA3] font-medium mt-1 mb-3">
                      {program.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#A5AAA3] line-clamp-3 leading-relaxed mb-4">
                      {program.description}
                    </p>
                  </div>

                  {/* Highlights and Discover Action */}
                  <div className="pt-4 border-t border-[#232723] flex items-center justify-between gap-4">
                    <div className="text-xs text-[#A5AAA3]">
                      <span className="block text-[11px] text-[#A5AAA3]/70">Lead Coach</span>
                      <span className="text-white font-medium">{program.trainerName}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectProgram(program)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#171A17] hover:bg-[#C6FF3D] text-white hover:text-[#0B0D0C] border border-[#232723] hover:border-[#C6FF3D] text-xs font-bold font-display uppercase tracking-wider transition-all cursor-pointer shrink-0"
                    >
                      <span>Discover Program</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
