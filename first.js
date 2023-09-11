const display = document.querySelector("#dis")
const numbers = document.querySelector(".numb")
const symbols = document.querySelector(".arith")
const clear = document.querySelector("#clear")
const zero = document.getElementById("b0")
const one = document.getElementById("b1")
const two = document.getElementById("b2")
const three = document.getElementById("b3")
const four = document.getElementById("b4")
const five = document.getElementById("b5")
const six = document.getElementById("b6")
const seven = document.getElementById("b7")
const eight = document.getElementById("b8")
const nine = document.getElementById("b9")
const reactCalc=document.getElementById("discalc")

show();
cleared();
 addition();
 subtraction();
 division();
 multiplication();
 calculate();

    function show (){
        document.getElementById("b0").onclick = function(){
            display.textContent=0
            fontChange ();
            reactCalculate();
        }
        document.getElementById("b1").onclick = function(){
            display.textContent +=1
            fontChange ();
            reactCalculate();
        }
        document.getElementById("b2").onclick = function(){
            display.textContent +=2
            fontChange ();
            reactCalculate();
        }
        document.getElementById("b3").onclick = function(){
            display.textContent +=3
            fontChange ();
            reactCalculate();
        }
        document.getElementById("b4").onclick = function(){
            display.textContent +=4
            fontChange ();
            reactCalculate();
        }
        document.getElementById("b5").onclick = function(){
            display.textContent +=5
            fontChange ();
            reactCalculate();
        }
        document.getElementById("b6").onclick = function(){
            display.textContent +=6
            fontChange (); 
            reactCalculate();
        }
        document.getElementById("b7").onclick = function(){
            display.textContent +=7
            fontChange ();
            reactCalculate();
        }
        document.getElementById("b8").onclick = function(){
            display.textContent +=8
            fontChange ();
            reactCalculate();
        }
        document.getElementById("b9").onclick = function(){
            display.textContent +=9
            fontChange ();
            reactCalculate();
        }
         
}
function cleared(){
     clear.addEventListener("click", ()=>display.textContent= "" ,fontChange ())
     
}

function addition(){ document.getElementById("add").onclick=function(){
    display.textContent+="+"
    fontChange ();
}

}
function subtraction(){ document.getElementById("subtract").onclick=function(){
    display.textContent+= "-"
    fontChange ();
}

}
function division(){ document.getElementById("divide").onclick=function(){
    display.textContent+= "/"
    fontChange ();
}

}
function multiplication(){ document.getElementById("multiply").onclick=function(){
    display.textContent+= "*"
    fontChange ();
}

}
function calculate(){document.getElementById("calculate").onclick= function(){
    try{
    
   const results= eval(display.textContent);
   display.textContent=results;
   console.log(results);
}
catch{
    const results="Error"
    
    
}
   
   
}
}
function fontChange () { 
    const numchar =display.textContent.length
console.log(numchar)
console.log("test")
if(numchar>=7){
    document.getElementById("dis").style.fontSize= (70-(numchar/2 +6)).toString() + "px"
}
else{
    document.getElementById("dis").style.fontSize="70px"
}
}
function reactCalculate(){
    try{
    
   const results= eval(display.textContent);
   reactCalc.textContent=results;
   console.log(results);
}
catch{
    const results="Error"
    reactCalc.textContent=results
}}

function handleKeyPress(event) {
    console.log(event.keyCode)
    if (event.keyCode === 48) { 
        document.getElementById("b0").click()
    }
    if (event.keyCode === 49) { 
        document.getElementById("b1").click()
    }
    if (event.keyCode === 50) { 
        document.getElementById("b2").click()
    }
    if (event.keyCode === 51) { 
        document.getElementById("b3").click()
    }
    if (event.keyCode === 52) { 
        document.getElementById("b4").click()
    }
    if (event.keyCode === 53) { 
        document.getElementById("b5").click()
    }
    if (event.keyCode === 54) { 
        document.getElementById("b6").click()
    }
    if (event.keyCode === 55) { 
        document.getElementById("b7").click()
    }
    if (event.keyCode === 56) { 
        document.getElementById("b8").click()
    }
    if (event.keyCode === 57) { 
        document.getElementById("b9").click()
    }
    if (event.keyCode === 187) { 
        document.getElementById("add").click()
    }
    if (event.keyCode === 189) { 
        document.getElementById("subtract").click()
    }
    if (event.keyCode === 191) { 
        document.getElementById("divide").click()
    }
    if (event.keyCode === 13) { 
        document.getElementById("calculate").click()
    }
    if (event.keyCode === 16) { 
        document.getElementById("multiply").click()
    }
    
       
       
}

document.addEventListener('keydown', handleKeyPress);