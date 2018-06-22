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


//SET TIME ZONE
date_default_timezone_set('Asia/Taipei');

//DATE CREATED
$date_created = date("M/j/Y");

//TIME CREATED
$time_created = date('h:ia');


	if(isset($_POST['idNumber'])){ 
		$idNumber = $_POST['idNumber']; 
		// echo $idNumber;
	}else { 
		echo 'idNumber is not defined!';
	}



	$sql = 'SELECT * FROM expenses_data WHERE id = :idNumber';
	$stmt = $pdo->prepare($sql);
	$stmt->execute(['idNumber'=>$idNumber]);
	$expense = $stmt->fetchAll();


	echo json_encode($expense);


?>