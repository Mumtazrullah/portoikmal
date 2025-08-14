"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  desc: string;
  image: string;
  tags: string[];
  link?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "SI Gudang",
    desc: "Website Sistem Informasi untuk manajemen gudang dan laboratorium kimia.",
    image: "/project1.jpg",
    tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    link: "#",
    repo: "#",
  },
  {
    title: "Portofolio",
    desc: "Website portofolio interaktif sebagai identitas visual secara profesional.",
    image: "/project2.png",
    tags: ["Next.js", "Typescript", "Tailwindcss"],
    link: "#",
  },
  {
    title: "Glamora",
    desc: "Website statis bertema e-commerce dengan desain modern",
    image: "/project3.jpeg",
    tags: ["HTML","CSS","Javascript",],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="mb-6 text-3xl font-semibold">Proyek Terpilih</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.a
            href={p.link || "#"}
            target="_blank"
            key={p.title}
            initial={{ opacity: 0, y: 20, rotateX: -6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group tilt glass block overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
