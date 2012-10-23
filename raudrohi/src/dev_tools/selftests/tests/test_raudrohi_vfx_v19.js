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

if(window.raudrohi_vfx_selftests_exists!==true){
	raudrohi.vfx.selftests={};
	window.raudrohi_vfx_selftests_exists=true;
} // if

//-------------------------------------------------------------------------
raudrohi.vfx.selftests.ar_html2rgb=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var ar_x=null;
		var i=0;
		var s_html_color=null;
		//------
		s_html_color='#ff0012';
		ar_x=raudrohi.vfx.ar_html2rgb(s_html_color);
		i=ar_x.length;
		if(i!==3){
			ar_failed_tests.push('test 1.1, ar_x.length=="'+i+'"');
		} // if
		i=ar_x[0];
		if(i!==255){
			ar_failed_tests.push('test 1.2, ar_x[0]=="'+i+'"');
		} // if
		i=ar_x[1];
		if(i!==0){
			ar_failed_tests.push('test 1.3, ar_x[1]=="'+i+'"');
		} // if
		i=ar_x[2];
		if(i!==18){
			ar_failed_tests.push('test 1.4, ar_x[2]=="'+i+'"');
		} // if
		//------
		s_html_color='#0f0a02';
		ar_x=raudrohi.vfx.ar_html2rgb(s_html_color);
		i=ar_x.length;
		if(i!==3){
			ar_failed_tests.push('test 2.1, ar_x.length=="'+i+'"');
		} // if
		i=ar_x[0];
		if(i!==15){
			ar_failed_tests.push('test 2.2, ar_x[0]=="'+i+'"');
		} // if
		i=ar_x[1];
		if(i!==10){
			ar_failed_tests.push('test 2.3, ar_x[1]=="'+i+'"');
		} // if
		i=ar_x[2];
		if(i!==2){
			ar_failed_tests.push('test 2.4, ar_x[2]=="'+i+'"');
		} // if
		//------
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.vfx.selftests.ar_html2rgb');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('fe0f473c-97a7-463b-9360-52623090abd7',err);
	} // catch
} // raudrohi.vfx.selftests.ar_html2rgb
raudrohi.selftests.ar_tests_1.push(
	raudrohi.vfx.selftests.ar_html2rgb);

//-------------------------------------------------------------------------
raudrohi.vfx.selftests.ar_interpolate_html_colors=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var i=0;
		var s_html_color_start=null;
		var s_html_color_end=null;
		var i_max_number_of_output_colors=null;
		var ar_x=null;
		var s_x=null;
		//------
		i_max_number_of_output_colors=7;
		s_html_color_start='#000000';
		s_html_color_end='#000000';
		ar_x=raudrohi.vfx.ar_interpolate_html_colors(s_html_color_start,
			s_html_color_end,i_max_number_of_output_colors);
		i=ar_x.length
		if(i!==1){
			ar_failed_tests.push('test 1.1, ar_x.length=='+i);
		} // if
		s_x=ar_x[0];
		if(s_x!==s_html_color_start){
			ar_failed_tests.push('test 1.2, s_x=='+s_x);
		} // if
		//------
		i_max_number_of_output_colors=7;
		s_html_color_start='#000001';
		s_html_color_end='#000000';
		ar_x=raudrohi.vfx.ar_interpolate_html_colors(s_html_color_start,
			s_html_color_end,i_max_number_of_output_colors);
		i=ar_x.length
		if(i!==2){
			ar_failed_tests.push('test 2.1, ar_x.length=='+i);
		} // if
		s_x=ar_x[0];
		if(s_x!==s_html_color_start){
			ar_failed_tests.push('test 2.2, s_x=='+s_x);
		} // if
		s_x=ar_x[1];
		if(s_x!==s_html_color_end){
			ar_failed_tests.push('test 2.3, s_x=='+s_x);
		} // if
		//------
		i_max_number_of_output_colors=3;
		s_html_color_start='#01410a';
		s_html_color_end='#03210e';
		ar_x=raudrohi.vfx.ar_interpolate_html_colors(s_html_color_start,
			s_html_color_end,i_max_number_of_output_colors);
		i=ar_x.length
		if(i!==3){
			ar_failed_tests.push('test 3.1, ar_x.length=='+i);
		} // if
		s_x=ar_x[0];
		if(s_x!==s_html_color_start){
			ar_failed_tests.push('test 3.2, s_x=='+s_x);
		} // if
		s_x=ar_x[1];
		if(s_x!=='#02310c'){
			ar_failed_tests.push('test 3.3, s_x=='+s_x);
		} // if
		s_x=ar_x[2];
		if(s_x!==s_html_color_end){
			ar_failed_tests.push('test 3.4, s_x=='+s_x);
		} // if
		//------
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.vfx.selftests.ar_interpolate_html_colors');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('6aa6f214-c157-4084-b460-52623090abd7',err);
	} // catch
} // raudrohi.vfx.selftests.ar_interpolate_html_colors
raudrohi.selftests.ar_tests_1.push(
	raudrohi.vfx.selftests.ar_interpolate_html_colors);

//-------------------------------------------------------------------------

//=========================================================================
