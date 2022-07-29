<?php
 include_once 'backend/autoload.php';

 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: GET, POST');
 header('Access-Control-Allow-Headers: Content-Type');

//The if statement below runs when a 'post' request to delete a product is received. it is sends a request to the DataBase to delete a product.

if ( $_SERVER['REQUEST_METHOD'] == 'POST')
{
    if ( isset( $_POST['delete_prod'] ) ) 
    {
       Product::deleteProduct( $_POST['delete_prod'] );
    } 
   
   //The statement below runs when a 'post' request to add a product is received.
   
       elseif ( isset($_POST['sku']) && isset($_POST['name']) && isset($_POST['price']) && isset($_POST['type_id']) ) 
       {
           Product::addProduct( $_POST["sku"], $_POST["name"], $_POST["price"], $_POST["size"], $_POST["type_id"] );
       }
   
}

//This is the default state of the api, it displays the products it fetches from the DataBase.
    else {
        Product::displayProduct();
    }



?>