// URL da API que será consumida
var URL_API = 'https://reqres.in/api/users?';
// Elemento para inserir as postagens
var posts = document.getElementById('posts');
// Objeto que permite fazer requisições HTTP
var oReq = new XMLHttpRequest();
// Configurando a requisição
oReq.open("GET", URL_API, true);
//oReq.overrideMimeType("text/plain; charset=x-user-defined");
//oReq.setRequestHeader("Authorization", 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTUwNzg3MDcsInVzZXIiOjMsImlhdCI6MTU1NDk5MjMwN30.u364c2Fn-y87YVHoF5tZtBktmTUlmoYRDUNw-k_UGCA');
// Configurando ação quando a requisição for bem sucedida
oReq.onload = function (e) {
    var arraybuffer = oReq.responseText;
    var postsArray = JSON.parse(arraybuffer);
    console.log(postsArray);
    postsArray.forEach(function (e) {
        var elem = document.createElement('div');
        var img = document.createElement('img');
        img.src = e.thumbnailUrl;
        var text = document.createElement('span');
        text.innerHTML = e.title;
        elem.appendChild(img);
        elem.appendChild(text);
        posts.appendChild(elem);
    });
};
// Envia a requisição
oReq.send();
