fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then((response) => { return response.json() })
    .then(data => {

        let buyUsd,
            buyEur,
            saleUsd,
            saleEur;

        const patternFloat = /^[0-9]{1,10}[\,\.]{1}[0-9]{1,10}$/,
            patternInt = /^[0-9]{1,10}$/,
            button = document.getElementById('btn'),
            usInput = document.getElementById('us-input'),
            display = document.getElementById('display'),
            arr = data;

        for (let index = 0; index < arr.length; index++) {
            if (data[index].ccy === "USD") {
                buyUsd = data[index].sale;
                saleUsd = data[index].buy;
            } else if (data[index].ccy === "EUR") {
                buyEur = data[index].sale;
                saleEur = data[index].buy;
            }
        }

        button.onclick = function checkInput() {
            if (patternFloat.test(usInput.value) || patternInt.test(usInput.value)) {
                calculate();
            } else if (usInput.value === "") {
                display.style.color = 'red';
                display.innerHTML = "Ошибка. Отстутствует ввод."
            } else {
                display.style.color = 'red';
                display.innerHTML = "Ошибка. Неверный формат.";
            }
        }

        function showCourse(course, className, index) {
            let show = document.getElementsByClassName(className);
            show[index].innerHTML = parseFloat(course).toFixed(2);
        }

        function calculate() {
            let nSelQuotation = document.getElementById('sel-quotation').selectedIndex,
                nSaleBuy = document.getElementById('sale-buy').selectedIndex;

            display.style.color = "#f8d4a0";
            if (nSelQuotation === 0) {
                if (nSaleBuy === 0) {
                    showCourse(`${usInput.value * buyUsd} UAH`, 'display', 0);
                } else if (nSaleBuy === 1) {
                    showCourse(`${usInput.value * saleUsd} UAH`, 'display', 0);
                }
            } else if (nSelQuotation === 1) {
                if (nSaleBuy === 0) {
                    showCourse(`${usInput.value * buyEur} UAH`, 'display', 0);
                } else if (nSaleBuy === 1) {
                    showCourse(`${usInput.value * saleEur} UAH`, 'display', 0);
                }
            }
        }
        showCourse(buyUsd, 'buy', 0);
        showCourse(buyEur, 'buy', 1);
        showCourse(saleUsd, 'sale', 0);
        showCourse(saleEur, 'sale', 1);
    })
    .catch(err => { console.log(err) })