const logo = document.querySelectorAll('#logo__hover');
var modal = document.getElementById("modal");
const product = document.querySelectorAll('.product__information');

for (i = 0; i < logo.length; i++)
{
    logo[i].onmouseover = function() {
        modal.style.display = "block";
    };
    logo[i].onmouseout = function() {
        modal.style.display = "none";
    };
}

// for (i = 0; i < logo.length; i++)
// {
//     logo[i].onmouseover = function() {
//         product.style.animation = 
//     }
// }
// const product = document.querySelectorAll('.product__information');

// BUTTON NEXT PREVIOUS BANNER 
// var btn_next = document.getElementsByClassName('btn__next');
// var banner = document.getElementsByClassName('banner');
// var btn_previous = document.getElementsByClassName('btn__previous');

// banner.onmouseover = function() {
//     btn_next.style.display = "block";
// };
