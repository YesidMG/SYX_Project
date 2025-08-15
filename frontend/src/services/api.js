export async function getQuejas() {
  //const res = await fetch('/api/quejas')
  //return res.json()

  // Simula un pequeño retraso de red
  await new Promise(res => setTimeout(res, 500));

  // Datos simulados
  return [
    { texto: "Demora en respuesta de la Alcaldía de Tunja" },
    { texto: "Problemas con trámite en línea en la Gobernación de Boyacá" },
    { texto: "Falta de atención en la ventanilla única" }
  ];
}
