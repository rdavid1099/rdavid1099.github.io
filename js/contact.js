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
                  '<input type="text" class="form-control" id="name" placeholder="Message">' +
                  '<div class="input-group-addon" id="char-limit">126</div>' +
                '</div>' +
              '</div>' +
              '<a class="tweet-btn" ' +
              'href="https://twitter.com/share" ' +
              'data-size="large" ' +
              'data-text="custom share text" ' +
              'data-url="https://dev.twitter.com/web/tweet-button" ' +
              'data-hashtags="example,demo" ' +
              'data-via="twitterdev" ' +
              'data-related="twitterapi,twitter" ' +
              'target="_blank">Tweet</a>'
};

var contact = {};

contact.displayForm = function(e) {
  var $form = document.getElementById('contact-form');
  $form.innerHTML = contactGrabber[e.target.innerText];
};