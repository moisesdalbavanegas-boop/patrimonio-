"use client";
import { useState } from "react";

export default function Quiz({ lessonId, ejercicios }) {
  const [resp, setResp] = useState({});
  const [done, setDone] = useState(false);
  const score = ejercicios.filter((e, i) => resp[i] === e.correcta).length;

  function finish() {
    setDone(true);
    try {
      const p = JSON.parse(localStorage.getItem("progreso") || "{}");
      p[lessonId] = Math.max(p[lessonId] ?? 0, score);
      localStorage.setItem("progreso", JSON.stringify(p));
    } catch {}
  }

  return (
    <div>
      {ejercicios.map((e, i) => (
        <div className="card" key={i}>
          <p><strong>{i + 1}. {e.pregunta}</strong></p>
          {e.opciones.map((o, j) => {
            const chosen = resp[i] === j;
            let cls = "opt";
            if (chosen) cls += " chosen";
            if (done && j === e.correcta) cls += " ok";
            if (done && chosen && j !== e.correcta) cls += " bad";
            return (
              <button key={j} className={cls} disabled={done}
                onClick={() => setResp({ ...resp, [i]: j })}>{o}</button>
            );
          })}
          {done && <p className="expl">💡 {e.explicacion}</p>}
        </div>
      ))}
      {!done ? (
        <button className="btn" onClick={finish}
          disabled={Object.keys(resp).length < ejercicios.length}>Corregir</button>
      ) : (
        <p className="score">Resultado: {score} de {ejercicios.length} {score === ejercicios.length ? "🎉" : "— repasa las explicaciones y reintenta"}</p>
      )}
      {done && <button className="btn sec" onClick={() => { setResp({}); setDone(false); }}>Reintentar</button>}
    </div>
  );
}
