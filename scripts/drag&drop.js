//By default, data/elements cannot be dropped in other elements. 
//To allow a drop, we must prevent the default handling of the element.
function allowDrop(onDragOverEvent) {
  onDragOverEvent.preventDefault();
}

function drag(onDragStartEvent) {
  onDragStartEvent.dataTransfer.setData("id", onDragStartEvent.target.id);
}

function drop(onDropEvent) {
  onDropEvent.preventDefault(); //unterbinden der Standard-Aktion
  var data = onDropEvent.dataTransfer.getData("id"); //speichern der ID des zu ziehenden Objektes
  onDropEvent.target.appendChild(document.getElementById(data)); //target: 
}