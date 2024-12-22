const user = {
    username : "hitesh",
    price  : 999,
    welcomeMessage : function(){
        console.log(`${this.username},Read the message`);
    }
    
}
user.welcomeMessage()
const chai=()=>{
    let username = "avani"
    console.log(this);
}
chai()
/*
const addtwo = (num1,num3)=>{
    return num1+num2
}
console.log(addtwo(7,8));
*/

// implicit arrow func
const addtwo =(num1,num2) => num1+num2
console.log(addtwo(4,8));


const printObject = ({username:"avni"})
console.log(printObject);
