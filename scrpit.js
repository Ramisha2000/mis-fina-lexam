function connect() {
    var searchTerm = document.getElementById("searchBox").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    fetch(url)
        .then(res => res.json())
        .then(data => show(data.meals))
        .catch(err => console.error('Error fetching data:', err));
}

function show(data) {
    if (!data) {
        console.log("No data found.");
        return;
    }

    var container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous results

    // Determine the number of meals to display
    let mealsToShow = data.length > 5 ? 5 : data.length;

    for (let i = 0; i < mealsToShow; i++) {
        let meal = data[i];
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `Meal Title: <b>${meal.strMeal}</b> <br>
                            <img src="${meal.strMealThumb}" alt="Meal Image"> <br>
                            Meal Name: <b>${meal.strMeal}</b> <br>
                            Meal ID: <b>${meal.idMeal}</b> <br>
                            Cooking Instructions: ${meal.strInstructions}<br><br>`;
        newDiv.classList.add("innerStyle");
        container.appendChild(newDiv);
    }

    if (data.length > 5) {
        var showAllButton = document.createElement("button");
        showAllButton.textContent = "SHOW ALL";
        showAllButton.onclick = function () {
            container.innerHTML = ""; // Clear displayed meals

            data.forEach(meal => {
                var allMealsDiv = document.createElement("div");
                allMealsDiv.innerHTML = `Meal Title: <b>${meal.strMeal}</b> <br>
                                         <img src="${meal.strMealThumb}" alt="Meal Image"> <br>
                                         Meal Name: <b>${meal.strMeal}</b> <br>
                                         Meal ID: <b>${meal.idMeal}</b> <br>
                                         Cooking Instructions: ${meal.strInstructions}<br><br>`;
                allMealsDiv.classList.add("innerStyle");
                container.appendChild(allMealsDiv);
            });
        };
        container.appendChild(showAllButton);
    }
}
