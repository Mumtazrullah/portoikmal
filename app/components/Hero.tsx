"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Junior Web Programmer
          </p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Bangun pengalaman web yang <span className="gradient-text">cepat</span>,{" "}
            <span className="gradient-text">elegan</span>, dan{" "}
            <span className="gradient-text">berdampak</span>.
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            Mengembangkan antarmuka modern yang responsif, mudah diakses, dan memiliki performa tinggi dengan teknologi web terkini.          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-brand-500 to-blue-600 px-5 py-3 text-white shadow-soft transition hover:opacity-90"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="rounded-xl border-subtle px-5 py-3 transition hover:bg-gray-100 dark:hover:bg-white/10"
            >
              Kontak Saya
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: .98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto h-64 w-64 rounded-2xl glass md:h-80 md:w-80">
            <Image
              src="/profilejohn.jpg"
              alt="Foto Profil"
              fill
              priority
              sizes="(max-width: 768px) 256px, 320px"
              className="rounded-2xl object-cover"
            />
            {/* <div className="absolute -bottom-3 -right-3 rounded-xl bg-white/90 px-3 py-2 text-xs shadow md:text-sm dark:bg-white/10 backdrop-blur">
              Tersedia untuk proyek ✨
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
