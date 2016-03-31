$(function () {
    $('.form-addRecipe').hide();
    $('.form-addPost').hide();
    $('.form-addDish').hide();
    $('.addDish').click(function () {
        $('.page-overlay').show();
        $(".form-addItem-holder").show();
        $('.form-addDish').slideToggle(500);
        return false;
    });
    $('.addRecipe').click(function () {
         $('.page-overlay').show();
        $(".form-addItem-holder").show();
        $('.form-addRecipe').slideToggle(500);
    });
    $('.addPost').click(function () {
         $('.page-overlay').show();
        $(".form-addItem-holder").show();
        $('.form-addPost').slideToggle(500);
        return false;
    });
    $('#close-dishForm').find('.fa-times').click(function () {
        $('#close-dishForm').animate({
            height: "0",
            display: "none"
        },500).hide();
        $('.page-overlay').css("display","none");

    });
    $('#close-recipeForm').find('.fa-times').click(function () {
        $('#close-recipeForm').animate({
            height: "0",
            display: "none"
        },500).hide();
        $('.page-overlay').css("display","none");

    });
    $('#close-postForm').find('.fa-times').click(function () {
        $('#close-postForm').animate({
            height: "0",
            display: "none"
        },500).hide();
        $('.page-overlay').css("display","none");

    });
});