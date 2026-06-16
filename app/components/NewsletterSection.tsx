"use client";

import { useState, FormEvent } from "react";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data: { success?: boolean; message?: string; error?: string } = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", message: data.message ?? "You're subscribed!" });
        setEmail("");
      } else {
        setStatus({ type: "error", message: data.error ?? "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <section className="w-full bg-zinc-900 border-t border-zinc-800 py-20 px-6">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-3">Stay in the loop</h2>
        <p className="text-zinc-400 mb-8">Get product updates, tips, and early access to new features.</p>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:flex-row sm:gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-[#16EC06] focus:ring-1 focus:ring-[#16EC06]"
          />
          <button
            type="submit"
            disabled={status.type === "loading"}
            className="rounded-lg bg-[#16EC06] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00cc00] disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap"
          >
            {status.type === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>

        {status.type === "success" && (
          <p className="mt-4 rounded-lg border border-green-800 bg-green-950 px-4 py-3 text-sm text-green-400">
            {status.message}
          </p>
        )}
        {status.type === "error" && (
          <p className="mt-4 rounded-lg border border-red-800 bg-red-950 px-4 py-3 text-sm text-red-400">
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
}
