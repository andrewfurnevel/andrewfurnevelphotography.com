'use strict';

const express = require('express');
const config = require(`${process.env.PWD}/_config`);


const index = (req, res) => {
    const data = require(`${config.absPath.models}/indexModel`);

     res.render(`${config.absPath.views}/index`, {title: `${data.getIndexTitle()}`});
};

// const home = (req, res) => {
//     console.log('home funciton called!');
//     res.render('index', {title: 'Home Page'});
// };

const about = (req, res) => {
    // console.log('Inside About');
    res.render(`${config.absPath.views}/about`, {title: 'About Page'});
};

const work = (req, res) => {
    // console.log('Inside Work');
    res.render(`${config.absPath.views}/work`, {title: 'Work Page'});
};

const contact = (req, res) => {
    // console.log('Inside Contact');
    res.render(`${config.absPath.views}/contact`, {title: 'Contact Page'});
};


module.exports = {
    index, 
    // home, 
    about, 
    work,
    contact
};