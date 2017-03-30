const User = require('../../model/index').User

// 登录页面
const signinPage = async function (ctx, next) {
    await ctx.render('signin', {
        title: '登录页面',
    })
}
// 登录请求
const signin = async (ctx, next) => {
    console.log('signin')
}
// 注册页面
const signupPage = async(ctx, next) => {
    await ctx.render('signup', {
        title: '注册页面',
    })
}
// 注册请求
const signup = async(ctx, next) => {
    console.log('up', ctx.request.body)
    const name = ctx.request.body.name
    const pw = ctx.request.body.password
    console.log(name, pw)
    if (!name || !pw) {
        return ctx.send({
            success: false,
            msg: '不完整'
        })
    } else {
        const newUser = new User({
            name: name,
            password: pw,
        })
        newUser.save((err) => {
            if (err) {
                console.log(err)
                return ctx.send({
                    success: false,
                    msg: err,
                })
            }
            ctx.send({
                success: true,
                msg: 'ok',
            })
        })
    }
}


exports.signin = signin
exports.signinPage = signinPage
exports.signup = signup
exports.signupPage = signupPage
