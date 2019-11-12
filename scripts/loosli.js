
  var loader = simpleStorage.get("loader");
  var dateToday = new Date();
  if(!loader || parseFloat(loader)+3600000 < dateToday.getTime()) {
    $("#loader").css('display', 'inline-table');
    $( "#white" ).animate({ width: '100%',}, 3000,  function() {
      $("#loader").fadeOut(1000);
    });
    var thenDate = new Date();
    simpleStorage.set("loader", thenDate.getTime());
}
