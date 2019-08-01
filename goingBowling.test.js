const bowling = require("./goingBowling")

describe("bowl", () => {
    it("generates random bowls between 0 and 10", () => {
        expect(bowling.bowl()).toBeGreaterThan(-1);
        expect(bowling.bowl()).toBeLessThan(11);
    })
})

describe("frame", () => {
    it("generates a score for each frame", () => {
        expect(bowling.bowlingFrame().score).toBeGreaterThan(-1);
        expect(bowling.bowlingFrame().score).toBeLessThan(11);
    })
    it("tracks number of shots", () => {
        expect(bowling.bowlingFrame().shots).toBeGreaterThan(0);
    })
    
    it("tracks the score for the first shot", () => {
        expect(bowling.bowlingFrame().firstShot).toBeGreaterThan(-1);
        expect(bowling.bowlingFrame().firstShot).toBeLessThan(11);
    })

})

describe("game", () => {
    it("tracks 10 frames", () => {
        expect(bowling.game().length).toEqual(10);
    })
})