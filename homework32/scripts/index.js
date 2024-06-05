$(document).ready(function() {
  $("#add").on("click", function() {
    var val = $("input").val();
    if (val !== '') {
      var elem = $("<li></li>").text(val);
      $(elem).append("<button class='rem btn btn-danger'>X</button>");
      $(elem).append("<button class='details btn btn-primary' data-toggle='modal' data-target='#taskModal'>Details</button>");
      $("#mylist").append(elem);
      $("input").val("");
      $(".rem").on("click", function() {
        $(this).parent().remove();
      });
      $(".details").on("click", function() {
       var taskText = $(this).closest("li").contents().filter(function() {
       return this.nodeType === 3;
       }).text();
       $("#taskDetails").text(taskText);
       });
    }
  });

  $('#value').keypress(function(e) {
    if (e.which == 13) {
      $('#add').click();
    }
  });
});
