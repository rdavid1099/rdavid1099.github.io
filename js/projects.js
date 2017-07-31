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
                      '<br>The code is open-source and the gem is being hosted RubyGems.org.<br>' +
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
  'Acquire-A-Hire': '<h3>Acquire-A-Hire</h3>',
  'RyPass':         '<h3>RyPass</h3>'
};

var projects = {};

projects.displayProject = function(e) {
  var $contents = document.getElementById('project-contents');
  $contents.innerHTML = projectGrabber[e.currentTarget.firstElementChild.innerText];
};