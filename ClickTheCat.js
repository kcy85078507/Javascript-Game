  let catchCount = 0;
  let count = 0;
  let stop = true;
  let interval = null;
  let sound = 1;
  let boxes = [];

  function makeRandPositionBox() {
    const box = document.createElement("div");
    const number = document.getElementById("count");
    const catchNumber = document.getElementById("catchCount");
    const restBtn = document.getElementById("resetBtn");


    box.className = "box";
    const top = Math.random() * window.innerHeight - 100;
    const left = Math.random() * window.innerWidth - 100;
    box.style.top = `${top >= 0 ? top : top + 100}px`;
    box.style.left = `${left >= 0 ? left : left + 100}px`;

    number.innerText = `냥이는? 총${count+=1}마리`;

    box.addEventListener("click", () => {
      box.remove();
      number.innerText = `냥이는? 총${count-=1}마리`;
      catchNumber.innerText = `내가 잡은 냥이는? 총 ${catchCount+=1}마리`;

      boxes = boxes.filter((div)=>{
        return box !== div;
      })

    var audio = new Audio("meow.mp3");
    audio.loop = false;
    audio.volume = sound;
    audio.play();
    audio.currentTime = 0;
  });

    boxes.push(box);
    body.appendChild(box);
  }

  controller.addEventListener("click",()=>{
    if(stop){
      interval = setInterval(makeRandPositionBox, 1000);
      function gameReset() {
        document.getElementById("count").innerText = "냥이는? 총 0마리";
        document.getElementById("catchCount").innerHTML = "내가 잡은 냥이는? 총 0마리";
        for(const box of boxes){
          box.remove();
        }
        boxes = []
        count = 0;
      }
      restBtn.addEventListener("click", () => {
      gameReset();
      })
      controller.innerText = "Stop"
    }else{
      clearInterval(interval)
      controller.innerText = "Start"
    }
    stop = !stop;
  })