
// const adult = (arr)=>{
//     const res = arr.filter((obj)=>{
//         if(obj.age>18){
//             return obj;
//         }
//         return;
//     })
//     return res;
// }

const adult = (arr)=>{
    let res = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i].age >= 18){
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(adult([{name: 'A', age: 16}, {name: 'B', age: 22}]));