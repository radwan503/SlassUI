import { 
   Rocket, Plug, Zap, Settings2, 
  PiggyBank, Activity, Infinity, ListTree, 
} from "lucide-react";

export default function FeaturesSection(){
  const cards = [
    {
      title: "Seamless Integrations",
      desc: "Connect effortlessly with 200+ tools including Shopify, Google Sheets, Mailchimp, and more.",
      icon: <Plug className="h-5 w-5" />, tint: "from-orange-50 to-amber-50", ring:"ring-orange-100"
    },
    {
      title: "Visual Workflow Builder",
      desc: "Design powerful multi-step workflows with an intuitive drag-and-drop canvas.",
      icon: <Zap className="h-5 w-5" />, tint: "from-fuchsia-50 to-orange-50", ring:"ring-fuchsia-100"
    },
    {
      title: "Custom Triggers & Actions",
      desc: "Tailor workflows to your unique business logic using flexible triggers and actions.",
      icon: <Settings2 className="h-5 w-5" />, tint: "from-sky-50 to-indigo-50", ring:"ring-sky-100"
    },
    {
      title: "Affordable Automation",
      desc: "Enjoy enterprise-grade automation at a fraction of the market cost.",
      icon: <PiggyBank className="h-5 w-5" />, tint: "from-emerald-50 to-teal-50", ring:"ring-emerald-100"
    },
    {
      title: "Real-Time Logs",
      desc: "Track, debug, and optimize every automation step with detailed activity logs.",
      icon: <Activity className="h-5 w-5" />, tint: "from-rose-50 to-orange-50", ring:"ring-rose-100"
    },
    {
      title: "Unlimited Executions",
      desc: "Scale without limits — run unlimited workflows, tasks, and steps seamlessly.",
      icon: <Infinity className="h-5 w-5" />, tint: "from-cyan-50 to-sky-50", ring:"ring-cyan-100"
    },
    {
      title: "Smart Conditions",
      desc: "Automate decision-making with advanced logic functions, filters, and routing.",
      icon: <ListTree className="h-5 w-5" />, tint: "from-violet-50 to-fuchsia-50", ring:"ring-violet-100"
    },
    {
      title: "Advanced Automation Tools",
      desc: "Use Routers, Iterators, Delays, and Repeaters to create sophisticated flows.",
      icon: <Rocket className="h-5 w-5" />, tint: "from-amber-50 to-orange-50", ring:"ring-amber-100"
    },
  ];

  return (
    <section id="features" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-orange-100 to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Supercharge Your Workflows
          </h2>
          <p className="mt-1 text-lg font-semibold text-slate-700">Packed With Powerful Features</p>
          <p className="mt-3 text-sm text-slate-600">
            Build smarter automations with seamless integrations, a visual workflow builder,
            and advanced tools designed to save time and scale effortlessly.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className={`rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.08)] ring-4 ${c.ring}`}
            >
              <div className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-br ${c.tint} px-3 py-2 text-slate-900`}>
                <span className="grid h-7 w-7 place-items-center rounded-md bg-white/80 text-orange-600">{c.icon}</span>
                <h3 className="text-sm font-semibold">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.desc}</p>

              {/* Optional media/diagram placeholder */}
              <div className="mt-4 h-28 w-full rounded-xl border border-dashed border-slate-200 bg-slate-50/50" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
