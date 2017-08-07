var contactGrabber = {
  'Email':  '<div class="form-group has-error">' +
                '<input type="text" class="form-control" name="name" placeholder="Name (Required)" onblur="contact.checkMail(event, true)">' +
              '</div>' +
              '<div class="form-group has-error">' +
                '<input type="email" class="form-control" name="_replyto" placeholder="Email (Required)" onblur="contact.checkMail(event, true)">' +
              '</div>' +
              '<div class="form-group">' +
                '<input type="text" class="form-control" name="_subject" placeholder="Subject (Optional)" onblur="contact.checkMail(event)">' +
              '</div>' +
              '<div class="form-group has-error">' +
                '<textarea class="form-control" rows="5" name="message" placeholder="Message" onblur="contact.checkMail(event, true)"></textarea>' +
              '</div>' +
              '<input type="hidden" name="_format" value="plain" />' +
              '<input id="send-btn" type="submit" value="Send" class="btn btn-default" disabled="disabled">',
  'Twitter':  '<div class="form-group">' +
                '<div class="input-group">' +
                  '<div class="input-group-addon">@ProducerWorkman</div>' +
                  '<input type="text" class="form-control" id="name" placeholder="Message" onkeyup="contact.updateTweet(event)">' +
                  '<div class="input-group-addon" id="char-limit">123</div>' +
                '</div>' +
              '</div>' +
              '<a class="tweet-btn" id="tweet-info" ' +
              'href="https://twitter.com/intent/tweet?text=%40ProducerWorkman" ' +
              'target="_blank">Tweet</a>',
  'LinkedIn': '<div id="linked-profile">' +
              '<script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/ryan-workman" data-format="inline" data-related="false"></script>' +
              '</div>'
};

var contact = {};

contact.displayForm = function(e, linkedin) {
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
  if (linkedin) { IN.parse(document.getElementById("linked-profile")) }
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

contact.checkMail = function(e, req) {
  if (!req) { return }
  validateFields(e, function() {
    var $emailForm = document.getElementById('contact-form').children,
        valid = true;
    for (var i = 0; i < $emailForm.length; i++) {
      if ($emailForm[i].classList[1] === 'has-error') {
        valid = false;
        break;
      }
    }
    if (valid) { document.getElementById('send-btn').disabled = false }
  });
};

var validateFields = function(e, cb) {
  if ((e.target.name === '_replyto' && validateEmail(e.target.value)) ||
    ((e.target.name === 'name' || e.target.name === 'message') && e.target.value !== '')) {
    e.target.parentElement.classList.remove('has-error');
    e.target.parentElement.classList.add('has-success');
  } else {
    e.target.parentElement.classList.add('has-error');
    e.target.parentElement.classList.remove('has-success');
  }
  if (cb) { cb() }
};

var validateEmail = function(email) {
  var validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validation.test(email);
};
