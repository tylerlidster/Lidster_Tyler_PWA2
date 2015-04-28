/*  
	Your POSTERBOARD
	Author: Tyler Lidster
*/

(function($){

    $('class.masterTooltip').hover(function(){                   // MISSING THE CLASS IN FRONT OF MASTERTOOLTIP    .
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
        $('class.tooltip')                                         // MISSING THE CLASS IN FRONT OF TOOLTIP    .
            .css({top: mousey, left: mousex})
    });


    /* MODAL */
    $('.modalClick').on('click', function(e){
        e.preventDefault();
        $('#overlay')                // OVERLAY IS SPELLED WRONG
            .fadeIn()
            .find('#modal')
            .fadeIn();
    });
    $('in.close').on('click', function(e){        // MISSING THE . IN FRONT OF CLOSE  IT IS A CLASS
        e.preventDefault();
        $('#overlay')                     // MISSING ' IN FRONT OF THE #
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

    /*********Login**************/
        $('#signinButton').click(function() {
            var user = $('#user').val();
            var pass = $('#pass').val();
            console.log("This notifies you if the password is working");
            $.ajax({
                url: 'xhr/login.php',
                type: 'post',
                dataType: 'json',
                data: {
                    username: user,
                    password: pass
                },
                success: function (response) {
                    console.log("test user");
                    if (response.error) {
                        alert(response.error);
                    } else {
                        window.location.assign('dashboard.html')
                    }
                    ;
                }
            });
        });

    /*********Logout*************/
	$('#logOut').click(function(e){
        e.preventDefault();
        $.get('xhr/logout.php', function() {
            window.location.assign('index.html')
        })
    });
    /**********Register**********/
    $('register').on('click', function(){
        var firstname = $('#firstname').val(),
            lastname = $('#lastname').val(),
            username = $('#username').val(),
            password = $('#password').val();
            console.log(firstname+' '+lastname+' '+username' '+password);

        $.ajax({
            url:'xhr/register.php',
            type: 'post',
            dataType: 'json',
            data: {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password
            },
            success: function(response){
                if(response.error) {
                    alert(response.error);
                }else{
                    window.location.assign('admin.html');
                }
            }
        });

    });
	/***********Go To Projects**************/
    $('#projectsbtn').on('click', function(e){
        e.preventDefault();
        window.location.assign('projects.html');
    });

    /***********Go To Posters**************/
    $('#postersbtn').on('click', function(e){
        e.preventDefault();
        window.location.assign('projects.html');
    });

    /***********Go To Deadlines**************/
    $('#deadlines').on('click', function(e){
        e.preventDefault();
        window.location.assign('projects.html');
    });

    /*************Display Username************/
    $.getJSON('xhr/check_login.php', function(data){
        console.log(data);
        $.each(data, function(key, val){
            console.log(val.firstname);
            $('#userid').html('Welcome User: ' + val.firstname);
        })
    });


})(jQuery); // end private scope




