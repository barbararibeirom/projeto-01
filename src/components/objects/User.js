const User = () => {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


    return(
        console.log('Nome: ', nome, "E-mail: ", email, "Senha: ", senha)
    );
  }

export default User;