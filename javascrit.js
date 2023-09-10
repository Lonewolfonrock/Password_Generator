

let length=8;
let mixedArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                 'u', 'v', 'w', 'x', 'y', 'z',
                 '!', '@', '#', '$', '%', '&', '*', '-', '+', '_'];

                 
function generatedRandom(){

    let newarr1="";
    let newarr2="";
    let newarr3="";
    let newarr4="";
    length = document.getElementById("passwordLength").value

    
    if(length<=19){
        
    for(let i=0; i<length; i++){
        newarr1+=mixedArray[Math.floor((Math.random())*mixedArray.length)]
        newarr2+=mixedArray[Math.floor((Math.random())*mixedArray.length)]
        newarr3+=mixedArray[Math.floor((Math.random())*mixedArray.length)]
        newarr4+=mixedArray[Math.floor((Math.random())*mixedArray.length)]
    }
    document.querySelector("#p1").textContent=newarr1;
    document.querySelector("#p2").textContent=newarr2;
    document.querySelector("#p3").textContent=newarr3;
    document.querySelector("#p4").textContent=newarr4;
    }

    else{
        document.querySelector("#p1").textContent="You need to buy premium subscription😀😀😀"
    document.querySelector("#p2").textContent="You need to buy premium subscription🥺🥺🥺"
    document.querySelector("#p3").textContent="You need to buy premium subscription😉😉😉"
    document.querySelector("#p4").textContent="You need to buy premium subscription🫡🫡🫡"
    }

}
