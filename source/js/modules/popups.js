/* global document*/
/* eslint-disable no-unused-vars */
'use strict';

const $ = require('jquery');
const magnificPopup = require('magnific-popup');

$(document).ready(function () {
  $('.partners__link').magnificPopup({
    type:'inline',
    midClick: true,
    tClose: 'Закрыть (Esc)',
    closeMarkup: '<button title="%title%" type="button" class="mfp-close" style="width: 30px; height: 30px; background-color: rgba(0, 0, 0, 0.75); border-radius: 50%; transform: translate(50%, -50%);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30"><path fill="#ffffff" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30Z"/><path fill="#ffffff" d="M22.36,9.64a1,1,0,0,0-1.41,0l-5,5-5-5A1,1,0,0,0,9.64,11l5,5-5,5A1,1,0,1,0,11,22.36l5-5,5,5A1,1,0,0,0,22.36,21l-5-5,5-5A1,1,0,0,0,22.36,9.64Z"/></svg></button>'
  });

  $(document).on('click', '.mfp-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
