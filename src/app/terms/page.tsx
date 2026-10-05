import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/PageHeader";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the ApexByte website and our cloud infrastructure platform.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    url: `${SITE.url}/terms`,
    siteName: SITE.name,
    title: "Terms of Service — ApexByte",
    description:
      "The terms that govern your use of the ApexByte website and our cloud infrastructure platform.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — ApexByte",
    description:
      "The terms that govern your use of the ApexByte website and our cloud infrastructure platform.",
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
      name: "Terms of Service",
      item: `${SITE.url}/terms`,
    },
  ],
};

const LAST_UPDATED = "October 4, 2026";

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        <PageHeader
          eyebrow="Terms of Service"
          breadcrumbLabel="Terms of Service"
          title="Terms of Service"
          description={`The terms that govern your use of this website and our platform. Last updated ${LAST_UPDATED}.`}
        />

        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h2>Agreement to Terms</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your use
                of the ApexByte website at{" "}
                <strong>{SITE.url.replace("https://", "")}</strong> and your
                interactions with ApexByte (&quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;), a technology startup based in{" "}
                {SITE.address}. By using this website, you agree to these
                Terms. If you don&apos;t agree, please don&apos;t use the
                site.
              </p>

              <h2>Description of Services</h2>
              <p>
                ApexByte builds and operates cloud infrastructure — compute,
                edge network, observability, and related tooling — for
                developers and technical teams. This website describes the
                platform and allows you to sign up, deploy, and get in
                touch with us. Actual use of the platform itself, including
                data you deploy and store on it, is governed by the account
                terms you agree to when you create an account, which take
                precedence over these Terms for that usage.
              </p>

              <h2>Use of This Website</h2>
              <p>You agree to use this website only for lawful purposes. You agree not to:</p>
              <ul>
                <li>Attempt to gain unauthorized access to any part of this website or its underlying systems.</li>
                <li>Use the site in any way that could disable, overburden, or impair it.</li>
                <li>Use automated means to scrape or extract content from the site without our permission.</li>
                <li>Submit false, misleading, or abusive information through the contact form.</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                The content on this website — including text, graphics,
                logos, and the ApexByte name and mark — belongs to ApexByte
                unless otherwise noted, and is protected by applicable
                intellectual property laws. You may view and share pages of
                this website for personal, non-commercial reference, but you
                may not reproduce, modify, or redistribute our content for
                commercial purposes without our written permission.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                This website may link to third-party sites we don&apos;t
                control. We&apos;re not responsible for the content or
                practices of those sites, and linking to them doesn&apos;t
                imply our endorsement.
              </p>

              <h2>Disclaimers</h2>
              <p>
                This website and its content are provided &quot;as is&quot;
                without warranties of any kind, express or implied. We do
                our best to keep information on this site accurate and
                up to date, but we don&apos;t guarantee that it is complete,
                current, or error-free.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, ApexByte will not be
                liable for any indirect, incidental, or consequential
                damages arising from your use of this website. This section
                doesn&apos;t limit liability under a separate account
                agreement for actual platform usage, which is governed by
                the terms of that agreement.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms are governed by the laws of Nepal, without
                regard to conflict-of-law principles. Any disputes arising
                from these Terms will be subject to the jurisdiction of the
                courts of Lalitpur, Nepal.
              </p>

              <h2>Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. The
                &quot;Last updated&quot; date above reflects the most recent
                revision. Continued use of the website after changes means
                you accept the updated Terms.
              </p>

              <h2>Contact Us</h2>
              <p>
                Questions about these Terms can be sent to{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or to our
                office at {SITE.address}.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
