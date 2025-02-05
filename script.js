document.getElementById('yesButton').addEventListener('click', function() { 
	document.getElementById('response').textContent = '¡Sabía que ibas a decir que siii! ¡Mi bomboncito!'; 
	document.getElementById('response').classList.remove('hidden'); 
}); 

document.getElementById('noButton').addEventListener('click', function() { 
	document.getElementById('response').textContent = '¡Mira ili p olla! No seas ruin y marca la correcta.'; 
	document.getElementById('response').classList.remove('hidden'); 
});