function dateFormat(dateStr) {
    let date = new Date(dateStr)
    let y = padZero(date.getFullYear())
    let m = padZero(date.getMonth() + 1)
    let d = padZero(date.getDate())
    let hh = padZero(date.getHours())
    let mm = padZero(date.getMinutes())
    let ss = padZero(date.getSeconds())
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n) {
    return n > 9 ? n : '0' + n
}

module.exports = {
    dateFormat
}