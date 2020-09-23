window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggle() {
    var header = document.querySelector("header");
    header.classList.toggle("active");
}

//-------------//

const texts = ['Everybody in this country should learn how to program a computer... because it teaches you how to think.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);

})();