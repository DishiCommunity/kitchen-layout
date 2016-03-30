var dishLink = document.getElementsByClassName("addDish");
var recipeLink = document.getElementsByClassName("addRecipe");

 $('.addDish').on('click', function(){
          if($('.form-addDish').hasClass("is-animated-in")) {
              $.addClass("is-animated-in");
      });
         $('.close-button').on('click', function(){
             $('.add').removeClass("is-animated-out").addClass("is-animated-out");
         });
     
$('.addDish, .addRecipe, .addPost .close-button').on('click' , function(){
    if($(this).hasClass("is-animated-in")){
        $(this).toggle("is-animated-out");
    }
});     