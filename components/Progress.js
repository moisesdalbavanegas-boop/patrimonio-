"use client";
import { useEffect, useState } from "react";

export default function Progress({ id, total }) {
  const [s, setS] = useState(null);
  useEffect(() => {
    try { setS(JSON.parse(localStorage.getItem("progreso") || "{}")[id] ?? null); } catch {}
  }, [id]);
  if (s === null) return <span className="tag">Sin hacer</span>;
  return <span className={"tag" + (s === total ? " done" : "")}>{s}/{total} ✔</span>;
}
