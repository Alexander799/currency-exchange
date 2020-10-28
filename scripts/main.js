const markup = 0.01;
const usdUah = 28.48;
const eurUah = 33.47;

const buyUsd = usdUah + (usdUah * markup);
const buyEur = eurUah + (eurUah * markup);

const saleUsd = usdUah - (usdUah * markup);
const saleEur = eurUah - (eurUah * markup);

function showCourse(course, className, index) {
    let show = document.getElementsByClassName(className);
    show[index].innerHTML = course;
}

showCourse(buyUsd, 'buy', 0);
showCourse(buyEur, 'buy', 1);
showCourse(saleUsd, 'sale', 0);
showCourse(saleEur, 'sale', 1);