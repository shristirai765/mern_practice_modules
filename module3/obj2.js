
const avgSalary = (arr)=>{

    if(arr.length === 0){
        return 0;
    }else{
        const sum = arr.reduce((sum, val)=>{
            return sum + val.salary;
        },0)
        return (sum/arr.length).toFixed(2);
    }
}

console.log(avgSalary([{salary: 3000}, {salary: 6000}]));