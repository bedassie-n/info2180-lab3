window.onload = function(){
    var squares = Array.from(document.getElementById("board").children);
    var state = [0,0,0,0,0,0,0,0]; //1-3 rows, 4-7 cols, 8-9 diagonals
    var count = 0;
    var status = document.getElementById("status");
    squares.forEach((element, index) => {
        index;
        element.classList.add("square");
        element.addEventListener("click", function(){
            if (count % 2 == 0 && element.innerHTML == ""){
                element.classList.add("X");
                element.innerHTML = "X";
                count++;
                switch(index){
                    case 0:
                        state[0]++;
                        state[3]++;
                        state[7]++;
                        break;
                    case 1:
                        state[0]++;
                        state[4]++;
                        break;
                    case 2:
                        state[0]++;
                        state[5]++;
                        state[8]++;
                        break;
                    case 3:
                        state[1]++;
                        state[3]++;
                        break;
                    case 4:
                        state[2]++;
                        state[4]++;
                        state[7]++;
                        state[8]++;
                        break;
                    case 5:
                        state[1]++;
                        state[5]++;
                        break;
                    case 6:
                        state[2]++;
                        state[3]++;
                        state[8]++;
                        break;
                    case 7:
                        state[3]++;
                        state[4]++;
                        break;
                    case 8:
                        state[3]++;
                        state[5]++;
                        state[7]++;
                        break;
                    default:
                        break;
                }


            } else if(count % 2 == 1 && element.innerHTML == ""){
                element.classList.add("O");
                element.innerHTML = "O";
                count++;
                switch(index){
                    case 0:
                        state[0]--;
                        state[3]--;
                        state[7]--;
                        break;
                    case 1:
                        state[0]--;
                        state[4]--;
                        break;
                    case 2:
                        state[0]--;
                        state[5]--;
                        state[8]--;
                        break;
                    case 3:
                        state[1]--;
                        state[3]--;
                        break;
                    case 4:
                        state[2]--;
                        state[4]--;
                        state[7]--;
                        state[8]--;
                        break;
                    case 5:
                        state[1]--;
                        state[5]--;
                        break;
                    case 6:
                        state[2]--;
                        state[3]--;
                        state[8]--;
                        break;
                    case 7:
                        state[3]--;
                        state[4]--;
                        break;
                    case 8:
                        state[3]--;
                        state[5]--;
                        state[7]--;
                        break;
                    default:
                        break;
                }
            }
            if(state.includes(3)){
                status.innerHTML = "Congratulations! X is the Winner!";
                status.classList.add("you-won");
            } else if(state.includes(-3)){
                status.innerHTML = "Congratulations! O is the Winner!";
                status.classList.add("you-won");

            }
        })
        element.addEventListener("mouseover", function(){
            element.classList.add("hover");
        })
        element.addEventListener("mouseout", function(){
            element.classList.remove("hover");
        })
    });
};