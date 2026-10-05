import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";

type CTAProps = {
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTA({
  secondaryHref = "/platform",
  secondaryLabel = "Explore the platform",
}: CTAProps) {
  return (
    <section id="get-started" className="section section-dark cta">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow">Get started</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2 className="heading-lg">
            Ship on infrastructure that keeps up with you.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="cta-description">
            Start building on ApexByte, or reach out if you want to talk
            through your setup first.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="cta-actions">
            <Link href={`mailto:${SITE.email}`} className="btn btn-primary">
              Get started
            </Link>

            <Link
              href={secondaryHref}
              className="btn btn-secondary cta-btn-light"
            >
              {secondaryLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
