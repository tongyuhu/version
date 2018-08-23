function h1(str) {
    console.log('#',str);
}
function h2(str) {
    console.log('##',str);
}
function example() {
    console.log('*示例*');
}

module.exports = {
    example,
    h1,
    h2
}