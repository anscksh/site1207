function openMenu(x) {
    document.getElementById("menuIcon").innerHTML = "<i class=\"fa fa-times\"></i>";
}

var acc = document.getElementsByClassName("acc");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var text = this.nextElementSibling;
        if (text.style.display === "block") {
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }
    });
}

function openCity(event, cityName) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";
}