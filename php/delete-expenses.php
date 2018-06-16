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


if(isset($_POST['id'])){ //IF ID IS SET
$id = $_POST['id']; //SET $id variable equals to AMOUNT INPUT VALUE
}else { //IF THE AMOUNT IS NOT SET
	 $id = null;
}



$sql = 'DELETE FROM expenses_data WHERE id = :id';
$stmt = $pdo->prepare($sql);
$stmt->execute(['id'=>$id]);
echo 'Expenses Deleted';
