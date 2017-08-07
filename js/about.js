var mediumPosts,
    about = {},
    stubbedPosts = {
      "items": [
        {
            "title": "Getting the Most Out of a Coding School",
            "pubDate": "Thu, 02 Feb 2017",
            "guid": "https://medium.com/p/bd1a9a130188",
            "description": "If you’ve read any of my previous posts, you probably know that I am a recent graduate of the Turing School of Software and Design...",
        },
        {
            "title": "Dealing with the Impostor Inside All of Us",
            "pubDate": "Thu, 26 Jan 2017",
            "guid": "https://medium.com/p/9f0478bf14b1",
            "description": "I recently graduated from the Denver-based code school Turing School of Software and Design, and it was the first time I came face-to-face with my...",
        },
        {
            "title": "A New Web Developer’s First Brownfield Experience",
            "pubDate": "Wed, 18 Jan 2017",
            "guid": "https://medium.com/p/39d898bdba33",
            "description": "Learning computer programming and web design is a lot like learning anything else, you tread water, slowly introducing new concepts to apply in common situations...",
        },
        {
            "title": "The Wonderful World of C# or: How I Learned to Stop Worrying and Love the Compiler",
            "pubDate": "Sat, 31 Dec 2016",
            "guid": "https://medium.com/p/69a2f9216096",
            "description": "Before we begin, let’s quickly take a quick trip down memory lane. I have spent the past five years working my way up the ranks...",
        }
    ],
};

about.populateMedium = function() {
  mediumPosts = stubbedPosts.items // REMOVE FORCED STUBS BEFORE DEPLOY
  $medium = document.getElementById('medium');
  mediumPosts ? loadRecentPosts($medium) : getRecentPosts($medium)
};

var loadRecentPosts = function($medium) {
  try {
    var innerHTML = '';
    mediumPosts.slice(0,4).forEach(function(post) {
      innerHTML += '<a href="' + post.guid + '" target="_blank">' +
                   '<div class="panel panel-default">' +
                     '<div class="panel-heading">' +
                       '<h5 class="panel-title">' + post.title + '</h5>' +
                     '</div>' +
                     '<div class="panel-body">' +
                       summarize(post.description) + '<br>' +
                       '<br><strong>' + convertTime(post.pubDate) + '</strong>' +
                     '</div>' +
                   '</div>' +
                   '</a>';
    });
  } catch (err) {
    console.error(err);
    console.error('Loading backup data');
    innerHTML = '';
    mediumPosts = stubbedPosts.items;
    mediumPosts.slice(0,4).forEach(function(post) {
      innerHTML += '<a href="' + post.guid + '" target="_blank">' +
                   '<div class="panel panel-default">' +
                     '<div class="panel-heading">' +
                       '<h5 class="panel-title">' + post.title + '</h5>' +
                     '</div>' +
                     '<div class="panel-body">' +
                       post.description + '<br>' +
                       '<br><strong>' + post.pubDate + '</strong>' +
                     '</div>' +
                   '</div>' +
                   '</a>';
    });
  } finally {
    $medium.innerHTML = innerHTML;
  }
};

var getRecentPosts = function($medium) {
  $.get( "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40rdavid1099", function( data ) {
    console.log(data.items);
    mediumPosts = data.items;
  }).fail(function(err) {
    console.error('An error occurred, loading backup data.');
    mediumPosts = stubbedPosts.items;
  }).always(function() {
    loadRecentPosts($medium);
  });
};

var summarize = function(description) {
  var cleanText = $(description).filter('p')[0]
  var splitText = cleanText.innerText.split(' ').slice(0, 25).join(' ');
  return splitText + '...';
};