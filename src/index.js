//boton cifrar
const btnCipher = document.getElementById("cipher");
//eventListener
btnCipher.addEventListener('click', () => {
    let text= document.getElementById("box1").value.toUpperCase();
    let number= parseInt(document.getElementById("number1").value);
    //imprimir en box2
    document.getElementById("box2").innerHTML = cipher.encode(text,number);
})

const btnDecipher = document.getElementById("decipher");
btnDecipher.addEventListener('click', () =>{
    let text= document.getElementById("box1").value;
    let number=parseInt(document.getElementById("number1").value);
    document.getElementById("box2").innerHTML = cipher.decode(text,number);
})

//boton copiar texto
const btnCopy = document.getElementById("copiar");
btnCopy.addEventListener('click', () => {
//llamar texto a copiar
const copyText = document.getElementById("box2");
let range= document.createRange();
range.selectNodeContents(copyText);
window.getSelection().addRange(range);
let copy= document.execCommand("copy");
})