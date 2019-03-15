/* 进阶类 */

// 基础声明

class Greeter { // 声明Greeter类
    greeting: string; // 定义一个greeting的属性
    constructor(message: string) { // 类的实例化构造函数
        this.greeting = message;
    }
    greet() { // 一个greet方法
        return "Hello, " + this.greeting;
    }
}

let greeter2 = new Greeter("world");  // 实例化


// 继承

class Animal { // 相对于Dog类，这个也被称为基类（超类）
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal { // 相当于其继承的类，此类称为派生类（子类）
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move();
dog.bark();


// 继承 复杂例子

class AnimalComplex {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends AnimalComplex {
    constructor(name: string) { super(name); } // 如派生类有构造函数且基类有构造函数，其必须调用基类的构造函数super
    move(distanceInMeters = 5) {  // 派生类重写了基类的函数move
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends AnimalComplex {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: AnimalComplex = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// ***public 和 private修饰符，默认类中属性和方法的修饰符就是public，private修饰符特别说明时，其对应的属性和方法不能在类的外部进行访问

// protected 修饰符  其和private修饰符类似，但其在protected的派生类中仍然可以访问



class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误,无法在外部访问protected的属性


// readonly修饰符，只读属性必须在声明或者构造函数被初始化

class Octopus {
    readonly name;
    constructor(theName: string) {
        this.name = theName
    }
};

let dad = new Octopus("Michael");

// dad.name = "31232" //错误：只读属性


// 修饰符(readonly、private、protected)简化声明成员 Octopus类的简化,

class OctopusSimple {
    constructor(readonly name: string) {

    }
}

let dadSimple = new OctopusSimple("Michael")


// 存取器 ，防止随意修改和读取，set get。如果只有get没有set，默认成员会变成readonly

let passcode = "secret passcodes"

class EmployeeHavePrevent {
    constructor(private _fullName: string) {

    }
    get fullName(): string {
        return this._fullName
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcodes") {
            this._fullName = newName
        } else {
            console.error("this is error passcodes")
        }
    }
}

let employee = new EmployeeHavePrevent("32131");

employee.fullName = "1233"


// 静态属性 static 只存在类本身，而不存在类的实例上

class Grid {
    static origin = { x: 0, y: 0 };

    constructor(public scale: number) { }

    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        console.log(Math.sqrt(xDist * xDist + yDist * yDist) / this.scale)
    }
}

let grid1 = new Grid(5.0)

grid1.calculateDistanceFromOrigin({ x: 20, y: 20 })

// 抽象类 Abstract 定义成员，不包含方法体，其抽象修饰的方法必须在派生类中实现

abstract class AnimalAbstract {
    constructor(name: string) {

    }
    abstract makeSound(): void;
    move(): void {
        console.log("romaimngs the each..")
    }
}

class AnimalReal extends AnimalAbstract {
    makeSound() {
        console.log(1111)
    }
}


