var telButton = 0;

document.getElementsByClassName("button")[0].onclick = function () {
    telButton++;
    if (telButton == 1) {
        document.getElementById("navigatie-containerButton").style.marginLeft = "50vw"
    } else if (telButton == 2) {
        document.getElementById("navigatie-containerButton").style.marginLeft = "-50vw"
        telButton = 0;
    }

}
