// Функция для получения данных с сервера
async function getCurrencies() {

    // Записываем адрес в переменную
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

    // Отчищаем сообщение об ошибке
    document.querySelector('#error').innerText = '';

    // RESOLVE
    try {

        // Запрашиваем данные по ссылке
        const response = await fetch(url);

        // Пакуем в JSON
        const data = await response.json();

        // Вызываем функцию для обработки данных
        renderRates(data);
    
    // REJECT
    } catch(err) {

        err != '' ? document.querySelector('#error').innerText = err : document.querySelector('#error').innerText = 'Ошибка!';
       
    }   
}

// Функция для отображения данных на странице
function renderRates(data) {

	const usdRate = data.Valute.USD.Value.toFixed(2);
	const eurRate = data.Valute.EUR.Value.toFixed(2);

	const usdElement = document.querySelector('#usd');
	const eurElement = document.querySelector('#eur');

	usdElement.innerText = usdRate;
	eurElement.innerText = eurRate;
}


getCurrencies();