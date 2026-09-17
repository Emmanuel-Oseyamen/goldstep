"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

export interface DateRange {
  from: Date | null;
  to: Date | null;
}

interface DatePickerProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
  label?: string;
  compact?: boolean;
  minDate?: Date;
}

const WEEK_DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function startOfDay(date: Date) {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false;

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isBefore(a: Date, b: Date) {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

function isAfter(a: Date, b: Date) {
  return startOfDay(a).getTime() > startOfDay(b).getTime();
}

function formatDate(date: Date | null) {
  if (!date) return "Select date";

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function getMonthDays(month: Date) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();

  const firstDay = new Date(year, monthIndex, 1);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  // Convert Sunday=0 into Monday=0.
  const startingOffset = (firstDay.getDay() + 6) % 7;

  const days: Array<Date | null> = [];

  for (let i = 0; i < startingOffset; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, monthIndex, day));
  }

  return days;
}

export function DatePicker({
  value,
  onChange,
  label,
  compact = false,
  minDate = new Date(),
}: DatePickerProps) {
  const today = startOfDay(minDate);

  const [open, setOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const wrapperRef = useRef<HTMLDivElement>(null);

  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("en", {
        month: "long",
        year: "numeric",
      }).format(visibleMonth),
    [visibleMonth]
  );

  const days = useMemo(
    () => getMonthDays(visibleMonth),
    [visibleMonth]
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleDayClick(day: Date) {
    if (isBefore(day, today)) return;

    if (!value.from || (value.from && value.to)) {
      onChange({
        from: day,
        to: null,
      });

      return;
    }

    if (isBefore(day, value.from)) {
      onChange({
        from: day,
        to: value.from,
      });

      return;
    }

    onChange({
      from: value.from,
      to: day,
    });
  }

  function isInRange(day: Date) {
    if (!value.from || !value.to) return false;

    return (
      isAfter(day, value.from) &&
      isBefore(day, value.to)
    );
  }

  function previousMonth() {
    const previous = new Date(
      visibleMonth.getFullYear(),
      visibleMonth.getMonth() - 1,
      1
    );

    const currentMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    if (previous >= currentMonth) {
      setVisibleMonth(previous);
    }
  }

  function nextMonth() {
    setVisibleMonth(
      new Date(
        visibleMonth.getFullYear(),
        visibleMonth.getMonth() + 1,
        1
      )
    );
  }

  function clearDates() {
    onChange({
      from: null,
      to: null,
    });
  }

  const completed = value.from && value.to;

  return (
    <div ref={wrapperRef} className="relative">
      {label && (
        <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/50">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`group flex w-full items-center justify-between border border-foreground/10 bg-white/50 text-left transition-colors hover:border-gold/50 ${
          compact ? "px-4 py-3" : "px-5 py-4"
        }`}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <div className="flex min-w-0 items-center gap-3">
          <CalendarDays
            size={17}
            strokeWidth={1.4}
            className="shrink-0 text-gold"
          />

          <div className="min-w-0">
            <span className="block truncate text-sm text-foreground">
              {value.from
                ? formatDate(value.from)
                : "Select date"}
            </span>

            {!compact && (
              <span className="mt-0.5 block text-[10px] uppercase tracking-[0.16em] text-foreground/35">
                {completed
                  ? "Stay dates selected"
                  : value.from
                    ? "Select your departure"
                    : "Choose your arrival"}
              </span>
            )}
          </div>
        </div>

        <ChevronRight
          size={15}
          className={`shrink-0 text-foreground/30 transition-transform ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 mt-2 w-[min(340px,calc(100vw-2rem))] border border-foreground/10 bg-ivory-soft p-5 shadow-[0_20px_60px_rgba(23,21,18,0.14)]"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  {value.from && !value.to
                    ? "Check-out"
                    : "Check-in"}
                </p>

                <p className="mt-1 font-display text-xl">
                  {monthLabel}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={previousMonth}
                  className="flex h-8 w-8 items-center justify-center border border-foreground/10 transition-colors hover:border-gold/40 hover:text-gold"
                  aria-label="Previous month"
                >
                  <ChevronLeft size={15} />
                </button>

                <button
                  type="button"
                  onClick={nextMonth}
                  className="flex h-8 w-8 items-center justify-center border border-foreground/10 transition-colors hover:border-gold/40 hover:text-gold"
                  aria-label="Next month"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 border-b border-foreground/10 pb-2">
              {WEEK_DAYS.map((day) => (
                <div
                  key={day}
                  className="text-center text-[9px] uppercase tracking-[0.1em] text-foreground/35"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-7">
              {days.map((day, index) => {
                if (!day) {
                  return <div key={`empty-${index}`} />;
                }

                const disabled = isBefore(day, today);
                const selectedFrom = isSameDay(day, value.from);
                const selectedTo = isSameDay(day, value.to);
                const inRange = isInRange(day);

                return (
                  <button
                    key={day.toISOString()}
                    type="button"
                    disabled={disabled}
                    onClick={() => handleDayClick(day)}
                    className={`relative flex h-10 items-center justify-center text-xs transition-all ${
                      disabled
                        ? "cursor-not-allowed text-foreground/15"
                        : "text-foreground hover:bg-gold/10"
                    } ${
                      selectedFrom || selectedTo
                        ? "bg-charcoal text-ivory hover:bg-charcoal"
                        : ""
                    } ${
                      inRange
                        ? "bg-gold/10 text-foreground"
                        : ""
                    }`}
                  >
                    {day.getDate()}

                    {(selectedFrom || selectedTo) && (
                      <span className="absolute bottom-1 left-1/2 h-0.5 w-2 -translate-x-1/2 bg-gold" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-foreground/10 pt-4">
              <button
                type="button"
                onClick={clearDates}
                className="text-[10px] uppercase tracking-[0.16em] text-foreground/40 transition-colors hover:text-foreground"
              >
                Clear
              </button>

              <button
                type="button"
                onClick={() => {
                  if (value.from && value.to) {
                    setOpen(false);
                  }
                }}
                disabled={!value.from || !value.to}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-gold transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
              >
                <Check size={13} />
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DateRangeSummary({
  range,
}: {
  range: DateRange;
}) {
  return (
    <div className="grid grid-cols-2 gap-px bg-foreground/10">
      <div className="bg-ivory-soft p-4">
        <p className="text-[9px] uppercase tracking-[0.18em] text-foreground/35">
          Check in
        </p>

        <p className="mt-1 text-sm">
          {formatDate(range.from)}
        </p>
      </div>

      <div className="bg-ivory-soft p-4">
        <p className="text-[9px] uppercase tracking-[0.18em] text-foreground/35">
          Check out
        </p>

        <p className="mt-1 text-sm">
          {formatDate(range.to)}
        </p>
      </div>
    </div>
  );
}