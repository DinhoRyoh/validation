$(document).ready(function() {
  // This is the main js using LOL API, to obtain all the existing champions, view their profile picture, and we can add them to the cart/wishlist

  f404 = function() {
    alert( "Ressource not found" );
  }

  function init(){
  $.ajax({
    method: "GET",
    url: "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=all&api_key=RGAPI-0880278c-1402-4583-af24-614cd20d15c3",
    statusCode: {
        404: f404,
        200: function(data) {
          var i = 0;
            $.each(data.data, function(key, value) {
              //the following if condition are creating the same table, it made for the responsive content, It was the only issues I found in few time
              if ($( window ).width()<=450) {
                if (i == 0) {
                  $("#list").append("<tr>&shy;");
                }
                $("#list").append('<td><a href="#" data-id="'+value.id+'" class="champion"><img src="http://ddragon.leagueoflegends.com/cdn/7.3.1/img/champion/'+ value.image.full +'"></a></span></td>');
                i += 1;
                if (i == 4) {
                  $("#list").append("&shy;</tr>");
                  i = 0;
                }
                $('.space2').show();

              } else if ($( window ).width()<=700) {
                if (i == 0) {
                  $("#list").append("<tr>&shy;");
                }
                $("#list").append('<td><a href="#" data-id="'+value.id+'" class="champion"><img src="http://ddragon.leagueoflegends.com/cdn/7.3.1/img/champion/'+ value.image.full +'"></a></span></td>');
                i += 1;
                if (i == 6) {
                  $("#list").append("&shy;</tr>");
                  i = 0;
                }
                $('.space').show();

              } else if ($( window ).width()<=1000) {
                if (i == 0) {
                  $("#list").append("<tr>&shy;");
                }
                $("#list").append('<td><a href="#" data-id="'+value.id+'" class="champion"><img src="http://ddragon.leagueoflegends.com/cdn/7.3.1/img/champion/'+ value.image.full +'"></a></span></td>');
                i += 1;
                if (i == 9) {
                  $("#list").append("&shy;</tr>");
                  i = 0;
                }
                $('.space').show();
              } else if ($( window ).width()<=1200) {
                if (i == 0) {
                  $("#list").append("<tr>&shy;");
                }
                $("#list").append('<td><a href="#" data-id="'+value.id+'" class="champion"><img src="http://ddragon.leagueoflegends.com/cdn/7.3.1/img/champion/'+ value.image.full +'"></a></span></td>');
                i += 1;
                if (i == 12) {
                  $("#list").append("&shy;</tr>");
                  i = 0;
                }
              }else {
                if (i == 0) {
                  $("#list").append("<tr>&shy;");
                }
                $("#list").append('<td><a href="#" data-id="'+value.id+'" class="champion"><img src="http://ddragon.leagueoflegends.com/cdn/7.3.1/img/champion/'+ value.image.full +'"></a></span></td>');
                i += 1;
                if (i == 15) {
                  $("#list").append("&shy;</tr>");
                  i = 0;
                }
              }

            })
        }
      }
  });
  }
  init();
  //pop up to see the price the picture and the title of the champion, adding or cancel the choice
  $("body").on("click",".champion",function(){
    var id = $(this).attr("data-id");
    var name;
    var title;
    var price;
    $.ajax({
        method: "GET",
        async: false,
        url: "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/"+id+"?champData=all&api_key=RGAPI-0880278c-1402-4583-af24-614cd20d15c3",
        statusCode: {
            404: f404,
            200: function(data) {
              var img = $('<img>').attr({
                src: "http://ddragon.leagueoflegends.com/cdn/7.3.1/img/champion/"+data.image.full,
                title: "champion",
                style:"padding-left:15px;padding-top:15px;"
              });
              name = data.name;
              title = data.title;
              price = data.stats.hp;
              $('#info').append(img);
              $('#info').append("&nbsp;&nbsp;&nbsp;&nbsp;"+name+" "+title+"<br>");
              $('#info').append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price : "+price+" €<br>");
              var add =$('<button>').attr({id:"add"}).html("add");
              $('#info').append(add);
              var button =$('<button>').attr({id:"exit"}).html("exit");
              $('#info').append(button);
            }
          }

      });
      $('body').on("click","#exit",function(){
        $('#info').html("");
        $('#info').hide();
      });
      // Add Product to a cart(localstorage)
      $('body').on("click","#add",function(){
        if (localStorage.getItem("cart") == null) {
          var array = [{
            name: name,
            title: title,
            price: price
          }];
          var storage = JSON.stringify(array);
          localStorage.setItem('cart', storage);
        } else {
          var array = {
            name: name,
            title: title,
            price: price
          };
          var storage = JSON.parse(localStorage.getItem('cart'));
          localStorage.removeItem('cart');
          storage.push(array);
          var newArray = JSON.stringify(storage);
          localStorage.setItem('cart', newArray);
        }
        $('#info').html("");
        $('#info').hide();
      });
      $('#info').show();

  });
  $( window ).resize(function() {
    if ($( window ).width()<1200) {
      location.reload();
    }else {
      location.reload();
    }});

  });
