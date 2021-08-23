

function getStarterType(){
let h4 = document.createElement('h4');

let types = ['Grass','Fire','Water'];

let random = Math.floor(Math.random() * types.length);

console.log(types[random]);
h4.innerHTML = types[random];
switch(types[random]){
    case 'Grass': h4.style.color = 'green'; break;
    case 'Water': h4.style.color = 'blue'; break;
    case 'Fire': h4.style.color = 'red'; break;
    default: break;
    
}
return h4;
}
function addEle(){
    document.getElementById('start').appendChild(getStarterType())
}
document.getElementById('butt').onclick=setTimeout(addEle,5000);