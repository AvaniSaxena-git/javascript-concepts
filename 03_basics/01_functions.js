function addTwoNum(num1,num2){
console.log(num1+num2);
}
//addTwoNum(2,5)

function addTwoNum(num1,num2){
    let result = num1+num2
    return result
    }

 let result = addTwoNum(2,5)
console.log(`Result: ,${result}`);



function loginUser(username){
   if(username===undefined){
    console.log("please enter username");
   }
   return `${username} just logged in  `
}
console.log(loginUser("avani"));


//-------------------------------------------Rest operator
function calculatepirce(...price){
 return price
}
console.log(calculatepirce(545,8484,5,49469,56));

