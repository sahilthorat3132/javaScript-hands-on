var monthOfYear = function (month) {
    switch (month) {
        case 1:
            console.log(`The ${month}st month is - January `);
            break;

        case 2:
            console.log(`The ${month}nd month is - February `);
            break;

        case 3:
            console.log(`The ${month}rd month is - March `);
            break;

        case 4:
            console.log(`The ${month}th month is - April `);
            break;

        case 5:
            console.log(`The ${month}th month is - May `);
            break;

        case 6:
            console.log(`The ${month}th month is - June `);
            break;

        case 7:
            console.log(`The ${month}th month is - July `);
            break;

        case 8:
            console.log(`The ${month}th month is - August `);
            break;

        case 9:
            console.log(`The ${month}th month is - September `);
            break;

        case 10:
            console.log(`The ${month}th month is - October `);
            break;

        case 11:
            console.log(`The ${month}th month is - November `);
            break;

        case 12:
            console.log(`The ${month}th month is - December `);
            break;

        default:
            console.log(`${month} is a invalid input`);
            break;


    }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);