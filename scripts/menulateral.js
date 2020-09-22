var urlImagem = ''
var urlPasta = ''
var urlIndex = ''

$(document).ready(() => {
    urldinamica()
    sideBar()
})
const sideBar = () => {
    $("#sideBar").append(`
    <nav id="sidebar">
    <div class="container-menu-lateral">
        <h1><a href="${urlIndex}index.html" class="logo">WEB Points<span>Pontos Culturais Campinas</span></a></h1>
        <ul class="list-unstyled components mb-5">
            <li class="active">
                <a href="${urlIndex}index.html">Início</a>
            </li>
            <li>
                <a href="${urlPasta}/mapaPontosCulturais.html">Mapa</a>
            </li>
            <li>
                <a href="${urlPasta}/favoritos.html">Favoritos</a>
            </li>
            <li>
                <a href="${urlPasta}/faleConosco.html">Fale Conosco</a>
            </li>
            <li>
                <a href="${urlPasta}/autor.html">Informações</a>
            </li>
        </ul>

    </div>
    </nav>
    `);
}

const urldinamica = () => {
    let urlSite = window.location.href
    let aux = urlSite.split("/")
    if (aux[10] === 'views' || aux[11] === 'views' || aux[3] === 'views') {

        urlPasta = "../views"
        urlIndex = "../"

    } else {

        urlPasta = "./views"

    }
    console.log(urlIndex)
}