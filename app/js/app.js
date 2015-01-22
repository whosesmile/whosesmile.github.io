(function () {
  'use strict';

  var panel = $('.simular');
  var words = '张春苗你老公叫你回家吃饭饭啦';

  var colors = function () {
    var number = function () {
      return parseInt(Math.random() * 255)
    };
    return 'rgba(' + number() + ',' + number() + ',' + number() + ',' + (0.5 + Math.random() * 0.5) + ')';
  };

  function animate() {
    words.split('').forEach(function (letter, i) {
      setTimeout(function () {
        $('<span class="font">' + letter + '</span>').css('color', colors()).appendTo(panel);
      }, i * 350);
    });

    setTimeout(animate, words.split('').length * 400);
  }

  animate();

})();