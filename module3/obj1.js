  
const highestPaid = (arr)=>{
    let currentMax = arr[0];
    // console.log(currentMax)
    for(let i = 1; i< arr.length; i++){
        if(currentMax.salary < arr[i].salary){
            currentMax= arr[i];
        }
    }
    return currentMax;
}

console.log(highestPaid([{
    name : "A",
    salary: 9000
},
{
    name: "B",
    salary: 9000
}]));

