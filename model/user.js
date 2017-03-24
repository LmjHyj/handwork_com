const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// Schema模型
const UserSchema = new mongoose.Schema({
    userid: String,
    password: String
})

UserSchema.pre('save', (next) => {
    const now = new Date()
    this.update_at = now
    next()
})

UserSchema.methods.comparePassword = function (pw, cb) {
    bcrypt.compare(pw, this.password, (err, isMatch) => {
        if (err) {
            return cb(err)
        }
        cb(null, isMatch)
    })
}

mongoose.model('User', UserSchema)
