let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let expression = "";

function updateDisplay() {
    input.value = expression;
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

    
        if (value.toLowerCase().trim() === 'ac') {
            expression = "";
            updateDisplay();
            return;
        }

    
        if (value === 'DEL') {
            expression = expression.slice(0, -1);
            updateDisplay();
            return;
        }

    
        if (value === '=') {
            try {
                let result = eval(expression);

    
                if (!isFinite(result)) {
                    expression = "";
                    input.value = "Can not divide by zero";
                    return;
                }

                expression = result.toString();
                updateDisplay();

            } catch (err) {
                expression = "";
                input.value = "Error";
            }
            return;
        }

        let lastChar = expression.slice(-1);
        let operators = ['+', '-', '*', '/', '.'];


        if (operators.includes(value) && operators.includes(lastChar)) {
            return;
        }

        expression += value;
        updateDisplay();
    });
});