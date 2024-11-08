// Reverse an Array in JavaScript
// Here, in this page we will discuss the program to reverse an array in java. We are given with an array and need to print that array in reverse order. 
// Here we will discuss different approaches to reverse the given input array.


function reverse(arr){
    let result =[];

    for(let i = arr.length-1; i>=0; i--){
        result.push(arr[i])
    }
    console.log(result)
}

reverse([10, 20, 30,  40, 50, 100])

let array = [10, 20, 30,  40, 50, 100]
console.log(array.reverse())