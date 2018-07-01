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

$result_limit = 5;

$sql = 'SELECT * FROM expenses_data';
$stmt = $pdo->prepare($sql);
$stmt->execute();
$expensesCount = $stmt->rowCount();




// $sql = 'SELECT * FROM expenses_data ORDER BY id DESC LIMIT :result_limit';
// $stmt = $pdo->prepare($sql);
// $stmt->execute(['result_limit'=>$result_limit]);
// $expenses = $stmt->fetchAll();

$sql = 'SELECT * FROM expenses_data ORDER BY id DESC';
$stmt = $pdo->prepare($sql);
$stmt->execute();
$expenses = $stmt->fetchAll();





echo json_encode($expenses); //CONVERT THE DATA FROM expenses_data table to json format



?>