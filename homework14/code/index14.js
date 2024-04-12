const arrayOfValue = [5, 6, 9, 'number', 3, {}, 'function', 20, 40, [], 30, 'counter', 40,];

const resultOfNumberValue = function (arrayOfValue) {
    const { count, sum } = arrayOfValue.reduce((acc, element) => {
        if (typeof element === 'number' && !isNaN(element)) {
            acc.sum += element;
            acc.count++;
        }
        return acc;
    }, { count: 0, sum: 0 });

    if (count === 0) {
        return 0;
    }

    return sum / count;
    
   };

console.log(resultOfNumberValue(arrayOfValue));


// const resultOfNumberValue = function (arrayOfValue) {
    
//     let count = 0;
//     let sum = 0; 

//     for (const element of arrayOfValue) {
//         if (typeof element === 'number' && !isNaN(element)) {
//             sum += element;
//             count++;
//         }
//     }

//     if (count === 0) {
//         return 0; 
//     }

//     return sum / count;
// };

// console.log(resultOfNumberValue(arrayOfValue)); - without reduce




