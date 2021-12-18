class Casino {
    constructor(name, boolean ){
        this.timesPlayed = 0
        this.isFakeCoin =  boolean
    }

    playGame(betAmount){
        if (this.isFakeCoin === true){
            console.log('The Casino Wins')
            return
        }
        if (Math.random() <= 0.5){
            console.log('The Casino Wins')
        }else{
           console.log(`Player Wins ${betAmount}`)
           this.timesPlayed += 1
        }     
    }

    rollDie(d){
        d = 1 + Math.floor(Math.random()*d)
        console.log(`You rolled a ${d}`)
    }
    
};

// // TESTS
const myCasino = new Casino("HackerU Casino", false);
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);



// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);

// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);

