'use strict';

var image = document.getElementById('show-message');
var hiddenMessage = document.getElementById('hidden-message');

var showMessage = function showMessage() {
  hiddenMessage.classList.remove('hide');
};

image.addEventListener('mouseover', showMessage);