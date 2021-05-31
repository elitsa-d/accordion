//Accordion
$(".accordion__head").on("click", function () {
  $(this)
    .find("span")
    .toggleClass("open")
    .parent()
    .next(".accordion__body")
    .slideToggle()
    .parent()
    .toggleClass("opened");
});
