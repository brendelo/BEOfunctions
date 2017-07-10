function array2csv(array &$array, $filename)
    {
       if(count($array) == 0) {
         return null;
       }
       $path = "exports/";
       if(!is_dir('../'.$path)){
             mkdir('../'.$path);
       }
      
       $dir = '../' . $path . $filename;
       $df = fopen($dir, 'w');
       //define the columns of the table 
       fputcsv($df, array_keys(reset($array)));
       foreach ($array as $row) {
          fputcsv($df, $row);
       }
      
       fclose($df);
        $directory = "<script>window.open('../" . $path . $filename . "');</script>";
		   return $directory;
    }
 ?>
