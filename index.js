const correctAnswer = ['D', 'C', 'C', 'A', 'A', 'B', 'B', 'C', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const questions = document.querySelectorAll('.question');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
  ];
  console.log(userAnswers);

  // console.log(questions.length, correctAnswer.length);

  userAnswers.forEach((answer, index) => {
    if (!questions[index]) return;

    if (answer === correctAnswer[index]) {
      score = score + 1;
      questions[index].classList.add('correct');
    } else {
      questions[index].classList.add('wrong');
    }
  });
  console.log(score);
  scrollTo(0, 0);
  result.classList.remove('hide');
  result.querySelector('.score').textContent = `Your Scored ${score}/10!`;
});
