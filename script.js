const form = document.querySelector("#container-main");
const element = document.querySelector("#profile");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //add class profile
  element.classList.add("profile");

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
        return response.json();
      }
    })
    .then((data) => {
      document.querySelector(
        ".user-img"
      ).innerHTML = `<a target="_blank"  href="https://www.github.com/${original_Name}"> <img src= "${data.avatar_url}"/></a>`;

      document.querySelector(".user-name").innerHTML = `<h4>${data.name}</h4>
       <span>${data.login}</span>`;

      document.querySelector(".bio-user").innerHTML = `<p>${data.bio}</p>`;
      document.querySelector(
        ".projects"
      ).innerHTML = `<a href="#"> ${data.public_repos}</br>Repositórios</a> <a href="#"> ${data.followers}</br>Seguidores</a> <a href="#"> ${data.following}</br>Seguindo</a> `;

      console.log(data);
    })
    //Pegar o erro
    .catch((error) => {
      console.error(error.message);
    });
});

/*
//função assincrona
async function fetchUsers(url) {
  //await espera a promessa e retorna pra const
  //obter a api
  const response = await fetch(url);
  //transforma a api em json
  const jsonBody = await response.json();
  return jsonBody; //retorna todas as infomações
}
var usuario = "lomaferreira";
const requisicao = fetchUsers(`https://api.github.com/users/${usuario}`);
//acompanha a espera da função para responder
requisicao.then((response) => {
  console.log(response);



});



fetch("https://api.github.com/users/kamranahmedse")
  .then((response) => response.json())
  .then((jsonBody) => {
    //document.querySelector("#container-main").innerHTML = jsonBody.login;
    console.log(jsonBody);
  });

/*
  const data = {
  id: "lomaferreira",
  nome: "Paloma Santos",
};
fetch("https://ranekapi.origamid.dev/json/api/produto", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
*/
