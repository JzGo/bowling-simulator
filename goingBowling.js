//10 pins
//10 frames
//2 bowls per frame unless 1st is a strike

//

let bowl = (pins=11) => {
    return Math.floor(Math.random() * Math.floor(pins));
}

let frame = () => {
    let pins = 10;
    let shot = 0;
    let score = 0;
    score = bowl();
    // console.log(`score: ${score}`);
    
    shot++
    if(score < 10){
        // console.log(`next shot: ${bowl(pins - score)}\n`);
        
        score += bowl(pins - score)
        shot++;
    } else {
        return 10
    }
    // console.log(`this many throws: ${shot}`)
    return score;
}

let game = () => {
    let frames = [];
    while(frames.length < 10) {
        frames.push(frame());
    }
    // console.log(`frames: ${frames}`)
    return frames
}

console.log(game())

module.exports = {
    bowl,
    frame,
    game
}