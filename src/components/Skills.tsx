import { motion } from "framer-motion";
import { SKILLS } from "../content/profile";
import Section from "./Section";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <motion.div
        className="flex flex-wrap gap-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {SKILLS.map((s) => (
          <motion.span
            key={s}
            variants={item}
            className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm text-[var(--text)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </Section>
  );
}
