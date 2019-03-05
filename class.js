var Student = /** @class */ (function () {
    function Student(firstName, secondName, lastName) {
        if (secondName === void 0) { secondName = "M"; }
        if (lastName === void 0) { lastName = "1"; }
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
        this.fullName = firstName + secondName + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello" + person.firstName + " " + person.lastName;
}
var user = new Student("Jane");
var array = ['1', '2', "3" + user.fullName]; // 字符串数组，支持模板字符串
var anyArray = ['1', '2', "3" + user.fullName, 1]; // 字符串数组，支持模板字符串
var turple = [1, '2']; //元祖组合类型，赋值按元祖中类型顺序赋值
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(user);
