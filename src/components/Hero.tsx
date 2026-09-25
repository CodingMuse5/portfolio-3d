import { motion } from "framer-motion";
import { PROFILE } from "../content/profile";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex max-w-3xl flex-col items-start gap-6 overflow-hidden px-6 pb-20 pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[var(--accent)]/25 blur-3xl"
      />
      <HeroCanvas />

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
