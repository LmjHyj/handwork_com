const User = require('../../model/index').User

// 登录页面
const signinPage = async function (ctx, next) {
    console.log('render signin')
    await ctx.render('signin', {
        title: '登录页面'
    })
}
// 登录请求
const signin = async (ctx, next) => {
    console.log('signin')
}
// 注册页面
const signupPage = async(ctx, next) => {
    await ctx.render('signupPage', {
        title: '注册页面'
    })
}
// 注册请求
const signup = async(ctx, next) => {
    const name = ctx.body.name
    const pw = ctx.body.password
    if (!name || !pw) {
        ctx.send({
            success: false,
            msg: '没'
        })
    } else {
        const newUser = new User({
            name: name,
            password: pw
        })
        newUser.save((err) => {
            if (err) {
                return ctx.send({
                    success: false,
                    msg: 'fail'
                })
            }
            ctx.send({
                success: true,
                msg: 'ok'
            })
        })
    }
}


exports.signin = signin
exports.signinPage = signinPage
exports.signup = signup
exports.signupPage = signupPage
