document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            console.log('Button clicked:', button.textContent);
        });
    });
});

//Logs a message when a button is clicked
