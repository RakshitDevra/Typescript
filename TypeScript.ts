// 1. Basic Types
let message: string = "Hello, TypeScript!";
let isActive: boolean = true;
let age: number = 25;
let numbers: number[] = [1, 2, 3, 4, 5];

// 2. Function with Types
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// 3. Interface
interface Person {
    name: string;
    age: number;
    greet(): string;
}

const user: Person = {
    name: "Alice",
    age: 30,
    greet() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
};

// 4. Class
class Car {
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
    drive(): void {
        console.log(`${this.brand} is driving.`);
    }
}
const myCar = new Car("Toyota");

// 5. Generics
function identity<T>(arg: T): T {
    return arg;
}

// 6. Enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;

// 7. Union Type
function printId(id: number | string): void {
    console.log(`ID: ${id}`);
}

// 8. Tuple
let person: [string, number] = ["Alice", 30];

// 9. Type Assertions
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;

// 10. Async/Await Function
async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched!"), 2000);
    });
}
fetchData().then(console.log);

// 11. Decorators
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Method ${key} was called with args:`, args);
        return originalMethod.apply(this, args);
    };
}

class Example {
    @logMethod
    sayHello(name: string) {
        return `Hello, ${name}!`;
    }
}
const ex = new Example();
console.log(ex.sayHello("TypeScript"));

// 12. Map and Set
let numberSet: Set<number> = new Set([1, 2, 3, 4]);
let nameMap: Map<string, number> = new Map([
    ["Alice", 30],
    ["Bob", 25]
]);

// 13. Optional Chaining and Nullish Coalescing
let userProfile: { name?: string } = {};
console.log(userProfile.name?.toUpperCase() ?? "No name provided");

console.log(
    message, greet("John"), user.greet(), myCar.drive(), 
    identity(42), move, printId("123"), person, strLength,
    numberSet, nameMap
);
