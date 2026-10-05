import type { Metadata } from "next";
import { Gauge, Layers, ShieldCheck, Target, Users } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHeader from "@/components/sections/PageHeader";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How ApexByte, a technology startup based in Jhamsikhel, Lalitpur, Nepal, approaches building and running cloud infrastructure for developers.",
  keywords: [
    "ApexByte approach",
    "technology startup Nepal",
    "developer cloud philosophy",
    "how ApexByte works",
  ],
  alternates: {
    canonical: "/approach",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/approach`,
    siteName: SITE.name,
    title: "Approach — ApexByte",
    description:
      "How ApexByte approaches building and running cloud infrastructure for developers, from a technology startup based in Nepal.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Approach — ApexByte",
    description:
      "How ApexByte approaches building and running cloud infrastructure for developers, from a technology startup based in Nepal.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Approach",
      item: `${SITE.url}/approach`,
    },
  ],
};

const principles = [
  {
    icon: Layers,
    title: "Infrastructure decisions come before feature decisions",
    text: "We don't add a feature to the platform until the infrastructure underneath it is solid. A flashy dashboard on top of shaky compute isn't worth shipping.",
  },
  {
    icon: Users,
    title: "Self-serve by default, people when you need them",
    text: "You shouldn't need a sales call to find out what something costs or to deploy your first project. But when you do need help, you reach an engineer, not a queue.",
  },
  {
    icon: Gauge,
    title: "Usage-based pricing, always",
    text: "Standard usage is never hidden behind a 'contact sales' pricing page. You can see what something costs before you commit to it.",
  },
  {
    icon: Target,
    title: "Right-sized over over-engineered",
    text: "We'd rather recommend the setup that fits your actual traffic today than the most impressive architecture on paper.",
  },
  {
    icon: ShieldCheck,
    title: "We run what we sell",
    text: "The team operates the same infrastructure every customer deploys to. If it breaks for you, it breaks for us too — there's no separate internal version.",
  },
];

const steps = [
  {
    number: "01",
    title: "Sign up and deploy",
    description:
      "Create an account and deploy your first project without a sales call or an approval step in the way.",
  },
  {
    number: "02",
    title: "Scale as you actually need to",
    description:
      "Usage-based pricing and automatic scaling mean you're not pre-provisioning for traffic you're guessing at.",
  },
  {
    number: "03",
    title: "Reach out when you need to",
    description:
      "Email or message the team directly when something comes up — migration questions, incidents, or just a second opinion on an architecture decision.",
  },
];

const faqItems = [
  {
    question: "Does ApexByte follow a fixed onboarding process?",
    answer:
      "Not really. Most developers sign up and deploy directly without talking to anyone. If you're migrating something larger or want to talk through an architecture decision first, the team is available for that too — it's optional, not required.",
  },
  {
    question: "How do you decide what goes into the platform roadmap?",
    answer:
      "Mostly from what developers actually run into — support conversations, migration questions, and repeated requests carry more weight than a feature that sounds impressive in isolation.",
  },
  {
    question: "Do you offer custom contracts for larger teams?",
    answer:
      "For most teams, standard usage-based pricing applies with no custom contract needed. If you have requirements that genuinely don't fit the standard platform, reach out and we'll tell you honestly whether we're a fit.",
  },
  {
    question: "How is support actually handled?",
    answer:
      "You reach the team directly by email — there's no tiered ticketing system that routes you to a generic script first. The people responding are the same people who run the platform.",
  },
  {
    question: "What happens if I need to migrate away from ApexByte?",
    answer:
      "You can export your data and configuration at any time. We'd rather you stay because the platform works for you, not because leaving is deliberately difficult.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Approach"
          breadcrumbLabel="Approach"
          title="Infrastructure built for peak performance, not peak complexity"
          description="ApexByte's approach to cloud infrastructure comes down to a small number of principles that don't change from one customer to the next — whether that's a solo developer deploying a side project or a technical team migrating something larger. Here's how we actually think about it."
        />

        <section className="section">
          <div className="container">
            <div className="principle-list">
              {principles.map((principle, i) => {
                const Icon = principle.icon;

                return (
                  <ScrollReveal
                    key={principle.title}
                    delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
                  >
                    <div className="principle-item">
                      <div className="principle-head">
                        <div className="principle-icon">
                          <Icon size={20} strokeWidth={1.7} />
                        </div>

                        <h2 className="principle-title">
                          {principle.title}
                        </h2>
                      </div>

                      <p className="principle-text">{principle.text}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <ScrollReveal>
              <p className="eyebrow">How it works</p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2 className="heading-lg step-title">
                From signup to production, without a sales cycle.
              </h2>
            </ScrollReveal>

            <div className="step-list">
              {steps.map((step, i) => (
                <ScrollReveal
                  key={step.number}
                  delay={(((i % 3) + 1) as 1 | 2 | 3)}
                >
                  <div className="step-item">
                    <p className="step-number mono">{step.number}</p>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <FAQSection
          title="Common questions about how we work"
          items={faqItems}
        />

        <CTA secondaryHref="/about" secondaryLabel="More about ApexByte" />
      </main>

      <Footer />
    </>
  );
}
