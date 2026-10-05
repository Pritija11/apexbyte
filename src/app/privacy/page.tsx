import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ApexByte collects, uses, and protects your information when you use our website and contact us.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/privacy`,
    siteName: SITE.name,
    title: "Privacy Policy — ApexByte",
    description:
      "How ApexByte collects, uses, and protects your information when you use our website and contact us.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — ApexByte",
    description:
      "How ApexByte collects, uses, and protects your information when you use our website and contact us.",
  },
  robots: {
    index: true,
    follow: true,
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
      name: "Privacy Policy",
      item: `${SITE.url}/privacy`,
    },
  ],
};

const LAST_UPDATED = "October 4, 2026";

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Privacy Policy"
          breadcrumbLabel="Privacy Policy"
          title="Privacy Policy"
          description={`How ApexByte collects, uses, and protects your information. Last updated ${LAST_UPDATED}.`}
        />

        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h2>Introduction</h2>
              <p>
                ApexByte (&quot;ApexByte&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;) is a technology startup
                based in {SITE.address}. This Privacy Policy explains what
                information we collect through{" "}
                <strong>{SITE.url.replace("https://", "")}</strong>, how we
                use it, and the choices you have. It applies to this website
                only — if you become a platform user, your account and
                deployment data is handled separately under the terms of
                your account agreement.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information in two ways: information you give us
                directly, and limited technical information collected
                automatically when you visit the site.
              </p>
              <ul>
                <li>
                  <strong>Contact form submissions.</strong> When you use the
                  contact form or email us directly, we receive the name,
                  email address, and message you provide, so we can respond
                  to your inquiry.
                </li>
                <li>
                  <strong>Basic technical data.</strong> Like most websites,
                  our hosting infrastructure automatically logs standard
                  technical information (such as IP address, browser type,
                  and pages requested) for security and reliability purposes.
                </li>
              </ul>

              <h2>Cookies &amp; Tracking</h2>
              <p>
                This website does not use advertising or analytics cookies,
                and we do not run third-party tracking scripts. Your browser
                may store small amounts of data locally (for example, to
                remember a UI preference), but we do not use this to track
                you across other websites. If that changes in the future,
                we&apos;ll update this policy and, where required, ask for
                your consent.
              </p>

              <h2>How We Use Your Information</h2>
              <ul>
                <li>To respond to messages sent through the contact form or by email.</li>
                <li>To understand and improve how our website performs and to keep it secure.</li>
                <li>To communicate with you about the platform if you&apos;ve inquired about it.</li>
              </ul>
              <p>
                We do not sell your personal information, and we do not
                share it with third parties for their own marketing
                purposes.
              </p>

              <h2>Data Sharing</h2>
              <p>
                We may share information with service providers who help us
                run our infrastructure and communications (for example, our
                hosting and email providers), solely to the extent needed to
                operate this website and respond to you. We may also
                disclose information if required to by law, or to protect
                the rights, property, or safety of ApexByte or others.
              </p>

              <h2>Data Retention</h2>
              <p>
                We keep contact form submissions and related correspondence
                for as long as reasonably necessary to respond to your
                inquiry and maintain a record of communications, after which
                it is deleted or anonymized.
              </p>

              <h2>Your Rights</h2>
              <p>
                You can ask us to tell you what information we hold about
                you, correct it, or delete it, by contacting us using the
                details below. We will respond to reasonable requests within
                a reasonable timeframe.
              </p>

              <h2>Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to
                protect the information we hold, consistent with how we
                build infrastructure for our platform users. No method of
                transmission or storage is completely secure, so we
                can&apos;t guarantee absolute security.
              </p>

              <h2>Children&apos;s Privacy</h2>
              <p>
                This website is intended for developers and technical
                professionals. We do not knowingly collect information from
                children.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to
                reflect changes to our website or practices. The
                &quot;Last updated&quot; date above reflects the most recent
                revision.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we
                handle your information, contact us at{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or write to
                us at {SITE.address}.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
