const add = (a:number, b:number, c:number|string = 'aye'):void => {
  console.log(a+b)
  console.log(c)
}

add(2,3,90)

const minus = (a:number, b:number) => {
  return a-b;
}

const result = minus(9,2); // type result is number cause minus function return number

console.log(result)

type StringOrNum = string|number;
const logDetails = (uid:StringOrNum, item:string) => {
  console.log(`${item} with uid ${uid } sold out`)
}

logDetails('eafkdnad32434','book')