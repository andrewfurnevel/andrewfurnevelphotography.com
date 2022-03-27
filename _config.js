'use strict';

const {ENVIRONMENT, HOST, PORT} = process.env;

// const path = require('path');

const BASEPATH =      process.env.PWD;

const absPath = {
    BASEPATH:       BASEPATH,
    classes:        `${BASEPATH}/classes`,
    models:         `${BASEPATH}/models`,
    views:          `${BASEPATH}/views`,
    controllers:    `${BASEPATH}/controllers`,
    routes:         `${BASEPATH}/routes`,
    images:         `${BASEPATH}/public/images`
}

exports.absPath = absPath;



// Database Configuration ------------------------------------

const db = {
    'host' : 'localhost',
    'port' : 5432,
    'username' : 'postgres',
    'password' : '77123',
    'database' : 'andrewfurnevel'
}

exports.db = db;

