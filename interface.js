// 接口
//unused interface
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel2(labelledObj) {
    console.log(labelledObj.ss);
}
// myObj2符合{label:string}的接口定义，如果label的值类型是number或者非string则会报错
var myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);
var p1 = { x: 110, y: 120 };
var testQuery;
// testQuery = function (queryStr: string, queryDomain: string) {
//     return ["mark", 1112]
// }
testQuery = function (queryS, queryDo) {
    return ["mark", 1112];
};
testQuery("222", "111");
