let score = 0;
let imgsrc = document.getElementById("img");

function clicker(){
    score++;
    document.getElementById("clicks").innerHTML="Kliknięcia: " + score;
    check();
}

function check(){
    if(score>100 && score<=200){
        img.src = "img/stone.png";
    }
    else if(score>200 && score<=300){
        img.src = "img/iron.png";
    }
     else if(score>300 && score<=400){
        img.src = "img/gold.png";
    }
     else if(score>400 && score<=1000){
        img.src = "img/diamond.png";
    }
     else if(score>1000){
        img.src = "img/boss.jpg";
    }
    else{
        img.src = "img/dirt.png";
    }
}