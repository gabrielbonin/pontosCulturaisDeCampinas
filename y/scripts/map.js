var markers = [{
        lat: -22.90882,
        lng: -47.06681,
        map: map,
        title: 'Estação Cultura',
        imagem: '<img src="../styles/assets/estacaocultura.jpeg">',
        description: 'Inauguração: 1872  -Importante espaço Multicultural de evento   -Horário de Funcionamento: 08 às 22h todos os dias. '
    },
    {
        lat: -22.90594,
        lng: -47.06033,
        map: map,
        title: 'Catedral',
        imagem: '<img src="../styles/assets/catedral.jpeg">',
        description: '-Inauguração: 1883 -Mais de 200 anos de existência-                           --Aberta todos os dias das 7h às 19h'
    },
    {
        lat: -22.87241,
        lng: -47.04828,
        map: map,
        title: "Parque Portugal",
        imagem: '<img src="../styles/assets/parqportugal.png">',
        description: '-Um dos mais queridos e importantes locais de lazer de Campinas                                                      -Conta com ginásios e quadras poliesportivas e lugares para caminhadas                                          -Horário de Funcionamento: 5h às 22h'

    },
    {
        lat: -22.90273,
        lng: -47.05938,
        map: map,
        title: 'Joquey Club',
        imagem: '<img src="../styles/assets/jyclub.jpeg">',
        description: 'Considerado um dos monumentos mais belos da cidade de Campinas                                             Atualmente funciona como casa noturna com programação de músicas eletrônicas                    Horários de Funcionamento: sex e sáb: 23h as 5h'
    },
    {
        lat: -22.90377,
        lng: -47.06337,
        map: map,
        title: 'Mercado Municipal de Campinas',
        imagem: '<img src="../styles/assets/mercadao.jpeg">',
        description: 'Inauguração: 1908                                                      Centro de distribuição de alimentos, conta com 193 boxes e 45 bancas externas.                            Horário de Funcionamento: Seg a Sáb das 7h às 18h'
    },
    {
        lat: -22.88336,
        lng: -47.08014,
        map: map,
        title: 'EsPCEx',
        imagem: '<img src="../styles/assets/escoladecadetes.jpeg">',
        description: 'Inauguração: 1967                                                       Atualmente tem a missão de formar novos cadetes para o exercito Brasileiro.                          Visitação: Seg a Sex: 07h30 às 17h'
    },
    {
        lat: -22.89006,
        lng: -47.0769,
        map: map,
        title: 'Torre do Castelo',
        imagem: '<img src="../styles/assets/castelo.png">',
        description: 'Inauguração: 1938                                                      Foi desenvolvido para armazenar água e abastecer regiões próximas.                                    Horário de Funcionamento: Seg a Sex: 10h às 12h e 13h ás 17h - Sáb e Dom: 10h ás 12h e 17h ás 21h'
    },
    {
        lat: -22.90682,
        lng: -47.05966,
        map: map,
        title: 'Museu da Imagem e do Som de Campinas',
        imagem: '<img src="../styles/assets/museuimagem.jpeg">',
        description: 'Inauguração: 1981                                                       Abriga diversas fotos, imagens e artigos culturais da cidade de Campinas.                           Horário de Funcionamento: Seg a Sex: 10h às 18h e Sáb: 10h às 15h'
    },
    {
        lat: -22.90036,
        lng: -46.82578,
        map: map,
        title: 'Observatório Municipal de Campinas Jean Nicolini',
        imagem: '<img src="../styles/assets/observ.jpeg">',
        description: 'Inauguração: 1977                                                      Destaca-se como um dos melhores observadores do Brasil                                              Horário de Funcionamento: Domingo 17h às 21h'
    },
    {
        lat: -22.82758,
        lng: -47.10504,
        map: map,
        title: 'A.R.I.E. Mata de Santa Genebra - Área de Relevante Interesse Ecológico',
        imagem: '<img src="../styles/assets/matastagenebra.jpeg">',
        description: 'Segunda maior mata nativa do Brasil em ambiente Urbano                                                        Abrange 251,77 hectares                                          Horário de Funcionamento: Domingo 9h às 16h'
    }
];

window.onload = function() {
    LoadMap();
    alert("Para exibir informação do local: Clique 1x no marcador vermelho desejado")
    alert("Para Favoritar um ponto cultural, Clique 2x no marcador desejado")
}



function LoadMap() {
    var mapOptions = {
        center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const geocoder = new google.maps.Geocoder();
    document.getElementById("btnBusca").addEventListener("click", () => {
        geocodeAddress(geocoder, map);
    });

    var infoWindow = new google.maps.InfoWindow();
    const image = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    const favImg = "http://maps.google.com/mapfiles/kml/pal4/icon47.png";


    var fav = JSON.parse(localStorage.getItem('favoritos'));
    markers = markers.map(x => {
        x.icon = image

        return x;
    })
    console.log(markers)
    markers.map(x => {
        console.log(x.imagem)
        if (fav) {
            if (fav.find(y => y.img === x.imagem)) {
                console.log(x)
                x.icon = favImg
            }
            // fav.find(y => { console.log("obj" + y), console.log("fav imagem" + y.img), console.log("x img" + x.imagem) })
        }
        return x;
    })
    for (var i = 0; i < markers.length; i++) {
        var data = markers[i];
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.title,
            icon: data.icon
        });

        (function(marker, data) {
            google.maps.event.addListener(marker, "click", function(e) {
                infoWindow.setContent("<div style = 'max-width:300px;min-height:300px; color: black;'>" + data.title + data.imagem + data.description + "</div>");
                infoWindow.open(map, marker);
            });
        })(marker, data);

        (function(marker, data) {
            google.maps.event.addListener(marker, "dblclick", function(e) {
                var img = data.imagem
                var titulo = data.title
                var favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');

                favoritos.push({
                    img: data.imagem,
                    titulo: data.title

                });
                localStorage.setItem("favoritos", JSON.stringify(favoritos));


                marker.setIcon(favImg);

            });

        })(marker, data);

    }


    function geocodeAddress(geocoder, resultsMap) {
        const address = document.getElementById("buscarend").value;
        geocoder.geocode({ address: address }, (results, status) => {
            if (status === "OK") {
                resultsMap.zoom = 14,
                    resultsMap.setCenter(results[0].geometry.location);
            } else {
                alert("Local não encontrado: " + status);
            }
        });
    }
}