let calc: (a:number,b:number,c:string) => number;
calc = (number1:number,number2:number,action:string) => {
  if(action === 'add'){
    return number1 + number2;
  }else{
    return number1 - number2;
  }
}

console.log(calc(4,5,'add'))

let personDetail: (obj:{name:string,age:number}) => void;
type person = {name:string, age:number};
personDetail = (me:person) => {
  console.log( `i'm ${me.name} ${me.age} years old`);
}
personDetail({name: 'boy',age : 21})