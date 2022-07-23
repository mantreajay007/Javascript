
// const promise1 = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise 1 Rejected");
//     }, 1000);
// });

// const promise2 = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise 2 Rejected");
//     }, 950);
// });

// const promise3 = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3 Resolved");
//     }, 1100);
// });


// const promiseAll = async () => {
//     const initialTime = new Date();

//     try {
//         const combinedResponse = await Promise.allSettled([promise1(), promise2(), promise3()]);
//         console.log("Promise.all Resolved");
//         console.log(combinedResponse);
//     } catch (e) {
//         console.log("Promise.all Rejected");
//         console.log(e);
//     }

//     const completionTime = new Date();
//     console.log(`Total time taken ${completionTime - initialTime} \n\n`);
// }


// promiseAll();


const obj1 = {
    firstName: "Akshay",
    lastName: "Khurana"
}

console.log(obj1?.phones?.country.india); 
