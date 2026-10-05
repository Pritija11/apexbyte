import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";
import PlatformDetail from "@/components/sections/PlatformDetail";
import FAQSection from "@/components/sections/FAQSection";
import CTA from "@/components/sections/CTA";
import { platformFeatures } from "@/data/platform";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Compute, edge network, observability, CLI-first deployment, autoscaling, and security — the ApexByte platform explained in detail.",
  keywords: [
    "ApexByte platform",
    "cloud compute Nepal",
    "edge network",
    "CLI deployment",
    "developer cloud platform",
  ],
  alternates: {
    canonical: "/platform",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/platform`,
    siteName: SITE.name,
    title: "Platform — ApexByte",
    description:
      "Compute, edge network, observability, CLI-first deployment, autoscaling, and security, explained in detail.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform — ApexByte",
    description:
      "Compute, edge network, observability, CLI-first deployment, autoscaling, and security, explained in detail.",
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
      name: "Platform",
      item: `${SITE.url}/platform`,
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: platformFeatures.map((feature, i) => ({
    "@type": "Service",
    position: i + 1,
    name: feature.title,
    description: feature.longDescription,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  })),
};

const faqItems = [
  {
    question: "What's included in the ApexByte platform?",
    answer:
      "Six core pieces: elastic compute, a global edge network, real-time observability, a CLI-first workflow, automatic scaling, and security that's on by default. Most teams use all six together rather than picking one.",
  },
  {
    question: "Do I need to configure a CDN separately?",
    answer:
      "No. Every deployment is distributed across our edge network by default, so static assets and edge-eligible routes are already served from the nearest region without a separate CDN setup.",
  },
  {
    question: "Can I use the platform entirely from the command line?",
    answer:
      "Yes. The CLI covers deploys, rollbacks, log tailing, and resource inspection — the dashboard and CLI stay in sync, so you're never missing functionality by working from the terminal.",
  },
  {
    question: "How does autoscaling actually work?",
    answer:
      "Scaling is based on live request volume and resource load, not a fixed instance count you set once and forget. Capacity goes up during a spike and back down once load drops, without you managing it manually.",
  },
  {
    question: "Is security something I have to configure myself?",
    answer:
      "Baseline security — encryption at rest, isolated networking between projects, and role-based access control — is on from your first deployment. You can tighten things further as your team grows, but you're not starting from zero.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Platform"
          breadcrumbLabel="Platform"
          title="Everything you need to deploy, scale, and monitor"
          description="ApexByte is a technology startup based in Jhamsikhel, Lalitpur, Nepal, building cloud infrastructure for developers. The platform covers six connected pieces — compute, edge network, observability, CLI-first deployment, autoscaling, and security — each explained in detail below, including what's actually included and who it's built for."
        />

        {platformFeatures.map((feature, i) => (
          <PlatformDetail
            key={feature.slug}
            feature={feature}
            tone={i % 2 === 0 ? "default" : "soft"}
          />
        ))}

        <FAQSection
          title="Common questions about the platform"
          items={faqItems}
        />

        <CTA secondaryHref="/approach" secondaryLabel="See how we work" />
      </main>

      <Footer />
    </>
  );
}
