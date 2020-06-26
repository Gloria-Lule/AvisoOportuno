require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


//set views file
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.resolve(__dirname, '../views/partials'));
//set view engine
app.set('view engine', 'hbs');



// //habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));


// //Configuracion global de rutas
app.use(require('./routes'));

mongoose
    .connect(process.env.URLDB, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log('base de datos ONLINE'))
    .catch(err => console.log('No se pudo conectar', err));


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
})