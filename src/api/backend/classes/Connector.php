<?php

//This class connects to the mysql DataBase.

class Connector 
{
  private $connect;


  function __construct() 
  {
    $this->connect = new mysqli
    (
      'localhost',
      'id19243169_ennanuel',
      'k$]UOJ\WYF[TLK5b',
      'id19243169_product'
    );
  }


//This method connects you to the DataBase.

  public function getConnect() 
  {
      return $this->connect;
  }

  
}