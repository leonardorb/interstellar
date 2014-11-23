(function() {
  $(document).ready(function() {
    var $rocket, animateRocket;
    $rocket = $('.rocket');
    animateRocket = function() {
      var currentHeight, currentWidth;
      currentWidth = window.innerWidth;
      currentHeight = window.innerHeight;
      return $rocket.fadeIn(1000).velocity({
        rotateZ: "+=45deg",
        left: "+=" + currentWidth / 2,
        top: "-=" + currentHeight / 5
      }, {
        easing: "linear",
        duration: 5000
      }).velocity({
        rotateZ: "-=45deg",
        left: "+=" + currentWidth / 8,
        top: "-=" + currentHeight / 10
      }, {
        easing: "linear",
        duration: 3000
      }).velocity({
        rotateZ: "-=45deg",
        left: "+=" + currentWidth / 10,
        top: "-=" + currentHeight / 10
      }, {
        easing: "linear",
        duration: 2000
      }).velocity({
        left: "-=" + currentWidth / 3,
        top: "-=" + currentHeight / 6
      }, {
        easing: "linear",
        duration: 5000
      }).velocity({
        rotateZ: "+=45deg",
        left: "-=" + currentWidth / 4,
        top: "-=" + currentHeight / 5
      }, {
        easing: "linear",
        duration: 3000
      }).velocity({
        rotateZ: "-=45deg",
        top: "-=" + currentHeight / 5
      }, {
        easing: "linear",
        duration: 1000,
        complete: function() {
          $rocket.attr('style', '');
          $rocket.velocity({
            rotateZ: "+=45deg"
          });
          return setTimeout(function() {
            return animateRocket();
          }, 15000);
        }
      });
    };
    setTimeout(function() {
      return animateRocket();
    }, 2000);
    return window.onresize(function() {
      return animateRocket();
    });
  });

}).call(this);
