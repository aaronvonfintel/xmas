$(document).ready(function () {
    $('#fullpage').fullpage({
        'css3': true,
        'sectionsColor': ['transparent', 'transparent', 'transparent', 'transparent'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Gifmas', '', '', 'Building'],
        'scrollOverflow': true,
        
        'afterLoad': function (anchorLink, index) {

            if (index == 2) {
                $('#iphone3, #iphone2, #iphone4').addClass('active');

                $('#text02').addClass('active');
                //alert("index 2");
            }

        },

        'onLeave': function (index, nextIndex, direction) {
            if (index == 3 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
                //alert("down 3");
            }
            else if (index == 3 && direction == 'up') {
                $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
                //alert("up 3");
            }
            else if (index == 4 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
                //alert("down 4");

            }
            //else if (index == 4 && direction == 'up') {
            //    $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');

            //}

            $('#staticImg').toggleClass('active', (index == 2 && direction == 'down') || (index == 4 && direction == 'up'));
            $('#staticImg').toggleClass('moveDown', nextIndex == 4);
            $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        }
    });
});