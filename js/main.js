$(function () {
    $('.form-addRecipe').hide();
    $('.form-addPost').hide();
    $('.form-addDish').hide();
    $('.addDish').click(function () {
        /*$('.page-overlay').show();*/
        $(".form-addItem-holder").show();
        $('.form-addDish').slideToggle(500);
        return false;
    });
    $('.addRecipe').click(function () {
         /*$('.page-overlay').show();*/
        $(".form-addItem-holder").show();
        $('.form-addRecipe').slideToggle(500);
    });
    $('.addPost').click(function () {
         /*$('.page-overlay').show();*/
        $(".form-addItem-holder").show();
        $('.form-addPost').slideToggle(500);
        return false;
    });
    $('#close-dishForm').find('.form-closeIcon').click(function () {
        $('#close-dishForm').hide();
        $('.page-overlay').css({"display":"none", "z-index":"-15000"});
    });
    $('#close-recipeForm').find('.form-closeIcon').click(function () {
        $('#close-recipeForm').hide();
        $('.page-overlay').css({"display":"none", "z-index":"-15000"});

    });
    $('#close-postForm').find('.form-closeIcon').click(function () {
        $('#close-postForm').hide();
        $('.page-overlay').css({"display":"none", "z-index":"-15000"});

    });
});