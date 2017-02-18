<?php
header('Access-Control-Allow-Origin: *');

        $db_name  = 'tasks';
        $hostname = 'localhost';
        $username = 'yuallen';
        $password = 'password';


        $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);


        $sql = 'SELECT * FROM login';
        $stmt = $dbh->prepare($sql);
    // execute the query
        $stmt->execute();


        $result = $stmt->fetchAll( PDO::FETCH_ASSOC );


        $json = json_encode( $result );
        echo $json;     
?>