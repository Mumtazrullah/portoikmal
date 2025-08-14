"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass p-6"
        >
          <h2 className="text-3xl font-semibold">Hubungi</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Tertarik bekerja sama? Kirim pesan atau email langsung.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p>Email: <a href="mailto:anwarullahmumtaz404@gmail.com" className="text-brand-500 hover:underline">anwarullahmumtaz404@gmail.com</a></p>
            <p>LinkedIn: <a href="#" className="text-brand-500 hover:underline">linkedin.com/in/mumtazrullah</a></p>
            <p>GitHub: <a href="#" className="text-brand-500 hover:underline">github.com/mumtazrullah</a></p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass p-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Terima kasih! Pesan terkirim (mock). Integrasikan ke service form/email sesudah deploy.");
          }}
        >
          <div>
            <label className="mb-1 block text-sm">Nama</label>
            <input className="w-full rounded-xl border-subtle bg-transparent px-4 py-2 outline-none" required />
          </div>
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input type="email" className="w-full rounded-xl border-subtle bg-transparent px-4 py-2 outline-none" required />
          </div>
          <div>
            <label className="mb-1 block text-sm">Pesan</label>
            <textarea rows={5} className="w-full rounded-xl border-subtle bg-transparent px-4 py-2 outline-none" required />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-blue-600 px-5 py-3 text-white shadow-soft transition hover:opacity-90"
          >
            Kirim Pesan
          </button>
        </motion.form>
      </div>
    </section>
  );
}
