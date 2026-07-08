
const lookup = (arr)=>{
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        obj[arr[i].id]= arr[i];
    }
    return obj;
}

console.log(lookup([{id:'u1', name:'Alice'}]));