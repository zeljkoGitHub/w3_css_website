var consoleTest = 'hello o/';
console.log(consoleTest);


/*
W3 CSS accordion
https://www.w3schools.com/w3css/w3css_accordions.asp
*/

function accordionFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// jQuery smooth scroll
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
