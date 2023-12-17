const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let drawing = false;
let erasing = false;

canvas.addEventListener("mousedown", () => {
    drawing = true;
    ctx.beginPath();
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.closePath();
});

canvas.addEventListener("mousemove", draw);

document.getElementById("penBtn").addEventListener("click", () => {
    erasing = false;
    canvas.style.cursor = "crosshair";
});

document.getElementById("eraserBtn").addEventListener("click", () => {
    erasing = true;
    canvas.style.cursor = "default";
});

document.getElementById("clearBtn").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = erasing ? 10 : 2;
    ctx.strokeStyle = erasing ? "#f0f0f0" : "#000";

    ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
}
