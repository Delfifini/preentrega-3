let set_id = 1

class Receta {
    constructor(nombre, contenido, categoria){
        let tags = ['dulce', 'salado']
        this.nombre = nombre
        this.contenido = contenido
        this.id = set_id++
        this.categoria = tags[categoria]
    }
}

let recetas = [
    new Receta('Budin', 'ingredientes y procedimiento', 0),
    new Receta('Cookies', 'ingredientes y procedimiento', 0),
    new Receta('Pizza','ingredientes y procedimiento', 1)
]