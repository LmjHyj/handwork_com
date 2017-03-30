const router = require('koa-router')()

const index = require('../controller/web/index')
const sign = require('../controller/web/sign')
const ucenter = require('../controller/web/ucenter')

// 首页
router.get('/', index)

// sign controller
// 登录
router.get('signin', sign.signinPage)
router.post('signin', sign.signin)
// 注册
router.get('signup', sign.signupPage)
router.post('signup', sign.signup)
// 登出
// router.post('/signout',sign.signout)

// 用户中心
router.get('ucenter', ucenter)

export default router
