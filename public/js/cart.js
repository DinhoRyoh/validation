$(document).ready(function() {
  // That file has the function to fill up the cart/wishlist using localStorage
  if (localStorage.getItem("cart") == null) {
    $('.cart').append("<h2>Your cart is empty</h2>");
  } else {
    //localStorage can only contain string, I'm using parse to transform it to an object, so I can use $.each
    var storage = JSON.parse(localStorage.getItem("cart"));
    $.each(storage, function(key, value) {
      var deleted = JSON.parse(localStorage.getItem('deleted'));
      if (localStorage.getItem("deleted") != null) {
        if (localStorage.getItem("deleted").length == 1) {

          if (key != localStorage.getItem("deleted")) {
             $('#cartList').append("<tr id="+key+"><td>"+value.name+"</td><td>"+value.title+"</td><td>"+value.price+"</td><td><button class='butt' data-id="+key+">X</button></td></tr>");
            }else {
              $('#cartList #'+localStorage.getItem("deleted")).remove();
              }
            }else {
            $.each(deleted,function(key2,value2){
            if (key == value2) {
              //do nothing
              }else {
                $('#cartList').append("<tr id="+key+"><td>"+value.name+"</td><td>"+value.title+"</td><td>"+value.price+"</td><td><button class='butt' data-id="+key+">X</button></td></tr>");
              }
            });
          }
      }else {
        $('#cartList').append("<tr id="+key+"><td>"+value.name+"</td><td>"+value.title+"</td><td>"+value.price+"</td><td><button class='butt' data-id="+key+">X</button></td></tr>");
      }
    });
    //to remove to the list the line which contain the data-id 
    $('body').on("click",".butt",function(){
      var data = $(this).attr("data-id");
      localStorage.setItem("deleted",data);
      $('#cartList #'+data).remove();
    });
  }
});
