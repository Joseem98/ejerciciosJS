let eliminarNodo = document.querySelectorAll(".fn-remove-me");

eliminarNodo.forEach(element => {
    element.parentNode.removeChild(element);
});