'use stric'

window.addEventListener('load', () => {

    // api rest

    var div_user = document.querySelector("#usuarios");
    var janet = document.querySelector("#janet");
    var profesor = document.querySelector("#profesor");



    var usuarios = [];
    // se crea una funcions para poder optener los usuarios y luego
    // mandarlos por los then
    getusuarios()

    .then(data => data.json())
        .then(users => {
            varios_usuarios(users.data);
            return get_steven();
        })
        .then(data => {
            profesor.innerHTML = data;
            return getjanet();
        })
        .then(data => data.json())
        .then(user => {
            janetf(user.data);
        })
        .catch(error => {
            alert("Error en las peticiones");

        });


    // se crea la funcion para obtener usuarios
    function getusuarios() {
        return fetch("https://reqres.in/api/users")
    }
    // crear otra funcion para obtener un usuarios en especifico
    function getjanet() {
        return fetch("https://reqres.in/api/users/2")
    }


    function janetf(user) {


        let img = document.createElement("img");
        let nombre = document.createElement("h4");
        nombre.innerHTML = user.first_name + " " + user.last_name;
        img.src = user.avatar;
        img.width = "100";

        janet.appendChild(nombre);
        janet.appendChild(img);


        document.querySelector("#cargando2").style.display = 'none';


    }


    function varios_usuarios(usuarios) {

        usuarios.map((user, i) => {

            let nombre = document.createElement("h2");
            nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;

            div_user.appendChild(nombre);

            document.querySelector("#cargando").style.display = 'none';


        });

    }


    function get_steven() {
        var profesor = {
            nombre: "Victor",
            Apellido: "Robles",
            url: "www.google.com"
        };

        return new Promise((resolve, reject) => {
            var profesor_string = "";

            setTimeout(function() {

                profesor_string = JSON.stringify(profesor);

                if (typeof profesor_string != "string" || profesor_string == '') return reject("error");
                return resolve(profesor_string);


            }, 3000);




        })

    }


});