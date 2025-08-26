let promise=new Promise((resolve,reject)=>
{
    if(5<3){
        resolve("Success");
    }
    else{
        reject("fail");

    }
});
promise.then((msg)=>{
    console.log(msg);
    
});
promise.catch((msg)=>{
    console.log(msg);
});