var block = document.getElementById("block");
var character = document.getElementById("character");
var hole = document.getElementById("hole");
var coin = document.getElementById("coin");
var counter=0;
var jumping=0;
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    setTimeout(function(){
        random = -((Math.random()*300)+200);
        coin.style.top = random + "px";
    },1000);
    counter++;
});
var gravity = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3) + "px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>(holeTop+130))))){
//        alert("game over. score: "+counter);
        character.style.top = 200 + "px";
        counter = 0;
    }
},10);

function jump(){
    let counter = 0;
    jumping=1;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if(counter>20){
            clearInterval(jumpInterval);
            jumping=0;
            counter=0;
        }
        if((characterTop>6)&&(counter<15)){
            character.style.top = (characterTop-5) + "px";
        }
        counter++;
    },10);
}