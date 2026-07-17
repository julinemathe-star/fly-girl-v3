import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Website terms of use and SMS messaging disclosures for Fly Girl Events & Design.",
};

const updated = "July 16, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Please Review"
        title="Terms & Conditions"
        intro={`Last updated ${updated}`}
        eyebrowClassName="eyebrow-ink"
      />

      <section className="bg-warmwhite">
        <div className="mx-auto max-w-[68ch] px-[clamp(1.5rem,6vw,5rem)] pb-[clamp(4rem,8vw,7rem)]">
          <Reveal className="space-y-10 leading-[1.85] text-plum-body">
            <div>
              <h2 className="mb-3 font-serif text-2xl text-plum">Use of This Website</h2>
              <p>
                Welcome to the website of {site.name}. By using this site, you agree
                to these terms. All content on this website — including text,
                photography, video, and design — is the property of {site.name} and
                may not be reproduced without written permission. The website is
                provided for general information about our services; submitting an
                inquiry does not by itself create a client engagement, which is
                confirmed separately in writing.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-2xl text-plum">SMS Messaging Disclosure</h2>
              <p>
                By providing your mobile number and opting in, you consent to receive
                text messages from {site.name} related to your inquiries,
                consultations, appointments, and services. Consent to receive text
                messages is not a condition of purchasing any goods or services.
              </p>
              <p className="mt-4">
                Message frequency varies. Message and data rates may apply. Your SMS
                consent is never shared with third parties or affiliates for
                marketing purposes.
              </p>
              <p className="mt-4">
                Reply <strong className="text-plum">STOP</strong> at any time to
                cancel and opt out of future text messages. Reply{" "}
                <strong className="text-plum">HELP</strong> for help, or contact us at{" "}
                <a href={`mailto:${site.email}`} className="text-gold-ink underline underline-offset-4">
                  {site.email}
                </a>{" "}
                or{" "}
                <a href={`tel:${site.phoneHref}`} className="text-gold-ink underline underline-offset-4">
                  {site.phone}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-2xl text-plum">No Warranties</h2>
              <p>
                This website is provided &ldquo;as is.&rdquo; While we work to keep
                information current and accurate, {site.name} makes no warranties
                about the completeness or accuracy of the content and is not liable
                for how the information is used.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-2xl text-plum">Contact</h2>
              <p>
                Questions about these terms:{" "}
                <a href={`mailto:${site.email}`} className="text-gold-ink underline underline-offset-4">
                  {site.email}
                </a>{" "}
                &bull;{" "}
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
