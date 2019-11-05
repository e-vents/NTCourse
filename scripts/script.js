function ablegenErlauben(event) {
  event.preventDefault();
}

function ziehen(event) {
  event.dataTransfer.setData("id", event.target.id);
}

function ablegen(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("id"); //Element, welches gezogen wird
  var dest = event.target.parentElement;
  document.getElementById(data).parentElement.appendChild(event.target);
  dest.appendChild(document.getElementById(data));
}