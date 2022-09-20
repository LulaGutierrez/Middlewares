module.exports = {
    index : (req, res) => {
        return res.render('index')
    },
    ranas :(req, res) => {
        return res.render('ranas')
    },
    gekos : (req, res) => {
        return res.render('gekos')
    },
    cactus : (req, res) => {
        return res.render('cactus')
    },
    admin : (req, res) => {
        return res.render('admin',{
            user: req.query.user
        })
    },
    login : (req, res) => {
        return res.render('login', {
            msg : req.query.error ? 'No tienes el acceso para ingresar' : null
        })
    }
}