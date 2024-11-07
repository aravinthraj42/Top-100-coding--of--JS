// Sum of all the elements of an array
 

// In this section, we learn about Program for calculating the sum of all the elements of an array in java programming language. We are given with an array and need to find the sum of the given elements of the array. We will discuss various approaches to find the solution of the given problem.

function sumofDigits(arr){
    let result = 0 ;

    for( let num of arr){
        result += num
    }
    return result;

}


console.log(sumofDigits([12, 13, 1, 10, 34, 10]))
// sumofDigits([12, 13, 1, 10, 34, 10])

