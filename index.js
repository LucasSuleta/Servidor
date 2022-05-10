const express = require('express');//requiero express

//Crear un servidor express
const app = express();

//directorio público
app.use( express.static('public') );

//inicialización de server
app.listen( 8080, ()=>{
    console.log(`Servidor corriendo en puerto 8080`);
});
