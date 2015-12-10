//$(document).ready(function () {
//    $('#fullpage').fullpage({
//        'verticalCentered': false,
//        'css3': true,
//        'sectionsColor': ['transparent', 'transparent', 'transparent', 'transparent'],
//        'navigation': true,
//        'navigationPosition': 'right',
//        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],
//        'autoScrolling':false, 
//        'afterLoad': function (anchorLink, index) {
//            //if(index == 2){
//            //    $('#iphone3, #iphone2, #iphone4').addClass('active');
//            //}
//        },

//        'onLeave': function (index, nextIndex, direction) {
//            if (index == 3 && direction == 'down') {
//                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
//            }
//            else if (index == 3 && direction == 'up') {
//                $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
//            }

//            $('#staticImg').toggleClass('active', (index == 2 && direction == 'down') || (index == 4 && direction == 'up'));
//            $('#staticImg').toggleClass('moveDown', nextIndex == 4);
//            $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
//        }
//    });
//});

$(document).ready(function () {
    $('#fullpage').fullpage({
        'css3': true,
        'sectionsColor': ['transparent', 'transparent', 'transparent', 'transparent'],
        'anchors': ['firstPage', 'secondPage', '3rdPage', '4thPage'],
        'menu': '#menu1',
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Gifmas', 'twas the night', 'oh wait', 'xmas @ designaffairs'],
        'scrollOverflow': true,
        
        
        'afterLoad': function (anchorLink, index) {
            if (index == 1) {

                //moving text
                $('#section1').find('.text-1').delay(50).animate({
                    top: '50%'
                }, 1000, 'easeOutExpo');

                //moving trees
                $('#section1').find('.trees-left').delay(500).animate({
                    left: '0%'
                }, 1500, 'easeOutExpo');
                $('#section1').find('.trees-right').delay(800).animate({
                    right: '0%'
                }, 1500, 'easeOutExpo');


            } else if (index == 2) {
                //moving text
                $('#section2').find('.text-2').delay(50).animate({
                    top: '50%'
                }, 1000, 'easeOutExpo');

                $('#iphone3, #iphone2, #iphone4').addClass('active');

                $('#section2').find('.intro').delay(500).animate({
                    left: '0%'
                }, 1500, 'easeOutExpo');

                $('#text02').addClass('active');
                $('#snowflake01').addClass('active');
                $('#snowflake02').addClass('active');
                $('#snowflake03').addClass('active');
              
            } else if (index == 3) {
                //moving text
                $('#section3').find('.text-3').delay(50).animate({
                    top: '50%'
                }, 1000, 'easeOutExpo');
                $('#text03').addClass('active');
                $('#snowflake04').addClass('active');
                $('#snowflake05').addClass('active');
                $('#snowflake06').addClass('active');
            }

        },

        'onLeave': function (index, nextIndex, direction) {
            if (index == 3 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
           
            }
            else if (index == 3 && direction == 'up') {
                $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
      
            }
            else if (index == 4 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
         

            }


            $('#staticImg').toggleClass('active', (index == 2 && direction == 'down') || (index == 4 && direction == 'up'));
            $('#staticImg').toggleClass('moveDown', nextIndex == 4);
            $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        }
    });
});