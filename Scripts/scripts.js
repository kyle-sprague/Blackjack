//dealerHand and playerHand are for visually adding the newCards
let dealerHand = document.querySelector(".dealer-hand"); 
let playerHand = document.querySelector(".player-hand"); 

//card is an object that all cards are based on
function Card(name, suit, value){
    this.name = name; 
    this.suit = suit; 
    this.value = value; 
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
    createDeck()
    shuffle(100000)
    playerCards.push(deck.pop());
    dealerCards.push(deck.pop()); 
    playerCards.push(deck.pop());
    dealerCards.push(deck.pop()); 
    
    //display cards function one for player different one for dealer
    
    let playerAmount = 0; 
    let dealerAmount = 0; 

    for(var i = 0; i < playerCards.length; i++){
        playerAmount += playerCards[i].value; 
    }
    for(var i = 0; i < dealerCards.length; i++){
        dealerAmount += dealerCards[i].value; 
    }
    console.log(playerCards, dealerCards);
    console.log(dealerAmount, playerAmount);
    
    
    
}

playGame(); 

//When the player or dealer selects hit they are given a newCard in their array 
//and visually on the screen
function hit(user){
    let newCard = document.createElement('div'); 
    newCard.style.backgroundColor = "blue"; 
    newCard.style.height = "150px"; 
    newCard.style.width = "75px";
    newCard.style.marginLeft = "25px";
    newCard.style.marginRight = "25px";  
    user.appendChild(newCard); 
}
