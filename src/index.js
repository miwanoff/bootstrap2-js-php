import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/popper.js/dist/popper.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
