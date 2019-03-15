/* 进阶类 */
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
// 基础声明
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world"); // 实例化
// 继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move();
dog.bark();
// 继承 复杂例子
var AnimalComplex = /** @class */ (function () {
    function AnimalComplex(theName) {
        this.name = theName;
    }
    AnimalComplex.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return AnimalComplex;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    } // 如派生类有构造函数且基类有构造函数，其必须调用基类的构造函数super
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(AnimalComplex));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(AnimalComplex));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
// ***public 和 private修饰符，默认类中属性和方法的修饰符就是public，private修饰符特别说明时，其对应的属性和方法不能在类的外部进行访问
// protected 修饰符  其和private修饰符类似，但其在protected的派生类中仍然可以访问
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误,无法在外部访问protected的属性
// readonly修饰符，只读属性必须在声明或者构造函数被初始化
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.name = theName;
    }
    return Octopus;
}());
;
var dad = new Octopus("Michael");
// dad.name = "31232" //错误：只读属性
// 修饰符(readonly、private、protected)简化声明成员 Octopus类的简化,
var OctopusSimple = /** @class */ (function () {
    function OctopusSimple(name) {
        this.name = name;
    }
    return OctopusSimple;
}());
var dadSimple = new OctopusSimple("Michael");
// 存取器 ，防止随意修改和读取，set get。如果只有get没有set，默认成员会变成readonly
var passcode = "secret passcodes";
var EmployeeHavePrevent = /** @class */ (function () {
    function EmployeeHavePrevent() {
    }
    Object.defineProperty(EmployeeHavePrevent.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcodes") {
                this._fullName = newName;
            }
            else {
                console.error("this is error passcodes");
            }
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeHavePrevent;
}());
var employee = new EmployeeHavePrevent();
employee.fullName = "1233";
// 静态属性 static 只存在类本身，而不存在类的实例上
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        console.log(Math.sqrt(xDist * xDist + yDist * yDist) / this.scale);
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(5.0);
grid1.calculateDistanceFromOrigin({ x: 20, y: 20 });
