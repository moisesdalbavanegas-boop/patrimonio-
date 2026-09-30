// Convierte **negrita** en <strong>
export default function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
    p.startsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong> : p
  );
}
