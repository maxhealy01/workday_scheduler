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
  if (moment().hour() < i){
    $("#" + i).addClass("future");
  }
  else if (moment().hour() > i){
    $("#" + i).addClass("past");
  }
  else if (moment().hour() === i) {
    $("#" + i).addClass("present");
  }
}
};

// Set the function to save task text
var saveText = function(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Set the function to load task text
var loadText = function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  // loop over objects and show saved tasks in taskholders
  for (i = 9; i < 18; i++){
    $("#" + i)
      .text(tasks[i])
  }
}

$(".saveBtn").on("click", function(event){
  event.preventDefault();

  // Find the nearest text area's ID and value to set tasks
  let textArea = $(event.target).closest(".row").find("textarea");
  let time = textArea.attr("id");
  let text = textArea.val().trim();

  tasks[time] = [text];
  saveText(tasks);
})

// Call the functions to update colors on page load and every 5 minutes
updateColor()
setInterval(updateColor,300000);

// Call the function to load task text
loadText();
