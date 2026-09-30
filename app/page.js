import Link from "next/link";
import { lessons } from "@/lib/lessons";
import Progress from "@/components/Progress";

export default function Home() {
  return (
    <>
      <h1>Aprende contabilidad desde cero</h1>
      <p className="muted">Lee la lección, resuelve los ejercicios y pregunta tus dudas al profesor.</p>
      {lessons.map((l, i) => (
        <Link key={l.id} href={`/leccion/${l.id}`} className="card link">
          <div><strong>{i + 1}. {l.titulo}</strong><div className="muted">{l.resumen}</div></div>
          <Progress id={l.id} total={l.ejercicios.length} />
        </Link>
      ))}
    </>
  );
}
