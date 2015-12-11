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
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Gifmas', 'twas the night', 'oh wait', 'xmas @ designaffairs'],
        'scrollOverflow': true,
        
        
        'afterLoad': function (anchorLink, index) {
            if (index == 1) {                
                //moving text
                $('#section1').find('.text-1').delay(30).animate({
                    top: '50%'
                }, 1000, 'easeOutExpo');

                //moving trees
                $('#section1').find('.tree-1').delay(500).animate({
                    left: '20%'
                }, 1400, 'easeOutExpo');
                $('#section1').find('.tree-2').delay(400).animate({
                    left: '45%'
                }, 1200, 'easeOutExpo');
                $('#section1').find('.tree-3').delay(300).animate({
                    left: '70%'
                }, 1000, 'easeOutExpo');

                $('#section1').find('.tree-4').delay(600).animate({
                    right: '45%'
                }, 1200, 'easeOutExpo');
                $('#section1').find('.tree-5').delay(700).animate({
                    right: '20%'
                }, 1400, 'easeOutExpo');

                // moving snowflake            
                $('#section1').find('.snowflake-1').delay(800).animate({
                    top: '70%'
                }, 12000, 'easeOutExpo');
                $('#section1').find('.snowflake-2').delay(1200).animate({
                    top: '25%'
                }, 8000, 'easeOutExpo');
                $('#section1').find('.snowflake-3').delay(650).animate({
                    top: '65%'
                }, 9000, 'easeOutExpo');
                $('#section1').find('.snowflake-4').delay(850).animate({
                    top: '35%'
                }, 9000, 'easeOutExpo');

            } else if (index == 2) {
                $('#gif-01').addClass('active');
               
                //moving text
                $('#section2').find('.text-2').delay(30).animate({
                    top: '50%'
                }, 1000, 'easeOutExpo');
     
                // moving snowflake
                $('#section2').find('.snowflake-1').delay(100).animate({
                    top: '80%'
                }, 9000, 'easeOutExpo');
                $('#section2').find('.snowflake-2').delay(200).animate({
                    top: '25%'
                }, 9000, 'easeOutExpo');
                $('#section2').find('.snowflake-3').delay(300).animate({
                    top: '60%'
                }, 9000, 'easeOutExpo');
                $('#section2').find('.snowflake-4').delay(400).animate({
                    top: '55%'
                }, 9000, 'easeOutExpo');
                
              
            } else if (index == 3) {
                //moving text
                $('#section3').find('.text-3').delay(30).animate({
                    top: '50%'
                }, 1000, 'easeOutExpo');

                // moving snowflake            
                $('#section3').find('.snowflake-1').delay(1100).animate({
                    top: '30%'
                }, 9000, 'easeOutExpo');
                $('#section3').find('.snowflake-2').delay(900).animate({
                    top: '50%'
                }, 12000, 'easeOutExpo');
                $('#section3').find('.snowflake-3').delay(650).animate({
                    top: '20%'
                }, 9000, 'easeOutExpo');
                $('#section3').find('.snowflake-4').delay(700).animate({
                    top: '90%'
                }, 13000, 'easeOutExpo');
                $('#section3').find('.snowflake-5').delay(1250).animate({
                    top: '70%'
                }, 9000, 'easeOutExpo');
            } else if (index == 4) {
                $('#gif-02, #gif-03, #gif-04, #gif-05, #gif-06, #gif-07').addClass('active');
                $('#gif-08, #gif-09, #gif-10, #gif-11, #gif-12, #gif-13, #gif-14, #gif-15, #gif-16, #gif-17, #gif-18, #gif-19, #gif-20, #gif-21, #gif-22, #gif-23, #gif-24').addClass('active');

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