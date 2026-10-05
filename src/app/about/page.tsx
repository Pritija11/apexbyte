import type { Metadata } from "next";
import { Gauge, Globe2, Terminal, Users, Zap } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHeader from "@/components/sections/PageHeader";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "ApexByte is a technology startup based in Jhamsikhel, Lalitpur, Nepal, building high-performance, self-serve cloud infrastructure for developers worldwide.",
  keywords: [
    "ApexByte",
    "technology startup Nepal",
    "cloud infrastructure startup Nepal",
    "Lalitpur tech startup",
    "about ApexByte",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/about`,
    siteName: SITE.name,
    title: "About — ApexByte",
    description:
      "A technology startup based in Jhamsikhel, Lalitpur, Nepal, building high-performance cloud infrastructure for developers worldwide.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — ApexByte",
    description:
      "A technology startup based in Jhamsikhel, Lalitpur, Nepal, building high-performance cloud infrastructure for developers worldwide.",
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
      name: "About",
      item: `${SITE.url}/about`,
    },
  ],
};

const values = [
  {
    icon: Zap,
    title: "Fast by default",
    text: "Every default in the platform favors low latency and quick deploys, not the most impressive feature list.",
  },
  {
    icon: Terminal,
    title: "Built for engineers, not procurement",
    text: "Everything is scriptable and self-serve. You don't need a sales call to find out what a region costs.",
  },
  {
    icon: Gauge,
    title: "Usage-based, transparent pricing",
    text: "You pay for what you run. No hidden tiers, no 'contact sales' pricing page for standard usage.",
  },
  {
    icon: Users,
    title: "Real engineers behind support",
    text: "When you reach out, you're talking to someone who understands the infrastructure, not a support script.",
  },
];

const stats = [
  { icon: Globe2, value: "Lalitpur", label: "Headquartered in Nepal" },
  { icon: Gauge, value: "99.99%", label: "Uptime SLA" },
  { icon: Terminal, value: "12", label: "Edge regions" },
  { icon: Users, value: "Global", label: "Developers we serve" },
];

const faqItems = [
  {
    question: "Is ApexByte a Nepali company?",
    answer:
      "Yes. ApexByte is a technology startup founded and based in Jhamsikhel, Lalitpur, Nepal, building cloud infrastructure for developers and technical teams.",
  },
  {
    question: "Do you only serve developers based in Nepal?",
    answer:
      "No. While ApexByte is based in Nepal, the platform and its edge network are not limited by geography — we serve developers and technical teams wherever they're building from.",
  },
  {
    question: "What makes ApexByte different from using AWS or GCP directly?",
    answer:
      "Hyperscalers give you hundreds of services and the responsibility of wiring them together correctly. ApexByte is a smaller, opinionated surface focused on compute, hosting, and deployment — with transparent pricing and a team you can actually reach when something goes wrong.",
  },
  {
    question: "Do I need to talk to sales to get started?",
    answer:
      "No. ApexByte is self-serve — you can sign up and deploy without a sales call. If you want to talk through a migration or a larger setup first, the team is available for that too.",
  },
  {
    question: "How can I reach the ApexByte team?",
    answer:
      "The fastest way is through the contact page or by emailing us directly. We respond personally — there's no ticketing system between you and the people who run the platform.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="About"
          breadcrumbLabel="About"
          title="High-performance cloud infrastructure, built from Lalitpur, Nepal"
          description="ApexByte is a technology startup focused on cloud infrastructure for developers and technical teams who want to deploy and scale without an enterprise sales cycle in the way. We're based in Jhamsikhel, Lalitpur, Nepal, and built the platform for the kind of team we used to be — one that wants infrastructure to get out of the way, not become a second job."
        />

        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Our story</span>

              <h2 className="section-title">Why we started ApexByte</h2>
            </div>

            <p className="prose">
              Most teams end up choosing between two bad options: a
              hyperscaler with hundreds of services and a learning curve
              that eats a sprint, or a managed platform that hides so much
              of the infrastructure that scaling past the basics means
              migrating somewhere else anyway. Neither is built for a
              developer who just wants to ship something fast and keep it
              running without becoming a full-time infrastructure engineer.
            </p>

            <p className="prose">
              ApexByte was built to sit in that gap — compute, hosting, and
              deployment that&apos;s opinionated enough to be simple, but
              transparent enough that you&apos;re never guessing what something
              costs or how it actually works. What started as infrastructure
              for a handful of early projects out of Lalitpur has grown into
              a platform used by developers well beyond Nepal.
            </p>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-header">
              <span className="section-label">What we believe</span>

              <h2 className="section-title">
                A few principles that don&apos;t change as we grow
              </h2>
            </div>

            <div className="value-grid">
              {values.map((value, i) => {
                const Icon = value.icon;

                return (
                  <ScrollReveal
                    key={value.title}
                    delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
                  >
                    <div className="value-item">
                      <div className="value-icon">
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <h3>{value.title}</h3>
                      <p>{value.text}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-dark stat-band">
          <div className="container">
            <div className="stat-grid">
              {stats.map((stat, i) => {
                const Icon = stat.icon;

                return (
                  <ScrollReveal
                    key={stat.label}
                    delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}
                  >
                    <div className="stat-item">
                      <div className="stat-icon">
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      <p className="stat-number mono">{stat.value}</p>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="about-split">
              <ScrollReveal direction="left">
                <div className="section-header">
                  <span className="section-label">Where we work</span>

                  <h2 className="section-title">
                    Based in Lalitpur, building for developers everywhere
                  </h2>

                  <p className="section-description">
                    ApexByte is headquartered in {SITE.address}, where the
                    team designs, builds, and operates the platform day to
                    day. The edge network and the developers who use it
                    aren&apos;t limited to Nepal — a meaningful share of our
                    usage comes from teams building outside the country.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={1}>
                <div className="section-header">
                  <span className="section-label">Who we work with</span>

                  <h2 className="section-title">
                    Independent developers to growing technical teams
                  </h2>

                  <p className="section-description">
                    Our users range from solo developers shipping a side
                    project, to early-stage startups that need production
                    infrastructure without a dedicated platform engineer, to
                    technical teams at growing companies who&apos;d rather
                    provision what they need themselves than open a ticket.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <FAQSection
          title="Common questions about ApexByte"
          items={faqItems}
        />

        <CTA secondaryHref="/#platform" secondaryLabel="Explore the platform" />
      </main>

      <Footer />
    </>
  );
}
