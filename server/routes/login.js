const express = require('express');
const app = express();

app.get('/login', (req, res) => {

    res.render('login', {
        nombre: 'Gloria Lule'
    });

})

module.exports = app;