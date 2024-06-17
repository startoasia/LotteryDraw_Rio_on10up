let Hamburger = document.querySelector('#hamburger');
let open = Hamburger.querySelector('.open')
let close = Hamburger.querySelector('.close')
let nav_bar = document.querySelector(".nav_bar");
let NavList = document.querySelector(".navList");

let clickNum = 0;
Hamburger.addEventListener("click", () => {
    // Hamburger.classList.toggle('open');
    // // nav_bar.classList.toggle('open--nav_bar');
    // clickNum++;
    // if (clickNum % 2 == 1) {
    //     // BurgerTop.src = './images/menu/open_btn_2.png';
    //     // BurgerDown.src = './images/menu/open_btn_1.png';
    // } else {
    //     // BurgerTop.src = './images/menu/close_btn_2.png';
    //     // BurgerDown.src = './images/menu/close_btn_1.png';
    // }
    close.classList.toggle('close--show');
    NavList.classList.toggle("is-open");
});

let NavItem = document.querySelectorAll(".nav_item");
NavItem.forEach((item) => {
    item.addEventListener("click", function () {
        clickNum++;
        // nav_bar.classList.remove('open--nav_bar');
        // Hamburger.classList.remove('open');
        // BurgerTop.src = './images/menu/close_btn_2.png';
        // BurgerDown.src = './images/menu/close_btn_1.png';
        close.classList.toggle('close--show');
        NavList.classList.remove("is-open");
    });
});