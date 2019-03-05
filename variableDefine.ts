// 变量声明


// 默认值

function keepDefaultVariable(wholeObject: { a: string, b?: number }) { // ?:可为缺省值
    let { a, b = 100 } = wholeObject
    console.log(a)
    console.log(b)
}

keepDefaultVariable({ a: '11' }) // output : 11 /n 100



