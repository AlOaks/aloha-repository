$(function() {
   var cartNumber = 0;
     
    $(".aloha-logo").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".hero-image").offset().top - $(".header").height()
        }, 500);
    });
    
    $(".about").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".about-section").offset().top - $(".header").height()
        }, 500);
    });

    $(".shop").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".category").offset().top - $(".header").height()
        }, 500);
    });

    $(".featured").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".products").offset().top - $(".header").height()
        }, 500);
    });

    $(".updates").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".sign-up").offset().top - $(".header").height()
        }, 500);
    });


    $(".button").click(function() {
        var email = $(".email").val();
        if(email == "") {
            alert("E-mail Field empty!");
        } else {
            alert("Thank you for subscribing!");
        }
    });

    $(".email").keypress(function(enter) {
        var email = $(".email").val();
        if(enter.which == 13) 
        if(email == "") {
            alert("E-mail Field empty!");
        } else {
            alert("Thank you for subscribing!");
        }
    });

    $(".form").on("submit", function(event) {
        event.preventDefault();
    });

// BUTTON CART FUNCTIONS

    $(".addToCart").click(function(){
        cartNumber++;
        $(".cartNumber").text(cartNumber);

        if(cartNumber > 0) {
            $(".cartNumber").show();
        
        }
    });

    if(cartNumber == 0) {
        $(".cartNumber").hide(); 
    }


});