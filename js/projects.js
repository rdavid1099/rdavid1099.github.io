var projectGrabber = {
  'Passavr':        '<h3>Passavr</h3>' +
                    '<p>' +
                      'Passavr is a web application I\'' +
                    '</p>',
  'Passr Gem':      '<h3>Passr Gem</h3>',
  'Acquire-A-Hire': '<h3>Acquire-A-Hire</h3>',
  'RyPass':         '<h3>RyPass</h3>'
};

var projects = {};

projects.displayProject = function(e) {
  var $contents = document.getElementById('project-contents');
  $contents.innerHTML = projectGrabber[e.currentTarget.firstElementChild.innerText];
};