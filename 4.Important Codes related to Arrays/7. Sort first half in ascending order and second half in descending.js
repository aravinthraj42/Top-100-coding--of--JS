// Sort First half in Ascending and Second half in descending order in Java

// Examplei
// Input : arr[6] = [1, 90, 34, 89, 7, 9]
// Output : 1 7 9 90 89 34


function sortFristLast(arr){
    let size = arr.length
    let ascending = [];
    let descending = []


let soretdAscending = arr.sort((a,b) => a-b)  
// console.log(arr)
// let sortedDescending = arr.sort((b,a) => a-b)
// console.log(soretdAscending,sortedDescending)

for(let i =0; i< size/2; i++){
    ascending.push(soretdAscending[i])
    // console.log(ascending)
}
for(let i = size-1; i>=size/2; i--){
    descending.push(soretdAscending[i])
    // console.log(descending.push(soretdAscending[i])) // let array = arr.push will return Lengh of Array.
    // console.log(descending)
}
// let result = [...ascending, ...descending.reverse()]
let result = [...ascending, ...descending]
console.log(result)
}

sortFristLast([1, 90, 34, 89, 7, 9])