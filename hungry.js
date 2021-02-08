const searchMeal = () =>{
    const inputMeal = document.getElementById('input-meal').value;
    // console.log(inputMeal);
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    const foodInfoDiv = document.getElementById('food-info')
    meals.forEach(show => {
        // console.log(show.strMeal);
    const mealsDiv = document.createElement('div');
    mealsDiv.className = 'mealsItem';
    mealsDiv.innerHTML = `
    <img class='mealsImg' src="${show.strMealThumb}">
    <h3>${show.strMeal}</h3>
    
    `
    foodInfoDiv.appendChild(mealsDiv);
    });
}