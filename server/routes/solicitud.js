const express = require('express');
const app = express();

app.get('/solicitud', (req, res) => {

    res.render('solicitud', {
        nombre: 'Gloria Lule'
    });


});

app.get('/lineamientos', (req, res) => {

    res.render('lineamientos', {
        nombre: 'Gloria Lule'
    });


});

module.exports = app;