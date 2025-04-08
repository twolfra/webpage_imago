document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeTextButton');
    const message = document.getElementById('message');

    button.addEventListener('click', function() {
        message.textContent = "You have clicked the button!";
    });
});

