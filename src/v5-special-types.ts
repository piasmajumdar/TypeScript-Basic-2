// Top types
let x: any = "Hello World";
x = 123;
console.log(x.length)

const something: unknown = "Hello world";
//! something.length; --> unknown type can't use length

// Core types
let something2: unknown;
const num: number = 123;
something2 = num; //--> Assigned number into unknown type


// Nullish types
interface User {
    name: string;
}

type LoggedInUser = User | null
const currentUser: LoggedInUser = null;


// Unit type
const greet = () =>{
    console.log("HEllo WOrld")
}
something2 = greet();

// ! const greetings: string = greet(); --> can't assign Void into String


// Sub-type of unit type
const anotherGreet = (): undefined =>{
    console.log("Hello");
    return undefined;
}

const greetings: void = anotherGreet();
console.log(greetings)



// Bottom type
let NeverHappenning: never //  = 23 --> Can't assign to never type

const getError = (msg: string): never => {
    throw new Error(msg)
};

const errors: null = getError("ABC");