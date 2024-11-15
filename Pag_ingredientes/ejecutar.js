let ingredients = [];

function addIngredient() {
    const ingredientInput = document.getElementById('ingredientInput');
    const ingredient = ingredientInput.value.trim();
    
    if (ingredient) {
        ingredients.push(ingredient);
        updateIngredientList();
        ingredientInput.value = '';
    }
}

function updateIngredientList() {
    const ingredientList = document.getElementById('ingredientList');
    ingredientList.innerHTML = '';

    if (ingredients.length === 0) {
        ingredientList.innerHTML = '<li>No hay ingredientes seleccionados.</li>';
    } else {
        ingredients.forEach(ing => {
            const li = document.createElement('li');
            li.textContent = ing;
            ingredientList.appendChild(li);
        });
    }
}

function searchRecipes() {
    const recipeResults = document.getElementById('recipeResults');
    
    if (ingredients.length === 0) {
        recipeResults.innerHTML = 'No se encontraron recetas con los ingredientes seleccionados.';
    } else {
        // Aquí puedes agregar la lógica para buscar recetas usando los ingredientes
        recipeResults.innerHTML = 'Mostrando recetas para los ingredientes seleccionados: ' + ingredients.join(', ');
    }
}
