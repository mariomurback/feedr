(function(){
'use strict';
$
$("#giphy").click(function (event) {
    event.preventDefault();
    const searchText = encodeURIComponent($('#search').val());

    let $xhr = $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=" + "Putin" + "&api_key=gbSvD4XqDDsCOYCcMgieDOwnPpmyDW0P&limit=20",
        dataType: 'Json'
    });

    $xhr.done(function(data){
        if($xhr.status !== 200){
            return;
        }

        const results = data.data;
        const main = $("#main").empty()
        for (let i = 0; i < results.length; i +=1){
            $(`<article class="article">
            <section class="featuredImage">
              <img src="${results[i].embed_url}" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>Giphy</h3></a>
                <img src="${results[i].embed_url}" alt="" />
                <h6>The greaters</h6>
            </section>
            <div class="clearfix"></div>
          </article>`).appendTo(main);
        }
    });    
});

})();

// Here begins the second API part of the script.

(function(){
  'use strict';
  $
  $("#nasa").click(function (event) {
      event.preventDefault();
      const searchText = encodeURIComponent($('#search').val());
  
      let $xhr = $.ajax({
          url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000" + "&api_key=dfvaFK4g1vupE6I7TRF1JMsOeHFZXf4SmwbWKfFi",
          dataType: 'Json'
      });
  
      $xhr.done(function(data){
          if($xhr.status !== 200){
              return;
          }
  
          const results = data.img_src;
          const main = $("#main").empty()
          for (let i = 0; i < results.length; i +=1){
              $(` <article class="article">
              <section class="featuredImage">
               <img src="${results[i].embed_url}" alt="" />
              </section>
              <section class="articleContent">
                  <a href="#"><h3>Nasa!</h3></a>
                <img src="${results[i].embed_url}" alt="" />
              </section>
              <div class="clearfix"></div>
            </article>`).appendTo(main);
          }
      });    
  
      
  });
  
  })();