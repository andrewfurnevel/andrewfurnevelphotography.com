'use strict';

const express = require('express');
const config = require(`${process.env.PWD}/_config`);


const index = (req, res) => {
    const data = require(`${config.absPath.models}/indexModel`);
    // console.log(data.indexModel.title);
    // console.log(data.getIndexTitle());
    // console.log(getIndexTitle);
     res.render('index', {title: `${data.getIndexTitle()}`});
};

// const home = (req, res) => {
//     console.log('home funciton called!');
//     res.render('index', {title: 'Home Page'});
// };

const about = (req, res) => {
    // console.log('Inside About');
    res.render('about', {title: 'About Page'});
};

const work = (req, res) => {
    // console.log('Inside Work');
    res.render('work', {title: 'Work Page'});
};

const contact = (req, res) => {
    // console.log('Inside Contact');
    res.render('contact', {title: 'Contact Page'});
};


module.exports = {
    index, 
    // home, 
    about, 
    work,
    contact
};