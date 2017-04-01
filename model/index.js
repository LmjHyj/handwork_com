const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/handwork', { server: { poolSize: 20 } }, (err) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
})

require('./user')

exports.User = mongoose.model('User')
