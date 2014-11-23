(function() {
  $(document).ready(function() {
    var $rocket, animateRocket;
    $rocket = $('.rocket');
    animateRocket = function() {
      return $rocket.fadeIn(1000).velocity({
        rotateZ: "+=45deg",
        left: "+=750",
        top: "-=300"
      }, {
        easing: "linear",
        duration: 5000
      }).velocity({
        rotateZ: "-=45deg",
        left: "+=400",
        top: "-=100"
      }, {
        easing: "linear",
        duration: 3000
      }).velocity({
        rotateZ: "-=45deg",
        top: "-=100",
        left: "+=100"
      }, {
        easing: "linear",
        duration: 2000
      }).velocity({
        left: "-=850",
        top: "-=100"
      }, {
        easing: "linear",
        duration: 5000
      }).velocity({
        rotateZ: "+=45deg",
        top: "-=100",
        left: "-=200"
      }, {
        easing: "linear",
        duration: 3000
      }).velocity({
        rotateZ: "-=45deg",
        top: "-=400"
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
    return setTimeout(function() {
      return animateRocket();
    }, 2000);
  });

}).call(this);
