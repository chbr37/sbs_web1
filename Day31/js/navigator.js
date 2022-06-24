

/* 
    navigatior

*/

const version = navigator.userAgent;
console.log(version);

const isEdg =  /edg/i.test(version);
const isIE = /trident/i.test(version);

if(isEdg){
    console.log("Edge 브라우저로 접속했습니다.");
    document.querySelector("body").style.backgroundColor = "tomato";
}
if(isIE){
    console.log("IE 브라우저로 접속했습니다.");
    document.querySelector("body").style.backgroundColor = "green";
    alert("IE는 지원이 종료된 브라우저 입니다. 크롬 브라우저를 이용해 주세요.");
    location.href="https://www.google.co.kr/chrome/?brand=CHBD&gclid=EAIaIQobChMIlIjmsYPG-AIViTMqCh08Cw6fEAAYASAAEgI5afD_BwE&gclsrc=aw.ds";
}
if(!isEdg && !isIE){
    console.log("Chrome 브라우저로 접속했습니다.");
    document.querySelector("body").style.backgroundColor = "hotpink";
}