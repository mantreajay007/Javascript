
function display(val){

    document.getElementById('result').value += val
    // document.getElementById('result1').value += val


    return val

}


// function display1(val){

//     document.getElementById('result1').value += val

//     return val

// }

function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value =y
// console.log(Number(x));
    return y

}

function clearScreen(){

    document.getElementById('result').value = ''

}


