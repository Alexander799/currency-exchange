let markup = 0.01,
    usdUah = 28.48,
    eurUah = 33.47;

const patternFloat = /^[0-9]{1,10}[\,\.]{1}[0-9]{1,10}$/,
    patternInt = /^[0-9]{1,10}$/,
    buyUsd = usdUah + (usdUah * markup),
    buyEur = eurUah + (eurUah * markup),
    saleUsd = usdUah - (usdUah * markup),
    saleEur = eurUah - (eurUah * markup),
    button = document.getElementById('btn'),
    usInput = document.getElementById('us-input'),
    nSelQuotation = document.getElementById('sel-quotation').options.selectedIndex,
    selQuotation = document.getElementById('sel-quotation').options[nSelQuotation].text,
    nSaleBuy = document.getElementById('sale-buy').options.selectedIndex,
    saleBuy = document.getElementById('sale-buy').options[nSelQuotation].text,
    display = document.getElementById('display');

button.onclick = function checkInput() {
    if (patternFloat.test(usInput.value) || patternInt.test(usInput.value)) {
        calculate();
    } else {
        display.style.color = 'red';
        display.innerHTML = "Ошибка. Неверный формат";
    }
}

function showCourse(course, className, index) {
    let show = document.getElementsByClassName(className);
    show[index].innerHTML = course;
}

function calculate() {
    display.style.color = "#f8d4a0"
    display.innerHTML = "Test ok";
}

showCourse(buyUsd, 'buy', 0);
showCourse(buyEur, 'buy', 1);
showCourse(saleUsd, 'sale', 0);
showCourse(saleEur, 'sale', 1);