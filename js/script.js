document.getElementById ('calculate-button').onclick = function() {
	// Coletar números dentro das caixas de input 
	let elem1 = document.getElementById ('elem-1');
	let elem2 = document.getElementById ('elem-2');

	let val1 = parseInt (elem1.value);
	let val2 = parseInt (elem2.value);


	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;
	let operationResult = getResult (val1, val2, operation);


	// Mostrar o resultado dentro do elemento com id "result"
	let resultElement = document.getElementById ('result');
	resultElement.innerHTML = operationResult;

	
}


/**
 * Returns the result of an operation over two number.
 * Arguments: two valid numbers and one operation symbol.
 * Supports sum, subtration, multiplication and division.
 */

 	function getResult(val1, val2, operation)  {
 		if(operation === '+') {
 			return val1 + val2;
 
 		} else if (operation === '-') {
 			return val1 - val2;
 
  		} else if (operation === '*') {
  			return val1 * val2;
 
  		} else if (operation === '/') {
   			return val1 / val2;M		
 		
 		} else if (operation === '%') {
   			return val1 / val2 * 100 + '%';			
 
		} else if (operation === '^') {
   			return Math.pow(val1,val2);	

 		}	

	}