var a = document.querySelector("#input")
var b = document.querySelector("#btn")
b.addEventListener("click",function () {
    var r = a.value
    let bb = r.toLocaleLowerCase();
    let f = bb.split("")
    f = f.filter(char => char !== ',' && char !== ' ' && char !== '.' && char !== "'").join("");
    let c = bb.split("").reverse()
    c = c.filter(char => char !== ',' && char !== ' ' && char !== '.' && char !== "'").join("");
    console.log(f);
    if(c === f){// these for all includung special characters and spaces(remove spaces and special chr then check) if you written bb so that check only alphanumeric data

        swal(`Yes You have written Palindrome words ${r}`);
    }
    else{
        swal(`This is not a  Palindrome words ${r}`);

    }
  
})





// let a = "ono"
// let bb = r.toLocaleLowerCase();
// let c = bb.split("").reverse()
// c = c.filter(char => char !== ',' && char !== ' ' && char !== '.' && char !== "'").join("");
// console.log(c);
// console.log(c === bb);

// let b = [...a]
// let r = b.reverse().join("");
// console.log(r === a);