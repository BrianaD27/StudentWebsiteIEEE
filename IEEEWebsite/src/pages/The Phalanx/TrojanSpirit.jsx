export default function TrojanSpirit() {
  return (
    <section
      className="w-full py-16 px-6 sm:px-12 text-center"
      style={{ backgroundColor: "#e8521a" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-8">
          <span className="text-white">The Trojan </span>
          <span style={{ color: "#1a2e5a" }}>Spirit</span>
        </h2>

        {/* Bold quote */}
        <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-6 max-w-3xl mx-auto">
          "Greater Happens Here" isn't just our motto—it's our promise. Every
          workshop, every project, every competition is an opportunity to prove
          that Trojan excellence knows no bounds.
        </p>

        {/* Italic subtext */}
        <p
          className="text-base sm:text-lg italic font-medium max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          We don't just study engineering. We live it, breathe it, and use it
          to change the world.
        </p>

      </div>
    </section>
  );
}
