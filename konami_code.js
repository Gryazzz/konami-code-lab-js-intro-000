const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var i = 0;
  var body = document.querySelector('body');
  body.addEventListener('keydown', function(e) {
  var key = parseInt(e.detail || e.which);
  if (key === code[i]) {
    i++;
    if (i === code.length) {
      alert('You did it!');
      i = 0;
    } else {
      i = 0;
    }
  }
});
}
