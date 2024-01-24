function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
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