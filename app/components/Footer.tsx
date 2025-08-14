export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container flex flex-col items-center gap-3 text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="h-px w-full bg-white/10" />
        <p>© {new Date().getFullYear()} Ikmal Mumtaz Anwarullah. All rights reserved.</p>
      </div>
    </footer>
  );
}
