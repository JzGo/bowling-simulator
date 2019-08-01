//10 pins X
//10 frames X
//2 bowls per frame unless 1st is a strike X
//jest setup X

//TODO
//strike = 10 + sum of next 2
//spare = 10 + sum of next shot
//last frame can have 3 shots if frame is a strike or spare X
//last frame score is total number of pins knocked down in final frame

//create scorecard UI
//create button on UI that starts sim
//scorecard updates as shots are made
//be able to enter a player name

//

let bowl = (pins=11) => {
    return Math.floor(Math.random() * Math.floor(pins));
}

let bowlingFrame = (lastFrame=false) => {
    let pins = 10;
    let shot = 0;
    let score = 0;
    score = bowl();
    let firstShot = score;
    
    shot++;
    if (lastFrame) {
        if(score < 10){
            score += bowl(pins - score)
            shot++;
            if (score === 10) {
                score += bowl()
                shot++;
            }
        } else {
            score = 10;
            score += bowl()
            shot++;
            if (score === 10) {
                score += bowl();
                shot++;
            } else {
                score += bowl(pins - score);
                shot++;
            }
        }
    } else {
        if(score < 10){
            // console.log(`next shot: ${bowl(pins - score)}\n`);
            
            score += bowl(pins - score)
            shot++;
        } else {
            score = 10;
        } 
    }
    return { firstShot: firstShot, score: score, shots: shot }
}

//TODO: updates and returns scoreCard
// let calcTotal = (allFrames) => {
//     if (allFrames.length === 10) {
//         return;
//     }
//     if (allFrames.length === 1) {
//         return allFrames;
//     }
//     let currFrame = allFrames[allFrames.length - 1];
//     let lastFrame = allFrames[allFrames.length - 2];
//     let secLastFrame = allFrames[allFrames.length - 3];
    
//     let calcFrames = allFrames.map((frame, frameIndex, frames) => {
//         let totalScore = 0;
//         for(let prevFrames = 0; prevFrames < frameIndex; prevFrames++) {
//             totalScore+=frames[prevFrames].score;
//             return totalScore;
//         }
//     })
//     console.log(calcFrames)
//     return calcFrames
// }

let game = () => {
    let frames = [];
    let scoreCard;
    let currFrame = 0;
    while(frames.length < 10) {
        let frame = frames.length === 9 ? bowlingFrame(true) : bowlingFrame()
        frames.push(frame);

    }
    console.log(frames)
    return frames
}

console.log(game())

module.exports = {
    bowl,
    bowlingFrame,
    game
}