var B = B || {};

B.bubbles = (function() {

  var _bubbles = [];
  var _maxX;
  var _maxY;

  var getBubbles = function() {
    return _bubbles;
  };

  var init = function( maxX, maxY ) {
    _maxX = maxX;
    _maxY = maxY;
  };

  var addBubble = function() {
    _bubbles.push({
      x: Math.random() * _maxX,
      y: _maxY,
      size: Math.random() * 10 + 5,
    });
  };

  var _cleanUpBubbles = function() {
    for ( var i = 0; i < _bubbles.length; i++ ) {
      if ( _bubbles[i].y < 0 ) {
        _bubbles.splice(i, 1)
      }
    }
  }

  var _moveBubbles = function() {
    for ( var i = 0; i < _bubbles.length; i++ ) {
      _bubbles[i].y -= Math.random() * 2;
      _bubbles[i].x += Math.random() * 2 - 1;
    }
  }

  var update = function() {
    _cleanUpBubbles();
    _moveBubbles();
  };

  return {
    init: init,
    update: update,
    getBubbles: getBubbles,
    addBubble: addBubble,
  };
})();
