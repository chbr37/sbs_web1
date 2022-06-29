
$(document).ready(function(){

    // 콜백함수 : 수행을 완료하면 이어서 실행되는 함수. 생략 가능

    //hide() : 해당 요소를 숨기는 기능
    //show() : 숨겨져 있는 요소를 노출시키는 기능
    //toggle() : 선택한 요소가 노출상태면 숨기고, 숨김 상태면 노출 시킵니다.
    //인수값으로 정수를 넣어줄 수 있음 1000 = 1s

   
    $(".btn1").on("click",function(){
        $("h2").hide(1000,function(){
            alert("숨김 처리 완료되었습니다.");
        });

    $(".btn2").on("click",function(){
        $("h2").show(1000,function(){
            alert("노출 처리 완료되었습니다.");
        });
    });


 $(".btn3").on("click",function(){
    $(".img1").toggle(1000);
 });

    //fadeIn / fadeOut / fadeToggle
    //fadeIn() : 숨겨져있던 요소를 점점 투명해지면서 노출되는 기능
    //fadeOut() : 노출되어 있는 요소를 점점 사라져가는 기능 (투명)
    //fadeToggle() : 노출이 되어 있는 요소는 점점 사라지고, 사라져 있는 요소는 점점 노출되어 선명해지는 기능

$(".btn4").on("click",function(){
    $(".img2").fadeOut(1000);
});
$(".btn5").on("click",function(){
    $(".img2").fadeIn(1000);
});
$(".btn6").on("click",function(){
    $(".img2").fadeToggle(1000);
});

//fadeTo : 선택한 요소를 지정한 투명도 값 까지 투명도를 부여하는 기능
//투명도는 두번째 인수 값에 삽입하며, 0 ~ 1 까지 (소수점 포함) 입력 가능

$(".btns1").on("click",function(){
    $(".img3").fadeTo(100,1);    //인수값 1 : 구동시간 / 2 : 투명도 값
});
$(".btns2").on("click",function(){
    $(".img3").fadeTo(1000,0.75);
});
$(".btns3").on("click",function(){
    $(".img3").fadeTo(1000,0.5);
});
$(".btns4").on("click",function(){
    $(".img3").fadeTo(1000,0.25);
});
$(".btns5").on("click",function(){
    $(".img3").fadeTo(1000,0);
});

// ====================================================
    //slideUp() : 요소를 숨길 때 사용하는 기능
    //slideDown() : 요소를 나타날 때 사용하는 기능
    //slideToggle() : 요소가 나타나 있으면 숨기고, 숨겨져 있으면 나타내는 기능

    $(".btns6").on("click",function(){
        $(".box").slideUp(1000);
    });
    $(".btns7").on("click",function(){
        $(".box").slideDown(1000);
    });
    $(".btns8").on("click",function(){
        $(".box").slideToggle(1000);
    });
});























})