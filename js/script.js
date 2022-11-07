'use strict';

/* ПЕРЕМЕННЫЕ */
let faqQuestions = document.querySelectorAll(".faq_question")
let faqAnswers = document.querySelectorAll(".faq_answer")
let faqChevron = document.querySelectorAll(".faq_chevron")
let sideMenuButton = document.querySelector(".side_menu_button")
let sideMenu = document.querySelector(".side_menu")
let bambitLogo = document.querySelector(".bambit")

/* ПОВЕДЕНИЕ АККОРДЕОНА обработка нажатия на аккордеон */

faqQuestions.forEach((el) => {
    
    el.addEventListener("click",showContent);

    function showContent () { //Функция раскрытия/скрытия аккордеона
        let content = el.nextElementSibling

        if (content.style.maxHeight) {
            faqAnswers.forEach((item) => {item.style.maxHeight=null; item.style.marginBottom = null;})
            faqChevron.forEach((item) => item.style.transform = "rotate(45deg) scale(-1,-1)")
        } else {
            faqAnswers.forEach((item) => {item.style.maxHeight=null; item.style.marginBottom = null;})
            faqChevron.forEach((item) => item.style.transform = "rotate(45deg) scale(-1,-1)")

            content.style.maxHeight = content.scrollHeight + "px"
            content.style.marginBottom = "1rem"
            el.querySelector('div').style.transform = "rotate(45deg) scale(1,1)"
        }
    }
});

/* Обработка нажатия на кнопку бокового меню */

sideMenuButton.addEventListener("click",showSideMenu);

function showSideMenu () { //Функция раскрытия/скрытия бокового меню
    sideMenu.classList.toggle('open');
}

/* Симуляция клика на первой вкладки для её открытия
а также вызов АЛЕРТ при нажати на ссылки */

faqQuestions[0].click();

document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click",link);
    function link () {alert("Переход по ссылке")}
});

setTimeout(function() {
    new HoverIntent({
    elem,
      over() {
        tooltip.style.left = elem.getBoundingClientRect().left + 0 + 'px';
        tooltip.style.top = elem.getBoundingClientRect().top  -50 +'px';
        tooltip.hidden = false;
      },
      out() {
        tooltip.hidden = true;
      }
    });
  }, 1000);
