$("#currentDay").text(moment().format('dddd MMMM Do'));

// Initialize empty object to hold task info
var tasks = {
  "9": [],
  "10": [],
  "11": [],
  "12": [],
  "13": [],
  "14": [],
  "15": [],
  "16": [],
  "17": []
};

// Set the color-changing functions for each task area
var updateColor = function(){
  for (i = 9; i < 18; i++){
    console.log("Chicken!")
  if (moment().hour() < i){
    $(".taskholder." + i).addClass("future");
  }
  else if (moment().hour() > i){
    $(".taskholder." + i).addClass("past");
  }
  else if (moment().hour() === i) {
    $(".taskholder." + i).addClass("present");
  }
}
};


// Create a function to make the taskholder areas turn into textareas on click.
/*$(".taskholder").on("click", function(){
  // create a variable to shift classes from taskholder to textarea
  var classList = $(this).attr("class");
  // create input area
  var text = $(this)
  .text()
  .trim();

  var textInput = $("<textarea>")
    .val(text)
    .addClass(classList);
  textInput.value = document.querySelector("#taskholder")
  // replace taskholder div with textarea
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
  console.log(textInput, textInput.value);
 // $(".saveBtn").on("click", saveText(textInput.value))
})*/

var saveText = function(input){
  console.log(input);
}
$(".saveBtn").on("click", function(textInput){
  // check if there's an <input> in dom 
  var text = $(this)
    .closest($(".row"))
    .find($("<textarea>"))

  console.log(textInput.value);
  // take text from textarea click function
  // save it to local storage
  // close input
  // take text, put into new p
})

// Call the functions to update colors on page load and every 5 minutes
updateColor()
setInterval(updateColor,300000);