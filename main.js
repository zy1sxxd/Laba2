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

function filterFailed(data, passScore) {
    return data
        .filter(item => item.score < passScore)
        .map(item => item.name);
}

function addLetterGrade(data) {
    return data.map(student => {
        let letter = "C";
        if (student.score >= 90) letter = "A";
        else if (student.score >= 75) letter = "B";
        return { ...student, letter };
    });
}

console.log("1. Средний балл:", calculateAverage(grades));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников у которыз балл ниже 60:", filterFailed(grades, 60));
console.log("4. Итоговый массив с буквенными оценками:");
console.log(addLetterGrade(grades));