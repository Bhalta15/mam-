
const puzzle = document.getElementById("puzzle");
const success = document.getElementById("success");
const btn = document.getElementById("continueBtn");
const title = document.getElementById("title");


const images = [
    "img/puzzle1.jpg",
    "img/puzzle2.jpg",
    "img/puzzle3.jpg"
];

let currentPuzzle = 0;
let pieces = [];
let selected = null;

function initPuzzle() {
    pieces = [];
    selected = null;
    success.textContent = "";
    btn.style.display = "none";

    title.textContent = `🧩 Rompecabeza ${currentPuzzle + 1} de recuerdos 🧩`;

    for (let i = 0; i < 9; i++) pieces.push(i);
    pieces.sort(() => Math.random() - 0.5);

    render();
}

function render() {
    puzzle.innerHTML = "";

    const size = puzzle.clientWidth / 3; // calcular una sola vez

    pieces.forEach((pos, i) => {
        const div = document.createElement("div");
        div.className = "piece";
        div.style.backgroundImage = `url(${images[currentPuzzle]})`;

        div.style.backgroundPosition =
            `${-(pos % 3) * size}px ${-Math.floor(pos / 3) * size}px`;

        div.style.backgroundSize =
            `${puzzle.clientWidth}px ${puzzle.clientHeight}px`;

        div.onclick = () => select(i);
        puzzle.appendChild(div);
    });
}


function select(index) {
    if (selected === null) {
        selected = index;
    } else {
        [pieces[selected], pieces[index]] = [pieces[index], pieces[selected]];
        selected = null;
        render();
        checkWin();
    }
}

function checkWin() {
    if (pieces.every((v, i) => v === i)) {
        success.textContent = "💖 ¡Muy bien, Mami eres muy buena! 💖";
        btn.style.display = "inline-block";
    }
}

function nextPuzzle() {
    currentPuzzle++;
    if (currentPuzzle < images.length) {
        initPuzzle();
    } else {
        window.location.href = "album.html";
    }
}

initPuzzle();
