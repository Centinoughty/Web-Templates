document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
})

const button = document.querySelector("button");

function animation() {
    button.addEventListener("mousedown", function () {
        button.style.boxShadow = "none";
        button.style.backgroundPosition = "down -10px";
        setTimeout(function () {
            button.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
            button.style.backgroundPosition = "up -10px";
        }    
        , 50);
    })
}
