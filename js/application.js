var money = 50000;
var userNum = 0;
var kyc = 0;
var stage = "Pre-Launch";
var win = false;
var lose = false;

$(document).ready(function(){

// Checking win or not
var check = function(){
  if (userNum > 1000) {
    win = true;
    $(".win").show("slow");
    console.log("win function");
    // call win function
  } else if (money <1 ) {
    lose = true;
    $(".lose").show("slow");
    console.log("loss function")
  }
  // not yet handled Launch stage
    else if ( !win && !lose){
      $(".preProduct").show("slow");} 
};

// Intro 
  var introFadeout = function(){
    $(".intro").fadeOut("slow");
  };
  var preProductfadein = function(){
    $(".preProduct").show("slow");
  };

  $( ".intro" ).click(function() {
    introFadeout();
    preProductfadein();
  });

// preProduct (function)
  var preProductfadeout = function(){
    $(".preProduct").fadeOut("slow");
  };

  var cdTalk = function(){
    money = money - 5000;
    userNum = userNum;
    kyc = kyc + 20;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
  };

  var cdResearch = function(){
    money = money - 5000;
    userNum = userNum;
    kyc = kyc + 5;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
  };

  var cdPresell = function(){
    money = money - 5000;
    userNum = userNum + 50;
    kyc = kyc + 25;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
  };

  var buildApp = function(){
    money = money - 20000;
    userNum = userNum;
    kyc = kyc;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
  };

// preProduct (button)
  $( ".cdTalk button" ).click(function() {
    cdTalk();
    preProductfadeout();
    check();
  });

  $( ".cdResearch button" ).click(function() {
    cdResearch();
    preProductfadeout();
    check();
  });

  $( ".cdPresell button" ).click(function() {
    cdPresell();
    preProductfadeout();
    check();
  });

  $( ".buildApp button" ).click(function() {
    buildApp();
    preProductfadeout();
    check();
  });

    // console.log("working?",money,usernum,kyc);


});