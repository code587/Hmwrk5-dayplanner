
let task = localStorage.getItem("task");
let plannerTime = [09,10,11,12,13,14,15,16,17];
let bgColor = document.querySelectorAll(".description");

// current day. Used [Moment.js](https://momentjs.com/) 
let today = moment()
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
console.log(today);

//used moment format for current time when website is opened
let currentTime = moment().format("kk");
console.log(currentTime);

function description(bgColor) {
  if (currentTime === plannerTime) {
    ("style", ".present");
  }
  else if (currentTime > plannerTime) {
    ("style", ".future");
}
  else {
    ("style", ".past");

  }
}
console.log(description);
// plannerTime = 0
// for (let i = 0; i < plannerTime.length; i++) {
//   if (i = currentTime) {
//     ("style", ".present")
// }
// }
// console.log(plannerTime);

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future


//save .description when button clicked 
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