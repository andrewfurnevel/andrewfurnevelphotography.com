'use strict';

const {ENVIRONMENT, HOST, PORT} = process.env;

const BASEPATH =      process.env.PWD;

const absPath = {
    // BASEPATH:         BASEPATH,
    routes:           `${BASEPATH}/routes`,
    classes:          `${BASEPATH}/classes`,

    // App
    models:           `${BASEPATH}/app/models`,
    views:            `${BASEPATH}/app/views`,
    controllers:      `${BASEPATH}/app/controllers`,

    // Admin
    adminViews:       `${BASEPATH}/admin/views`,
    adminModels:      `${BASEPATH}/admin/models`,
    adminControllers: `${BASEPATH}/admin/controllers`,

    // Public
    css:              `${BASEPATH}/public/css`,
    js:               `${BASEPATH}/public/js`,
    images:           `${BASEPATH}/public/images`,
    uploads:          `${BASEPATH}/public/uploads`
}

// Database Configuration ------------------------------------

const dbCredentials = {
    'host' : 'localhost',
    'port' : 5432,
    'username' : 'postgres',
    'password' : '77123',
    'database' : 'andrewfurnevel'
}

module.exports = {
    absPath,
    dbCredentials
}
