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

});