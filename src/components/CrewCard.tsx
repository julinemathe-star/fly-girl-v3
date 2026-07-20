import Image from "next/image";
import Reveal from "@/components/Reveal";

export type CrewMember = {
  name: string;
  role: string;
  /** Optional line beneath the role (e.g. Team 2 Much™). */
  subrole?: string;
  image: string;
  alt: string;
  bio: string[];
};

type CrewCardProps = {
  member: CrewMember;
  index: number;
};

/** Editorial portrait card: large image, name, role, and a warm biography. */
export default function CrewCard({ member, index }: CrewCardProps) {
  return (
    <Reveal
      as="article"
      delay={(index % 3) * 0.1}
      className="flex flex-col"
    >
      <figure className="group relative aspect-[4/5] overflow-hidden rounded-[4px] shadow-media">
        <Image
          src={member.image}
          alt={member.alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum/20 to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-30" />
      </figure>

      <div className="mt-7">
        <h3 className="text-[1.7rem] text-plum">{member.name}</h3>
        <p className="mt-1 font-sans text-[0.7rem] uppercase tracking-luxe text-gold-ink">
          {member.role}
        </p>
        {member.subrole ? (
          <p className="mt-1 font-serif text-base italic text-plum-soft">
            {member.subrole}
          </p>
        ) : null}

        <div className="mt-5 space-y-4">
          {member.bio.map((para, i) => (
            <p key={i} className="text-[0.92rem] leading-[1.55] text-plum-body">
              {para}
            </p>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
