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

document.addEventListener("mouseover", function(event){
    
    if(event.target.id == "about" || "aboutLink"){
        document.getElementById("aboutLink").style.color = "black"
    }
    if(event.target.id != "about" && event.target.id != "aboutLink"){
        document.getElementById("aboutLink").style.color = "rgb(140,183,127)"
    }

    if(event.target.id == "opleidingen" || "opledingenLink"){
        document.getElementById("opleidingenLink").style.color = "black"
    }
    if(event.target.id != "opleidingen" && event.target.id != "opleidingenLink"){
        document.getElementById("opleidingenLink").style.color = "rgb(140,183,127)"
    }

    if(event.target.id == "projecten"  || "projectenLink"){
        document.getElementById("projectenLink").style.color = "black"
    }
    if(event.target.id != "projecten" && event.target.id != "projectenLink"){
        document.getElementById("projectenLink").style.color = "rgb(140,183,127)"
    }

    if(event.target.id == "skills" || "skillsLink"){
        document.getElementById("skillsLink").style.color = "black"
    }
    if(event.target.id != "skills" && event.target.id != "skillsLink"){
        document.getElementById("skillsLink").style.color = "rgb(140,183,127)"
    }

    if(event.target.id == "werkervaringen" || "werkervaringLink"){
        document.getElementById("werkervaringLink").style.color = "black"
    }
    if(event.target.id != "werkervaringen" && event.target.id != "werkervaringLink"){
        document.getElementById("werkervaringLink").style.color = "rgb(140,183,127)"
    }

    if(event.target.id == "contact" || "contactLink"){
        document.getElementById("contactLink").style.color = "black"
    }
    if(event.target.id != "contact" && event.target.id != "contactLink"){
        document.getElementById("contactLink").style.color = "rgb(140,183,127)"
    }



})