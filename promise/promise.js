// var promise = new Promise(function(resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks"
//     if(x === y) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
     
//   promise.
//       then(function () {
//           console.log('Success, You are a GEEK');
//       }).
//       catch(function () {
//           console.log('Some error has occurred');
//       });



var a= new Promise ((resolve,reject)=>{

  let b=0;
  if(b==0)
  {
    resolve();
  }
  else
  {
    reject();
  
  }
})

a.then(()=>{
  console.log("executed successfully");
}).catch(()=>{
console.log("some thing went wrong");
});

// var promise = new Promise(function(resolve, reject) {
//   const x = "geeksforgeeks";
//   const y = "geeksforgeeks"
//   if(x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });
   
// promise.
//     then(()=> {
//         console.log('Success, You are a GEEK');
//     }).
//     catch(function () {
//         console.log('Some error has occurred');
//     });



