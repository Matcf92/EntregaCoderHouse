let modal = document.getElementById("modal");
let ini = document.getElementById("ini")
let reg = document.getElementById("reg")
let input1 = document.getElementsByName("input1")[0];
let input2 = document.getElementsByName("input2")[0];
let input3 = document.getElementsByName("input3")[0];
let count = 4
let arti = document.querySelector(".movies")

class Usuario {
    constructor(nombre, edad, email, password) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.password = password;
    }
}

cerrarModal = () => {
    modal.innerHTML = ""
    modal.classList.remove("modal")
}

bienvenida = () => {
    reg.style.display = "none"
    ini.style.display = "none"
    Swal.fire(
        'Hola!',
        'Te damos la Bienvenida',
        'success'
    )
    cerrarModal()
}

crearUsuario = () => {
    modal.classList.add("modal")
    modal.innerHTML = `<div class="modal-container"><div class="modal-header"><h2>Crear Usuario</h2></div><div class="modal-body"><div><label for="nombre">Nombre</label><input type="text" id="nombre" placeholder="Nombre"></div><div><label for="edad">Edad</label><input type="number" id="edad" placeholder="Edad"></div><div><label for="email">Email</label><input type="email" id="email" placeholder="Email"></div><div><label for="contraseña">Constraseña</label><input type="password" id="password" placeholder="Contraseña"></div></div><div class="modal-footer"><button type="button" onclick="crearUsuario2()">Crear</button><button type="button" onclick="cerrarModal()">Cerrar</button></div></div>`
}

crearUsuario2 = () => {
    let nombre = document.querySelector("#nombre").value
    let edad = document.querySelector("#edad").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let usuario = new Usuario(nombre, edad, email, password)
    localStorage.setItem('usuario', JSON.stringify(usuario))
    Swal.fire(
        'Excelente!',
        'Usuario creado con éxito',
        'success'
    )
    cerrarModal()
}

iniciarSesion = () => {
    modal.classList.add("modal")
    modal.innerHTML = `<div class="modal-container"><div class="modal-header"><h2>Iniciar Sesión</h2></div><div class="modal-body"><div><label for="email">Email</label><input type="email" id="email" placeholder="Email"></div><div><label for="contraseña">Contraseña</label><input type="password" id="password" placeholder="Contraseña"></div></div><div class="modal-footer"><button type="button" onclick="iniciarSesion2()">Iniciar</button><button type="button" onclick="cerrarModal()">Cerrar</button></div></div>`
}

iniciarSesion2 = () => {
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let usuario = JSON.parse(localStorage.getItem('usuario'))
    if (usuario.email === email && usuario.password === password) {
        bienvenida()
    } else {
        Swal.fire(
            'Error',
            'Email o contraseña incorrecto',
            'error')
    }
    cerrarModal()

}

const boton1 = document.getElementById("btn1");
boton1.addEventListener("click", () => {
    Swal.fire(
        'Imprimiendo entrada...',
        'Que disfrutes la pelicula!',
        'success'
    )
});

const boton2 = document.getElementById("btn2");
boton2.addEventListener("click", () => {
    Swal.fire(
        'Imprimiendo entrada...',
        'Que disfrutes la pelicula!',
        'success'
    )
});

const boton3 = document.getElementById("btn3");
boton3.addEventListener("click", () => {
    Swal.fire(
        'Imprimiendo entrada...',
        'Que disfrutes la pelicula!',
        'success'
    )
});

const boton4 = document.getElementById("btn4");
boton4.addEventListener("click", () => {
    Swal.fire(
        'Imprimiendo entrada...',
        'Que disfrutes la pelicula!',
        'success'
    )
});

const boton5 = document.getElementById("btn5");
boton5.addEventListener("click", () => {
    Swal.fire(
        'Imprimiendo entrada...',
        'Que disfrutes la pelicula!',
        'success'
    )
});

const boton6 = document.getElementById("btn6");
boton6.addEventListener("click", () => {
    Swal.fire(
        'Imprimiendo entrada...',
        'Que disfrutes la pelicula!',
        'success'
    )
});


function hacerPedido() {
    let comida = input1.value
    let bebida = input2.value
    let cantidad = input3.value
    const div = document.createElement("div")
    div.className = "pelis peli" + count
    div.innerHTML = `<div><h4>${comida}</h4><p>${bebida}</p><p>${cantidad}</p>`
    arti.appendChild(div)
    count++
}

let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if (pagina < 10) {
        pagina += 1;
        cargarPeliculas();
    }
});

btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina -= 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=007deb9b3e90a81dc4be5eb21d7cfc6b&language=es-MX&page=${pagina}`);

        console.log(respuesta);

        // Si la respuesta es correcta
        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let peliculas = '';
            datos.results.forEach(pelicula => {
                peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
            });

            document.getElementById('contenedor').innerHTML = peliculas;

        } else {
            console.log('Hubo un error y no sabemos que paso');
        }

    } catch (error) {
        console.log(error);
    }

}

