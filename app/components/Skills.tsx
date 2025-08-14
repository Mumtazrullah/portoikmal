"use client";
import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React",   "Next.js",  
  "PHP","Laravel", "MySQL", "Cypress", "Jest",  "Git", "CI/CD"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-6 text-3xl font-semibold"
      >
        Skills
      </motion.h2>

      <div className="glass p-6">
        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="rounded-full border-subtle px-4 py-2 text-sm"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
