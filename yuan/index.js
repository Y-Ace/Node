const fromat = require('./dataFromat/dataFromat')
const escape = require('./htmlEscape/htmlEscape')
const mybody = require('./模块化自定义的中间件')

module.exports = {
    ...fromat,
    ...escape,
    mybody
}