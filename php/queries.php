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


// if(isset($_POST['limitResult'])){ //IF AMOUNT IS SET
// $limitResult = $_POST['limitResult']; //SET $amount variable equals to AMOUNT INPUT VALUE
// }else { //IF THE AMOUNT IS NOT SET
// 	$limitResult = 1; //SET THE value of $amount to 'Error'
// }


// $sql = 'SELECT * FROM expenses_data';
// $stmt = $pdo->prepare($sql);
// $stmt->execute();
// $expensesCount = $stmt->rowCount();


if(isset($_POST['setPage'])){ //IF AMOUNT IS SET
$setLimit = $_POST['setPage']; //SET $amount variable equals to AMOUNT INPUT VALUE
}else{ //IF THE AMOUNT IS NOT SET
	$setLimit = 0; //SET THE value of $amount to 'Error'
}


$result_limit = 5;


$sql = 'SELECT * FROM expenses_data ORDER BY id DESC LIMIT :setLimit,:result_limit';
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':setLimit', $setLimit, PDO::PARAM_INT);
$stmt->bindParam(':result_limit', $result_limit, PDO::PARAM_INT);
$stmt->execute();
$expenses = $stmt->fetchAll();



// $sql = 'SELECT * FROM expenses_data ORDER BY id DESC LIMIT :result_limit';
// $stmt = $pdo->prepare($sql);
// $stmt->execute(['result_limit'=>$result_limit]);
// $expenses = $stmt->fetchAll();

// $sql = 'SELECT * FROM expenses_data ORDER BY id DESC';
// $stmt = $pdo->prepare($sql);
// $stmt->execute();
// $expenses = $stmt->fetchAll();




echo json_encode($expenses); //CONVERT THE DATA FROM expenses_data table to json format



?>