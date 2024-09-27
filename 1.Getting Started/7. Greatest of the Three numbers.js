// Find the Greatest of the Three Numbers in Javascript
// Given three integers num1, num2 and num3 as inputs. The objective is to write a code to Find the Greatest of the Three Numbers in Java Language. To do so we’ll check the numbers with each other and print the largest of them all.
 
// Example
// Input : num1 = 12 num2 = 9 num3 = 14
// Output : 14

function GreatestofThreeNumbers(n1,n2,n3){
    if(n1 >= n2 && n1 >= n3){
        console.log(n1, 'is Greater of other Two number');
    }else if(n2 >= n1 && n2 >= n3){
        console.log(n2, 'is Greater of Two');
    }else{
        console.log(n3, ' is Greater of two')
    }
}
function GreatestofThreeNumbersTernatory(n1,n2,n3){
let result = n1>= n2 && n1>=n3 ? n1 :(n3>= n2 && n3>=n2 ? n3 : n2) 
console.log(result , 'is Greatest')
}
GreatestofThreeNumbers(100,12,13)
GreatestofThreeNumbersTernatory(10,120,13)