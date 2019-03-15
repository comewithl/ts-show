// 泛型

// 这个函数接受任意类型的入参，输出任意类型的入参 (不一定与入参类型相同，在一些特殊要求场景下且不确定性较多)

function indentity(args:any):any{
    return +args  
}

indentity("1") // 1:number

// 因此推出了泛型定义，在函数声明初期进行相同类型输出的声明定义，在调用时可以根据入参不同进而确认函数体内的参数类型及输出类型


function indentityGeneric<T>(args:T):T{
    return args
}

indentityGeneric<number>(1)  // 1:number
indentityGeneric<object>({a:1}) // {a:1}:object

// 针对接口和类型也可以实施相同的逻辑

interface GenericInterface<T> {
    (args:T):T;
}

let indentityGenericByInterface:GenericInterface<number> = indentityGeneric

indentityGenericByInterface(100) // 100

class GenericClass<T>{
    genericValue: T | undefined;
    constructor(x:T,y:T){
    };
    add!: (x: T, y: T) => T;
}

// 泛型约束,通过继承约定泛型的属性

interface gernericInterfaceRequireLength{
    length:number
}

function indentityByRequiredGeneric<T extends gernericInterfaceRequireLength>(args:T):T{
    console.log(args.length)
    return args
}

indentityByRequiredGeneric("i have length") 
indentityByRequiredGeneric(["i'm array"]) 

//indentityByRequiredGeneric(1) // <number>类型无length会被约束规则阻挡






