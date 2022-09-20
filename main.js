var x = screen.width;
var modal = document.getElementById("modal");
const slide = document.querySelectorAll(".header_product-wrap");
const product = document.querySelectorAll(".contain_product-information");
for (let i = 0; i < slide.length; i++) {
    if (slide[i]) {
        slide[i].onmouseover = function () {
            product[i].classList.add("active");
            modal.classList.add("open");
        };
    }
    slide[i].onmouseout = function () {
        product[i].classList.remove("active");
    };
    if (!silde[i] || !product[i]) {
        modal.classList.remove("open");
    }
}
const getWidth = () => {
    return Math.max(document.body.offsetWidth / 2 + 30);
};
var marginTopContainer = document.getElementsByClassName("container");
$(marginTopContainer).css("margin-top", getWidth);

console.log(getWidth());
