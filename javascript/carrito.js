class Producto {
    constructor(id, modelo, img, descCorta, descLarga, alt, precio, stock) {
        this.id = id;
        this.modelo = modelo;
        this.img = img;
        this.descCorta = descCorta;
        this.descLarga = descLarga;
        this.alt = alt;
        this.precio = precio;
        this.cantidad = 1;
        this.stock = stock;
    }
}

class ControladorDeProductos {
    constructor() {
        this.listaDeProductos = []
        this.contenedorProductos = document.getElementById("contenedorProductos")
    }

    uploadDeProductos() {
        this.listaDeProductos = [
            new Producto(1, "Kamado B-10", "./img/productos/k01_kamado_blanco.webp", "Modelo liviano, de fácil transporte", "Este kamado se caracteriza por su gran versatilidad al momento de crear obras de arte en la cocina", "Kamado versión blanco perlado. Uno de los emblemas de la marca ahora a tu disposición en nuestra tienda online. No te lo podés perder!", 458800, 25),
            new Producto(2, "Kamado SE-002", "./img/productos/k02_kamado_chico.webp", "Importado desde Alemania", "Diseñado exclusivamente para aquellos que necesitan altura en sus cocinas", "Kamado especial. Diseñado exclusivamente para aquellos que necesitan altura en sus cocinas. Este práctico Kamado cuenta con patas levadizas que lo hacen único al momento de brindar experiencias en la cocina. Miralo!", 564900, 12),
            new Producto(3, "Kamado JT-100", "./img/productos/k03_kamado_lateral.webp", "Ideal para uso exterior", "Esta versión con alas nos permite disfrutar de las mejores comidas de forma cómoda", "Este Kamado sí que sabe cómo resultar práctico! Su versión con alas nos permite disfrutar de las mejores comidas y, al mismo tiempo, tener el espacio suficiente para poder cocinar con plena comodidad gracias a sus dos alas extensibles de más de 30 cm cada una", 265000, 8),
            new Producto(4, "Kamado LUXURY", "./img/productos/k04_kamado_luxury.webp", "Asados de lujo en familia", "Pequeño, práctico y eficiente nos deslumbra con un diseño inspirado en obras de arte moderno", "¿Quién dijo que el arte no es parte de la cocina? Mirá este Kamado versión Luxury y despejá todas tus dudas. Pequeño, práctico y eficiente", 758000, 3),
            new Producto(5, "Kamado RS-250", "./img/productos/k05_kamado_patas.webp", "Ideal para eventos exteriores", "Su gran altura y alas hacen de él un aliado perfecto a la hora de cocinar", "Esta es una versión moderna de nuestro Kamado versión himalaya. Su gran altura y alas hacen de él un aliado perfecto a la hora de cocinar", 278500, 20),
            new Producto(6, "Kamado RS-300", "./img/productos/k06_kamado_rojo.webp", "Fiel compañero de aventuras", "Nuevo Kamado en tono borravino, de los más exclusivos de la tienda", "Ahora sí. Lo pedían hace mucho tiempo. ¿Cuándo llegan los de color rojo? Aquí están! Nuevo Kamado en tono borravino, de los más exclusivos de la tienda. Tenelo ya!", 312700, 17),
            new Producto(7, "Paellera NOMADE", "./img/productos/p1_paellera_patas.webp", "Paellas sabrosas y elegantes", "Paellera con patas construída 100% con metal de primera calidad que evita la oxidación y el traspaso de aromas desagradables", "Paellera con patas construída 100% con metal de primera calidad que evita la oxidación y el traspaso de aromas desagradables a tus comidas. Esa paellera que siempre quisite, aquí está!", 25750, 24),
            new Producto(8, "Parrilla F-35", "./img/productos/p2_parrilla_mesa_carbon.webp", "Desmontable y práctica", "Especial para llevar a la mesa y mantener todos tus asados a la mejor temperatura por mucho más tiempo", "Parrilla para mesada. Especial para llevar a la mesa y mantener todos tus asados a la mejor temperatura por mucho más tiempo. No esperes más, una solución muy simple a un problema muy cotidiano", 23500, 25),
            new Producto(9, "Set Asado KW-1", "./img/productos/p3_parrilla_set_asador.webp", "Para asadores expertos", "Set Asador luxman especialmente diseñado para los amantes de las parrilladas outdoors", "Set Asador luxman especialmente diseñado para los amantes de las parrilladas outdoors. Construídos 100% en acero quirúrjico, no se oxidan y resisten cualquier nivel de temperatura", 18900, 8),
            new Producto(10, "Disco Parrillero JM-1", "./img/productos/p4_disco_arado.webp", "Metal de primera calidad", "Este fabuloso disco de arado en hierro fundición nos permite cocinar directamente sobre la llama", "Disco de arado versión normandie. Este fabuloso disco de arado en hierro fundición nos permite cocinar directamente sobre la llama cualquier tipo de comida. Ya no tendrás que preocuparte por salpicaduras ni otros inconvenientes con aceite caliente, ya que su altura permite una mejor distribución de los alimentos dentro", 46200, 10),
            new Producto(11, "Disco Camping J-5", "./img/productos/p5_disco_arado_camping.webp", "Diseñado para fuego extremo", "Al igual que la versión normandie, este disco tiene todas las cualidades como para desempeñarse de forma excelente en cualquier tipo de ambiente", "Disco de arado para camping. Al igual que la versión normandie, este disco tiene todas las cualidades como para desempeñarse de forma excelente en cualquier tipo de ambiente, especialmente agrestes", 25800, 17),
            new Producto(12, "Fogonero L-35", "./img/productos/p6_fogonero_chico.webp", "Apto para exterior e interior", "Fogonero chico especialmente diseñado para parrillas de 1 a 1.5 metros de ancho. Realizado íntegramente en hierro redondo de 0.18 pulgadas", "Fogonero chico especialmente diseñado para parrillas de 1 a 1.5 metros de ancho. Realizado íntegramente en hierro redondo de 0.18 pulgadas con protección antióxido", 56000, 13),
            new Producto(13, "Fogonero L-55", "./img/productos/p7_fogonero_tacho.webp", "Ideal para leña o carbón", "Fogonero de vanguardia. Un diseño práctico y elegante para quienes elijen un asador de look moderno", "Fogonero de vanguardia. Un diseño práctico y elegante para quienes elijen un asador de look moderno", 75400, 22),
            new Producto(14, "Set Asado SK-21", "./img/productos/set1_asador_con_tabla.webp", "Kit completo cocina Gourmet", "Set asador con tabla eucalipto en medidas 20 cm x 50 cm", "Set asador con tabla eucalipto en medidas 20 cm x 50 cm. Tiene todo lo que necesitás para poder desempeñarte de forma correcta en la parrilla. Evitá quemaduras y sorprendé a tus comensales con este increíble kit", 21500, 29),
            new Producto(15, "Set Asado SK-25", "./img/productos/set2_pala_asado.webp", "Modelo europeo PREMIUM", "Pala para cenizas enlozada y apta para grandes temperaturas. Podés adquirirla sola o bien en conjunto con el resto de los insumos", "Pala para cenizas enlozada y apta para grandes temperaturas. Podés adquirirla sola o bien en conjunto con el resto de los insumos. Consultá al 54911 1234 5678 por más estilos y medidas", 7300, 15),
            new Producto(16, "Pinzas HG-23", "./img/productos/set3_pinzas_limpieza.webp", "De metal a prueba de alta temperatura", "Pinzas para limpieza de parrilla y fogoneros. Este set exclusivo de The Food Emporium te garantiza contar con todos los elementos que necesitás a la hora de mantener tu parrilla en óptimas condiciones", "Pinzas para limpieza de parrilla y fogoneros. Este set exclusivo de The Food Emporium te garantiza contar con todos los elementos que necesitás a la hora de mantener tu parrilla en óptimas condiciones", 3800, 15),
            new Producto(17, "Pala Cenizas M-1", "./img/productos/set4_pala_cenizas.webp", "Agarre fuerte y apta para colgar", "Con esta pala especialmente diseñada para la limpieza de parrillas o fogoneros internos ya no tenés que preocuparte por las cenizas", "Con esta pala especialmente diseñada para la limpieza de parrillas o fogoneros internos ya no tenés que preocuparte por las cenizas!", 8500, 33),
            new Producto(18, "Guantes Térmicos N-2", "./img/productos/set5_guantes_asador.webp", "En cuero alta temperatura", "Guantes para asador. Especialmente diseñados para soportar temperaturas extremas, agua y condiciones poco favorables", "Guantes para asador. Especialmente diseñados para soportar temperaturas extremas, agua y condiciones poco favorables. Varios colores para elegir!", 15500, 56)
        ]
    }

