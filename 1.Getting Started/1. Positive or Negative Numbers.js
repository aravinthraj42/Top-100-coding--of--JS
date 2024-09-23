// function positiveornegative(num){
// if(num > 0){
// console.log(`Given Number ${num} is Positive`);
// }else if(num < 0){
//     console.log(`Given Number ${num} is Negative`);
// }else{
//     console.log(`Given Number ${num} is Zero`);
// }
// }

// function positiveornegative(num){
//     if(num >= 0){
//         if(num === 0){
//             console.log(`Given Number ${num} is Zero`);
//         } else if(num > 0){
//             console.log(`Given Number ${num} is Positive`);
//         }

//     }else (num < 0){
//         console.log(`Given Number ${num} is Negative`);
//     }
//     }

function positiveornegative(num){
if(num == 0){
console.log(`Given Number ${num} is Zero`)
}else{
const result = (num > 0) ? `Given Number ${num} is Positive` : `Given Number ${num} is Negative` ;
console.log(result)
}
}
positiveornegative(-10)

