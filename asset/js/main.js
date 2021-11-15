$(document).ready(function(){

    $(".burger").click(function(){
        $(this).toggleClass("active");
        $(".my-nav").toggleClass("active");
    });

});