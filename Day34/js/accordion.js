

$(function(){

    $(".accordion-list > li .answer").hide();

    $(".accordion-list > li").on("click",function(){

        if($(this).hasClass("active")){
            $(this).removeClass("active").find(".answer").slideUp();
        }else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slidDown();
        }
        return false;
    });

});