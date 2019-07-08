const image = document.getElementById('show-message');
const hiddenMessage = document.getElementById('hidden-message');

const showMessage = () => {
  hiddenMessage.classList.remove('hide');
}

image.addEventListener('mouseover', showMessage);
