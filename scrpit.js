function connect() {

    var searchTerm = document.getElementById("searchBox").value ;

    document.getElementById("searchBox").value = ""; 
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`; 

    fetch (url)
    .then (res=> res.json() )
    .then( data => show(data.meals))
}

function show (data) {
 console.log (data); 
 
 var oldContent = document.getElementById("container");
oldContent.textContent = ""; 

 for (var i=1; i<data.length; i++){

    var newDiv = document.createElement("div");
    newDiv.innerHTML = `Meal Title: <b>${data[i-1].strMeal}</b> <br>
                        <img src="${data[i-1].strMealThumb}"> <br>
                        Cooking Instructions: ${data[i-1].strInstructions}<br><br>`; 
    newDiv.classList.add("innerStyle");
    oldContent.appendChild(newDiv); 
    
 }
}
