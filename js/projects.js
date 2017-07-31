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
  'Passr Gem':      '<h3>Passr Gem</h3>',
  'Acquire-A-Hire': '<h3>Acquire-A-Hire</h3>',
  'RyPass':         '<h3>RyPass</h3>'
};

var projects = {};

projects.displayProject = function(e) {
  var $contents = document.getElementById('project-contents');
  $contents.innerHTML = projectGrabber[e.currentTarget.firstElementChild.innerText];
};