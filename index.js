var numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    })  
    
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3")
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/tom-2.mp3")
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/tom-3.mp3")
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-4.mp3")
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/snare.mp3")
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/crash.mp3")
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/Bass-drum-1.mp3")
            sound.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }

}


function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);

    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed")
    }, 100);
} 
