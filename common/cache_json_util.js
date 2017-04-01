const md5 = require('md5')
const fs = require('fs')

const cache_path = process.cwd() + '/cache/json/'
/**
 * 通过接口url的md5值来缓存json文件，读取时转成json返回
 * @param {*} url 接口url
 * @param {*} json 接口返回的json
 */
// 设置缓存
const set = (url, json) => {
    const path = cache_path + md5(url) + '.json'
    json = JSON.stringify(json)
    fs.writeFile(path, json, (err, written, buffer) => {})
}
// 获取缓存
const get = (url) => {
    const path = cache_path + md5(url) + '.json'
    if (fs.existsSync(path)) {
        const fd = fs.readFileSync(path, 'utf-8')
        return JSON.parse(fd)
    } else {
        console.log('erro cache file is not exist for ' + url)
        return
    }
}

exports.set = set
exports.get = get
