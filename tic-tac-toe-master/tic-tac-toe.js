window.onload = function(){
    var squares = Array.from(document.getElementById("board").children);
    var state = [];
    squares.forEach(element => {
        element.classList.add("square");
        element.addEventListener("click", function(){
            if (state.length % 2 == 0){
                element.classList.add("X");
                element.innerHTML = "X";
                state.push("X");
            } else {
                element.classList.add("O");
                element.innerHTML = "O";
                state.push("O");
            }
        })
    });
};