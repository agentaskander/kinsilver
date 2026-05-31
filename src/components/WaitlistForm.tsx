import { Check, Mail } from "lucide-react";
import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="editorial-card bg-ink text-cream">
        <Check className="text-gold" size={26} aria-hidden="true" />
        <h3 className="h3 mt-5">You are on the first collection list.</h3>
        <p className="mt-4 leading-7 text-cream/76">
          Early access opens after supplier confirmation, sample approval, plating verification, food-safety review,
          and landed cost validation.
        </p>
      </div>
    );
  }

  return (
    <form className="editorial-card" onSubmit={onSubmit}>
      <label className="text-sm font-bold uppercase tracking-[0.16em] text-brown" htmlFor="waitlist-email">
        Email address
      </label>
      <div className="mt-4 grid gap-3 sm:grid-cols-[auto_1fr_auto] sm:items-center">
        <Mail className="hidden text-gold sm:block" size={20} aria-hidden="true" />
        <input
          className="min-h-12 rounded-md border border-brown/15 bg-white px-4 text-ink outline-none focus:border-gold"
          id="waitlist-email"
          name="email"
          placeholder="you@example.com"
          type="email"
          required
        />
        <button className="button-primary" type="submit">
          Join Early Access
        </button>
      </div>
      <p className="mt-4 text-sm leading-6 text-brown">
        Shopify-ready structure. This static build stores no email data and sends no network request.
      </p>
    </form>
  );
}
