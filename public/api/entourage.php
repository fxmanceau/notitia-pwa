<?php
    header("Access-Control-Allow-Origin: *");
    $lat = $_GET['lat'];
    $lng = $_GET['lng'];
    $zoom = $_GET['zoom'];

    $result = file_get_contents("https://api.entourage.social/api/v1/pois?latitude=".$lat."&longitude=".$lng."&distance=".$zoom."&category_ids=1%2C2%2C6%2C3");
    echo $result;