import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  index: number;
};

/** Editorial service card: numbered, gold top-rule on hover, gentle lift. */
export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="group relative flex min-h-[210px] flex-col justify-end bg-warmwhite p-8 transition-all duration-500 ease-luxe hover:z-[2] hover:-translate-y-1 hover:bg-gradient-to-b hover:from-white hover:to-ivory hover:shadow-card">
      <span className="absolute left-0 top-0 h-0.5 w-0 bg-gradient-to-r from-gold to-blush-deep transition-all duration-500 ease-luxe group-hover:w-full" />
      <span className="absolute left-8 top-8 font-serif text-[0.8rem] tracking-[0.2em] text-gold/75">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mb-2 text-2xl text-plum">{service.title}</h3>
      <p className="text-[0.82rem] leading-relaxed tracking-[0.02em] text-plum-soft/80">
        {service.blurb}
      </p>
    </article>
  );
}
