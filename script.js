/* Arreglos */
/* Son una lista de datos */
/* Tienen un largo dinámico */
/* Se recorren con un for o con cualquier ciclo */
/* Se definen entre corchetes y cada elemento va separado por coma */
/* Tienen una posición y un índice */
/* Pueden tener un subelemento o mas */
/* Podemos guardar funciones, objetos o distintas estructuras de datos */
/* Atributo largo = lenght (tienen atributos) */
/* Métodos (funciones) = representan acciones o procesos */

/* Métodos de arreglos */
/* Push: agrega un elemento a la última posición del arreglo */
/* Unshift: agrega un elemento a la primera posición del arreglo */
/* Shift: elminia un elemento a la primera posición del arreglo */
/* Pop: elminia un elemento a la última posición del arreglo */
/* Splice: elimina un elemento o varios desde un elemento indicado */

/* Endpoint: https://pokeapi.co/api/v2/pokemon */

function consumoDeAPI(){
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon",
        success: function (response) {
            console.log(response);
        }
    });
}

consumoDeAPI();
