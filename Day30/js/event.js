/* 
    Event : 무언가 일어나는 행위, 액션 - 2가지
    1.사용자가 발생시키는 이벤트
    (click, mouseover, mouseleave, mousemove, mousewheel, scroll)
    2. 시스템이 발생시키는 이벤트
    (load, error)

    Event 연결 방법 - 2가지
    1. DOM.onclick = ()=> {} (익명함수를 대입하는 방식)
    2. DOM.addEventListener("이벤트명", ()=> {}) (자체 내장함수를 이용하는 방법)

 */

 // const a = document.querySelector("a");
// console.dir(a);
/*
a.onclick = ()=>{
    console.log("You Cliked.");
}

a.onclick = ()=>{
    console.log("You Clicked Again.");
} */

// a.addEventListener("click", ()=>{
   // console.log("You Cliked!")

// });
// a.addEventListener("click", ()=>{
   //  console.log("You Clicked Again!")
// });
// 메소드 = 특정 객체에 종속되어 있는 함수를 메소드라고 칭합니다.

// ======================================================

// 이벤트 발생시 연결된 인수로 전달되는 이벤트 객체

const a = document.querySelector("a");
a.addEventListener("click", e=>{
    e.preventDefault();   // 상용구문
    console.log("You Clicked!");
});

const box = document.querySelector(".box");
box.addEventListener("mousemove", e=>{
    //console.log(e);
    //console.log(`현재 마우스 x축 : ${e.pageX}`);         //브라우저 기준
    //console.log(`현재 마우스 y축 : ${e.pageY}`);        //브라우저 기준
    console.log(`offsetX : ${e.offsetX}`); //요소 기준
    console.log(`offsetY : ${e.offsetY}`); //요소 기준
});

window.addEventListener("mousewheel", e=>{
   // console.log(e.deltaY);

    if(e.deltaY > 0) console.log("Wheel Down!!");
    if(e.deltaY < 0) console.log("Wheel Up!!");
});