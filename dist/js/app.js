"use strict";

window.$ = require('./jQuery');
var quotes = ['Prvi', 'Drugi', 'Treći'];
$(function () {
  var quote = $('#quote');
  var generateBtn = $('#generate');
  generateBtn.on({
    click: function click() {
      var randomIndex = Math.floor(Math.random() * quotes.length);
      quote.fadeOut(1500, function () {
        quote.text(quotes[randomIndex]);
      }).fadeIn();
    }
  });
});