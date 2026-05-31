import { Mail, ShieldCheck } from "lucide-react";
import { supplierRequirements } from "../data/kinsilverOntology";

export function ComingSoon() {
  return (
    <section id="coming-soon" className="coming-soon" aria-labelledby="coming-soon-title">
      <div>
        <p className="eyebrow">Coming soon</p>
        <h2 id="coming-soon-title">Interest list open. Checkout stays closed.</h2>
        <p>
          kinSilver can collect early interest now, but the store remains disabled until the supplier gate is fully
          approved.
        </p>
      </div>
      <form className="signup" aria-label="Join the kinSilver interest list">
        <label htmlFor="email">Email address</label>
        <div className="signup__row">
          <Mail size={18} aria-hidden="true" />
          <input id="email" name="email" type="email" placeholder="you@example.com" />
          <button type="button">Notify me</button>
        </div>
        <p className="signup__note">Demo capture only. No email is sent from this static build.</p>
      </form>
      <div className="gate-list" aria-label="Supplier gate requirements">
        {supplierRequirements.map((item) => (
          <div className="gate-list__item" key={item.id}>
            <ShieldCheck size={17} aria-hidden="true" />
            <span>{item.label}</span>
            <strong>{item.status}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
