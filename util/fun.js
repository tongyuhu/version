
/*
*1、函数参数的默认值
* ES5 是不能使用函数的默认值的。
* ES6 允许使用。
* 参数默认值必须是尾参数。
*
* */
h1('1、函数参数的默认值');
example();
function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

const p = new Point();

console.log(p);

/*函数参数默认值是惰性求值的
*
* */
h2('函数参数默认值是惰性求值的');
example();
let x = 99;
function foo(p = x + 1) {
    console.log(p);
}

foo();
x = 100;
foo();

/*与解耦赋值默认值结合使用
* */

h2('与解耦赋值默认值结合使用');
example();
function foo1({x, y = 5}={}) {
    console.log(x, y);
}
foo1({});
foo1({x:1});
foo1({x:1,y:2});
foo1();//解耦赋值和函数默认值的结合



example();

function fetch(url,{body='',method='GET',headers={}}={}) {
    console.log(method);
}

fetch('http://baidu.com',{});
fetch('http://www.baidu.com');


/*函数的长度length
* 默认值参数个数将被忽略
* */
example();
foo2 = function(x,y,z=0) {

};
console.log(foo2.length);

/*
* 作用域，参数内部一旦有了计算，也就有了独立的作用域，初始化完成后，作用域消失。
*
* */



/*2、rest参数
*形式为 ...values
* 可以代替arguments对象。
* rest参数必须是最后一个参数。
* 函数的length属性不包括rest参数。
*
* */
h1('2、rest参数');
example();

function add(...values) {
    let sum = 0;
    for (let val of values){
        sum+=val;
    }
    return sum;
}

console.log(add(1,2,3,4));


example();
const sortNumbers = (...values)=>values.sort();
console.log(sortNumbers(1,2,5,3,9,8,7));

example();

function pushs(array,...items) {
    items.forEach(item=> {
        array.push(item);
        console.log(item);
    });
}

var a = [];
pushs(a,1,2,3,4);
console.log(a);





/*
* 3、严格模式
* ES6规定：只要是函数参数包含默认值、解耦赋值、或者扩展运算符，那么内部就不能显示设定为严格模式。
* */

example();
function doSomething(...values) {
    // 'use strict';//会报错SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
    console.log(values);
}

doSomething(1,2,3);


/*4、name属性
*ES5返回具名函数的名字，匿名函数返回空字符串
* ES6返回实际的函数名。
*
* */


example();
let nameFunc = function () {

};
console.log(nameFunc.name);

console.log((new Function).name);

function bindfoo() {
    console.log(this);
}
let  test = 1;
console.log(bindfoo.bind(test).name);
bindfoo.bind(test)()

/*
* 5、箭头函数 =>
*箭头函数体内的this对象，就是定义时的对象，不是运行时的对象。
* 不可以当做构造函数。不可以用new命令
* 不可以使用arguments对象，在其体内不存在，可以用rest替代。
* 不可以使用yield命令，因此不能用作Generator函数
*
* */


let getTempItem = id => {
    return {id:1,name:'tong'};
};
//等同于
let getTempItem2 = id => ({id:1,name:'tong'});


/*没有参数或多个参数用（）代表参数部分*/
example();
var funcArrow = ()=>5;

var funcAdd = (x,y)=>x+y;
console.log(funcAdd(1,2));

example();
function Name(first,last) {
    this.first = first;
    this.last = last;
}


let tong = new Name('tong','yuhu');

let fullName = ({first,last}) => first+last;

console.log(fullName(tong));

/*this 的指向*/
example();
function funcThis() {
    setTimeout(()=>{
        console.log('id',this.id);
    },1000);
}

let id = 21;

// funcThis.call({id:43});

// funcThis();

function fucThisFun() {
    console.log(this.id)
    setTimeout(function () {
        console.log('id',this.id);
    },1000);
}
// fucThisFun.call({id:55});
// fucThisFun();



// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//
//     setInterval(()=>this.s1++,1000);
//     //在浏览器里面是window调取，在node里面是Timeout类调取。
//     setInterval(function () {
//         this.s2++;
//     });
//
// }

// var timer = new Timer();

// setTimeout(()=> console.log('s1',timer.s1),3100);
// setTimeout(()=> console.log('s2',timer.s2),3100);


example();

function arrowFuc() {
    setTimeout(()=>{
        console.log('id',this.id);
    },1000);
}

function normalFuc() {
    let that = this;
    setTimeout(function () {
        console.log('id',that.id);
    },1000)
}


arrowFuc.call({id:33});
normalFuc.call({id:44});
function h1(str) {
    console.log('#',str);
}
function h2(str) {
    console.log('##',str);
}
function example() {
    console.log('*示例*');
}
