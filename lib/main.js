'use strict';

var image = document.getElementById('show-message');
var hiddenMessage = document.getElementById('hidden-message');

var showMessage = function showMessage() {
  hiddenMessage.classList.remove('hide');
};

var hideMessage = function hideMessage() {
  hiddenMessage.classList.add('hide');
};

var colorChange = function colorChange() {
  image.classList.add('dim');
};

var colorChangeAgain = function colorChangeAgain() {
  image.classList.remove('dim');
};

//Show message
image.addEventListener('mouseenter', showMessage);
image.addEventListener('mouseleave', hideMessage);

//opacity hover effect for image
image.addEventListener('mouseenter', colorChange);
image.addEventListener('mouseleave', colorChangeAgain);