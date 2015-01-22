(function () {
  'use strict';

  var panel = $('.simular');
  var words = '李二喵你老公叫你回家吃饭饭啦';

  var colors = function () {
    var number = function () {
      return parseInt(Math.random() * 255)
    };
    return 'rgba(' + number() + ',' + number() + ',' + number() + ',' + (0.5 + Math.random() * 0.5) + ')';
  };

  var count = 0;

  function animate() {
    words.split('').forEach(function (letter, i) {
      setTimeout(function () {
        $('<span class="font">' + letter + '</span>').css('color', colors()).css('left', Math.random() * 568).appendTo(panel);
      }, i * 100);
    });
    if (++count < 5) {
      setTimeout(animate, words.split('').length * 100);
    }
  }

  animate();

})();