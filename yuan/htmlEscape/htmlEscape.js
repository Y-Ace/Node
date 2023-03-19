// 定义转义HTML字符串
function htmlEscape(html) {
    return html.replace(/<|>|"|&/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '"':
                return '&quot;'
        }
    });

};

// 定义将字符转换成HTML
function htmlUnescape(str) {
    return str.replace(/&gt;|&lt;|&amp;|&quot;/g, (match) => {
        switch (match) {
            case '&gt;':
                return '>';
            case '&lt;':
                return '<';
            case '&amp;':
                return '&';
            case '&quot;':
                return '"';
        }
    })
};
module.exports = {
    htmlEscape,
    htmlUnescape
}