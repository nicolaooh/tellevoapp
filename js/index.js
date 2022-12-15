window.addEventListener('load', () => {

    const correo = "nicolascabellopineda@gmail.com";
    const pass = "123hola";
    
    btnInicio.addEventListener("click", () =>{
        const email     = document.getElementById("email").value;
        const password  = document.getElementById("password").value;
        const alerta = document.getElementById("alerta");

        if (email == correo && password == pass) {

            

        } else {

            alerta.innerHTML = "";

            alerta.innerHTML =  
            `
            
            <div class="alert alert-danger" role="alert">
                Correo y/o contraseña incorrectos
            </div>
            
            `;

        }

    });

});

