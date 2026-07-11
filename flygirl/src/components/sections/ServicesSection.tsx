import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

type ServicesSectionProps = {
  /** Optionally show only the first N services (e.g. homepage preview). */
  limit?: number;
};

export default function ServicesSection({ limit }: ServicesSectionProps) {
  const shown = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section id="services" className="bg-gradient-to-b from-ivory to-warmwhite">
      <div className="section-shell">
        <div className="mb-[clamp(3rem,6vw,4.5rem)] flex justify-center">
          <SectionHeading
            eyebrow="What We Create"
            title="Signature Services"
            intro="Corporate and executive experiences, styled spaces, welcome gifts, and celebrations — each approached as a bespoke commission, never a package."
          />
        </div>

        <Reveal>
          <div className="grid grid-cols-1 gap-px border border-gold/30 bg-gold/30 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shown.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
