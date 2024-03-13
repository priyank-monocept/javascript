/*new Promise((resolve, reject)=>{
    resolve("I am resolved");
    //reject(new Error("This is error"));  //at a time only one will run and second will be ignore automatically.
})
.then((result)=>{
    console.log(result);
    new Promise((resolve, reject)=>{
        resolve("I am nested resolved")
    })
.then((result)=>{
    console.log(result);
})
}).catch((error)=>{
    console.log(error.message);
}) */

/*console.log('start'); 
const promise1 = new Promise((resolve, reject) => {  
    const user = {name:"priyank"}
    console.log(user);
    resolve(user);
});
promise1.then((result)=>{
  console.log(result)  
})
console.log('end');
*/

/*  const promise = new Promise((resolve, reject) => {
    console.log("Promise executor"); // This logs synchronously
    resolve("Resolved value"); // This resolves the promise synchronously //Promise constructor 
});
    console.log("After Promise constructor"); // This also logs synchronously
    promise.then((value) => {
        console.log("Promise resolved with value:", value); // This logs asynchronously
    });
*/

/*async function checkAsync(){
    return 1;
}
const getValue = checkAsync();
console.log(getValue);
*/

/*console.log('start'); 
const promise1 = new Promise((resolve, reject) => {  
  console.log(1)  
  resolve(2)
}) 
promise1.then(res => {  
  console.log(res)
}) 

setTimeout(()=>{
    console.log("test");
},90)
console.log('end');*/

/*console.log('start') 
const fn = () => (new Promise((resolve, reject) => {   
    console.log(1);  
    resolve('success')
})) 
console.log('middle') 
fn().then(res => {  
   console.log(res)
})
 
console.log('end')
*/

/* const promise = new Promise((resolve, reject) => {  
    console.log(1);  
    setTimeout(() => {    
      console.log("timerStart");    
      resolve("success");    
      console.log("timerEnd");  
    }, 0);  
    console.log(2);
  }); 
  promise.then((res) => {  
     console.log(res);
  }); 
  console.log(4); */

 /* const timer1 = setTimeout(() => {  
        console.log('timer1');    
        promise1 = Promise.resolve().then(() => {   
        console.log('promise1')  
    })
  }, 0) 
  const timer2 = setTimeout(() => {  console.log('timer2')}, 0)
*/

/*console.log("start");
const promise1 = Promise.resolve().then(()=>{
    console.log("promise 1");
    const timer2 = setTimeout(()=>{
        console.log("timer2")
    })
});

const timer1 = setTimeout(()=>{
    const user = "priyank";
    console.log("timer1");
    const promise1 = Promise.resolve().then(()=>{
        console.log("promise 2");
    });
},0)

var a=5;
console.log("end");
*/

console.log("Start");
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Inside site timeout timer");
    },1000)
})
console.log("Middle");
setTimeout(()=>{
    new Promise((resolve,reject)=>{
        resolve("I am resolved");
    }).then((result)=>{
        console.log("Then block before");
        console.log(result);
        console.log("Then block after")
    })
},90)
console.log("End")

