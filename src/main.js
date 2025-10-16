import "./components/my-greeting.js";
import "./components/my-button.js";
import "./components/my-tag.js";

// Example interactions
const greeting = document.querySelector("my-greeting");
if (greeting) {
  setTimeout(() => greeting.setAttribute("name", "Developer"), 2000);
}

const demoBtn = document.querySelector("my-button");
if (demoBtn) {
  demoBtn.addEventListener("press", () => {
    console.log("my-button pressed");
    alert("my-button pressed");
  });
}
