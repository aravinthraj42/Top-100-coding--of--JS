function EvenOrOddNumbers(num){
if(num % 2 === 0){
    console.log(`Given Number ${num} is Even`)
}else if(num % 2 !== 0){
    console.log(`Given Number ${num} is ODD`)
}
}

function  EvenOrOddNumbersternatory(num){
    let result = num %2 === 0 ? `Given Number ${num} is Even` : `Given Number ${num} is ODD`;
    console.log(result)
}

function EvenOrOddNumbersBitwise(num){
if(!(num & 1)){ // num & 1 then odd else even
    console.log(`Given Number ${num} is Even`)
}else if(num & 1){
    console.log(`Given Number ${num} is ODD`)
}
}

EvenOrOddNumbers(29)
EvenOrOddNumbersternatory(10)
EvenOrOddNumbersBitwise(29)