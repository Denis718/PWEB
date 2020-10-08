var opcao = prompt(
    "Escolha uma opção: \n\n[1] Pedra\n\n[2] Papel\n\n[3] Tesoura"
  );
  
  var escolhaUsuario = "";
  
  switch (opcao) {
    case "1":
      escolhaUsuario = "PEDRA";
      break;
    case "2":
      escolhaUsuario = "PAPEL";
      break;
    default:
      escolhaUsuario = "TESOURA";
      break;
  }
  
  var computador = Math.random();
  
  var escolhaComputador = "PAPEL";
  
  if (computador < 0.33) {
    escolhaComputador = "PEDRA";
  } else if (computador < 0.66) {
    escolhaComputador = "TESOURA";
  }
  
  alert(
    "Escolha computador: " +
      escolhaComputador +
      "\nSua escolha: " +
      escolhaUsuario
  );
  
  var ganhador = "";
  
  if (escolhaUsuario === escolhaComputador) {
    ganhador = "EMPATE";
  } else if (escolhaUsuario === "PAPEL") {
    ganhador = "USUARIO";
    if (escolhaComputador === "TESOURA") {
      ganhador = "COMPUTADOR";
    }
  } else if (escolhaUsuario === "PEDRA") {
    ganhador = "USUARIO";
    if (escolhaComputador === "PAPEL") {
      ganhador = "COMPUTADOR";
    }
  } else {
    ganhador = "USUARIO";
    if (escolhaComputador === "PEDRA") {
      ganhador = "COMPUTADOR";
    }
  }
  
  alert("Resultado: " + ganhador);