<?php

class Product 
{

    static $table_columns = Array("*");


    static function productQuery() 
    {
        return new ProductQueries('products');
    }


    static function validate($val) 
    {

        if( $val <= 3 && $val >= 1 ) 
        {
            return true;
        } 
        
        else
        {
            return false;
        }

    }

    static function echoJson( array $arr )
    {
        echo json_encode( $arr );
    }


    static function addProduct( $sku, $name, $price, $size, $typeId ) 
    {

        if( Product::validate( $typeId ) ) 
        {
            $val = array(  $sku, $name, $price, implode( 'x', $size ), $typeId  );

            Product::productQuery()->insert( $val );

            $info = $sku .' has been added';

            Product::echoJson(
                array(
                    'success' => true,
                    'info' => $info
                )
            );
        }

    }

    
    static function deleteProduct(  $arr  ) 
    {
        $column = 'SKU';

        foreach($arr as $elem) 
        {
            Product::productQuery()->delete( $column, "=", $elem );
        };

        $info = count( $arr ) .' item(s) deleted';

        Product::echoJson(
            array(
                'success' => true,
                'info' => $info
            )
            );

    }


    static function displayProduct() 
    {

        $products = Product::productQuery()->fetchData(Product::$table_columns);

        $myArr = array(
            '1' => new DVD,
            '2' => new Book,
            '3' => new Furniture
        );

        $arr = array();

        foreach( $products as $product ) 
        {
            $product['unit'] = $myArr[$product['type_id']]->getUnit();

            $product['measurement'] = $myArr[$product['type_id']]->getMeas();

            $arr[] = $product;
        }

        return Product::echoJson(
            array(
                "type" => "products",
                "items" => $arr
            )
        );

    }


}