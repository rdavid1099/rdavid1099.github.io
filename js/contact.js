var contactGrabber = {
  'Email':  '<div class="form-group">' +
                '<input type="text" class="form-control" id="name" placeholder="Name">' +
              '</div>' +
              '<div class="form-group">' +
                '<input type="email" class="form-control" id="email" placeholder="Email">' +
              '</div>' +
              '<div class="form-group">' +
                '<input type="text" class="form-control" id="name" placeholder="Subject">' +
              '</div>' +
              '<div class="form-group">' +
                '<textarea class="form-control" rows="5" placeholder="Message"></textarea>' +
              '</div>' +
              '<button type="button" class="btn btn-default">Send</button>',
  'Twitter':  '<div class="form-group">' +
                '<input type="text" class="form-control" id="name" placeholder="TWITTER">' +
              '</div>'
};

var contact = {};

contact.displayForm = function(e) {
  var $form = document.getElementById('contact-form');
  $form.innerHTML = contactGrabber[e.target.innerText];
};