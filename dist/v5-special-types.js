// Top types
let x = "Hello World";
x = 123;
console.log(x.length);
const something = "Hello world";
//! something.length; --> unknown type can't use length
// Core types
let something2;
const num = 123;
something2 = num; //--> Assigned number into unknown type
const currentUser = null;
// Unit type
const greet = () => {
    console.log("HEllo WOrld");
};
something2 = greet();
// ! const greetings: string = greet(); --> can't assign Void into String
// Sub-type of unit type
const anotherGreet = () => {
    console.log("Hello");
    return undefined;
};
const greetings = anotherGreet();
console.log(greetings);
// Bottom type
let NeverHappenning; //  = 23 --> Can't assign to never type
const getError = (msg) => {
    throw new Error(msg);
};
const errors = getError("ABC");
export {};
