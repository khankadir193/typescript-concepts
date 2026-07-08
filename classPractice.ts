/*
Exercise 1: Basic Class
Create a class Car with:

brand (string)
model (string)
year (number)
Method getInfo() that returns a string like "Toyota Camry 2024"

*/

class Car {
    brand:string;
    model:string;
    year:number;

    constructor(brand:string,model:string,year:number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo():string{
        return `${this.brand} ${this.model} ${this.year}`;
    }
}

const car1 = new Car("Toyota","Camry",2024);
console.log("car specification:-",car1.getInfo());


/*
Exercise 2: With Access Modifiers
Create a class Employee with:
public name
private salary
protected department
A method getSalary() to return salary
*/
class Employee{
    public name:string;
    private salary:number;
    protected department:string
    constructor(name:string,salary:number,department:string){
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    getSalary():number{
        return this.salary;
    }
}

const emp1 = new Employee("Abdul Kadir KHan",150000,"Software Engineer");
console.log("salary employee:-",emp1.getSalary());

/*
Exercise 3: Inheritance
Create Shape class with area() method, then create Rectangle and Circle classes that extend it.
*/

class Shape{ 
    area():number{
        return 0;
    }
}

class Rectangle extends Shape{
    length:number;
    width:number
    constructor(length:number,width:number){
        super();
        this.length = length;
        this.width = width;
    }   
    area():number{
        return this.length * this.width;
    }
}

class Circle extends Shape{
    radius:number
    constructor(radius:number){
        super();
        this.radius = radius;
    }

    area():number{
        return Math.floor(Math.PI * this.radius * this.radius);
    }
}

const rectangle1 = new Rectangle(20,30);
const circle1 = new Circle(20);
console.log('rectangle class:-',rectangle1.area());
console.log('circle class',circle1.area());
