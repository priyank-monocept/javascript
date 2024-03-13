
//callback
/*const fetchData = (callback) =>{
    setTimeout(()=>{
        const data = {name:"priyank",age:23}
        callback(data,null)
    },2000)
}

fetchData((result , error)=>{
    if(result){
    console.log(result);
    }
})
*/

//convert via promise
const order = (type, name) =>{
    return fetch('/api/pizzahub')
    .then((result) => {
        if(result.data){
            return result.data.json()
        }else{
            throw new Error("No shop found")
        }
    })
    .then((result)=>{
        const shopId = result.shopId;
        return fetch(`/api/pizzahub/{shopId}`)
    })
    .then((result) => {
        if(result.data){
            return result.data.json()
        }else{
            throw new Error("No Pizza found")
        }
    })
    .then((result) => {
        //code to validate is pizza
        
    })
    .then((result) => {

    })



}
