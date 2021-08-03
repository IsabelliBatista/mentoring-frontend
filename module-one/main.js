function menuClicado(){
    var menu = document.querySelector('.menu-mobile').classList.add('visible');
}
function menuClicadoParaSair(){
    var menu = document.querySelector('.menu-mobile').classList.remove('visible');
}
function toogleMenu(){
    if(document.querySelector('.menu-mobile').classList.contains('visible') == true){
        menuClicadoParaSair()
    }else{
        menuClicado()
    }
}