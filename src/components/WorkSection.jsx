import React, { useState, useMemo } from 'react';
import { ExternalLink, Sparkles, Laptop } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import Button from './common/Button';
import { projects } from '../data/projects';

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('All');

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

  return (
    <section id="work" className="py-20 md:py-28 bg-[#F3FAFA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR WORK"
          title="Sample"
          highlightText="Projects"
          description="Concept websites we've designed to show what we can build for businesses like yours."
        />

        {/* Filter Tabs */}
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
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

        {/* Projects Grid or Friendly Empty State */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
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
                <div className="p-6 flex-1 flex flex-col justify-between">
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

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#008F94] hover:text-[#007479] transition-colors group-hover:underline"
                    >
                      <span>View Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href="#contact"
                      className="text-xs text-slate-400 hover:text-[#01315E] font-medium"
                    >
                      Get similar design →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Free Demo Prompt Note below grid */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-[#E2EEF0] shadow-xs text-center max-w-2xl mx-auto">
          <p className="text-base sm:text-lg font-medium text-[#01315E] mb-4">
            Want to see what your business could look like? We'll make a free demo for you.
          </p>
          <Button href="#contact" variant="primary" size="md">
            Request Free Demo Website
          </Button>
        </div>
      </div>
    </section>
  );
}
