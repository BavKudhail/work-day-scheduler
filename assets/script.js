// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar ✅
$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours ✅

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function colorTimeBlock() {
  var currentHour = moment().hours();

  $(".time-block").each(function () {
    //   get the ID attribute of each hour block and convert it into a string
    var hourBlock = parseInt($(this).attr("id"));

    if (currentHour > hourBlock) {
      $(this).addClass("past");
    } else if (currentHour === hourBlock) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

colorTimeBlock();

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

// Variables

$("#saveBtn");
