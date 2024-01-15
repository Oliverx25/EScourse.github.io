const logForm = document.getElementById("log-form");
const logButton = document.getElementById("log-enviar");
const logErrorMsg = document.getElementById("log-error-msg");

logButton.addEventListener("click", (e) => {
    e.preventDefault();
    const usuario = logForm.usuario.value;
    const password = logForm.password.value;

    if(usuario == "gal" && password=="4567"){
        alert("Ingresaste de manera exitosa como administrador");
        window.location.href= 'menuadmin.html';
    }else if(usuario == "alum01" && password=="1234"){
        alert("Ingresaste de manera exitosa como alumno");
        window.location.href= 'menualumno.html';
    }else if(usuario == "prof01" && password=="7890"){
        alert("Ingresaste de manera exitosa como profesor");
        window.location.href= 'menuprof.html';
    }else{
        logErrorMsg.style.opacity=1;
    }
})

/*js para las cards de bienvenida*/
const choiceArray = document.querySelectorAll(".choice")

choiceArray.forEach((card) => {
    card.addEventListener("click", () => {
        choiceArray.forEach((element) => {
            element.classList.remove("expand", "unset")
            element.classList.add('small')
        })
        card.classList.remove("small")
        card.classList.add('expand')
    });
});
