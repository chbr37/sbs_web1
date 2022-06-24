

/* 
    setTimeout : 일정 시간 뒤에 특정 코드를 호출(지연)
    setInterval :  일정 시간 간격마다 특정 코드를 반복(반복)
    clearInterval :  setInterval의 반복을 해제(해제)
*/

const box = document.querySelector(".box");
box.addEventListener("click", e=>{

    setTimeout(()=>{
        console.log("clicked!");
    },3000)   //인수가 2개 = 익명함수, 지연될 시간, 1000 = 1s
   
});

let timer = null;

box.addEventListener("mouseenter", e=>{
     timer = setInterval(()=>{
        console.log("mouse Entered!");
    },1000) // 인수가 2개 = 익명함수, 반복될 시간
});

box.addEventListener("mouseleave", e=>{
    console.log("mouse Leave!");
    clearInterval(timer);
});

//=================================================================

// this  =window 객체 =ES6

/* 
for (let i = 0; i <3; i++){
    console.log(this);
} */

/* setTimeout(()=>{
    console.log(this);
},3000); */

/* if(true){
    console.log(this);
} */

const btn = document.querySelector("button");
btn.addEventListener("click" , function(e){
    console.log(this);
}.bind("apple"));

btn.addEventListener("click", e=>{
    console.log(this);
});