window.cipher = {
  encode: (text, number) => {
    let mssgeFinal=""
for(i=0; i<text.length; i++){
let codeAscii= text.charCodeAt(i);
let result1=(codeAscii - 65 + number)%26 + 65;
mssgeFinal += String.fromCharCode(result1);

} return mssgeFinal
  },

  decode: (text, number) => {
let mssgeFinal=""
for(i=0; i<text.length; i++){
  let codeAscii=text.charCodeAt(i);
  let result2=(codeAscii - 90 - number)%26 + 90;
  mssgeFinal +=String.fromCharCode(result2);
} return mssgeFinal
},
};
