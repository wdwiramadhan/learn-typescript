const addUUid = <T extends {} >(obj:T) => {
  let uid = Math.floor(Math.random()*10000)
  return {...obj,uid}
}

let docOne = addUUid({name:"andi",age:12})
let docTwo = addUUid({name:'yayan'})

console.log(docOne)
console.log(docTwo)

//enum 
enum ResourceType{BOOK, AUTHOR, FILM, PERSON}
//generic
interface Resource<T>{
  uid:number;
  resourceType:ResourceType;
  data:T;
}

const docThree:Resource<number> = {
  uid:12,
  resourceType:ResourceType.AUTHOR,
  data: 12
}

const docFour: Resource<string> = {
  uid : 14,
  resourceType : ResourceType.PERSON,
  data : 'not found'
}
console.log(docThree)
console.log(docFour)