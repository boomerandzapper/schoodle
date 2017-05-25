$(() => {

  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;

  //EVENT HANDLER: Display one container at a time until continue button is clicked.


  //EVENT HANDLER: Make Continue button appear after 'Event Details' page is filled.
  $('.event-details-form').on('change' function() {
    var $eventTitle = $('.event-title').val();
    if($eventTitle !== "") {
      $('.submit-button').hide();
    }
  });

  //EVENT HANDLER:
  //When clicking the submit button after filling out 'Event Details' page,
  //eventdetails container will toggle up.
  $('.submit-button').on('click', function(event) {
    $('.event-details').slideToggle("fast", function() {
    });
  });





});
