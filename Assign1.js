console.log('Hello World');
let m_height=1.7;
let j_height=1.7;
let m_mass=60;
let j_mass=65;

let m_BMI=m_mass/(m_height*m_height);

let j_BMI=j_mass/(j_height*j_height);

console.log('m_BMI='+m_BMI);
console.log('j_BMI='+j_BMI);


let markHigherBMI= true;

markHigherBMI = m_BMI>j_BMI;

console.log("mark' BMI is Higher than john =",markHigherBMI);

var a="ajay";
console.log(`${a}`);

a =2+"3";
console.log(a);

var a = "Scaler"; 
var result = a.substring(2, 4);
 document.write(result);


 var x=12; var y=8; 
 var res=eval("x+y"); 
 document.write(res);



 /*(function()
 { 
    setTimeout(()=> console.log(1),2000); 
    console.log(2); 
    setTimeout(()=> console.log(3),0); 
    console.log(4);
 })();

*/

 (function(a){
     return (function(){
         console.log(a); 
         a = 6; })() }
         )(21);



         function solve(arr, rotations){ if(rotations == 0) return arr; 
            for(let i = 0; i < rotations; i++){ let element = arr.pop(); arr.unshift(element); } return arr; } // solve([44, 1, 22, 111], 5);


          //  document.getElementById("example").innerHTML=Math.sqrt(81);

            var a = 1; var b = 0; while (a <= 3) { a++; b += a * 2; print(b);}