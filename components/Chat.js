"use client";
import { useState, useRef, useEffect } from "react";

export default function Chat() {
  const [msgs, setMsgs] = useState([
    { role: "assistant", content: "¡Hola! Soy tu profesor de contabilidad. Pregúntame lo que quieras o pídeme un ejercicio para practicar." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const end = useRef(null);
  useEffect(() => { end.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  async function send(e) {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const next = [...msgs, { role: "user", content: input.trim() }];
    setMsgs(next); setInput(""); setLoading(true);
    try {
      const r = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const d = await r.json();
      setMsgs([...next, { role: "assistant", content: d.reply || d.error || "Error inesperado." }]);
    } catch {
      setMsgs([...next, { role: "assistant", content: "No pude conectar. Intenta de nuevo." }]);
    }
    setLoading(false);
  }

  return (
    <div>
      <div className="chat">
        {msgs.map((m, i) => <div key={i} className={"msg " + m.role}>{m.content}</div>)}
        {loading && <div className="msg assistant">Pensando…</div>}
        <div ref={end} />
      </div>
      <form className="row" onSubmit={send}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribe tu pregunta…" />
        <button className="btn" disabled={loading}>Enviar</button>
      </form>
    </div>
  );
}
