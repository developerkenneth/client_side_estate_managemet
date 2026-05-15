export default function Loading() {
  return (
    <>
      {/* <!-- Global Loading Shell --> */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center bg-primary-container">
        {/* <!-- Subtle Textural Overlay --> */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        {/* <!-- Central Brand Content --> */}
        <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-gutter">
          {/* <!-- Logo Section --> */}
          <div className="mb-12 text-center">
            <h1 className="font-display-lg text-display-lg text-surface-bright tracking-tight">
              VERIDIAN
            </h1>
            <p className="font-label-caps text-label-caps text-surface-bright mt-2 opacity-60">
              ESTATES
            </p>
          </div>
          {/* <!-- Modern Cinematic Loading Bar Container --> */}
          <div className="w-full h-[1px] bg-outline/20 relative overflow-hidden">
            {/* <!-- The Active Progress Bar (Accent Gold mapped to secondary tone in config) --> */}
            <div className="absolute top-0 left-0 h-full bg-tertiary-fixed-dim animate-progress w-0 shadow-[0_0_10px_rgba(216,194,187,0.5)]"></div>
          </div>
        </div>
        {/* <!-- Transactional Message at Bottom --> */}
        <div className="absolute bottom-margin-edge w-full text-center">
          <p className="font-label-caps text-label-caps text-surface-bright tracking-[0.25em] animate-subtle-fade">
            CURATING EXCELLENCE...
          </p>
        </div>
        {/* <!-- Background Aesthetic Element (Soft Radial Glow) --> */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-fixed/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>
      {/* <!-- Content Hidden Layout (Loading State Only) -->
<!-- This screen intentionally suppresses the TopAppBar and Footer as per the "Destination Rule" and "Task-Focused" suppression logic in the Prompt for splash/loading states. -->
<!-- Image for Contextual Ambience (Hidden/Decorative) --> */}
      <div className="hidden">
        <img
          alt="Veridian Estates Ambience"
          data-alt="A luxury architectural exterior at dusk, featuring a minimalist concrete and glass manor nestled in a dark, lush forest. The lighting is low-key and dramatic, with warm interior light glowing through expansive floor-to-ceiling windows. The aesthetic is ultra-premium and serene, utilizing a dark emerald and charcoal color palette that evokes a sense of quiet luxury and architectural precision."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_I3ovlIBppmrSH9Y0VSF90gVUBVqkZVVT4fot1lN2KOk9Ql_H-cUgXtLLsax6NrOivj1MYRHMO7LddqsP_oGoUTNmHLo-j__P29zBNaThVkpZjffMePqswc6b0azWQ5GR97SCeA1okj7nWIdc0YncD4khKZBQTs9QwznYHWlH3uy2A5VHjmzjwS4XkehnkwMgYkbRlgfI9O0jkPa535pL8p1dR-RVVL1i2Pq0qE39hfHz2Vys6xL9BdVkiTWcm3RUC46gD4kQnKVZ"
        />
      </div>
    </>
  );
}
