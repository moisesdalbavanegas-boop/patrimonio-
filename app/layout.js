import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Profesor de Contabilidad",
  description: "Aprende contabilidad paso a paso con lecciones, ejercicios y un profesor con IA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <Link href="/" className="brand">📒 Profesor de Contabilidad</Link>
          <nav><Link href="/">Lecciones</Link><Link href="/tutor">Preguntar al profesor</Link></nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
