/*Variable globales*/
var nickName    = document.getElementById('nickName');
var useNickName = localStorage.getItem('nickName');

if( localStorage.getItem('Panxho') != null ){
  var allScores = JSON.parse(localStorage.getItem('Panxho'));
   for( let i = 0; i <= allScores.length-1; i++){
     $("#score").append(`<p>${allScores[i]}</p>`);
   }

}else{
  console.log('Nel');
  var allScores = [];
}
window.onload = function () {
  if( localStorage.getItem('nickName') != null){
    nickName.innerHTML = useNickName;
  }
}

function registrarUsuario(){
  let userName = document.getElementById('userName').value;
  if( userName != ""){
    /*Guardando en LS*/
    localStorage.setItem('nickName', userName);
    nickName.innerHTML = userName;
  }else{
    alert('Ingresa un nombre válido');
  }
}

function agregarScore(){
  let score       = document.getElementById('scoreInput').value;
  allScores.push(score);
  document.getElementById('scoreInput').value = "";
  localStorage.setItem("Panxho",JSON.stringify(allScores));
  console.log(localStorage.getItem("Panxho"));
}

function clearLS(){
  nickName.innerHTML = '';
  localStorage.clear();
}
