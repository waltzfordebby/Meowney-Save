<?php

//DSN Variables
$host = 'localhost'; //HOST NAME
$user = 'root'; //HOST USERNAME
$password = ''; //HOST PASSWORD
$dbname = 'meowney_save'; //DATABASE NAME


//Set DSN 
$dsn = 'mysql:host='.$host.';dbname='.$dbname; //SET THE MYSQL HOST TO LOCALHOST AND DATABASE NAME TO meowney_save

//Create a PDO instance
$pdo = new PDO($dsn,$user,$password); //CREATE THE PDO DATABASE CONNECTION(DSN,USERNAME,PASSWORD)
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ); //SET THE DATABASE DATAS TO BE OBJECT
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES,false); //ALLOWS YOU TO USE LIMIT


if(isset($_POST['amount'])){ //IF AMOUNT IS SET
$amount = $_POST['amount']; //SET $amount variable equals to AMOUNT INPUT VALUE
}else { //IF THE AMOUNT IS NOT SET
	$amount = 'Error'; //SET THE value of $amount to 'Error'
}



if($_POST['food']=='true'){ //IF FOOD IS SET TO TRUE
$food = true;  //SET THE VALUE OF $food to true
}else{ //IF FOOD IS NOT EQUAL TO TRUE
	$food = false; //SET THE VALUE OF $food to false
}


if($_POST['transportation']=='true'){ //IF TRANSPORTATION IS SET TO TRUE
$transportation = true; //SET THE VALUE OF $transportation to true
}else{ //IF TRANSPORTATION IS NOT EQUAL TO TRUE
	$transportation = false; //SET THE VALUE OF $transportation to false
}



if($_POST['utilities']=='true'){ //IF UTILITIES IS SET TO TRUE
$utilities = true; //SET THE VALUE OF $utilities to true
}else{ //IF UTILITIES IS NOT EQUAL TO TRUE
	$utilities = false; //SET THE VALUE OF $utilities to false
}


if($_POST['health']=='true'){ //IF HEALTH IS SET TO TRUE
$health = true; //SET THE VALUE OF $health to true
}else{ //IF HEALTH IS NOT EQUAL TO TRUE
	$health = false;  //SET THE VALUE OF $health to false
}


if($_POST['liesures']=='true'){ //IF LIESURES IS SET TO TRUE
$liesures = true; //SET THE VALUE OF $liesures to true
}else{ //IF LIESURES IS NOT EQUAL TO TRUE
	$liesures = false; //SET THE VALUE OF $liesures to false
}



if($_POST['shopping']=='true'){ //IF SHOPPING IS SET TO TRUE
$shopping = true; //SET THE VALUE OF $shopping to true
}else{ //IF SHOPPING IS NOT EQUAL TO TRUE
	$shopping = false; //SET THE VALUE OF $shopping to false
}


if(isset($_POST['description'])){ //IF DESCRIPTION IS SET
$description = $_POST['description']; //SET $description variable equals to AMOUNT INPUT VALUE
}else { //IF THE DESCRIPTION IS NOT SET
	$description = 'Error'; //SET THE value of $description to 'Error'
}



$sql = 'INSERT INTO expenses_data (amount,food,transportation,utilities,health,liesures,shopping,description) VALUES (:amount, :food, :transportation,:utilities,:health,:liesures,:shopping,:description)'; //INSERT THE AMOUNT, FOOD, TRANSPORTATION, UTILITIES, HEALTH, LIESURES, SHOPPING, DESCRIPTION VALUES TO DATABASE
$stmt = $pdo->prepare($sql); //PREPARE THE SQL INSERT REQUEST
$stmt->execute(['amount'=> $amount, 'food'=> $food, 'transportation' => $transportation,  'utilities' => $utilities, 'health' => $health, 'liesures' => 
	$liesures,'shopping' => $shopping, 'description' => $description ]); //EXECUTE THE SQL INSERT REQUEST AND SET THE VALUES OF DATAS

echo 'Data Added!'; //OUTPUT THIS WHEN THE DATA IS ADDED TO DATABASE



