export const lessons = [
  {
    id: "patrimonio",
    titulo: "El patrimonio y la ecuación contable",
    resumen: "Qué tienes, qué debes y qué es realmente tuyo.",
    contenido: [
      "El **patrimonio** es el conjunto de bienes, derechos y obligaciones de una persona o empresa.",
      "Se divide en tres grupos: **Activo** (lo que tienes: dinero, inventario, equipos), **Pasivo** (lo que debes: préstamos, proveedores) y **Patrimonio Neto** (lo que realmente es tuyo).",
      "La ecuación fundamental: **Activo = Pasivo + Patrimonio Neto**. Siempre debe cuadrar.",
      "Ejemplo: compras un auto de 10.000 pagando 4.000 de tu bolsillo y pidiendo 6.000 prestados. Activo = 10.000; Pasivo = 6.000; Patrimonio Neto = 4.000.",
    ],
    ejercicios: [
      {
        pregunta: "Una empresa tiene Activo de 50.000 y Pasivo de 20.000. ¿Cuál es su Patrimonio Neto?",
        opciones: ["70.000", "30.000", "20.000", "50.000"],
        correcta: 1,
        explicacion: "Patrimonio Neto = Activo − Pasivo = 50.000 − 20.000 = 30.000.",
      },
      {
        pregunta: "¿Cuál de estos es un PASIVO?",
        opciones: ["Dinero en caja", "Un préstamo bancario por pagar", "Un computador", "Mercadería en bodega"],
        correcta: 1,
        explicacion: "Un préstamo es una obligación (lo que debes), por eso es Pasivo. Los demás son cosas que posees (Activo).",
      },
      {
        pregunta: "La ecuación contable básica es:",
        opciones: ["Activo = Pasivo − Patrimonio", "Pasivo = Activo + Patrimonio", "Activo = Pasivo + Patrimonio Neto", "Patrimonio = Activo + Pasivo"],
        correcta: 2,
        explicacion: "Todo lo que tienes (Activo) está financiado por lo que debes (Pasivo) o por lo que es tuyo (Patrimonio Neto).",
      },
    ],
  },
  {
    id: "cuentas",
    titulo: "Las cuentas y la partida doble",
    resumen: "Debe, Haber y por qué todo siempre cuadra.",
    contenido: [
      "Una **cuenta** es un registro donde anotamos los aumentos y disminuciones de un elemento (por ejemplo, Caja o Bancos).",
      "Cada cuenta tiene dos lados: **Debe** (izquierda) y **Haber** (derecha).",
      "**Partida doble**: cada operación afecta al menos dos cuentas, y el total del Debe siempre es igual al total del Haber.",
      "Reglas prácticas: el **Activo** aumenta en el Debe y disminuye en el Haber. El **Pasivo** y el **Patrimonio Neto** aumentan en el Haber y disminuyen en el Debe.",
      "Ejemplo: compras mercadería por 1.000 al contado. Debe: Mercadería 1.000 (sube un activo). Haber: Caja 1.000 (baja otro activo).",
    ],
    ejercicios: [
      {
        pregunta: "Recibes un préstamo de 5.000 en tu cuenta bancaria. ¿Cómo se registra?",
        opciones: [
          "Debe: Préstamos por pagar / Haber: Bancos",
          "Debe: Bancos / Haber: Préstamos por pagar",
          "Debe: Bancos / Haber: Bancos",
          "Debe: Capital / Haber: Bancos",
        ],
        correcta: 1,
        explicacion: "Bancos (Activo) aumenta → Debe. Préstamos por pagar (Pasivo) aumenta → Haber.",
      },
      {
        pregunta: "Un Activo disminuye cuando se anota en:",
        opciones: ["El Debe", "El Haber", "Ambos lados", "Ninguno"],
        correcta: 1,
        explicacion: "Los activos aumentan en el Debe y disminuyen en el Haber.",
      },
      {
        pregunta: "En la partida doble, el total del Debe debe ser:",
        opciones: ["Mayor que el Haber", "Menor que el Haber", "Igual al Haber", "Da igual"],
        correcta: 2,
        explicacion: "Si no son iguales, hay un error en el registro.",
      },
    ],
  },
  {
    id: "diario",
    titulo: "El libro diario",
    resumen: "Cómo registrar operaciones paso a paso.",
    contenido: [
      "El **libro diario** registra las operaciones en orden cronológico. Cada anotación se llama **asiento**.",
      "Un asiento tiene: fecha, cuentas que se debitan (Debe), cuentas que se acreditan (Haber), importes y una breve glosa (descripción).",
      "Pasos para hacer un asiento: 1) Identifica qué cuentas se afectan. 2) Clasifícalas (Activo, Pasivo, Patrimonio, Ingreso, Gasto). 3) Decide si suben o bajan. 4) Aplica la regla Debe/Haber. 5) Verifica que Debe = Haber.",
      "Ejemplo: pagas el arriendo de 800 en efectivo. Gasto por arriendo (Debe 800) y Caja (Haber 800).",
    ],
    ejercicios: [
      {
        pregunta: "Vendes mercadería al contado por 2.000. ¿Qué se registra?",
        opciones: [
          "Debe: Ventas / Haber: Caja",
          "Debe: Caja / Haber: Ventas",
          "Debe: Caja / Haber: Caja",
          "Debe: Ventas / Haber: Ventas",
        ],
        correcta: 1,
        explicacion: "Entra dinero: Caja (Activo) sube → Debe. La Venta es un ingreso, que aumenta en el Haber.",
      },
      {
        pregunta: "Pagas sueldos por 1.500 en efectivo. ¿Qué cuenta va en el Debe?",
        opciones: ["Caja", "Gasto en sueldos", "Sueldos por pagar", "Capital"],
        correcta: 1,
        explicacion: "Los gastos aumentan en el Debe. Caja baja, por eso va en el Haber.",
      },
      {
        pregunta: "Los asientos del libro diario se ordenan:",
        opciones: ["Por importe", "Alfabéticamente", "Cronológicamente", "Por tipo de cuenta"],
        correcta: 2,
        explicacion: "El diario registra las operaciones en el orden en que ocurren.",
      },
    ],
  },
  {
    id: "estados",
    titulo: "Balance y estado de resultados",
    resumen: "Los dos informes básicos para entender un negocio.",
    contenido: [
      "El **Balance General** es una foto en una fecha: muestra Activo, Pasivo y Patrimonio Neto.",
      "El **Estado de Resultados** es una película de un período: muestra Ingresos − Gastos = Utilidad (o Pérdida).",
      "La utilidad del período aumenta el Patrimonio Neto; una pérdida lo disminuye.",
      "Ejemplo: en el mes vendiste 10.000 y tuviste gastos por 7.500. Utilidad = 2.500.",
    ],
    ejercicios: [
      {
        pregunta: "Ingresos de 12.000 y gastos de 9.000. ¿Cuál es el resultado?",
        opciones: ["Pérdida de 3.000", "Utilidad de 3.000", "Utilidad de 21.000", "Utilidad de 9.000"],
        correcta: 1,
        explicacion: "Utilidad = Ingresos − Gastos = 12.000 − 9.000 = 3.000.",
      },
      {
        pregunta: "¿Qué informe muestra la situación del negocio en una fecha concreta?",
        opciones: ["Estado de Resultados", "Libro diario", "Balance General", "Flujo de caja"],
        correcta: 2,
        explicacion: "El Balance es como una fotografía a una fecha determinada.",
      },
      {
        pregunta: "Si la empresa tiene pérdida en el período, el Patrimonio Neto:",
        opciones: ["Aumenta", "Disminuye", "No cambia", "Se convierte en Pasivo"],
        correcta: 1,
        explicacion: "Las pérdidas reducen lo que realmente es de los dueños.",
      },
    ],
  },
];

export const getLesson = (id) => lessons.find((l) => l.id === id);
