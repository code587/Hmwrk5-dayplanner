
let task = localStorage.getItem("task");

// current day. Used [Moment.js](https://momentjs.com/) 
let today = moment()
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
console.log(today);

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//save .description when button clicked 
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
   
//this is to save description in its sibling and timeBlock of its parent when savebtn clicked
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