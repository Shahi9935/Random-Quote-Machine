  $(document).ready(function()
                        {
    
  
    
    
    $("#mybutt").addClass("animated bounce");
  var quota="<p>My smile is fake but my laughter is real</p>\n";
    var autha="Aditya N. Shahi";
  
      $("#mybutt").on("click", function(){
        var mynew= new Date().getTime();
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback="  + mynew,function(data) {

     $("#quote").animate({
          opacity: 0
        }, 100,
        function() {
          $(this).animate({
            opacity: 1
          }, 100);
          
quota=data[0].content;       $('#quote').html(quota);
        });
  
   $("#author").animate({
          opacity: 0
        }, 100,
        function() {
          $(this).animate({
            opacity: 1
          }, 100);
     autha=data[0].title;
          $('#author').html("- "+autha);
        });

 });
  var rang=['#000000','#dc143c','#6495ed','#ff1493','#696969','#228b22','#ffd700','#daa520','#adff2f','#ff69b4','#4b0082','#add8e6','#20b2aa','#778899','#00ff00','#800000','#ba55d3','#ffe4b5','#808000','#ff4500','#ff6347','#008080'];
        //here bitch
 var color = Math.floor(Math.random() * rang.length);
  
$("body").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('body').css("background",rang[color]);
});
       
        $("#mybutt").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $("#mybutt").css("background",rang[color]);
          });
        
        $("#quote").animate({
          opacity: 0
        }, 800,
        function() {
          $(this).animate({
            opacity: 1
          }, 800);
          $("#quote").css("color",rang[color]);
        });  
          
        $("#author").animate({
          opacity: 0
        }, 800,
        function() {
          $(this).animate({
            opacity: 1
          }, 800);
          $("#author").css("color",rang[color]);
        });
        
      });
   
    $("#tweet").on("click",function(){
      var tweetie="http://twitter.com/home/?status=";
      var x=quota.split('');
     
      x.shift();
      x.shift();
      x.pop();
      x.pop();
      x.pop();
      x.pop();
      x.pop();
      x.shift();
      quota=x.join('');
     
      tweetie=tweetie+quota+" - "+autha;
      
      window.open(tweetie)
    });
    
  });