import React, { useState } from 'react';
import { Clock, User, MapPin, Flame, CheckCircle, CalendarDays, Filter } from 'lucide-react';
import { ClassSession, CLASS_SCHEDULE } from '../data/gymData';

interface ScheduleSectionProps {
  onBookSession: (session: ClassSession) => void;
  bookedSessionIds: string[];
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  onBookSession,
  bookedSessionIds,
}) => {
  const [selectedDay, setSelectedDay] = useState<ClassSession['day']>('Mon');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const days: { key: ClassSession['day']; label: string; full: string }[] = [
    { key: 'Mon', label: 'Mon', full: 'Monday' },
    { key: 'Tue', label: 'Tue', full: 'Tuesday' },
    { key: 'Wed', label: 'Wed', full: 'Wednesday' },
    { key: 'Thu', label: 'Thu', full: 'Thursday' },
    { key: 'Fri', label: 'Fri', full: 'Friday' },
    { key: 'Sat', label: 'Sat', full: 'Saturday' },
    { key: 'Sun', label: 'Sun', full: 'Sunday' },
  ];

  const categories = ['All', 'Strength', 'HIIT', 'Functional', 'Mobility', 'Core'];

  const filteredSessions = CLASS_SCHEDULE.filter(
    (s) => s.day === selectedDay && (selectedCategory === 'All' || s.category === selectedCategory)
  );

  return (
    <section id="schedule" className="py-24 bg-[#0B0D0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold block mb-2">
              LIVE TRAINING TIMETABLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#F5F5F0]">
              WEEKLY CLASS <br />
              <span className="text-[#A5AAA3]">TIMETABLE</span>
            </h2>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#A5AAA3] max-w-sm ml-auto">
              Classes led by certified coaches. Filter by day and discipline to reserve your spot.
            </p>
            <span className="text-[11px] text-[#C6FF3D] font-mono mt-1 block">
              Demo Timetable · Live Seat Simulation
            </span>
          </div>
        </div>

        {/* Day Selector Tabs (Mon-Sun) */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-[#131614] border border-[#232723] overflow-x-auto mb-6">
          {days.map((day) => {
            const isActive = selectedDay === day.key;
            return (
              <button
                key={day.key}
                type="button"
                onClick={() => setSelectedDay(day.key)}
                className={`flex-1 min-w-[70px] sm:min-w-[100px] py-3 px-3 rounded-xl text-center transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C6FF3D] text-[#0B0D0C] font-bold shadow-md shadow-[#C6FF3D]/10'
                    : 'text-[#A5AAA3] hover:text-white hover:bg-[#1A1F1B]'
                }`}
              >
                <span className="block text-xs uppercase font-display tracking-wider">
                  {day.label}
                </span>
                <span className="hidden sm:block text-[10px] opacity-75 font-mono">
                  {day.full}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 text-xs">
          <span className="text-[#A5AAA3] font-medium mr-1 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold'
                  : 'bg-[#171A17] text-[#A5AAA3] hover:text-white border border-[#232723]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sessions List */}
        <div className="space-y-3">
          {filteredSessions.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-[#131614] border border-[#232723]">
              <p className="text-sm text-[#A5AAA3]">No {selectedCategory} classes scheduled for this day.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-3 text-xs text-[#C6FF3D] hover:underline cursor-pointer"
              >
                View all classes on this day
              </button>
            </div>
          ) : (
            filteredSessions.map((session) => {
              const isBooked = bookedSessionIds.includes(session.id);
              const remainingSpots = isBooked ? session.spotsLeft - 1 : session.spotsLeft;

              return (
                <div
                  key={session.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#131614] border border-[#232723] hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  {/* Left: Time & Class details */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <div className="sm:w-28 shrink-0">
                      <span className="text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                        {session.time}
                      </span>
                      <span className="text-xs text-[#A5AAA3] block">{session.duration}</span>
                    </div>

                    <div className="border-l border-[#232723] pl-0 sm:pl-6 space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#C6FF3D] font-bold uppercase tracking-wider">
                          {session.category}
                        </span>
                        <span className="text-white/30">·</span>
                        <span className="text-[#A5AAA3]">{session.room}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-bold uppercase text-white">
                        {session.name}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-[#A5AAA3] pt-0.5">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#C6FF3D]" />
                          Coach {session.trainer}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Flame className="w-3.5 h-3.5 text-orange-400" />
                          {session.intensity} Intensity
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Spots status & Action button */}
                  <div className="flex items-center justify-between md:justify-end gap-5 pt-3 md:pt-0 border-t md:border-t-0 border-[#232723]">
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-white block">
                        {remainingSpots} spots left
                      </span>
                      <span className="text-[10px] text-[#A5AAA3]">of {session.spotsTotal} max</span>
                    </div>

                    {isBooked ? (
                      <button
                        disabled
                        className="py-2.5 px-5 rounded-xl bg-[#232723] text-[#C6FF3D] text-xs font-bold font-display uppercase tracking-wider flex items-center gap-1.5 cursor-default"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Booked</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onBookSession(session)}
                        className="py-2.5 px-5 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] text-xs font-bold font-display uppercase tracking-wider transition-all transform active:scale-95 shadow-md shadow-[#C6FF3D]/10 cursor-pointer whitespace-nowrap"
                      >
                        Book Spot
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
