const key = 'credencial-de-api';
const url = `https://newsapi.org/v2/everything?q=Apple&from=2023-07-20&sortBy=popularity&apiKey=${key}`;
let mostrarNoticias = document.getElementById('noticias');



fetch(url).then((resp) => resp.json()).then(dato => {
    console.log(dato);
    let noticias = dato.articles;
    noticias.map(function(numero){
        let div = document.createElement('noticias');
        div.innerHTML += `<img style="max-width:800px" src="${numero.urlToImage}"><br>`;
        div.innerHTML += `<p>Author: ${numero.author}</p>`;
        div.innerHTML += `<h1>${numero.title}</h1>`;
        div.innerHTML += `<h2>${numero.description}</h2>`;
        div.innerHTML += `<h3><a href="${numero.url}" target="_blanck">Ver noticia completa</h3>`;
        mostrarNoticias.appendChild(div);
    });
});
