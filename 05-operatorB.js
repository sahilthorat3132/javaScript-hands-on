console.log("-------------------- Task 1 --------------------");
function greaterNumber(a,b){
console.log(`Greater number between ${a} and ${b} is : `+ (a>b ? a : b));

}
greaterNumber(10, -10);
greaterNumber(800, 899);


console.log("-------------------- Task 2 --------------------");

function isEvenOrOddNum(a){
    if(a %2==0){
        return true;
    }else return false;
}
var res1=isEvenOrOddNum(29);
console.log(`29 is even number : ${res1}`);
var res2=isEvenOrOddNum(44);
console.log(`44 is even number : ${res2}`);
var res3=isEvenOrOddNum(0);
console.log(`0 is even number : ${res3}`);
var res4=isEvenOrOddNum(101);
console.log(`101 is even number : ${res4}`);

console.log("-------------------- Task 3 --------------------");

function wordLength(a){
    if (a.length % 2 == 0){
        return 'Even';
    }else return 'odd'

}

var res1=wordLength('javaScript');
console.log(` javaScript is : ${res1}`);

var res2=wordLength('developer');
console.log(` developer is : ${res2}`);

var res3=wordLength('google');
console.log(` google is : ${res3}`);




