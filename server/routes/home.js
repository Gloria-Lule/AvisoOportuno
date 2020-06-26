const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Gloria Lule'
    });

})

module.exports = app;