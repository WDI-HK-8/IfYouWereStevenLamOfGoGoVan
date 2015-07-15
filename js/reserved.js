var check = function(){
  if (usernum > 1000) {
    console.log("win function")
    // call win function
  };
  if (money =< 0) {
    console.log("loss function")
// call lost function
  }
}
var win = function(){
// call win screen
};
var loss = function(){
// call loss screen
};

var launch = function (){
    $( ".launch" ).click(function() {
      $( this ).fadeOut("slow");
      // call launch: sell | ad | agency | pitchMedia
    });
  };

  var cdTalk = function (){
    $( ".cdTalk" ).click(function() {
      money = money - 5000;
      usernum = usernum;
      kyc = kyc +20;
    $( this ).fadeout("slow");
    // call preProduct: customerDiscovery | buildProduct
    });
  }; 

  var cdResearch = function (){
    $( ".cdResearch" ).click(function() {
      money = money - 5000;
      usernum = usernum;
      kyc = kyc +5;
      $( this ).fadeout("slow");
      // call preProduct: customerDiscovery | buildProduct
  }); 

  var cdSell1 = function (){
    $( ".cdSell1" ).click(function() {
      money = money - 5000;
      usernum = usernum + 10;
      kyc = kyc +25;
    $( this ).fadeout("slow");
    // call preProduct: customerDiscovery | buildProduct
    }); 
  };

  var buildApp = function (){
    $( ".buildApp" ).click(function() {
      money = money - 20000;
      usernum = usernum;
      kyc = kyc;
      $( this ).fadeout("slow");
      if (kyc < 50) {
        preProduct();
        // call preProduct: customerDiscovery | buildProduct
      } else {Launch()};
      // call launch: sell | ad | agency | pitchMedia
    });
  }; 

  var cdSell2 = function (){
    $( ".cdSell1" ).click(function() {
      money = money - 5000;
      usernum = usernum + 100;
      kyc = kyc +25;
      $( this ).fadeout("slow");
      // Call launch: sell | ad | agency | pitchMedia
    }); 
  };

  var ad = function (){
  $( ".ad" ).click(function() {
    money = money - 10000;
    usernum = usernum + 50;
    kyc = kyc +5;
    $( this ).fadeout("slow");
    // Call launch: sell | ad | agency | pitchMedia
  }); 

  var agency = function (){
    $( ".agency" ).click(function() {
      money = money - 25000;
      usernum = usernum + 100;
      kyc = kyc +0;
      $( this ).fadeout("slow");
      // Call launch: sell | ad | agency | pitchMedia
    }); 
  };

  var pitchMedia = function (){
    $( ".pitchMedia" ).click(function() {
      money = money - 5000;
      usernum = usernum +0;
      kyc = kyc +0;
      $( this ).fadeout("slow");
      // Call pitch fail
    });
  }; 

  var pitchfail = function (){
    $( ".pitchfail" ).click(function() {
      $( this ).fadeout("slow");
      // Call buy media database | buy mini PR
    });
  }; 

  var mediaDatabase = function (){
    $( ".mediaDatabase" ).click(function() {
      money = money - 5500;
      usernum = usernum + 200;
      kyc = kyc +0;
      $( this ).fadeout("slow");
      // Call launch: sell | ad | agency | pitchMedia
    });
  }; 

  var miniPR = function (){
    $( ".miniPR" ).click(function() {
      money = money - 7000;
      usernum = usernum + 500;
      kyc = kyc +0;
      $( this ).fadeout("slow");
      // Call launch: sell | ad | agency | pitchMedia
    }); 
  };
