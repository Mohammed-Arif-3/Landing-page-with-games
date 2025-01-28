
// const questions = [
//     {
//       question: "Who has the highest strike rate among openers in ODIs(min. 100 innings)?",
//       answers: [
//         { text: "Virender Sehwag", correct:false },
//         { text: "Jason Roy", correct:true },
//         { text: "Brandon McCullum", correct:false },
//         { text: "Sourav Ganguly", correct:false },
//       ],
//     },
//     // ... (other questions)
//     {
//                 question : "Who is the 3rd slowest Indian to reach 2000 runs in ODI?",
//                 answers: [
//                     {text:"Rohit Sharma", correct:true },
//                     {text:"Ravindra Jadeja", correct:false},
//                     {text:"Akash Chopra", correct:false},
//                     {text:"Kapil Dev", correct:false},
                    
//                 ]
//             },
//             {
//                 question : "Who became the second Australian to lead them in International matches in his first match for Australia?",
//                 answers: [
//                     {text:"Ricky Ponting", correct:false },
//                     {text:"Don Bradman", correct:false},
//                     {text:"Mike Hussey", correct:true},
//                     {text:"George Bailey", correct:false},
                    
//                 ]
//             },
//             {
//                 question : "1",
//                 answers: [
//                     {text:"a", correct:false },
//                     {text:"b", correct:false},
//                     {text:"c", correct:true},
//                     {text:"d", correct:false},
                    
//                 ]
//             },
//             {
//                 question : "1",
//                 answers: [
//                     {text:"a", correct:false },
//                     {text:"b", correct:false},
//                     {text:"c", correct:true},
//                     {text:"d", correct:false},
                    
//                 ]
//             },
//             {
//                 question : "1",
//                 answers: [
//                     {text:"a", correct:false },
//                     {text:"b", correct:false},
//                     {text:"c", correct:true},
//                     {text:"d", correct:false},
                    
//                 ]
//             },
//             {
//                 question : "1",
//                 answers: [
//                     {text:"a", correct:false },
//                     {text:"b", correct:false},
//                     {text:"c", correct:true},
//                     {text:"d", correct:false},
                    
//                 ]
//             },
//             {
//                 question : "1",
//                 answers: [
//                     {text:"a", correct:false },
//                     {text:"b", correct:false},
//                     {text:"c", correct:true},
//                     {text:"d", correct:false},
                    
//                 ]
//             },
  
//   ];
  
//   const questionElement = document.getElementById("question");
//   const answerButtons = document.getElementById("answer-buttons");
//   const nextButton = document.getElementById("next-btn");
  
//   let currentQuestionIndex = 0;
//   let score = 0;
  
//   function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
//   }
  
//   function showQuestion() {
//     answerButtons.innerHTML = ""; // Clear previous answer buttons
  
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
//     currentQuestion.answers.forEach((answer) => {
//       const button = document.createElement("button");
//       button.innerHTML = answer.text;
//       button.classList.add("btn");
//       button.addEventListener("click", () => check(answer));
//       answerButtons.appendChild(button);
//     });
//   }
  
//   function check(selectedAnswer) {
//     if (selectedAnswer.correct) {
//       score++;
//     }
//     currentQuestionIndex++;
  
//     if (currentQuestionIndex < questions.length) {
//       showQuestion();
//     } else {
//       // Display the final score or perform any other actions after the quiz is finished.
//       alert("Quiz finished! Your score: " + score);
//     }
//   }
  
//   nextButton.addEventListener("click", () => {
//     if (currentQuestionIndex < questions.length) {
//       check(null); // Call check function without an answer (null) to move to the next question.
//     }
//   });
  
//   startQuiz();
  