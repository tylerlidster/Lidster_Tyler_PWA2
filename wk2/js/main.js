/*  
	Your POSTERBOARD
	Author: Tyler Lidster
*/

(function($){

    $('masterTooltip').hover(function(){
        //hover over code
        var title=$(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(title)
            .appendTo('body')
            .fadeIn('slow');
    }, function(){
        //hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e){
        var mousex = e.pageX + 20; //get x coordinates
        var mousey = e.pageY + 10; //get y coordinates
        $('tooltip')
            .css({top: mousey, left: mousex})
    });


    /* MODAL */
    $('.modalClick').on('click', function(e){
        e.preventDefault();
        $('#overylay')
            .fadeIn()
            .find('#modal')
            .fadeIn();
    });
    $('close').on('click', function(e){
        e.preventDefault();
        $(#overlay')
            .fadeOut()
            .find('#modal')
            .fadeOut();
    });

/*Tabbed Accordion for Project*/
    $('#tabs p').hide().eq(0).show();
    $('#tabs p:not(:first)').hide();

    $('#tabs-nav li').click(function(e) {
        e.preventDefault();
        $('#tabs p').hide();

        $('#tabs-nav.current').removeClass("current");
        $(this).addClass('current');
        var clicked = $(this).find('a:first').attr('href');

        $('#tabs |' +clicked).fadeIn('fast');
    }).eq(0).addClass('current');
	
		

	
})(jQuery); // end private scope




