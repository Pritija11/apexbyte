import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbLabel,
}: PageHeaderProps) {
  return (
    <section className="section page-header">
      <div className="hero-texture" aria-hidden="true" />

      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{breadcrumbLabel}</span>
        </nav>

        <ScrollReveal>
          <p className="eyebrow">{eyebrow}</p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h1 className="heading-lg page-header-title">{title}</h1>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="page-header-description">{description}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
