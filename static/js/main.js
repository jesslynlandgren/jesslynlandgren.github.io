$(document).ready(function(){
    var navHeight = $('.navigation').height();
    var windowHeight = $(window).height();
    $('.tag').css('height', (windowHeight - navHeight));
    $('.tag').css('padding-top', navHeight);

    var tagHeight = $('.tag').height();
    $('.filter-tag').css('height', tagHeight);
    var tagTop = $('.tag').offset().top;
    var tagLeft = $('.tag').offset().left;
    $('.filter-tag').css('top', tagTop);
    $('.filter-tag').css('left', tagLeft);
    $('.filter-tag').css('padding-top', navHeight);

    var skillsHeight = $('.skills').height();
    $('.filter-skills').css('height', skillsHeight);
    var skillsTop = $('.skills').offset().top;
    var skillsLeft = $('.skills').offset().left;
    $('.filter-skills').css('top', skillsTop);
    $('.filter-skills').css('left', skillsLeft);


    var contactHeight = $('.contact').height();
    $('.filter-contact').css('height', contactHeight);
    var contactTop = $('.contact').offset().top;
    var contactLeft = $('.contact').offset().left;
    $('.filter-contact').css('top', contactTop);
    $('.filter-contact').css('left', contactLeft);
});

$(window).resize(function(){
    var navHeight = $('.navigation').height();
    var windowHeight = $(window).height();
    $('.tag').css('height', (windowHeight - navHeight));
    $('.tag').css('padding-top', navHeight);
    var skillsHeight = $('.skills').height();
    $('.filter-skills').css('height', skillsHeight);
    var contactHeight = $('.contact').height();
    $('.filter-contact').css('height', contactHeight);
    var tagHeight = $('.tag').height();
    $('.filter-tag').css('height', tagHeight);
    var iconWidth = $('.skill-icon').width();
    $('.icon-grid').css('max-width', iconWidth);
});
