// alert("Test");

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick()  {
//     alert("I got clicked!")
// }

//---------------------

// var buttons = document.querySelectorAll("button");

// buttons.forEach(addEventListener("click", handleClick));

// function handleClick()  {
//     alert("I got clicked!");
// }

//---------------------

// var buttonLength = document.querySelectorAll("button.drum").length;
// alert(buttonLength);

// function buttonClick (numButton) {
// for (let i=0 ; i<numButton; i++) {
// document.querySelectorAll("button.drum")[i].addEventListener("click", function ()  {
//     alert("I got clicked!");
// })
// }
// }

// buttonClick (buttonLength);

//---------------------

// var numOfButtons = document.querySelectorAll("button.drum").length;

// for (let i=0 ; i<numOfButtons; i++) {
//     document.querySelectorAll("button.drum")[i].addEventListener("click", function ()  {
       
//       console.log(this); 

//     })
//     }

//---------------------DETECTING BUTTON CLICK

var buttonDrum = document.querySelectorAll("button.drum")
var numOfButtons = buttonDrum.length;

for (let i=0 ; i<numOfButtons; i++) {
    buttonDrum[i].addEventListener("click", function ()  {

        var buttonInnerHTML = this.innerHTML

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML)
               // console.log(this.innerHTML);
        
        // this.style.color = 'white';


    })
    }
    
        // var audio = new Audio("./sounds/tom-1.mp3");
    // audio.play();

    //---------------------DETECTING KEYBOARD PRESS DOWN

    document .addEventListener("keydown", function(event) {

        makeSound(event.key);
        buttonAnimation(event.key)

    }); 

    // document.addEventListener("keydown", function(event) {
    //     if (event.code === "KeyW") {
    //         console.log(event);
    //     }
    // });

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            break; 
        
        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            break;
            
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            break;

            case "j":
                var audio = new Audio("./sounds/tom-2.mp3");
                break;

            case "k":
                var audio = new Audio("./sounds/tom-3.mp3");
                break;

            case "l":
                var audio = new Audio("./sounds/tom-4.mp3");
                break;
       
        default: console.log(key);
       }

       audio.play();
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}