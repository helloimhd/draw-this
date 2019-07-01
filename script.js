console.log("hello script js");

let emojiSelected = "😱";

var drawRow = function(input) {
    // get the div element to append
    //let output = document.getElementById("output");

    let p = document.createElement("p");
    for (let i = 0; i < input; i++) {
        console.log(i)
        p.innerText += emojiSelected;
    }
    output.appendChild(p);
} // end of draw row


var clear = function() {
    //document.getElementById("input").value = "";
    input.value = "";
    output.innerText = "";
}


var clearRow = function(input) {
    // will give array
    const splitInput = input.split(" ");
    const rowNum = parseInt(splitInput[1])

    const pGroup = document.querySelectorAll("p");
    pGroup[rowNum-1].remove();
}

var drawMultipleRows = function(input) {
    console.log("Entered multiple rows")
    const splitInput = input.split(" ");
    const column = parseInt(splitInput[0]);
    const row = parseInt(splitInput[1]);

    // create element
    for (let i = 0; i < column; i++) {
        var p = document.createElement("p");

        for (let j = 0; j < row; j++) {
            p.innerText += emojiSelected;
        }

        output.appendChild(p);
    }
}

var drawTriangle = function(numOfRow) {
    console.log("Entered drawTriangle");
    console.log(numOfRow)

    // create row accordingly
    for (let i = 0; i < numOfRow; i++) {
        var p = document.createElement("p");

        // i is the number of times the emoji should appear
        for (let j = 0; j < i+1; j++) {
             p.innerText +=  emojiSelected
        }
        output.appendChild(p)
    }

}


var drawrTriangle = function(numOfRow) {
    console.log("Entered draw reverse triangle");
    var stringInput = `${numOfRow}, ${numOfRow}`;
    drawMultipleRows(stringInput)

    var p = document.querySelectorAll("p");
    // manipulate it
    for (let i = 0; i < numOfRow; i++) {
        p[i].innerHTML = ;
    }


    //console.log(numOfRow)

    // // create row accordingly
    // for (let i = 0; i < numOfRow; i++) {
    //     var p = document.createElement("p");

    //     // i is the number of times the emoji should appear
    //     for (let j = 0; j < i+1; j++) {
    //         p.innerHTML += emojiSelected
    //     }

    //     output.appendChild(p)
    // }

}

var emojiHappened = function(currentInput){
    // set the emoji
    emojiSelected = currentInput;
    emoji.style.display = "none";  // hide the current input
    input.style.display = "";  // show back the other input
    display("");
};


var inputHappened = function(currentInput){
    // change current input
    const intInput = parseInt(currentInput);
    //console.log(isNaN(intInput))
    if (isNaN(intInput) === true && currentInput === "clear") {
        clear();

    } else if (currentInput.includes("clear")) {
        clearRow(currentInput);
        input.value = "";

    } else if (currentInput.length === 1) {
        drawRow(intInput);
        input.value = "";

        // if input more than one character
    } else {

        const splitInput = currentInput.split(" ");
        const firstInput = splitInput[0];
        const secondInput = splitInput[1];

        if (firstInput === "triangle") {
            drawTriangle(parseInt(secondInput))
        } else if (firstInput === "rtriangle") {
            drawrTriangle(parseInt(secondInput))
        } else {
            drawMultipleRows(currentInput);
        }

    }

};

// hide the normal input
input.style.display = "none";
display("Enter the emoji you want to use!")