export function filterFailed(data, passScore = 60) {
    const failedNames = [];
    
    for (let i = 0; i < data.length; i++) {
        let student = data[i];
        if (student.score < passScore) {
            failedNames.push(student.name);
        }
    }
    
    return failedNames;
}