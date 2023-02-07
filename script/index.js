let emoji = document.getElementById("myEmoji")

/**
 * @param {any} emoji
 * @returns {CanvasRenderingContext2D}
 */

function createPaper(emoji) {
    return emoji.getContext("2d");
}

let paper = createPaper(emoji);

let circleX = 200;
let currentTime = Date.now();
let omega = 1;

setInterval(() => {
    let delta = Date.now() - currentTime;
    let fps = 1 / (delta / 1000);
    currentTime = Date.now();
    paper.clearRect(0, 0, emoji.width, emoji.height);
    console.log("FPS: " + fps);

    paper.beginPath();
    paper.strokeStyle = "yellow";
    paper.fillStyle = "yellow";
    paper.arc(circleX, 200, 80, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();

    paper.beginPath();
    paper.strokeStyle = "black";
    paper.fillStyle = "black";
    paper.arc(circleX - 30, 175, 10, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();

    paper.beginPath();
    paper.strokeStyle = "black";
    paper.fillStyle = "black";
    paper.arc(circleX + 30, 175, 10, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();

    paper.beginPath();
    paper.strokeStyle = "black";
    paper.fillStyle = "black";
    paper.arc(circleX, 230, 20, 0, 2 * Math.PI);
    paper.stroke();
    paper.fill();
    circleX = 270 + (270 / 2) * Math.cos((omega * currentTime) / 1000 + 0);


}, 1000 / 60);


