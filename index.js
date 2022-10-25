const express = require('express');
const cors = require("cors");
const path = require("path");

const { conectarDB } = require("./config/db");
require("dotenv").config();

//Creamos el servidor
const app = express();

//Conectamos a la DB
conectarDB();

//Directorio publico
app.use( express.static("public") );

app.use(cors())

//Lectura y pareseo del body
app.use( express.json() );

//Rutas
app.use( "/api/productos", require("./routes/productos") );
app.use( "/api/usuarios", require("./routes/usuarios") );

//Manejar demas rutas
app.get( "*", ( req, res ) => {
    res.sendFile( path.resolve( __dirname, "public/index.html" ) );
});


app.listen(process.env.PORT, () => {
    console.log(`El servidor esta corriendo perfectamente en el puerto ${process.env.PORT}`);
});