/* Find the Greatest of the Two Numbers in Javascript
Given two integer inputs N1 and N2, the objective is to write a code to Find the Greatest of the Two Numbers in Java. In order to do so we’ll compare the numbers using if-else statements.
 
Example
Input : num1 = 12 and num2 = 3
Output : 12 */

//Method:1 If-Else Condition
function GreatestofTwoNumbers(num1,num2){
    if(num1 === num2){
        console.log('Both are Equal')
    }else if(num1 > num2){
        console.log(`${num1} is Greater than ${num2}`)
    }else{
        console.log(`${num2} is Greater than ${num1}`)
    }
}
// Method 2: ternatory Operators
function GreatestofTwoNumbersTernatory(num1, num2){
    if(num1 === num2){
        console.log('Both are Equal')
    }else{
    let result =  num1>num2 ? num1 : num2;
    console.log(result, 'is largest')
    }
}
// Method 3: math Function
function GreatestofTwoNumbersMathFunc(num1, num2){
    if(num1 === num2){
        console.log('Both are Equal')
    }else{ 
   let result = Math.max(num1,num2);
    console.log(result, 'is Largest');
    }
    }

GreatestofTwoNumbers(2,12)
GreatestofTwoNumbersTernatory(11,10)
GreatestofTwoNumbersMathFunc(150, 50)