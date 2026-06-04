var targets = document.querySelectorAll(".drum");
// for(var i = 0;i<targets.length;i++){
//     targets[i].addEventListener("click",function (){
//      var buttonInnerHTML = this.innerHTML;
// 
    //  switch(buttonInnerHTML){
        // case "w":
        //     var tom1=new Audio('./sounds/tom-1.mp3');
        //     tom1.play();
        //     break;
        
        // case "a":
        //     var tom2=new Audio('./sounds/tom-2.mp3');
        //     tom2.play();
        //     break;

        // case "s":
        //     var tom3=new Audio('./sounds/tom-3.mp3');
        //     tom3.play();
        //     break;

        // case "d":
        //     var tom4=new Audio('./sounds/tom-4.mp3');
        //     tom4.play();
        //     break;

        // case "j":
        //     var snare=new Audio('./sounds/snare.mp3');
        //     snare.play();
        //     break;

        // case "k":
        //     var crash1=new Audio('./sounds/crash.mp3');
        //     crash1.play();
        //     break;

        // case "l":
        //     var kick=new Audio('./sounds/kick-bass.mp3');
        //     kick.play();
        //     break;

//         default: console.log();
//      }
// });
// }


// FOR MAKING WORK ONLY KEY PRESSES
// document.addEventListener("keypress", function(hello){
//     switch(hello.key){
//             case "w":
//             var tom1=new Audio('./sounds/tom-1.mp3');
//             tom1.play();
//             break;
        
//         case "a":
//             var tom2=new Audio('./sounds/tom-2.mp3');
//             tom2.play();
//             break;

//         case "s":
//             var tom3=new Audio('./sounds/tom-3.mp3');
//             tom3.play();
//             break;

//         case "d":
//             var tom4=new Audio('./sounds/tom-4.mp3');
//             tom4.play();
//             break;

//         case "j":
//             var snare=new Audio('./sounds/snare.mp3');
//             snare.play();
//             break;

//         case "k":
//             var crash1=new Audio('./sounds/crash.mp3');
//             crash1.play();
//             break;

//         case "l":
//             var kick=new Audio('./sounds/kick-bass.mp3');
//             kick.play();
//             break;

//         default: console.log(hello);
//     }
// });






// FOR MAKING WORK IT FOR BOTH 
//Now for V 146 adding animations- 

for(var i = 0;i<targets.length;i++){
    targets[i].addEventListener("click",function (){
     var buttonInnerHTML = this.innerHTML;

     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
     
     });

}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2=new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3=new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4=new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare=new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash1=new Audio('./sounds/crash.mp3');
            crash1.play();
            break;

        case "l":
            var kick=new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log()
}
}


//Function for adding animation 
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");},100);
}




//  console.log(this.innerHTML);
//       this.style.color="yellow";



    // var audio = new Audio('./sounds/tom-1.mp3');
    // audio.play();


