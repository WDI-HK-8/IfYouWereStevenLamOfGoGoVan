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
    else if ( !win && !lose){
      $(".preProduct").show("slow");} 
};

var checkLaunch = function(){
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
    else if ( !win && !lose){
      $(".afterLaunch").show("slow");} 
};

var checkPitch = function(){
    if (userNum > 1000) {
      win = true;
      $(".win").show("slow");
      console.log("win function");
      // call win function
    } else if (money <1 ) {
      lose = true;
      $(".lose").show("slow");
      console.log("loss function")
    } else if ( !win && !lose){
      $(".pitchMediachoice").show("slow");} 
  };

var checkMedia = function(){
  if (userNum > 1000) {
    win = true;
    pitchMediafadeout();
    $(".win").show("slow");
  } else if (money <1 ) {
    lose = true;
    pitchMediafadeout();
    $(".lose").show("slow");
  }
    else if ( !win && !lose){
    pitchMediafadeout();
    $(".afterLaunch").show("slow");
    }
};

// Intro 
  var introFadeout = function(){
    $(".intro").fadeOut("slow");
    $('.stage').text(stage);
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
    money = money - 30000;
    userNum = userNum;
    kyc = kyc;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
  };

  var checkBuildapp = function(){
    if (kyc<50) {
      preProductfadeout();
      $(".buildAppfail").show("slow");
    } else {
      preProductfadeout();
      $(".launch").show("slow");
    }
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
    //check();
    checkBuildapp();
  });

// Launch
  $( ".launch button" ).click(function() {
    preProductfadeout();
    $(".launch").fadeOut("slow")
    stage = "Launch";
    $('.stage').text(stage);
    $(".afterLaunch").show("slow");
  });

// after Launch(function)
  var afterLaunchfadeout = function(){
    $(".afterLaunch").fadeOut("slow");
  };

  var cdSell = function(){
    money = money - 5000;
    userNum = userNum + 200;
    kyc = kyc + 10;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
  };

  var ad = function(){
    money = money - 10000;
    userNum = userNum + 100;
    kyc = kyc + 5;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
  };

  var agency = function(){
    money = money - 30000;
    userNum = userNum + 300;
    kyc = kyc;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
  };

  var pitchMedia = function(){
    money = money;
    userNum = userNum;
    kyc = kyc;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
  };

  // preProduct (button)
  $( ".cdSell button" ).click(function() {
    cdSell();
    afterLaunchfadeout();
    checkLaunch();
  });

  $( ".ad button" ).click(function() {
    ad();
    afterLaunchfadeout();
    checkLaunch();
  });

  $( ".agency button" ).click(function() {
    agency();
    afterLaunchfadeout();
    checkLaunch();
  });

  $( ".pitchMedia button" ).click(function() {
    pitchMedia();
    afterLaunchfadeout();
    checkPitch();
  });

// Inside pitchMedia

  var pitchMediafadeout = function(){
    $(".pitchMediachoice").fadeOut("slow");
  };

  var mediaData = function(){
    money = money - 800;
    userNum = userNum + 400;
    kyc = kyc;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
  };

  var miniPr = function(){
    money = money - 3000;
    userNum = userNum + 1000;
    kyc = kyc;
    $('.money').text(money);
    $('.userNum').text(userNum);
    $('.kyc').text(kyc);
  };

  $( ".mediaData button" ).click(function() {
    mediaData();
    afterLaunchfadeout();
    checkMedia();
  });

  $( ".miniPr button" ).click(function() {
    miniPr();
    afterLaunchfadeout();
    checkMedia();
  });

});