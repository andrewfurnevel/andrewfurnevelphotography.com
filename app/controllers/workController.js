'use strict';

const express = require('express');
const config = require(`${process.env.PWD}/_config.js`);

const work = (req, res) => {
 
    let data = require(`${config.absPath.models}/workModel`);

    
    // res.render('work', {title: 'Work Page'});

    // Get the page title from the model (database).

    // console.log(data.getWorkTitle());
    res.render(`${config.absPath.views}/work`, {title: `${data.getWorkTitle()}`});
};

exports.work = work;
