// jshint esversion: 6

let main = function() {
  let requestURL = "https://thejsway-server.herokuapp.com/api/articles";

  $.getJSON(requestURL, function(response) {
    let firstArticle = response[0];
    console.log(`Article ${firstArticle.id}
Title: ${firstArticle.title}
Content: ${firstArticle.content}`);

    response.forEach(function(item, index) {
      let newDiv = document.createElement("div");

      document.querySelector(".articles").appendChild(newDiv);

      let newH3 = document.createElement("h3");
      newH3.textContent = `Article ${item.id}`;
      newDiv.appendChild(newH3);

      let titleParagraph = document.createElement("p");
      titleParagraph.textContent = item.title;
      newDiv.appendChild(titleParagraph);

      let bodyParagraph = document.createElement("p");
      bodyParagraph.textContent = item.content;
      newDiv.appendChild(bodyParagraph);

      /*  if (index < 6) {
        let $img = $("<img>").hide();

        $img.attr("src", item.media.m);
        $img.attr("width", "100");

        $(".photos").append($img);
        $img.fadeIn();
      }
      */
    });
  });
};
$(document).ready(main);
