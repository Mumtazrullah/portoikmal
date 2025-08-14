"use client";

import { motion } from "framer-motion";

const items = [
  {
    role: "Intern As Quality Assurance Tester",
    company: "PT Neuronworks Indonesia",
    period: "2024 – 2025",
    points: [
      "Melakukan automation testing dan pencatatan bug secara sistematis.",
      "Membuat dan mengeksekusi test case berdasarkan kebutuhan sistem",
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="mb-6 text-3xl font-semibold">Pengalaman</h2>
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent dark:via-white/10" />
        <div className="space-y-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="glass p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <div className="text-lg font-semibold">{it.role}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{it.company}</div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{it.period}</div>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                {it.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
