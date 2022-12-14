export class Libro {
    constructor(private titulo: String, private autor: String, private isbn: String, private fechaPrestamo: Date){
    }

    getTitulo(): String{
        return this.titulo;
    }

    setTitulo(value: String){
        this.titulo = value;
    }

    getAutor(): String{
        return this.autor;
    }

    setAutor(value: String){
        this.autor = value;
    }

    getIsbn(): String{
        return this.isbn;
    }

    setIsbn(value: String){
        this.isbn = value;
    }

    getFechaPrestamo(): Date{
        return this.fechaPrestamo;
    }

    setFechaPrestamo(value: Date){
        this.fechaPrestamo = value;
    }

}
