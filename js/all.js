// 滾動滑順 
const scrollLink = document.querySelectorAll('.scrollLink')
const navHeight = document.querySelector('nav')

scrollLink.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault()
        const active = document.querySelector(item.getAttribute('href'))

        window.scrollTo({ "behavior": "smooth", "top": active.offsetTop - navHeight.clientHeight })
    })
})

// 開闔
function toggleContent(e) {
    var Content = document.querySelector(`#${e}`);

    if (Content.style.maxHeight) {
        Content.style.maxHeight = null;
    } else {
        Content.style.maxHeight = Content.scrollHeight + "px";
    }
}
// tick
window.addEventListener('scroll', () => {
    let Tick = document.querySelectorAll('.tickbox');
    let Tick1 = document.querySelector('#tick1');
    var scrollPosition = window.scrollY;
    var targetPosition = Tick1.getBoundingClientRect().top + window.scrollY;


    Tick.forEach((item) => {
        if (scrollPosition > targetPosition - 600) {
            item.classList.add('check')
        } else {
            item.classList.remove('check')
        }
    });
})