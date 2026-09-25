import { motion } from "framer-motion";
import { PROFILE } from "../content/profile";

export default function Hero() {
  return (
    <section className="relative mx-auto flex max-w-3xl flex-col items-start gap-6 overflow-hidden px-6 pb-20 pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[var(--accent)]/25 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-soft)] text-lg font-semibold text-[var(--accent)] ring-4 ring-[var(--bg)]"
      >
        {PROFILE.initials}
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I'm {PROFILE.name.split(" ")[0]}
        </h1>
        <p className="mt-3 max-w-xl text-lg text-[var(--text-soft)]">{PROFILE.tagline}</p>
      </motion.div>
    </section>
  );
}
