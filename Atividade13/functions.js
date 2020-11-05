function seleciona(){
    var curso = document.getElementById("curso")
    
    
    var r = confirm(`Deseja abrir a página do curso ${curso.options[curso.selectedIndex].value}`)
    if (r == true){
        return curso.options[curso.selectedIndex].value
    }
}
