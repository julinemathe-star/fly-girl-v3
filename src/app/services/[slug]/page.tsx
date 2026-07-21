import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import InquirySection from "@/components/sections/InquirySection";
import { getService, services } from "@/lib/services";
import { investmentTiers } from "@/lib/investment";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Frisco & Dallas, TX`,
    description: `${service.blurb} ${site.name}, based at Formation in Frisco, Texas, serving Dallas–Fort Worth and beyond.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const tier = investmentTiers.find((t) => t.name === service.title);

  return (
    <>
      <PageHeader
        eyebrow="Signature Service"
        title={service.title}
        intro={service.blurb}
        eyebrowClassName="eyebrow-ink"
      />

      <section className="bg-warmwhite">
        <div className="mx-auto max-w-[68ch] px-[clamp(1.5rem,6vw,5rem)] pb-[clamp(4rem,8vw,6.5rem)]">
          <Reveal>
            <p className="leading-[1.8] text-plum-body">{service.detail}</p>

            {tier?.custom ? (
              <p className="mt-8 text-[0.82rem] uppercase tracking-luxe text-gold-ink">
                Designed by private proposal
              </p>
            ) : tier?.from ? (
              <p className="mt-8 text-[0.82rem] uppercase tracking-luxe text-gold-ink">
                Investments begin at {tier.from}
              </p>
            ) : null}

            <div className="mt-9">
              <Button href="/begin-your-journey" variant="dark">
                {service.cta}
              </Button>
            </div>

            <p className="mt-10 text-[0.78rem] uppercase tracking-[0.18em]">
              <Link
                href="/services"
                className="text-gold-ink underline underline-offset-4 transition-colors hover:text-plum"
              >
                View All Signature Services
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <InquirySection />
    </>
  );
}
