// jshint esversion: 6

let controller = function() {
  let prefixURL =
    "https://api.flickr.com/services/feeds/photos_public.gne?tags=";
  let suffixURL = "&format=json&jsoncallback=?";
  let flickrTag = $("input").val();
  let requestURL = prefixURL + flickrTag + suffixURL;

  $(".photos").attr("../images/dog.jpg");

  $.getJSON(requestURL, function(flickrResponse) {
    flickrResponse.items.forEach(function(item, index) {
      if (index < 6) {
        let $img = $("<img>").hide();

        $img.attr("src", item.media.m);
        $img.attr("width", "100");

        $(".photos").append($img);
        $img.fadeIn();
      }
    });
  });
};
//$(document).ready(controller);

window.addEventListener("load", () => {
  let button = document.querySelector("button");
  button.addEventListener("click", controller);
});
