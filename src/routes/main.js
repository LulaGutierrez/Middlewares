const router = require('express').Router();
const {index, ranas, gekos, cactus, admin, login} = require('../controllers/mainControllers')

const adminCheck = require('../middlewares/adminCheck')

router
    .get('/', index)
    .get('/ranas', ranas)
    .get('/gekos', gekos)
    .get('/cactus', cactus)
    .get('/admin', adminCheck, admin)
    .get('/login', login)

module.exports = router;