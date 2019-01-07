
// define variables
var wins = 0;           //number of times user gets correct number
var loses = 0;          //number of times user loses
var score = 0;          //count of crystals clicked by user
var ranNum = 0;         //number for user to get
var imagesArray = [     //crystal pictures
    "assets/images/download.jpeg",
    "assets/images/crystal2.jpeg",
    "assets/images/crystal3.jpeg",
    "assets/images/crystal4.jpeg"
];
var crystalValue = 0;       //initial crystal value
var crystalImage;           //crystal image variable definition

// assigns random values to the crystals
function crystalValuesGen (){
    crystalValue = (Math.floor(Math.random() * 12) + 1);
    crystalImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    // ranNumGen();
}

//generates the number to guess
function ranNumGen (){
    ranNum = (Math.floor(Math.random()* 64) + 55);
    // updateStats();
}

// updates the score, wins, losses, assigns random number
function updateStats (){
    $("#random-num").html(ranNum);
    $("#wins-loses").html("Wins: " + wins + "<br><hr>" + "Loses: " + loses);
    $("#score").html("Your total score is: " + score);
}
//for loop that selects an image from the imageArray and gives values to each crystal then adds to crystal-pics div
function gameStart (){
for(i = 0; i < imagesArray.length; i++){
        crystalValuesGen();
        var crystalPic = $("<img>");
        crystalPic.addClass("crystal-image");
        crystalPic.attr("data-crystalvalue", crystalValue);
        crystalPic.attr("src", crystalImage);
        $("#crystal-pics").append(crystalPic);
    }
        $("#status").text("Click a crystal to begin")
        ranNumGen();
        updateStats();
}
function gameReload (){
        score = 0;
        crystalValue = 0;
        $("#crystal-pics").html("");
        for(i = 0; i < imagesArray.length; i++){ 
        crystalValuesGen();
        var crystalPic = $("<img>");
        crystalPic.addClass("crystal-image");
        crystalPic.attr("data-crystalvalue", crystalValue);
        crystalPic.attr("src", crystalImage);
        $("#crystal-pics").append(crystalPic);
        }
        // $("#status").empty();
        ranNumGen();
        updateStats();
        gamePlay();
}

    gameStart();
    gamePlay();

    function gamePlay(){
    $(".crystal-image").on("click", function(){
    console.log("You clicked on a crystal");
    console.log(($(this).attr("data-crystalvalue")));
    score += parseInt($(this).attr("data-crystalvalue"));
    
    if(score === ranNum){
        updateStats();
        $("#status").text("You win!");
        wins ++;
        score = 0;
        crystalValue = 0;
        $("#crystal-pics").html("");
        gameReload();
    }
    if (score > ranNum){
        updateStats();
        $("#status").text("You lost!");
        loses ++;
        score = 0;
        crystalValue = 0;
        $("#crystal-pics").html("");
        gameReload();
    } 
    if (score < ranNum){
        $("#status status2").text(""); 
        updateStats();
    }
    });
}
    


