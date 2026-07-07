/*
what is a class:-class is a blue print of creating objects.
Example:-you have a blueprint (class) of a car,then you can create many cars
(objects) from it.
*/

class Person {
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greeet() {
        console.log(`Hello my name is:${this.name}`);
    }
}

//creating objects
const person1 = new Person("Abdul Kadir Khan", 29);
const person2 = new Person("Abdul Jabir Khan", 20);

person1.greeet();
person2.greeet();
console.log(person1.age, person2.age);

/*
Access Modifiers:-

Modifier                    Meaning,                                Accessible
public                 Default (anyone can access),                    Everywhere
private                   Only inside the class,                       Only class
protected               Inside class + child classes,                  Class + Children

*/


//inheritance:-inheritance means we can inherit the property or methods from parent class.

class Animal {
    name:string
    constructor(name: string) {
        this.name = name;
     }

    makeSound(): void {
        console.log('make some sound....');
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('bow bow ',this.name);
    }
}

const dog = new Dog("Tommy");
dog.makeSound();