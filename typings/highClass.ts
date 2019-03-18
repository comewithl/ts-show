// 高级类型


function extend<T,U> (first:T, second:U ): T & U{ // T&U 交叉类型，说明其包含了T和U的类型特点
    let result = <T&U>{}; // <**>类型断言
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class PersonHigher {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new PersonHigher("Jim"), new ConsoleLogger());
// @ts-ignore : 重复声明
var n = jim.name;
jim.log();


let unionProp : string | number // 联合类型

// 类型别名，自己定义类型可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
// 不能使用extend和implements

type Name = string;
type NameResolver = () => string
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}

getName(()=>{return "me"})

type LinkedList<T> = T & { next: LinkedList<T> };
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
} // 自己引用自己

// 字符串的字面量类型别名

type Easing = "ease-in" | "ease-out" | "ease-in-out";

function useEasingAnimate(type:Easing) {
    switch(type){
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

useEasingAnimate("ease-in")

// this 类型的返回声明

class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this { // 返回调用实例的this，如果不声明这个类型的话，将会返回BasicCalculator
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}

let v = new BasicCalculator(2)
            .multiply(5)
            .add(1)
            .currentValue();

class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
    // ... other operations go here ...
}

let v2 = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();