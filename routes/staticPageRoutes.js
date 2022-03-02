const express = require('express');

const router  = express.Router();

// router.use((req, res, next) => {
//     console.log('New Request Made:');
//     console.log('Host:', req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method:', req.method);
//     next();
// });


router.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

router.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

router.get('/work', (req, res) => {
    res.render('work', {title: 'Work'});
});


module.exports = router;