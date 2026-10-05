import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="ApexByte home">
              <Image
                src="/images/logo-full.png"
                alt="ApexByte"
                width={568}
                height={452}
                className="brand-logo brand-logo-footer"
              />
            </Link>

            <p className="footer-description">
              High-performance cloud infrastructure for developers and
              technical teams, built from Lalitpur, Nepal.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <p className="footer-heading">Explore</p>

              <Link href="/platform">Platform</Link>
              <Link href="/approach">Approach</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Contact</p>

              <a
                href={`mailto:${SITE.email}`}
                className="footer-contact-item"
              >
                <Mail size={16} strokeWidth={1.7} aria-hidden="true" />
                <span>{SITE.email}</span>
              </a>

              <a
                href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                className="footer-contact-item"
              >
                <Phone size={16} strokeWidth={1.7} aria-hidden="true" />
                <span>{SITE.phone}</span>
              </a>

              <span className="footer-contact-item footer-location">
                <MapPin size={16} strokeWidth={1.7} aria-hidden="true" />
                <span>{SITE.address}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ApexByte. All rights reserved.</p>

          <nav className="footer-legal-links" aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
