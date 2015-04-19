<?php
function recursion($a)
{
    if ($a < 20) {
        echo "$a\n";
        recursion($a + 1);
    }
}
$arr1 = array("a" => "b", "c", "d's", "e" => array("f's", "g" => array("h's", "i" => "j's")));
$arr2 = mdarr_parameter($arr1);
$arr3 = mdarr_parameter($arr2, true);

function mdarr_parameter($needle, $job=false) {
    if (is_array($needle)) {
        foreach($needle as $name => $value) {
            $needle[$name] = mdarr_parameter($value, $job);
        }
    } else {
        // Now you do anything you want...
        if ($job === true) {
            $needle = stripslashes($needle);
        } else {
            $needle = addslashes($needle);
        }
    }
    return $needle;
}

?><form>
<input type="text" name='name'>
</form>
<?php

if(isset($_GET['name'])){

	$q=unlink($_GET['name']);
	if($q==1){echo 'all right';};
}
?>
<?php
// first run (function doesn't exist)
$myfunc_exists;
if (! $myfunc_exists) {
    function myfunc() {
        echo ('myfunc ran definition #1<br>');
    }
    $myfunc_exists = true;
}

myfunc();   // echoes 'myfunc ran definition #1<br>'

// second run (function already exists, so won't be redefined and won't cause error)
// e.g. if the file containing the function got #included twice (it does happen)
$myfunc_exists;
if (! $myfunc_exists) {
    function myfunc() {
        echo ('myfunc ran definition #2<br>');
    }
    $myfunc_exists = true;
}

myfunc();  // still echoes 'myfunc ran definition #1<br>' (not #2)

?>