$(document).ready ->

  $rocket = $('.rocket')

  animateRocket = ->
    $rocket
    .velocity top: "-=400",
      easing: "linear"
      delay: 500
      duration: 2000
    .velocity rotateZ: "+=90",
      easing: "linear"
      delay: 500
      duration: 500
    .velocity left: "+=1150",
      delay: 500
      duration: 4000
    .velocity rotateZ: "+=90",
      easing: "linear"
      delay: 500
      duration: 500
    .velocity top: "+=400",
      delay: 500
      duration: 2000
    .velocity rotateZ: "+=90",
      easing: "linear"
      delay: 500
      duration: 500
    .velocity left: "-=1150",
      delay: 500
      duration: 4000
    .velocity rotateZ: "+=90",
      easing: "linear"
      delay: 500
      duration: 500
      complete: =>
        animateRocket()

  animateRocket()