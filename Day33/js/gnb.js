

$(function(){

    $(".nav a").on("mouseover", function(){

        let position = $(this).parent().position();
        let width = $(this).parent().width();

        $(".nav .slide2").css({
            left: +position.left,
            width:width,
            opacity:1
        })

    });
    $(".nav a").on("mouseout",function(){
        $(".nav .slide2").css({opacity:0});
    });

    $(".nav a").on("click", function(){
        let position = $(this).parent().position();
        let width = $(this).parent().width();

        $(".nav .slide1").css({
            left: +position.left,
            width:width
        });
    })
    let position = $(".nav li:nth-of-type(1)a").parent().position();
    let width = $(".nav li:nth-of-type(1)a").parent().width();

    $(".nav .slide1").css({
        left: +position.left,
        width:width,
        opacity:1
    })


});