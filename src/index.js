//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const morning = "Good Morning";
const afternoon = "Good Afternoon";
const evening = "Good Evening";

var colorStyle = { color: "red" };

const dateTime = new Date(2020, 8, 31, 12, 0, 0);
let message = morning;
const currHour = dateTime.getHours();
console.log(currHour);
if (currHour >= 12 && currHour < 18) {
  message = afternoon;
  colorStyle.color = "green";
} else if (currHour >= 18) {
  message = evening;
  colorStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={colorStyle}>
      {message}
    </h1>
  </div>,
  document.getElementById("root")
);
