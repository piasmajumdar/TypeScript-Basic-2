// type alias vs interface

//? Interface is generally connected to objects
//? type alias is more connected to literals, unions, tuples, primitives

//TODO: interface

type Id = number;
//! interface id = number ==> not possible

type Role = "admin" | "member"
// ! interface "admin" | number ==> not possible


// Interface
interface User {
    name: string;
    id: Id;
    role: Role;
}

const user: User ={
    id: 123,
    name: "Pias",
    role: "admin"
}

// TODO: interface
interface Animal {
    species: string;
}

interface Cat extends Animal{
    breed: string
}

const cat: Cat = {
    species: "Felix Catus",
    breed: "Persian"
}


type Vehicle = {
    brand: string
}

type Car = Vehicle & {
    //? "&" symbol is used to perform intersection
    model: string
}

const car: Car = {
    brand: "Toyota",
    model: "Corolla"
}


//? Interface supports multiple declarationa and union:

interface IEmployee {
    name: string
}

interface IEmployee {
    id: number
}

const employee: IEmployee = {
    id: 123,
    name: "ACB"
}


//! But, for type alias, this is not valid
// type TEmployee = {
//     id: number
// }
// type TEmployee = {
// }