    displayProductosDOM() {
        this.listaDeProductos.forEach(producto => {
            this.contenedorProductos.innerHTML +=
                `<div class="d-flex card cardCustom mb-3">
                <h3 class="card-header text-center">${producto.modelo}</h3>
                <div class="d-flex contenerImagen mt-2">
                    <img class="m-auto imagenProducto" src="${producto.img}" alt="${producto.alt}">
                </div>
                <div class="card-body text-center py-1 mt-3">
                    <h5 class="card-title">${producto.descCorta}</h5>
                </div>
                <div class="card-body text-center pt-1">
                    <p class="card-text">${producto.descLarga}</p>
                </div>
                <div class="card-body text-center pt-1">
                    <p class="card-text">Precio: $${producto.precio}</p>
                </div>
                <div class="d-flex m-auto my-3">
                    <button type="button" id="${producto.id}" class="btn btn-primary hover">Añadir al Carrito</button>
                </div>
            </div>`
        })
    }

    clickAnadir(controladorCarrito) {
        this.listaDeProductos.forEach(producto => {
            const btnAP = document.getElementById(`${producto.id}`)
            btnAP.addEventListener("click", () => {

                controladorCarrito.pushear(producto) //verificar si existe antes el producto
                controladorCarrito.setStorage()
                controladorCarrito.displayCarritoDOM(contenedorCarrito) //solo añadir un producto al DOM

                Toastify({
                    text: `${producto.modelo} Añadido!`,
                    duration: 1500
                }).showToast();
            })
        })
    }
}

