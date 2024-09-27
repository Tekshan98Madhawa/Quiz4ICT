const questions = [
    
    {
        question : "Which of the following is considered the first step in problem-solving?",
        answers : [
            {text : "Output", correct: false},
            {text : "Process", correct: false},
            {text : "Input", correct: true},
            {text : "Execution", correct: false},
        ]
    },
    {
        question : "Which programming language is mentioned in the book for learning basic programming concepts?",
        answers : [
            {text : "Python", correct: false},
            {text : "Pascal", correct: true},
            {text : "Java", correct: false},
            {text : "C++", correct: false},
        ]
    },
    {
        question : "In a flowchart, which shape is used to represent a decision?",
        answers : [
            {text : "Rectangle", correct: false},
            {text : "Diamond", correct: true},
            {text : "Circle", correct: false},
            {text : "Oval", correct: false},
        ]
    },
	{
        question : "What is the output of the following problem: Finding the area of a rectangle?",
        answers : [
            {text : "Length + Width", correct: false},
            {text : "Length × Width", correct: true},
            {text : "Length / Width", correct: false},
            {text : "Length - Width", correct: false},
        ]
    },
	{
        question : "Which of the following is not a control structure?",
        answers : [
            {text : "Sequence", correct: false},
            {text : "Selection", correct: false},
            {text : "Repetition", correct: false},
            {text : "Looping", correct: true},
        ]
    },
	{
        question : "What is the first phase in the System Development Life Cycle?",
        answers : [
            {text : "System Design", correct: false},
            {text : "System Implementation", correct: false},
            {text : "System Planning", correct: true},
            {text : "System Maintenance", correct: false},
        ]
    },
	{
        question : "During which phase of SDLC is the system tested for errors and bugs?",
        answers : [
            {text : "System Design", correct: false},
            {text : "System Analysis", correct: false},
            {text : "System Testing", correct: true},
            {text : "System Implementation", correct: false},
        ]
    },
	{
        question : "Which of the following is a deliverable of the System Design phase?",
        answers : [
            {text : "Project Plan", correct: false},
            {text : "Test Cases", correct: false},
            {text : "System Specification", correct: true},
            {text : "User Manual", correct: false},
        ]
    },
	{
        question : "In SDLC, which phase comes after System Implementation?",
        answers : [
            {text : "System Design", correct: false},
            {text : "System Testing", correct: false},
            {text : "System Maintenance", correct: true},
            {text : "System Planning", correct: false},
        ]
    },
	{
        question : "Which phase involves training the end users to operate the new system?",
        answers : [
            {text : "System Design", correct: false},
            {text : "System Implementation", correct: true},
            {text : "System Analysis", correct: false},
            {text : "System Testing", correct: false},
        ]
    },
	{
        question : "What does 'HTTP' stand for?",
        answers : [
            {text : "HyperText Transfer Protocol", correct: true},
            {text : "HyperText Transfer Program", correct: false},
            {text : "HighText Transfer Protocol", correct: false},
            {text : "HighText Transfer Program", correct: false},
        ]
    },
	{
        question : "Which port is typically used by SMTP?",
        answers : [
            {text : "25", correct: true},
            {text : "110", correct: false},
            {text : "143", correct: false},
            {text : "21", correct: false},
        ]
    },
	{
        question : "Which of the following is NOT an email protocol?",
        answers : [
            {text : "SMTP", correct: false},
            {text : "POP3", correct: false},
            {text : "FTP", correct: true},
            {text : "IMAP", correct: false},
        ]
    },
	{
        question : "Which of the following is the correct format for an email address?",
        answers : [
            {text : "username.domain@domainname", correct: false},
            {text : "username@domainname.domain", correct: true},
            {text : "domainname@username.domain", correct: false},
            {text : "domain@username.domainname", correct: false},
        ]
    },
	{
        question : "What does 'URL' stand for?",
        answers : [
            {text : "Uniform Resource Locator", correct: true},
            {text : "Uniform Retrieval Locator", correct: false},
            {text : "Universal Resource Locator", correct: false},
            {text : "Universal Retrieval Locator", correct: false},
        ]
    },
	{
        question : "Which of the following is a primary component of multimedia?",
        answers : [
            {text : "Audio", correct: false},
            {text : "Text", correct: false},
            {text : "Video", correct: false},
            {text : "All of the above", correct: true},
        ]
    },
	{
        question : "Which software is commonly used for creating presentations?",
        answers : [
            {text : "MS Word", correct: false},
            {text : "MS Excel", correct: false},
            {text : "MS PowerPoint", correct: true},
            {text : "Adobe Photoshop", correct: false},
        ]
    },
	{
        question : "Which format is typically used for digital images?",
        answers : [
            {text : ".mp3", correct: false},
            {text : ".doc", correct: false},
            {text : ".jpg", correct: true},
            {text : ".ppt", correct: false},
        ]
    },
	{
        question : "What does 'JPEG' stand for?",
        answers : [
            {text : "Joint Photographic Experts Group", correct: true},
            {text : "Joint Photography Experts Group", correct: false},
            {text : "Joint Picture Experts Group", correct: false},
            {text : "Joint Picture Elements Group", correct: false},
        ]
    },
	{
        question : "Which of the following file formats is commonly used for audio?",
        answers : [
            {text : ".wav", correct: true},
            {text : ".png", correct: false},
            {text : ".pdf", correct: false},
            {text : ".html", correct: false},
        ]
    },
	{
        question : "Which of the following is a common language used in web design?",
        answers : [
            {text : "HTML", correct: true},
            {text : "Python", correct: false},
            {text : "Java", correct: false},
            {text : "Pascal", correct: false},
        ]
    },
	{
        question : "What does CSS stand for in web design?",
        answers : [
            {text : "Creative Style Sheets", correct: false},
            {text : "Colorful Style Sheets", correct: false},
            {text : "Cascading Style Sheets", correct: true},
            {text : "Computer Style Sheets", correct: false},
        ]
    },
	{
        question : "Which tag is used to create a hyperlink in HTML?",
        answers : [
            {text : "image tag", correct: false},
            {text : "anchor tag", correct: true},
            {text : "link tag", correct: false},
            {text : "hyper reference (href)", correct: false},
        ]
    },
	{
        question : "What is the purpose of the title tag in an HTML document?",
        answers : [
            {text : "To set the title of the document", correct: true},
            {text : "To create headings in the document", correct: false},
            {text : "To create a hyperlink", correct: false},
            {text : "To insert an image", correct: false},
        ]
    },
	{
        question : "Which of the following is a web design tool?",
        answers : [
            {text : "Photoshop", correct: false},
            {text : "Dreamweaver", correct: true},
            {text : "Illustrator", correct: false},
            {text : "After Effects", correct: false},
        ]
    }
	
	
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . "  + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();