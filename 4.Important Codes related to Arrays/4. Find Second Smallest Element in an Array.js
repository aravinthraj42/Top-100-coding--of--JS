// Second Smallest Element in an array in Javascript

function secondSmallest(arr){
//    let result = arr.sort((a,b)=> a-b);
//    return result[1];
let smallest = arr[0];
let secondsmallest = 0;
for(let i =0; i<arr.length; i++){
if(arr[i] < smallest){ 
    secondsmallest = smallest
    smallest = arr[i]
}else if(secondsmallest > arr[i]){
    console.log('inside else')
    secondsmallest = arr[i]
}
}
return secondsmallest
}

console.log(secondSmallest([9, 8, 12, 13, 1, 10, 34, 10])) 
// 10