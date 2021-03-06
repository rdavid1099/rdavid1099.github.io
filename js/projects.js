var projectGrabber = {
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
  'BuchaBuddy': '<h3>BuchaBuddy</h3>' +
                    '<p>' +
                      'BuchaBuddy gives you the power to track all of your supplies, ingredients, SCOBYs and batches in one place.<br>' +
                      '<br>It is as an easy-to-use inventory management tool to help kombucha homebrewers of all experience levels and backgrounds enjoy the art of making their very own batches of kombucha.<br>' +
                      '<br>The codebase uses Rails API/ PostgreSQL for the backend with Angular/ Typescript on the frontend and is served up using NGINX on a DigitalOcean droplet.<br>' +
                    '</p>' +
                    '<table class="table">' +
                      '<tr>' +
                        '<th>Technologies Used</th>' +
                        '<th>Resources</th>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>Ruby/ Rails</td>' +
                        '<td><a href="http://buchabuddy.com" target="_blank">BuchaBuddy.com</a></td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>Angular/ Typescript</td>' +
                        '<td><a href="https://github.com/buchabuddy/buchabuddy" target="_blank">GitHub Repo</a></td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td>Capistrano/ DigitalOcean, Redis, G-Suite, AWS</td>' +
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
                    '</table>',
  'repoButton':     '<div class="dropdown" id="menu-btn">' +
                      '<button type="button" class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">' +
                        '<span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span> Projects' +
                      '</button>' +
                      '<ul class="dropdown-menu">' +
                        '<li class="dropdown-item" onclick="projects.displayProject(event, true)">BuchaBuddy</li>' +
                        '<li class="dropdown-item" onclick="projects.displayProject(event, true)">Passr Gem</li>' +
                        '<li class="dropdown-item" onclick="projects.displayProject(event, true)">RyPass</li>' +
                      '</ul>' +
                    '</div>'
},  gitHubRepos,
    stubbedRepos = [
      {"name": "rdavid1099.github.io",
       "html_url": "https://github.com/rdavid1099/rdavid1099.github.io",
       "description": "<i>No Description</i>",
       "pushed_at": "Thu, 03 Aug 2017",
       "language": "HTML"},
      {"name": "event-manager-python",
       "html_url": "https://github.com/rdavid1099/event-manager-python",
       "description": "'Event Manager' project from the Turing School of Software and Design created using Python",
       "pushed_at": "Mon, 31 Jul 2017",
       "language": null},
      {"name": "paramorse-js",
       "html_url": "https://github.com/rdavid1099/paramorse-js",
       "description": "Recreating Turing School's ParaMorse project in NodeJS",
       "pushed_at": "Tue, 20 Jun 2017",
       "language": "JavaScript"},
      {"name": "passavr",
       "html_url": "https://github.com/rdavid1099/passavr",
       "description": "All-in-one secure password management web application",
       "pushed_at": "Fri, 19 May 2017",
       "language": "Ruby"}],
    projects = {};

projects.displayProject = function(e, dropdown) {
  var $contents = document.getElementById('project-contents'),
      innerText;
  dropdown ? innerText = e.currentTarget.innerText : innerText = e.currentTarget.firstElementChild.innerText;
  $contents.innerHTML = projectGrabber['repoButton'] + projectGrabber[innerText];
  setActiveProject(e.currentTarget);
};

projects.populateRepos = function() {
  gitHubRepos = stubbedRepos // REMOVE FORCED STUBS BEFORE DEPLOY
  var $repos = document.getElementById('repos');
  gitHubRepos ? loadRecentRepos($repos) : getRecentRepos($repos);
};

var loadRecentRepos = function($repos) {
  try {
    var innerHTML = '<h4>Recent Contributions</h4>';
    gitHubRepos.forEach(function(repo) {
      innerHTML += '<a href="' + repo.html_url + '" target="_blank">' +
                   '<div class="panel panel-default">' +
                     '<div class="panel-heading">' +
                       '<h5 class="panel-title">' + repo.name + '</h5>' +
                     '</div>' +
                     '<div class="panel-body">' +
                       (repo.description ? repo.description : '<i>No Description</i>') + '<br>' +
                       '<br><strong>Updated ' + convertTime(repo.pushed_at) + '</strong>' +
                     '</div>' +
                   '</div>' +
                   '</a>';
    });
  } catch (err) {
    console.error(err);
    console.error('Loading backup data');
    innerHTML = '<h4>Recent Contributions</h4>';
    gitHubRepos.forEach(function(repo) {
      innerHTML += '<a href="' + repo.html_url + '" target="_blank">' +
                   '<div class="panel panel-default">' +
                     '<div class="panel-heading">' +
                       '<h5 class="panel-title">' + repo.name + '</h5>' +
                     '</div>' +
                     '<div class="panel-body">' +
                       repo.description + '<br>' +
                       '<br><strong>Updated ' + repo.pushed_at + '</strong>' +
                     '</div>' +
                   '</div>' +
                   '</a>';
    });
  } finally {
    $repos.innerHTML = innerHTML;
  }
};

var getRecentRepos = function($repos) {
  $.get( "https://api.github.com/users/rdavid1099/repos?sort=pushed&type=all", function( data ) {
    gitHubRepos = data.slice(0,4);
  }).fail(function(err) {
    console.error('An error occurred, loading backup data.');
    gitHubRepos = stubbedRepos;
  }).always(function() {
    loadRecentRepos($repos);
  });
};

var setActiveProject = function(e) {
  for (var i = 1; i < e.parentElement.children.length; i++) {
    e.parentElement.children[i].classList.remove('active');
  }
  e.classList.add('active');
};
