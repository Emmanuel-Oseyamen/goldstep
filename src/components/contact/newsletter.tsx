"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

interface NewsletterProps {
  variant?: "light" | "dark";
  title?: string;
  description?: string;
  className?: string;
}

export function Newsletter({
  variant = "dark",
  title = "Stay in the know.",
  description = "Occasional notes from Goldstep — new experiences, seasonal moments and reasons to stay a little longer.",
  className = "",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus("error");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    ) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    /*
     * Newsletter integration point.
     *
     * Replace the simulated request with your preferred
     * newsletter provider:
     *
     * await fetch("/api/newsletter", {
     *   method: "POST",
     *   headers: {
     *     "Content-Type": "application/json",
     *   },
     *   body: JSON.stringify({
     *     email: trimmedEmail,
     *   }),
     * });
     */

    await new Promise((resolve) =>
      setTimeout(resolve, 700)
    );

    setStatus("success");
  }

  const isDark = variant === "dark";

  if (status === "success") {
    return (
      <div
        className={`border ${
          isDark
            ? "border-ivory/10 bg-ivory/[0.03]"
            : "border-foreground/10 bg-white/40"
        } p-6 ${className}`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
              isDark
                ? "border-gold/40 text-gold"
                : "border-gold/50 text-gold"
            }`}
          >
            <Check size={15} strokeWidth={1.5} />
          </div>

          <div>
            <p
              className={`text-sm ${
                isDark ? "text-ivory" : "text-foreground"
              }`}
            >
              You&apos;re on the list.
            </p>

            <p
              className={`mt-1 text-xs leading-5 ${
                isDark
                  ? "text-ivory/40"
                  : "text-foreground/45"
              }`}
            >
              We&apos;ll send occasional notes worth
              opening.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <p
        className={`text-[10px] uppercase tracking-[0.24em] ${
          isDark ? "text-gold" : "text-gold"
        }`}
      >
        The Goldstep journal
      </p>

      <h3
        className={`mt-3 font-display text-3xl ${
          isDark ? "text-ivory" : "text-foreground"
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-3 max-w-md text-xs leading-6 ${
          isDark ? "text-ivory/40" : "text-foreground/45"
        }`}
      >
        {description}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6"
        noValidate
      >
        <div
          className={`flex border-b ${
            isDark
              ? "border-ivory/20 focus-within:border-gold"
              : "border-foreground/15 focus-within:border-gold"
          } transition-colors`}
        >
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);

              if (status === "error") {
                setStatus("idle");
              }
            }}
            placeholder="Your email address"
            aria-label="Email address"
            className={`min-w-0 flex-1 bg-transparent px-0 py-4 text-sm outline-none placeholder:${
              isDark
                ? "text-ivory/25"
                : "text-foreground/25"
            }`}
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            aria-label="Subscribe to newsletter"
            className={`group flex shrink-0 items-center gap-2 pl-4 text-[10px] uppercase tracking-[0.18em] ${
              isDark ? "text-ivory" : "text-foreground"
            } transition-colors hover:text-gold disabled:opacity-40`}
          >
            {status === "submitting"
              ? "Joining..."
              : "Subscribe"}

            {status !== "submitting" && (
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            )}
          </button>
        </div>

        {status === "error" && (
          <p className="mt-2 text-[10px] text-red-500">
            Please enter a valid email address.
          </p>
        )}

        <p
          className={`mt-3 text-[9px] leading-5 ${
            isDark
              ? "text-ivory/25"
              : "text-foreground/30"
          }`}
        >
          No noise. Just occasional Goldstep news,
          experiences and invitations.
        </p>
      </form>
    </div>
  );
}