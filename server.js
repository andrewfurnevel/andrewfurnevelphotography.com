'use strict';
const express = require('express');
const app = express(); 

const staticPageRoutes =  require('./routes/staticPageRoutes');
// const _ = require('lodash'); // Utility Module

// Register View Engine
app.set('view engine', 'ejs');

app.listen(3000, err => {
    if (err) {
        consolelog("There was a problem", err);
        return;
    }
    console.log("Listening on port 3000");
});

// Static Files
app.use(express.static('public'));

// staticPageRoutes
app.use(staticPageRoutes);

// 404 Page Not Found
app.use((req, res) => {
    res.status(404).render('404', {title: 'Page Not Found'});
});

