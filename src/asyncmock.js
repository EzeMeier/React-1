const misProductos = [
    { id: "1", nombre: "Remera Manga Larga", precio: 6000, stock: 10, img: "../img/mangaLarga.jfif" ,idCat:"1" },
    { id: "2", nombre: "Pantalon Corto", precio: 5000, stock: 50, img: "../img/pantaCorto.jfif",idCat:"2" },
    { id: "3", nombre: "Soquetes", precio: 1000, stock: 100,  img: "../img/soquetes.jfif",idCat:"3" },
    { id: "4", nombre: "Zapatilla Adidas", precio: 30000, stock: 150, img: "../img/zapaAdidas.jfif" ,idCat:"4" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout (() => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })

}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout (() =>{
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}