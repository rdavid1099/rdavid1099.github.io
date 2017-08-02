var mediumPosts,
    about = {},
    stubbedPosts = {
  "payload": {
    "references": {
      "Post": {
        "4444": {
          "title": "Getting the Most Out of a Coding School",
          "firstPublishedAt": 1485992028073,
          "content": {
              "subtitle": "If you’ve read any of my previous posts, you probably know that I am a recent graduate of the Turing School of Software and Design. After…",
          }
        },
        "1111": {
          "title": "Dealing with the Impostor Inside All of Us",
          "firstPublishedAt": 1485384754341,
          "content": {
              "subtitle": "I recently graduated from the Denver-based code school Turing School of Software and Design, and it was the first time I came face-to-face…",
          }
        },
        "2222": {
          "title": "A New Web Developer’s First Brownfield Experience",
          "firstPublishedAt": 1484686878658,
          "content": {
              "subtitle": "Learning computer programming and web design is a lot like learning anything else, you tread water, slowly introducing new concepts to…",
          }
        },
        "3333": {
          "title": "The Wonderful World of C# or: How I Learned to Stop Worrying and Love the Compiler",
          "firstPublishedAt": 1483125553907,
          "content": {
              "subtitle": "Before we begin, let’s quickly take a quick trip down memory lane. I have spent the past five years working my way up the ranks of local…",
          }
        }
      }
    }
  }
};

about.populateMedium = function() {
  mediumPosts = stubbedPosts.payload.references.Post;
  $medium = document.getElementById('medium');
  mediumPosts ? loadRecentPosts($medium) : getRecentPosts($medium)
};

var loadRecentPosts = function($medium) {
  var innerHTML = '<h4>Recent Medium Posts</h4>';
  debugger
  var postKeys = Object.keys(mediumPosts);
  postKeys.slice(0,4).forEach(function(key) {
    innerHTML += '<div class="panel panel-default">' +
                   '<div class="panel-heading">' +
                     '<h5 class="panel-title">' + mediumPosts[key].title + '</h5>' +
                   '</div>' +
                   '<div class="panel-body">' +
                     mediumPosts[key].content.subtitle + '<br>' +
                     'Published: ' + convertTime(mediumPosts[key].firstPublishedAt) +
                   '</div>' +
                 '</div>';
  });
  $medium.innerHTML = innerHTML;
};

var getRecentPosts = function($medium) {
  $.get( "https://medium.com/@rdavid1099/latest?format=json", function( data ) {
    console.log(data.payload.references.Post);
    mediumPosts = data.payload.references.Post;
  }).fail(function(err) {
    console.error(err);
    mediumPosts = stubbedPosts.payload.references.Post;
  }).always(function() {
    loadRecentPosts($medium);
  });
};

var convertTime = function(rawTime) {
  var date = new Date(rawTime);
  return date.toGMTString().split(' ').slice(0,4).join(' ');
};
