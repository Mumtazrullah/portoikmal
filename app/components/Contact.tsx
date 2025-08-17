"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "" }>({
    message: "",
    type: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        setToast({ message: "Pesan berhasil dikirim!", type: "success" });
        form.reset();
      } else {
        setToast({ message: "Gagal mengirim pesan.", type: "error" });
      }
    } catch (err) {
      setToast({ message: "Error server.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  // Auto-hide toast setelah 3 detik
  useEffect(() => {
    if (toast.message) {
      const timer = setTimeout(() => {
        setToast({ message: "", type: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section id="contact" className="section">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Kiri */}
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
            <p>LinkedIn: <a href="linkedin.com/in/mumtazrullah" className="text-brand-500 hover:underline">linkedin.com/in/mumtazrullah</a></p>
            <p>GitHub: <a href="github.com/mumtazrullah" className="text-brand-500 hover:underline">github.com/mumtazrullah</a></p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass p-6 space-y-4"
        >
          <div>
            <label className="mb-1 block text-sm">Nama</label>
            <input name="name" className="w-full rounded-xl border-subtle bg-transparent px-4 py-2 outline-none" required />
          </div>
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input type="email" name="email" className="w-full rounded-xl border-subtle bg-transparent px-4 py-2 outline-none" required />
          </div>
          <div>
            <label className="mb-1 block text-sm">Pesan</label>
            <textarea name="message" rows={5} className="w-full rounded-xl border-subtle bg-transparent px-4 py-2 outline-none" required />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-blue-600 px-5 py-3 text-white shadow-soft transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </motion.form>
      </div>

      {/* Toast Popup */}
      {toast.message && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed bottom-5 right-5 px-4 py-3 rounded-xl shadow-lg text-white ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </motion.div>
      )}
    </section>
  );
}
