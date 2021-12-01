
let task = localStorage.getItem("task");
let plannerTime = [09,10,11,12,13,14,15,16,17];
let bgColor = document.querySelectorAll(".description");

// current day. Used [Moment.js](https://momentjs.com/) 
let today = moment()
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
console.log(today);

//used moment format for current time when website is opened
let currentTime = parseInt(moment().format("kk"));
console.log(currentTime);

//changes background color of textarea depending on currentTime
function description() {
  console.log(plannerTime);
  console.log(bgColor)
  for (let i = 0; i < plannerTime.length; i++) {
  if (currentTime === plannerTime[i]) {
    bgColor[i].classList.add("present");
    console.log(bgColor[i]);
  }
  else if (currentTime > plannerTime[i]) {
    bgColor[i].classList.add("future");
    ("style", ".future");
}
  else {
    bgColor[i].classList.add("past");
  }
}}
description();

//saves description when button clicked 
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
   
//this is to save description of its sibling and timeBlock of its parent
  let textAreaValue = $(this).siblings(".description").val();
console.log(textAreaValue)
  let timeBlock = $(this).parent().attr("id")
  console.log(timeBlock)

//set timeblock and textAreValue in localStorage if saveBtn clicked
localStorage.setItem(timeBlock, textAreaValue);
})
console.log(localStorage);

//$("#hour-9 .description").val(localStorage.getItem("hour-9"))
for(var i = 9; i < 18; i++){
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}