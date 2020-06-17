// explicit types
let fullname: string;
let age: number;
let isLoggedIn: boolean;

age = 12;
fullname = 'andi warhol';
isLoggedIn = null;

//arrays
let doscom: string[] = [];
doscom.push('dinus')

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('choper');
mixed.push(9);
mixed.push(true);
console.log(mixed)

// object

let ninjaOne: object;
ninjaOne = {name:'andi',age:20}
console.log(ninjaOne)

let ninjaTwo : {
  name:string,
  age:number
}

ninjaTwo = {name: 'cecep',age : 12}