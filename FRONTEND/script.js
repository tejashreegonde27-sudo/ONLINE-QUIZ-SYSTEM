let questions = [];
let current = 0;

// Fetch questions from backend
fetch("http://localhost:8080/questions")
    .then(response => response.json())
    .then(data => {
        questions = data;
        loadQuestion();
    })
    .catch(error => {
        console.log("Error:", error);
    });

function loadQuestion() {
    if (questions.length === 0) return;

    let q = questions[current];

    document.getElementById("question").innerText = q.question;

    document.getElementById("options").innerHTML = `
        <button>${q.optionA}</button><br><br>
        <button>${q.optionB}</button><br><br>
        <button>${q.optionC}</button><br><br>
        <button>${q.optionD}</button>
    `;
}

function nextQuestion() {
    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        document.body.innerHTML = "<h1>Quiz Finished</h1>";
    }
}