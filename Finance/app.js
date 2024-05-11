function calculate() {
    var income = parseFloat(document.getElementById('income').value);
    var expense = parseFloat(document.getElementById('expense').value);
    
    var remainingSavings = income - expense;
    
    document.getElementById('display').innerHTML = `
        <p>Income: $${income.toFixed(2)}</p>
        <p>Expense: $${expense.toFixed(2)}</p>
        <p>Remaining Savings: $${remainingSavings.toFixed(2)}</p>
    `;
}

function resetFields() {
    document.getElementById('income').value = '';
    document.getElementById('expense').value = '';
    document.getElementById('display').innerHTML = '';
}