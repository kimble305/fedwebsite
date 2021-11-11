// JavaScript Document
var coverimage = document.querySelectorAll('.vindikleuk li img');
// console.log(coverimage);
// coverimage.addEventListener('click',play);
for (var i = 0; i < coverimage.length; i++){
    console.log(coverimage[i]);
    coverimage[i].addEventListener('click',play);
}

function play(){
    var audio = new Audio('./images/sunshine.mp3.mp3');
    audio.play();
}
