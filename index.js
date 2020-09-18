// Code your solution here
let drivers= ['Jack', 'John', 'Sam', 'Tailor', 'Tom', 'Albert'];

function findMatching(x,name){
    let result= x.filter (index=>
        index.toLowerCase()===name.toLowerCase()
    )
    return result;
}
console.log(findMatching(drivers,'sam'));