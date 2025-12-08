const name = "YUSUF NASHIF";
const element = document.getElementById("animated-name");
let display = Array(name.length).fill("0"); // start with 0s
let i = 0;
let glitchInterval = null;

// Random 0 or 1
function randomBinary() {
  return Math.random() < 0.5 ? "0" : "1";
}

// Initial reveal animation
function animateName() {
  if (i < name.length) {
    for (let j = i; j < name.length; j++) {
      display[j] = randomBinary();
    }
    element.textContent = display.join("");
    setTimeout(() => {
      display[i] = name[i];
      i++;
      animateName();
    }, 200); // faster reveal
  } else {
    element.textContent = name; // ensure final name is correct
  }
}

// Glitch effect function
function glitchLetters() {
  const letters = name.split("");
  const display = letters.map(letter => {
    if (Math.random() < 0.15 && letter !== " ") { // 15% chance per letter
      return randomBinary();
    }
    return letter;
  });
  element.textContent = display.join("");
}

// Start glitch on hover
element.addEventListener("mouseenter", () => {
  if (!glitchInterval) {
    glitchInterval = setInterval(glitchLetters, 100 + Math.random() * 100); // random flicker speed
  }
});

// Stop glitch when mouse leaves
element.addEventListener("mouseleave", () => {
  clearInterval(glitchInterval);
  glitchInterval = null;
  element.textContent = name; // reset to original name
});

// Start the initial animation
animateName();
