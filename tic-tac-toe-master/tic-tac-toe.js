window.onload = function(){
    var squares = document.getElementById("board").children;
    Array.from(squares).forEach(element => {
        element.classList.add("square");
    });
};