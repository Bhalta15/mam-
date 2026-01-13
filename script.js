const correctWord = "CHUBACOS";

let currentWord = "";
let selectedLetters = [];
let remainingLetters = ["C","A","S","U","H","O","C","B"];

const wordBox = document.getElementById("wordBox");
const lettersDiv = document.querySelector(".letters");
const message = document.getElementById("message");

/* Renderiza botones */
function renderLetters() {
    lettersDiv.innerHTML = "";

    remainingLetters.forEach((letter, index) => {
        const btn = document.createElement("button");
        btn.textContent = letter;
        btn.onclick = () => addLetter(letter, index);
        lettersDiv.appendChild(btn);
    });
}

/* Agregar letra */
function addLetter(letter, index) {
    selectedLetters.push(letter);
    remainingLetters.splice(index, 1);

    currentWord = selectedLetters.join("");
    wordBox.textContent = currentWord;

    message.textContent = "";

    if (currentWord.length === correctWord.length) {
        checkWord();
    }

    renderLetters();
}

/* Borrar SOLO una letra */
function clearWord() {
    if (selectedLetters.length === 0) return;

    const lastLetter = selectedLetters.pop();
    remainingLetters.push(lastLetter);

    currentWord = selectedLetters.join("");
    wordBox.textContent = currentWord;
    message.textContent = "";

    renderLetters();
}

/* Validar palabra */
function checkWord() {
    if (currentWord === correctWord) {
        message.style.color = "#2ecc71";
        message.textContent = "💖 Bienvenida mamá 💖";

        setTimeout(() => {
            window.location.href = "felicidades.html";
        }, 1200);
    } else {
        message.style.color = "#e74c3c";
        message.textContent = "Intenta de nuevo 🌸";
    }
}

/* Inicial */
renderLetters();










const music = document.getElementById("bgMusic");

/* Iniciar música solo una vez */
function startMusic() {
    if (!localStorage.getItem("musicStarted")) {
        music.volume = 0.4;
        music.play();
        localStorage.setItem("musicStarted", "true");
    }
}

/* Si ya estaba iniciada, seguir */
window.addEventListener("load", () => {
    if (localStorage.getItem("musicStarted")) {
        music.volume = 0.4;
        music.play();
    }
});

/* Ligar a interacción */
document.addEventListener("click", startMusic, { once: true });
