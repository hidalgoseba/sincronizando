const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//archivos de rutas
const projectRoutes = require('./routes/projectRoutes');

//
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//cors

//rutas
app.use('/api', projectRoutes);
//exportar
module.exports = app;