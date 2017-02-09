$(document).ready(function() {
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
              if ($( window ).width()<=400) {
                if (i == 0) {
                  $("#list").append("<tr>&shy;");
                }
                $("#list").append('<td><a href="#" data-id="'+value.id+'" class="champion"><img src="http://ddragon.leagueoflegends.com/cdn/7.3.1/img/champion/'+ value.image.full +'"></a></span></td>');
                i += 1;
                if (i == 4) {
                  $("#list").append("&shy;</tr>");
                  i = 0;
                }
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
  $("body").on("click",".champion",function(){
    var id = $(this).attr("data-id");
    $.ajax({
        method: "GET",
        async: false,
        url: "https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/"+id+"?champData=all&api_key=RGAPI-0880278c-1402-4583-af24-614cd20d15c3",
        statusCode: {
            404: f404,
            200: function(data) {
              console.log(data);
              var img = $('<img>').attr({
                src: "http://ddragon.leagueoflegends.com/cdn/7.3.1/img/champion/"+data.image.full,
                title: "champion",
                alt:""
              });
              $('#info').append(img);
              $('#info').append("&nbsp;&nbsp;&nbsp;&nbsp;"+data.name+" "+data.title+"<br>");
              var button =$('<button>').attr({id:"exit"}).html("exit");
              $('#info').append(button);
            }
          }

      });
      $('body').on("click","#exit",function(){
        $('#info').html("");
        $('#info').hide();
      });
//       $('#info').attr({
//   style:"display:inline-flex; justify-content:flex-start;"
// });
      $('#info').show();

  });
  $( window ).resize(function() {
    if ($( window ).width()<1200) {
      location.reload();
    }else {
      location.reload();
    }});

  });
