const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/demo1', { server: { poolSize: 20 } }, (err) => {
    if (err) {
        process.exit(1)
    }
})

require('./user')

exports.User = mongoose.model('User')
