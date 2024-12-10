let gameSeq=[];
let userSec=[];

let btns=["yellow" ,"red" , "purple" , "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("click",function(){
   if(started == false){
    console.log("game started")
    started = true;
    levelUp();
   }
});
function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function userFlash(btn){
  btn.classList.add("userFlash")
  setTimeout(function(){
      btn.classList.remove("userFlash")
  },250);
}
function levelUp(){
  userSec = [];
  level++;
  h2.innerText = `Level ${level}`
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
 gameFlash(randBtn); 
};



function checkAns(idx){
 
  if(userSec[idx] === gameSeq[idx]){
   if(userSec.length == gameSeq.length){
   setTimeout(levelUp, 1000);
   
   

   }
   }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}<b/> <br> Press any key to start`;
       
      
          document.querySelector("body").style.backgroundColor = "red";
          customAlert(`Congratulation, Your highest score was ${level}`);
          setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
          }, 250);
     
          reset();

  }
}


function btnPress(){
 
let btn = this;
userFlash(btn);
  userColor = btn.getAttribute("id");
 userSec.push(userColor);
checkAns(userSec.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
  btn.addEventListener("click", btnPress);
}
function reset(){
  started = false;
  gameSeq = [];
  userSec =[];
  level = 0;
}

function customAlert(message) {
  const customAlertElement = document.getElementById('custom-alert');
  const alertMessageElement = document.getElementById('alert-message');
  const alertOkButton = document.getElementById('alert-ok');

  alertMessageElement.textContent = message;
  customAlertElement.style.display = 'block';

  alertOkButton.addEventListener('click', () => {
    customAlertElement.style.display = 'none';
  });
}