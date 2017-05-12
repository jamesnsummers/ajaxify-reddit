/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';
var rFunny = 'https://www.reddit.com/r/funny/.json';

$(document).ready(function(){
/* FUNCTION EXECUTION HERE */
  console.log('Go forth and code!');

  function getReddit() {
      $.ajax({
        method: "GET",
        url: rFunny,
        data: $("form").serialize(),
        success: onSuccess,
        error: onError
      });
    }

  function onSuccess(json) {
    for (var i = 0; i < json.data.children.length; i++) {
      var listingImage = json.data.children[i].data.preview.images["0"].resolutions["0"].url;
      var clickedImage = json.data.children[i].data.preview.images["0"].source.url;
      var title = json.data.children[i].data.title;
      var titleUrl = json.data.children[i].data.url;
      var postedTime = new Date (json.data.children[i].data.created);
      var author = json.data.children[i].data.author;
      var authorFlare = json.data.children[i].data.author_flair_text;
      $('.container').append(`<a href=${clickedImage}><img src = ${listingImage}/></>`)
        .append(`<h3><a href=${titleUrl}>${title}</a></h3>`)
        .append(`<p>submitted on ${postedTime} by ${author} <hr>`);
    }
  }

    function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
  }
getReddit();

});



/* FUNCTION DEFINITION HERE */
/* TIP: don't forget scope! */
