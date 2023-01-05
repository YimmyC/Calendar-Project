const today = dayjs();
$("#currentDay").text(today.format("MMM D, YYYY"));
const currentHour = dayjs().hour();
let hour9El = $("#hour-9");
let hour10El = $("#hour-10");
let hour11El = $("#hour-11");
let hour12El = $("#hour-12");
let hour1El = $("#hour-1");
let hour2El = $("#hour-2");
let hour3El = $("#hour-3");
let hour4El = $("#hour-4");
let hour5El = $("#hour-5");
console.log(currentHour);
let saveBtn9 = $("#9save");
let saveBtn10 = $("#10save");
let saveBtn11 = $("#11save");
let saveBtn12 = $("#12save");
let saveBtn1 = $("#1save");
let saveBtn2 = $("#2save");
let saveBtn3 = $("#3save");
let saveBtn4 = $("#4save");
let saveBtn5 = $("#5save");
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Time of day class function
$(function () {
  if (currentHour === 9) {
    console.log("works");
    hour9El.addClass("present");
    hour10El.addClass("future");
    hour11El.addClass("future");
    hour12El.addClass("future");
    hour1El.addClass("future");
    hour2El.addClass("future");
    hour3El.addClass("future");
    hour4El.addClass("future");
    hour5El.addClass("future");
  } else if (currentHour === 10) {
    hour9El.addClass("past");
    hour10El.addClass("present");
    hour11El.addClass("future");
    hour12El.addClass("future");
    hour1El.addClass("future");
    hour2El.addClass("future");
    hour3El.addClass("future");
    hour4El.addClass("future");
    hour5El.addClass("future");
  } else if (currentHour === 11) {
    hour9El.addClass("past");
    hour10El.addClass("past");
    hour11El.addClass("present");
    hour12El.addClass("future");
    hour1El.addClass("future");
    hour2El.addClass("future");
    hour3El.addClass("future");
    hour4El.addClass("future");
    hour5El.addClass("future");
  } else if (currentHour === 12) {
    hour9El.addClass("past");
    hour10El.addClass("past");
    hour11El.addClass("past");
    hour12El.addClass("present");
    hour1El.addClass("future");
    hour2El.addClass("future");
    hour3El.addClass("future");
    hour4El.addClass("future");
    hour5El.addClass("future");
  } else if (currentHour === 13) {
    hour9El.addClass("past");
    hour10El.addClass("past");
    hour11El.addClass("past");
    hour12El.addClass("past");
    hour1El.addClass("present");
    hour2El.addClass("future");
    hour3El.addClass("future");
    hour4El.addClass("future");
    hour5El.addClass("future");
  } else if (currentHour === 14) {
    hour9El.addClass("past");
    hour10El.addClass("past");
    hour11El.addClass("past");
    hour12El.addClass("past");
    hour1El.addClass("past");
    hour2El.addClass("present");
    hour3El.addClass("future");
    hour4El.addClass("future");
    hour5El.addClass("future");
  } else if (currentHour === 15) {
    hour9El.addClass("past");
    hour10El.addClass("past");
    hour11El.addClass("past");
    hour12El.addClass("past");
    hour1El.addClass("past");
    hour2El.addClass("past");
    hour3El.addClass("present");
    hour4El.addClass("future");
    hour5El.addClass("future");
  } else if (currentHour === 16) {
    hour9El.addClass("past");
    hour10El.addClass("past");
    hour11El.addClass("past");
    hour12El.addClass("past");
    hour1El.addClass("past");
    hour2El.addClass("past");
    hour3El.addClass("past");
    hour4El.addClass("present");
    hour5El.addClass("future");
  } else if (currentHour === 17) {
    hour9El.addClass("past");
    hour10El.addClass("past");
    hour11El.addClass("past");
    hour12El.addClass("past");
    hour1El.addClass("past");
    hour2El.addClass("past");
    hour3El.addClass("past");
    hour4El.addClass("past");
    hour5El.addClass("present");
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});

saveBtn9.on("click", function () {
  console.log("i clicked");
});
saveBtn10.on("click", function () {
  console.log("i clicked");
});
saveBtn11.on("click", function () {
  console.log("i clicked");
});
saveBtn12.on("click", function () {
  console.log("i clicked");
});
saveBtn1.on("click", function () {
  console.log("i clicked");
});
saveBtn2.on("click", function () {
  console.log("i clicked");
});
saveBtn3.on("click", function () {
  console.log("i clicked");
});
saveBtn4.on("click", function () {
  console.log("i clicked");
});
saveBtn5.on("click", function () {
  console.log("i clicked");
});
