

const auth = (Age, Status)=>{
    if(Age >= 18 && (Status === 'active' || Status === 'admin')){
        console.log("true (Granted)");
    }
    else
        console.log("false");
}

auth(18, "active");