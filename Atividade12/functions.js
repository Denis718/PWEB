function validar(){
    var nome = document.getElementById('nome')
    var email = document.getElementById('email')
    var pesquisa = document.getElementsByName('pesquisa')
    if (nome.value.length < 10){
        alert("Preencha o seu nome completo")
        nome.focus();
        return false;
    }
    else if (email.value.indexOf("@") < 0) {
        alert("e-mail inválido!");
        email.focus();
        return false;
    } //document.nomeform.elements[]
    else if (document.form1.comentario.value.length < 20){
        alert("Comentário mínimo 20 caracteres!")
        return false;
    }
    else if (pesquisa[0].checked == true){
        alert("Volte sempre à esta página!")
    }
    else if (pesquisa[1].checked == true){
        alert("Que bom que você voltou a visitar esta página!")
    }
    else if (pesquisa[0].checked == false && pesquisa[1].checked == false){
        alert("Preencha a pesquisa");
        return false;
    }
    return true;
}
