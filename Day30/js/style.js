
// 자바스크립트 코드로 DOM에게 style를 적용시키는데
// CSS 인라인 기법으로 적용됩니다.


const box = document.querySelector(".box");
box.addEventListener("click", e=>{
    e.currentTarget.style.backgroundColor = "hotpink";
    e.currentTarget.style.width = 200 + "px";
});


// getComputedStyle = 계산된 스타일
// 자바스크립트가 stylesheet에 접근할 수 없기 때문에 브라우저에 계산되어 랜더링 된
// 요소를 다시 계산하여 가지고 옵니다.
const box2 = document.querySelector(".box2");
box2.addEventListener("click", e=>{
    const bg = getComputedStyle(e.currentTarget).backgroundColor;
    const wid = getComputedStyle(e.currentTarget).width;
    console.log(bg);
    console.log(wid);
});



// =======================================================

// DOM 속성 제어하기

const a = document.querySelector("a");

const a_href = a.getAttribute("href");    //get은 정보를 알려고 쓰는 코딩
const a_title = a.getAttribute("title");   //get은 정보를 알려고 쓰는 코딩
console.log(a_href);
a.setAttribute("href", "https://nate.com") //변경하고자 하는 속성, 변경 값
a.setAttribute("title", "네이트로 이동");
a.setAttribute("target", "_self");
a.innerText = "네이트";

console.log(a.innerText);  // 반대로 글자를 가져오고 싶을 때