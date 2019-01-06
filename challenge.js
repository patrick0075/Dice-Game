/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// State variable check condition of game

var score, roundScore, activePlayer, gamePlaying;

init();
var lastDice;


// math.floor give int of Math.random
//Math.random give number 0-1 so we * 6 0-5 and 
// we add 1 to get 0-6;

//setter = set value
// document.querySelector('#current-'+ activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';

// getter = get a value stored in x
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

//change css


// two way of writting the function with event listener or outside or anonymous
// function btn(){
//     //Do something here
// }
// btn();



document.querySelector('.btn-roll').addEventListener('click', function() {
    //Do something here (Anonymous function)
    if (gamePlaying){
         //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.Display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    

    //3.Update the round score If the rolled number was not 1
    if (dice === 6 && lastDice === 6){
        //player looses score
        score [activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
        
    }else if (dice != 1){
        //Add score
        roundScore += dice;
        //same as roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //Next player
        nextPlayer();
        }
       lastDice = dice;
    }
});
document.querySelector('.btn-roll').addEventListener('click', function() {
    //Do something here (Anonymous function)
    if (gamePlaying){
         //1. Random number
    var diceTwo =  Math.floor(Math.random() * 6) + 1;
    //2.Display result
    var diceTwoDOM = document.querySelector('.diceTwo');
    diceTwoDOM.style.display = 'block';
    diceTwoDOM.src = 'dice-' + diceTwo + '.png';


    //3.Update the round score If the rolled number was not 1
    if (dice === 6 && lastDice === 6){
        //player looses score
        score [activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
        
    }else if (dice != 1){
        //Add score
        roundScore += dice;
        //same as roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //Next player
        nextPlayer();
        }
       lastDice = dice;
    }
});
   
   

document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying){
            //add current score to global score
    score[activePlayer] += roundScore;
    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    
    var input = document.querySelector('.final-score').value;
    var winnigScore;
    //Undefined, 0, null or "" are coerced to false
    //anything else == true
    if(input) {
         winnigScore = input;
    }else{
        winnigScore = 100;
    }
    // check if player won the game
    if (score[activePlayer] >= winnigScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.diceTwo').style.display = 'none';

        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
        }
    }
 
});
function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active'); 
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.diceTwo').style.display = 'none';
    
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

   

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.diceTwo').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');    
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    

}









