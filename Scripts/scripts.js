//dealerHand and playerHand are for visually adding the newCards
let dealerHand = document.querySelector(".dealer-hand"); 
let playerHand = document.querySelector(".player-hand"); 

//player points has the amount of player cards values added
let playerPoints = document.querySelector(".player-amount"); 

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

    //This is where the game will acutally take place ending when 
    //either a player gets blackjack, busts, or both players stand
    

    
    
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


//When the player or dealer selects hit they are given a newCard in their array 
//and visually on the screen
function hit(user){
    user.push(deck.pop()); 

}
