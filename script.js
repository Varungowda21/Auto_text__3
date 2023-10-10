const container1=document.querySelector(".container");
const careers=['Varun Gowda K','Web developer','Teacher','Youtuber'];
// function 
let careerIndex=0
let characterIndex=0;
updatetext();
function updatetext(){
    characterIndex++
container1.innerHTML= `<h1>I am ${careers[careerIndex].slice(0,1)==="V"?"":"a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>`;

if(characterIndex===careers[careerIndex].length){
    careerIndex++
    characterIndex=0
}
setTimeout(updatetext,400);
}