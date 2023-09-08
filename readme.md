¿Qué sucedio al usar async y await?
al usar async, debe llevar la palabra reservada await, porque de esta manera le estamos 
diciendo a la funcion que espere a que esta termine para poder continuar con la siguiente tarea.
lo cual es muy necesario sobre todo en bases de datos con mucha informacion, y de esta manera se garantiza que vamos a obtener toda la informacion necesaria.


¿Qué sucedio al usar el método then()?
al usar el metodo then, manejamos el resultado de las promesas, lo que garantiza que esta se va a ejecutar cuando la promesa se cumpla. es decir cuando se le haga el llamado de vuelta. (callback).
El metodo .then nos indica que el codigo esta bien, y el .catch nos ayuda a manejar los errores.



¿Qué diferencias encontraste entre async, await y el método then()?
async, await es una manera de poder obtener un codigo mas legible y estructurado, y ayuda mucho
cuando estamos tratando con base de datos muy grandes.

then hay que hacer varios llamados para obtener la informacion, lo cual es util si solo estamos haciendo pocas funciones, y no estamos tratando con tareas que requieran mucho codigo.