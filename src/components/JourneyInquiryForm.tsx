"use client";

import { useState } from "react";
import {
  consultationMethods,
  eventTypeOptions,
  guestCountOptions,
  investmentOptions,
  referralOptions,
} from "@/lib/journey";
import { site } from "@/lib/site";

const fieldClass =
  "w-full border-b border-gold/40 bg-transparent py-3 text-plum placeholder:text-plum-body/45 focus:border-gold focus:outline-none transition-colors";
const labelClass = "block text-[0.72rem] uppercase tracking-luxe text-gold-ink mb-1.5";

/**
 * The "Begin Your Journey" private consultation request. Composes a
 * pre-filled email via mailto as the submission path.
 */
export default function JourneyInquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) || "");

    const subject = `Private Consultation Request — ${get("eventType") || "Celebration"} — ${get(
      "name"
    )}`;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Celebration type: ${get("eventType")}`,
      `Event date: ${get("eventDate")}`,
      `Location: ${get("location")}`,
      `Estimated guest count: ${get("guestCount")}`,
      `Estimated investment: ${get("investment")}`,
      `How they heard about us: ${get("referral")}`,
      `Preferred consultation method: ${get("consultationMethod")}`,
      "",
      get("vision"),
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-7 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={fieldClass}
          placeholder="(214) 555-0100"
        />
      </div>

      <div>
        <label htmlFor="eventType" className={labelClass}>
          Celebration Type
        </label>
        <select
          id="eventType"
          name="eventType"
          defaultValue=""
          className={`${fieldClass} appearance-none`}
        >
          <option value="" disabled>
            Select your celebration
          </option>
          {eventTypeOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="eventDate" className={labelClass}>
          Event Date
        </label>
        <input id="eventDate" name="eventDate" type="date" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="location" className={labelClass}>
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          className={fieldClass}
          placeholder="Dallas, destination, or still deciding"
        />
      </div>

      <div>
        <label htmlFor="guestCount" className={labelClass}>
          Estimated Guest Count
        </label>
        <select
          id="guestCount"
          name="guestCount"
          defaultValue=""
          className={`${fieldClass} appearance-none`}
        >
          <option value="" disabled>
            Select a range
          </option>
          {guestCountOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="investment" className={labelClass}>
          Estimated Investment
        </label>
        <select
          id="investment"
          name="investment"
          defaultValue=""
          className={`${fieldClass} appearance-none`}
        >
          <option value="" disabled>
            Select a range
          </option>
          {investmentOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="vision" className={labelClass}>
          Tell Us About Your Vision
        </label>
        <textarea
          id="vision"
          name="vision"
          rows={5}
          className={`${fieldClass} resize-none`}
          placeholder="Share your inspiration, colors, traditions, travel dreams, or simply an idea you've been carrying with you."
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="referral" className={labelClass}>
          How Did You Hear About Us?
        </label>
        <select
          id="referral"
          name="referral"
          defaultValue=""
          className={`${fieldClass} appearance-none`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {referralOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="sm:col-span-2">
        <legend className={labelClass}>Preferred Consultation Method</legend>
        <div className="mt-2 flex flex-wrap gap-x-8 gap-y-3">
          {consultationMethods.map((method, i) => (
            <label
              key={method}
              className="flex cursor-pointer items-center gap-2.5 text-[0.92rem] text-plum-body"
            >
              <input
                type="radio"
                name="consultationMethod"
                value={method}
                defaultChecked={i === 0}
                className="h-4 w-4 accent-gold-deep"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-[2px] bg-gradient-to-br from-gold to-gold-deep px-10 py-4 text-[0.74rem] uppercase tracking-luxe text-white shadow-gold transition-all duration-500 ease-luxe hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(169,129,47,0.44)] sm:w-auto"
        >
          Begin Your Journey
        </button>
        {sent ? (
          <p role="status" className="mt-4 text-[0.82rem] text-plum-body">
            Thank you — your email draft is ready to send. If it didn&apos;t open,
            reach us directly at{" "}
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
