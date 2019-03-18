// 高级类型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function extend(first, second) {
    var result = {}; // <**>类型断言
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var PersonHigher = /** @class */ (function () {
    function PersonHigher(name) {
        this.name = name;
    }
    return PersonHigher;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        // ...
    };
    return ConsoleLogger;
}());
var jim = extend(new PersonHigher("Jim"), new ConsoleLogger());
// @ts-ignore : 重复声明
var n = jim.name;
jim.log();
var unionProp; // 联合类型
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
getName(function () { return "me"; });
function useEasingAnimate(type) {
    switch (type) {
        case "ease-in":
            break;
        case "ease-out":
            break;
        case "ease-in-out":
            break;
        default:
            break;
    }
}
useEasingAnimate("ease-in");
// this 类型的返回声明
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
var v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
var ScientificCalculator = /** @class */ (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator(value) {
        if (value === void 0) { value = 0; }
        return _super.call(this, value) || this;
    }
    ScientificCalculator.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return ScientificCalculator;
}(BasicCalculator));
var v2 = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();
