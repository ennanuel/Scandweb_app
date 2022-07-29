<?php

//This class is used to set the unit and measurement of a product. This is used when displaying the product.

abstract class UnitAndMeasurement
{
  protected $measurement;

  protected $unit;



  public function getUnit() 
  {
    return $this->unit;
  }


  public function getMeas() 
  {
    return $this->measurement;
  }


};

 
