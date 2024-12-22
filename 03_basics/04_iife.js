
// preventing from problems occured bcz of pollution of global scope 
// Immediately Invoked function Expression IIFE
/*
function chai(){
console.log("DB Connected");
}
chai()*/

(function chai(){
    console.log("DB Connected");
})();

((name)=>{
    console.log(`DB COnnected twice ,${name}`);
    
})("hitesh");