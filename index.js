var timer=30;
var score=0;
var hitrn;
function makeCircle(){
    var cluster="";
    for(var i=1;i<=180;i++){
        var rn=Math.floor(Math.random()*10);
        cluster+=`<div class="circle">${rn}</div>`;
        document.querySelector(".pbtm").innerHTML=cluster;
}}

function setTimer(){
    var timerSet=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timer").textContent=timer;}
        else{
            clearInterval(timerSet);
            document.querySelector(".pbtm").innerHTML=`<h1>Game Over <br>Your Final Score: ${score}</h1>`
            document.querySelector(".img").innerHTML=`<img src="./autoplay-svgrepo-com.svg"/>`
            document.querySelector(".img").addEventListener("click",function(dets){
                if("http://127.0.0.1:3000/Bubble%20Game/autoplay-svgrepo-com.svg"==dets.target.src){
                    getHit();
                    setTimer();
                    setScore();
                    makeCircle();
                    timer=30;
                }
            })
            
        }
    },1000)
   

}

function getHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}

function setScore(){
    if(timer>0){
        document.querySelector(".pbtm").addEventListener("click",function(dets){
            var currentHit=dets.target.textContent;
            if(currentHit==hitrn){
                score+=10;
                document.querySelector("#score").textContent=score;
                getHit();
                makeCircle();
            }
            else{
                score-=5;
                document.querySelector("#score").textContent=score;
                getHit();
                makeCircle();
            }
        })
    }
}
getHit();
setTimer();
setScore();

makeCircle();

