//array
let names = ['andi', 'burhan', 'wawan'];
names.push('branz');
//names.push(9); cannot push array of string
let number = [1,3,9,4];
number.push(9);
//number.push('a'); cannot push array of integer
let mixed = [12,'andi',90,'burhan'];
mixed.push('andi');
mixed.push(9)
mixed[0] = 'wawan';
console.log(mixed)

//object
let community = {
  name: 'doscom',
  address : 'semarang'
}

community.address = 'jepara'
//community.member = 90 cannot add new property object

console.log(community)
