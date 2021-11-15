$(document).ready(function(){

    $(".burger").click(function(){
        $(this).toggleClass("active");
        $(".my-nav").toggleClass("active");
    });

    $(".close-bt").click(function(){
        $(".overlay").removeClass("show");
    });

    $(".pop-bt").click(function(p){
        p.preventDefault();

        $(".overlay").removeClass("show");
        $($(this).attr("href")).addClass("show");
    });

    // Select all »a« elements with a parent class »links« and add a function that is executed on click
    $( '.my-nav li a' ).on( 'click', function(e){

        $(".my-nav li").removeClass("active");
        $($(this).parent()).addClass("active");
        
        var href = $(this).attr( 'href' );
        
        $( 'html, body' ).animate({
            scrollTop: $( href ).offset().top
        }, '300' );
        
        e.preventDefault();
    
    });

});