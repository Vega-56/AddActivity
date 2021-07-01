 const question = document.querySelector('.question');

 const equation = document.querySelector('.equation');

 const submitBtn = document.querySelector('.submit');

 const userAnswer = document.querySelector('.inputfield');

 const qArea = document.querySelector('.questionArea');

 const statusBox = document.createElement('p');
 qArea.appendChild(statusBox);

 let addequation = {
    maxRange: 100,
    
    equationGen: function(){
        let a = Math.floor(Math.random() * this.maxRange);
        let b = Math.floor(Math.random() * this.maxRange);
        let answer = a + b;
        this.answer = answer
        console.log(this.answer);
        equation.textContent =`${a} + ${b} = `;
        let fullEquation = `${a} + ${b} = ${answer}`;
    },

    checkAnswer: function(){
        //This makes the element that will state whether the answer was wrong/right
        switch (Number(userAnswer.value)){ //Number function ensures input value will be same data type as answer varaible
            case addequation.answer:
                // Note that this case has to specify the addequation object and not use 'this.answer'
                // otherwise you get an error from the submit btn event listener
                // probably because the function is still invoked on the submitBtn rather than the addequation obj
                
                statusBox.textContent = "You got it right, try another one";
                
                statusBox.classList.remove('wrong');
                statusBox.classList.add('correct');
                addequation.equationGen();
                break;
            default:
                statusBox.textContent = "You didn't get it right, try again";
                statusBox.classList.remove('correct');
                statusBox.classList.add('wrong');
            }
        userAnswer.value = ''; // Clears input field
        userAnswer.focus(); // Makes cursor go back into the input field
    }

}

submitBtn.addEventListener('click', addequation.checkAnswer);

addequation.equationGen(100);

