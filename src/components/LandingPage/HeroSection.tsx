import { ArrowRight } from "lucide-react";
import Button from "../../utils/Button";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative bg-primary border-t border-darkBg py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center md:text-left relative z-10">
        <p className="text-sm font-semibold text-textSlate mb-2 uppercase tracking-wide">
          Crafted for React & Tailwind Developers
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold text-textColor leading-tight mb-6">
              Ship modern UIs <br className="hidden md:inline" /> in minutes, not days.
            </h1>
          </div>
          <div className="md:w-1/2 md:pl-16 mt-8 md:mt-0">
            <p className="text-sm md:text-base text-textGray mb-8">
              Access <span className="font-semibold text-textColor">149+ pre-built sections</span> —
              from Hero and Pricing to Testimonials and Footers.  
              Copy, paste, and customize with ease using <span className="text-indigo-400 font-semibold">React + TailwindCSS</span>.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/ui-blocks">
                <Button
                  className="text-textGray dark:text-gray-200 text-center text-sm"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Browse Components
                </Button>
              </Link>
              <Link to="/template">
                <Button
                  className="text-darkBg dark:text-gray-200 text-center text-sm"
                  variant="secondary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Explore Templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};
export default HeroSection