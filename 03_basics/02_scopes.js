
if (true) {
    let a = 2;
    const b = 48;
    var c = 125;
}
//console.log(a);
//console.log(b);
console.log(c); // it will print the value from the scope , thats why we dont use var keyword

function one() {
    const username = "_av_saxena"
    function two() {

        const website = "instagram"
        console.log(username)
    } console.log(website)
    //  two() 
    // two can acccess all the variables of one 
}
one()
// but one cannot access variable of two