    const searchMeal = () =>{
        const inputMeal = document.getElementById('input-meal').value;
        // console.log(inputMeal);
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`;
        // console.log(url);
            fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals))
    }

    const displayMeals = meals =>{
        const foodInfoDiv = document.getElementById('food-info')
        foodInfoDiv.innerHTML = '';
        meals.forEach(show => {
            // console.log(show.strMeal);
        const mealsDiv = document.createElement('div');
        mealsDiv.className = 'mealsItem';
        mealsDiv.innerHTML = `
        <img onclick="getMealsDetails('${show.strMeal}')" class='mealsImg' src="${show.strMealThumb}">
        <h3>${show.strMeal}</h3>

        `
        foodInfoDiv.appendChild(mealsDiv);
        });
    }

    const getMealsDetails = details =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => showIngredient(data.meals[0]));
    }

    const showIngredient = ingredient =>{
        const ingredientDiv = document.getElementById("ingredient-item");
        ingredientDiv.innerHTML = `
        <img src="${ingredient.strMealThumb}">
        <h2>${ingredient.strMeal}</h2>
        <h4>Ingredients:</h4>
        <li>${ingredient.strIngredient1}</li>
        <li>${ingredient.strIngredient2}</li>
        <li>${ingredient.strIngredient3}</li>
        <li>${ingredient.strIngredient4}</li>
        <li>${ingredient.strIngredient5}</li>
        <li>${ingredient.strIngredient6}</li>
        <li>${ingredient.strIngredient7}</li>
        <li>${ingredient.strIngredient8}</li>
        <li>${ingredient.strIngredient9}</li>
        <li>${ingredient.strIngredient10}</li>

        `
    }

