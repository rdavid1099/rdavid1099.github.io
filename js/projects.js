var projectGrabber = {
  'Passavr':        '<h3>Passavr</h3>' +
                    '<p>' +
                      'Passavr is a web application I\'m developing that generates, saves and organizes a user\'s passwords.<br>' +
                      '<br>Utilizing the Passr gem that I created, Passavr generates random passwords for a user, encrypts them and saves the encryption attached to a given account. ' +
                      'Each of those passwords can only be decrypted and viewed by the user who generated them. A user also has the ability to organize the passwords or save and encrypt their ' +
                      'personal passwords.<br>' +
                      '<br>User creation and log in is being handled by Devise. Passavr implements two-factor authentication to ensure the security of all the passwords saved.<br>' +
                    '</p>' +
                    '<table class="table">' +
                      '<tr>' +
                        '<th>Technologies Used</th>' +
                        '<th>Resources</th>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>Ruby/ Rails</td>' +
                        '<td><a href="http://passavr.com" target="_blank">Website</a></td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>JavaScript/ React</td>' +
                        '<td><a href="https://github.com/rdavid1099/passavr" target="_blank">GitHub Repo</a></td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>Docker</td>' +
                        '<td><a href="https://travis-ci.org/rdavid1099/passavr" target="_blank">Travis CI</a></td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>DigitalOcean</td>' +
                        '<td></td>' +
                      '</tr>' +
                    '</table>',
  'Passr Gem':      '<h3>Passr Gem</h3>' +
                    '<p>' +
                      'Passr is a simple Ruby gem handling password generation, encryption and decryption.<br>' +
                      '<br>I developed all of the logic behind the password generation and used <a href="https://github.com/cryptosphere/rbnacl-libsodium" target="_blank">RbNaCl::Libsodium</a> ' +
                      'to handle all of the encryption.<br>' +
                      '<br>The code is open-source and the gem is being hosted RubyGems.org and is fully <a href="http://www.rubydoc.info/github/rdavid1099/passr/master">documented</a> using YARD.<br>' +
                    '</p>' +
                    '<table class="table">' +
                      '<tr>' +
                        '<th>Technologies Used</th>' +
                        '<th>Resources</th>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>Ruby</td>' +
                        '<td><a href="https://rubygems.org/gems/passr" target="_blank">RubyGems.org</a></td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>RbNaCl::Libsodium</td>' +
                        '<td><a href="https://github.com/rdavid1099/passr" target="_blank">GitHub Repo</a></td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>Bundler</td>' +
                        '<td><a href="https://travis-ci.org/rdavid1099/passr" target="_blank">Travis CI</a></td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td></td>' +
                        '<td><a href="https://coveralls.io/github/rdavid1099/passr?branch=master" target="_blank">Coveralls</a></td>' +
                      '</tr>' +
                    '</table>',
  'Acquire-A-Hire': '<h3>Acquire-A-Hire</h3>' +
                    '<p>' +
                      'Nearing the end of the Turing curriculum, we were placed in groups of four and tasked with "cloning" a popular website.<br><br>Our group created a clone of ' +
                      '<a href="https://www.thumbtack.com/">Thumbtack</a>, the popular app connecting professionals with buyers. Along with the basic functionalities of connecting ' +
                      'users of different roles with each other, including messaging, we also implemented our own versioned API and handrolled our own OAuth2.0.<br><br>I handled the ' +
                      'DevOps on this project, deploying the application to DigitalOcean using Capistrano.' +
                    '</p>' +
                    '<table class="table">' +
                      '<tr>' +
                        '<th>Technologies Used</th>' +
                        '<th>Resources</th>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>Ruby/ Rails</td>' +
                        '<td><a href="https://github.com/rdavid1099/acquire-a-hire" target="_blank">GitHub Repo</a></td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>JavaScript/ JQuery</td>' +
                        '<td></td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>Capistrano/ DigitalOcean</td>' +
                        '<td></td>' +
                      '</tr>' +
                    '</table>',
  'RyPass':         '<h3>RyPass</h3>' +
                    '<p>' +
                      'RyPass is an open-source CLI password manager. I was inspired while working on the open-source text RPG framework <a href="https://github.com/nskins/goby" target="_blank">Goby</a> ' +
                      'to create a basic CLI.<br>' +
                      '<br>RyPass utilizes RbNaCl::Libsodium to handle encryption and decryption. After generating a random and secure password, it is encrypted and saved within a CSV in the client\'s ' +
                      'home directory. The passwords can only be decrypted and displayed if running with the user\'s credentials within their terminal.<br>' +
                      '<br>The CLI is installed using a shell script and is fully <a href="http://www.rubydoc.info/github/rdavid1099/rypass/master" target="_blank">documented</a> using YARD.<br>' +
                    '</p>' +
                    '<table class="table">' +
                      '<tr>' +
                        '<th>Technologies Used</th>' +
                        '<th>Resources</th>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>Ruby</td>' +
                        '<td><a href="https://github.com/rdavid1099/rypass" target="_blank">GitHub Repo</a></td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>RbNaCl::Libsodium</td>' +
                        '<td><a href="https://github.com/rdavid1099/rypass/blob/master/README.md" target="_blank">Operating Guide</a></td>' +
                      '</tr>' +
                    '</table>'
};

var projects = {};

projects.displayProject = function(e) {
  var $contents = document.getElementById('project-contents');
  $contents.innerHTML = projectGrabber[e.currentTarget.firstElementChild.innerText];
  setActiveProject(e.currentTarget);
};

projects.populateRepos = function() {

};

var setActiveProject = function(e) {
  for (var i = 1; i < e.parentElement.children.length; i++) {
    e.parentElement.children[i].classList.remove('active');
  }
  e.classList.add('active');
};
