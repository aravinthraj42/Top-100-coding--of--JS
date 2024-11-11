// Frequency of Element in Javascript

// {10, 30, 10, 20, 10, 20, 30, 10};
// 10 occurs 4 times

// 30 occurs 2 times

// 20 occurs 2 times


function sortFrequency(arr){
    let n = arr.length;
     arr.sort((a,b) => (a-b))
    for(let i =0; i<n; i++){
        let count = 1 ;

        while(i < n-1 && arr[i] === arr[i+1]){
            i++
          count++
        }
        console.log(arr[i],'Occurs -', count, 'times')
    }

}


sortFrequency([10, 30, 10, 20, 10, 20, 30, 10, 5])