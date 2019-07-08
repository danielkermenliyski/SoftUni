function solve(batches) {
    batches.pop();
    let bestBatch = [Number.MIN_SAFE_INTEGER];

    for (let batch of batches) {
        let currentBatch = batch.split('#').map(Number);
        let foundBetterBatch = false;

        if (sum(bestBatch) < sum(currentBatch)) {
            foundBetterBatch = true;
        } else if (sum(bestBatch) === sum(currentBatch)) {
            if (average(bestBatch) < average(currentBatch)) {
                foundBetterBatch = true;
            } else if (average(bestBatch) === average(currentBatch) &&
                bestBatch.length > currentBatch.length) {
                foundBetterBatch = true;
            }
        }

        if (foundBetterBatch) {
            bestBatch = currentBatch.slice();
        }
    }

    console.log(`Best Batch quality: ${sum(bestBatch)}\n${bestBatch.join(' ')}`);


    function sum(arr) {
        return arr.reduce((a, b) => a + b, 0);
    }

    function average(arr) {
        return sum(arr) / arr.length;
    }
}