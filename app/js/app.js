(function () {
  'use strict';

  var panel = $('.simular');
  var words = '李二喵不生气';

  var random = function (min, max) {
    return min + parseInt(Math.random() * (max - min));
  };

  var colors = function () {
    return 'rgba(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 5, 1) + ')';
  };

  var speed = function (t) {
    return 1 * t/100;
  };

  var entity = function (letter) {
    var box = $('<span class="font" />').append(letter);
    box.css({
      top: 0,
      left: random(0, 320)
    });

    var i = 0;
    setInterval(function () {
      ++i;
      var top = speed(i * 40);
      if (top > 568) {
        i = 0;
        top = -30;
        box.css('left', random(0, 320));
      }
      box.css('top', top);
    }, 40)
    return box;
  };

  var count = 0;

  function animate() {
    entity('你').css('color', colors()).appendTo(panel);
    // words.split('').forEach(function (letter, i) {
    //   setTimeout(function () {
    //     entity(letter).css('color', colors()).appendTo(panel);
    //   }, i * 100);
    // });
    // if (++count < 5) {
    //   setTimeout(animate, words.split('').length * 100);
    // }
  }

  animate();

})();