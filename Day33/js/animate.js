$(document).ready(function(){

    // animate() : 선택한 요소에 대한 다양한 동작(motion) 효과를 적용하는 메소드
    // - 인수 안에 중괄호 넣어서 모션으로 적용할 속성을 css style 방식으로 입력하여 사용
    $(".start").on("click",function(){

        $("h1").animate({marginLeft:"250px"},5000, function(){
            alert("구동 완료");
        });
     
        $("h2").animate({marginLeft:"250px",width:"200px",opacity:0.25},5000);

        $("h3").animate({marginLeft:"250px"},3000,function(){
            $("h3").animate({marginLeft:"100px"},2000);
        });

        //delay() : 시간 지연
        //인수 값에 정수를 넣어서 사용하며, 해당 정수의 값만큼 기다린 뒤에 구동
        $("h4").delay(2000).animate({marginLeft:"250px"},3000);
    });

    //stop() : 해당 요소가 구현하고 있는 기능을 정지시킴

    $(".stop").on("click",function(){
        $("h1,h2,h3,h4").stop();
    });
























});