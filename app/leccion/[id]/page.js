import Link from "next/link";
import { notFound } from "next/navigation";
import { lessons, getLesson } from "@/lib/lessons";
import Quiz from "@/components/Quiz";
import Rich from "@/components/Rich";

export function generateStaticParams() {
  return lessons.map((l) => ({ id: l.id }));
}

export default async function Lesson({ params }) {
  const { id } = await params;
  const l = getLesson(id);
  if (!l) notFound();
  const idx = lessons.indexOf(l);
  const next = lessons[idx + 1];
  return (
    <>
      <Link href="/" className="muted">← Lecciones</Link>
      <h1>{l.titulo}</h1>
      {l.contenido.map((p, i) => <p key={i}><Rich text={p} /></p>)}
      <h2>Ejercicios</h2>
      <Quiz lessonId={l.id} ejercicios={l.ejercicios} />
      <p>
        <Link href="/tutor">¿Dudas? Pregúntale al profesor →</Link>
        {next && <> &nbsp;·&nbsp; <Link href={`/leccion/${next.id}`}>Siguiente lección →</Link></>}
      </p>
    </>
  );
}
