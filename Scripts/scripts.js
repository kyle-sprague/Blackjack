//dealerHand and playerHand are for visually adding the newCards
let dealerHand = document.querySelector(".dealer-hand"); 
let playerHand = document.querySelector(".player-hand"); 

//dealer is how we tell when the dealer stands or hits
let dealer = document.querySelector(".dealer-play"); 

//player points has the amount of player cards values added
let playerPoints = document.querySelector(".player-amount"); 

//Buttons is so we can access the buttons later on
let buttons = document.querySelectorAll(".button");

//results will contain the results container for the game
let result = document.querySelector(".results-container"); 

//card is an object that all cards are based on
class Card {
    constructor(name, suit, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    }
}

//deck starts as an empty array
let deck = []; 

//These are the attributes that cards can have
let cardNames = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
let suits = ['spades', 'hearts', 'clubs', 'diamonds']; 

//PlayerCards and DealerCards hands start as empty arrays
let playerCards = []; 
let dealerCards = []; 

//createDeck is a function that iterates through all the possible cards in a deck
//and adds them to the deck so it is complete
function createDeck(){
    for(var i = 0; i < suits.length; i++){
        let cardValue = 2;
        for(var j = 0; j < cardNames.length; j++){
            if(cardNames[j] == 'jack' || cardNames[j] == 'queen' || cardNames[j] == 'king'){
                cardValue = 10; 
            }
            let tempCard = new Card(cardNames[j], suits[i], cardValue); 
            deck.push(tempCard); 
            cardValue++;  
        }
    }
}

//shuffle takes in a number which denotes how shuffled the deck should be
//if 100 is entered then the function swaps two cards and random 100 times
//with high numbers like 1000 this makes the deck shuffled throughly
function shuffle(randomness){
    for(var i = 0; i < randomness; i++){
        let random1 = Math.floor(Math.random()*Math.floor(52)); 
        let random2 = Math.floor(Math.random()*Math.floor(52));
        let temp = deck[random1]; 
        deck[random1] = deck[random2]; 
        deck[random2] = temp; 
    }
}

//this will be the main function that plays the game whenever the page is loaded
function playGame(){
    //create and shuffle deck
    createDeck()
    shuffle(100000)

    //dealing out the first two cards to the player and dealer
    playerCards.push(deck.pop());
    dealerCards.push(deck.pop()); 
    playerCards.push(deck.pop());
    dealerCards.push(deck.pop()); 

    //display the player cards
    for(var i = 0; i < playerCards.length; i++){
        displayCards(playerCards, playerHand, i); 
    }
    //hide the first dealer card like in real life
    let tempImg = document.createElement("img");
    tempImg.src = "Images/JPEG/Gray_back.jpg"; 
    dealerHand.appendChild(tempImg);
    displayCards(dealerCards, dealerHand ,1); 

    //point amounts for each player and dealer
    let playerAmount = 0; 
    let dealerAmount = 0; 

    //getting the point amounts 
    for(var i = 0; i < playerCards.length; i++){
        playerAmount += playerCards[i].value; 
    }
    for(var i = 0; i < dealerCards.length; i++){
        dealerAmount += dealerCards[i].value; 
    }
    //displaying the point total for the player 
    playerPoints.innerHTML = playerAmount;

    let playerSelection; 
    let dealerSelection; 
    let bothSelection = "start"; 

    console.log(dealerAmount); 

    //This is where the game will acutally take place ending when 
    //either a player gets blackjack, busts, or both players stand
        buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const img = button.querySelector("img");
            playerSelection = img.alt; 
            
            if(playerSelection == "hit"){ 
                hit(playerCards, playerHand, playerCards.length);
                playerAmount += playerCards[playerCards.length -1].value;
                playerPoints.innerHTML = playerAmount;  
            }
            if(dealerAmount >= 17){
                dealerSelection = "stand";
                dealer.innerHTML = "dealer stands";  
            }
            else if(dealerAmount < 17){
                hit(dealerCards, dealerHand, dealerCards.length);
                dealerAmount += dealerCards[dealerCards.length -1].value;  
                dealerSelection = "hit"; 
                dealer.innerHTML = "dealer hits"; 
                
            }
            if(dealerSelection == "stand" && playerSelection == "stand"){
                bothSelection = "stand"; 
            }
            if(playerAmount > 21){
                endGame("Bust Player"); 
                tempImg.remove(); 
            }
            if(dealerAmount > 21){
                endGame("Bust Dealer"); 
                tempImg.remove(); 
            }
            if(playerAmount == 21){
                endGame("BlackJack Player");
                tempImg.remove(); 
            }
            if(dealerAmount == 21){
                endGame("Blackjack dealer"); 
                tempImg.remove();
            }
            else if(bothSelection == "stand"){
                if(dealerAmount < playerAmount){
                    endGame("player wins");  
                    tempImg.remove(); 
                }
                if(dealerAmount > playerAmount){
                    endGame("Dealer Wins"); 
                    tempImg.remove(); 
                }
                if(dealerAmount == playerAmount){
                    endGame("tie"); 
                    tempImg.remove();
                }
            }
        });
    });
    
    
}

//When the player or dealer selects hit they are given a newCard in their array 
//and visually on the screen
function hit(user, userHand, length){
    user.push(deck.pop());
    displayCards(user, userHand, length); 
}

//endgame is the function that is called when the game ends and it displays the results
function endGame(how){
    result.innerHTML = how;
    displayCards(dealerCards, dealerHand, 0);   
}



//displays the specific card from each hand that I want 
function displayCards(user, userHand, num){
        i = num; 
        if(user[i].name == 2 && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/2C.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 3 && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/3C.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 4 && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/4C.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 5 && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/5C.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 6 && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/6C.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 7 && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/7C.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 8 && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/8C.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 9 && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/9C.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 10 && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/10C.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'jack' && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/JC.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'queen' && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/QC.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'king' && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/KC.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'ace' && user[i].suit == 'clubs'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/AC.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 2 && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/2S.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 3 && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/3S.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 4 && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/4S.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 5 && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/5S.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 6 && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/6S.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 7 && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/7S.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 8 && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/8S.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 9 && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/9S.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 10 && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/10S.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'jack' && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/JS.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'queen' && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/QS.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'king' && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/KS.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'ace' && user[i].suit == 'spades'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/AS.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 2 && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/2D.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 3 && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/3D.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 4 && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/4D.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 5 && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/5D.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 6 && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/6D.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 7 && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/7D.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 8 && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/8D.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 9 && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/9D.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 10 && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/10D.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'jack' && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/JD.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'queen' && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/QD.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'king' && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/KD.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'ace' && user[i].suit == 'diamonds'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/AD.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 2 && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/2H.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 3 && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/3H.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 4 && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/4H.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 5 && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/5H.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 6 && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/6H.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 7 && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/7H.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 8 && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/8H.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 9 && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/9H.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 10 && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/10H.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'jack' && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/JH.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'queen' && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/QH.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'king' && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/KH.jpg"; 
        userHand.appendChild(img);
        }
        else if(user[i].name == 'ace' && user[i].suit == 'hearts'){
            let img = document.createElement("img");
        img.src = "Images/JPEG/AH.jpg"; 
        userHand.appendChild(img);
        }
     
}

playGame(); 


