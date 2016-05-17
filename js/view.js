var B = B || {};

B.view = (function() {
  var c;
  var ctx;

  var init = function(width, height) {
    $("canvas").attr("width", width);
    $("canvas").attr("height", height);
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
  };

  var _clear = function() {
    ctx.fillStyle = "#ffffff";
    ctx.clearRect( 0, 0, c.width, c.height );
    ctx.fillRect( 0, 0, c.width, c.height );
  }

  var _render = function( bubbles ) {
    for ( var i = 0; i < bubbles.length; i++ ) {
      b = bubbles[i];
      ctx.fillStyle = "#455372";
      ctx.beginPath();
      ctx.arc( b.x, b.y, b.size, 0, 2*Math.PI );
      ctx.fill();
    }
  }

  var draw = function( bubbles ) {
    _clear();
    _render( bubbles );
  }

  return {
    init: init,
    draw: draw,
  };
})();
