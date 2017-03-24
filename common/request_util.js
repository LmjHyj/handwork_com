const superagent = require('superagent')
const async = require('async')
const logUtil = require('./log_util')
const cache = require('./cache_json_util')

const get = async(ctx, apiList, option) => {
    let header = {
        'Host': 'api.aixifan.com',
        'Content-Type': 'application/json;charset=UTF-8'
    }

    if (option) {console.log(option)}

    if (Object.prototype.toString.call(apiList) !== '[object Array]') {
        logUtil.logError('ajax.get argv[0] must be an Array!')
    }
    return new Promise((resolve, reject) => {
        async.mapLimit(apiList, 20, (url, callback) => {
            let start = new Date()
            return new Promise((resolve, reject) => {
                superagent.get(url).set(header).end((error, res) => {
                    const ms = new Date() - start
                    const errorHandler = (error) => {
                        if (error) {
                            logUtil.logError(ctx, error, 1111)
                        }
                        let result = cache.get(url)
                        if (!result) {
                            return callback('cache file is empty for ' + url)
                        }
                        return callback(null, result.vdata)
                    }
                    if (res) {
                        if (error) {
                            return errorHandler(error)
                        }
                        logUtil.logRequest(res, ms)
                        if (res.body.errorid === 0) {
                            callback(null, res.body.vdata)
                            cache.set(url, res.body)
                        } else {
                            errorHandler()
                        }
                    } else {
                        errorHandler()
                    }
                })
            })
        }, (error, result) => {
            if (error) {
                logUtil.logError(ctx, error)
            }
            if (result) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

exports.get = get
