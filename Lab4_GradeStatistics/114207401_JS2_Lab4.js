
const mathInput = document.getElementById('mathInput');
const englishInput = document.getElementById('englishInput');
const submitBtn = document.getElementById('submitBtn');
const gradesBody = document.querySelector('#gradesTable tbody');
const mathAvgDisplay = document.getElementById('mathAvg');
const englishAvgDisplay = document.getElementById('englishAvg');
const overallAvgDisplay = document.getElementById('overallAvg');

let rowCount = 0;

function updateColumnAverages() {
    const rows = gradesBody.querySelectorAll('tr');
    const totalRows = rows.length;

    if (totalRows == 0) {
        mathAvgDisplay.textContent = '0.00';
        englishAvgDisplay.textContent = '0.00';
        overallAvgDisplay.textContent = '0.00';
        return;
    }

    let mathSum = 0;
    let englishSum = 0;
    let overallSum = 0; 

    rows.forEach(row => {
        const mathGrade = parseFloat(row.cells[1].textContent);
        const englishGrade = parseFloat(row.cells[2].textContent);
        
        mathSum += mathGrade;
        englishSum += englishGrade;
        overallSum += mathGrade + englishGrade;
    });
    const mathAvg = mathSum / totalRows;
    const englishAvg = englishSum / totalRows;  
    mathAvgDisplay.textContent = mathAvg.toFixed(2);
    englishAvgDisplay.textContent = englishAvg.toFixed(2);
    const overallAvg = overallSum / (totalRows * 2); 
    overallAvgDisplay.textContent = overallAvg.toFixed(2);
}

submitBtn.addEventListener("click", function () {
    const mathGrade = parseFloat(mathInput.value);
    const englishGrade = parseFloat(englishInput.value);
    if (isNaN(mathGrade) || isNaN(englishGrade) || mathGrade < 0 || englishGrade < 0) {
        alert("Please enter valid positive numbers for both grades.");
        return;
    }
    const rowAverage = (mathGrade + englishGrade) / 2;
    rowCount++;
    const newRow = gradesBody.insertRow();
    newRow.insertCell().textContent = rowCount;
    newRow.insertCell().textContent = mathGrade.toFixed(2); 
    newRow.insertCell().textContent = englishGrade.toFixed(2);
    newRow.insertCell().textContent = rowAverage.toFixed(2);
    updateColumnAverages();

    mathInput.value = '';
    englishInput.value = '';
});

updateColumnAverages();