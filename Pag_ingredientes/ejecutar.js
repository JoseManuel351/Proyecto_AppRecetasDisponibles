let selectedIngredients = [];

// Agrega ingredientes a la lista seleccionada
function addIngredient() {
    const input = document.getElementById("ingredientInput");
    const ingredient = input.value.trim();
 
    if (ingredient && !selectedIngredients.includes(ingredient.toLowerCase())) {
        selectedIngredients.push(ingredient.toLowerCase());
        updateIngredientList();
    }
    input.value = ""; // Limpia el campo de entrada
}

// Limpia la lista de ingredientes seleccionados
function clearIngredients() {
    selectedIngredients = [];
    updateIngredientList();
 
    // Limpia los resultados también
    document.getElementById("recipeResults").innerHTML = "No se encontraron recetas con los ingredientes seleccionados.";
}

// Actualiza la lista de ingredientes seleccionados
function updateIngredientList() {
    const list = document.getElementById("ingredientList");
    list.innerHTML = selectedIngredients.length
        ? selectedIngredients.map(ing => `<li>${ing}</li>`).join("")
        : "<li>No hay ingredientes seleccionados.</li>";
}

// Datos de recetas con nombre y cantidad de ingredientes
const recetas = {
    "Pasta Carbonara": {
        ingredientes: [
            { nombre: "pasta", cantidad: "200 g" },
            { nombre: "tocino", cantidad: "100 g" },
            { nombre: "queso parmesano", cantidad: "50 g" },
            { nombre: "huevos", cantidad: "2 unidades" },
            { nombre: "pimienta negra", cantidad: "al gusto" },
            { nombre: "sal", cantidad: "al gusto" }
        ],
        pasos: [
            "Cocina la pasta en agua con sal.",
            "Fríe el tocino hasta que esté crujiente.",
            "Bate los huevos con queso parmesano.",
            "Mezcla la pasta con el tocino y agrega los huevos batidos.",
            "Sirve con pimienta negra al gusto."
        ],
        imagen: "../imagen/pastaCarbonara.jpg"
    },
    "Ensalada César": {
        ingredientes: [
            { nombre: "lechuga romana", cantidad: "1 pieza" },
            { nombre: "pollo", cantidad: "200 g" },
            { nombre: "crutones", cantidad: "1 taza" },
            { nombre: "queso parmesano", cantidad: "50 g" },
            { nombre: "aderezo César", cantidad: "al gusto" }
        ],
        pasos: [
            "Corta la lechuga romana.",
            "Asa el pollo y córtalo en tiras.",
            "Mezcla la lechuga con el pollo y crutones.",
            "Agrega aderezo César y queso parmesano."
        ],
        imagen: "../imagen/ensaladaCesar.jpg"
    },
    "Tacos al Pastor": {
        ingredientes: [
            { nombre: "carne de cerdo", cantidad: "500 g" },
            { nombre: "piña", cantidad: "100 g" },
            { nombre: "tortillas", cantidad: "10 piezas" },
            { nombre: "cebolla", cantidad: "1 pieza" },
            { nombre: "cilantro", cantidad: "al gusto" },
            { nombre: "salsa de achiote", cantidad: "2 cucharadas" }
        ],
        pasos: [
            "Marina la carne con achiote durante 2 horas.",
            "Asa la carne en un sartén.",
            "Corta la piña, cebolla y cilantro.",
            "Calienta las tortillas y sirve la carne con piña, cebolla y cilantro."
        ],
        imagen: "../imagen/tacoalPastor.jpg"
    },
    "Chilaquiles Verdes": {
        ingredientes: [
            { nombre: "tortillas", cantidad: "8 piezas" },
            { nombre: "salsa verde", cantidad: "1 taza" },
            { nombre: "pollo deshebrado", cantidad: "200 g" },
            { nombre: "crema", cantidad: "al gusto" },
            { nombre: "queso fresco", cantidad: "50 g" },
            { nombre: "cilantro", cantidad: "al gusto" }
        ],
        pasos: [
            "Corta las tortillas en triángulos y fríelas hasta que estén crujientes.",
            "Calienta la salsa verde y agrégala a las tortillas fritas.",
            "Añade el pollo deshebrado y mezcla.",
            "Sirve con crema, queso fresco y cilantro al gusto."
        ],
        imagen: "../imagen/chilaquilesVerdes.jpg"
    },
    "Sopitos": {
        ingredientes: [
            { nombre: "masa de maíz", cantidad: "500 g" },
            { nombre: "carne molida", cantidad: "300 g" },
            { nombre: "frijoles refritos", cantidad: "1 taza" },
            { nombre: "lechuga", cantidad: "1 pieza" },
            { nombre: "salsa roja", cantidad: "al gusto" },
            { nombre: "crema", cantidad: "al gusto" }
        ],
        pasos: [
            "Forma pequeños discos de masa y fríelos en aceite.",
            "Cocina la carne molida y sazónala.",
            "Pon los frijoles refritos sobre los sopitos fritos.",
            "Agrega la carne molida y cubre con lechuga, salsa y crema."
        ],
        imagen: "../imagen/sopitos.jpg"
    },
    "Papas Gratinadas De Queso": {
        ingredientes: [
            { nombre: "papas", cantidad: "4 unidades" },
            { nombre: "crema", cantidad: "1 taza" },
            { nombre: "queso rallado", cantidad: "200 g" },
            { nombre: "mantequilla", cantidad: "50 g" },
            { nombre: "sal", cantidad: "al gusto" },
            { nombre: "pimienta", cantidad: "al gusto" }
        ],
        pasos: [
            "Pela las papas y córtalas en rodajas finas.",
            "Coloca las papas en una bandeja para hornear con mantequilla.",
            "Agrega crema y queso rallado encima.",
            "Hornea a 180°C durante 30 minutos hasta que estén doradas y burbujeantes."
        ],
        imagen: "../imagen/papasQueso.jpg"
    },
    "Tortilla Española": {
        ingredientes: [
            { nombre: "papas", cantidad: "4 unidades" },
            { nombre: "huevos", cantidad: "6 unidades" },
            { nombre: "cebolla", cantidad: "1 pieza" },
            { nombre: "aceite de oliva", cantidad: "al gusto" },
            { nombre: "sal", cantidad: "al gusto" }
        ],
        pasos: [
            "Pela las papas y córtalas en rodajas finas.",
            "Fría las papas y cebolla en aceite de oliva hasta que estén doradas.",
            "Bate los huevos con sal y mezcla con las papas.",
            "Vierte la mezcla en una sartén y cocina hasta que cuaje.",
            "Voltea la tortilla con ayuda de un plato y cocina el otro lado."
        ],
        imagen: "../imagen/tortillaEspañola.jpg"
    },
    "Guacamole": {
        ingredientes: [
            { nombre: "aguacate", cantidad: "3 unidades" },
            { nombre: "cilantro", cantidad: "al gusto" },
            { nombre: "tomate", cantidad: "1 pieza" },
            { nombre: "limón", cantidad: "1 unidad" },
            { nombre: "sal", cantidad: "al gusto" }
        ],
        pasos: [
            "Pela y muele los aguacates.",
            "Pica finamente el cilantro, tomate y cebolla.",
            "Mezcla todos los ingredientes en un tazón.",
            "Agrega jugo de limón y sal al gusto."
        ],
        imagen: "../imagen/guacamole.jpg"
    },
    "Arroz a la Mexicana": {
        ingredientes: [
            { nombre: "arroz", cantidad: "1 taza" },
            { nombre: "tomate", cantidad: "2 piezas" },
            { nombre: "cebolla", cantidad: "1 pieza" },
            { nombre: "chile verde", cantidad: "1 unidad" },
            { nombre: "caldo de pollo", cantidad: "2 tazas" }
        ],
        pasos: [
            "Lava el arroz y fríelo en aceite hasta que se dore.",
            "Licúa los tomates, cebolla y chile para formar la salsa.",
            "Agrega la salsa al arroz y cocina por 10 minutos.",
            "Añade el caldo de pollo y cocina hasta que el arroz esté listo."
        ],
        imagen: "../imagen/arrozMexicana.jpg"
    },
    "Enchiladas Verdes": {
        ingredientes: [
            { nombre: "tortillas", cantidad: "12 piezas" },
            { nombre: "salsa verde", cantidad: "1 taza" },
            { nombre: "pollo deshebrado", cantidad: "300 g" },
            { nombre: "queso fresco", cantidad: "100 g" },
            { nombre: "crema", cantidad: "al gusto" }
        ],
        pasos: [
            "Rellena las tortillas con pollo deshebrado.",
            "Enrolla las tortillas y colócalas en una bandeja.",
            "Cubre con salsa verde y queso fresco.",
            "Hornea durante 20 minutos a 180°C y sirve con crema."
        ],
        imagen: "../imagen/enchiladasVerdes.jpg"
    },
    "Sopa de Fideos": {
        ingredientes: [
            { nombre: "fideos", cantidad: "200 g" },
            { nombre: "tomate", cantidad: "2 piezas" },
            { nombre: "zanahoria", cantidad: "1 unidad" },
            { nombre: "caldo de pollo", cantidad: "1 litro" },
            { nombre: "aceite", cantidad: "1 cucharada" },
            { nombre: "sal", cantidad: "al gusto" }
        ],
        pasos: [
            "Fría los fideos en aceite hasta dorarlos ligeramente.",
            "Licúe los tomates y la zanahoria.",
            "Añada el caldo de pollo a los fideos y agregue la mezcla de tomate.",
            "Cocine durante 10 minutos hasta que los fideos estén suaves.",
            "Ajuste la sal al gusto."
        ],
        imagen: "../imagen/sopaFideos.jpg"
    },
    "Tostadas de Atún": {
        ingredientes: [
            { nombre: "tostadas", cantidad: "4 piezas" },
            { nombre: "atún", cantidad: "2 latas" },
            { nombre: "mayonesa", cantidad: "3 cucharadas" },
            { nombre: "lechuga", cantidad: "al gusto" },
            { nombre: "tomate", cantidad: "1 pieza" },
            { nombre: "salsa valentina", cantidad: "al gusto" }
        ],
        pasos: [
            "Escurre y mezcla el atún con la mayonesa.",
            "Coloca las tostadas en un plato y cubre con la mezcla de atún.",
            "Agrega lechuga picada y rodajas de tomate.",
            "Decora con salsa valentina al gusto."
        ],
        imagen: "../imagen/tostadaAtun.jpg"
    },
    "Ensalada de Atún": {
        ingredientes: [
            { nombre: "atún", cantidad: "2 latas" },
            { nombre: "jugo de limón", cantidad: "al gusto" },
            { nombre: "cebolla morada", cantidad: "1/2 pieza" },
            { nombre: "tomate", cantidad: "1 pieza" },
            { nombre: "pimiento morrón", cantidad: "1 unidad" },
            { nombre: "aceite de oliva", cantidad: "1 cucharada" }
        ],
        pasos: [
            "Escurre el atún y colócalo en un tazón.",
            "Pica finamente la cebolla, tomate y pimiento morrón.",
            "Añade estos ingredientes al tazón junto con el jugo de limón y aceite de oliva.",
            "Mezcla bien y sirve frío."
        ],
        imagen: "../imagen/ensaladaAtun.jpg"
    },
    "Pollo en Mole": {
        ingredientes: [
            { nombre: "pollo", cantidad: "4 piezas" },
            { nombre: "mole", cantidad: "1 taza" },
            { nombre: "chocolate", cantidad: "2 trozos" },
            { nombre: "caldo de pollo", cantidad: "1 taza" },
            { nombre: "aceite", cantidad: "1 cucharada" },
            { nombre: "sal", cantidad: "al gusto" }
        ],
        pasos: [
            "Fría las piezas de pollo en aceite hasta que estén doradas.",
            "En una sartén, calienta el mole con el caldo de pollo y el chocolate.",
            "Vierte el mole sobre el pollo y cocina a fuego lento durante 30 minutos.",
            "Ajuste la sal y sirve con arroz."
        ],
        imagen: "../imagen/polloMole.jpg"
    },
    "Pescado a la Veracruzana": {
        ingredientes: [
            { nombre: "pescado", cantidad: "4 filetes" },
            { nombre: "tomate", cantidad: "2 piezas" },
            { nombre: "aceitunas", cantidad: "al gusto" },
            { nombre: "alcaparras", cantidad: "al gusto" },
            { nombre: "pimiento morrón", cantidad: "1 unidad" },
            { nombre: "aceite de oliva", cantidad: "1 cucharada" }
        ],
        pasos: [
            "Fría el pescado en aceite hasta que esté dorado por ambos lados.",
            "Licúe los tomates y sofríelos en aceite.",
            "Añade las aceitunas, alcaparras y pimiento morrón picado.",
            "Vierte la salsa sobre el pescado y cocina a fuego lento durante 15 minutos.",
            "Sirve caliente."
        ],
        imagen: "../imagen/pezcadoVeracruzana.avif"
    },
    "Burritos de Carne": {
        ingredientes: [
            { nombre: "carne molida", cantidad: "500 g" },
            { nombre: "tortillas de harina", cantidad: "4 piezas" },
            { nombre: "queso rallado", cantidad: "150 g" },
            { nombre: "frijoles refritos", cantidad: "1 taza" },
            { nombre: "lechuga", cantidad: "al gusto" },
            { nombre: "salsa", cantidad: "al gusto" }
        ],
        pasos: [
            "Cocina la carne molida y sazónala.",
            "Calienta las tortillas de harina.",
            "Coloca una capa de frijoles refritos sobre cada tortilla.",
            "Agrega la carne, queso rallado, lechuga y salsa.",
            "Enrolla los burritos y sirve."
        ],
        imagen: "../imagen/burritosCarne.avif"
    },
    "Albóndigas en Salsa": {
        ingredientes: [
            { nombre: "carne molida", cantidad: "500 g" },
            { nombre: "pan rallado", cantidad: "1/2 taza" },
            { nombre: "huevo", cantidad: "1 unidad" },
            { nombre: "tomates", cantidad: "2 piezas" },
            { nombre: "ajos", cantidad: "2 dientes" },
            { nombre: "aceite de oliva", cantidad: "1 cucharada" }
        ],
        pasos: [
            "Mezcla la carne molida con pan rallado y huevo, forma albóndigas.",
            "Fría las albóndigas en aceite hasta dorarse.",
            "Licúa los tomates y ajos, luego cocina la salsa en la sartén.",
            "Agrega las albóndigas a la salsa y cocina durante 20 minutos.",
            "Sirve caliente con arroz."
        ],
        imagen: "../imagen/albondigasSalsa.jpg"
    },
    "Pavo Relleno": {
        ingredientes: [
            { nombre: "pavo", cantidad: "1 unidad" },
            { nombre: "pan de caja", cantidad: "4 piezas" },
            { nombre: "caldo de pollo", cantidad: "1 taza" },
            { nombre: "zanahoria", cantidad: "1 pieza" },
            { nombre: "pimientos", cantidad: "2 piezas" },
            { nombre: "aceite", cantidad: "1 cucharada" }
        ],
        pasos: [
            "Prepara el relleno con pan de caja desmenuzado, zanahoria y pimientos.",
            "Rellena el pavo con la mezcla y átalo.",
            "Fría el pavo en aceite hasta dorarse por fuera.",
            "Hornea el pavo a 180°C durante 1 hora.",
            "Sirve con salsa de caldo de pollo."
        ],
        imagen: "../imagen/pavoRelleno.jpg"
    },
    "Pizza Margherita": {
        ingredientes: [
            { nombre: "masa para pizza", cantidad: "1 unidad" },
            { nombre: "tomates", cantidad: "2 piezas" },
            { nombre: "mozzarella", cantidad: "200 g" },
            { nombre: "albahaca", cantidad: "al gusto" },
            { nombre: "aceite de oliva", cantidad: "al gusto" }
        ],
        pasos: [
            "Extiende la masa para pizza en una bandeja.",
            "Corta los tomates en rodajas y colócalos sobre la masa.",
            "Añade rodajas de mozzarella y hojas de albahaca.",
            "Hornea la pizza a 220°C durante 15-20 minutos.",
            "Sirve caliente con un toque de aceite de oliva."
        ],
        imagen: "../imagen/pizzaMargherita.jpg"
    },
    "Salmón al Horno": {
        ingredientes: [
            { nombre: "salmón", cantidad: "4 filetes" },
            { nombre: "aceite de oliva", cantidad: "2 cucharadas" },
            { nombre: "limón", cantidad: "1 unidad" },
            { nombre: "ajo", cantidad: "2 dientes" },
            { nombre: "sal", cantidad: "al gusto" },
            { nombre: "pimienta", cantidad: "al gusto" }
        ],
        pasos: [
            "Precalienta el horno a 180°C.",
            "Coloca los filetes de salmón en una bandeja para hornear.",
            "Rocía con aceite de oliva, exprime el limón sobre el salmón y agrega ajo picado.",
            "Sazona con sal y pimienta.",
            "Hornea durante 20 minutos o hasta que el salmón esté cocido.",
            "Sirve con una rodaja de limón."
        ],
        imagen: "../imagen/salmonAlHorno.webp"
    },
    "Pollo al Curry": {
        ingredientes: [
            { nombre: "pollo", cantidad: "500 g" },
            { nombre: "leche de coco", cantidad: "1 taza" },
            { nombre: "pasta de curry", cantidad: "2 cucharadas" },
            { nombre: "aceite de oliva", cantidad: "1 cucharada" },
            { nombre: "pimiento rojo", cantidad: "1 pieza" },
            { nombre: "sal", cantidad: "al gusto" }
        ],
        pasos: [
            "Corta el pollo en trozos y salpimienta.",
            "Fría el pollo en aceite de oliva hasta dorarse.",
            "Añade la pasta de curry y cocina por 2 minutos.",
            "Agrega la leche de coco y el pimiento picado.",
            "Cocina a fuego lento durante 15 minutos y sirve con arroz."
        ],
        imagen: "../imagen/polloAlCurry.jpg"
    },
    "Berenjenas Rellenas": {
        ingredientes: [
            { nombre: "berenjenas", cantidad: "2 unidades" },
            { nombre: "carne molida", cantidad: "400 g" },
            { nombre: "tomates", cantidad: "2 piezas" },
            { nombre: "pimiento verde", cantidad: "1 pieza" },
            { nombre: "queso rallado", cantidad: "100 g" },
            { nombre: "aceite de oliva", cantidad: "1 cucharada" }
        ],
        pasos: [
            "Corta las berenjenas por la mitad y ahueca el centro.",
            "Fría la carne molida con los tomates y el pimiento picado.",
            "Rellena las berenjenas con la mezcla de carne.",
            "Coloca el queso rallado por encima y hornea a 180°C durante 20 minutos.",
            "Sirve caliente."
        ],
        imagen: "../imagen/berenjenasRellenas.webp"
    },
    "Arroz con Pollo": {
        ingredientes: [
            { nombre: "pollo", cantidad: "500 g" },
            { nombre: "arroz", cantidad: "2 tazas" },
            { nombre: "caldo de pollo", cantidad: "4 tazas" },
            { nombre: "pimiento rojo", cantidad: "1 pieza" },
            { nombre: "guisantes", cantidad: "1 taza" },
            { nombre: "aceite", cantidad: "2 cucharadas" }
        ],
        pasos: [
            "Fría el pollo en aceite hasta dorarse.",
            "Agrega el arroz y mezcla.",
            "Añade el caldo de pollo y las verduras.",
            "Cocina a fuego lento durante 20 minutos o hasta que el arroz esté listo.",
            "Sirve caliente."
        ],
        imagen: "../imagen/arrozConPollo.jpg"
    },
    "Lasaña Vegetariana": {
        ingredientes: [
            { nombre: "láminas de lasaña", cantidad: "12 unidades" },
            { nombre: "espinacas", cantidad: "200 g" },
            { nombre: "queso ricotta", cantidad: "250 g" },
            { nombre: "salsa de tomate", cantidad: "2 tazas" },
            { nombre: "queso rallado", cantidad: "100 g" },
            { nombre: "aceite de oliva", cantidad: "1 cucharada" }
        ],
        pasos: [
            "Cocina las láminas de lasaña según las instrucciones del paquete.",
            "Saltea las espinacas en aceite de oliva hasta que se marchiten.",
            "Mezcla las espinacas con el queso ricotta.",
            "En una bandeja para hornear, coloca una capa de salsa de tomate, seguida de las láminas de lasaña y la mezcla de espinacas.",
            "Repite las capas y cubre con queso rallado.",
            "Hornea a 180°C durante 30 minutos."
        ],
        imagen: "../imagen/lasanaVegetariana.jpg"
    },
    "Sándwich de Jamón y Queso": {
        ingredientes: [
            { nombre: "pan de caja", cantidad: "2 rebanadas" },
            { nombre: "jamón", cantidad: "2 lonchas" },
            { nombre: "queso", cantidad: "2 lonchas" },
            { nombre: "mantequilla", cantidad: "1 cucharadita" }
        ],
        pasos: [
            "Unta mantequilla en el exterior de las rebanadas de pan.",
            "Coloca el jamón y el queso entre las rebanadas de pan.",
            "Cocina en un sartén a fuego medio hasta que el pan esté dorado y el queso se derrita.",
            "Sirve caliente."
        ],
        imagen: "../imagen/sandwichDeJamonYQueso.jpg"
    },
    "Quesadillas": {
        ingredientes: [
            { nombre: "tortillas de maíz", cantidad: "2 piezas" },
            { nombre: "queso rallado", cantidad: "150 g" },
            { nombre: "aceite", cantidad: "1 cucharadita" }
        ],
        pasos: [
            "Calienta las tortillas en un sartén con un poco de aceite.",
            "Coloca el queso rallado sobre una tortilla y cúbrela con la otra tortilla.",
            "Cocina hasta que esté dorada y el queso se derrita, luego voltea para dorar el otro lado.",
            "Sirve caliente."
        ],
        imagen: "../imagen/quesadillas.webp"
    },
    "Tacos de Frijoles": {
        ingredientes: [
            { nombre: "tortillas de maíz", cantidad: "4 piezas" },
            { nombre: "frijoles refritos", cantidad: "1 taza" },
            { nombre: "queso rallado", cantidad: "50 g" },
            { nombre: "cilantro", cantidad: "al gusto" },
            { nombre: "cebolla", cantidad: "al gusto" }
        ],
        pasos: [
            "Calienta las tortillas en un sartén.",
            "Coloca los frijoles refritos en las tortillas.",
            "Agrega queso rallado, cilantro y cebolla al gusto.",
            "Sirve con salsa al gusto."
        ],
        imagen: "../imagen/tacosDeFrijoles.webp"
    },
    "Hot Dog": {
        ingredientes: [
            { nombre: "pan para hot dog", cantidad: "1 pieza" },
            { nombre: "salchicha", cantidad: "1 pieza" },
            { nombre: "mostaza", cantidad: "al gusto" },
            { nombre: "kétchup", cantidad: "al gusto" }
        ],
        pasos: [
            "Calienta la salchicha en agua o en el sartén.",
            "Coloca la salchicha en el pan para hot dog.",
            "Agrega mostaza y kétchup al gusto.",
            "Sirve caliente."
        ],
        imagen: "../imagen/hotDog.jpg"
    }
    
};


