// DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  question = document.getElementById("question"),
  focus = document.getElementById("focus");

// Options

const showAmPm = true;

// Show Time

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format

  hour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}
// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting
function setBackgroundGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 4) {
    // Then we know it's past Midnight
    document.body.style.backgroundImage = "url('./img/midnight.jpg')";
    greeting.textContent = "It's Past Midnight";
    question.textContent = "What is Your Main Focus Right Now?";
    document.body.style.color = "white";
    // Then we know it's Dawn
  } else if (hour < 6) {
    document.body.style.backgroundImage = "url('./img/dawn.jpg')";
    greeting.textContent = "Welcome to A New Day";
  } else if (hour < 12) {
    // Then we know it's Morning
    document.body.style.backgroundImage = "url('./img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // Then we know it's the Afternoon
    document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
    document.body.style.color = "white";
  } else {
    // It's Evening
    document.body.style.backgroundImage = "url('./img/night.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// Set Name
function setName(event) {
  if (event.type === "keypress") {
    // Make sure Enter is pressed
    if (event.which === 13 || event.keyCode === 13) {
      localStorage.setItem("name", event.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", event.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// Set Focus
function setFocus(event) {
  if (event.type === "keypress") {
    // Make sure Enter is pressed
    if (event.which === 13 || event.keyCode === 13) {
      localStorage.setItem("focus", event.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", event.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
showTime();
setBackgroundGreeting();
getName();
getFocus();
