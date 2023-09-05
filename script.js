const form = document.querySelector("#container-main");
const element = document.querySelector("#profile");
const error = document.querySelector(".error");
const userImage = document.querySelector(".user-img")
const userName = document.querySelector(".user-name")
const bioUser = document.querySelector(".bio-user")
const projectsUser = document.querySelector(".projects")

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var search_User = document.querySelector("#user").value;
  //excluir os espaços do nome de usuario(1ºSepara a string e coloca em um array, 2° junta todos os elementos do array e transforma em string)
  var original_Name = search_User.split(" ").join("");

  fetch(`https://api.github.com/users/${original_Name}`)
    //transforma a api em json
    .then((response) => {
      //tratamento de erros
      if (!response.ok) {
        //Para a execução e lança um novo error
        throw new Error(
          "Erro ao executar requisição, error: " + response.status
        );
      } //ver o número do error
      else {
        //add class profile
        element.classList.add("profile");
        return response.json();
      }
    })
    .then((data) => {
      // Popula dados e constrói tela
      error.innerHTML = "";
      userImage.innerHTML = `<a target="_blank"  href="https://www.github.com/${original_Name}"> <img src= "${data.avatar_url}"/></a>`;
      userName.innerHTML = `<h4>${data.name}</h4> <span style="color: #fff;" >${data.login}</span>`;
      bioUser.innerHTML = `<p>${data.bio}</p>`;
      projectsUser.innerHTML = `
      <a target="_blank" href="https://github.com/${original_Name}?tab=repositories"> ${data.public_repos}</br>Repositórios</a> 
      <a target="_blank" href="https://github.com/${original_Name}?tab=followers"> ${data.followers}</br>Seguidores</a> 
      <a target="_blank" href="https://github.com/${original_Name}?tab=following"> ${data.following}</br>Seguindo</a> 
      `;
    })
    //Pegar o erro
    .catch((err) => {
      error.innerHTML = "<em>Usuário não existe!</em>";
      userImage.innerHTML = ''
      userName.innerHTML = ''
      bioUser.innerHTML = ''
      projectsUser.innerHTML = ''
      element.classList.remove('profile')
      console.error(err.message);
    });
});
