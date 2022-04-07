'use strict';

// const express = require('express');
const config = require(`${process.env.PWD}/_config.js`);


// const model = require(`${config.absPath.models}/testModelclass.js`);

const login = (req, res) => {
    res.render(`${config.absPath.views}.login`);


}


const logout = () => {}

module.exports = { 
    login,
    logout
}