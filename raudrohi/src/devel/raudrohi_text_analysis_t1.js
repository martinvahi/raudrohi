///------------------------------------------------------------------------
// Copyright (c) 2010, martin.vahi@softf1.com that has an
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
//------------------------------------------------------------------------
if(window.raudrohi_text_analysis_exists!==true){
	window.raudrohi.text_analysis={};
	window.raudrohi_text_analysis_exists=true;
} // if
if(window.raudrohi_text_analysis_selftests!==true){
	raudrohi.text_analysis.selftests={};
	window.raudrohi_text_analysis_selftests=true;
} // if

if(window.raudrohi_text_analysis_private_code_exists!==true){
	window.raudrohi.text_analysis.private_code={};
	window.raudrohi_text_analysis_private_code_exists=true;
} // if

//------------------------------------------------------------------------
raudrohi.text_analysis.private_code.input_verification_t1=function(ht_fields,
	s_for_analysis, s_field_name_suffix){
	try{
		raudrohi.base.assert_isObject(ht_fields, 'ht_fields',
			'5151e559-5ae8-4fa2-94e6-b280a0219bd7');
		raudrohi.base.assert_isString(s_for_analysis, 's_for_analysis',
			'57088223-5d1e-4037-93e6-b280a0219bd7');
		raudrohi.base.assert_isString(s_field_name_suffix,
			's_field_name_suffix','a741765a-80ae-4a42-a4e6-b280a0219bd7');
		var b=raudrohi.base.string_contains_spacestabs(s_field_name_suffix);
		if (b!==false){
			raudrohi.tmg('b810d740-de50-490d-a2e6-b280a0219bd7',
				's_field_name_suffix=="'+s_field_name_suffix+
				'" contains either spaces or tabs.');
		} // if
		if (s_field_name_suffix.length==0){
			raudrohi.tmg('a9b9b84c-d569-4f8b-a4e6-b280a0219bd7',
				's_field_name_suffix.length==0');
		} // if
	} catch (err){
		raudrohi.tmg('be2bc64c-84bf-48f5-93e6-b280a0219bd7',err);
	} // catch
} // raudrohi.text_analysis.private_code.input_verification_t1

raudrohi.text_analysis.is_empty_after_trimming=function(ht_fields,
	s_for_analysis, s_field_name_suffix){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.text_analysis.private_code.input_verification_t1(ht_fields,
				s_for_analysis, s_field_name_suffix);
		} // if
		var s=raudrohi.adapter.trim(s_for_analysis);
		var b=false;
		if (s.length===0){
			b=true;
		} // if
		s='b_string_is_empty_after_trimming_'+s_field_name_suffix;
		ht_fields.put(s,raudrohi.core.bool2str(b));
	} catch (err){
		raudrohi.tmg('38837416-5d24-4a5d-83e6-b280a0219bd7',err);
	} // catch
} // raudrohi.text_analysis.is_empty_after_trimming

raudrohi.text_analysis.is_empty=function(ht_fields,
	s_for_analysis,s_field_name_suffix){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.text_analysis.private_code.input_verification_t1(ht_fields,
				s_for_analysis, s_field_name_suffix);
		} // if
		var b=false;
		if (s_for_analysis.length===0){
			b=true;
		} // if
		var s='b_string_is_empty_'+s_field_name_suffix;
		ht_fields.put(s,raudrohi.core.bool2str(b));
	} catch (err){
		raudrohi.tmg('394d13d2-67a2-4c7d-a2e6-b280a0219bd7',err);
	} // catch
} // raudrohi.text_analysis.is_empty

raudrohi.text_analysis.is_floating_point_number_t1=function(ht_fields,
	s_for_analysis,s_field_name_suffix){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.text_analysis.private_code.input_verification_t1(ht_fields,
				s_for_analysis, s_field_name_suffix);
		} // if
		var s=null;
		var b=null;
		var ht=raudrohi.base.string2float(s_for_analysis);
		s='b_string_is_floating_point_number_t1_'+s_field_name_suffix;
		b=!(ht.get('b_failure'));
		ht_fields.put(s,raudrohi.core.bool2str(b));
		raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
	} catch (err){
		raudrohi.tmg('206da392-6b6d-4b5e-85e6-b280a0219bd7',err);
	} // catch
} // raudrohi.text_analysis.is_floating_point_number_t1

raudrohi.text_analysis.selftests.is_floating_point_number_t1=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var ht_fields=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
		var s_for_analysis=null;
		var s_field_name_suffix='fff';
		var s=null;
		s_for_analysis='44.45 ';
		raudrohi.text_analysis.is_floating_point_number_t1(ht_fields,
			s_for_analysis,s_field_name_suffix);
		s=ht_fields.get('b_string_is_floating_point_number_t1_fff');
		if(s!=='t'){
			ar_failed_tests.push('s_for_analysis=="'+s_for_analysis+
				'"  s=="'+s+'"');
		} // if

		ht_fields.clear();
		s_for_analysis='44.4a5 ';
		raudrohi.text_analysis.is_floating_point_number_t1(ht_fields,
			s_for_analysis,s_field_name_suffix);
		s=ht_fields.get('b_string_is_floating_point_number_t1_fff');
		if(s!=='f'){
			ar_failed_tests.push('s_for_analysis=="'+s_for_analysis+
				'"  s=="'+s+'"');
		} // if

		ht_fields.clear();
		s_for_analysis='44.45gg ';
		raudrohi.text_analysis.is_floating_point_number_t1(ht_fields,
			s_for_analysis,s_field_name_suffix);
		s=ht_fields.get('b_string_is_floating_point_number_t1_fff');
		if(s!=='f'){
			ar_failed_tests.push('s_for_analysis=="'+s_for_analysis+
				'"  s=="'+s+'"');
		} // if

		raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_fields);
		//---tests-end--------------------
		var x=ar_failed_tests.length; // FireFox 3.0.x bug workaround.
		if(0<x){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.text_analysis.selftests.is_floating_point_number_t1');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('a8425b57-b9c0-4f88-83e6-b280a0219bd7',err);
	} // catch
} // raudrohi.text_analysis.selftests.is_floating_point_number_t1


//------------------------------------------------------------------------
