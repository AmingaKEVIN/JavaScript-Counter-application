const docspan = document.getElementById('counter')

let count = 0
function Increment(){
    count++;
    docspan.innerHTML=count;

}
function decrement(){
    count--;
    docspan.innerHTML= count;
}

function Reset(){
    count=0;
    docspan.innerHTML=count;
}