

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))

    const displayMeals = meals =>{
        for(let i=0; i> meals.length; i++){
        const item = meals[i];
        console.log(item.strMeal);
        
        }
    }