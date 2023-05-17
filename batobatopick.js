const buttons = document.querySelectorAll('button');
const reset = document.querySelector('.reset');

    buttons.forEach( button => {
      button.addEventListener('click', () => {
        const pick = button.textContent;
        playerPick(pick);
      });
    });
    
    
    let score = 0;
    let result = '';
    let computerMove = '';

    // Load score from local storage
    score = parseInt(localStorage.getItem('score')) || 0;
    document.querySelector('.result').innerHTML = `You: - -- Computer: - -- - -- Score: ${score}`;

    

    function computerPick() {

      const random = Math.random()
      const randomNumber = Math.round(random * 90);
      

      if(randomNumber <= 30) {
        computerMove = 'Rock'    
      } else if(randomNumber > 30 && randomNumber <= 60) {
        computerMove = 'Paper'
      } else if(randomNumber >= 61 && randomNumber <= 90) {
        computerMove = 'Scissor'
      }      
      return computerMove;
    }
    

    function playerPick(playerMove) {

      
     

      let computerMove = computerPick();

      if(playerMove === 'Scissor') {
        if(computerMove === 'Rock') {
          result = 'You Lose!'
        } else if (computerMove === 'Paper') {
          result = 'You Win!'
          score++;
        } else if(computerMove === 'Scissor') {
          result = 'Draw!'
        }
      }
      if(playerMove === 'Rock') {
        if(computerMove === 'Paper') {
          result = 'You Lose!'
        } else if (computerMove === 'Scissor') {
          result = 'You Win!'
          score++;
        } else if(computerMove === 'Rock') {
          result = 'Draw!'
        }
      }
      if(playerMove === 'Paper') {
        if(computerMove === 'Rock') {
          result = 'You Win!'
          score++;
        } else if (computerMove === 'Scissor') {
          result = 'You Lose!'
        } else if(computerMove === 'Paper') {
          result = 'Draw!'
        }
      }
        
      document.querySelector('.result').innerHTML = `You: ${playerMove} -- Computer: ${computerMove} -- ${result} -- Score: ${score}`;
      alert(`You: ${playerMove} -- Computer: ${computerMove} -- ${result}`);

       // Save score to local storage
      localStorage.setItem('score', score);
    }

    function resetButton() {
      result = '';
      playerMove = '';
      computerMove = '';
      score = 0;
      document.querySelector('.result').innerHTML = `You: ${playerMove} -- Computer: ${computerMove} -- ${result} -- Score: ${score}`;
    }
    reset.addEventListener('click', () => {
      
      resetButton()
      
    });

   