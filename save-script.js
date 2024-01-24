document.addEventListener('DOMContentLoaded', function () {
    // Check if there are saved habits in localStorage
    const savedHabits = localStorage.getItem('userHabits');

    // If there are saved habits, parse and display them
    if (savedHabits) {
        const habitList = document.querySelector('.habit-list');
        habitList.innerHTML = savedHabits;
    }

    // Function to add a new habit
    window.addHabit = function () {
        const habitInput = document.getElementById('habit-input');
        const newHabit = habitInput.value;

        // Check if the input is not empty
        if (newHabit.trim() !== '') {
            // Create a new list item
            const listItem = document.createElement('li');
            listItem.textContent = newHabit;

            // Append the new habit to the habit list
            const habitList = document.querySelector('.habit-list');
            habitList.appendChild(listItem);

            // Save the updated habit list to localStorage
            localStorage.setItem('userHabits', habitList.innerHTML);

            // Clear the input field
            habitInput.value = '';
        }
    };
});
