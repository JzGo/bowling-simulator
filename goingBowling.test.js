const bowling = require("./goingBowling")

describe("bowl", () => {
    it("generates random bowls between 0 and 10", () => {
        expect(bowling.bowl()).toBeGreaterThan(-1);
        expect(bowling.bowl()).toBeLessThan(11);
    })
})

describe("frame", () => {
    it("generates a score for each frame", () => {
        expect(bowling.frame()).toBeGreaterThan(-1);
        expect(bowling.frame()).toBeLessThan(11);
    })

})

describe("game", () => {
    it("tracks 10 frames", () => {
        expect(bowling.game().length).toEqual(10);
    })
})