

const year = (yr)=>{
    return ((yr%4 === 0 && yr%100 !==0) || (yr%400 === 0))

};
console.log(year(2100))