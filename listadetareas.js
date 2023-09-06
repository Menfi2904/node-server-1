let readlineSync = require("readline-sync");

let listaTareas = [];

function agregarTarea() {
  let indicador = readlineSync.question("ingresa el indicador de la tarea: ");
  let descripcion = readlineSync.question(
    "Ingresa la descripcion de la tarea: "
  );

  listaTareas.push({
    indicador,
    descripcion,
    completada: false,
  });
  console.log("┌───────────────────────────┐");
  console.log("│Tarea Agregada Exitosamente│");
  console.log("└───────────────────────────┘");
}

function eliminarTarea() {
  let indice = readlineSync.question(
    "Ingresa el indice de la tarea a eliminar: "
  );
  if (indice >= 0 && indice < listaTareas.length) {
    listaTareas.splice(indice, 1);
    console.log("┌─────────────────────┐");
    console.log("│  Tarea Eliminada    │");
    console.log("└─────────────────────┘");
  } else {
    console.log(" Indice no encontrado ");
  }
}
function completarTarea() {
  let indice = readlineSync.question(
    "ingrese el indice de la tarea a completar: "
  );
  if (indice >= 0 && indice < listaTareas.length) {
    listaTareas[indice].completada = true;
    console.log("┌─────────────────────────────┐");
    console.log("│Tarea Completada Exitosamente│");
    console.log("└─────────────────────────────┘");
  } else {
    console.log(" Indice no encontrado ");
  }
}

function mostrarListaDeTareas() {
  console.log("listaTareas: ");
  listaTareas.forEach((tarea, indice) => {
    const estado = tarea.completada ? "[Completada: ✔]" : "Pendiente: ";
    console.log(
      `Indice de tarea: ${indice} - Estado: ${estado} - indicador: ${tarea.indicador} - Descripcion de Tarea: ${tarea.descripcion}`
    );
  });
}

function IniciarMenuTarea() {
  while (true) {
    console.log("╔═══════════════════════════════╗");
    console.log("║                               ║");
    console.log("║      ─ Menu de Tareas ─       ║");
    console.log("║                               ║");
    console.log("║   1. Agregar una Tarea        ║");
    console.log("║   2. Eliminar una Tarea       ║");
    console.log("║   3. Completar una Tarea      ║");
    console.log("║   4. Mostrar lista de Tareas  ║");
    console.log("║   5. Salir del Menu           ║");
    console.log("║                               ║");
    console.log("║                               ║");
    console.log("╚═══════════════════════════════╝");

    const option = readlineSync.question("Ingresa una opcion: ");

    switch (option) {
      case "1":
        agregarTarea();
        break;
      case "2":
        eliminarTarea();
        break;
      case "3":
        completarTarea();
        break;
      case "4":
        mostrarListaDeTareas();
        break;
      case "5":
        return;
      default:
        console.log("opcion invalida");
    }
  }
}

IniciarMenuTarea();