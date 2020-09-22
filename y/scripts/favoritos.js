window.onload = function() {
    getFavoritos();
}


const getFavoritos = () => {
    var fav = JSON.parse(localStorage.getItem('favoritos'));
    var favLen = fav.length;
    console.log(favLen)

    for (var i = 0; i < favLen; i++) {
        $(".container-pai-favoritos").append(`<div class="container-favoritos"><div class="container-titulo-fav">${fav[i].titulo}</div><div class="container-img-fav">${fav[i].img}</div></div>`)
            // $(".container-busca").append(`<div class="container-favoritos">${fav[i].img}</div>`)
    }
    $('.container-favoritos').on('dblclick', (e) => {
        $(e.currentTarget).remove();

        console.log(e.currentTarget)
    })

}


const cleanFav = () => {
    localStorage.clear();
    $('.container-favoritos').remove();
}