const quizData = [
    {
        question: '"Kızıl Gezegen" genellikle hangisi için yapılan bir benzetme olur?',
        a: 'Kripton',
        b: 'Cyberton',
        c: 'Mars',
        d: 'Vulcan',
        correct: 'c',
      },

{
    question:'"Uzayın sonu" ifadesi hangi yöne doğru genellikle kullanılır?',
   a: 'Kuzey',
   b: 'Güney',
   c: 'Batı',
   d: 'Doğu',
   correct: 'b',
    },

 { 
    question:' "Sihirli lamba" hangi masalın anahtar öğelerinden biridir?',
   a: 'Aladdin',
   b: 'Kırmızı Başlıklı Kız',
   c: 'Rapunzel',
   d: 'Pamuk Prenses',
   correct: 'a',
 },

{question:'Hangisi renk spektrumunun en düşük frekanslı rengidir?',
   a: 'Kırmızı',
   b: 'Yeşil',
   c: 'Mavi',
   d: 'Mor',
   correct: 'a',
},
{
   question:'İnsan vücudunda hangi organ metabolizmayı kontrol eder?',
   a: 'Akciğerler',
   b: 'Karaciğer',
   c: 'Kalp',
   d: 'Beyin',
   correct: 'b',
}
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('questions')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
 
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
  let answer

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()

  //console.log(answer)
  if(answer){
    if(answer === quizData[currentQuiz].correct){
      score ++
    }
    currentQuiz++ 
    if(currentQuiz<quizData.length){
      loadQuiz()
    }else{
      quiz.innerHTML = `
      <h2> Test Tamamlandı, ${score *20} puan aldınız </h2>
      <button class="submit" onClick="location.reload()">Tekrar Dene</button>`
    }
  }
})

 