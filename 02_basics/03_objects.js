const tinderuser={}
tinderuser.id = "123@abc"
tinderuser.name = "avani"
tinderuser.isLoggedin = false
/*
console.log(tinderuser); */
const regularuser = {
    email: "avani@.com",
    fullname : {
    username :{
        firstname: "avani",
        lastname : "saxena"
    }
    }
}
//console.log(regularuser.fullname.username);


//--------------------------------------------------Destructuring

const {email :ml} = regularuser
console.log(ml);

