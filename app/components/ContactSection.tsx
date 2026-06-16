"use client";

import { useState, FormEvent } from "react";
import AnimateIn from "./AnimateIn";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data: { success?: boolean; message?: string; error?: string } = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", message: data.message ?? "We'll be in touch soon!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error ?? "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <section className="w-full bg-zinc-900 py-20 px-6">
      <AnimateIn direction="up" className="mx-auto max-w-xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Get in touch</h2>
        <p className="text-zinc-400 mb-10">We&apos;d love to hear from you. Fill out the form and we&apos;ll respond shortly.</p>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-sm font-medium text-zinc-300">Name</label>
            <input
              id="contact-name"
              type="text"
              placeholder="Jane Smith"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              required
              className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-[#16EC06] focus:ring-1 focus:ring-[#16EC06]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-sm font-medium text-zinc-300">Email</label>
            <input
              id="contact-email"
              type="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              required
              className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-[#16EC06] focus:ring-1 focus:ring-[#16EC06]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-sm font-medium text-zinc-300">Message</label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell us what's on your mind…"
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              required
              className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-[#16EC06] focus:ring-1 focus:ring-[#16EC06] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="rounded-lg bg-[#16EC06] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00cc00] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status.type === "loading" ? "Sending…" : "Send message"}
          </button>

          {status.type === "success" && (
            <p className="rounded-lg border border-green-800 bg-green-950 px-4 py-3 text-sm text-green-400">
              {status.message}
            </p>
          )}
          {status.type === "error" && (
            <p className="rounded-lg border border-red-800 bg-red-950 px-4 py-3 text-sm text-red-400">
              {status.message}
            </p>
          )}
        </form>
      </AnimateIn>
    </section>
  );
}
