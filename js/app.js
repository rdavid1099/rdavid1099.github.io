var htmlGrabber = {
  'about': '<div id="about">' +
             '<div class="page-header">' +
               '<h1>About Me <small>Ryan Workman</small></h1>' +
             '</div>' +
             '<div class="row">' +
               '<div class="col-xs-9 well">' +
                 '<p>' +
                   '<br>I am a full-stack web developer who graduated from the <a href="https://www.turing.io/">Turing School of Software and Design</a> in January of 2017.<br>' +
                   '<br>Before pursuing programming, I got my B.A. in Journalism from the University of Northern Colorado and spent five years producing news shows for various communities across the United States.<br>' +
                   '<br>I am now using technology and web design to continue my passion for helping communities and the people living within them.<br>' +
                 '</p>' +
               '</div>' +
              '<div id="twitter" class="col-xs-3" style="background-color: red;">' +
                '<p>TWITTER FEED</p>' +
              '</div>' +
             '</div>' +
           '</div>',
  'projects': '<h1>PROJECTS</h1>',
  'resume': '<h1>RESUME</h1>',
  'contact': '<h1>CONTACT</h1>'
};

var setActiveButton = function(target) {
  $navLinks = document.getElementById('nav-links');
  clearAllActive($navLinks.children);
  target.classList.add('active');
};

var clearAllActive = function(links) {
  for (var i = 0; i < links.length; i++) {
    links[i].firstElementChild.classList.remove('active');
  }
};

var app = {};

app.navigate = function(e) {
  var $contents = document.getElementById('contents');
  $contents.innerHTML = htmlGrabber[e.target.innerHTML];
  setActiveButton(e.target);
}
