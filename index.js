//button press
var numberOfDrumButtons = document.querySelectorAll('.drum').length ;

for(var i = 0 ; i < numberOfDrumButtons ; i++)
{
   document.querySelectorAll('.drum')[i].addEventListener('click' , function() {
   
    var buttonInnerHTML = this.innerHTML ;
    //function call for making sound on button press
    makeSound(buttonInnerHTML);
    
   
});
}

//keyboard press
document.addEventListener('keypress' , function(event) {
    //function call for making sound on key press
    makeSound(event.key)
})

function makeSound(key)
{
    switch(key){
        case 'w' :
            var tom1 = new Audio('audio/audio1.mp3') ;
            tom1.play();
            break ;
        case 'a' :
            var tom2 = new Audio('audio/audio2.wav') ;
            tom2.play();
            break ;
        case 's' :
            var tom3 = new Audio('audio/audio3.mp3') ;
            tom3.play();
            break ;
        case 'd' :
            var tom4 = new Audio('audio/audio4.wav') ;
            tom4.play();
            break ;
        case 'j' :
            var tom5 = new Audio('audio/audio5.mp3') ;
            tom5.play();
            break ;
        case 'k' :
            var tom6 = new Audio('audio/audio6.mp3') ;
            tom6.play();
            break ;
        case 'l' :
            var tom7 = new Audio('audio/audio7.mp3') ;
            tom7.play();
            break ;

        default : console.log(buttonInnerHTML)   
    }
}