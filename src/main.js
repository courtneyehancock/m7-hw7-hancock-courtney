const image = document.getElementById('show-message');
const hiddenMessage = document.getElementById('hidden-message');

const showMessage = () => {
  hiddenMessage.classList.remove('hide');
}

const hideMessage = () => {
  hiddenMessage.classList.add('hide');
}

const colorChange = () => {
  image.classList.add('dim');
}

const colorChangeAgain = () => {
  image.classList.remove('dim');
}

//Show message
image.addEventListener('mouseenter', showMessage);
image.addEventListener('mouseleave', hideMessage);

//opacity hover effect for image
image.addEventListener('mouseenter', colorChange);
image.addEventListener('mouseleave', colorChangeAgain);
