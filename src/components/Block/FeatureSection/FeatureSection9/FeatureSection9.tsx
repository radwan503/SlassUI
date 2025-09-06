const InboxSVG = (props:any) => (
  <svg viewBox="0 0 200 120" aria-hidden="true" {...props}>
    <rect x="0" y="0" width="200" height="120" rx="16" fill="#eef2ff" />
    <rect x="16" y="16" width="56" height="10" rx="5" fill="#c7d2fe" />
    <rect x="16" y="38" width="168" height="22" rx="11" fill="white" />
    <circle cx="34" cy="49" r="9" fill="#a5b4fc" />
    <rect x="16" y="66" width="168" height="22" rx="11" fill="white" />
    <circle cx="34" cy="77" r="9" fill="#93c5fd" />
    <rect x="16" y="94" width="84" height="10" rx="5" fill="#c7d2fe" />
    <rect x="110" y="94" width="74" height="10" rx="5" fill="#e0e7ff" />
  </svg>
);

const BotSVG = (props:any) => (
  <svg viewBox="0 0 200 120" aria-hidden="true" {...props}>
    <rect x="0" y="0" width="200" height="120" rx="16" fill="#ecfeff" />
    <rect x="60" y="14" width="80" height="16" rx="8" fill="#a7f3d0" />
    <rect x="18" y="48" width="120" height="24" rx="12" fill="white" />
    <rect x="62" y="80" width="120" height="24" rx="12" fill="#d1fae5" />
    <circle cx="30" cy="60" r="8.5" fill="#34d399" />
    <circle cx="178" cy="92" r="8.5" fill="#10b981" />
  </svg>
);

const LiveChatSVG = (props:any) => (
  <svg viewBox="0 0 200 120" aria-hidden="true" {...props}>
    <rect x="0" y="0" width="200" height="120" rx="16" fill="#fff7ed" />
    <rect x="18" y="16" width="72" height="32" rx="10" fill="white" />
    <rect x="110" y="16" width="72" height="32" rx="10" fill="white" />
    <rect x="18" y="64" width="164" height="38" rx="12" fill="white" />
    <rect x="30" y="77" width="128" height="8" rx="4" fill="#fecaca" />
    <rect x="30" y="91" width="96" height="8" rx="4" fill="#bbf7d0" />
    <rect x="160" y="76" width="18" height="22" rx="4" fill="#93c5fd" />
  </svg>
);

export default function SupportChannelsSection() {
  const features = [
    {
      title: "Shared inbox",
      description:
        "Bring channels that matter to your customers into a single collaborative view.",
      Visual: InboxSVG,
    },
    {
      title: "Chatbots",
      description:
        "Deploy interactive bots to automate & personalize customer interactions.",
      Visual: BotSVG,
    },
    {
      title: "Shared inbox",
      description:
        "Engage with customers in real-time using our simple, intuitive live chat widget.",
      Visual: LiveChatSVG,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white-500/30 to-white">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[48rem] rounded-full bg-gradient-to-b from-emerald-100/60 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-[-10%] h-72 w-[36rem] rounded-full bg-gradient-to-b from-green-100/40 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-18 sm:py-20 lg:py-24">
        {/* Heading */}
        <h2 className="text-center text-[34px] sm:text-[40px] lg:text-[44px] font-semibold leading-tight text-emerald-900 tracking-tight">
          Support your customers on their
          <br className="hidden sm:block" /> preferred channels.
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-base text-emerald-900/70">
          Unify conversations, automate the busywork, and chat in real‑time — all in one clean workspace.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, Visual }) => (
            <article
              key={title}
              className="group relative rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="p-6">
                {/* Visual */}
                <div className="overflow-hidden rounded-xl ring-1 ring-black/5">
                  <Visual className="h-auto w-full" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-center text-[18px] font-semibold text-emerald-900">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-center text-[14px] leading-6 text-gray-600">
                  {description}
                </p>
              </div>

              {/* subtle top accent that animates on hover */}
              <span className="pointer-events-none absolute inset-x-6 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 opacity-70 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
