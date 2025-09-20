import React from "react";
import ComponentPreviewCard from "../components/LandingPage/ComponentPreviewCard";
import { elements, pageSections } from "../data/Blocks";
import { timeAgo } from "../utils/constant";

const UIBlocks = () => {

  return (
    <React.Fragment>
      <section className="relative bg-primary border-t border-darkBg py-20 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center md:text-left relative z-10">
          {/* Top Section Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-textSlate mb-2 uppercase tracking-wide">
              UI BLOCKS
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-textColor leading-tight mb-4">
              Beautifully Crafted Components
            </h1>
            <p className="text-sm md:text-base text-textSlate max-w-2xl">
              Explore a growing library of <span className="font-semibold">160+ responsive, production-ready components</span> built with React + Tailwind CSS. 
              Copy, paste, and customize with ease — no design skills required.
            </p>
          </div>


          {/* Page Sections Grid */}
          <div className="mb-16">
            <h2 className="text-base font-semibold text-textSlate mb-6 uppercase tracking-wide">
              SECTIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pageSections.map((t) => (
              
                   <ComponentPreviewCard
                      key={t.title}
                      title={t.title}
                      count={t.count}
                      category={t.category}
                      icon={t.icon}
                      tags={t.tags}
                      meta={t.updatedAt ? `Updated ${timeAgo(t.updatedAt)}` : t.meta}
                      href={t.href}
                    />
               
              ))}
            </div>
          </div>

          {/* Elements Grid */}
          <div>
            <h2 className="text-base font-semibold text-textSlate mb-6 uppercase tracking-wide">
              ELEMENTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {elements.map((t) => (
                <ComponentPreviewCard
                    key={t.title}
                    title={t.title}
                    count={t.count}
                    category={t.category}
                    icon={t.icon}
                    tags={t.tags}
                    meta={t.updatedAt ? `Updated ${timeAgo(t.updatedAt)}` : t.meta}
                    href={t.href}
                  />
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UIBlocks;
