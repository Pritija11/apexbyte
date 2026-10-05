import { Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { platformFeatures } from "@/data/platform";

type PlatformDetailProps = {
  feature: (typeof platformFeatures)[number];
  tone?: "default" | "soft";
};

export default function PlatformDetail({
  feature,
  tone = "default",
}: PlatformDetailProps) {
  const Icon = feature.icon;

  return (
    <section
      id={feature.slug}
      className={`section platform-block ${
        tone === "soft" ? "platform-block-soft" : ""
      }`.trim()}
    >
      <div className="container">
        <div className="platform-block-grid">
          <ScrollReveal direction="left" className="platform-block-content">
            <div className="platform-block-icon">
              <Icon size={22} strokeWidth={1.7} />
            </div>

            <h2 className="heading-sm">{feature.title}</h2>

            <p className="platform-block-description">
              {feature.longDescription}
            </p>

            <p className="platform-block-audience">{feature.audience}</p>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={1}
            className="platform-block-capabilities"
          >
            <ul className="feature-list">
              {feature.capabilities.map((capability) => (
                <li key={capability}>
                  <Check size={18} strokeWidth={2} aria-hidden="true" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
