const animal = prompt ("ingrese un animal")
if (animal.toLowerCase() === "perro") {
    console.log("Mi animal es un perro")
}
else if (animal.toLowerCase() === "gato") {
    console.log("Mi animal es un gato")
}
else if (animal.toLowerCase() === "conejo") {
    console.log("Mi animal es un conejo")
}
else {
    console.log("No tengo un animal")
}

const parrafo = document.querySelector("#parrafo");
console.log(parrafo);
parrafo.innerHTML = "este es el nuevo contenido de mi parrafoooo";