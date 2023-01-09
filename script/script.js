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
let textField9 = $("#9field");
let textField10 = $("#10field");
let textField11 = $("#11field");
let textField12 = $("#12field");
let textField1 = $("#1field");
let textField2 = $("#2field");
let textField3 = $("#3field");
let textField4 = $("#4field");
let textField5 = $("#5field");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function init() {
  printTask9Data();
  printTask10Data();
  printTask11Data();
  printTask12Data();
}
// reads tasks
function readTasks9FromStorage() {
  var tasks9 = localStorage.getItem("tasks9");
  if (tasks9) {
    tasks9 = JSON.parse(tasks9);
  } else {
    tasks9 = [];
  }
  console.log("reading");

  return tasks9;
}

function readTasks10FromStorage() {
  var tasks10 = localStorage.getItem("tasks10");
  if (tasks10) {
    tasks10 = JSON.parse(tasks10);
  } else {
    tasks10 = [];
  }
  console.log("reading");

  return tasks10;
}

function readTasks11FromStorage() {
  var tasks11 = localStorage.getItem("tasks11");
  if (tasks11) {
    tasks11 = JSON.parse(tasks11);
  } else {
    tasks11 = [];
  }
  console.log("reading");

  return tasks11;
}

function readTasks12FromStorage() {
  var tasks12 = localStorage.getItem("tasks12");
  if (tasks12) {
    tasks12 = JSON.parse(tasks12);
  } else {
    tasks12 = [];
  }
  console.log("reading");

  return tasks12;
}
// saves tasks
function saveTasks9ToStorage(tasks9) {
  localStorage.setItem("tasks9", JSON.stringify(tasks9));
}

function saveTasks10ToStorage(tasks10) {
  localStorage.setItem("tasks10", JSON.stringify(tasks10));
}

function saveTasks11ToStorage(tasks11) {
  localStorage.setItem("tasks11", JSON.stringify(tasks11));
}

function saveTasks12ToStorage(tasks12) {
  localStorage.setItem("tasks12", JSON.stringify(tasks12));
}
// displays tasks
function printTask9Data() {
  // get projects from localStorage
  var tasks9 = readTasks9FromStorage();

  console.log(tasks9);
  tasks9.sort(function (a) {
    return a.task;
  });

  // $("#hour-9").append("<p>" + JSON.stringify(tasks) + "</p>");
  document.getElementById("9field").value += JSON.stringify(tasks9);
}

function printTask10Data() {
  // get projects from localStorage
  var tasks10 = readTasks10FromStorage();

  console.log(tasks10);
  tasks10.sort(function (a) {
    return a.task;
  });

  // $("#hour-10").append("<p>" + JSON.stringify(tasks) + "</p>");
  document.getElementById("10field").value += JSON.stringify(tasks10);
}

function printTask11Data() {
  // get projects from localStorage
  var tasks11 = readTasks11FromStorage();

  console.log(tasks11);
  tasks11.sort(function (a) {
    return a.task;
  });

  // $("#hour-11").append("<p>" + JSON.stringify(tasks) + "</p>");
  document.getElementById("11field").value += JSON.stringify(tasks11);
}

function printTask12Data() {
  // get projects from localStorage
  var tasks12 = readTasks12FromStorage();

  console.log(tasks12);
  tasks12.sort(function (a) {
    return a.task;
  });

  // $("#hour-12").append("<p>" + JSON.stringify(tasks) + "</p>");
  document.getElementById("12field").value += JSON.stringify(tasks12);
}

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

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});

init();

saveBtn9.on("click", function (event) {
  event.preventDefault();

  // read user input from the form
  var taskInput = textField9.val().trim();

  var newTask = { Task: taskInput };

  // add project to local storage
  var tasks = readTasks9FromStorage();
  tasks.push(newTask);
  saveTasks9ToStorage(tasks);

  // print project data
  printTask9Data();
});
saveBtn10.on("click", function (event) {
  event.preventDefault();

  // read user input from the form
  var taskInput = textField10.val().trim();

  var newTask = { Task: taskInput };

  // add project to local storage
  var tasks = readTasks10FromStorage();
  tasks.push(newTask);
  saveTasks10ToStorage(tasks);

  // print project data
  printTask10Data();
});
saveBtn11.on("click", function (event) {
  event.preventDefault();

  // read user input from the form
  var taskInput = textField11.val().trim();

  var newTask = { Task: taskInput };

  // add project to local storage
  var tasks = readTasks11FromStorage();
  tasks.push(newTask);
  saveTasks11ToStorage(tasks);

  // print project data
  printTask11Data();
});
saveBtn12.on("click", function (event) {
  event.preventDefault();

  // read user input from the form
  var taskInput = textField12.val().trim();

  var newTask = { Task: taskInput };

  // add project to local storage
  var tasks = readTasks12FromStorage();
  tasks.push(newTask);
  saveTasks12ToStorage(tasks);

  // print project data
  printTask12Data();
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
