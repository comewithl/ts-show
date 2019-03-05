interface Person {
    firstName: string,
    lastName: string
}

class Student {
    fullName: string;
    constructor(public firstName, public secondName = "M", public lastName = "1") {
        this.fullName = firstName + secondName + lastName;
    }
}

function greeter(person: Person) {
    return `Hello${person.firstName} ${person.lastName}`
}


let user = new Student("Jane")

console.log(user)