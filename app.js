let boxes = document.querySelectorAll(".bo");
let restBtn = document.querySelector(".reset");
let turn0 = true;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((bo) => {
    bo.style.opacity = '0';
    bo.style.cursor = 'pointer';
    bo.style.transition = 'opacity 0.3s ease';

    bo.addEventListener("click", () => {
        console.log(this.class);

        if (!bo.querySelector('img')) {
            if (turn0) {
               // bo.innerText = 0;
                bo.innerHTML = '<img src="./assets/images/Property 2=1.png" style="width:86px; height:86px; position:relative; top:0px; left:0px">';
                turn0 = false;
            } else {
              //  bo.innerText = 1;
               bo.innerHTML = '<img src="./assets/images/Property 2=9.png" style="width:86px; height:86px; position:relative; top:0px; left:0px">';
                turn0 = true;
            }
            bo.style.opacity = '1';
          checkwinner();
        }
    });
});

const checkwinner = () => {
    for (pattern of win) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if (pos1Val !="" && pos2Val !="" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
              
                let str1 = pos1Val;
                let playerSymbol = "";
                   
                if (str1.includes("Property 2=1.png")) {
                   playerSymbol = "X";
                  } 
                  if(str1.includes("Property 2=9.png")){
                    playerSymbol = "O";
                  }
                console.log("winner", pos1Val);
                console.log("Winner is: " + pos1Val);
               
             alert("winner");
                
                
                  alert("Winner: Player " + playerSymbol);
              

                
            }

                // Disable all boxes after a win is found
              //boxes.forEach((box) => box.style.pointerEvents = 'none');
                //return; // Exit the loop once a winner is found
            }
        }
    }

