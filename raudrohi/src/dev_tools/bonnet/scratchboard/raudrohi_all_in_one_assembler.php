<?php
//------------------------------------------------------------------------
// Copyright (c) 2009, martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or
// without modification, are permitted provided that the following
// conditions are met:
//
// * Redistributions of source code must retain the above copyright
//   notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright
//   notice, this list of conditions and the following disclaimer
//   in the documentation and/or other materials provided with the
//   distribution.
// * Neither the name of the Martin Vahi nor the names of its
//   contributors may be used to endorse or promote products derived
//   from this software without specific prior written permission.
//
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
//------------------------------------------------------------------------
//
// This PHP script reads in the dependency matrix from the 
// raudrohi_inner_dependencies.txt and concatenates the 
// Raudrohi JavaScript library development js-files
// in appropriate order. It depends on PHP5 and 
// the PHP mb_string extension.
//------------------------------------------------------------------------

class raudrohi_all_in_one_assembler {
	/// For debugging.
	public static function add_br(&$txt) {
		return mb_ereg_replace('[\n][\r]|[\n]','<br/>',$txt);
	} // add_br

	private static function file2txt($file_path) {
		$file_handle=fopen($file_path,'r');
		$txt=fread($file_handle,filesize($file_path));
		fclose($file_handle);
		return $txt;
	} // file2txt


	public static function extract_dependency_matrix_PHP_source(
			&$path_to_raudrohi_folder) {
		$txt=raudrohi_all_in_one_assembler::file2txt(
				$path_to_raudrohi_folder.'/src/devel/bonnet/raudrohi_inner_dependencies.txt');

		$pos_start=mb_strpos($txt,'//--PHP5-syntax-compliant-start-1-');
		$pos_end=mb_strpos($txt,'//--PHP5-syntax-compliant-end-1-');
		return mb_substr($txt,$pos_start,($pos_end - $pos_start));
	} // extract_dependency_matrix_PHP_source

	public static function get_vector_of_file_names(&$path_to_raudrohi_folder) {
		$txt=raudrohi_all_in_one_assembler::extract_dependency_matrix_PHP_source(
				$path_to_raudrohi_folder);
		$v=array();
		eval($txt);
		return $v;
	} // get_vector_of_file_names

	public static function get_packaged_javascript_file_name($s_mode='release') {
		$file_name='';
		if ($s_mode=='selftest') {
			$file_name='raudrohi_all_in_one_with_selftests_v19.js';
			return $file_name;
		} // if
		if ($s_mode=='release') {
			$file_name='raudrohi_all_in_one_v19.js';
		} // if
		return $file_name;
	} // get_packaged_javascript_file_name


	public static function assemble($path_to_raudrohi_folder,$s_mode='release') {
		$v=raudrohi_all_in_one_assembler::get_vector_of_file_names(
				$path_to_raudrohi_folder);
		$v2=array_reverse($v);
		$s='';
		//$rp=realpath('.').'/';
		$rp=$path_to_raudrohi_folder.'/src/devel/';
		foreach ($v2 as $fn) {
			$s=$s.raudrohi_all_in_one_assembler::file2txt($rp.$fn);
		} // foreach
		if ($s_mode=='release') {
			// Nothing extra is needed.
		} // if
		if ($s_mode=='selftest') {
			$fn='dev_tools/tmp_/raudrohi_selftests_all_in_one_v19.js';
			$s_full_path=$rp.$fn;
			$s_console_output=shell_exec('ruby -Ku '.$rp.
					'/dev_tools/bonnet/raudrohi_all_selftests_in_one_assembler.rb '.
					$s_full_path);
			$s=$s.raudrohi_all_in_one_assembler::file2txt($s_full_path);
		} // if
		return $s;
	} // assemble
}
// raudrohi_all_in_one_assembler
//echo raudrohi_all_in_one_assembler::add_br(raudrohi_all_in_one_assembler::assemble());
?>
