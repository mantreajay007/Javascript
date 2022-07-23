// Undefined vs Not Defined

//console.log(a);
//console.log(b);

const a = "Akshay";
console.log(a);

//printMyCity();

// let printMyCity = function () {
//     console.log("Delhi");
// }

// let age = "20A";
// console.log(typeof age);

// console.log(+ age);
// console.log(typeof + age); // + -> Unary Operator


// function abc() {
//     // Start TDZ for x.
//     console.log(x);
//     let x = "inner value"; // Declaration ends TDZ for x.
//   }

//   abc();


  // function xyz()
  // {
  //   {
  //       // TDZ starts at beginning of scope
  //       const func = () => console.log(letVar); // OK
    
  //       // Within the TDZ letVar access throws `ReferenceError`
    
  //       //let letVar = 3; // End of TDZ (for letVar)
  //       func(); // Called outside TDZ!
  //       let letVar = 3; 
  //   }
  // }

  // xyz();


  let obj1={class:"first"};

  console.log(obj1.class);
  obj1=null;
  console.log(typeof(NaN));
