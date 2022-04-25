function enviar() {
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var telefone = document.getElementById("telefone").value
    var msg = document.getElementById("msg").value
    if (nome, email, telefone, msg) {
        var Mensagem = "Parábens seu formulario foi enviado com sucesso !!\n\nSeu Nome: " + nome + "\nSeu Email: " + email + "\nSeu Telefone: " + telefone + "\nMensagem: " + msg
        document.getElementById("nome").value = ""
        document.getElementById("email").value = ""
        document.getElementById("telefone").value = ""
        document.getElementById("msg").value = ""
        alert(Mensagem)
    } else {
        document.getElementById("nome").focus()
        alert("Para prosseguir preencha todos os campos")

    }
}

function comprar(){
    alert("Em breve.....")
}