import { integer } from "./integer";

describe('integer()', () => {
    it('generate a random integer within [min, max]', () => {
        for (let i = 0; i < 100; i++) {
            let min = Math.floor(Math.random() * 100);
            let max = Math.floor(min + Math.random() * 100);
            for (let j = 0; j < 100; j++) {
                let n = integer(min, max);
                expect(n).toBeGreaterThanOrEqual(min);
                expect(n).toBeLessThanOrEqual(max);
            }
        }
    })

    it('block numbers in black list', () => {
        for (let j = 0; j < 100; j++) {
            let min = integer(0, 10);
            let max = min + integer(20, 30);
            let blackList: number[] = [];
            for (var i = 0; i < 20; i++) {
                blackList.push(integer(Math.floor(0.5 * min), max * 2));
            }
            let n = integer(min, max, blackList);
            expect(blackList.indexOf(n)).toEqual(-1);
        }

    })
});