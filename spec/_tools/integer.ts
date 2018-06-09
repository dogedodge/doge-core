/**
 * generate a random integer within [min, max],
 * except numbers in black list
 */
export function integer(min: number, max: number, blackList: number[] = []) {
    // remove duplicate and sort ascending
    blackList = blackList.filter((black, index) => {
        return (black >= min) && (black <= max) && (blackList.indexOf(black) === index);
    }).sort((a, b) => { return a - b; });

    max -= blackList.length;
    
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    blackList.forEach((black) => {
        if (result >= black) {
            result++;
        }
    });
    return result;
}