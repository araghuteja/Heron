import Chance from 'chance';

export function getRandomNumbers(length) {
    let chance = new Chance();

    let randomNumber = 0;

    do {
        randomNumber = randomNumber * 10 + chance.weighted( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                                                            [2, 8, 8, 8, 7, 4, 3, 2, 1, 2]);
        length--;
    } while (length > 0);

    return randomNumber;
}
