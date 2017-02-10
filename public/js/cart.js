$(document).ready(function() {
  if (localStorage.getItem("cart") == null) {
    $('.cart').append("<h2>Your cart is empty</h2>");
  } else {
    var storage = JSON.parse(localStorage.getItem("cart"));
    $.each(storage, function(key, value) {
      console.log(key);
      if (key == 0) {
        //do nothing
      }else {
        $('#table').append("<tr id="+key+"><td>"+value.name+"</td><td>"+value.title+"</td><td>"+value.price+"</td><td><button class='butt' data-id="+key+">X</button></td></tr>");
      }
    });
    $('body').on("click",".butt",function(){
      var data = $(this).attr("data-id");
      $('#table #'+data).hide();
      // TODO: Save the change
    });
  }
});
