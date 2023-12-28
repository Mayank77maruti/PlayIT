// 1. Deposit some money
// 2. determine number of lines to bet on
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give user their winning
// 7. play again

const prompt = require("prompt-sync")(); // Package to take input from the user

  const ROWS = 3;
  const COLUMNS = 3;

  const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,

  }
  const SYMBOLS_VALUE  = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,

  }

  const spin = () => {
     const symbols = [];
     for(const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for(let i=0;i<count;i++){
        symbols.push(symbol);
     }
    }
  
const reels = [[], [] ,[]];
for (let i=0 ; i<COLUMNS ;i++){
    const reelSymbols = [...symbols];
    for(let j=0;j<ROWS;j++){
        const randomIndex= Math.floor(Math.random() * reelSymbols.length);
        const selectedSymbol=reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex,1);
    }
}
return reels;
};




const deposit = () => {
    while(true){
    const depoAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depoAmount); 
    if(isNaN(numberDepositAmount) || numberDepositAmount <=0){
        console.log('Invalid Input! Please enter a positive number');
    }
    else{
        return numberDepositAmount;
    }
}
};

const getnumber = () => {
    while(true){
     const lines=prompt("Enter number of lines to bet on (1-3): ");
     const numoflines = parseFloat(lines);
     if(isNaN(numoflines) || numoflines <=0 || numoflines>3){
        console.log('Invalid Input! Please enter a positive number');
    }
    else{
        return numoflines;
    }
}
};

const getBet = (balance,numoflines) => {
    while(true){
        const bet=prompt("Enter total bet per Line: ");
        const numBet =parseFloat(bet);
        if(isNaN(numBet) || numBet <=0 || numBet > balance/numoflines){
           console.log('Invalid Bet , try again ');
       }
       else{
           return numBet;
       }
   }
};
 
let balance=deposit();
const numoflines=getnumber();
const bet = getBet();
console.log(bet);