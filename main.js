const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
    const total = data.reduce((sum, student) => sum + student.score, 0);
    return total / data.length;
}

function findTopStudent(data) {
    return data.reduce((best, item) => {
        if (item.score > best.score) return item;
        return best;
    }, data[0]).name;
}
