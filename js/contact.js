var contactGrabber = {
  'Email':  '<div class="form-group">' +
                '<input type="text" class="form-control" id="name" placeholder="Name">' +
              '</div>' +
              '<div class="form-group">' +
                '<input type="email" class="form-control" id="email" placeholder="Email">' +
              '</div>' +
              '<div class="form-group">' +
                '<input type="text" class="form-control" id="subject" placeholder="Subject">' +
              '</div>' +
              '<div class="form-group">' +
                '<textarea class="form-control" rows="5" id="body" placeholder="Message"></textarea>' +
              '</div>' +
              '<button type="button" class="btn btn-default">Send</button>',
  'Twitter':  '<div class="form-group">' +
                '<div class="input-group">' +
                  '<div class="input-group-addon">@ProducerWorkman</div>' +
                  '<input type="text" class="form-control" id="name" placeholder="Message" onkeyup="contact.updateTweet(event)">' +
                  '<div class="input-group-addon" id="char-limit">123</div>' +
                '</div>' +
              '</div>' +
              '<a class="tweet-btn" id="tweet-info" ' +
              'href="https://twitter.com/intent/tweet?text=%40ProducerWorkman" ' +
              'target="_blank">Tweet</a>'
};

var contact = {};

contact.displayForm = function(e) {
  var $form = document.getElementById('contact-form');
  $form.innerHTML = contactGrabber[e.target.innerText];
};

contact.updateTweet = function(e) {
  var $charLimit = document.getElementById('char-limit'),
      $tweetInfo = document.getElementById('tweet-info'),
      charLimit  = parseInt($charLimit.innerText),
      charLength = e.target.value.length;
  if (charLength >= 123) {
    charLength = 123;
    $charLimit.classList.remove('danger');
    $charLimit.classList.add('limit');
    e.target.value = e.target.value.split('').slice(0,123).join('');
  } else if (charLimit < 11) {
    $charLimit.classList.remove('limit');
    $charLimit.classList.add('danger');
  } else {
    $charLimit.classList.remove('danger');
    $charLimit.classList.remove('limit');
  }
  $charLimit.innerText = 123 - charLength;
  $tweetInfo.href = 'https://twitter.com/intent/tweet?text=%40ProducerWorkman%20' + encodeURIComponent(e.target.value)
};

var updateCounter = function(charLimit, cb) {
  var $charLimit = document.getElementById('char-limit');
  charLimit -= 1;
  $charLimit.innerText = charLimit;
  if (charLimit === 0) {
    $charLimit.classList.add('limit');
  } else if (charLimit < 10) {
    $charLimit.classList.add('danger');
  }
};