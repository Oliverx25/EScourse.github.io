let listElements = document.querySelectorAll('.list_button--click'); //elementos que tengan la clase list_button--click

//recorrer con un for each a todo lo contenido por list_button

listElements.forEach(listElement => {
    listElement.addEventListener('click',()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling; //toma al hermano adyacente de list element

        console.log(menu.scrollHeight);

        if(menu.clientHeight == 0){//si el alto del menu = 0, entonces
            height=menu.scrollHeight; //height cambiara al alto minimo para existir
        }

        menu.style.height = `${height}px`;
    })
});