// Almacenar recetas globalmente
window.recetasData = recetas;

// Función para abrir el modal con los detalles (incluyendo cantidades)
function openRecipeModal(recipeName) {
    const modal = document.getElementById("recipeModal");
    const receta = window.recetasData[recipeName];

    if (!receta) return;

    // Configurar contenido
    document.getElementById("modalRecipeName").textContent = recipeName;
    document.getElementById("modalRecipeImage").src = receta.imagen;
    document.getElementById("modalRecipeIngredients").innerHTML = receta.ingredientes
        .map(ing => `<li>${ing.cantidad} de ${ing.nombre}</li>`) // Mostramos cantidad + nombre
        .join("");
    document.getElementById("modalRecipeSteps").innerHTML = receta.pasos
        .map((paso, i) => `<li>Paso ${i + 1}: ${paso}</li>`)
        .join("");

    // Mostrar modal
    modal.style.display = "block";

    // Cerrar modal al hacer clic en 'X'
    document.getElementById("closeModal").onclick = function () {
        modal.style.display = "none";
    };
}

// Función para buscar recetas
function searchRecipes() {
    const recipeResults = document.getElementById("recipeResults");

    // Filtrar recetas basadas en los ingredientes seleccionados
    const filteredRecipes = Object.keys(recetas).filter(recipeName => {
        const receta = recetas[recipeName];
        return selectedIngredients.every(ingredient => 
            receta.ingredientes.some(ing => ing.nombre.toLowerCase() === ingredient)
        );
    });

    // Verificar si se encontraron recetas
    if (filteredRecipes.length > 0) {
        recipeResults.innerHTML = ''; // Limpiar resultados previos

        // Mostrar las recetas encontradas
        filteredRecipes.forEach(recipeName => {
            const receta = recetas[recipeName];
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("recipe-result");

            // Crear la imagen y el nombre de la receta
            resultDiv.innerHTML = `
                <img src="${receta.imagen}" alt="${recipeName}" class="recipe-image" onclick="openRecipeModal('${recipeName}')">
                <h3>${recipeName}</h3>
            `;
            
            // Agregar el resultado al contenedor
            recipeResults.appendChild(resultDiv);
        });
    } else {
        recipeResults.innerHTML = "No se encontraron recetas con los ingredientes seleccionados.";
    }
}
