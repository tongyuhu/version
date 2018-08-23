let fun = require('./util.js');
h2 = fun.h2;
example = fun.example;

h2('属性的简洁表示法');
example();
const foo = 'bar';
console.log({foo});
console.log({foo:foo});

function f(x, y) {
    return {x,y};
}
function f2(x,y) {
    return {x:x,y:y};
}

console.log(f2(1,2));
example();
h2('方法的重写');

const o = {

    method(){
        return 'hello';
    }
};

const oo = {
    method:function () {
        return 'hello';
    }
}
