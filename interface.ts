// 接口

//unused interface

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// used interface

interface LabelObj {
    label: string,
    color?: number,
    [propName: string]: any // 对LabelObj这个接口能定义任意属性，任意类型
}


function printLabel2(labelledObj: LabelObj) {
    console.log(labelledObj.ss);
}
// myObj2符合{label:string}的接口定义，如果label的值类型是number或者非string则会报错
let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);

// 只读对象接口

interface Point {
    readonly x: number; // 只读
    readonly y: number; // 只读
}

let p1: Point = { x: 110, y: 120 }


// 函数接口类型

interface QueryFn {
    (queryStr: string, queryDomain: string): any[];
}

let testQuery: QueryFn

// testQuery = function (queryStr: string, queryDomain: string) {
//     return ["mark", 1112]
// }

testQuery = function (queryS: string, queryDo: string) {
    return ["mark", 1112]
}
testQuery("222", "111")


// 索引签名

interface StringArray {
    [index: number]: string
}

let myArray: StringArray;
myArray = ["Bob", "Fred"]
let myStr: string = myArray[1]

// 类类型
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(time: Date) {

    }
    constructor(h: number, m: number) {

    }
}

// 接口继承

interface commonInterface {
    userId: string;
}

interface accountInterface extends commonInterface, commonInterface {
    accountId: string;
}

let adminAccount: accountInterface

adminAccount.userId = '11'
adminAccount.accountId = '112'

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
