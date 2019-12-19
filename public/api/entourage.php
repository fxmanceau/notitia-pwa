<?php
    header("Access-Control-Allow-Origin: *");
    $lat = $_GET['lat'];
    $lng = $_GET['lng'];
    $zoom = $_GET['zoom'];
    $categories = $_GET['categories'];

    $result = file_get_contents("https://api.entourage.social/api/v1/pois?latitude=".$lat."&longitude=".$lng."&distance=".$zoom."&category_ids=".$categories."");
    echo $result;