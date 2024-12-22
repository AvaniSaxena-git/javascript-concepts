const myarr = new Array(1,2,34)
const nextAr = [4,8,"shak",true]

console.log(myarr[1])

console.log(myarr.push(59))  // add value in array
console.log(myarr.pop())
// unshift = to add element at 0 idx
// shift = to remove 0idx element

const newarr = myarr.join()
console.log(typeof myarr)


///////////////////////////////////////


const myArr = [0,1,2,3,4]
console.log(myArr.slice(1,3));
console.log(myArr);
console.log(myArr.splice(1,3));
console.log(myArr);


const arr1 = [2,5,8,6]
const arr2 = ["arjun","vicky","aly"]
const arr3 = arr1.concat(arr2)
console.log(arr3);

const spread = [...arr1,...arr2]

console.log(spread);

