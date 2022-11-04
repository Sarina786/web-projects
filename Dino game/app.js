//********************* DINO GAME *********************

let container = document.querySelector('#container');
let dino = document.querySelector('#dino');
let block = document.querySelector('#block');
let score = document.querySelector('#score');
let gameOver = document.querySelector('#gameOver');
let cloud = document.querySelector('#cloud');
road = document.querySelector("#road");

let interval = null;
let playerScore = 0;
 

// function for score

let scoreCounter = ()=>{
    playerScore++;
    score.textContent ="Score  : " + playerScore;
}


//Start game
window.addEventListener("keydown" , (start)=>{
    if(start.code == "Space"){
        gameOver.style.display ="none";
        block.classList.add("blockActive");
        cloud.classList.add("cloudActive");

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter,200);


    }
});
//jump your charechter
  window.addEventListener("keydown",(e)=>{
    if(e.key == "ArrowUp")
    if(dino.classList != "dinoActive" ){
        dino.classList.add("dinoActive");

        setTimeout(()=>{
            dino.classList.remove("dinoActive");

        },350);
    }
});
  


//Game Over
let result = setInterval(()=>{
    
    let dinoBottom =parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    let blockLeft =parseInt(getComputedStyle(block).getPropertyValue("left"));

    if(dinoBottom <= 100 && blockLeft >= 20 && blockLeft <= 145){
    
        gameOver.style.display ="block";
        block.classList.remove("blockActive");
        cloud.classList.remove("cloudActive");
    
        clearInterval(interval);
        playerScore=0;


    }   
},20);
