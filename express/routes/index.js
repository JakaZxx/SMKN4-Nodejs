const express = require ('express');
const router =  express.Router();

const { getAll, create } = require('../controllers/controllers');
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/getAll', getAll);
router.post('/create', create);

module.exports = router;