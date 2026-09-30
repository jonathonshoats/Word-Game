let selectedCategory = "";
let selectedDifficulty = "";

function selectCategory(category) {
    selectedCategory = category;
    updateSelection();
}

function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    updateSelection();
}

function updateSelection() {
    document.getElementById("selection").innerText =
        "Category: " + selectedCategory +
        " | Difficulty: " + selectedDifficulty;
}

function startGame() {

    if (!selectedCategory || !selectedDifficulty) {
        alert("Choose a category and difficulty first.");
        return;
    }

    localStorage.setItem("category", selectedCategory);
    localStorage.setItem("difficulty", selectedDifficulty);

    window.location.href = "game.html";
}

const words = {
    games: {
        easy: ["MINE", "SONY", "DOOM"],
        medium: ["MARIO", "ZELDA", "SONIC"],
        hard: ["FORTNITE", "MINECRAFT", "OVERWATCH"]
    },

    animals: {
        easy: ["LION", "BEAR", "WOLF"],
        medium: ["TIGER", "PANDA", "HORSE"],
        hard: ["ELEPHANT", "CROCODILE", "KANGAROO"]
    },

    geography: {
        easy: ["ASIA", "PERU", "CHAD"],
        medium: ["INDIA", "CHINA", "JAPAN"],
        hard: ["AUSTRALIA", "ARGENTINA", "MONGOLIA"]
    }
};

if (window.location.pathname.includes("game.html")) {

    const category = localStorage.getItem("category");
    const difficulty = localStorage.getItem("difficulty");

    document.getElementById("categoryDisplay").innerText =
        category.toUpperCase() +
        " • " +
        difficulty.toUpperCase();

    const wordList = words[category][difficulty];

    const answer =
        wordList[Math.floor(Math.random() * wordList.length)];

    const board = document.getElementById("board");

    for (let i = 0; i < answer.length; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        board.appendChild(tile);
    }

    document.getElementById("debugWord").innerText =
        "Answer: " + answer;
}
