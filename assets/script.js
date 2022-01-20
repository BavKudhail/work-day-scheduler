// current day is displayed at the top of the calendar ✅
$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

// each timeblock color coded to indicate past, present, or future ✅
function colorTimeBlock() {
  var currentHour = moment().hours();

  $(".time-block").each(function () {
    var hourBlock = parseInt($(this).parent().attr("id"));

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

// save to local storage
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");

  console.log(hour);

  localStorage.setItem(hour, text);
});

// get from local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// clear local storage
$("#clear-btn").on("click", function () {
  localStorage.clear();
  $("#9 .description").val(" ");
  $("#10 .description").val(" ");
  $("#11 .description").val(" ");
  $("#12 .description").val(" ");
  $("#13 .description").val(" ");
  $("#14 .description").val(" ");
  $("#15 .description").val(" ");
  $("#16 .description").val(" ");
  $("#17 .description").val(" ");
});
