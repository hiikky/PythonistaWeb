function cargarEjercicio(tipo) {
    var main = document.getElementById("menu");

    var divs = main.getElementsByTagName("div");

    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        div.classList.add("d-none"); 
    }


    switch(tipo) {
        case 'variable':
            document.getElementById("container-variable").classList.remove("d-none");
            break;
        case 'if':
            document.getElementById("container-if").classList.remove("d-none");            
            break;
        case 'bucles':
            document.getElementById("container-bucles").classList.remove("d-none");
            break;
        case 'funciones':
            document.getElementById("container-funciones").classList.remove("d-none");
            break;
    }

}
