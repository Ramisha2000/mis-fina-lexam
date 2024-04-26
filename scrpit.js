function connect() {
    var searchTerm = document.getElementById("searchBox").value;
    document.getElementById("searchBox").value = ""; // Clear the search box
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    fetch(url)
        .then(response => response.json())
        .then(data => showMeals(data.meals))
        .catch(error => console.error('Failed to fetch meals:', error));
}

function showMeals(meals) {
    var container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous results

    if (!meals) {
        container.innerHTML = "<p>No meals found. Please try another search.</p>";
        return;
    }

    let limit = Math.min(meals.length, 5);
    meals.slice(0, limit).forEach(meal => {
        const mealDiv = document.createElement("div");
        mealDiv.className = "meal";
        mealDiv.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <p>ID: ${meal.idMeal}</p>
            <img src="${meal.strMealThumb}" alt="Image of ${meal.strMeal}">
            <p>Title: ${meal.strMeal}</p>
            <p>Instructions: ${meal.strInstructions.substring(0, 100)}...</p>
        `;
        container.appendChild(mealDiv);
    });

    if (meals.length > 5) {
        const showAllButton = document.createElement("button");
        showAllButton.textContent = "SHOW ALL";
        showAllButton.addEventListener('click', () => {
            showAllMeals(meals);
        });
        container.appendChild(showAllButton);
    }
}

function showAllMeals(meals) {
    var container = document.getElementById("container");
    container.innerHTML = ""; // Clear limited display

    meals.forEach(meal => {
        const mealDiv = document.createElement("div");
        mealDiv.className = "meal";
        mealDiv.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <p>ID: ${meal.idMeal}</p>
            <img src="${meal.strMealThumb}" alt="Image of ${meal.strMeal}">
            <p>Title: ${meal.strMeal}</p>
            <p>Instructions: ${meal.strInstructions}</p>
        `;
        container.appendChild(mealDiv);
    });
}

 

