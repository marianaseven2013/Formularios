//Llamando a un node del DOM
let root = document.querySelector("#root");

//Comentario
//root.innerHTML = `Hola mundo`;


//Elemento de tipo div
let div_formularios = document.createElement("div");
div_formularios.className = "div-formularios";

//Lista de textos
let formularios = [
    {nombre: "login", link:"http:"},
    {nombre: "login", link:"http:"},
    {nombre: "login", link:"http:"},
    {nombre: "login", link:"http:"},

];

// forEach



//se les llama metodos o funciones
// forEach
formularios.forEach( itemlista =>{

    let div_item = document.createElement("a");
        div_item.className = "Item";
        div_item.href = itemlista.link;
        div_item.innerText = itemlista.nombre;

        div_formularios.appendChild(div_item);
 });

 root.appendChild(div_formularios);

// Agrego al nodo root, el elemento div_formulario
    //root.appendChild(div_formularios); 