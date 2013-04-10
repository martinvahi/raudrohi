<?php
//=========================================================================
// Copyright 2010, martin.vahi@softf1.com that has an
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
//=========================================================================

// Many, but not necessarily all, of the functoions
// in this class are copy-pasted from the Sirel PHP
// library and then edited slightly to get rid of
// Sirel related dependencies.
//
// The reason for this is to make it possible to
// develop Raudrohi without even starting to tinkle
// with the Sirel. It's just to reduce dependencies.
// If the amount of Sirel originating PHP gets "too big",
// then one refactors the code so that the Sirel
// is used in stead of the copy-pasted functions. Meanwhile
// one can enjoy some lightness. :-)
class raudrohi_phpfuncbunch_1 {

	// Always returns an UTF-8. It throws an exception, if
	// the file does not exist.
	public static function file2str($s_file_path) {
		try {
			if (!file_exists($s_file_path)) {
				throw(new Exception('A File or a folder with the path of "'.
						$s_file_path.'" does not exist.'));
			} // if
			if (is_dir($s_file_path)) {
				throw(new Exception('"'.$s_file_path.'" is a folder, but '.
						'a file is required.'));
			} // if
			$file_handle = fopen($s_file_path, "rb"); // b for Windows.
			$s_raw=fread($file_handle, filesize($s_file_path));
			fclose($file_handle);
			$s_out=utf8_encode($s_raw);
			return $s_out;
		}catch (Exception $err_exception) {
			throw(new Exception(''.__FILE__.'  '.__FUNCTION__.''));
		} // catch
	} // file2str

	private function str2file(&$s_file_content,$s_file_path) {
		try {
			if (file_exists($s_file_path)) {
				if (is_dir($s_file_path)) {
					throw(new Exception('"'.$s_file_path.'" is a folder, but '.
							'only a file is allowed to be overwritten.'));
				} // if
			} // if
			//$s=utf8_encode($s_file_content);
			// The following code is partly copy/pasted from:
			// http://bytes.com/topic/php/answers/497802-utf-8-file-reading-writing-php
			$file_handle = fopen($s_file_path, "wb+");
			fwrite($file_handle, $s_file_content);
			fclose($file_handle);
		}catch (Exception $err_exception) {
			throw(new Exception(''.__FILE__.'  '.__FUNCTION__.''));
		} // catch
	} // str2file


	// It always retunrs an array of folder element paths, but
	// the array may also be empty. It throws an exception, if
	// the folder does not exist.
	public  static function ls($s_path_to_a_folder) {
		try {
			if (!file_exists($s_path_to_a_folder)) {
				throw(new Exception('A folder with a path of "'.
						$s_path_to_a_folder.'" does not exist.'));
			} // if
			if (!is_dir($s_path_to_a_folder)) {
				throw(new Exception('"'.$s_path_to_a_folder.'" is a file, but '.
						'a folder is required.'));
			} // if
			$ar_out=array();
			$b_go_on=True;
			$dir_handle=opendir($s_path_to_a_folder);
			$x=NULL;
			while ($b_go_on===True) {
				$x=readdir($dir_handle);
				if ($x===False) {
					$b_go_on=False;
				} else {
					if (($x!==0)&&($x!=='')) {
						if (($x!=='..')&&($x!=='.')) {
							array_push($ar_out,$x);
						} // if
					} // if
				} // else
			} // if
			closedir($dir_handle);
			return $ar_out;
		}catch (Exception $err_exception) {
			throw(new Exception(''.__FILE__.'  '.__FUNCTION__.''));
		} // catch
	} // ls

} // class raudrohi_phpfuncbunch_1

?>
