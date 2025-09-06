import { Quote } from "lucide-react";

const TestimonialCard = ({ quote, author, company, logo, avatar }:any) => (
  <div className="relative bg-transparent p-8 rounded-0 shadow-sm border border-darkBg text-left h-full flex flex-col justify-between">
    <Quote className="absolute top-6 left-6 w-10 h-10 text-gray-800 opacity-70" />
    <p className="text-textColor text-lg leading-relaxed mb-6 pt-4 relative z-10">
      {quote}
    </p>
    <div className="flex items-center mt-auto">
      <img
        src={avatar}
        alt={author}
        className="w-12 h-12 rounded-full mr-4 object-cover"
        onError={(e:any) => { e.target.onerror = null; e.target.src = `https://placehold.co/48x48/e2e8f0/64748b?text=${author.split(' ').map((n: any[]) => n[0]).join('')}`; }}
      />
      <div>
        <p className="font-semibold text-textColor">{author}</p>
        <p className="text-sm text-textSlate">
          {company}
          {logo && (
            <span className="ml-2">
              <img src={logo} alt={company} className="inline-block h-4 align-middle" onError={(e:any) => { e.target.onerror = null; e.target.src = `https://placehold.co/60x16/e2e8f0/64748b?text=${company.replace(/\s/g, '+')}`; }} />
            </span>
          )}
        </p>
      </div>
    </div>
  </div>
);
export default TestimonialCard