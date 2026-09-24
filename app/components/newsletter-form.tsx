"use client";

import { FormEvent, useState } from "react";

type NewsletterFormProps = {
  emailLabel: string;
  placeholder: string;
  consent: string;
  success: string;
  error: string;
  submitLabel: string;
};

export function NewsletterForm({
  emailLabel,
  placeholder,
  consent,
  success,
  error,
  submitLabel,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="newsletter-email">{emailLabel}</label>
      <div className="newsletter-input-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          required
          aria-describedby="newsletter-consent newsletter-status"
        />
        <button className="button button-primary" type="submit">
          {submitLabel}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <p id="newsletter-consent" className="form-consent">{consent}</p>
      <p id="newsletter-status" className={`form-status form-status-${status}`} aria-live="polite">
        {status === "success" ? success : status === "error" ? error : ""}
      </p>
    </form>
  );
}
