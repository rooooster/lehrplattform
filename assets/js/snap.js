var s = Snap("#main-machine-bg");

var count = 20;
var speed = 4;
var i;

var pool = [];

for(i = 0; i < count; i++) {
  var ball = s.circle(-100, -100, 0);
  ball.attr({
    fill: "#65C7EA",
    r: 4
  });
  ball.addClass('ball');
  pool.push(ball);
}

Snap.load("../assets/img/machine-snap.svg", function(data) {
  var way = data.select("#way");
  
  s.append(data);
  
  var pathLength = Snap.path.getTotalLength(way);
  
  pool.forEach(function(ball) {
    ball.length = 0;
    s.append(ball);
  });
  
  function animateBall(ball) {
    var point = Snap.path.getPointAtLength(way, ball.length);
    ball.length += speed;
    if(ball.length > pathLength) ball.length = 0;
    ball.attr({
      cx: point.x - 25,
      cy: point.y + 110
    });
    window.requestAnimationFrame(function() {
      animateBall(ball);
    });
  }
  pool.forEach(function(ball, index) {
    setTimeout(function() {
      window.requestAnimationFrame(function() {
        animateBall(ball);
      });
    }, 200 * index);
  });
});

window.requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

Snap("#toggleStop").click(function() {
  speed = 0;
});

Snap("#toggleSlow").click(function() {
  speed = 2;
});

Snap("#toggleNormal").click(function() {
  speed = 4;
});

Snap("#toggleFast").click(function() {
  speed = 6;
});