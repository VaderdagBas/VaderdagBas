function klikken() {
  var elem = document.getElementById("onklikbaarKnopje");
  var pos = 0;
  pos = Math.floor(Math.random() * 85);
  elem.style.top = pos + "%";
  pos = Math.floor(Math.random() * 90);
  elem.style.left = pos + "%";
}

function mUp() {
document.getElementById("tekst").style.display = "none";
  if (document.body.style.backgroundColor == "red") {
    document.body.style.backgroundColor = "orange";
  }
  else if (document.body.style.backgroundColor == "orange") {
    document.body.style.backgroundColor = "yellow";
  }
  else if (document.body.style.backgroundColor == "yellow") {
    document.body.style.backgroundColor = "green";
  }
  else if (document.body.style.backgroundColor == "green") {
    document.body.style.backgroundColor = "blue";
  }
  else if (document.body.style.backgroundColor == "blue") {
    document.body.style.backgroundColor = "indigo";
  }
  else if (document.body.style.backgroundColor == "indigo") {
    document.body.style.backgroundColor = "violet";
  }
  else {
    document.body.style.backgroundColor = "red";
  }

}
