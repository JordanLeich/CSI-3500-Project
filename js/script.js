// Variables to track colorblind options
let colorblindFriendly = false;

// Function to toggle colorblind options
function toggleColorblind() {
    const habitList = document.querySelector(".habit-list");
    habitList.classList.toggle("colorblind-friendly");
    colorblindFriendly = !colorblindFriendly;
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


