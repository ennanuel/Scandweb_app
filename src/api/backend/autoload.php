<?php

//The funtion below is used for autoloading the php classes in the 'classes' and 'product_types' folder.

function autoload($class) 
{

    //This array contains strings that represent the folder of every class file we have.

    $paths = array(
        'classes',
        'classes/product_types'
    );

    //This loops through each string in the array and creates a file path out of it and the includes the file path.
    
    foreach($paths as $path)
    {
        $file_path = sprintf('backend/%s/%s.php', $path, $class);

        if(is_file($file_path))
        {
            include_once $file_path;
        }

    }
}

spl_autoload_register('autoload');