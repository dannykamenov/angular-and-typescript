/*let isEven: boolean = true;

type User = {
  name: string;
  age: number;
};

const newUser = {
  name: "John",
  age: 30,
} as User;

newUser.name = "Pesho";

console.log(newUser);

interface AnotherUser {
  firstName: string;
  lastName: string;
  id: number;
}

class AnotherUserClass implements AnotherUser {
    firstName: string;
    lastName: string;
    id: number;
    
    constructor(firstName: string, lastName: string, id: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}

const anotherUserList = [
  { firstName: "John", lastName: "Doe", id: 1 },
  { firstName: "Jane", lastName: "Doe", id: 2 },
] as AnotherUser[];


anotherUserList.forEach(({firstName, lastName, id}) => {
    console.log(`${firstName} ${lastName} with id: ${id}`)
});

class Human {
    sayHello() {
        console.log(`Hello`);
    }
}


class Person extends Human{
    private name: string;
    public age: number;

    constructor(name: string, age: number) {
        super();
        this.name = name;
        this.age = age;
    }
}

const ivan = new Person("Ivan", 30);
ivan.age = 31;
console.log(ivan.sayHello());*/

function getIdentity<T>(arg: T) {
    console.log(arg);
}

getIdentity<number>(5);
getIdentity<string>("5");

enum Color {
    Red = 1,
    Green = 2,
    Blue = 3
}

if (Color.Red === 1) {
    console.log("Color is red");
}