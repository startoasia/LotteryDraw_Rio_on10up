const shakeCard = document.querySelectorAll(".js-shake");
const shakeBottle = document.querySelector(".shake_bottle");
const shakeBtn = document.querySelector(".shake_btn");
const shakeHand = document.querySelector(".shake_hand");
const shake_cardAnswer = document.querySelector(".shake_cardAnswer");
const popBG = document.querySelector(".popBG ");
shakeBtn.addEventListener("click", () => {
    console.log("hi");
    // 按鈕
    shakeBtn.classList.add("shake_btn--close");
    shakeHand.classList.add("shake_btn--close");
    goAnimate();
});

function goAnimate() {
    // 籤筒
    shakeBottle.classList.add("shake_anBottle");
    //   卡片
    shakeCard.forEach((item, ind) => {
        if (ind % 2 === 0) {
            item.classList.add("shake_an_A");
        } else {
            item.classList.add("shake_an_B");
        }
    });

    //   結束上面動畫
    setTimeout(() => {
        // 籤筒
        shakeBottle.classList.remove("shake_anBottle");
        //   卡片
        shakeCard.forEach((item, ind) => {
            if (ind % 2 === 0) {
                item.classList.remove("shake_an_A");
            } else {
                item.classList.remove("shake_an_B");
            }
        });
        // 按鈕
        shakeBtn.classList.remove("shake_btn--close");
        shakeHand.classList.remove("shake_btn--close");

        shake_cardAnswer.classList.add("shake_cardAnswer--show");
        setTimeout(() => {
            shake_cardAnswer.classList.add("scaleShow");
        }, 800);
        setTimeout(() => {
            shake_cardAnswer.classList.remove("shake_cardAnswer--show");
            shake_cardAnswer.classList.remove("scaleShow");
            popShow();
        }, 2250);
    }, 2000);
}

function popShow() {
    const data = [
        "./images/straws/pop-1.png",
        "./images/straws/pop-2.png",
        "./images/straws/pop-3.png",
    ];
    const showImg = document.querySelector(".popBG .container");
    popBG.classList.add("popBG--show");
    var num = Math.floor(Math.random() * 3);
    console.log(num)
    showImg.innerHTML = `<i class="fa-solid fa-xmark x-mark" onclick="popClose('popBG')"></i>
    <a href="#offer" class="popBtn bounce scrollLink" onclick="popClose('popBG')">
        <div class="light">
            <img src="./images/straws/pop-btn.png" alt="" >
        </div>
    </a>
    <img class="popImg" src="${data[num]}" alt=""> `;
    document.body.style.overflowY = "hidden"
}
function popClose(e) {
    let Close = document.querySelector(`.${e}`);

    // Close.addEventListener("click", () => {
    Close.classList.remove("popBG--show");
    document.body.style.overflowY = "scroll"
    // })
}
