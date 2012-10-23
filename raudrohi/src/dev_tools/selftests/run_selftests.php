<?php
//=========================================================================
// Copyright (c) 2011, martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// All rights reserved.

// Redistribution and use in source and binary forms, with or
// without modification, are permitted provided that the following
// conditions are met:

// * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright
// notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
// * Neither the name of the Martin Vahi nor the names of its
// contributors may be used to endorse or promote products derived
// from this software without specific prior written permission.

// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
// CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
// INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//=========================================================================
$s_fp_raudrohi_home=realpath('./../../../../');
require_once($s_fp_raudrohi_home.'/src/devel/dev_tools/etc/raudrohi_development_configuration.php');
$s_fp_sirel_home=raudrohi_configuration::$s_fp_sirel_home;
$s_fp_kibuvits_home=raudrohi_configuration::$s_fp_kibuvits_home;
$s_devel_username=raudrohi_configuration::$s_devel_username;
// As web server does not have the environment
// variable values readily available, one prepends the env
// initialization to every bash script that uses the envs.
$s_envexport=raudrohi_configuration::$s_envexport;
require_once($s_fp_sirel_home.'/src/sirel_html.php');
require_once($s_fp_sirel_home.'/src/sirel_guid.php');
//=========================================================================
$s_yui_scriptfile_1='http://yui.yahooapis.com/3.0.0b1/build/yui/yui-min.js';
$s_yui_scriptfile_2='http://yui.yahooapis.com/combo?3.0.0/build/yui/yui-min.js&3.0.0/build/oop/oop-min.js&3.0.0/build/event-custom/event-custom-min.js&3.0.0/build/attribute/attribute-min.js&3.0.0/build/pluginhost/pluginhost-min.js&3.0.0/build/base/base-min.js&3.0.0/build/plugin/plugin-min.js&3.0.0/build/loader/loader-min.js&3.0.0/build/json/json-min.js&3.0.0/build/dom/dom-min.js&3.0.0/build/node/node-min.js&3.0.0/build/event/event-min.js&3.0.0/build/datatype/datatype-min.js&3.0.0/build/event-simulate/event-simulate-min.js&3.0.0/build/node/node-event-simulate-min.js&3.0.0/build/node-focusmanager/node-focusmanager-min.js&3.0.0/build/dump/dump-min.js&3.0.0/build/substitute/substitute-min.js&3.0.0/build/queue-promote/queue-promote-min.js&3.0.0/build/io/io-min.js&3.0.0/build/collection/collection-min.js&3.0.0/build/async-queue/async-queue-min.js';
$ob_html=new sirelHTMLPage();
$ob_html->set_title('Raudrohi Selftests');
$ob_html->add_2_ar_javascript($s_yui_scriptfile_1);
$ob_html->add_2_ar_javascript($s_yui_scriptfile_2);
$ob_html->add_2_ar_css('./../../../release/css/raudrohi_v19.css');

$s_fp_2_tmp=$s_fp_raudrohi_home.'/src/devel/dev_tools/tmp_';
$s_fp_2_generated_file=$s_fp_2_tmp.'/raudrohi_all_in_one_with_selftests_v19.js';
$s_fp_aiowst=$s_fp_2_tmp.'/aiowst';
exec('mkdir -p '.$s_fp_aiowst.';');
$s_tmp_raudrohi_js_file_name=sirel_GUID().'_v19.js';

$s_cmd=$s_envexport.'bash '.$s_fp_raudrohi_home.
		'/src/devel/dev_tools/raudrohi_all_in_one_assembler.bash '.
		'assemble_for_raudrohi_selftests ';
exec($s_cmd);

// There's some mystery with the chmod and chown commands.
// The commands just don't work here. It probably has
// something to do with some "security" restrictions 
// at web server configuration.
$s_cmd='cp -f '.$s_fp_2_generated_file.' '.
		$s_fp_aiowst.'/'.$s_tmp_raudrohi_js_file_name.
		' ; chmod -f -R 0777 '.$s_fp_2_generated_file.' '.
		' ; chown -f -R '.$s_devel_username.' '.$s_fp_2_tmp.'/* '.
		' ; chmod -f -R 0755 '.$s_fp_aiowst.' ;';
exec($s_cmd);
$ob_html->add_2_ar_javascript('./../tmp_/aiowst/'.
		$s_tmp_raudrohi_js_file_name);

//-----------------------------------------------------
$s_main_javascript='<script type="text/javascript"> '."\n".
		'            window.application_main_function=function(){'."\n".
		'				if(typeof(raudrohi) === "undefined"){'."\n".
		'					throw "It seems that the raudrohi namespace is not defined. "+'."\n".
		'						"There is a fault in the raudrohi selftests application.";'."\n".
		'				} else {'."\n".
		'					raudrohi.adapter.YUI_create_console();'."\n".
		'					raudrohi.selftests.run_all_selftests();'."\n".
		'				} // else'."\n".
		'            } // application_main_function'."\n".
		''."\n".
		'            window.onload=function(){'."\n".
		'                raudrohi.run(true,window.application_main_function);'."\n".
		'            } // window.onload'."\n".
		'</script>'."\n";
$ob_html->add_2_ar_head_section($s_main_javascript);

$s_warning_1='<p>The current version of this selftests suit is, '.
		'due to some weird bugs, not capable of triggering '.
		'the recompilation of the Raudrohi all-in-one JavaScript file. <br/><br/>'.
		'The compilation can be triggered manually by executing:<br/>'.
		'./raudrohi_all_in_one_assembler.bash assemble_for_raudrohi_selftests ;<br/>'.
		'The good news is that if the CSS files or font includes have '.
		'not been changed, there is no need to empty the browser cache, '.
		'because the current selftests suite handles that part properly.';
$ob_html->add_2_ar_body($s_warning_1);
$s_body_divs=' '.
		'        <div id="output_screen"></div>'."\n".
		'        <div id="for_testing_the_raudrohi_base_selftests_count_child_nodes_recursively" style="visibility:hidden;">'."\n".
		'            div_0_value'."\n".
		'            <div>'."\n".
		'                div_0_0_value'."\n".
		'                <div id="for_testing_the_raudrohi_base_selftests_count_child_nodes_recursively2">'."\n".
		'                    div_0_0_0_value</div>'."\n".
		'                <div>div_0_0_1_value</div>'."\n".
		'                <div></div>'."\n".
		'                <div id="for_testing_the_raudrohi_base_selftests_count_child_nodes_recursively3"></div>'."\n".
		'            </div>'."\n".
		'            <div>div_0_1_value</div>'."\n".
		'        </div>'."\n";
$ob_html->add_2_ar_body($s_body_divs);
$s=$ob_html->to_s();
echo $s

//=========================================================================
?>
