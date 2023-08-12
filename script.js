const changeColorBtn = document.getElementById("changeColorBtn");
const body = document.body;

const colors = ["#FF5733", "#FFBD33", "#33FF57", "#33C4FF", "#7B33FF"];
let currentColorIndex = 0;

changeColorBtn.addEventListener("click", () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[currentColorIndex];
});
