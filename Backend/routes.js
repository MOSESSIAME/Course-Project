const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/api/contact', (req, res) => {
    // console.log('working')
    const { name, email, message } = req.body;
    db.run('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)', [name, email, message], function(err) {
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json({ message: 'Message received successfully' });
    });
});


router.get('/api/contact', (req, res) => {
    // console.log('working')
    //const { name, email, message } = req.body;
    db.all('select * from messages', [], function(err, rows) {
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json({ message: rows });
    });
});
module.exports = router;
