const trivia = [
    {
        question: "The Rolling Stones have sold how many records worldwide?",
        choices: ["180 Million", "240 Million", "340 Million", "400 Million"],
        answer: "240 Million"
    },
    {
        question: "The Moody Blues began their career in 1964 in Birmingham, England. Their first hit song, 'Go Now', featured what lead singer who would later become a member of Paul McCartney and Wings?",
        choices: ["One", "Two", "Three", "Four"],
        answer: "Three"
    },
    {
        question: "When was AC/DC formed?",
        choices: ["1969", "1970", "1971", "1973"],
        answer: "1973"
    },
    {
        question: "What is the capital of Japan?",
        choices: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "How many bones are in the adult human body?",
        choices: ["196", "206", "216", "226"],
        answer: "206"
    }
];

let currentTrivia;

function getTrivia() {
    const randomIndex = Math.floor(Math.random() * trivia.length);
    currentTrivia = trivia[randomIndex];

    document.getElementById("question").textContent = currentTrivia.question;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    currentTrivia.choices.forEach(choice => {
        const label = document.createElement("label");

        label.innerHTML = `
            <input type="radio" name="answer" value="${choice}">
            ${choice}
        `;

        choicesContainer.appendChild(label);
        choicesContainer.appendChild(document.createElement("br"));
    });

    document.getElementById("result").textContent = "";
}

function confirmAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        document.getElementById("result").textContent = "Please select an answer!";
        return;
    }

    if (selected.value === currentTrivia.answer) {
        document.getElementById("result").textContent = "Correct! 🎉";
    } else {
        document.getElementById("result").textContent =
            "Incorrect! The correct answer is " + currentTrivia.answer;
    }
}
