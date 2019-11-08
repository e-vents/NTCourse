function ablegenErlauben(event) {
  event.preventDefault(); //erlaubt drag n drop auf Ebene ListElement
}

function ziehen(event) {
  event.dataTransfer.setData("id", event.target.id); //speichert die ID des Bildes, welches gezogen wird
}

function ablegen(event) {
  event.preventDefault();
  var sourceImg = event.dataTransfer.getData("id"); //saves sourceImg
  var targetLI = event.target.parentElement; //saves targetLI
  document.getElementById(sourceImg).parentElement.appendChild(event.target); //gets sourceLI  and appends targetImg
  targetLI.appendChild(document.getElementById(sourceImg)); //
}