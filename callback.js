function fetchData(callback){
    setTimeout(()=>{
      const user = {
        name: "priyank",
        age: 34,
        gender:'male'
      }
      callback(user,null)
    },2000)
}

fetchData((data,error)=>{
    if(error){
        console.log("error");
    }else{
        console.log(data);
    }
})

//problem of callback hell or pyramid of doom
