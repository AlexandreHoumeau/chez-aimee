export function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 about-grid" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <h2 className="font-rammetto text-3xl mb-6">
          À propos
        </h2>

        <p className="font-poppins max-w-xl text-foreground/70">
          {/* your about text */}
        </p>
      </div>
    </section>
  )
}
