$("#currentDay").text(moment().format('dddd MMMM Do'));

// Set the color-changing functions for each task area
for (i = 9; i < 18; i++){
  if (moment().isBefore(23,"hours")){
    $(".taskholder." + i).addClass("future")
  }
  if (moment().isAfter(i,"hours")){
    $(".taskholder." + i).addClass("past")
  }
  if (moment().hour() === i) {
    $(".taskholder." + i).addClass("present")
  }
}
// Create a function to make the taskholder areas turn into textareas on click.
$(".taskholder").on("click", function(){
  // create a variable to shift classes from taskholder to textarea
  var classList = $(this).attr("class");
  // create input area
  var text = $(this)
  .text()
  .trim();

  var textInput = $("<textarea>")
    .val(text)
    .addClass(classList);

  // replace taskholder div with textarea
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
  console.log(textInput.value)
})

$(".saveBtn").on("click", function(textInput){
  // check if there's an <input> in dom 
  var text = $(this)
    .closest($(".row"))
    .find($("<textarea>"))

  console.log(text);
  // take text from textarea click function
  // save it to local storage
  // close input
  // take text, put into new p
})