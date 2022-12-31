let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }

}

function checker(input){
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f"; 
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    if (user_score >= 5 && computer_score < 5) {
        alert("Congratulation, you win!");
        setTimeout(function(){
            restart()
        }, 500); 
    } else if (computer_score >= 5 && user_score < 5) {
        alert("Sorry, you lose!");
        setTimeout(function(){
            restart()
        }, 500); 
    } else if (computer_score == 5 && user_score == 5) {
        alert("Game result is draw");
        setTimeout(function(){
            restart()
        }, 500); 
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}

function restart(){
    computer_score = 0;
    user_score = 0;
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;

    result_ref.style.cssText = "background-color: #ffffff; color: #ffffff"; 
    result_ref.innerHTML = `<span></span>`;
    document.getElementById("comp_choice").innerHTML = `<span></span>`;
    document.getElementById("user_choice").innerHTML = `<span></span>`;
}