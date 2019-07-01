console.log("hello script js");

var clear = function() {
    //document.getElementById("input").value = "";
    console.log("went in")
    input.value = "";
    output.innerText = "";
}

var drawRow = function(input) {
    // get the div element to append
    //let output = document.getElementById("output");

    let p = document.createElement("p");
    for (let i = 0; i < input; i++) {
        p.textContent += "🍍";
    }
    output.appendChild(p);
} // end of draw row




var inputHappened = function(currentInput){
    const intInput = parseInt(currentInput);
    // /console.log(isNaN(intInput))
    if (isNaN(intInput) === true && currentInput === "clear") {
        clear();

    } else {
        drawRow(intInput);
    }

    // if (isNaN(intInput)) {
    //     clear()
    // } else {
    //     drawRow(intInput);
    // }

};