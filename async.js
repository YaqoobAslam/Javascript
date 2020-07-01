

function resolveAfter2Seconds(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('resolved')
        },2000);
    });
}

const { concatSeries } = require("async");

const { reject, compose } = require("async")

async function asyncCall(){
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//-------------------------------------------------------

//Async function in which no need to wait for specific chunk async function execute next chunk. 
const fs = require('fs');
fs.readFile(__dirname + '/read.txt','utf8',(err,res) =>{
     if(err) throw err;
     console.log(res.toString());
})

console.log('File Closed!');

//-------------------------------------------------------
//synchronous function
const fs = require('fs');
const { resolve } = require("path");
try{
     const data = fs.readFileSync(__dirname + '/read.txt','utf8');
     console.log(data.toString());
}
catch(e){
     console.log(e)
}
console.log("File Readed Successfully!");
//--------------------------------------------------------

//Functions are in stack form

function message(){
     console.log("Welcome to Message")
};
(function(){
     console.log("welcome to Annonymous")
})();
var myFunc = function(){
     console.log("Welcome to Variable")
}
message();
myFunc();

//-------------------------------------------------------

//Callback Function

function message(age, callback){
     if(age >=20 && age <50){
          callback(true);
     }
     else{
          callback(false);
     }
}
message(19,function(check){
     if(check){
          console.log("You are Allowed!");
     }
     else{
          console.log("You are not Allowed!");
     }

})

//-------------------------------------------------------

function resolveAfter2Seconds(){
     return new Promise(resolve =>{
          setTimeout(()=>{
               resolve('resolve');
          },2000);
     });
}


async function asyncCall(){
     console.log('calling');
     const result = await resolveAfter2Seconds();
     console.log(result);
}

asyncCall();

//--------------------------------------------------------
function foo(){
     return Promise.resolve(1).then(()=>undefined)
}

//--------------------------------------------------------
async function foo(){
     const result1 = await new Promise((resolve)=> setTimeout(()=> resolve('1')))
     const result2 = await new Promise((resolve)=>setTimeout(()=> resolve('2')))
}

foo()
//--------------------------------------------------------
async function foo(){
     const p1 = new Promise((resolve)=>setTimeout(()=> resolve('1'),1000))
     const p2 = new Promise((_,reject)=> setTimeout(()=>reject('2'),500))
     const results = [await p1,await p2]
}
foo().catch(()=>{})
//--------------------------------------------------------

function resolveAfter2Seconds(){
     console.log("starting slow promise")
     return new Promise(resolve =>{
          setTimeout(function(){
               resolve("slow")
               console.log("slow promise is done")
          },2000)
     })
}

function resolveAfter2Seconds(){
     console.log("starting fast promise")
     return new Promise(resolve =>{
          setTimeout(function(){
               resolve("fast")
               console.log("fast promise is done")
          },1000)
     })
}

async function sequentialStart(){
     console.log('==SEQUENTIAL START==')
     const slow = await resolveAfter2Seconds()
     console.log(slow)

     const fast = await resolveAfter1Seconds()
     console.log(fast)
}

async function concurrentStart(){
     console.log('==CONCURRENT START with await');
     const slow = resolveAfter2Seconds()
     const fast = resolveAfter1Seconds()

     console.log(await slow)
     console.log(await fast)

}

function concurrentPromise(){
     console.log('==CONCURRENT START with Promise.all==')
     return Promise.all([resolveAfter2Seconds(),resolveAfter1Seconds()]).then((message)=>{
          console.log(message[0])
          console.log(message[1])
     })
}

async function parallel(){
     console.log('==PARALLEL with await Promise.all==')
     
     await Promise.all([
          (async()=>console.log(await resolveAfter2Seconds()))(),
          (async()=>console.log(await resolveAfter1Seconds()))()
     ])

}

sequentialStart()
setTimeout(concurrentStart, 4000)
setTimeout(concurrentPromise,7000)
setTimeout(parallel,10000)
//------------------------------------------------

function getProcessedData(url){
     return downloadData(url)
     .catch(e =>{
          return downloadFallbackData(url)
     })
     .then(v =>{
          return getProcessDataInWorker(v)
     })
}
//-------------------------------------------------

async function getProcessedData(url){
     let v
     try{
          v=await downloadData(url)
     }catch(e){
          v = await downloadFallbackData(url)
     }
     return getProcessDataInWorker(v)
}
//-------------------------------------------------
async function getProcessedData(url){
     let v
     try{
          v = await downloadData(url)
     }catch(e){
          v = await downloadFallbackData(url)
     }
     try{
          return await pocessDataInWorker(v)
     }catch(e){
          return null
     }
}

//-------------------------------------------------

async function harry(){
     console.log("Inside the harry function")
     const response = await fetch('https://api.github.com/users');
     console.log('Before response');
     const users = await response.json();
     console.log('user resolved')
     return users;

     // return "harry";
}

console.log("Before calling harry")
let a = harry();
console.log("After calling harry")
console.log(a);
a.then(data =>console.log(data))
console.log("Last line of this file")

//-------------------------------------------------