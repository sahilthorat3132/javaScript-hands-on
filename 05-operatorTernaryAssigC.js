function maleMarriageEligibility(gender,age,name){
    return (gender === "male" && age >= 21) ? 
    `Hey ${name}, you are eligible for marriage.`:
    `hey ${name}, you are not eligible for marriage.`;

}
 var res1=maleMarriageEligibility('male',25,'Bill Gates')
 console.log(res1);

  var res2=maleMarriageEligibility('male',17,'Stew Jobs')
 console.log(res2);

 console.log('========== Task 2 ==========');
function femaleMarriageEligibility(gender,age,name){
    return (gender === 'female' && age >= 18) ?
    `Hey ${name}, you are eligible for marriage.`:
    `hey ${name}, you are not eligible for marriage.`;
}

var res3=femaleMarriageEligibility('female',16,'Jennifer')
console.log(res3);

var res4=femaleMarriageEligibility('female',18,'Soniya')
console.log(res4);



 




 