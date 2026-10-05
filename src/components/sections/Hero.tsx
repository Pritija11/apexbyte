import Link from "next/link";

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "<10ms", label: "Edge latency" },
  { value: "12", label: "Global regions" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-texture" aria-hidden="true" />

      <div className="container hero-center">
        <p className="eyebrow">Status: Operational</p>

        <h1 className="hero-title">
          Infrastructure built for <em>peak performance.</em>
        </h1>

        <p className="hero-description">
          ApexByte is a technology startup building high-performance cloud
          infrastructure for developers and technical teams — self-serve
          compute, hosting, and deployment built for speed and uptime, not
          meetings.
        </p>

        <div className="hero-actions">
          <Link href="#get-started" className="btn btn-primary">
            Get started
          </Link>

          <Link href="/platform" className="btn btn-secondary">
            View the platform
          </Link>
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <p className="hero-stat-value mono">{stat.value}</p>
              <p className="hero-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
