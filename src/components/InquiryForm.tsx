"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const eventTypes = [
  "Corporate & Executive Event",
  "Sports Hospitality",
  "Styled Space",
  "Home Staging",
  "Virtual Staging",
  "Executive Office Styling",
  "Welcome Gifts",
  "Destination Experience",
  "Private Celebration",
  "Little Luxe™ Celebration",
  "Other",
];

const fieldClass =
  "w-full border-b border-gold/40 bg-transparent py-3 text-plum placeholder:text-plum-soft/50 focus:border-gold focus:outline-none transition-colors";
const labelClass =
  "block text-[0.72rem] uppercase tracking-luxe text-gold-ink mb-1";

export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const type = String(data.get("eventType") || "");
    const date = String(data.get("date") || "");
    const details = String(data.get("details") || "");

    const subject = `Event Inquiry — ${type || "Celebration"} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Event type: ${type}`,
      `Preferred date: ${date}`,
      "",
      details,
    ].join("\n");

    // Opens the client's mail app with the inquiry pre-filled.
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-7 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className={labelClass}>
          Full Name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Your name" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@email.com" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="eventType" className={labelClass}>
          Event Type
        </label>
        <select id="eventType" name="eventType" className={`${fieldClass} appearance-none`} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {eventTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="date" className={labelClass}>
          Preferred Date
        </label>
        <input id="date" name="date" type="date" className={fieldClass} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="details" className={labelClass}>
          Tell Us About Your Celebration
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Guest count, location, vision, and anything else you'd like us to know."
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-[2px] bg-gradient-to-br from-gold to-gold-deep px-10 py-4 text-[0.74rem] uppercase tracking-luxe text-white shadow-gold transition-all duration-500 ease-luxe hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(169,129,47,0.44)] sm:w-auto"
        >
          Send Inquiry
        </button>
        {sent ? (
          <p role="status" className="mt-4 text-[0.82rem] text-plum-soft">
            Thank you — your email draft is ready to send. If it didn&apos;t open, reach
            us directly at{" "}
            <a href={`mailto:${site.email}`} className="text-gold-ink underline">
              {site.email}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
