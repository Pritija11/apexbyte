import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { reasons } from "@/data/platform";

export default function WhyApexByte() {
  return (
    <section id="performance" className="section section-soft">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">Why ApexByte</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="heading-lg">
            Built for teams who don&apos;t want to think about infrastructure.
          </h2>
        </ScrollReveal>

        <div className="reasons-list">
          {reasons.map((reason, i) => (
            <ScrollReveal
              key={reason.number}
              delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
            >
              <div className="reason-row">
                <p className="reason-number mono">{reason.number}</p>

                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={4}>
          <Link href="/approach" className="platform-link">
            More on how we work
            <span aria-hidden="true">→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
