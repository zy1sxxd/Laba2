export function calculateAverage(data) {
    const sum = data.reduce((acc, curr) => acc + curr.score, 0);
    return sum / data.length;
}