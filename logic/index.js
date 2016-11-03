/**
 * Created by sergiodiazpinilla on 1/11/16.
 */
var deviceActivate = true,
    user;

deviceView();

function deviceView() {
    if(deviceActivate){
        androidStyles();
        deviceActivate = !deviceActivate;
    }else{
        $('#device-container').removeClass('marvel-device nexus5 center-block');
        $('#device-parts').remove();
        $('#status-bar').remove();
        $('#device-screen').removeClass('screen');
        $('#android-controll').remove();
        deviceActivate = !deviceActivate;
    }
}

function androidStyles(){
    $('#device-container').addClass('marvel-device nexus5 ')
        .prepend("<div id='device-parts'>" +
            "<div class='top-bar'></div> " +
            "<div class='sleep'></div>" +
            "<div class='volume'></div>" +
            "<div class='camera'></div></div>")
    $('#device-screen').addClass('screen')
        .prepend("<div id='status-bar' class='row black-background'>" +
            "<img id='img-status'></div>")
        .append(" <footer id='android-controll'class='footer row text-center'> " +
            "<div class='col-sm-4'><i class='glyphicon glyphicon-th-list'></i></div>" +
            "<div class='col-sm-4'><i class='glyphicon glyphicon-unchecked'></i></div> " +
            "<div class='col-sm-4'><i class='glyphicon glyphicon-menu-left'></i></div> " +
            "</footer>");
    $('#img-status').attr("src","../img/android-status-bar.svg");
}


function menuSlider(){
        var selectedEffect = "slide";
        var options = {};
        // Run the effect
        $( "#effect" ).toggle( selectedEffect, options, 500 );
}
$( "#button" ).on( "click", function() {
    menuSlider();
});

function User(userName,email,password){
    this.username = userName;
    this.email = email;
    this.password = password;
}

function register() {
    //Validacion campos
    window.location="../views/mainmenu.html";
}

/*$('device-container').addClass('marvel-device nexus5 center-block')
    .removeClass('container');*/