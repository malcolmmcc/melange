var scr = document.getElementById('feedback_script');
var emailAddress = scr.getAttribute("data-email");
var currentRating = 0;
function sendFeedback() {
  var mailto = "mailto: " + email;
  mailto += '?subject=Blog post feedback for "' + document.title + '"';
  mailto += "&body=Rating: "
  mailto += (new Array(currentRating+1).join("\u2605"));
  mailto += (new Array(6-currentRating).join("\u2606"));
  mailto += "%0A%0AWhat was this post about?%0A" + document.getElementById("feedback_oneliner").value;
  // console.log(mailto);
  window.open(mailto);
}

function rateK (event, element, n) {
  if (event.keyCode == 32 || event.keyCode == 13) { // space bar
    rate(element, n);
  }
}

function rate (element, n) {
  currentRating = n;
  var siblings = element.parentNode.children;
  for (var s = 0; s < siblings.length; s++) {
    siblings[s].classList.remove("selected");
  }
  element.classList.add("selected");
}

var css = ".feedback_star_rating {width: 120px;display: inline-block;unicode-bidi: bidi-override;direction: rtl}"
css += ".feedback_star_rating > span {display: inline-block;position: relative;width: 1.1em;}"
css += ".feedback_star_rating > span:focus {color: #0c0; outline: none;}"
css += ".feedback_star_rating > span:hover:before, .feedback_star_rating > span:hover ~ span:before, .feedback_star_rating > span.selected:before, .feedback_star_rating > span.selected ~ span:before {content: '\u2605';position: absolute;}"
var sheet = document.createElement('style')
sheet.appendChild(document.createTextNode(""));
sheet.innerHTML = css;
document.body.appendChild(sheet);

var html = '<input type="text" id="feedback_oneliner" tabindex="100" />';
html += 'Rating: <div class="feedback_star_rating">';
for (var i = 5; i > 0; i--) {
  html += '<span onkeydown="rateK(event, this, ' + i + ')" onclick="rate(this, ' + i + ')" tabindex="' + (100+i) + '">&#x2606;</span>';
}
html += '</div><button onclick="sendFeedback()">Send</button>';

var div = document.createElement('div');
div.innerHTML = html;
scr.parentNode.insertBefore(div, scr);