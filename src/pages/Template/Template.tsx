import React from "react";
import { Link } from "react-router";

import TemplatePreviewCard from "../../components/TemplatePage/TemplatePreviewCard";
import { elements, templateData } from "../../data/templateData";

const TemplatePage = () => {

  return (
    <React.Fragment>
      <section className="relative bg-primary border-t border-darkBg py-10 md:py-10 overflow-hidden">
        <div className="container mx-auto px-4 text-center md:text-left relative z-10">
          {/* Top Section Header */}
          <div className="mb-12">
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-textColor leading-tight mb-4">
              SlassUI Templates
            </h1>
            <p className="text-sm md:text-base text-textSlate max-w-4xl">
              Explore our collection of SlassUI React templates to jumpstart your app development. Choose from a range of designs, like our React home page and landing page templates, to build your project faster.
            </p>
          </div>


          {/* Page Sections Grid */}
          <div className="mb-16">
            <h2 className="text-base font-semibold text-textSlate mb-6 uppercase tracking-wide">
              SECTIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3a 2xl:grid-cols-4 gap-6">
              {templateData.map((section:any, index:any) => (
              <Link key={section.title} target="_blank" to={section.liveLink}>
                  <TemplatePreviewCard
                    key={index}
                    image={section.image}
                    title={section.title}
                    subtitle={section.subtitle}
                    githubRepo={section.githubLink}
                    liveLink={section.liveLink}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Elements Grid */}
          <div>
            <h2 className="text-base font-semibold text-textSlate mb-6 uppercase tracking-wide">
              ELEMENTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {elements.map((element, index) => (
                 <Link key={element.title} to={element.liveLink}>
                  <TemplatePreviewCard
                    key={index}
                    image={element.image}
                    title={element.title}
                    subtitle={element.subtitle}
                    githubRepo={element.githubLink}
                    liveLink={element.liveLink}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TemplatePage;
