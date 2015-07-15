var money = 50000;
var userNum = 0;
var kyc = 0;
var stage = "Pre-Launch"

$(document).ready(function(){
// Intro 
  $( ".intro" ).click(function() {
    var introFadeout = function(){
      $(".intro").fadeOut("slow");
    };
    introFadeout();
    var preProductfadein = function(){
      $(".preProduct").show("slow");
    };
    preProductfadein();
  });
// Pre-Launch Stage
  $( ".cdTalk button" ).click(function() {
    var preProductfadeout = function(){
      $(".preProduct").fadeOut("slow");
    };

    // Still working, not yet done. 
    var cdTalk = function(){
      money = money - 5000;
      userNum = userNum;
      kyc = kyc +20;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
    };
    preProductfadeout();
    cdTalk();
    // console.log("working?",money,usernum,kyc);
    $(".preProduct").show("slow");
  });




});