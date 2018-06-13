
		//EVENT LISTENER FOR FORM SUBMISSION
		document.getElementById('postForm').addEventListener('submit',loadBudget); /*GETS the form id. When the form is submitted loadBudget function is executed*/
	

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


	         }else//IF ONE DATA OR ALL DATAS ENTERED ARE NOT VALID EXECUTE THIS{

		         console.log('Data is still on hold!');
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
			 	 for (var i in expenses){

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
				 '<div id="accordion">'+
				 	 '<div class="card">'+
				 	     '<div class="card-header" id="heading'+[i]+'">'+ //HEADING ID NUMBER
			                 '<h5 class="mb-0">'+
				                 '<span class="btn btn-link" data-toggle="collapse" data-target="#collapse'+[i]+'" aria-expanded="true" aria-controls="collapse'+[i]+'">'+
				                     'Date: '+date_created+ ' | Time: '+time_created+ //OUPUT DATE AND TIME CREATION
				                 '</span>'+
				                 '</h5>'+
				             '</div>'+
				
				 '<div id="collapse'+[i]+'" class="collapse" aria-labelledby="heading'+[i]+'" data-parent="#accordion">'+ //HEADING ID NUMBER
				     '<div class="card-body">'+    
			             '<ul class="list-group">'+
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
				 '</div>'+
			 	 '<br>'
			 	 } 
			 	document.getElementById('expenses').innerHTML = output; //ADD OUTPUT TO expenses div 
			 }
		}

		xhr.send(); //SEND THE REQUEST

		//CLEAR THE FORM INPUTS 
		return clearFunction();


	}



