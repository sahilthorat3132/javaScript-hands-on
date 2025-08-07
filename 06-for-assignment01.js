console.log(`---------- 5 to 15 ----------`);
for(var i=5; i<=15; i++){
    console.log(i);
}

console.log(`---------- 50 to 40 ----------`);
for(var i=50; i>=40; i--){
    console.log(i);
}

console.log(`---------- find first 15 odd number ----------`);
var count = 0;

for (var i = 1; count < 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    count++;
  }
}

console.log(`---------- find first 10 even number ----------`);

var count= 0;
for(var i=1 ; count <10; i++){
    if(i % 2 == 0){
        console.log(i);
        count++;
        
    }
}


console.log(`---------- 5 table  ----------`);
for(var i=1; i<=10; i++){
    var table= 5*i;
    console.log(table); 
}

console.log(`---------- 10 table  ----------`);
for(var i=1; i<=10; i++){
    var result= 10 * i;
    console.log(result);
    
}

console.log(`---------- 10 table in reserve order  ----------`);
for(var i=10; i>=1; i--){
    var result= 10 * i;
    console.log(result);
    
}
