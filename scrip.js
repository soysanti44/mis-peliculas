var peliculas=[
    "starwars",
    "dragonball super hero",
    "strangerthing",
    "manifest"
]
var imagenes=[
    "https://www.lavanguardia.com/files/article_main_microformat/uploads/2020/05/04/5fa922920d3b5.png",
    "https://phantom-marca.unidadeditorial.es/b357c8a454724e126c96b9c2d058d1a7/resize/1320/f/jpg/assets/multimedia/imagenes/2022/07/05/16569736469373.jpg",
    "https://media.revistagq.com/photos/6081557f583c9c33b81ecf11/4:3/w_1016,h_762,c_limit/stranger-things-4.jpeg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/manifest-temporada-4-netflix-1635248138.jpeg"
]
var i =0;
function siguiente(){
document.getElementById("imagen").src= imagenes[i];
document.getElementById("pelicula").innerHTML= peliculas[i];
i++;
if(i>3){
    i=0;
}
}
