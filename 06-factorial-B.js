function factorialofWordsCount(str) {
    var count = 1;
   if(str != null || str != undefined) {
     for (var i = 1; i <= str.length; i++) {
        if (str[i] === ' ') {
            count++;
        }
    }
    console.log(`total words in string "(${str})" is : ${count}`);
    let fact = 1;
    for (let i = 1; i <= count; i++) {
        fact = i * fact;
    }
    console.log(`factorial of total word count is : ${fact}`);

   }else{
    console.log(` Invalid input null : * Unhappy Scenarios *`);
    
   }
    
}
factorialofWordsCount('Revision is the mother of Success');

console.log(`--------------------------------------------------------------------------`);

factorialofWordsCount("We never fail, we always learn, Ming it");


console.log(`--------------------------------------------------------------------------`);

factorialofWordsCount(null)

console.log(`--------------------------------------------------------------------------`);

factorialofWordsCount("");

console.log(`--------------------------------------------------------------------------`);

factorialofWordsCount("Sahil Satish Thorat")
