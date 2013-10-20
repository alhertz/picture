$(function() {
  var endDate = "October 22, 2013 10:00:00";

  $('.countdown').countdown({
    date: endDate,
    render: function(data) {
      $(this.el).html("<li>" + (data.days, 3) + " days</li><li>" + this.leadingZeros(data.hours, 2) + " hrs</li><li>" + this.leadingZeros(data.min, 2) + " min</li><li>" + this.leadingZeros(data.sec, 2) + " sec</li>");
    }
  });
});

$(window).load(function() { 
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut(3500, "linear");
})