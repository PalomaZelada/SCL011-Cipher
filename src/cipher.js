window.cipher = {
  encode: (text, number) => {
    let mssgeFinal=""
for(i=0; i<text.length; i++){
let codeAscii= text.charCodeAt(i);
console.log(text[i]);
//separar
let result1=(codeAscii - 65 + number)%26 + 65;
;
}
console.log(result1)
mssgeFinal += String.fromCharCode(result1);

} return mssgeFinal
  },

  decode: (text, number) => {
let mssgeFinal=""
for(i=0; i<text.length; i++){
  let codeAscii=text.charCodeAt(i);
  console.log(text[i]);
  let result2=(codeAscii - 90 - number)%26 + 90;
  console.log(result2)
  mssgeFinal +=String.fromCharCode(result2);
} return mssgeFinal
},
};
