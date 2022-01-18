$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

function colorTimeBlock() {
  var currentHour = moment().hours();
  console.log(currentHour);

  $(".time-block").each(function () {
    var hourBlock = $(this).attr("id");

    if (currentHour > hourBlock) {
      $(this).addClass("past");
    } else if (currentHour == hourBlock) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

colorTimeBlock();
