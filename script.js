//You'll need to use the [Moment.js](https://momentjs.com/) 

let today = moment()
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
console.log(today);


//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

let hourlyTask = document.querySelector("#activity");

hourlyTask.addEventListener("click", function() {
  hourlyTask.textContent = ""
})
console.log(task);

//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage

//WHEN I refresh the page
//THEN the saved events persist