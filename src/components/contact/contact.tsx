"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Newsletter } from "./newsletter";

type ContactReason =
  | "general"
  | "reservations"
  | "events"
  | "dining"
  | "partnerships";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  reason: ContactReason;
  message: string;
}

const CONTACT_REASONS: {
  value: ContactReason;
  label: string;
}[] = [
  {
    value: "general",
    label: "General enquiry",
  },
  {
    value: "reservations",
    label: "Reservations",
  },
  {
    value: "events",
    label: "Events & conferences",
  },
  {
    value: "dining",
    label: "Dining",
  },
  {
    value: "partnerships",
    label: "Partnerships",
  },
];

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    eyebrow: "Visit",
    title: "Find us",
    lines: [
      "Goldstep Hotels",
      "Your street address",
      "Your city, Nigeria",
    ],
    action: "Get directions",
    href: "#location",
  },
  {
    icon: Phone,
    eyebrow: "Call",
    title: "Speak with us",
    lines: [
      "+234 000 000 0000",
      "Reservations & enquiries",
    ],
    action: "Call the hotel",
    href: "tel:+2340000000000",
  },
  {
    icon: Mail,
    eyebrow: "Email",
    title: "Write to us",
    lines: [
      "hello@goldstephotels.com",
      "We aim to reply promptly.",
    ],
    action: "Send an email",
    href: "mailto:hello@goldstephotels.com",
  },
  {
    icon: Clock3,
    eyebrow: "Always",
    title: "Front desk",
    lines: [
      "Open 24 hours",
      "Every day of the year",
    ],
    action: "Plan your arrival",
    href: "#booking",
  },
];

