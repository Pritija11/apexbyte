"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link
          href="/"
          className="brand"
          aria-label="ApexByte home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo-full.png"
            alt="ApexByte"
            width={568}
            height={452}
            className="brand-logo"
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : undefined}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="#get-started" className="btn btn-primary nav-cta">
          Get started
        </Link>

        <button
          className="mobile-menu"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? "active" : undefined}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#get-started"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              Get started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
