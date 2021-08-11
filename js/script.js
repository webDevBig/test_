var open_sub_menu = document.querySelectorAll('.open_sub_menu');
[].forEach.call(open_sub_menu, function (el) {
    el.onclick = function (e) {
        el.parentElement.querySelector('.sub_menu').classList.toggle('sub_menu_open')
        el.classList.toggle('arrow_transform')
    }
});

var open_menu = document.querySelectorAll('.mobile_btn');
[].forEach.call(open_menu, function (el) {
    el.onclick = function (e) {
        document.querySelector(".main_menu").classList.toggle('mobile_menu_open');
        document.querySelector("body").classList.toggle('body')
    }
});
var close_menu = document.querySelectorAll('.close_menu');
[].forEach.call(close_menu, function (el) {
    el.onclick = function (e) {
        document.querySelector(".main_menu").classList.toggle('mobile_menu_open');
        document.querySelector("body").classList.toggle('body')
    }
});
