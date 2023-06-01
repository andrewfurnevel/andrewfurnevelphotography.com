// app.js
// This is the entry point of the application
// "/" user requests are routed to publicRoutes 
// "/admin" requests are routed to adminRoutes

'use strict';

// Import modules
import dotenv from 'dotenv';
import express from 'express';
import publicRoutes from './routes/publicRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
dotenv.config();

// Register View Engine
app.set('view engine', 'ejs');

// Port Config
app.listen(process.env.PORT, err => {
    if (err) {
        console.log("There was a problem", err);
        return;
    }
    console.log(`Listening on port ${process.env.PORT}`);
});

// Static Files
app.use(express.static('public'));

// Handle Post Requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/admin", adminRoutes);
app.use("/", publicRoutes);

// 404 Page Not Found
app.use((req, res) => {
    res.status(404).render('./views/404', {title: 'Page Not Found'});
});









