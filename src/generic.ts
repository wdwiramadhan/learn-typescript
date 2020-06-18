const addUUid = (obj:object) => {
  let uid = Math.floor(Math.random()*10000)
  return {...obj,uid}
}

let docOne = addUUid({name:"andi",age:12})

console.log(docOne)