class ControladorDelCarrito {
    constructor() {
        this.listaDelCarrito = []
        this.contenedorCarrito = document.getElementById("contenedorCarrito")
        this.totalCompra = document.getElementById("totalCompra")
    }

    pushear(producto) {
        this.listaDelCarrito.push(producto)
    }

    setStorage() {
        let listaDelCarritoJSON = JSON.stringify(this.listaDelCarrito)
        localStorage.setItem("listaDelCarrito", listaDelCarritoJSON)
    }

    checkStorage() {
        this.listaDelCarrito = JSON.parse(localStorage.getItem("listaDelCarrito")) || []
        this.listaDelCarrito.length > 0 && this.displayCarritoDOM()
    }

    resetStorage() {
        localStorage.removeItem("listaDelCarrito")
    }

    displayCarritoDOM() {
        this.resetDOM(contenedorCarrito)
        this.listaDelCarrito.forEach(producto => {
            this.contenedorCarrito.innerHTML +=
                `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.alt}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.modelo}</h5>
                            <p class="card-text">${producto.descCorta}</p>
                            <p class="card-text">Precio: $${producto.precio}</p>
                            <p class="card-text">Cantidad: ${producto.cantidad}</p>
                        </div>
                    </div>
                </div>
            </div>`
        })

        this.displayTotalDOM()
    }

    resetDOM() {
        this.contenedorCarrito.innerHTML = ""
    }

    resetListaDelCarrito() {
        this.listaDelCarrito = []
    }

    finalizarCompra() {
        finalizarCompra.addEventListener("click", () => {
            if(this.listaDelCarrito.length != 0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Compra exitosa!',
                    showConfirmButton: false,
                    timer: 1700
                })
            
                controladorCarrito.resetDOM()
                controladorCarrito.resetStorage()
                controladorCarrito.resetListaDelCarrito()
                controladorCarrito.displayTotalDOM()
            }
        })
    }

    calcularTotal() {
        let totalCompra = 0
        this.listaDelCarrito.forEach(producto => {
            totalCompra += producto.precio * producto.cantidad
        })

        return totalCompra;
    }

    displayTotalDOM() {
        this.totalCompra.innerHTML = "$"+this.calcularTotal()
    }
}

const controladorProductos = new ControladorDeProductos();
controladorProductos.uploadDeProductos();

const controladorCarrito = new ControladorDelCarrito();
controladorCarrito.checkStorage();
controladorCarrito.finalizarCompra();

// DOM
controladorProductos.displayProductosDOM();

// Eventos
controladorProductos.clickAnadir(controladorCarrito);