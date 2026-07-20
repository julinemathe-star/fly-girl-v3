import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Fly Girl Events & Design collects, uses, and protects your information, including our SMS text messaging practices.",
};

const updated = "July 16, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Commitment"
        title="Privacy Policy"
        intro={`Last updated ${updated}`}
        eyebrowClassName="eyebrow-ink"
      />

      <section className="bg-warmwhite">
        <div className="mx-auto max-w-[68ch] px-[clamp(1.5rem,6vw,5rem)] pb-[clamp(4rem,8vw,7rem)]">
          <Reveal className="space-y-10 leading-[1.6] text-plum-body">
            <div>
              <h2 className="mb-3 font-serif text-2xl text-plum">Information We Collect</h2>
              <p>
                When you contact {site.name} — through our inquiry forms, by email,
                by phone, or by text message — we collect the information you choose
                to share with us, such as your name, email address, phone number,
                and details about your event or project. We collect this information
                solely to respond to your inquiry and to provide our services.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-2xl text-plum">How We Protect Your Information</h2>
              <p>
                Customer information is protected. We do not sell your personal
                information, and we share it only as needed to deliver the services
                you have requested (for example, with a venue or vendor involved in
                your event) or as required by law.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-2xl text-plum">Phone &amp; Text Messaging (SMS)</h2>
              <p>
                Phone numbers are used only for the communications you request, such
                as consultation scheduling, project updates, and responses to your
                inquiries. SMS consent is never shared with third parties or
                affiliates for marketing purposes.
              </p>
              <p className="mt-4">
                You may opt out of text messages at any time by replying{" "}
                <strong className="text-plum">STOP</strong>. Reply{" "}
                <strong className="text-plum">HELP</strong> for assistance, or contact
                us directly at{" "}
                <a href={`mailto:${site.email}`} className="text-gold-ink underline underline-offset-4">
                  {site.email}
                </a>
                . Message frequency varies. Message and data rates may apply.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-2xl text-plum">Cookies &amp; Analytics</h2>
              <p>
                Our website may use standard analytics to understand how visitors use
                the site so we can improve the experience. This information is
                aggregated and does not personally identify you.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-2xl text-plum">Contact Us</h2>
              <p>
                Questions about this policy or your information are always welcome:{" "}
                <a href={`mailto:${site.email}`} className="text-gold-ink underline underline-offset-4">
                  {site.email}
                </a>{" "}
                or{" "}
                <a href={`tel:${site.phoneHref}`} className="text-gold-ink underline underline-offset-4">
                  {site.phone}
                </a>
                . {site.name}, {site.studioName}, {site.streetAddress},{" "}
                {site.cityStateZip}.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
