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
            // Create a new habit object
            const habitObject = { name: newHabit };

            // Create a new list item
            const listItem = document.createElement('li');
            listItem.textContent = newHabit;

            // Create a remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function () {
                listItem.remove();
                updateLocalStorage();
            });

            // Append the habit and remove button to the list item
            listItem.appendChild(removeButton);

            // Append the new habit to the habit list
            const habitList = document.querySelector('.habit-list');
            habitList.appendChild(listItem);

            // Save the updated habit list to localStorage
            updateLocalStorage();

            // Clear the input field
            habitInput.value = '';
        }
    };

    // Function to remove all habits
    window.removeAllHabits = function () {
        const habitList = document.querySelector('.habit-list');
        habitList.innerHTML = ''; // Remove all child elements
        updateLocalStorage(); // Update localStorage after removing all habits
    };

    // Function to update localStorage with the current habit list
    function updateLocalStorage() {
        const habitList = document.querySelector('.habit-list');
        localStorage.setItem('userHabits', habitList.innerHTML);
    }
});
