<?php

  class ProductQueries {


    private $conn;

    private $query = '';

    private $run_query;

    private $table_name = '';

    private $fetched_data;


// The constructor creates a MySQL connection using the Connector class.

   function __construct ( $table_name ) 
   {

      $this->table_name = $table_name;

     $this->conn = ( new Connector )->getConnect();

   }
  

  //The method below defines the MySQL select statement

    function select(array $arr) 
    {

      $this->query = 'SELECT ' .implode( ', ', $arr ) .' FROM ' .$this->table_name;

    }
 


  //The method below is used to insert a new row into your MySQL table

     function insert(array $arr) 
     {

       $this->query = 'INSERT INTO ' .$this->table_name .' VALUES ("' .implode('", "', $arr) .'", NULL)';

       return $this->runQuery();

     }


  //The method below is used to delete a row from your MySQL table

    function delete(string $col, string $cond, string $val) 
    {

      $this->query = 'DELETE FROM ' .$this->table_name;

      $this->where( $col, $cond, $val );

      return $this->runQuery();

    }


  //The method below is used to declare a MySQL where statement

    function where(string $col, string $cond, string $val) 
    {

      if($this->query == '') 
      {
        return 'Your Query is empty';
      }

      $this->query .= ' WHERE ' .$col .' ' .$cond .' "' .$val .'"';

    }


  //The method below is used to run your MySQL query

  function runQuery() 
  {
    if ($this->query == '')
    {
      return 'Query is empty';
    }

    else 
    {
      $this->run_query = $this->conn->query($this->query);

      $this->query = '';
    }

      return $this->run_query;

  }


  //The method below is used to fetch data in array form

  function fetchData( array $arr ) 
  {
    $this->fetched_data = array();

    $this->select( $arr );

    $result = $this->runQuery();

    while($row = $result->fetch_assoc()) 
    {

      $this->fetched_data[] = $row;

    }

    return $this->fetched_data;

  }



}