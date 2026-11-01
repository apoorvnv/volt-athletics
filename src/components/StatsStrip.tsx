import React from 'react';

export const StatsStrip: React.FC = () => {
  const stats = [
    { value: '2,500+', label: 'Active Members', note: 'Engaged community across all disciplines' },
    { value: '25+', label: 'Expert Trainers', note: 'CSCS, USAW, & FMS certified coaches' },
    { value: '40+', label: 'Weekly Classes', note: 'Strength, HIIT, mobility & athletic conditioning' },
    { value: '98%', label: 'Member Satisfaction', note: 'Based on quarterly internal athlete feedback' },
  ];

  return (
    <section id="stats" className="border-y border-[#232723] bg-[#131614] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#232723]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-between ${
                idx > 0 ? 'pt-6 md:pt-0 md:pl-6' : ''
              }`}
            >
              <div>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F5F0] tracking-tight tabular-nums block">
                  {stat.value.replace('+', '')}
                  <span className="text-[#C6FF3D]">{stat.value.includes('+') ? '+' : '%'}</span>
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white mt-1">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-[#A5AAA3] mt-2 line-clamp-2 leading-relaxed">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* Minimal demo disclosure notice */}
        <div className="mt-8 pt-4 border-t border-[#232723]/60 flex items-center justify-between text-[11px] text-[#A5AAA3]/60">
          <span>VOLT ATHLETICS Performance Metrics</span>
          <span>Sample demo figures for preview</span>
        </div>
      </div>
    </section>
  );
};
