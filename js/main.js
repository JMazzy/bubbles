var B = B || {};

B.main = (function(view, bubbles) {
  var _date = new Date();
  var _lastTime = _date.getTime();
  var _width;
  var _height;

  var init = function() {
    var _height = $(window).height();
    var _width = $(window).width();

    view.init(_width, _height);
    bubbles.init( _width, _height );
  }

  var loop = function() {
    setInterval(function(){
      _date = new Date();
      var time = _date.getTime();
      if ( time - _lastTime > Math.random() * 1000) {
        bubbles.addBubble(_width, _height);
        _lastTime = time;
      }
      bubbles.update();
      view.draw( bubbles.getBubbles() );
    }, 1000/60);
  }

  return {
    init: init,
    loop: loop,
  };
})(B.view, B.bubbles);

$(document).ready( function() {
  B.main.init();
  B.main.loop();
});
