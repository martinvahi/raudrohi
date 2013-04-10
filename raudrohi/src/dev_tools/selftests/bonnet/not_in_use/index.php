<?php

//=========================================================================
// Author: martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// This file is in public domain.
//=========================================================================
$application_root = realpath('./');
$s_path_lib_sirel = realpath($application_root . '/bonnet/sirel');

define('s_path_lib_sirel', $s_path_lib_sirel);  // A compulsory step.
// In practice one should include only those parts of
// the Sirel that one needs, but the sirel.php includes
// the whole Sirel PHP library.
//require_once($s_path_lib_sirel.'/src/sirel.php');
require_once($s_path_lib_sirel . '/src/sirel_fs.php');

// The next line is compulsory:
sirelSiteConfig::$various['application_root'] = $application_root;

$s_cmd = 'cd ' . $application_root . '/../; `which bash` ./rake.bash ti  ' . "\n";
exec($s_cmd);
sleep(1);
$s_file_path = $application_root . '/index.html';
$s_html = sirelFS::file2str($s_file_path);
echo($s_html);
//=======================================================================
?>
