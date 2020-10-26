$("#currentDay").text(moment().format('dddd MMMM Do'));

// Set the color-changing functions for each task area
if (moment().isBefore(9,"hours")){
  $(".taskarea.9").addClass("future")
}
if (moment().isAfter(9,"hours")){
  $(".taskarea.9").addClass("past")
}
if (moment().hour() === 9) {
  $(".taskarea.9").addClass("present")
}