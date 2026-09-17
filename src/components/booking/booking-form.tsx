"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import { DatePicker, DateRange } from "./date-picker";
import {
  GuestCounts,
  GuestSelector,
} from "./guest-selector";

interface BookingFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roomType: string;
  specialRequest: string;
}

const ROOM_OPTIONS = [
  {
    value: "deluxe-king",
    label: "Deluxe King",
  },
  {
    value: "executive-suite",
    label: "Executive Suite",
  },
  {
    value: "presidential-suite",
    label: "Presidential Suite",
  },
];

function formatReservationDate(date: Date | null) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function BookingForm({
  onSuccess,
  compact = false,
}: BookingFormProps) {
  const [dates, setDates] = useState<DateRange>({
    from: null,
    to: null,
  });

  const [guests, setGuests] = useState<GuestCounts>({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roomType: "deluxe-king",
    specialRequest: "",
  });

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const nights = useMemo(() => {
    if (!dates.from || !dates.to) return 0;

    const difference =
      dates.to.getTime() - dates.from.getTime();

    return Math.max(
      0,
      Math.round(difference / (1000 * 60 * 60 * 24))
    );
  }, [dates]);

  function updateField(
    key: keyof FormData,
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

    if (!dates.from) {
      nextErrors.dates = "Please select your check-in date.";
    }

    if (!dates.to) {
      nextErrors.dates =
        "Please select your check-in and check-out dates.";
    }

    if (!form.firstName.trim()) {
      nextErrors.firstName = "Required";
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = "Required";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      nextErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Required";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    /*
     * Backend integration point.
     *
     * Replace this simulated delay with your reservation API:
     *
     * await fetch("/api/bookings", {
     *   method: "POST",
     *   headers: { "Content-Type": "application/json" },
     *   body: JSON.stringify({
     *     ...form,
     *     dates,
     *     guests,
     *     nights,
     *   }),
     * });
     */

    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    );

    setSubmitting(false);
    setSubmitted(true);
    onSuccess?.();
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
          <Check
            size={22}
            strokeWidth={1.5}
            className="text-gold"
          />
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-gold">
          Request received
        </p>

        <h3 className="mt-3 font-display text-4xl text-foreground">
          We&apos;ll take it from here.
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-foreground/55">
          Thank you, {form.firstName}. Your stay request has
          been received. Our reservations team will contact
          you at {form.email} to confirm availability and the
          final booking details.
        </p>

        <div className="mt-8 border border-foreground/10 bg-white/40 px-6 py-4 text-left">
          <p className="text-[9px] uppercase tracking-[0.18em] text-foreground/35">
            Your stay
          </p>

          <p className="mt-2 text-sm">
            {dates.from &&
              formatReservationDate(dates.from)}{" "}
            —{" "}
            {dates.to &&
              formatReservationDate(dates.to)}
          </p>

          <p className="mt-1 text-xs text-foreground/45">
            {nights} {nights === 1 ? "night" : "nights"} ·{" "}
            {guests.adults + guests.children}{" "}
            {guests.adults + guests.children === 1
              ? "guest"
              : "guests"}{" "}
            · {guests.rooms}{" "}
            {guests.rooms === 1 ? "room" : "rooms"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? "" : "space-y-8"}
      noValidate
    >
      <section>
        {!compact && (
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
              Your stay
            </p>

            <h3 className="mt-2 font-display text-3xl">
              When will we welcome you?
            </h3>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <DatePicker
              label="Check in / Check out"
              value={dates}
              onChange={setDates}
            />

            {errors.dates && (
              <p className="mt-2 text-[10px] text-red-700">
                {errors.dates}
              </p>
            )}
          </div>

          <GuestSelector
            label="Guests & rooms"
            value={guests}
            onChange={setGuests}
          />
        </div>

        {nights > 0 && (
          <div className="mt-3 text-right text-[10px] uppercase tracking-[0.16em] text-foreground/35">
            {nights} {nights === 1 ? "night" : "nights"}
          </div>
        )}
      </section>

      <section className="border-t border-foreground/10 pt-8">
        {!compact && (
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
              Accommodation
            </p>

            <h3 className="mt-2 font-display text-3xl">
              Choose your room
            </h3>
          </div>
        )}

        <div>
          <label
            htmlFor="roomType"
            className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50"
          >
            Preferred room
          </label>

          <select
            id="roomType"
            value={form.roomType}
            onChange={(event) =>
              updateField("roomType", event.target.value)
            }
            className="w-full appearance-none border border-foreground/10 bg-white/50 px-5 py-4 text-sm outline-none transition-colors focus:border-gold"
          >
            {ROOM_OPTIONS.map((room) => (
              <option
                key={room.value}
                value={room.value}
              >
                {room.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="border-t border-foreground/10 pt-8">
        {!compact && (
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
              Your details
            </p>

            <h3 className="mt-2 font-display text-3xl">
              Tell us who&apos;s staying
            </h3>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <Field
            id="firstName"
            label="First name"
            value={form.firstName}
            error={errors.firstName}
            onChange={(value) =>
              updateField("firstName", value)
            }
          />

          <Field
            id="lastName"
            label="Last name"
            value={form.lastName}
            error={errors.lastName}
            onChange={(value) =>
              updateField("lastName", value)
            }
          />

          <Field
            id="email"
            label="Email address"
            type="email"
            icon={<Mail size={14} />}
            value={form.email}
            error={errors.email}
            onChange={(value) =>
              updateField("email", value)
            }
          />

          <Field
            id="phone"
            label="Phone number"
            type="tel"
            icon={<Phone size={14} />}
            value={form.phone}
            error={errors.phone}
            onChange={(value) =>
              updateField("phone", value)
            }
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="specialRequest"
            className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50"
          >
            Special requests{" "}
            <span className="normal-case tracking-normal text-foreground/30">
              (optional)
            </span>
          </label>

          <textarea
            id="specialRequest"
            value={form.specialRequest}
            onChange={(event) =>
              updateField(
                "specialRequest",
                event.target.value
              )
            }
            rows={4}
            placeholder="Tell us anything that would make your stay more comfortable..."
            className="w-full resize-none border border-foreground/10 bg-white/50 px-5 py-4 text-sm outline-none placeholder:text-foreground/25 focus:border-gold"
          />
        </div>
      </section>

      <div className="border-t border-foreground/10 pt-6">
        <p className="mb-5 max-w-xl text-xs leading-6 text-foreground/40">
          Submitting this form sends a stay request to the
          hotel. Your reservation is only confirmed once
          availability and booking details have been confirmed
          by Goldstep Hotels.
        </p>

        <button
          type="submit"
          disabled={submitting}
          className="group flex w-full items-center justify-center gap-3 bg-charcoal px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-charcoal-soft disabled:cursor-wait disabled:opacity-60"
        >
          {submitting ? (
            "Sending request..."
          ) : (
            <>
              Request this stay
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  icon,
  value,
  error,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  icon?: React.ReactNode;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50"
      >
        {label}
      </label>

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold">
            {icon}
          </span>
        )}

        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className={`w-full border border-foreground/10 bg-white/50 px-5 py-4 text-sm outline-none transition-colors focus:border-gold ${
            icon ? "pl-10" : ""
          } ${
            error
              ? "border-red-700/40 focus:border-red-700"
              : ""
          }`}
        />
      </div>

      {error && (
        <p className="mt-1.5 text-[10px] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}