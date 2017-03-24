const log4js = require('log4js')
const log_config = require('./config/log_config')

// 加载配置文件
log4js.configure(log_config)

const logUtil = {}

const errorLogger = log4js.getLogger('errorLogger')
const resLogger = log4js.getLogger('resLogger')
const reqLogger = log4js.getLogger('reqLogger')

// 封装错误日志
logUtil.logError = function (ctx, error, resTime) {
    if (ctx && error) {
        errorLogger.error(formatError(ctx, error, resTime))
    }
}

// 封装响应日志
logUtil.logResponse = function (ctx, resTime) {
    if (ctx) {
        resLogger.info(formatRes(ctx, resTime))
    }
}

// 封装请求日志
logUtil.logRequest = function (req, resTime) {
    if (req) {
        reqLogger.info(formatReq(req, resTime))
    }
}

// 格式化响应日志
const formatRes = function (ctx, resTime) {
    let logText = ''

    // 响应日志开始
    logText += '\n*************** response log start ***************\n'

    // 添加请求日志
    logText += formatLog(ctx.request, resTime)

    // 响应状态码
    logText += 'response status: ' + ctx.status + '\n'

    // 响应内容
    logText += 'response body: \n' + JSON.stringify(ctx.body) + '\n'

    // 响应日志结束
    logText += '*************** response log end ***************\n'

    return logText

}

// 格式化错误日志
const formatError = function (ctx, err, resTime) {
    let logText = ''

    // 错误信息开始
    logText += '\n*************** error log start ***************\n'

    // 添加请求日志
    logText += formatLog(ctx.request, resTime)

    // 错误名称
    logText += 'err name: ' + err.name + '\n'
    // 错误信息
    logText += 'err message: ' + err.message + '\n'
    // 错误详情
    logText += 'err stack: ' + err.stack + '\n'

    // 错误信息结束
    logText += '*************** error log end ***************\n'

    return logText
}

// 格式化请求日志
const formatReq = function (res, resTime) {
    let logText = ''

    // 请求日志开始
    logText += '\n*************** resquest log start ***************\n'

    //  添加请求日志
    logText += formatLog2(res.request, resTime)

    // 响应状态码
    logText += 'response status: ' + res.status + '\n'

    // 响应内容
    logText += 'response body: \n' + JSON.stringify(res.body) + '\n'

    // 请求日志结束
    logText += '*************** resquest log end ***************\n'

    return logText
}

// 格式化日志
const formatLog = function (req, resTime) {

    let logText = ''

    const method = req.method
    // 访问方法
    logText += 'request method: ' + method + '\n'

    // 请求原始地址
    logText += 'request originalUrl:  ' + req.originalUrl + '\n'

    // 客户端ip
    logText += 'request client ip:  ' + req.ip + '\n'

    // 请求参数
    if (method === 'GET') {
        logText += 'request query:  ' + JSON.stringify(req.query) + '\n'
        // startTime = req.query.requestStartTime
    } else {
        logText += 'request body: \n' + JSON.stringify(req.body) + '\n'
        // startTime = req.body.requestStartTime
    }
    // 服务器响应时间
    logText += 'response time: ' + resTime + '\n'

    return logText
}

// 格式化日志-for Req
const formatLog2 = function (req, resTime) {

    let logText = ''

    const method = req.method
    // 访问方法
    logText += 'request method: ' + method + '\n'

    // 请求原始地址
    logText += 'request originalUrl:  ' + req.url + '\n'

    // 客户端ip
    logText += 'request client ip:   node server\n'

    // 请求参数
    if (method === 'GET') {
        logText += 'request query:  ' + JSON.stringify(req.qs) + '\n'
        // startTime = req.query.requestStartTime
    } else {
        logText += 'request body:\n' + JSON.stringify(req.body) + '\n'
        // startTime = req.body.requestStartTime
    }
    // 服务器响应时间
    logText += 'response time: ' + resTime + '\n'

    return logText
}


module.exports = logUtil
