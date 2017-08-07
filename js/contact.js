var contactGrabber = {
  'Email':  '<div class="form-group has-error">' +
                '<input type="text" class="form-control" name="name" placeholder="Name (Required)">' +
              '</div>' +
              '<div class="form-group has-error">' +
                '<input type="email" class="form-control" name="_replyto" placeholder="Email (Required)">' +
              '</div>' +
              '<div class="form-group">' +
                '<input type="text" class="form-control" name="_subject" placeholder="Subject (Optional)">' +
              '</div>' +
              '<div class="form-group">' +
                '<textarea class="form-control" rows="5" id="body" placeholder="Message"></textarea>' +
              '</div>' +
              '<input type="hidden" name="_format" value="plain" />' +
              '<input type="submit" value="Send" class="btn btn-default" disabled="disabled">',
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
  var $form = document.getElementById('contact-form'),
      method = {'Email': ['post', 'https://formspree.io/rdavid1099@gmail.com']};
  e = e || {'target': {'innerText': 'Email'} };
  if (method[e.target.innerText]) {
    $form.method = method[e.target.innerText][0];
    $form.action = method[e.target.innerText][1];
  } else {
    $form.method = 'get';
    $form.action = '';
  }
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
  $tweetInfo.href = 'https://twitter.com/intent/tweet?text=%40ProducerWorkman%20' + encodeURIComponent(e.target.value);
};
