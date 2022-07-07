// AFTER 4SEC IT WILL DISPLAY 

const myTimeout = setTimeout(display, 4000);
function display() {
    document.getElementById("hide").innerHTML = "UI/UX,JavaScript,ReactJs,Html,Css"
}


// FOR ABOUT PORTION 

window.addEventListener("scroll", progressAll);
function progressAll() {
  const triggerProgress = (window.innerHeight / 1.5) * 4;
  const progressTop = document.getElementById("technical");
const progressStart = progressTop.getBoundingClientRect().top;
if (progressStart < triggerProgress) {


// TECHNICAL SKILLS PART 
// FOR HTMl
const progress= document.getElementById("donehtml");
progress.style.width= progress.getAttribute("data-done");
progress.style.opacity= 1;

// FOR CSS 
const progressCss= document.getElementById("donecss");
progressCss.style.width= progressCss.getAttribute("data-done");
progressCss.style.opacity= 1;

// FOR BOOTSTRAP
const progressBootstrap= document.getElementById("donebootstrap");
progressBootstrap.style.width= progressBootstrap.getAttribute("data-done");
progressBootstrap.style.opacity= 1;

// FOR JAVASCRIPT
const progressJavascript= document.getElementById("donejavascript");
progressJavascript.style.width= progressJavascript.getAttribute("data-done");
progressJavascript.style.opacity= 1;

// FOR REACT 
const progressReactjs= document.getElementById("donereactjs");
progressReactjs.style.width= progressReactjs.getAttribute("data-done");
progressReactjs.style.opacity= 1;

  }
}

// increment counter
const counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
  counter.innerText = "20";
  updatecounter();

  function updatecounter() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 1000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 10);
    } else {
      counter.innerText = target;
    }
  }
});

  // FOR INPUT FIELDS 
const labels = document.querySelectorAll("label");
labels.forEach(function (label) {
    label.innerHTML = label.innerText.split("").map(function (letter, idx) {
        return `<span style='transition-delay:${idx * 80}ms'>${letter}</span>`
    })
        .join("");
});

