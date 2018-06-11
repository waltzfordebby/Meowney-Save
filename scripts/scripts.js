document.getElementById('postForm').addEventListener('submit',loadBudget);


function loadBudget(e){
	e.preventDefault();

	var amount = document.getElementById('amount').value;
	var food = document.getElementById('food').value;
	var transportation = document.getElementById('transportation').value;
	var utilities = document.getElementById('utilities').value;
	var health = document.getElementById('health').value;
	var liesure = document.getElementById('liesure').value;
	var shopping = document.getElementById('shopping').value;
	var description = document.getElementById('description').value;

	console.log(amount);

	// var amount_p = "amount"+amount + ;
	// var food_p = "food"+food;
	// var transportation_p ="transportation"+transportation;
	// var utilities_p = "utilities"+utilities;
	// var health_p = "health"+health;
	// var liesure_p = "liesure"+liesure;
	// var shopping_p = "shopping"+shopping;
	// var description_p = "description"+description;


// 	var form_datas = 'amount='+amount + 'food='+food + 'transportation='+transportation +'utilities='+utilities + 
// 	'health='+health + 'liesure='+liesure + 'shopping='+shopping + 'description='+description;
	

// 	var xhr = new XMLHttpRequest();
// 	xhr.open('GET','processes.php',true);

// 	xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');


// 	xhr.onload = function () {
// 		if(this.status == 200){

// 			consol.log(this.responseText);
// 		}
// 	}

// 	xhr.send(form_datas);

// }