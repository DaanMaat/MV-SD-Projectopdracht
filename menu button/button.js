var telButton = 0;

document.getElementsByClassName("button")[0].onclick = function(){
  telButton ++;
  if(telButton == 1){
  document.getElementById("navigatie-containerButton").style.marginLeft = "3vw"
  }else if(telButton == 2){
    document.getElementById("navigatie-containerButton").style.marginLeft = "-21vw"
    telButton = 0;
  }

}
