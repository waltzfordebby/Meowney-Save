
		 //EVENT LISTENER FOR FORM SUBMISSION
		 document.getElementById('postForm').addEventListener('submit',loadBudget); /*GETS the form id. When the form is submitted loadBudget function is executed*/




		 //CREATE ELEMENT BUTTON
		 function createDelButton(id_number){

		     var  delbutton = document.createElement('button'); //CREATE ELEMENT BUTTON
			 delbutton.className = 'delete-button'; //SET CLASS
			 delbutton.innerHTML = '<i class="far fas fa-eraser fa-sm">'; //SET THE INNER CONTENT
			 delbutton.setAttribute('id','delete_button'); // SET ID
			 delbutton.setAttribute('type','button'); //SET TYPE
			 delbutton.setAttribute('onclick','delete_expenses('+id_number+')'); //SET ONCLICK ATTRIBUTE
			 return delbutton.outerHTML;; //RETURN delbutton content	 
			 }

 

		 //DELETE EXPENSES
		 function delete_expenses(id_number){

			 var xhr = new XMLHttpRequest(); //SEND XMLHTTPREQUEST


			 xhr.open('POST','php/delete-expenses.php',true); // OPEN delete-expenses.php

			 //SET THE REQUEST HEADER
		     xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded'); 

			 var id_number ="id="+id_number; // SET $_POST[id_number] to id_number

			 xhr.onload = function(){ //ON XMLHTTPREQUEST LOAD

				if(this.status == 200){ //IF STATUS IS OK

					 console.log(this.responseText); //GET THE OUTPUT OF delete.expenses.php
					 loadExpenses(); //AFTER DELETETING UPDATE THE EXPENSES LIST
				}
			 }

			 xhr.send(id_number); //SEND THE REQUEST WITH THE id_number parameter
		 }


		 //CREATE EDIT BUTTON
		 function createEditButton(id_number,i){

		 var  editButton = document.createElement('button'); //CREATE ELEMENT BUTTON
	     editButton.className = 'edit-button'; //SET CLASS
		 editButton.innerHTML = '<i class="fas fa-pencil-alt fa-sm"></i>'; //SET THE INNER CONTENT
		 editButton.setAttribute('id','edit_button'); // SET ID
		 editButton.setAttribute('type','button'); //SET TYPE
		 editButton.setAttribute('data-toggle','modal');
		 editButton.setAttribute('data-target','#editModal');
		 editButton.setAttribute('onclick','edit_expenses('+id_number+')'); //SET ONCLICK ATTRIBUTE
		 return editButton.outerHTML;; //RETURN delbutton content	 


		 }

		 //EDIT EXPENSES FUNCTIOn
		 function edit_expenses(id_number){

			  console.log('Hello there '+id_number);

			  query(id_number);
			 
		 }

		 //EDIT QUERY FUNCTION
		 function query(id_number){

		 	//PARAMATER CONTAINING ALL THE FORM VALUES
			 var idNumber = "idNumber="+id_number;

			  //SET XMLHTTP REQUEST
			 var xhr = new XMLHttpRequest();

			 //OPEN QUERIES AND GET DATA
			 xhr.open('POST','php/edit-expenses.php',true);

			 //SET THE REQUEST HEADER
		     xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

			 //ONLOAD FUNCTION
			 xhr.onload = function(){

			 	 //IF LOAD STATUS IS OK
				 if(this.status == 200){
				 	 

				 	var expense = JSON.parse(this.responseText);

				 	// MODAL VARIABLES
				 	var modalTitle = document.getElementById('editModalTitle');
				 	var modalBody = document.getElementById('editModalBody');

				 	//INPUT VARIABLES
				 	var editAmount = document.getElementById('editAmount');
				 	var editDescriptiom = document.getElementById('editDescription');

				 	
				 	//CATEGORY VARIABLES
				 	var editFood  = document.getElementById('editFood');
					var editTransportation = document.getElementById('editTransportation');
					var editUtilities = document.getElementById('editUtilities');
					var editHealth = document.getElementById('editHealth');
					var editLiesures = document.getElementById('editLiesures');
					var editShopping = document.getElementById('editShopping');

				 	for(var i in expense){

				

					 	var id = expense[i].id;
					 	var amount = expense[i].amount;
					 	var food = expense[i].food;
					 	var transportation = expense[i].transportation;
					 	var utilities = expense[i].utilities;
					 	var health = expense[i].health;
					 	var liesures = expense[i].liesures;
					 	var shopping = expense[i].shopping;
					 	var description = expense[i].description;
					 	var date_created = expense[i].date_created;
					 	var time_created = expense[i].time_created;

					 	//QUERY DATA
					 	console.log(id);
					 	console.log(amount);
					 	console.log(food);
					 	console.log(transportation);
					 	console.log(utilities);
					 	console.log(health);
					 	console.log(liesures);
					 	console.log(shopping);
					 	console.log(description);
					 	console.log(date_created);
					 	console.log(time_created)


				 }

				 	if(food == 1){
				 		editFood.checked = true;
				 	}else {
				 		editFood.checked = false;
				 	}


				 	if(transportation == 1){
				 		editTransportation.checked = true;
				 	}else{
				 		editTransportation.checked = false;
				 	}

				 	if(utilities == 1){
				 		editUtilities.checked = true;
				 	}else{
				 		editUtilities.checked = false;
				 	}

				 	if(health == 1){

				 		editHealth.checked = true;
				 	}else{
				 		editHealth.checked = false;
				 	}

				 	if(liesures == 1){
				 		editLiesures.checked = true; 
				 	}else{
				 		editLiesures.checked = false;
				 	}

				 	if(shopping == 1){
				 		editShopping.checked = true;
				 	}else{
				 		editShopping.checked = false;
				 	}



				 modalTitle.innerHTML = '<i>~</i>Edit ' +date_created;
				 editAmount.value = amount;
				 editDescription.value = description;


				 	
				 	}

				}

				xhr.send(idNumber); //SEND THE REQUEST
		 }


		 //EDIT CATEGORY FUNCTIONS
			 //GET AND SET THE VALUE OF EDIT FOOD CHECKBOX
		     function editFoodValue() {
		         var editFood = document.getElementById("editFood"); //GET THE VALUE OF FOOD CHECKBOX
		         if (editFood.checked == true){ //IF FOOD CHECKBOX IS CHECKED
		             console.log('Food Checked'); //OUTPUT THIS
		             return editFood.value = true; //SET THE FOOD VALUE TO TRUE
		         } else { //IF FOOD CHECKBOX IS NOT CHECKED
		             console.log('Food Not'); //OUTPUT THIS
		             return editFood.value = false; //SET THE FOOD VALUE TO FALSE
		        }
		     }

		     //GET AND SET THE VALUE OF TRANSPORTATION CHECKBOX
		     function editTransportationValue() {
		         var editTransportation = document.getElementById("editTransportation"); //GET THE VALUE OF TRANSPORTATION CHECKBOX
		         if (editTransportation.checked == true){ //IF FOOD TRANSPORTATION IS CHECKED
		             console.log('Transportation Checked'); //OUTPUT THIS
		             return editTransportation.value = true; //SET THE TRANSPORTATION VALUE TO TRUE
		         }else { //IF TRANSPORTATION CHECKBOX IS NOT CHECKED
		             console.log('Transportation Not'); //OUTPUT THIS
		             return editTransportation.value = false; //SET THE TRANSPORTATION VALUE TO FALSE
		         }
		     }

		     //GET AND SET THE VALUE OF UTILITIES CHECKBOX
		     function editUtilitiesValue() {
		         var editUtilities = document.getElementById("editUtilities"); //GET THE VALUE OF UTILITIES CHECKBOX
		         if (editUtilities.checked == true){ //IF FOOD UTILITIES IS CHECKED
		             console.log('Utilities Checked'); //OUTPUT THIS
		             return editUtilities.value = true; //SET THE UTILITIES VALUE TO TRUE
		         } else { //IF UTILITIES CHECKBOX IS NOT CHECKED
		             console.log('Utilities Not'); //OUTPUT THIS
		             return editUtilities.value = false; //SET THE UTILITIES VALUE TO FALSE
		         }
		     }

		     //GET AND SET THE VALUE OF HEALTH CHECKBOX
		     function editHealthValues() {
		         var editHealth = document.getElementById("editHealth"); //GET THE VALUE OF HEALTH CHECKBOX
		         if (editHealth.checked == true){ //IF FOOD HEALTH IS CHECKED
		             console.log('Health Checked'); //OUTPUT THIS
		             return editHealth.value = true; //SET THE HEALTH VALUE TO TRUE
		         } else { //IF HEALTH CHECKBOX IS NOT CHECKED
		             console.log('Health Not'); //OUTPUT THIS
		             return editHealth.value = false; //SET THE HEALTH VALUE TO FALSE
		         }
		     }

		     //GET AND SET THE VALUE OF LIESURES CHECKBOX
		     function editLiesuresValue() {
		         var editLiesures = document.getElementById("editLiesures"); //GET THE VALUE OF LIESURES CHECKBOX
		         if (editLiesures.checked == true){ //IF FOOD LIESURES IS CHECKED
		             console.log('Liesures Checked'); //OUTPUT THIS
		              return editLiesures.value = true; //SET THE LIESURES VALUE TO TRUE
		         } else { //IF LIESURES CHECKBOX IS NOT CHECKED
		           console.log('Liesures Not'); //OUTPUT THIS
		           return editLiesures.value = false; //SET THE LIESURES VALUE TO FALSE
		         }
		     }

		     //GET AND SET THE VALUE OF SHOPPING CHECKBOX
		     function editShoppingValue() {
		         var editShopping = document.getElementById("editShopping"); //GET THE VALUE OF SHOPPING CHECKBOX
		         if (editShopping.checked == true){ //IF FOOD SHOPPING IS CHECKED
		             console.log('Shopping Checked'); //OUTPUT THIS
		             return editShopping.value = true; //SET THE SHOPPING VALUE TO TRUE
		         } else { //IF SHOPPING CHECKBOX IS NOT CHECKED
		             console.log('Shopping Not'); //OUTPUT THIS
		             return editShopping.value = false; //SET THE SHOPPING VALUE TO FALSE
		        }
		     }
	 

		 //CLEAR FORM
		 function clearFunction(){
			 document.getElementById('amount').value = ''; //SET THE VALUE OF AMOUNT TO BLANK
			 document.getElementById('food').checked = false; //SET THE VALUE OF FOOD TO FALSE
			 document.getElementById('transportation').checked = false; //SET THE VALUE OF TRANSPORTATION TO FALSE
			 document.getElementById('utilities').checked = false; //SET THE VALUE OF UTILITIES TO FALSE
			 document.getElementById('health').checked = false; //SET THE VALUE OF HEALTH TO FALSE
			 document.getElementById('liesures').checked = false; //SET THE VALUE OF LIESURES TO FALSE
			 document.getElementById('shopping').checked = false; //SET THE VALUE OF SHOPPING TO FALSE
			 document.getElementById('description').value = ''; //SET THE VALUE OF DESCRIPTION TO BLANK
			 document.getElementById("amountValidate").innerHTML = ""; //SET THE VALUE OF AMOUNT VALIDATION CONTAINER TO BLANK
			 document.getElementById("categoryValidate").innerHTML = ""; //SET THE VALUE OF CATEGORY VALIDATION CONTAINER TO BLANK
			 document.getElementById("descriptionValidate").innerHTML = ""; //SET THE VALUE OF DESCRIPTION VALIDATION CONTAINER TO BLANK

			 console.log('Content Cleared'); //OUTPUTED WHEN ALL THE VALUE IS EMPTY
			 return getYear(); //RETURN FOOTER CONTENT
			 
		 }	

		  //FOOTER YEAR FUNCTION
		  function getYear(){
			      var d = new Date(); //GET THE DATE 
 			      var n = d.getFullYear(); //GET THE YEAR
 			      document.getElementById('copyrightYear').innerHTML = '&copy '+n+' Meowney Save'; //SET THE VALUE OF <p id="copyrightYear"> TO © 2018 Meowney Save
			 }

		 //VALIDATE FORM INPUTS
		 function validateDatas(){
			 validateAmount(); //EXECUTE THE AMOUNT VALIDATION
			 validateCategory(); //EXECUTE THE CATEGORY VALIDATION
			 validateDescription(); //EXECUTE THE DESCRIPTION VALIDATION

			 //IF ALL THE VALIDATION RETURNS TRUE THIS FUNCTION WILL RETURN TRUE
			 if(validateAmount()==true && validateCategory() == true && validateDescription() ==true ){
				 console.log('True');
				 return true;
			 }else{
				 console.log('False');
				 return false;
			 }
		 }

		 //VALIDATE IF THE USER AMOUNT INPUT IS VALID
		 function validateAmount(){
			 var amount = document.getElementById('amount').value; //GET THE VALUE OF AMOUNT INPUT
			 var regex =/^[0-9]+$/; //SET MATCH FOR NUMBER

			 //IF AMOUNT IS NOT EQUAL TO NUMBER RETURN FALSE ELSE RETURN TRUE
			 if(!amount.match(regex)){ //IF AMOUNT IS NOT VALID ADD THIS STATEMENT TO  AMOUNT VALIDATE CONTAINER AND RETURN FALSE
				 document.getElementById("amountValidate").innerHTML ="Please add valid amount!";
				 return false
			 }else { //IF AMOUNT IS VALID ADD THIS STATEMENT TO  AMOUNT VALIDATE CONTAINER AND RETURN TRUE 
				 document.getElementById("amountValidate").innerHTML = "";
				 return true;
			 }
		 }

		 //VALIDATE IF USER SELECTED CATEGORY
		 function validateCategory(){
			 var food = document.getElementById("food"); //GET THE VALUE OF FOOD CHECKBOX
			 var transportation = document.getElementById("transportation"); //GET THE VALUE OF TRANSPORTATION CHECKBOX
			 var utilities = document.getElementById("utilities"); //GET THE VALUE OF UTILITIES CHECKBOX
			 var health = document.getElementById("health"); //GET THE VALUE OF HEALTH CHECKBOX
			 var liesures = document.getElementById("liesures"); //GET THE VALUE OF LIESURES CHECKBOX
			 var shopping = document.getElementById("shopping"); //GET THE VALUE OF SHOPPING CHECKBOX

			 if(food.checked == true ){ //IF FOOD IS CHECKED RETURN TRUE ELSE RETURN FALSE
				 document.getElementById("categoryValidate").innerHTML = "";
				 return true;
			 }else if(transportation.checked == true){ //IF TRANSPORTATION IS CHECKED RETURN TRUE ELSE RETURN FALSE
				 document.getElementById("categoryValidate").innerHTML = "";
				 return true;
			 }else if(utilities.checked == true){ //IF UTILITIES IS CHECKED RETURN TRUE ELSE RETURN FALSE
				 document.getElementById("categoryValidate").innerHTML = "";
				 return true;
			 }else if(health.checked == true){ //IF HEALTH IS CHECKED RETURN TRUE ELSE RETURN FALSE
				 document.getElementById("categoryValidate").innerHTML = "";
				 return true;
			 }else if(liesures.checked == true){ //IF LIESURES IS CHECKED RETURN TRUE ELSE RETURN FALSE
				 document.getElementById("categoryValidate").innerHTML = "";
				 return true;
			 }else if(shopping.checked == true){ //IF SHOPPING IS CHECKED RETURN TRUE ELSE RETURN FALSE
				 document.getElementById("categoryValidate").innerHTML = "";
				 return true;
			 }else { //IF NO CHECKBOX IS CHECKED ADD STATEMENT TO CATEGORY VALIDATE CONTAINER AND RETURN FALSE
				 document.getElementById("categoryValidate").innerHTML ="Please select category!";
				 return false;
			 }
		 }

		 //VALIDATE IF USER ADDED DESCRIPTION
		 function validateDescription(){
			 var description = document.getElementById('description').value; //GET THE VALUE OF DESCRIPTION TEXTAREA

			 if(description == ''){ //IF USER DID NOT ADD DESCRIPTION ADD THIS STATEMENT TO DESCRIPTION VALIDATE CONTAINER AND RETURN FALSE
				 document.getElementById("descriptionValidate").innerHTML ="Please add description!";
				 return false;
			 }else { //IF USER ADDED DESCRIPTION ADD THIS STATEMENT TO DESCRIPTION VALIDATE CONTAINER AND RETURN TRUE
				 document.getElementById("descriptionValidate").innerHTML = "";
				 return true;
			 }
		 }



		 //GET AND SET THE VALUE OF FOOD CHECKBOX
		 function foodValue() {
		     var food = document.getElementById("food"); //GET THE VALUE OF FOOD CHECKBOX
		     if (food.checked == true){ //IF FOOD CHECKBOX IS CHECKED
		         console.log('Food Checked'); //OUTPUT THIS
		         return food.value = true; //SET THE FOOD VALUE TO TRUE
		     } else { //IF FOOD CHECKBOX IS NOT CHECKED
		         console.log('Food Not'); //OUTPUT THIS
		         return food.value = false; //SET THE FOOD VALUE TO FALSE
		    }
		 }

		 //GET AND SET THE VALUE OF TRANSPORTATION CHECKBOX
		 function transportationValue() {
		     var transportation = document.getElementById("transportation"); //GET THE VALUE OF TRANSPORTATION CHECKBOX
		     if (transportation.checked == true){ //IF FOOD TRANSPORTATION IS CHECKED
		         console.log('Transportation Checked'); //OUTPUT THIS
		         return transportation.value = true; //SET THE TRANSPORTATION VALUE TO TRUE
		     }else { //IF TRANSPORTATION CHECKBOX IS NOT CHECKED
		         console.log('Transportation Not'); //OUTPUT THIS
		         return transportation.value = false; //SET THE TRANSPORTATION VALUE TO FALSE
		     }
		 }

		 //GET AND SET THE VALUE OF UTILITIES CHECKBOX
		 function utilitiesValue() {
		     var utilities = document.getElementById("utilities"); //GET THE VALUE OF UTILITIES CHECKBOX
		     if (utilities.checked == true){ //IF FOOD UTILITIES IS CHECKED
		         console.log('Utilities Checked'); //OUTPUT THIS
		         return utilities.value = true; //SET THE UTILITIES VALUE TO TRUE
		     } else { //IF UTILITIES CHECKBOX IS NOT CHECKED
		         console.log('Utilities Not'); //OUTPUT THIS
		         return utilities.value = false; //SET THE UTILITIES VALUE TO FALSE
		     }
		 }

		 //GET AND SET THE VALUE OF HEALTH CHECKBOX
		 function healthValues() {
		     var health = document.getElementById("health"); //GET THE VALUE OF HEALTH CHECKBOX
		     if (health.checked == true){ //IF FOOD HEALTH IS CHECKED
		         console.log('Health Checked'); //OUTPUT THIS
		         return health.value = true; //SET THE HEALTH VALUE TO TRUE
		     } else { //IF HEALTH CHECKBOX IS NOT CHECKED
		         console.log('Health Not'); //OUTPUT THIS
		         return health.value = false; //SET THE HEALTH VALUE TO FALSE
		     }
		 }

		 //GET AND SET THE VALUE OF LIESURES CHECKBOX
		 function liesuresValue() {
		     var liesures = document.getElementById("liesures"); //GET THE VALUE OF LIESURES CHECKBOX
		     if (liesures.checked == true){ //IF FOOD LIESURES IS CHECKED
		         console.log('Liesures Checked'); //OUTPUT THIS
		          return liesures.value = true; //SET THE LIESURES VALUE TO TRUE
		     } else { //IF LIESURES CHECKBOX IS NOT CHECKED
		       console.log('Liesures Not'); //OUTPUT THIS
		       return liesures.value = false; //SET THE LIESURES VALUE TO FALSE
		     }
		 }

		 //GET AND SET THE VALUE OF SHOPPING CHECKBOX
		 function shoppingValue() {
		     var shopping = document.getElementById("shopping"); //GET THE VALUE OF SHOPPING CHECKBOX
		     if (shopping.checked == true){ //IF FOOD SHOPPING IS CHECKED
		         console.log('Shopping Checked'); //OUTPUT THIS
		         return shopping.value = true; //SET THE SHOPPING VALUE TO TRUE
		     } else { //IF SHOPPING CHECKBOX IS NOT CHECKED
		         console.log('Shopping Not'); //OUTPUT THIS
		         return shopping.value = false; //SET THE SHOPPING VALUE TO FALSE
		    }
		 }


		 //FUNCTION FOR GET THE TOTAL OF AMOUNT
		 function loadTotal(){
	 	 	
	 	 	 var xhr = new XMLHttpRequest(); //SET VAR XHR TO NEW XMLHTTPREQUEST
	 	 	 xhr.open('GET','php/total-expenses.php',true); // OPEN AND GET THE DATA FORM php/total-expenses.php

	 	 	 xhr.onload = function(){ //ONLOAD FUNCTION
	 	 	 if (this.status == 200){  //IF THE STATUS IS OK EXECUTE THE COMMANDS

	 	 			 var total = JSON.parse(this.responseText); //SET THE VALUE OF TOTAL TO THE CONTENT OF total-expenses.php and parse it into json

	 	 			 var output = ''; //Set the output variable to stirng

	 	 			

	 	 			 for (var i in total){ //Loop inside total

	 	 				 var total_amount = total[i].amount_total;  //Set the value of total_amount to total json

	 	 				 if(total_amount == null){
	 	 				 	total_amount = 0;
	 	 				 }

	 	 				 output += '<h4>₱'+total_amount+'</h4>' //Set the value of output to heading 4 with total_amount value inside
	 	 			 }

	 	 		 }

	 	 			 document.getElementById('total_expenses').innerHTML = output;//Ouput the output value inside the total_expenses span
	 	 		 }
	 	 			 xhr.send(); //Send the request
	 	 }

	 	 	  
		 //PASS THE INPUTS DATA TO PROCESS.PHP USING AJAX
	 	 function loadBudget(e){
		 e.preventDefault();

		 	 //IF ALL DATAS ENTERED ARE VALID EXECUTE THIS
		     if(validateDatas() == true){

		     	 //ALL FORM INPUT VALUES
			     var amount = document.getElementById('amount').value; //GET THE VALUE OF AMOUNT INPUT
			 	 var food = foodValue(); //GET THE VALUE OF FOOD CHECKBOX
				 var transportation = transportationValue(); //GET THE VALUE OF TRANSPORTATION CHECKBOX
				 var utilities = utilitiesValue(); //GET THE VALUE OF UTILITIES CHECKBOX
				 var health = healthValues(); //GET THE VALUE OF HEALTH CHECKBOX
				 var liesure = liesuresValue(); //GET THE VALUE OF LIESURES CHECKBOX
				 var shopping = shoppingValue(); //GET THE VALUE OF SHOPPING CHECKBOX
				 var description = document.getElementById('description').value; //GET THE VALUE OF DESCRIPTION TEXTAREA

				 //ONE BY ONE OUTPUTS THE FORM VALUES
				 console.log(amount);
				 console.log(food);
				 console.log(transportation);
				 console.log(utilities);
				 console.log(health);
				 console.log(liesure);
				 console.log(shopping);
				 console.log(description);


				 //PARAMATER CONTAINING ALL THE FORM VALUES
				 var form_datas = '&amount='+amount + '&food='+food + '&transportation='+transportation +'&utilities='+utilities + 
				 '&health='+health + '&liesures='+liesure + '&shopping='+shopping + '&description='+description ;

				 //OUTPUTS THE FORM DATAS SUMMARY
				 console.log(form_datas);
				
				 //CREATE XMLHTTPREQUEST
				 var xhr = new XMLHttpRequest();

				 //OPENS THE PROCESS.PHP
				 xhr.open('POST','php/insert-to-database.php',true);

				 //SET THE REQUEST HEADER
		         xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

  				 //ONLOAD RUN THE FUNCTION IF THE STATUS IS OK GET THE RESPONSE TEXT
		         xhr.onload = function () {
			             if(this.status == 200){

				             console.log(this.responseText); //OUTPUT THE OUTPUT OF  PROCESS.PHP
			             }
		             }

		         //SEND THE PARAMETER TO PROCESS.PHP
		         xhr.send(form_datas)
                 
                 //ALERT IF THE DATAS ARE SUCCESSFULLY ADDED TO DATABASE	
		         alert('Expenses Added');

		         //OUTPUT THE EXPENSES
		         loadExpenses();

		         //CLEAR THE FORM INPUTS 
		         return clearFunction();


	         }else{//IF ONE DATA OR ALL DATAS ENTERED ARE NOT VALID EXECUTE THIS{

		         console.log('Data is still on hold!');
	         }
	     }


	     

	 //FUNCTION THAT LOAD AND OUT ALL EXPENSES DATA
	function loadExpenses(){

		 //SET XMLHTTP REQUEST
		 var xhr = new XMLHttpRequest();
		 //OPEN QUERIES AND GET DATA
		 xhr.open('GET','php/queries.php',true);

		 //ONLOAD FUNCTION
		 xhr.onload = function(){

		 	 //IF LOAD STATUS IS OK
			 if(this.status == 200){

			 	 //GET THE DATA IN JSON FORMAT
			 	 var expenses = JSON.parse(this.responseText);

			 	 //SET THE OUPUT TO STRING
			 	 var output = '';

			 	 //LOOP TO EXPENSES
			 	 for (var i  in expenses){
			 	 	 var id_number = expenses[i].id; //GET THE ID NUMBER
			 		 var amount = expenses[i].amount; // GET THE AMOUNT VALUE
			 		 var food = expenses[i].food; //GET THE FOOD VALUE
			 		 var transportation = expenses[i].transportation; //GET THE TRANSPORTATION VALUE
			 		 var utilities = expenses[i].utilities; //GET THE UTILITIES VALUE
			 		 var health = expenses[i].health; //GET THE HEALTH VALUE
			 		 var liesures = expenses[i].liesures; // GET THE LIESURES VALUE
			 		 var shopping = expenses[i].shopping; //GET THE SHOPPING VALUE
			 		 var description = expenses[i].description; //GET THE DESCRIPTION VALUE
			 		 var date_created = expenses[i].date_created; //GET THE CREATION DATA
			 		 var time_created = expenses[i].time_created; // GET THE CREATION TIME


			 		 

 					 //FOOD RESULT FUNCTION
			 		 function foodResult(){
			 		 	 if(food == 1){ //IF FOOD IS TRUE RETURN THIS LIST
			 		 	 return '<li class="list-group-item">Category:<div class="category-container"><div class="food-output" title="Food"></div></div></li>';
			 		 	 }else { //ELSE RETURN NOTHING
			 		 		return  '';
			 		 	 }
			 		 }	

			 		 //TRANSPORTATION RESULT FUNCTION
			 		 function transportationResult(){
			 		 	 if(transportation == 1){ //IF TRANSPORTATION IS TRUE RETURN THIS LIST
			 		 	 return '<li class="list-group-item">Category:<div class="category-container"><div class="transportation-output" title="Transportation"></div></div></li>';
			 		 	 }else { //ELSE RETURN NOTHING
			 		 		return  '';
			 		 	 }
			 		 }	

			 		 //UTILITIES RESULT FUNCTION
			 		 function utilitiesResult(){
			 		 	 if(utilities == 1){ //IF UTILITIES IS TRUE RETURN THIS LIST
			 		 	 return '<li class="list-group-item">Category:<div class="category-container"><div class="utilities-output" title="Utilities"></div></div></li>';
			 		 	 }else { //ELSE RETURN NOTHING
			 		 		return  '';
			 		 	 }
			 		 }	
 					 
 					 //HEALTH RESULT FUNCTION
			 		 function healthResult(){
			 		 	 if(health == 1){ //IF HEALTH IS TRUE RETURN THIS LIST
			 		 	 return '<li class="list-group-item">Category:<div class="category-container"><div class="health-output" title="Health"></div></div></li>';
			 		 	 }else { //ELSE RETURN NOTHING
			 		 		return  '';
			 		 	 }
			 		 }	

			 		 //LIESURES RESULT FUNCTION
			 		 function liesuresResult(){
			 		 	 if(liesures == 1){ //IF LIESURES IS TRUE RETURN THIS LIST
			 		 	 return '<li class="list-group-item">Category:<div class="category-container"><div class="liesures-output" title="Liesures"></div></div></li>';
			 		 	 }else { //ELSE RETURN NOTHING
			 		 		return  '';
			 		 	 }
			 		 }	

			 		 //SHOPPING RESULT FUNCTION
			 		 function shoppingResult(){
			 		 	 if(shopping == 1){//IF SHOPPING IS TRUE RETURN THIS LIST
			 		 	 return '<li class="list-group-item">Category:<div class="category-container"><div class="shopping-output" title="Transportation"></div></div></li>';
			 		 	 }else { //ELSE RETURN NOTHING
			 		 		return  '';
			 		 	 }
			 		 }	

			 		
			 		 i++; //SET THE STARTING NUMBER TO 1



			 		 // console.log(amount);
			 		 // console.log(food);
			 		 // console.log(transportation);
			 		 // console.log(utilities);
			 		 // console.log(health);
			 		 // console.log(liesures);
			 		 // console.log(shopping);
			 		 // console.log(description);
			 		 // console.log(is_created);

			 	output += //SET THE VALUE OF OUTPUT TO BOOTSTRAP ACCORDION
				 '<div id="accordion" class="mt-2">'+
				 	 '<div class="card">'+
				 	     '<div class="card-header" id="heading'+[i]+'">'+ //HEADING ID NUMBER
			                 '<h5 class="mb-0">'+'<div>'+
			                 	 '<div style="display: inline-block" class="summary-title collapsed" data-toggle="collapse" data-target="#collapse'+[i]+'" aria-expanded="true" aria-controls="collaps'+[i]+'">'+date_created+'</div>'+
			                 	 '<div id="delete" class="delete-container">'+createDelButton(id_number)+'</div>'+
			                 	 '<div class="edit-container">'+createEditButton(id_number,i)+'</div>'+
			                 	 '</div>'+
				                 '</h5>'+
				             '</div>'+
				
				 '<div id="collapse'+[i]+'" class="collapse"  aria-labelledby="heading'+[i]+'" data-parent="#accordion">'+ //HEADING ID NUMBER
				     '<div class="card-body">'+    
			             '<ul class="list-group letters-for-learners-20">'+
			             	 '<li class="list-group-item"> Date Created: '+date_created+'</li>'+ //OUTPUT THE CREATION DATE
			             	 '<li class="list-group-item"> Time Created: '+time_created+'</li>'+ //OUTPUT THE CREATION TIME 
			                 '<li class="list-group-item"> Amount: ₱'+amount+'</li>'+ //OUTPUT THE AMOUNT
							 foodResult()+ //OUTPUT FOOD RESULT
							 transportationResult()+ //OUTPUT TRANSPORTATION RESULT
							 utilitiesResult()+ //OUTPUT UTILITIES RESULT
							 healthResult()+ //OUTPUT HEALTH RESULT
							 liesuresResult()+ //OUTPUT LIESURES RESULT
							 shoppingResult()+ //OUTPUT SHOPPING RESULT
			 	             '<li class="list-group-item"> Description: '+description+'</li>'+ //OUTPUT DESCRIPTION
			             '</ul>'+
			 	         '</div>'+
				     '</div>'+
				  '</div>';
			 	 } 
			 	document.getElementById('expenses').innerHTML = output; //ADD OUTPUT TO expenses div 
			 }
		}

		xhr.send(); //SEND THE REQUEST
		 
		 //RETURN THE TOTAL AMOUNT
		  loadTotal();

		//CLEAR THE FORM INPUTS 
		return clearFunction();


	 }


 		


		