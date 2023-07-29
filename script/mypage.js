// mypage js
// window.addEventListener("wheel", function(e){
//     e.preventDefault();
// },{passive : false});

// const mHtml = $("html");
// let page = 1;

// mHtml.animate({scrollTop : 0},10);

// $(window).on("wheel", function(e) {
//     if(mHtml.is(":animated")) return;
//     if(e.originalEvent.deltaY > 0) {
//         if(page == 4) return;
//         page++;
//     } else if(e.originalEvent.deltaY < 0) {
//         if(page == 1) return;
//         page--;
//     }
//     let posTop =(page-1) * $(window).height();
//     mHtml.animate({scrollTop : posTop});
// })

const marquee1 = document.getElementById('first-marq')
const marquee2 = document.getElementById('second-marq')

const pTag1 = document.getElementById('first-parallel');
const pTag2 = document.getElementById('second-parallel');

const textArr1 = 'Hello Nice to meet you How are you I am fine Thak you'.split(' ');
const textArr2 = 'This is my portfolio Please scroll down Have a good day'.split(' ');

function initTexts(element, textArray){
    textArray.push(...textArray)
    for(let i = 0; i < textArray.length; i++){
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
}

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);

let count1 = 0;
let count2 = 0;

function marqueeText(count, element, direction){
    if(count > element.scrollWidth / 2){
        element.style.transform = `translate(0)`;
        count = 0;
    }
    element.style.transform = `translate(${count * direction}px)`;
    return count;
}

function animate(){
    count1++;
    count2++;

    count1 = marqueeText(count1, marquee1, -1)
    count2 = marqueeText(count2, marquee2, 1)

    window.requestAnimationFrame(animate);
}
animate();