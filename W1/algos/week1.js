// const arr = [1,3,10,8,4,6,7,9,5,2];

// const sortedArray = (arr) => {
//     let piv = 5;
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] <= piv) {
//             newArr.push(arr[i]);
//         }
//     }
//     for(let j = arr.length; j >= 0; j--) {
//         if(arr[j] > piv) {
//             newArr.push(arr[j]);
//         }
//     }
//     console.log(newArr);
//     return newArr;
// }

// sortedArray(arr);

// const salary = [1000, 2000, 3000]

// var average = function(salary) {
//     var max = 0;
//     var min = 0;
//     var sum = 0;
//     for(let i = 0; i < salary.length; i++) {
//         sum = sum + salary[i];
//             if(salary[i] > max) {
//                 max = salary[i];
//             } else if(min === 0) {
//                 min = salary[i];
//             } else if(salary[i] < min) {
//                 min = salary[i];
//             }
//     }
//     console.log(max);
//     console.log(min);
//     sum = (sum - (max+min)) / 2;
//     console.log(sum);
//     return sum;
// };

// average(salary);

// const a = [5,6,7];
// const b = [3,6,10];

// function compareTriplets(a, b) {
//     let aScore = 0;
//     let bScore = 0;
//     const result = []
//     for(let i = 0; i < 3; i++) {
//         if( a[i] > b[i] ) {
//             aScore++
//         } else if( a[i] < b[i]) {
//             bScore++
//         }
//     }
//     console.log(aScore);
//     console.log(bScore);
//     result.push(aScore);
//     result.push(bScore);
//     return(result);
// }

// console.log(compareTriplets(a, b));

const arr = [-4,3,-9,0,4,1]

function plusMinus(arr) {
    const length = arr.length;
    let neg = 0;
    let zero = 0;
    let pos = 0;
    let result = [];
    for(let num of arr) {
        if(num < 0) {
            neg++
        } else if (num > 0) {
            pos++
        } else {
            zero++
        }
    };
    neg /= length;
    zero /= length;
    pos /= length
    console.log(neg);
    console.log(zero);
    console.log(pos);
    result.push(parseFloat(pos).toFixed(6));
    result.push(parseFloat(neg).toFixed(6));
    result.push(parseFloat(zero).toFixed(6));
    console.log(result);
    return result;
}

plusMinus(arr);