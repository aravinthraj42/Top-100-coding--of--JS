// 2. Find Smallest element in an array

// Find the Smallest
const smallest = (arr) => {

    let words = arr.split(' ');
    let smallest = words[0];

    for(let i =1; i<words.length; i++){
        let char = words[i]
        if(char.length < smallest.length) {
            smallest = char
        }
    }

    return smallest

}

console.log(smallest("My Name is Aravinttttth Raj love Javascrippt"));


// console.log(
//     arr.reduce(function(a, b) {
//       return a.length <= b.length ? a : b;
//     })
//   )