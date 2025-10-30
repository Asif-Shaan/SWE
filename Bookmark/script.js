const button = document.getElementById('clickButton');

button.addEventListener('click', function() {
    alert('Button clicked!');
});

// --- 1. Store our list of fruits in an array ---
let fruits = [];

// --- 2. Get references to all the HTML elements we need ---
const fruitInput = document.getElementById('fruitInput');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const showButton = document.getElementById('showButton');
const tableContainer = document.getElementById('tableContainer');

// --- 3. Add event listeners to the buttons ---
addButton.addEventListener('click', addFruit);
deleteButton.addEventListener('click', deleteFruit);
showButton.addEventListener('click', showTable);

// --- 4. Define the functions ---

/**
 * Adds a fruit to the 'fruits' array.
 */
function addFruit() {
    // Get the value from the input box and trim whitespace
    const fruitName = fruitInput.value.trim();

    // Only add if the input box isn't empty
    if (fruitName) {
        fruits.push(fruitName);
        console.log(fruits); // For testing: shows the array in the console
    }

    // Clear the input box for the next entry
    fruitInput.value = '';
}

/**
 * Deletes a fruit from the 'fruits' array.
 */
function deleteFruit() {
    const fruitName = fruitInput.value.trim();

    if (fruitName) {
        // Find the index of the fruit
        const index = fruits.indexOf(fruitName);

        // If the fruit is found (index is not -1)
        if (index > -1) {
            // Remove 1 item at that index
            fruits.splice(index, 1);
            console.log(fruits); // For testing
        }
    }
    
    // Clear the input box
    fruitInput.value = '';
}

/**
 * Renders the final table in the HTML.
 */
function showTable() {
    // Clear any existing table
    tableContainer.innerHTML = '';

    // Check if the fruit list is empty
    if (fruits.length === 0) {
        tableContainer.innerHTML = '<p>No fruits to show.</p>';
        return; // Exit the function
    }

    // Start building the table HTML as a string
    let tableHtml = `
        <table>
            <thead>
                <tr>
                    <th>My Fruits</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Loop through the fruits array and add a row for each fruit
    for (const fruit of fruits) {
        tableHtml += `
            <tr>
                <td>${fruit}</td>
            </tr>
        `;
    }

    // Close the table tags
    tableHtml += `
            </tbody>
        </table>
    `;

    // Set the container's HTML to the table we just built
    tableContainer.innerHTML = tableHtml;
}