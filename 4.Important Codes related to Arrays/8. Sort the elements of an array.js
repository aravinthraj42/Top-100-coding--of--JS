// Sort the array in JavaScript

// Input : arr[4] = [10, 40, 20, 30]
// Output : 10 20 30 40

function sortArray(arr){
    // return arr.sort((a,b) => a-b)
    // let temp =0
    // let result =[];
    for(let i = 0; i<= arr.length; i++){
        for(let j =i+1; j<=arr.length; j++){
            if(arr[i]> arr[j]){
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            }
        }
    }
    return arr
}

let arr = [10, 40, 20, 30]

console.log(sortArray(arr))