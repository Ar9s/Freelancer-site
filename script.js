document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector('.contact form button');
    const form = document.querySelector('.contact form');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Останавливаем стандартное поведение формы

        // Показываем сообщение о том, что форма отправлена
        alert('Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.');

        // Переадресовываем на главную страницу через 2 секунды
        setTimeout(function () {
            window.location.replace('index.html'); // Используем replace для правильной переадресации
        }, 2000); // 2 секунды задержки перед переадресацией
    });
});
