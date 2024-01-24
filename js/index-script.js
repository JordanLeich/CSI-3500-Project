// Variables to track colorblind options
let colorblindFriendly = false;

// Function to toggle colorblind options
function toggleColorblind() {
  const habitList = document.querySelector(".habit-list");
  const habitForm = document.querySelector(".habit-form");
  
  habitList.classList.toggle("colorblind-friendly");
  habitForm.classList.toggle("colorblind-friendly");

  colorblindFriendly = !colorblindFriendly;
}

let speechRecognition;

// Function to toggle colorblind options
function toggleColorblind() {
    const habitList = document.querySelector(".habit-list");
    const habitForm = document.querySelector(".habit-form");

    habitList.classList.toggle("colorblind-friendly-protanopia");
    habitForm.classList.toggle("colorblind-friendly-protanopia");

    colorblindFriendly = !colorblindFriendly;
}

// Function to toggle Speech-to-Text
function toggleSpeechToText() {
    if (!speechRecognition) {
        startSpeechRecognition();
    } else {
        stopSpeechRecognition();
    }
}

function startSpeechRecognition() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

        speechRecognition.onstart = function () {
            console.log('Speech recognition started');
        };

        speechRecognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            console.log('Speech recognition result:', transcript);

            // Add your logic to handle the transcript (e.g., update input field)
            document.getElementById('habit-input').value = transcript;
        };

        speechRecognition.onerror = function (event) {
            console.error('Speech recognition error:', event.error);
            stopSpeechRecognition();
        };

        speechRecognition.onend = function () {
            console.log('Speech recognition ended');
        };

        speechRecognition.start();
    } else {
        console.error('Speech recognition not supported in this browser');
    }
}

function stopSpeechRecognition() {
    if (speechRecognition) {
        speechRecognition.stop();
        speechRecognition = null;
        console.log('Speech recognition stopped');
    }
}

function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function toggleSpeechToText() {
    // Add your logic for toggling Speech-to-Text here
}

function addHabit() {
  const habitInput = document.getElementById("habit-input");
  const habitList = document.querySelector(".habit-list");

  if (habitInput.value.trim() !== "") {
      const habitItem = document.createElement("li");
      habitItem.className = "habit-item";
      habitItem.innerHTML = `
          <span>${habitInput.value}</span>
          <button onclick="removeHabit(this)" aria-label="Remove ${habitInput.value}">Remove</button>
      `;

      habitList.appendChild(habitItem);
      habitInput.value = "";
      habitInput.focus();
  }
}

function removeHabit(button) {
  const habitItem = button.closest(".habit-item");
  habitItem.remove();
  document.getElementById("habit-input").focus();
}

// Motivational Quotes
var quotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Your only limitation is the one you set up in your own mind! -Napoleon Hill",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
    "It always seems impossible until it's done. -Nelson Mandela",
    "The only way to achieve the impossible is to believe it is possible. -Charles Kingsleigh"
];

// Function to display a random quote
function displayRandomQuote() {
    var quoteContainer = document.getElementById('quote-container');
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.textContent = quotes[randomIndex];
}

// Display a random quote on page load
displayRandomQuote();