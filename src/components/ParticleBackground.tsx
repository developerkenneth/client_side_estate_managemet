const particles = Array.from({ length: 25 });

const ParticleBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {particles.map((_, index) => {
        const size = Math.random() * 4 + 2;

        const left = Math.random() * 100;

        const duration =
          Math.random() * 10 + 10;

        const delay =
          Math.random() * 5;

        return (
          <span
            key={index}
            className="particle absolute rounded-full bg-yellow-400"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleBackground;