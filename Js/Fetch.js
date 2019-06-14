'use stric'

window.addEventListener('load', () => {

    // api rest

    var div_user = document.querySelector("#usuarios");
    var janet = document.querySelector("#janet");



    var usuarios = [];
    // se crea una funcions para poder optener los usuarios y luego
    // mandarlos por los then
    getusuarios()
        .then(data => data.json())
        .then(users => {
            varios_usuarios(users.data);

            return getjanet();

        })
        .then(data => data.json())
        .then(user => {


            janetf(user.data);


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



});