const cityValidation = /^([^0-9]*)$/;
const message = document.getElementById('alert');
const form = document.querySelector('form');

form.city.addEventListener('keyup', e => {
    if (cityValidation.test(e.target.value)) {
        form.city.setAttribute('class', 'form-control p-4 is-valid');
        message.setAttribute('style', 'visibility:hidden');
    }

    else {
        form.city.setAttribute('class', 'form-control p-4 is-invalid');
        message.setAttribute('style', 'visibility:visible');
        message.innerHTML = 'Invalid city name';
    }
});