jQuery(document).ready(function($){

  if ( $('.blog').length > 0 ) {

    $('body').on('click', '.js-load-more-posts', function(e){
      e.preventDefault();
      var nextPostsSRC = $('.js-load-more-posts').attr("href");
      var loading = $("<div class='loading-more-posts'><a href='#0'>Loading...</a></div>");
      $(this).closest('.js-load-more-posts').remove();
      loading.appendTo('.posts-wrapper');

      $.ajax({
        url: nextPostsSRC,
        method: "GET",
        success: function(data){
            dataObject = $(data);
            $('.loading-more-posts').remove();
            var newPosts = $('.posts-wrapper',dataObject).contents();
            $('.posts-wrapper').append( newPosts );
            //console.log("ajax success" , $('.journal-post article',dataObject));
        },
        dataType: "html"
      });

    });

  } //endif

});
