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