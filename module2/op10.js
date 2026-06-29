

const game = (P1, P2)=>{
    if(P1.score > P2.score){
        return "Player 1 wins";
    }
    else if(P1.score < P2.score){
        return "Player 2 wins";
    }
    else{
        if(P1.fouls > P2.fouls){
            return "Player 1 wins via Tie-breaker";
        }
        else if(P1.fouls < P2.fouls){
            return "Player 1 wins via Tie-breaker";
        }
        else{
            return "Absolute Draw";
        }
    }
    
}

console.log(game({
    score: 10,
    fouls: 1
},
{
    score: 10,
    fouls: 3
}));