
const arr = [10,45,2,99,56];
let max = arr[0];
 for(let i = 1; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
    
 }
 console.log(max)