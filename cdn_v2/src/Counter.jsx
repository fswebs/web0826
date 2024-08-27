import Card from "./card";

function Counter(){
    return (
        const btn = <button></button>
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
            };
        }
    );
}
