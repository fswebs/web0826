// heart counter number

const heartBtn = document.querySelectorAll("button");
<<<<<<< HEAD:cdn_test/src/counter.js
for(const x of heartBtn){
    // x.innerText = 0;
    x.onclick = ()=>{
        x.innerText = parseInt(x.innerText) + 1;
=======
for (const x of heartBtn) {
    x.onclick = () => {
        console.log(x.innerText);
        if (parseInt(x.innerText) > 998 || x.innerText.indexOf("k") > 0) {
            x.innerText = "1k";
        } else {
            x.innerText = parseInt(x.innerText) + 1;
        }
        // heart color change
        x.classList.toggle("on");
        setInterval(() => {
            x.classList.remove("on");
        }, 1000);
>>>>>>> 8c6f7afb478dffdca90f756c6591322996b121b6:cdn_v1/src/counter.js
    };
}