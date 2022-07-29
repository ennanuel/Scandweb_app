<?php

//This class connects to the mysql DataBase.

class Connector 
{
  private $connect;


  function __construct() 
  {
    $this->connect = new mysqli
    (
      'remotemysql.com',
      '60bg0ZAeuK',
      'twbu6a2kZz',
      '60bg0ZAeuK'
    );
  }


//This method connects you to the DataBase.

  public function getConnect() 
  {
      return $this->connect;
  }

  
}