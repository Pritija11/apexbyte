import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { platformFeatures } from "@/data/platform";

export default function Platform() {
  return (
    <section id="platform" className="section">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">What you get</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="heading-lg platform-title">
            A platform built around how <em>engineers</em> actually ship.
          </h2>
        </ScrollReveal>

        <div className="platform-grid">
          {platformFeatures.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <ScrollReveal
                key={feature.title}
                delay={(((i % 3) + 1) as 1 | 2 | 3)}
              >
                <article className="platform-card">
                  <div className="platform-card-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={3}>
          <Link href="/platform" className="platform-link">
            View the full platform in detail
            <span aria-hidden="true">→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
