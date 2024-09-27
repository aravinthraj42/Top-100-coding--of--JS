// Check Whether or Not the Year is a Leap Year in Java
// We will write Leap Year Program in Java. Given an integer input “year” the objective is to check if the given year is a leap year or not using the conditions for a leap year. Therefore, keeping them in mind we write a code to Check Whether or Not the Year is a Leap Year in Java Language.

// Example
// Input : 2024
// Output: Leap Year

/* Conditions for Leap Year
For any year to be a leap year the following two conditions must be checked. If the year satisfies either of the conditions, it's considered a leap year. Following are the conditions
1. The year must be divisible by 400.
2. The year must be divisible by 4 but not 100 */
//1. Method: if-elseif
function LeapYearOrNot(year){
    if(year % 400 === 0){
        console.log(year, 'is A Leap Year')
    }else if( year % 4 === 0 && year % 100 !== 0){
        console.log(year, 'is a Leap Year');
    }else {
        console.log(year , 'is not a lep Year')
    }
}

// 2. Method: if-else
function LeapYearOrNotelse(year){
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        console.log(year, 'is A Leap Year')
    }else {
        console.log(year , 'is not a lep Year')
    }
}

// 3. Method Tenatory Operator
function LeapYearOrNoteTenatory(year){
    console.log(year % 400 === 0 ? `${year} is Leap year` : 
    ((year % 4 === 0 && year % 100 !== 0) ? `${year} is Leap year` : `${year} is Not Leap year`))
 
}
// 4.Method: Boolean
function LeapYearOrNotBoolean(year){
    let leap = false;
    if(year % 400 === 0){
     leap = true
    }else if( year % 4 === 0 && year % 100 !== 0){
       leap = true
    }
    if(leap){
        console.log(year, 'is Leap Year');
    }else{
        console.log(year, 'not a leap year')
    }
}


LeapYearOrNot(1900)
LeapYearOrNotelse(1896)
LeapYearOrNoteTenatory(1892)
LeapYearOrNotBoolean(1800)