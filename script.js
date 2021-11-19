//You'll need to use the [Moment.js](https://momentjs.com/) 
let hourlyTask = document.querySelector("#activity");
let saveActivity = document.querySelector(".saveBtn");
let task = localStorage.getItem("task");

renderLastRegistered();

console.log(saveActivity);

let today = moment()
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
console.log(today);

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

hourlyTask.addEventListener("click", function() {
  hourlyTask.textContent = ""
})
console.log(hourlyTask);

function renderLastRegistered() {
    let activity = localStorage.getItem("activity");

    if (activity) {
        return;
    }
}
saveActivity.addEventListener("click", function(event) {
    event.preventDefault();
    
let hourlyTask = document.querySelector("#activity").value;

localStorage.setItem("hourlyTask", hourlyTask);
renderLastRegistered();
})
console.log(localStorage);
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage

//WHEN I refresh the page
//THEN the saved events persist