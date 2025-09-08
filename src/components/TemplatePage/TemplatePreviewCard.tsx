
import { Eye, Github,  } from "lucide-react";


const TemplatePreviewCard = ({ 
  image, 
  title, 
  subtitle, 
  tag = "Free", 
  githubRepo, 
  liveLink 
}: any) => {


  return (
    <div
      className="relative bg-darkBg rounded-xl overflow-hidden group flex flex-col border border-white/5 hover:border-blue-500/40 transition-all duration-500 animate-float"
      style={{
        boxShadow: "10px 10px 0 #243a56",
        transform: "translate(-1px, -1px)",
        transition: ".3s ease-in-out",
      }}
    >
      
      {/* Image */}
      <div className="relative w-full h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full  transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-3 transition-opacity duration-500">
          <div className="flex items-center gap-2">
            {/* GitHub Icon */}
            {githubRepo && (
              <a
                href={`${githubRepo}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                className="flex items-center gap-1  bg-white rounded-full text-black justify-center h-8 w-8 hover:bg-gray-200 transition"
              >
                <Github size={16} />
              </a>
            )}

            <a
              href={liveLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white px-4 py-1 rounded-lg text-sm font-semibold  transition"
            >
              <span title="Preview" className="flex items-center gap-1 px-2  bg-white rounded-full text-black justify-center h-8 w-8 hover:bg-gray-200 transition"><Eye/></span>
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-grow relative">
        <h3 className="text-base font-semibold text-textColor transition-colors duration-500"
        style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm text-gray-400 h-10 mt-2"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {subtitle}
        </p>

        <p className="absolute right-2 top-3 text-[10px] text-white bg-blue-900 rounded-full px-2 py-[2px]">{tag}</p>
      </div>
    </div>
  );
};

export default TemplatePreviewCard;
