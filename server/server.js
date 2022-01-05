//Creo instancia de express:
const path = require('path');
const express = require('express');
const app = express();

//Le digo a express que se sirva de la carpeta public y todo lo que tiene dentro
const publicPath = path.join(__dirname, '..', 'public');

// Dar de alta el servidor en el puerto 3000 (heroku va a asignar luego un puerto propio)
const port = process.env.PORT || 3000;app.use(express.static(publicPath));app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});app.listen(port, () => {
   console.log('Server is up!');
});
