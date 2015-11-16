$('.toggleStop').click(function(){
    $('.container').addClass('speedStop');
    $('.container').removeClass('speedSlow speedNormal speedFast');
});
$('.toggleSlow').click(function(){
    $('.container').addClass('speedSlow');
    $('.container').removeClass('speedStop speedNormal speedFast');
});
$('.toggleNormal').click(function(){
    $('.container').addClass('speedNormal');
    $('.container').removeClass('speedStop speedSlow speedFast');
});
$('.toggleFast').click(function(){
    $('.container').addClass('speedFast');
    $('.container').removeClass('speedStop speedSlow speedNormal');
});