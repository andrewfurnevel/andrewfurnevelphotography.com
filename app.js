// 'use strict';

// import dotenv from 'dotenv';
// dotenv.config();

// Import modules
import express from 'express';
const app = express(); 

// import { absPath } from './_config.js';
import publicRoutes from './routes/publicRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

// Register View Engine
app.set('view engine', 'ejs');

app.listen(443, err => {
    if (err) {
        console.log("There was a problem", err);
        return;
    }
    console.log("Listening on port 443");
});

// Static Files
app.use(express.static('public'));

// Routes

// Handle Post Requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/admin", adminRoutes);
app.use("/", publicRoutes);

// 404 Page Not Found
app.use((req, res) => {
    res.status(404).render('./views/404', {title: 'Page Not Found'});
});









