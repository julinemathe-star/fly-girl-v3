import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin your journey with Fly Girl Events & Design, luxury event designer in Frisco for corporate experiences, styled spaces, welcome gifts, and private celebrations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Begin"
        title="Let's Create Something Unforgettable"
        intro="We welcome a limited number of commissions each season to protect the level of attention every experience deserves."
        eyebrowClassName="eyebrow-ink"
      />

      <section className="bg-warmwhite">
        <div className="section-shell grid grid-cols-1 gap-12 pt-0 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <Reveal>
            <div>
              <span className="eyebrow eyebrow-ink">Studio</span>
              <h2 className="mb-6 mt-4 text-3xl text-plum">Fly Girl Events &amp; Design</h2>
              <p className="mb-8 max-w-[38ch] text-plum-soft">
                Luxury event design and styled spaces. Visit us by appointment at the
                Fly Girl Design Studio at Formation, Dallas Cowboys World Headquarters,
                Frisco. Available for experiences at home and destinations worldwide.
              </p>
              <div className="space-y-4 text-[0.82rem]">
                <div>
                  <div className="eyebrow eyebrow-ink mb-1">Email</div>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-plum transition-colors hover:text-gold-ink"
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <div className="eyebrow eyebrow-ink mb-1">Phone</div>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="text-plum transition-colors hover:text-gold-ink"
                  >
                    {site.phone}
                  </a>
                </div>
                <div>
                  <div className="eyebrow eyebrow-ink mb-1">Design Studio</div>
                  <p className="text-plum">
                    {site.addressLine1}
                    <br />
                    {site.addressLine2}
                    <br />
                    {site.streetAddress}, {site.cityStateZip}
                    <br />
                    <span className="uppercase tracking-[0.12em] text-gold-ink">{site.appointmentLine}</span>
                  </p>
                  <p className="mt-1 text-[0.78rem] italic text-plum-soft">
                    {site.studioDescription}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
