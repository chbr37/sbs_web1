$(document).ready(function(){

    $(".openModal").on("click",function(e){
        $("#modal").show();  //모달창 오픈
        $("body").append("<div class='blackOn'></div>");
    });
    $("body").on("click",function(e){
        if(e.target.className ==="close" || e.target.className ==="blackOn"){
            $("#modal").hide();
            $(".blackOn").hide();
        }
    })
});