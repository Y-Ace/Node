const qs = require('querystring')

const mybody = (req, res, next) => {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
    req.on('end', () => {
        req.body = qs.parse(str)
        next()
    })
}

module.exports = mybody