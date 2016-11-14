/**
 * Created by sergiodiazpinilla on 12/11/16.
 */

var first = true,
    second = false,
    third = false;

$.get("../views/calcTabs/first.html", function(data){
    $("#content").append(data);
});

function changeTab(tabNumber) {
    if(tabNumber === 1 && !first){
        second = false;
        first = true;
        third = false;
        $("#prints-tab").remove();
        $.get("../views/calcTabs/first.html", function(data){
            $("#content").append(data);
        });
    }
    if(tabNumber === 2 && !second){
        second = true;
        first = false;
        third = false;
        $("#calc-tab").remove();
        $.get("../views/calcTabs/second.html", function(data){
            $("#content").append(data);
            watherfoot();
            cofootprint();
        });
    }
    if(tabNumber === 3){

    }
}

function watherfoot() {
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleThickness = 0.2;
    config1.waveAnimateTime = 1000;
    var gauge3 = loadLiquidFillGauge("fillgauge", 60.1, config1);

}

function cofootprint() {
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#D4AB6A";
    config1.textColor = "#553300";
    config1.waveTextColor = "#805615";
    config1.waveColor = "#AA7D39";
    config1.circleThickness = 0.1;
    config1.circleFillGap = 0.2;
    config1.textVertPosition = 0.8;
    config1.waveAnimateTime = 2000;
    config1.waveHeight = 0.3;
    config1.waveCount = 1;
    var gauge3 = loadLiquidFillGauge("footprint", 60.1, config1);
}
var id = 0;
function appendElementList(){
    var name = $("#name-rec").val(),
        typeRe = $("#typeRec").val(),
        num = $("#number-cos").val();
    $("#recycle-list").append("<div id='num-"+id+"' class='row'> <div class='col-sm-4'> <p>"+name+"</p> </div> " +
        "<div class='col-sm-4'> <p>"+typeRe+"</p> </div> <div class='col-sm-2'> <p>"+num+"</p> </div> <div class='col-sm-2'> <p></p>" +
        "<button onclick='removeElementList("+id+")'><i class='glyphicon glyphicon-minus-sign'></i> </div> </div> </button> ");
    id++;
}

function removeElementList(id) {
    $("#num-"+id).remove();
}