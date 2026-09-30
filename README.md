# 📒 Profesor de Contabilidad

App web para aprender contabilidad: lecciones, ejercicios con corrección y un chat con un profesor de IA.

- **Next.js** (App Router) → se despliega en **Vercel** sin configuración.
- Lecciones y ejercicios en `lib/lessons.js` (fácil de ampliar).
- Chat con IA en `app/api/tutor/route.js`: requiere `ANTHROPIC_API_KEY`.

## Desarrollo local
```
npm install
cp .env.example .env.local   # pon tu clave
npm run dev
```

## Desplegar en Vercel
1. En vercel.com → *Add New Project* → importa este repositorio.
2. En *Settings → Environment Variables* agrega `ANTHROPIC_API_KEY`.
3. Cada `git push` se despliega automáticamente.
