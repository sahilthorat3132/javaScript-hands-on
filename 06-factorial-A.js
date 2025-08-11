function factorialOfNum(num){
    let fact=1;
   if(num != null || num != undefined){
     for(let i=num; i>=1; i--){
        fact =fact * i;
    } 
    return fact;
    
}else {
    return "Invalid input  * Unhappy Scenario *";
}
}
var result1 = factorialOfNum(5)
console.log(`factorial of 5 is : ${result1}`);

console.log(`-------------------------------------------`);

var result1=factorialOfNum(3);
console.log(`factorial of 3 is : ${result1}`);

console.log(`-------------------------------------------`);

var result1=factorialOfNum(null);
console.log(`factorial of null is : ${result1}`);

console.log(`-------------------------------------------`);

var result1=factorialOfNum(8);
console.log(`factorial of 8 is : ${result1}`);

console.log(`-------------------------------------------`);

var result1=factorialOfNum(undefined);
console.log(`factorial of undefined is : ${result1}`);

console.log(`-------------------------------------------`);

var result1=factorialOfNum(9);
console.log(`factorial of 9 is : ${result1}`);

console.log(`-------------------------------------------`);

var result1=factorialOfNum(0);
console.log(`factorial of 0 is : ${result1}`);