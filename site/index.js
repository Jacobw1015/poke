

function getStarterType(){
    let h4 = document.createElement('h4');
    
    let types = ['Beef','Chicken','Pork'];
    
    let random = Math.floor(Math.random() * types.length);
    
    console.log(types[random]);
    h4.innerHTML = types[random];
    switch(types[random]){
        case 'Beef': h4.style.color = 'green'; break;
        case 'Chicken': h4.style.color = 'blue'; break;
        case 'Pork': h4.style.color = 'red'; break;
        default: break;
        
    }
    return h4;
    }
    function addEle(){
        document.getElementById('start').appendChild(getStarterType())
    }
    addEle();