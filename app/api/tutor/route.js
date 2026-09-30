const SYSTEM = `Eres un profesor de contabilidad paciente, claro y amable. Hablas en español sencillo, sin jerga innecesaria.
- Explica con ejemplos cotidianos y cifras pequeñas.
- Cuando muestres asientos, usa el formato: Debe / Haber.
- Después de explicar, propón un mini ejercicio y espera la respuesta del alumno.
- Si el alumno se equivoca, corrige con cariño y explica por qué.
- Sé breve: máximo unos 150 palabras por respuesta salvo que pidan más.`;

export async function POST(req) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return Response.json({
      error: "El profesor con IA aún no está activado: falta configurar ANTHROPIC_API_KEY en Vercel. Mientras tanto, usa las lecciones y ejercicios.",
    });
  }
  const { messages } = await req.json();
  const clean = (Array.isArray(messages) ? messages : [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-20);
  if (!clean.length || clean[0].role !== "user") return Response.json({ error: "Mensaje inválido." }, { status: 400 });

  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL || "claude-sonnet-5-5",
      max_tokens: 800,
      system: SYSTEM,
      messages: clean,
    }),
  });
  if (!r.ok) return Response.json({ error: "El profesor no pudo responder ahora (error " + r.status + ")." });
  const d = await r.json();
  return Response.json({ reply: d.content?.map((c) => c.text).join("") ?? "" });
}
