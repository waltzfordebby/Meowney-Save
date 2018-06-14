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



$sql = 'SELECT SUM(amount) AS amount_total FROM expenses_data'; // SELECT amount from expenses_data ang get the sum of amount and set it to amount_total
$stmt = $pdo->prepare($sql); //Prepare the query
$stmt->execute(); //Execute the query

$sum = $stmt->fetchAll(); //Set all the fetch data to sum

echo json_encode($sum); //CONVERT THE SUM TO  json format

