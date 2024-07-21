function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
    
    // User's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    
    // Feedback element
    const feedback = document.getElementById('feedback');
    
    // Check and provide feedback
    if (userAnswer) {
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer.";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
