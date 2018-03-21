//Business Logic
function Ticket(movie, time, discount) {
  this.movie = movie;
  this.time = time;
  this.discount = discount;
};

Ticket.prototype.Price = function() {
  var price = 10;
  if (this.movie === "Ready Player One" || this.movie === "A Beautiful Day") {
    if (this.time === "10:00 AM" || this.time === "1:00 PM") {
      price = ((price + 5)-this.discount)*0.5
    } else {
      price = ((price + 5)-this.discount)
    }
  } else {
    if (this.time === "10:00 AM" || this.time === "1:00 PM") {
      price = (price-this.discount)*0.5
    } else {
      price = (price-this.discount)
    }
  }
  return price.toFixed(2);
};



//UI Logic
$(document).ready(function() {
  var age = parseInt(prompt("Please Enter your age:"));
  if (age < 17) {
    $(".ratedR").hide();
  }
  if (age < 13) {
    $(".ratedR").hide();
    $(".ratedPG13").hide();
  }
  $("form#movie-ticket").submit(function() {
    event.preventDefault();
    var movie = $("#movies").val();
    var time = $("#times").val();
    var discount = parseInt($("#discounts").val());
    var newTicket = new Ticket(movie, time, discount);
    if (newTicket.movie === "No Movie Selected" || newTicket.time === "No Time Selected") {
      alert("Please select a movie and/or a time");
    } else {
      var price = newTicket.Price();
    }


  $("#ticket-information").show();
  $("#movie-name").text(newTicket.movie);
  $("#movie-time").text(newTicket.time)
  $("#movie-price").text(price);
  });
});
