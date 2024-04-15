window.$ = require('./jQuery');

const quotes = ['Prvi', 'Drugi', 'Treći'];

$(function () {
  const quote = $('#quote');
  const generateBtn = $('#generate');

  generateBtn.on({
    click: () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);

      quote
        .fadeOut(1500, () => {
          quote.text(quotes[randomIndex]);
        })
        .fadeIn();
    },
  });
});
