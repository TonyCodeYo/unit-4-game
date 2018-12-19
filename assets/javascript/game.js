
$(document).ready(function () {

    var crystalScore;
    var winsOk = 0;
    var lossesOk = 0;
    var crystal1; 
    var crystal2;
    var crystal3;
    var crystal4;
    var totalScore = 0;
    
    reset();

    function reset() {
      
      totalScore = 0;
      crystalScore = Math.floor(Math.random() * 101) + 19;
      $("#crystalScore").text(crystalScore)
      crystal1 = Math.floor(Math.random() * 12) + 1;
      crystal2 = Math.floor(Math.random() * 12) + 1;
      crystal3 = Math.floor(Math.random() * 12) + 1;
      crystal4 = Math.floor(Math.random() * 12) + 1;
      $("#totalScore").text(totalScore);
      $("#winsSpan").text(winsOk);
      $("#lossesSpan").text(lossesOk);
    }

    console.log(crystalScore, totalScore);
    console.log(crystal1, crystal2, crystal3, crystal4);
    console.log(winsOk, lossesOk);
  
  $("#crystal1").on("click", function (huh1) {
    console.log(huh1);
    totalScore = crystal1 + totalScore;
    console.log(totalScore);
    $("#totalScore").text(totalScore);
    if (totalScore === crystalScore) {
      winsOk = winsOk + 1;
      $("#winsSpan").text(winsOk);
      reset();
    }
    if (totalScore > crystalScore) {
      lossesOk = lossesOk + 1;
      $("#lossesSpan").text(lossesOk);
      reset();
    }
  })
  $("#crystal2").on("click", function (huh2) {
    console.log(huh2);
    totalScore = crystal2 + totalScore;
    console.log(totalScore);
    $("#totalScore").text(totalScore);
    if (totalScore === crystalScore) {
      winsOk = winsOk + 1;
      $("#winsSpan").text(winsOk);
      reset();
    }
    if (totalScore > crystalScore) {
      lossesOk = lossesOk + 1;
      $("#lossesSpan").text(lossesOk);
      reset();
    }
  })
  $("#crystal3").on("click", function (huh3) {
    console.log(huh3);
    totalScore = crystal3 + totalScore;
    console.log(totalScore);
    $("#totalScore").text(totalScore);
    if (totalScore === crystalScore) {
      winsOk = winsOk + 1;
      $("#winsSpan").text(winsOk);
      reset();
    }
    if (totalScore > crystalScore) {
      lossesOk = lossesOk + 1;
      $("#lossesSpan").text(lossesOk)
      reset();
    }
  })
  $("#crystal4").on("click", function (huh4) {
    console.log(huh4);totalScore = crystal4 + totalScore;
    console.log(totalScore);
    $("#totalScore").text(totalScore);
    if (totalScore === crystalScore) {
      winsOk = winsOk + 1;
      $("#winsSpan").text(winsOk);
      reset();
    }
    if (totalScore > crystalScore) {
      lossesOk = lossesOk + 1;
      $("#lossesSpan").text(lossesOk);
      reset();
    }
  })
})