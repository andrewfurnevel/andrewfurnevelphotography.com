'use strict';

// Envirnment Configeration ---------------------------------

const APP_URL = process.env.HOST;

const ENVIRONMENT = process.env.ENVIRONMENT;
const HOST = process.env.HOST;
const PORT = process.env.PORT;


// Absolute Path Configeration ------------------------------

const APP_ROOT =      process.env.APP_ROOT;

const absPath = {

    app_url:          `${APP_URL}`,
    routes:           `${APP_ROOT}/routes`,
    system:           `${APP_ROOT}/system`,

    // App
    models:           `${APP_ROOT}/app/models`,
    views:            `${APP_ROOT}/app/views`,
    controllers:      `${APP_ROOT}/app/controllers`,

    // Admin
    adminViews:       `${APP_ROOT}/admin/views`,
    adminModels:      `${APP_ROOT}/admin/models`,
    adminControllers: `${APP_ROOT}/admin/controllers`,

    // Public
    css:              `${APP_ROOT}/public/css`,
    js:               `${APP_ROOT}/public/js`,
    images:           `${APP_ROOT}/public/images`,
    uploads:          `${APP_ROOT}/public/uploads`
}

module.exports = {
    absPath
}
