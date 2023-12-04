var $ = function (id) {
    return document.getElementById(id);
};

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('gpaForm');
    const avgGPAInput = document.getElementById('avgGPA');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        
        const credits = [];
        const grades = [];

       
        for (let i = 1; i <= 5; i++) {
            const creditInput = $('course' + i + 'Credit');
            const gradeInput = $('course' + i + 'Grade');

            
            if (creditInput.value.trim() !== "" && gradeInput.value.trim() !== "") {
                credits.push(parseFloat(creditInput.value));
                grades.push(getGradeValue(gradeInput.value));
            }
        }

        if (credits.length < 3 || grades.length < 3) {
            alert('Please enter valid values for at least three courses.');
            return;
        }

        const totalCredits = credits.reduce((acc, val) => acc + val, 0);
        const weightedGPA = credits.reduce((acc, val, index) => acc + val * grades[index], 0);
        const averageGPA = weightedGPA / totalCredits;

        
        avgGPAInput.value = averageGPA.toFixed(2);
    });

    form.addEventListener('reset', function () {
        
        avgGPAInput.value = '';
    });

    function getGradeValue(grade) {
     
        switch (grade.toUpperCase()) {
            case 'A':
                return 4.0;
            case 'B':
                return 3.0;
            case 'C':
                return 2.0;
            case 'D':
                return 1.0;
            case 'F':
                return 0.0;
            default:
                return NaN; // Invalid grade
        }
    }
});
