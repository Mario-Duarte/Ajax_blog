jQuery(document).ready(function($){

  if ( $('.blog,.category,.archive').length > 0 ){

    $('body').on('click', '.js-load-more-posts', function(e){
      e.preventDefault();
      var nextPostsSRC = $('.js-load-more-posts').attr("href");
      var loading = $("<div class='loading-more-posts'><a href='#0'>Loading...</a></div>");
      $(this).closest('.js-load-more-posts').remove();
      loading.appendTo('.posts-wrapper');

      var button = $(this);

      $.ajax({
        url: nextPostsSRC,
        method: "GET",
        success: function(data){
          populateDiv(data);
        },
        error: function(){

          var url = nextPostsSRC.replace(/\/$/, "");
          url = url.split('/');
          var page = url[url.length-1];
          var pageOrigin = url.slice(0, (url.length)-2);
          pageOrigin = pageOrigin.join('/');
          $.ajax({
            url: pageOrigin,
            method: "GET",
            data: {pagedNum: page},
            success: function(data){
                populateDiv(data);
            },
            dataType: "html"
          });
          url = page = pageOrigin = null;

        },
        dataType: "html"
      });

    });
    function ajaxRequest(url,data){


    }

    function populateDiv(data){
      dataObject = $(data);
        $('.loading-more-posts').remove();
        var newPosts = $('.posts-wrapper',dataObject).contents();
        $('.posts-wrapper').append( newPosts );
    }

  } //endif

});
