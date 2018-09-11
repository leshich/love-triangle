/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    const handledElem = -1;
    let counTriangles = 0;
    preferences.forEach((currValue, index) => {
        const isCircular = index === currValue - 1;
        if (!isCircular) {
            let lastValue = currValue;
            for (let i = 0; i < 2; i++) {
                if (lastValue !== handledElem) {
                    let nextIndex = lastValue;
                    lastValue = preferences[nextIndex - 1];
                } else break;
            }

            if (lastValue === index + 1) {
                counTriangles++;
            }
            preferences[index] = handledElem;
        }
    });

    return counTriangles;
};
