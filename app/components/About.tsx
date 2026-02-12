"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid gap-8 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-2"
        >
          <h2 className="text-3xl font-semibold">Tentang Saya</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Saya adalah individu yang memiliki semangat tinggi untuk terus belajar dan berkembang, dengan komitmen kuat terhadap kualitas dan ketelitian dalam setiap pekerjaan yang dilakukan.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Stat label="Pengalaman" value="&plusmn;1 tahun" />
            <Stat label="Proyek" value="5+ selesai" />
            <Stat label="Kepuasan" value="100%" />
            <Stat label="Respon" value="<24 jam" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-3 glass p-6"
        >
          <h3 className="text-lg font-medium">Apa yang saya lakukan</h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            <Item text="Landing page modern & cepat" />
            <Item text="Design sistem & komponen" />
            <Item text="Manual testing" />
            <Item text="Automation testing" />
          </ul>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            *Stack fleksibel menyesuaikan kebutuhan—selalu mengutamakan kualitas, aksesibilitas, dan maintainability.*
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border-subtle p-4">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
}

function Item({ text }: { text: string }) {
  return (
    <li className="rounded-xl border-subtle p-4 hover:bg-gray-100/60 dark:hover:bg-white/5 transition">
      {text}
    </li>
  );
}
