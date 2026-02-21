let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };
    
    updateScoreElement();
     
    /*
    if (!score) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
    }
    */
   
    //Variables which can be used anywhere is called Global variable
    function playGame(playerMove) {
       const computerMove = pickComputerMove();

    let result = '';
    
    if (playerMove === 'scissors') {
      if (computerMove === 'scissors') {
        result = 'Tie';
      } else if (computerMove === 'rock') {
        result = 'You lose';
      } else if(computerMove === 'paper') {
        result = 'You win';
      }

    } else if (playerMove === 'paper') {
        if (computerMove === 'paper') {
        result = 'Tie';
      } else if (computerMove === 'scissors') {
        result = 'You lose';
      } else if(computerMove === 'rock') {
        result = 'You win';
      } 
      
    } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
          result = 'Tie';
        } else if (computerMove === 'paper') {
          result = 'You lose';
        } else if(computerMove === 'scissors') {
          result = 'You win';
        }
      }
    
      //1 update the score 
      if (result === 'You win') {
        score.wins++;
      } else if (result === 'You lose') {
        score.losses++;
      } else if (result === 'Tie') {
        score.ties++;
      }

      //2 save the score in LocalStorage with "string"
    //add LocalStorage to get the string into LS
    localStorage.setItem('score' , JSON.stringify(score));
   
    updateScoreElement();

    document.querySelector('.js-result')
         .innerHTML = result;

    document.querySelector('.js-moves')
         .innerHTML = `<div class="moves-display">
    <span>You</span>
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <span class="vs">vs</span>
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    <span>Computer</span>
   </div>`;
 }

     function updateScoreElement() {
      document.querySelector('.js-score')
         .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
     }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1/3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2/3 && randomNumber < 1){
          computerMove = 'scissors';
        }

       return computerMove;
    }