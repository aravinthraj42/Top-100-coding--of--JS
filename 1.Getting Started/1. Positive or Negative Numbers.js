function positiveornegative(num){
if(num > 0){
console.log(`Given Number ${num} is Positive`);
}else if(num < 0){
    console.log(`Given Number ${num} is Negative`);
}else{
    console.log(`Given Number ${num} is Zero`);
}
}

function positiveornegativeNested(num){
    if(num >= 0){
        if(num === 0){
            console.log(`Given Number ${num} is Zero`);
        } else if(num > 0){
            console.log(`Given Number ${num} is Positive`);
        }

    }else{
        console.log(`Given Number ${num} is Negative`);
    }
    }

function positiveornegativeTernary(num){
if(num == 0){
console.log(`Given Number ${num} is Zero`)
}else{
const result = (num > 0) ? `Given Number ${num} is Positive` : `Given Number ${num} is Negative` ;
console.log(result)
}
}
positiveornegative(-10)
positiveornegativeNested(0)
positiveornegativeTernary(80)


