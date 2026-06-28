//? Determine whether a student passes or fails an academic term based on multiple core conditions
//[38,90,90]
const numbers = [42,45,70]

 const added = numbers.reduce((sum,marks)=>{
        sum += marks;
        return sum;
    });
const avg = added/numbers.length;
// console.log(avg)

const indSubject = numbers.every(num=> num>=40);

if(indSubject === true && avg>=50){
    console.log("true (Passed)")
}
else
    console.log("false (failed inidvidual subject");

