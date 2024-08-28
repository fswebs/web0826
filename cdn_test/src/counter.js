// heart counter number

const heartBtn = document.querySelectorAll("button");
for(const x of heartBtn){
    // x.innerText = 0;
    x.onclick = ()=>{
        x.innerText = parseInt(x.innerText) + 1;
    };
}