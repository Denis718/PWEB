function seleciona(){
    var curso = document.getElementById("curso")

    
    alert(`Deseja abrir a página do curso ${curso.options[curso.selectedIndex].value}`)

    return curso.options[curso.selectedIndex].value
}
