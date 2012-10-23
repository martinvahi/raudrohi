//=========================================================================
// Copyright (c) 2011, martin.vahi@softf1.com that has an
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
//
//=========================================================================

if(window.raudrohi_lang_selftests_exists!==true){
	raudrohi.lang.selftests={};
	window.raudrohi_lang_selftests_exists=true;
} // if

//-------------------------------------------------------------------------
try{
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.ProgFTE2ht);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.generate_nonexisting_needle);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.str2lines);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.number2str);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.is_a_hexadecimal_number);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.fill_form);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.queueCache);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.str2regexstr);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.ar2xseparated_list);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.normalize_linebreaks);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.word_wrap);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.word_wrap_with_normalization_t1);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.get_from_ht_by_array_of_keys_index);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.cg_table_t1);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.s_dec2hex);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.i_hex2dec);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.lang.selftests.i_number_of_digits);
} catch (err){
	raudrohi.tmg('d2180450-27ac-4684-8111-334380b0abd7',
		'Usually if things throw here, then it is because it is '+
		'in global namespace and the onload mehtod has '+
		'not been loaded yet.'+err);
} // catch

//-------------------------------------------------------------------------
raudrohi.lang.selftests.is_an_HTML_color=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		if(raudrohi.lang.is_an_HTML_color('#ff00ff')!==true){
			ar_failed_tests.push('#ff00ff');
		} // if
		if(raudrohi.lang.is_an_HTML_color('Af00ff')===true){
			ar_failed_tests.push('Af00ff');
		} // if
		if(raudrohi.lang.is_an_HTML_color('#Xf00ff')===true){
			ar_failed_tests.push('#Xf00ff');
		} // if
		if(raudrohi.lang.is_an_HTML_color('#0f00ffe')===true){
			ar_failed_tests.push('#0f00ffe');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.is_an_HTML_color');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('94d26f55-424a-4e5d-8a01-334380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.is_an_HTML_color
raudrohi.selftests.ar_tests_1.push(
	raudrohi.lang.selftests.is_an_HTML_color);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.is_a_whole_number_x_or_s=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		if(raudrohi.lang.is_a_whole_number_x_or_s('ff')!==false){
			ar_failed_tests.push('ff');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('')!==false){
			ar_failed_tests.push('emptystring');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s(' ')!==false){
			ar_failed_tests.push('a_space');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('1 2')!==false){
			ar_failed_tests.push('1a_space2');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('1.9')!==false){
			ar_failed_tests.push('1.9');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('1,9')!==false){
			ar_failed_tests.push('1,9');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('0.0')!==false){
			ar_failed_tests.push('0.0');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('0')!==true){
			ar_failed_tests.push('0 as a string');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('000')!==true){
			ar_failed_tests.push('000');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('0,0')!==false){
			ar_failed_tests.push('0,0');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('0a0')!==false){
			ar_failed_tests.push('0a0');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('9x9')!==false){
			ar_failed_tests.push('9x9');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('9 ')!==false){
			ar_failed_tests.push('9a_space');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('  9')!==false){
			ar_failed_tests.push('double_space9');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('	')!==false){
			ar_failed_tests.push('a_tab');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s("1\n2")!==false){
			ar_failed_tests.push('1linesbreak2');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s('123')!==true){
			ar_failed_tests.push('123');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s(0)!==true){
			ar_failed_tests.push('0 as a Number');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s(124)!==true){
			ar_failed_tests.push('124 as a Number');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s(122.7)!==false){
			ar_failed_tests.push('122.7 as a Number');
		} // if
		if(raudrohi.lang.is_a_whole_number_x_or_s(125.0)!==true){
			// This tests the fact that JavaScript
			// whole numbers are stored as doubles.
			ar_failed_tests.push('125.0 as a Number');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.is_a_whole_number_x_or_s');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	}
	catch (err){
		raudrohi.tmg('b81dc245-2ba4-461f-8901-334380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.is_a_whole_number_x_or_s
raudrohi.selftests.ar_tests_1.push(
	raudrohi.lang.selftests.is_a_whole_number_x_or_s);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.is_a_whole_number=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		if(raudrohi.lang.is_a_whole_number('42')!==false){
			ar_failed_tests.push('42 as a string');
		} // if
		if(raudrohi.lang.is_a_whole_number(72)!==true){
			ar_failed_tests.push('72 as a Number');
		} // if
		try{
			raudrohi.lang.assert_is_a_whole_number(4442, '4442',
				'f8ed5937-61ac-4453-a501-334380b0abd7');
		} catch (err){
			ar_failed_tests.push('4442 as a Number. err=='+err);
		} // catch
		try{
			raudrohi.lang.assert_is_a_whole_number(4445.7, '4445.7',
				'9bb9aa32-c9a2-4e21-9501-334380b0abd7');
			ar_failed_tests.push('4445.7 as a Number');
		}
		catch (err){
		} // catch
		try{
			raudrohi.lang.assert_is_a_whole_number('43', '4445.7',
				'266e7334-5ef3-41b1-8401-334380b0abd7');
			ar_failed_tests.push('43 as a String');
		} catch (err){
		} // catch
		try{
			raudrohi.lang.assert_is_a_whole_number('47.2', '4445.7',
				'76e14211-67d9-469a-8401-334380b0abd7');
			ar_failed_tests.push('47.2 as a String');
		} catch (err){
		} // catch
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.is_a_whole_number');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('545bfe40-f447-4eff-b501-334380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.is_a_whole_number
raudrohi.selftests.ar_tests_1.push(
	raudrohi.lang.selftests.is_a_whole_number);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.ar_interpolate=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var i=0;
		var fd_x1=42.3;
		var fd_x2=57.2;
		var ar_x=null;
		var fd_min=0;
		var fd_max=3;
		var i_maximum_number_of_intermittant_numbers=2;
		var b_use_integer_mode=true;
		//------
		fd_x1=42.3;
		fd_min=fd_x1;
		fd_max=fd_x1;
		b_use_integer_mode=false;
		ar_x=raudrohi.lang.ar_interpolate(fd_min,fd_max,
			i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		i=ar_x.length;
		if(i!==1){
			ar_failed_tests.push('test 1.1, ar_x.length=='+i);
		} // if
		fd_x2=ar_x[0];
		if(fd_x2!==fd_x1){
			ar_failed_tests.push('test 1.2, fd_x2=='+fd_x2);
		} // if
		//------
		fd_min=1;
		fd_max=44.7;
		i_maximum_number_of_intermittant_numbers=0;
		b_use_integer_mode=false;
		ar_x=raudrohi.lang.ar_interpolate(fd_min,fd_max,
			i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		i=ar_x.length;
		if(i!==2){
			ar_failed_tests.push('test 2.1, ar_x.length=='+i);
		} // if
		fd_x2=ar_x[0];
		if(fd_x2!==fd_min){
			ar_failed_tests.push('test 2.2, fd_x2=='+fd_x2);
		} // if
		fd_x2=ar_x[1];
		if(fd_x2!==fd_max){
			ar_failed_tests.push('test 2.3, fd_x2=='+fd_x2);
		} // if
		//------
		fd_min=1;
		fd_max=44.7;
		i_maximum_number_of_intermittant_numbers=1;
		b_use_integer_mode=false;
		ar_x=raudrohi.lang.ar_interpolate(fd_min,fd_max,
			i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		i=ar_x.length;
		if(i!==3){
			ar_failed_tests.push('test 3.1, ar_x.length=='+i);
		} // if
		fd_x2=ar_x[0];
		if(fd_x2!==fd_min){
			ar_failed_tests.push('test 3.2, fd_x2=='+fd_x2);
		} // if
		fd_x2=ar_x[1];
		if((fd_x2===fd_min)||(fd_x2===fd_max)){
			ar_failed_tests.push('test 3.3, fd_x2=='+fd_x2);
		} // if
		fd_x2=ar_x[2];
		if(fd_x2!==fd_max){
			ar_failed_tests.push('test 3.4, fd_x2=='+fd_x2);
		} // if
		//------
		fd_min=(-1.44);
		fd_max=(-0.0001);
		i_maximum_number_of_intermittant_numbers=1;
		b_use_integer_mode=false;
		ar_x=raudrohi.lang.ar_interpolate(fd_min,fd_max,
			i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		i=ar_x.length;
		if(i!==3){
			ar_failed_tests.push('test 4.1, ar_x.length=='+i);
		} // if
		fd_x2=ar_x[0];
		if(fd_x2!==fd_min){
			ar_failed_tests.push('test 4.2, fd_x2=='+fd_x2);
		} // if
		fd_x2=ar_x[1];
		if((fd_x2===fd_min)||(fd_x2===fd_max)){
			ar_failed_tests.push('test 4.3, fd_x2=='+fd_x2);
		} // if
		if(fd_max<=fd_x2){
			ar_failed_tests.push('test 4.4, fd_x2=='+fd_x2);
		} // if
		if(fd_x2<=fd_min){
			ar_failed_tests.push('test 4.5, fd_x2=='+fd_x2);
		} // if
		fd_x2=ar_x[2];
		if(fd_x2!==fd_max){
			ar_failed_tests.push('test 4.6, fd_x2=='+fd_x2);
		} // if
		//------
		fd_min=1;
		fd_max=fd_min;
		i_maximum_number_of_intermittant_numbers=1;
		b_use_integer_mode=false;
		ar_x=raudrohi.lang.ar_interpolate(fd_min,fd_max,
			i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		i=ar_x.length;
		if(i!==1){
			ar_failed_tests.push('test 5.1, ar_x.length=='+i);
		} // if
		fd_x2=ar_x[0];
		if(fd_x2!==fd_min){
			ar_failed_tests.push('test 5.2, fd_x2=='+fd_x2);
		} // if
		//------
		//---------------whole-number-mode-tests--start----
		fd_min=1;
		fd_max=fd_min;
		i_maximum_number_of_intermittant_numbers=9999;
		b_use_integer_mode=true;
		ar_x=raudrohi.lang.ar_interpolate(fd_min,fd_max,
			i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		i=ar_x.length;
		if(i!==1){
			ar_failed_tests.push('test 6.1, ar_x.length=='+i);
		} // if
		fd_x2=ar_x[0];
		if(fd_x2!==fd_min){
			ar_failed_tests.push('test 6.2, fd_x2=='+fd_x2);
		} // if
		//------
		fd_min=1;
		fd_max=2;
		i_maximum_number_of_intermittant_numbers=9999;
		b_use_integer_mode=true;
		ar_x=raudrohi.lang.ar_interpolate(fd_min,fd_max,
			i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		i=ar_x.length;
		if(i!==2){
			ar_failed_tests.push('test 7.1, ar_x.length=='+i);
		} // if
		fd_x2=ar_x[0];
		if(fd_x2!==fd_min){
			ar_failed_tests.push('test 7.2, fd_x2=='+fd_x2);
		} // if
		fd_x2=ar_x[1];
		if(fd_x2!==fd_max){
			ar_failed_tests.push('test 7.3, fd_x2=='+fd_x2);
		} // if
		if(ar_x[0]===ar_x[1]){
			ar_failed_tests.push('test 7.4');
		} // if
		//------
		fd_min=1;
		fd_max=3;
		i_maximum_number_of_intermittant_numbers=9999;
		b_use_integer_mode=true;
		ar_x=raudrohi.lang.ar_interpolate(fd_min,fd_max,
			i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		i=ar_x.length;
		if(i!==3){
			ar_failed_tests.push('test 8.1, ar_x.length=='+i);
		} // if
		fd_x2=ar_x[0];
		if(fd_x2!==1){
			ar_failed_tests.push('test 8.2, fd_x2=='+fd_x2);
		} // if
		fd_x2=ar_x[1];
		if(fd_x2!==2){
			ar_failed_tests.push('test 8.3, fd_x2=='+fd_x2);
		} // if
		fd_x2=ar_x[2];
		if(fd_x2!==3){
			ar_failed_tests.push('test 8.4, fd_x2=='+fd_x2);
		} // if
		//------
		fd_min=1;
		fd_max=999;
		i_maximum_number_of_intermittant_numbers=5;
		b_use_integer_mode=true;
		ar_x=raudrohi.lang.ar_interpolate(fd_min,fd_max,
			i_maximum_number_of_intermittant_numbers,b_use_integer_mode);
		i=ar_x.length;
		if(i!==(i_maximum_number_of_intermittant_numbers+2)){
			ar_failed_tests.push('test 9.1, ar_x.length=='+i);
		} // if
		fd_x2=ar_x[0];
		if(fd_x2!==fd_min){
			ar_failed_tests.push('test 9.2, fd_x2=='+fd_x2);
		} // if
		fd_x2=ar_x[i_maximum_number_of_intermittant_numbers+1];
		if(fd_x2!==fd_max){
			ar_failed_tests.push('test 9.3, fd_x2=='+fd_x2);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.ar_interpolate');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('467f7e52-073e-488c-8201-334380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.ar_interpolate
raudrohi.selftests.ar_tests_1.push(
	raudrohi.lang.selftests.ar_interpolate);


//-------------------------------------------------------------------------
raudrohi.lang.selftests.comparison_goe_number=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var a;
		var b;
		//------
		a=3;
		b=4;
		if(raudrohi.lang.comparison.goe.number(a,b)!==true){
			ar_failed_tests.push('test 1, a=='+a+' b=='+b);
		} // if
		//------
		a=(-3);
		b=(-3);
		if(raudrohi.lang.comparison.goe.number(a,b)!==true){
			ar_failed_tests.push('test 2, a=='+a+' b=='+b);
		} // if
		//------
		a=0.01;
		b=0.02;
		if(raudrohi.lang.comparison.goe.number(a,b)!==true){
			ar_failed_tests.push('test 3, a=='+a+' b=='+b);
		} // if
		//------
		a=4.00001;
		b=4;
		if(raudrohi.lang.comparison.goe.number(a,b)!==false){
			ar_failed_tests.push('test 4, a=='+a+' b=='+b);
		} // if
		//------
		a=3;
		b=(-4);
		if(raudrohi.lang.comparison.goe.number(a,b)!==false){
			ar_failed_tests.push('test 5, a=='+a+' b=='+b);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.comparison_goe_number');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	}
	catch (err){
		raudrohi.tmg('5923c423-5311-4ea3-9401-334380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.comparison_goe_number
raudrohi.selftests.ar_tests_1.push(
	raudrohi.lang.selftests.comparison_goe_number);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.ar_clone_array=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var ar_in=null;
		var ar_x=null;
		var i=null;
		var s_x=null;
		//------
		ar_in=['aa','bb'];
		ar_x=raudrohi.lang.ar_clone_array(ar_in);
		ar_x.pop();
		i=ar_x.length;
		if(i!==1){
			ar_failed_tests.push('test 1, i=='+i);
		} // if
		i=ar_in.length;
		if(i!==2){ // ar_x.pop() must not modify the ar_in
			ar_failed_tests.push('test 2, i=='+i);
		} // if
		s_x=ar_x[0];
		if(s_x!=='aa'){ // order of elements in the clone
			ar_failed_tests.push('test 3, s_x=='+s_x);
		} // if
		// The cloning must not modify the content of the original.
		s_x=ar_in[0];
		if(s_x!=='aa'){
			ar_failed_tests.push('test 4, s_x=='+s_x);
		} // if
		s_x=ar_in[1];
		if(s_x!=='bb'){
			ar_failed_tests.push('test 5, s_x=='+s_x);
		} // if
		//------
		ar_in=new Array();
		ar_x=raudrohi.lang.ar_clone_array(ar_in);
		i=ar_x.length;
		if(i!==0){ // The cloning of an empty array
			ar_failed_tests.push('test 6, i=='+i);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.ar_clone_array');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('36d04fa1-e730-4bed-b501-334380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.ar_clone_array
raudrohi.selftests.ar_tests_1.push(
	raudrohi.lang.selftests.ar_clone_array);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.comparison_equals=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var func_comparison=raudrohi.lang.comparison.goe.number;
		var a=null;
		var b=null;
		//------
		a=4;
		b=4;
		if(raudrohi.lang.comparison.equals(a,b,func_comparison)!==true){
			ar_failed_tests.push('test 1, a=='+a+' b=='+b);
		} // if
		//------
		a=4.3;
		b=4;
		if(raudrohi.lang.comparison.equals(a,b,func_comparison)!==false){
			ar_failed_tests.push('test 2, a=='+a+' b=='+b);
		} // if
		//------
		a=3.0;
		b=4;
		if(raudrohi.lang.comparison.equals(a,b,func_comparison)!==false){
			ar_failed_tests.push('test 3, a=='+a+' b=='+b);
		} // if
		//------
		a=0;
		b=0;
		if(raudrohi.lang.comparison.equals(a,b,func_comparison)!==true){
			ar_failed_tests.push('test 4, a=='+a+' b=='+b);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.comparison_equals');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('566ed334-b6d9-4fb9-b101-334380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.comparison_equals
raudrohi.selftests.ar_tests_1.push(
	raudrohi.lang.selftests.comparison_equals);


//-------------------------------------------------------------------------
raudrohi.lang.selftests.sort=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var func_comparison=raudrohi.lang.comparison.goe.number;
		var ar_in=null;
		var ar_x=null;
		var ar_x1=null;
		var ar_expected=null;
		var ar_comparison_funcs=null;
		var i=null;
		//------
		ar_x=raudrohi.lang.sort([7,2,5,9],func_comparison,
			'ascending',true);
		i=ar_x.length
		if(i!==4){
			ar_failed_tests.push('test 1, i=='+i);
		} // if
		i=ar_x[0];
		if(i!==2){
			ar_failed_tests.push('test 2, i=='+i);
		} // if
		i=ar_x[1];
		if(i!==5){
			ar_failed_tests.push('test 3, i=='+i);
		} // if
		i=ar_x[2];
		if(i!==7){
			ar_failed_tests.push('test 4, i=='+i);
		} // if
		i=ar_x[3];
		if(i!==9){
			ar_failed_tests.push('test 5, i=='+i);
		} // if
		//------
		ar_in=new Array();
		ar_in.push([ 4, 5 ]);
		ar_in.push([ 5, 7 ]);
		ar_in.push([ 4, 6 ]);
		ar_in.push([ 3, 1 ]);
		ar_in.push([ 4, 3 ]);
		ar_in.push([ 5, 7 ]);
		ar_in.push([ 5, 8 ]);
		ar_in.push([ 3, 0 ]);
		ar_in.push([ 5, 3 ]);

		ar_expected=new Array();
		ar_expected.push([ 3, 0 ]);
		ar_expected.push([ 3, 1 ]);
		ar_expected.push([ 4, 3 ]);
		ar_expected.push([ 4, 5 ]);
		ar_expected.push([ 4, 6 ]);
		ar_expected.push([ 5, 3 ]);
		ar_expected.push([ 5, 7 ]);
		ar_expected.push([ 5, 7 ]);
		ar_expected.push([ 5, 8 ]);

		ar_comparison_funcs=[func_comparison,func_comparison];

		ar_x=raudrohi.lang.sort(ar_in,ar_comparison_funcs,
			'ascending',true);
		i=ar_x.length
		if(i!==9){
			ar_failed_tests.push('test 6, i=='+i);
		} // if
		ar_x1=ar_x[0];
		if((ar_x1[0]!==ar_expected[0][0])||(ar_x1[1]!==ar_expected[0][1])){
			ar_failed_tests.push('test 7, ar_x1[0]=='+ar_x1[0]+
				' ar_x1[1]=='+ar_x1[1]);
		} // if
		ar_x1=ar_x[1];
		if((ar_x1[0]!==ar_expected[1][0])||(ar_x1[1]!==ar_expected[1][1])){
			ar_failed_tests.push('test 8, ar_x1[0]=='+ar_x1[0]+
				' ar_x1[1]=='+ar_x1[1]);
		} // if
		ar_x1=ar_x[2];
		if((ar_x1[0]!==ar_expected[2][0])||(ar_x1[1]!==ar_expected[2][1])){
			ar_failed_tests.push('test 9, ar_x1[0]=='+ar_x1[0]+
				' ar_x1[1]=='+ar_x1[1]);
		} // if
		ar_x1=ar_x[3];
		if((ar_x1[0]!==ar_expected[3][0])||(ar_x1[1]!==ar_expected[3][1])){
			ar_failed_tests.push('test 10, ar_x1[0]=='+ar_x1[0]+
				' ar_x1[1]=='+ar_x1[1]);
		} // if
		ar_x1=ar_x[4];
		if((ar_x1[0]!==ar_expected[4][0])||(ar_x1[1]!==ar_expected[4][1])){
			ar_failed_tests.push('test 11, ar_x1[0]=='+ar_x1[0]+
				' ar_x1[1]=='+ar_x1[1]);
		} // if
		ar_x1=ar_x[5];
		if((ar_x1[0]!==ar_expected[5][0])||(ar_x1[1]!==ar_expected[5][1])){
			ar_failed_tests.push('test 12, ar_x1[0]=='+ar_x1[0]+
				' ar_x1[1]=='+ar_x1[1]);
		} // if
		ar_x1=ar_x[6];
		if((ar_x1[0]!==ar_expected[6][0])||(ar_x1[1]!==ar_expected[6][1])){
			ar_failed_tests.push('test 13, ar_x1[0]=='+ar_x1[0]+
				' ar_x1[1]=='+ar_x1[1]);
		} // if
		ar_x1=ar_x[7];
		if((ar_x1[0]!==ar_expected[7][0])||(ar_x1[1]!==ar_expected[7][1])){
			ar_failed_tests.push('test 14, ar_x1[0]=='+ar_x1[0]+
				' ar_x1[1]=='+ar_x1[1]);
		} // if
		ar_x1=ar_x[8];
		if((ar_x1[0]!==ar_expected[8][0])||(ar_x1[1]!==ar_expected[8][1])){
			ar_failed_tests.push('test 15, ar_x1[0]=='+ar_x1[0]+
				' ar_x1[1]=='+ar_x1[1]);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.sort');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('6416ac66-dc26-47a8-82f0-334380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.sort
raudrohi.selftests.ar_tests_1.push(
	raudrohi.lang.selftests.sort);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.ar_scale_number_of_frames=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var ar_in=null;
		var ar_x=null;
		var i_x=null;
		var i=null;
		var i_target_length=null;
		//------
		ar_in=[99];
		i_target_length=3;
		ar_x=raudrohi.lang.ar_scale_number_of_frames(ar_in,i_target_length);
		i=ar_x.length
		if(i!==i_target_length){
			ar_failed_tests.push('test 1, ar_x.length=='+i);
		} // if
		if((ar_x[0]!==99)||(ar_x[1]!==99)||(ar_x[2]!==99)){
			ar_failed_tests.push('test 2, ar_x[0]=='+ar_x[0]+
				' ar_x[1]=='+ar_x[1]+' ar_x[2]=='+ar_x[2]);
		} // if
		//------
		ar_in=[72,23];
		i_target_length=3;
		ar_x=raudrohi.lang.ar_scale_number_of_frames(ar_in,i_target_length);
		i=ar_x.length
		if(i!==i_target_length){
			ar_failed_tests.push('test 3, ar_x.length=='+i);
		} // if
		if((ar_x[0]!==72)||(ar_x[1]!==72)||(ar_x[2]!==23)){
			ar_failed_tests.push('test 4, ar_x[0]=='+ar_x[0]+
				' ar_x[1]=='+ar_x[1]+' ar_x[2]=='+ar_x[2]);
		} // if
		//------
		ar_in=[7,9,11];
		i_target_length=5;
		ar_x=raudrohi.lang.ar_scale_number_of_frames(ar_in,i_target_length);
		i=ar_x.length
		if(i!==i_target_length){
			ar_failed_tests.push('test 5, ar_x.length=='+i);
		} // if
		if((ar_x[0]!==7)||(ar_x[1]!==7)||(ar_x[2]!==9)||(ar_x[3]!==9)||(ar_x[4]!==11)){
			ar_failed_tests.push('test 6, ar_x[0]=='+ar_x[0]+
				' ar_x[1]=='+ar_x[1]+' ar_x[2]=='+ar_x[2]+
				' ar_x[3]=='+ar_x[3]+' ar_x[4]=='+ar_x[4]);
		} // if
		//------
		ar_in=[4];
		i_target_length=1;
		ar_x=raudrohi.lang.ar_scale_number_of_frames(ar_in,i_target_length);
		i=ar_x.length
		if(i!==i_target_length){
			ar_failed_tests.push('test 7, ar_x.length=='+i);
		} // if
		if((ar_x[0]!==4)){
			ar_failed_tests.push('test 8, ar_x[0]=='+ar_x[0]);
		} // if
		//------
		ar_in=[43,9];
		i_target_length=1;
		ar_x=raudrohi.lang.ar_scale_number_of_frames(ar_in,i_target_length);
		i=ar_x.length
		if(i!==i_target_length){
			ar_failed_tests.push('test 9, ar_x.length=='+i);
		} // if
		if((ar_x[0]!==43)){
			ar_failed_tests.push('test 10, ar_x[0]=='+ar_x[0]);
		} // if
		//------
		ar_in=[45,13,22];
		i_target_length=2;
		ar_x=raudrohi.lang.ar_scale_number_of_frames(ar_in,i_target_length);
		i=ar_x.length
		if(i!==i_target_length){
			ar_failed_tests.push('test 11, ar_x.length=='+i);
		} // if
		if((ar_x[0]!==45)||(ar_x[1]!==22)){
			ar_failed_tests.push('test 12, ar_x[0]=='+ar_x[0]+
				' ar_x[1]=='+ar_x[1]);
		} // if
		//------
		ar_in=[42,14];
		i_target_length=2;
		ar_x=raudrohi.lang.ar_scale_number_of_frames(ar_in,i_target_length);
		i=ar_x.length
		if(i!==i_target_length){
			ar_failed_tests.push('test 13, ar_x.length=='+i);
		} // if
		if((ar_x[0]!==42)||(ar_x[1]!==14)){
			ar_failed_tests.push('test 14, ar_x[0]=='+ar_x[0]+
				' ar_x[1]=='+ar_x[1]);
		} // if
		//------
		ar_in=[41,13,22,72,44,24,55,62,62];
		i_target_length=3;
		ar_x=raudrohi.lang.ar_scale_number_of_frames(ar_in,i_target_length);
		i=ar_x.length
		if(i!==i_target_length){
			ar_failed_tests.push('test 15, ar_x.length=='+i);
		} // if
		if((ar_x[0]!==41)||(ar_x[1]!==44)||(ar_x[2]!==62)){
			ar_failed_tests.push('test 16, ar_x[0]=='+ar_x[0]+
				' ar_x[1]=='+ar_x[1]+' ar_x[2]=='+ar_x[2]);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.ar_scale_number_of_frames');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('5f3a66e5-3276-4d41-a1f0-334380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.ar_scale_number_of_frames
raudrohi.selftests.ar_tests_1.push(
	raudrohi.lang.selftests.ar_scale_number_of_frames);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.s_num2s_with_leading_zero_normalization=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s_x=null;
		var i_x=null;
		var i_number_of_characters=null;
		var i_base=16;
		//------
		var i_base=16;
		i_x=0;
		i_number_of_characters=2;
		s_x=raudrohi.lang.s_num2s_with_leading_zero_normalization(
			i_x,i_base,i_number_of_characters);
		if(s_x!=='00'){
			ar_failed_tests.push('test 1, i_x=='+i_x+
				' i_number_of_characters=='+i_number_of_characters+
				' s_x=='+s_x+' i_base=='+i_base);
		} // if
		//------
		var i_base=16;
		i_x=255;
		i_number_of_characters=2;
		s_x=raudrohi.lang.s_num2s_with_leading_zero_normalization(
			i_x,i_base,i_number_of_characters);
		if(s_x!=='ff'){
			ar_failed_tests.push('test 2, i_x=='+i_x+
				' i_number_of_characters=='+i_number_of_characters+
				' s_x=='+s_x+' i_base=='+i_base);
		} // if
		//------
		var i_base=16;
		i_x=10;
		i_number_of_characters=2;
		s_x=raudrohi.lang.s_num2s_with_leading_zero_normalization(
			i_x,i_base,i_number_of_characters);
		if(s_x!=='0a'){
			ar_failed_tests.push('test 3, i_x=='+i_x+
				' i_number_of_characters=='+i_number_of_characters+
				' s_x=='+s_x+' i_base=='+i_base);
		} // if
		//------
		i_base=10;
		i_x=14;
		i_number_of_characters=4;
		s_x=raudrohi.lang.s_num2s_with_leading_zero_normalization(
			i_x,i_base,i_number_of_characters);
		if(s_x!=='0014'){
			ar_failed_tests.push('test 4, i_x=='+i_x+
				' i_number_of_characters=='+i_number_of_characters+
				' s_x=='+s_x+' i_base=='+i_base);
		} // if
		//------
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.s_num2s_with_leading_zero_normalization');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('3d06cc22-3187-472e-82f0-334380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.s_num2s_with_leading_zero_normalization
raudrohi.selftests.ar_tests_1.push(
	raudrohi.lang.selftests.s_num2s_with_leading_zero_normalization);

//-------------------------------------------------------------------------
raudrohi.lang.selftests.s_escape_for_eval=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var b_singlequotes=null;
		var s_in=null;
		var s_expected=null;
		var s_x=null;
		var ar_x1=null;
		var i=null;
		//------
		ar_x1=new Array();
		ar_x1.push('abcde[]()');
		ar_x1.push('a\nb');
		ar_x1.push('cd$\rg\tfs');
		ar_x1.push('0123456789abcdef');
		ar_x1.push('');
		ar_x1.push('$@<>/e/|&;:gg');
		b_singlequotes=true;
		var i_len=ar_x1.length;
		for(i=0;i<i_len;i++){
			s_in=ar_x1[i];
			s_x=raudrohi.lang.s_escape_for_eval(s_in,b_singlequotes);
			s_expected=s_in;
			if(s_x!==s_expected){
				ar_failed_tests.push('test 1.1, s_x=='+s_x+
					' s_expected=='+s_expected);
			} // if
		} // for
		b_singlequotes=false;
		for(i=0;i<i_len;i++){
			s_in=ar_x1[i];
			s_x=raudrohi.lang.s_escape_for_eval(s_in,b_singlequotes);
			s_expected=s_in;
			if(s_x!==s_expected){
				ar_failed_tests.push('test 1.2, s_x=='+s_x+
					' s_expected=='+s_expected);
			} // if
		} // for
		//------
		b_singlequotes=true;
		s_in='a"b';
		s_x=raudrohi.lang.s_escape_for_eval(s_in,b_singlequotes);
		s_expected=s_in;
		if(s_x!==s_expected){
			ar_failed_tests.push('test 2.1, s_x=='+s_x+
				' s_expected=='+s_expected);
		} // if
		b_singlequotes=false;
		s_x=raudrohi.lang.s_escape_for_eval(s_in,b_singlequotes);
		s_expected='a\\"b';
		if(s_x!==s_expected){
			ar_failed_tests.push('test 2.2, s_x=='+s_x+
				' s_expected=='+s_expected);
		} // if
		//------
		b_singlequotes=true;
		s_in="a'b";
		s_x=raudrohi.lang.s_escape_for_eval(s_in,b_singlequotes);
		s_expected="a\\'b";
		if(s_x!==s_expected){
			ar_failed_tests.push('test 3.1, s_x=='+s_x+
				' s_expected=='+s_expected);
		} // if
		b_singlequotes=false;
		s_x=raudrohi.lang.s_escape_for_eval(s_in,b_singlequotes);
		s_expected=s_in;
		if(s_x!==s_expected){
			ar_failed_tests.push('test 3.2, s_x=='+s_x+
				' s_expected=='+s_expected);
		} // if
		//------
		b_singlequotes=true;
		s_in='a\\nb';
		s_x=raudrohi.lang.s_escape_for_eval(s_in,b_singlequotes);
		s_expected='a\\\\nb';
		if(s_x!==s_expected){
			ar_failed_tests.push('test 4.1, s_x=='+s_x+
				' s_expected=='+s_expected);
		} // if
		//------
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.s_escape_for_eval');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('02f32753-a3c7-449d-a1f0-334380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.s_escape_for_eval
raudrohi.selftests.ar_tests_1.push(
	raudrohi.lang.selftests.s_escape_for_eval);

//-------------------------------------------------------------------------
//=========================================================================
