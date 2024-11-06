function sumOfDigitsofNumber(number){
    let result = 0;
    let arr = number.toString().split('')
    for(let i =0; i< arr.length; i++ ){
        result = result + Number(arr[i]);
    }
    console.log(result);

}
const sumOfDigitsofNumberModulo = (number) => {
    let sum =0;
 while(number !== 0){
sum += number%10;
number = Math.floor(number/10)
 }
 console.log(sum)
}

const sumOfDigitsofNumberAssciiCode = (num) =>{
    let sum = 0
for(let i = 0; i< num.length; i++){
    // console.log(num.charCodeAt(i))
    sum = sum + num.charCodeAt (i) - 48;
    // sum = sum + Number(num[i]);
}
console.log(sum)
}

sumOfDigitsofNumber(12345)
sumOfDigitsofNumberModulo(12345)

sumOfDigitsofNumberAssciiCode('12345')