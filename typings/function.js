var myAdd = function (x, y) {
    return x + y + '';
};
myAdd(1, 2);
// 参数类型和个数匹配，就不在乎参数名是否正确，返回值类型必须相同  => ** =function():**{}，后一个函数返回类型指定可以缺省
var myAdd2 = function (x, y) {
    return x + y;
};
// 理下上述函数声明逐层变形
var myAddFirst = function (x, y) { return x + y; };
var myAddSecondHaveDeclare = function (x, y) { return x + y; };
var myAddSecondHaveDeclareBindThis = function (x, y) { return x + y; };
// 可选参数
function buildName(firstName, secondName) {
    return firstName + secondName;
}
// 默认参数 其类型为其默认值的类型
function buildNameHaveDefault(firstName, secondName) {
    if (secondName === void 0) { secondName = "Smith"; }
    return firstName + secondName;
}
buildNameHaveDefault("Michael");
// 剩余参数 ，js 可以通过arguments来访问所有入参
function buildNameRestArgument(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + restOfName.join(" ");
}
buildNameRestArgument("Michael", "Bob", "Lebron");
/**
 * this使用
 *
 * 1、在ts strict的模式下 this默认是undefined，不是window
 * 2、
 *  */
function testDefaultThis() {
    var _this = this;
    return function () {
        console.log(_this);
        return { suit: _this };
    };
}
testDefaultThis()();
