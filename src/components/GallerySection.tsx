import React, { useState } from 'react';
import { Maximize2, X, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gymData';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Facilities', 'Heavy Iron', 'Conditioning'];

  const filteredItems =
    filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#0B0D0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold block mb-2">
              THE VOLT ARENA
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#F5F5F0]">
              VISUALIZE THE <br />
              <span className="text-[#A5AAA3]">ATMOSPHERE</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  filter === cat
                    ? 'bg-[#C6FF3D] text-[#0B0D0C] font-bold shadow-md shadow-[#C6FF3D]/10'
                    : 'bg-[#171A17] text-[#A5AAA3] hover:text-white border border-[#232723]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isSpanTwo = idx === 0 || idx === 3;

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative rounded-2xl overflow-hidden bg-[#131614] border border-[#232723] cursor-pointer h-72 sm:h-80 ${
                  isSpanTwo ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Hover Details */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between transition-transform duration-300">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C6FF3D] font-mono font-bold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base font-display font-bold uppercase text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#131614] border border-[#232723] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 sm:p-5 bg-[#171A17] border-t border-[#232723] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-mono text-[#C6FF3D]">
                  {activeItem.category}
                </span>
                <h3 className="text-lg font-display uppercase font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>
              <span className="text-xs text-[#A5AAA3]">VOLT ATHLETICS Facility</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
