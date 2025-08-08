console.log(`---------- Reverse String 1 ----------`);
var str1 = 'Hard work always pays back';
reverseString(str1);

function reverseString(str) {
    var rev = '';
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') {
            rev += str[i];
        }
    }
    console.log(`Given string is: "${str}"`);
    console.log(`Reversed string without spaces: "${rev}"`);
}

console.log('');
console.log(`---------- Reverse String 2 ----------`);

var str2 = 'Soon i will be React IT champ';
reverseString(str2);


//--------------------------------------------------

console.log(``);
console.log(`---------- Count of a or A ----------`);

var str = 'I AM Learning JavaScript, The Language of internet';
//var str='java';

console.log(`The given String is : ${str}`);
countCharA(str);
function countCharA(a) {
    var count = 0;
    for (var i = 0; i <= a.length - 1; i++) {
        if (a[i] == 'a' || a[i] == 'A') {
            count++;
        }
    }
    console.log(`The Count of A in string is : ${count}`)
}
console.log('');
console.log(`---------- count of A or a for strin 2 ----------`);


var str1=' My favorite movie is LAggAn';
console.log(`The given string is : ${str1}`);

countCharA(str1);
