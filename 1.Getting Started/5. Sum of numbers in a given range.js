// Find the Sum of the Numbers in a Given Range in Java
// Given two integer inputs number1 and number2, the objective is to find the sum of all Number that lay in the given interval by writing a code to Find the Sum of the Numbers in a Given Range in Java Language.

// Example
// Input : Number1 = 12 , Number2 = 15
// Output : 54

function sumOfNumersinGivenRange(num1,num2){
    let result = 0;
    for(let i = num1; i <=num2; i++){
     result +=i
    }
    console.log(result)
}
//Method 2 : Formula(n*(n+1)/2)Apply the given formula sum = b*(b+1)/2 – a*(a+1)/2 + a.
function sumOfNumersinGivenRangeFormula(num1,num2){
    let result = num2*(num2+1)/2 - num1*(num1+1)/2 + num1 // 78-55 =23+10 = 33
    console.log(result)
}



sumOfNumersinGivenRange(12,15)
sumOfNumersinGivenRangeFormula(10,12)