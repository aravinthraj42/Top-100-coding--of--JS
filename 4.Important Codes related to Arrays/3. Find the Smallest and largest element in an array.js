// Finding the Smallest and largest element in an array in JavaScript
// Example :
// Input :
// arr[5] = [12, 56, 45, 34, 30]

// Output :
// Smallest Element is 12
// Largest Element is 56

function smallestLargest(arr){
    let smallest = arr[0];
    let largest = arr[0];
for(let num of arr){
    if(num < smallest){ // 56<12 2<12
        smallest = num
    }else if(num > largest){
       largest = num
    }
}
console.log(smallest, largest);
}

smallestLargest([12, 56, 2, 45, 200, 34, 30])

