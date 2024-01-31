let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer ist der Gründer von Microsoft?",
        "answer_1": "Steve Jobs",
        "answer_2": "Bill Gates",
        "answer_3": "Elon Musk",
        "answer_4": "Mark Zuckerberg",
        "right_answer": 2
    },
    {
        "question": "Was bedeutet die Abkürzung 'HTML'?",
        "answer_1": "HyperText Markup Language",
        "answer_2": "HighTech MultiLanguage",
        "answer_3": "Home Tool Management Language",
        "answer_4": "Hyperlink and Text Markup Language",
        "right_answer": 1
    },
    {
        "question": "Welche Programmiersprache wurde von Guido van Rossum entwickelt?",
        "answer_1": "Java",
        "answer_2": "Python",
        "answer_3": "C++",
        "answer_4": "Ruby",
        "right_answer": 2
    },
    {
        "question": "Was ist eine CPU?",
        "answer_1": "Central Processing Unit",
        "answer_2": "Computer Personal Unit",
        "answer_3": "Central Process Unit",
        "answer_4": "Central Peripheral Unit",
        "right_answer": 1
    },
    {
        "question": "Welches Betriebssystem wurde von Linus Torvalds entwickelt?",
        "answer_1": "Windows",
        "answer_2": "macOS",
        "answer_3": "Linux",
        "answer_4": "Android",
        "right_answer": 3
    },
    {
        "question": "Was ist Git in der Softwareentwicklung?",
        "answer_1": "Ein grafisches Design-Tool",
        "answer_2": "Ein Versionskontrollsystem",
        "answer_3": "Ein Datenbankmanagementsystem",
        "answer_4": "Ein Webbrowser",
        "right_answer": 2
    },
    {
        "question": "Welche Firma hat den Java-Programmierstandard erstellt?",
        "answer_1": "Microsoft",
        "answer_2": "IBM",
        "answer_3": "Oracle",
        "answer_4": "Apple",
        "right_answer": 3
    },
    {
        "question": "Was ist ein 'Open Source'-Softwareprojekt?",
        "answer_1": "Ein Projekt ohne jeglichen Code",
        "answer_2": "Ein Projekt mit freiem Quellcode",
        "answer_3": "Ein geschlossenes Softwareprojekt",
        "answer_4": "Ein Projekt ohne Lizenz",
        "right_answer": 2
    },
    {
        "question": "Was ist der Zweck von SQL in der Datenbankverwaltung?",
        "answer_1": "Software Qualification Language",
        "answer_2": "Structured Query Language",
        "answer_3": "System Quality Language",
        "answer_4": "Standardized Question Language",
        "right_answer": 2
    }
];
let currentQuestion = 0;

function init() {
    let input = document.getElementById('numberOfQuestions');
    let number = questions.length;
    input.innerHTML = `${number}`;
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
}

function showAnswerOptions() {
    document.getElementById('answer_1').innerHTML = questions[0]['answer_1'];
    document.getElementById('answer_2').innerHTML = questions[0]['answer_2'];
    document.getElementById('answer_3').innerHTML = questions[0]['answer_3'];
    document.getElementById('answer_4').innerHTML = questions[0]['answer_4'];
}

