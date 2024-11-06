//1. Find Largest element in an array

const largestElements = (arr) => {

    let largest = '';

    let words = arr.split(' ');

    for(let i =0; i<words.length; i++){
        const char = words[i]
        if(char.length > largest.length) largest = words[i]
    }
    return largest

}

console.log(largestElements("My Name is Aravinttttth Raj I love Javascrippt"))