export function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    reason: "general",
    message: "",
  });

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  function updateField(
    key: keyof ContactForm,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));

    if (errors[key]) {
      setErrors((current) => ({
        ...current,
        [key]: "",
      }));
    }
  }

  function validate() {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message =
        "Please tell us how we can help.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!validate()) return;

    setStatus("submitting");

    /*
     * Backend integration point.
     *
     * Replace this with your contact/enquiry API:
     *
     * await fetch("/api/contact", {
     *   method: "POST",
     *   headers: {
     *     "Content-Type": "application/json",
     *   },
     *   body: JSON.stringify(form),
     * });
     */

    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    setStatus("success");
  }

  function resetForm() {
    setForm({
      name: "",
      email: "",
      phone: "",
      reason: "general",
      message: "",
    });

    setErrors({});
    setStatus("idle");
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ivory"
    >
      {/* Intro */}
      <div className="goldstep-container border-b border-foreground/10 py-20 sm:py-28 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="goldstep-eyebrow">
              Get in touch
            </p>

            <p className="mt-6 max-w-xs text-sm leading-7 text-foreground/45">
              Whether you&apos;re planning a stay, an event,
              a dinner or simply want to know more, we&apos;re
              here to help.
            </p>
          </div>

          <div>
            <h2 className="goldstep-display max-w-4xl">
              Good conversations
              <br />
              <span className="italic text-gold">
                start here.
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Contact details */}
      <div className="goldstep-container border-b border-foreground/10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_DETAILS.map(
            ({
              icon: Icon,
              eyebrow,
              title,
              lines,
              action,
              href,
            }) => (
              <div
                key={title}
                className="group border-b border-foreground/10 px-0 py-8 sm:px-7 sm:py-10 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={16}
                    strokeWidth={1.3}
                    className="text-gold"
                  />

                  <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/35">
                    {eyebrow}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl">
                  {title}
                </h3>

                <div className="mt-3 min-h-[48px] text-xs leading-6 text-foreground/45">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                <a
                  href={href}
                  className="mt-6 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-foreground/60 transition-colors hover:text-gold"
                >
                  {action}

                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            )
          )}
        </div>
      </div>

      {/* Main enquiry area */}
      <div className="goldstep-container py-20 sm:py-28 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          {/* Editorial side */}
          <div>
            <p className="goldstep-eyebrow">
              Send an enquiry
            </p>

            <h3 className="mt-6 max-w-md font-display text-5xl leading-[0.95] sm:text-6xl">
              Tell us
              <br />
              <span className="italic text-gold">
                what you need.
              </span>
            </h3>

            <p className="mt-7 max-w-sm text-sm leading-7 text-foreground/45">
              Our team can help with reservations, special
              occasions, meetings, dining enquiries and
              anything else that will make your Goldstep
              experience better.
            </p>

            <div className="mt-10 border-l border-gold/40 pl-5">
              <p className="text-xs leading-6 text-foreground/45">
                For immediate reservation assistance, please
                use the booking experience or contact our
                reservations team directly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  className="flex min-h-[500px] flex-col items-start justify-center border border-foreground/10 bg-white/35 p-8 sm:p-12"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
                    <Check
                      size={21}
                      strokeWidth={1.4}
                      className="text-gold"
                    />
                  </div>

                  <p className="mt-7 text-[10px] uppercase tracking-[0.22em] text-gold">
                    Message received
                  </p>

                  <h3 className="mt-3 max-w-lg font-display text-4xl leading-tight sm:text-5xl">
                    Thank you, {form.name.split(" ")[0]}.
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-foreground/45">
                    Your enquiry is with our team. We&apos;ll
                    get back to you using the contact details
                    you provided.
                  </p>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-8 border-b border-gold pb-2 text-[10px] uppercase tracking-[0.18em] text-foreground transition-colors hover:text-gold"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-7"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <ContactField
                      id="contact-name"
                      label="Name"
                      value={form.name}
                      error={errors.name}
                      placeholder="Your name"
                      onChange={(value) =>
                        updateField("name", value)
                      }
                    />

                    <ContactField
                      id="contact-email"
                      label="Email"
                      type="email"
                      value={form.email}
                      error={errors.email}
                      placeholder="you@example.com"
                      onChange={(value) =>
                        updateField("email", value)
                      }
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <ContactField
                      id="contact-phone"
                      label="Phone"
                      type="tel"
                      value={form.phone}
                      placeholder="+234..."
                      onChange={(value) =>
                        updateField("phone", value)
                      }
                    />

                    <div>
                      <label
                        htmlFor="contact-reason"
                        className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-foreground/45"
                      >
                        Enquiry type
                      </label>

                      <select
                        id="contact-reason"
                        value={form.reason}
                        onChange={(event) =>
                          updateField(
                            "reason",
                            event.target.value
                          )
                        }
                        className="w-full appearance-none border border-foreground/10 bg-white/40 px-4 py-4 text-sm outline-none transition-colors focus:border-gold"
                      >
                        {CONTACT_REASONS.map((reason) => (
                          <option
                            key={reason.value}
                            value={reason.value}
                          >
                            {reason.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-foreground/45"
                    >
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      value={form.message}
                      onChange={(event) =>
                        updateField(
                          "message",
                          event.target.value
                        )
                      }
                      rows={7}
                      placeholder="How can we help?"
                      className={`w-full resize-none border bg-white/40 px-4 py-4 text-sm outline-none transition-colors placeholder:text-foreground/25 focus:border-gold ${
                        errors.message
                          ? "border-red-700/40"
                          : "border-foreground/10"
                      }`}
                    />

                    {errors.message && (
                      <p className="mt-2 text-[10px] text-red-700">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-5 border-t border-foreground/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-sm text-[9px] leading-5 text-foreground/30">
                      By sending this enquiry, you agree that
                      Goldstep Hotels may use the information
                      provided to respond to your request.
                    </p>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group inline-flex shrink-0 items-center justify-center gap-3 bg-charcoal px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-charcoal-soft disabled:cursor-wait disabled:opacity-50"
                    >
                      {status === "submitting"
                        ? "Sending..."
                        : "Send enquiry"}

                      {status !== "submitting" && (
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-charcoal">
        <div className="goldstep-container py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-ivory/30">
                Stay connected
              </p>

              <p className="mt-4 max-w-xs text-xs leading-6 text-ivory/35">
                A little Goldstep in your inbox, from time
                to time.
              </p>
            </div>

            <Newsletter />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactField({
  id,
  label,
  type = "text",
  value,
  error,
  placeholder,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-foreground/45"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className={`w-full border bg-white/40 px-4 py-4 text-sm outline-none transition-colors placeholder:text-foreground/25 focus:border-gold ${
          error
            ? "border-red-700/40"
            : "border-foreground/10"
        }`}
      />

      {error && (
        <p className="mt-2 text-[10px] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}