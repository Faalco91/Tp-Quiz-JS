function afficherQuestion(currentQuestion, userAnswers, elements) {
    const question = quizData[currentQuestion];
    elements.questionText.textContent = question.question;
  
    elements.progression.textContent = `Question ${currentQuestion + 1} / ${quizData.length}`;
  
    elements.choixZone.innerHTML = "";
  
    question.options.forEach(option => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = option;
  
      if (userAnswers[currentQuestion] === option) {
        input.checked = true;
      }
  
      input.addEventListener("change", () => {
        userAnswers[currentQuestion] = option;
        localStorage.setItem("reponses", JSON.stringify(userAnswers));
      });
  
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      elements.choixZone.appendChild(label);
    });
  
    elements.prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
    elements.nextBtn.style.display = currentQuestion === quizData.length - 1 ? "none" : "inline-block";
    elements.submitBtn.style.display = currentQuestion === quizData.length - 1 ? "inline-block" : "none";
  }
  
  function afficherResultats(userAnswers, elements) {
    let score = 0;
    elements.resume.innerHTML = "";
  
    quizData.forEach((q, index) => {
      const userAnswer = userAnswers[index];
      const isCorrect = userAnswer === q.correct;
  
      if (isCorrect) score++;
  
      const questionBlock = document.createElement("div");
      questionBlock.className = "resume-item";
      const emoji = isCorrect ? "✅" : "❌"; 
      const color = isCorrect ? "green" : "red";
      questionBlock.innerHTML = `
        <p><strong>Q${index + 1} : ${q.question}</strong></p>
      <p>Votre réponse : <span style="color:${color}">${userAnswer || "Non répondu"}</span> ${emoji}</p>
        <p>Bonne réponse : <strong>${q.correct}</strong></p>
        <hr />
      `;
      elements.resume.appendChild(questionBlock);
    });
  
    elements.scoreFinal.textContent = `Votre score : ${score} / ${quizData.length}`;
  }
  