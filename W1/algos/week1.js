const arr = [1,3,10,8,4,6,7,9,5,2];

const sortedArray = (arr) => {
    let piv = 5;
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= piv) {
            newArr.push(arr[i]);
        }
    }
    for(let j = arr.length; j >= 0; j--) {
        if(arr[j] > piv) {
            newArr.push(arr[j]);
        }
    }
    console.log(newArr);
    return newArr;
}

sortedArray(arr);

