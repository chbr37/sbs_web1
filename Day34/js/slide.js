
$(function(){

    let i = 0;     // 슬라이드 넘버 1
    $(".next").click(function(){
        i++;   //슬라이드 넘버 +1 증가
        if(i > 3){     //i가 3보다 크다면
            i=3;     //구동하지 않음
        }   //작다면 아래 구문 실행
        $(".slide_container .slide").animate({marginLeft:-1200*i+"px"})
    });

    $(".prev").click(function(){
        i--;
        if(i < 0){
            i = 0;
        }
        $(".slide_container .slide").animate({marginLeft:-1200*i+"px"})
    })
})