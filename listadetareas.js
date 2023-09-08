const listaTareas = [
  {
    indicador: "tarea1",
    descripcionDeTarea: "hacer tarea de matematicas",
    tareaCompletada: false,
  },
  {
    indicador: "tarea2",
    descripcionDeTarea: "hacer tarea de programacion",
    tareaCompletada: false,
  },
  {
    indicador: "tarea3",
    descripcionDeTarea: "Ir a comprar al supermercado",
    tareaCompletada: false,
  },
];


async function crearNuevaTarea(indicador, descripcionTarea) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const agregarNuevaTarea = {
        indicador: indicador,
        descripcionDeTarea: descripcionTarea,
        tareaCompletada: false,
      };
      listaTareas.push(agregarNuevaTarea);
      resolve(agregarNuevaTarea);
    }, 1000);
  });
}


async function tareaCompletada(indicadortarea) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tarea = listaTareas.find(
        (tarea) => tarea.indicador === indicadortarea
      );
      if (!tarea) {
        reject(new Error("tarea no encontrada"));
      } else {
        tarea.tareaCompletada = true;
        resolve(tarea);
      }
    }, 3000);
  });
}


async function borrarTareas(indicadorTarea) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tareaIndex = listaTareas.findIndex(
        (tareas) => tareas.indicador === indicadorTarea
      );
      if (tareaIndex === -1) {
        reject(new Error("tarea no encontrada"));
      } else {
        const borrarTarea = listaTareas.splice(tareaIndex, 1)[0];
        resolve(borrarTarea);
      }
    }, 5000);
  });
}

async function guardarListaDeTareas() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 7000));
    console.log(`la lista de tareas se guardo con los siguientes datos ⮕`);
    console.log(listaTareas);
  } catch (error) {
    console.log(`${error} no se puedo guardar la lista`);
  }
}

crearNuevaTarea("tarea4", "Hacer la tarea de física").then((nuevaTarea) => {
  console.log("Nueva tarea creada:", nuevaTarea);
  return tareaCompletada(nuevaTarea.indicador);
});
tareaCompletada("tarea4").then((estado) => {
  console.log("Tarea completada:", estado);
  return tareaCompletada.indicador;
});
borrarTareas("tarea1")
  .then((tareaEliminada) => {
    console.log("Tarea eliminada:", tareaEliminada);
  })
  .catch((error) => {
    console.error("Error:", error);
  });



guardarListaDeTareas();
