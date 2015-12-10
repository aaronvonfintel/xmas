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
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Gifmas', 'twas the night', 'oh wait', 'xmas @ designaffairs'],
        'scrollOverflow': true,
        'scrollbar':true,
        
        'afterLoad': function (anchorLink, index) {
            if (index == 1) {


                $('#text0').addClass('active');


            } else if (index == 2) {
                $('#iphone3, #iphone2, #iphone4').addClass('active');

                $('#text02').addClass('active');
                $('#snowflake01').addClass('active');
                $('#snowflake02').addClass('active');
                $('#snowflake03').addClass('active');
              
            } else if (index == 3) {
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