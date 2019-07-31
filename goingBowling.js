//10 pins X
//10 frames X
//2 bowls per frame unless 1st is a strike X
//jest setup X

//TODO
//strike = 10 + sum of next 2
//spare = 10 + sum of next shot
//last frame can have 3 shots if frame is a strike or spare
//last frame score is total number of pins knocked down in final frame

//create scorecard UI
//create button on UI that starts sim
//scorecard updates as shots are made
//be able to enter a player name

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
    
    shot += 1;
    if(score < 10){
        // console.log(`next shot: ${bowl(pins - score)}\n`);
        
        score += bowl(pins - score)
        shot++;
    } else {
        score = 10
    }   
    // console.log(shot)
    // console.log(`this many throws: ${shot}`)
    console.log({ score: score, shots: shot });
    return { score: score, shots: shot };
}

let game = () => {
    let frames = [];
    while(frames.length < 10) {
        frames.push(frame());
    }
    console.log(`frames: ${frames}`)
    return frames
}

console.log(game())

module.exports = {
    bowl,
    frame,
    game
}