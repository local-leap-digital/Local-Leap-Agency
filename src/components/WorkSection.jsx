import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ExternalLink, Sparkles, Laptop, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import Button from './common/Button';
import { projects } from '../data/projects';

const SLIDE_GAP = 24; // px between cards

// Cards visible at once: 1 on mobile, 2 on tablet (md), 3 on desktop (lg)
function getPerView() {
  if (typeof window === 'undefined') return 3;
  if (window.matchMedia('(min-width: 1024px)').matches) return 3;
  if (window.matchMedia('(min-width: 768px)').matches) return 2;
  return 1;
}

function SliderArrow({ direction, onClick, disabled, className = '' }) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous projects' : 'Next projects'}
      className={`w-11 h-11 rounded-full items-center justify-center border transition-all duration-200 shadow-sm ${
        disabled
          ? 'bg-white text-slate-300 border-[#E2EEF0] cursor-not-allowed shadow-none'
          : 'bg-[#01315E] text-white border-[#01315E] hover:bg-[#05B0B5] hover:border-[#05B0B5] cursor-pointer'
      } ${className}`}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [slideIndex, setSlideIndex] = useState(0);
  const [perView, setPerView] = useState(getPerView);
  const pointerStartX = useRef(null);

  useEffect(() => {
    const handleResize = () => setPerView(getPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Derive available categories dynamically from projects
  const categories = useMemo(() => {
    if (!projects || projects.length === 0) return [];
    const unique = Array.from(new Set(projects.map((p) => p.category))).filter(Boolean);
    return ['All', ...unique];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const maxIndex = Math.max(0, filteredProjects.length - perView);
  const currentIndex = Math.min(slideIndex, maxIndex);
  const showControls = maxIndex > 0;

  const goTo = (i) => setSlideIndex(Math.max(0, Math.min(i, maxIndex)));
  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSlideIndex(0);
  };

  // Swipe support for touch / mouse drag
  const handlePointerDown = (e) => {
    pointerStartX.current = e.clientX;
  };
  const handlePointerUp = (e) => {
    if (pointerStartX.current === null) return;
    const delta = e.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (delta < -50) goNext();
    else if (delta > 50) goPrev();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  };

  // One step = one card width + gap = (100% + gap) / perView of the track width
  const trackOffset = `calc(-${currentIndex} * (100% + ${SLIDE_GAP}px) / ${perView})`;
  const cardBasis = `calc((100% - ${SLIDE_GAP * (perView - 1)}px) / ${perView})`;

  return (
    <section id="work" className="py-16 sm:py-20 md:py-28 bg-[#F3FAFA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR WORK"
          title="Sample"
          highlightText="Projects"
          description="Concept websites we've designed to show what we can build for businesses like yours."
        />

        {/* Filter Tabs */}
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2.5 min-h-10 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#01315E] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-[#01315E] border border-[#E2EEF0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Projects Slider or Friendly Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E2EEF0] p-12 text-center max-w-md mx-auto shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#05B0B5]/15 text-[#008F94] flex items-center justify-center mx-auto mb-4">
              <Laptop className="w-7 h-7" />
            </div>
            <h3 className="font-['Poppins'] font-bold text-xl text-[#01315E] mb-2">
              New Projects Coming Soon
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              We are currently designing fresh concept websites for this category. Want to see one for your business?
            </p>
            <Button href="#contact" variant="primary" size="sm">
              Request Free Demo
            </Button>
          </div>
        ) : (
          <div
            className="relative"
            role="region"
            aria-roledescription="carousel"
            aria-label="Sample projects"
          >
            {showControls && (
              <>
                <SliderArrow
                  direction="prev"
                  onClick={goPrev}
                  disabled={currentIndex === 0}
                  className="hidden lg:flex absolute -left-6 top-[38%] -translate-y-1/2 z-10"
                />
                <SliderArrow
                  direction="next"
                  onClick={goNext}
                  disabled={currentIndex === maxIndex}
                  className="hidden lg:flex absolute -right-6 top-[38%] -translate-y-1/2 z-10"
                />
              </>
            )}

            {/* Slider viewport */}
            <div
              className="overflow-hidden py-3 -my-3 touch-pan-y select-none rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#05B0B5]"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => { pointerStartX.current = null; }}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ gap: `${SLIDE_GAP}px`, transform: `translateX(${trackOffset})` }}
              >
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${filteredProjects.length}: ${project.name}`}
                style={{ flex: `0 0 ${cardBasis}` }}
                className="bg-white rounded-2xl border border-[#E2EEF0] overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-200 flex flex-col group"
              >
                {/* Browser Device Frame for screenshot preview */}
                <div className="bg-[#01315E] p-2.5 pb-2">
                  <div className="flex items-center gap-1.5 mb-1.5 px-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="ml-2 text-[10px] text-slate-300 font-mono tracking-tight truncate">
                      {project.liveUrl.replace(/^https?:\/\//, '')}
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-slate-100">
                    <img
                      src={project.image}
                      alt={`${project.name} sample website preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      draggable={false}
                    />
                    {project.isConcept && (
                      <div className="absolute top-2.5 right-2.5">
                        <span className="inline-flex items-center gap-1 bg-[#01315E]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
                          <Sparkles className="w-3 h-3 text-[#05B0B5]" />
                          Concept Project
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#008F94] bg-[#05B0B5]/10 px-2.5 py-0.5 rounded-md">
                        {project.tag || project.category}
                      </span>
                    </div>

                    <h3 className="font-['Poppins'] font-bold text-lg text-[#01315E] mb-2 group-hover:text-[#008F94] transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-sm text-[#334155] leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-2.5 text-sm font-semibold text-[#008F94] hover:text-[#007479] transition-colors group-hover:underline"
                    >
                      <span>View Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href="#contact"
                      className="py-2.5 text-xs text-slate-400 hover:text-[#01315E] font-medium text-right"
                    >
                      Get similar design →
                    </a>
                  </div>
                </div>
              </div>
            ))}
              </div>
            </div>

            {/* Position dots (+ arrows below lg) */}
            {showControls && (
              <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4">
                <SliderArrow
                  direction="prev"
                  onClick={goPrev}
                  disabled={currentIndex === 0}
                  className="flex lg:hidden"
                />
                <div className="flex items-center">
                  {Array.from({ length: maxIndex + 1 }, (_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      aria-current={i === currentIndex}
                      className="p-2 cursor-pointer group/dot"
                    >
                      <span
                        className={`block h-2 rounded-full transition-all duration-300 ${
                          i === currentIndex ? 'w-6 bg-[#05B0B5]' : 'w-2 bg-[#01315E]/20 group-hover/dot:bg-[#01315E]/40'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <SliderArrow
                  direction="next"
                  onClick={goNext}
                  disabled={currentIndex === maxIndex}
                  className="flex lg:hidden"
                />
              </div>
            )}
          </div>
        )}

        {/* Free Demo Prompt Note below slider */}
        <div className="mt-10 md:mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-[#E2EEF0] shadow-xs text-center max-w-2xl mx-auto">
          <p className="text-base sm:text-lg font-medium text-[#01315E] mb-4">
            Want to see what your business could look like? We'll make a free demo for you.
          </p>
          <Button href="#contact" variant="primary" size="md" className="w-full xs:w-auto">
            Request Free Demo Website
          </Button>
        </div>
      </div>
    </section>
  );
}
