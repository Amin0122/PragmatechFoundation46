$(document).ready(function(){
    $('.container .slides > img').click(function(){
        var $smallImages = $(this).attr('src');
        $('.big-image > img').attr('src', $smallImages);
    })
})