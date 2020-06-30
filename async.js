

function resolveAfter2Seconds(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('resolved')
        },2000);
    });
}

const { reject } = require("async")

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