// explicit types
let fullname: string;
let age: number;
let isLoggedIn: boolean;

age = 12;
fullname = 'andi warhol';
isLoggedIn = true;

//arrays
let doscom: string[] = [];
doscom.push('dinus')

// union types
let mixed3: (string|number|boolean)[] = [];
mixed3.push('choper');
mixed3.push(9);
mixed3.push(true);
console.log(mixed3)

// object

let ninjaOne: object;
ninjaOne = {name:'andi',age:20}
console.log(ninjaOne)

let ninjaTwo : {
  name:string,
  age:number
}

ninjaTwo = {name: 'cecep',age : 12}