const http = require("http");

const tareas = [
  {
    id: 1,
    descripcion: "hacer compras",
    completada: true,
  },
  {
    id: 2,
    descripcion: "hacer tarea de fisica",
    completada: true,
  },
  {
    id: 3,
    descripcion: "hacer tarea de estadistica",
    pendiente: false,
  },
];

const puerto = 3000;
const host = "localhost";

let server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/listadetareas") {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(tareas));
  } else {
    req.statusCode = 404;
    res.end = "url no encontrada";
  }
});

server.listen(puerto, host, () => {
  console.log(
    `el servidor arranco adecuadamente http://localhost:${puerto}/listadetareas`
  );
});