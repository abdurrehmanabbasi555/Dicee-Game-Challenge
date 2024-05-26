// code for dice 1:
    var diceNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImgSource = "images/dice" + diceNumber1 + ".png";
    var diceImage = document.querySelectorAll("img")[0];//queryselector use karo instead of others 'queryselectorAll' agr sb me kuch change/select krna he tbhi & also give the 'array index number' in'[]' to select specific element on document
    diceImage.setAttribute("src", randomDiceImgSource); 

// code for dice 2:
    var diceNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImgSource2 = "images/dice" + diceNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src",randomDiceImgSource2);//we can also change the image attribute like this without any variable creation aswell
    if(diceNumber1 > diceNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 1 Won!";

    }
    else if(diceNumber1 < diceNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 2 Won!";
    }
    else
    {
        document.querySelector("h1").innerHTML = "Game Draw!...";
    }