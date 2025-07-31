console.log("=========== Function with no arguments and no return type =============");
console.log("---- 1.show Function ----");

function show(){
    console.log("Hello My Name is Sahil Thorat, I am a software Developer");
}
show();

console.log("---- 2.Display Function ====");
function display(){
    console.log("I am good at HTML, CSS, JS, React.js, .NET(C#), MySql");   
}
display();


console.log("============== Function with arguments ==============");

function personalDetails(fname,lname,clgName){
   console.log(`My First Name : ${fname}`);
    console.log(`My last Name : ${lname}`);
    console.log(`my college name is : ${clgName}`);  
}

var firstName='Sahil'
var lastName='Thorat'
var collegeName='MIT-WPU University'
personalDetails(firstName,lastName, collegeName);


console.log("============== Function with arguments and return type ==============");


function addThreeValues(n1,n2,n3){
    var sum = n1 + n2 + n3;
    return sum;

}

var a=10.23
var b=600
var c=40

console.log(`a value is : ${a}  and  b value is : ${b}  and  c value is : ${c}`);

var result=addThreeValues(a,b,c);
console.log(`Addition of three number is : ${result}`);

console.log("==== same functions but parameter different ====");

a='hello'
b='good'
c='morning'
console.log(`a value is : ${a}  and  b value is : ${b}  and  c value is : ${c}`);
result=addThreeValues(a,b,c);
console.log(`Concatenation of three String is : ${result}`);





