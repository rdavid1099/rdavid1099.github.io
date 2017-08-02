var aboutMe = '<br>I am a full-stack web developer who graduated from the <a href="https://www.turing.io/">Turing School of Software and Design</a> in January of 2017.<br>' +
              '<br>Technology has been a passion of mine for as long as I can remember. I taught myself basic HTML and launched my first static web page when I was eight years old. ' +
              'Since then I have gained professional experience in several different work environments. I have learned from some of the best. Whether it\'s workign directly with the CTO ' +
              'of a small business in Denver or the expansive tech team at Dish Network, I always collaborate to my fullest to deliver the best product.<br>' +
              '<br>When I\'m not working on professional applications, I spend my time working on side-projects and contributing to open-source issues. I am always trying to learn more ' +
              'and have been diving into the server-side of applications. I have deployed a few of my Rails projects to DigitalOcean using Capistrano and am working on implementing ' +
              'CI/CD using Docker and Chef.<br>' +
              '<br>Before pursuing programming professionally, I received my B.A. in Journalism from the University of Northern Colorado and spent five years producing news shows for ' +
              'various communities across the United States. Throughout my time in the news industry, I learned the benefits and intricacies of working on a team. As a producer, I ' +
              'led the news team to gather all of the necessary content and information for an interesting, informative newscast.<br>' +
              '<br>If I\'m not coding or working, I\'m probably banging my drums, playing video games or hanging out at one of the great breweries around the Denver-metro area. I\'m always ' +
              'looking for more great meetups, so if you know of anything cool going on around town, be sure to tweet at me (<a href="https://twitter.com/ProducerWorkman" target="_blank">@ProducerWorkman</a>).';

var htmlGrabber = {
  'about': '<div id="about">' +
             '<div class="page-header">' +
               '<h1>About Me <small>Ryan Workman</small></h1>' +
             '</div>' +
             '<div class="row">' +
               '<div class="col-xs-9 well">' +
                 '<p>' +
                    aboutMe +
                 '</p>' +
               '</div>' +
              '<div id="medium" class="col-xs-3 well">' +
              '</div>' +
             '</div>' +
           '</div>',
  'projects': '<div id="projects">' +
                '<div class="page-header">' +
                  '<h1>Projects <small>side projects, open-source contributions, etc.</small></h1>' +
                '</div>' +
                '<div class="row">' +
                  '<div class="col-xs-9">' +
                    '<div class="row">' +
                      '<center>' +
                        '<div class="col-xs-3">' +
                          '<h4>Notable Projects</h4>' +
                          '<div class="well active" onclick="projects.displayProject(event)">' +
                            '<h5>Passavr</h5>' +
                            '<p>All-in-one secure password management web application.</p>' +
                          '</div>' +
                          '<div class="well" onclick="projects.displayProject(event)">' +
                            '<h5>Passr Gem</h5>' +
                            '<p>All-in-one password generation, encryption and decryption Ruby gem.</p>' +
                          '</div>' +
                          '<div class="well" onclick="projects.displayProject(event)">' +
                            '<h5>Acquire-A-Hire</h5>' +
                            '<p>Turing project recreating the web application Thumbtack.</p>' +
                          '</div>' +
                          '<div class="well" onclick="projects.displayProject(event)">' +
                            '<h5>RyPass</h5>' +
                            '<p>CLI password generator and storage tool.</p>' +
                          '</div>' +
                        '</div>' +
                      '</center>' +
                      '<div class="col-xs-9 well" id="project-contents">' +
                        projectGrabber['Passavr'] +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                  '<div id="repos" class="col-xs-3 well">' +
                  '</div>' +
                '</div>' +
              '</div>'
,
  'resume': '<h1>RESUME</h1>',
  'contact': '<h1>CONTACT</h1>'
};

var getTargetLink = function($navLinks, innerText, cb) {
  var target;
  for (var i = 0; i < $navLinks.children.length; i++) {
    if ($navLinks.children[i].firstElementChild.innerText === innerText) {
      target = $navLinks.children[i];
      break;
    }
  }
  cb();
  return target.firstElementChild;
};

var setActiveButton = function(targetText) {
  var $navLinks = document.getElementById('nav-links');
  getTargetLink($navLinks, targetText, function() {
    clearAllActive($navLinks.children);
  }).classList.add('active');
};

var clearAllActive = function(links) {
  for (var i = 0; i < links.length; i++) {
    links[i].firstElementChild.classList.remove('active');
  }
};

var app = {};

app.navigate = function(e, cb) {
  var $contents = document.getElementById('contents');
  $contents.innerHTML = htmlGrabber[e.target.innerHTML];
  setActiveButton(e.target.innerText);
  if (cb) { cb() }
};

window.onload = function() {
  document.getElementById('contents').innerHTML = htmlGrabber['about'];
};
