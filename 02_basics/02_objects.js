// singleton
// Object.create

// Object literals

const sym = Symbol("key1")
const stud ={
    name : 'avani',
    "full name" : "avani saxena",
    [sym] : "mykey",
    age : 20,
    email : "avani2005@gmail.com",
    isLoggedin : true
}/*
console.log(stud.name);
console.log(stud["full name"]);
console.log(stud["age"]);
console.log(stud[sym]);

stud.email = "avanisaxena@gmail.com"
Object.freeze(stud);
stud.email = "saxena123@gmail.com"
console.log(stud);  */
stud.greeeting = function(){
    console.log("hello !!!!");
    
}
console.log(stud.greeeting());



stud.greeting = function(){
    console.log(`hello stud user ,${stud.name}`);

}
console.log(stud.greeting());




