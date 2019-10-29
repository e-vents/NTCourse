function ablegenErlauben(event) {
  event.preventDefault();
}

function ziehen(event) {
  event.dataTransfer.setData("id", event.target.id);
}

function ablegen(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("id");
  event.target.appendChild(document.getElementById(data));
}