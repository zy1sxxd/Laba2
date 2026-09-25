export function findTopStudent(data) {
    let top = data[0];
    for (let student of data) {
        if (student.score > top.score) {
            top = student;
        }
    }
    return top.name;
}