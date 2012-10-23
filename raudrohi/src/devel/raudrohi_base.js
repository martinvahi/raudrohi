///------------------------------------------------------------------------
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
//
//------------------------------------------------------------------------
if(window.raudrohi_base_exists!==true){
	window.raudrohi.base={};
	window.raudrohi_base_exists=true;
} // if
if(window.raudrohi_base_selftests_exists!==true){
	raudrohi.base.selftests={};
	window.raudrohi_base_selftests_exists=true;
} // if

if(window.raudrohi_base_private_code_exists!==true){
	window.raudrohi.base.private_code={};
	window.raudrohi_base_private_code_exists=true;
} // if
if(window.raudrohi_base_private_code_selftests_exists!==true){
	window.raudrohi.base.private_code.selftests={};
	window.raudrohi_base_private_code_selftests_exists=true;
} // if

//------------------------------------------------------------------------
raudrohi.base.selftests.JS_boolean_ops=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		var b;
		//---tests-start------------------
		if(false===true){
			ar_failed_tests.push('false===true');
		} // if
		b=false
		if(b===true){
			ar_failed_tests.push('false===b===true');
		} // if
		b=true
		if(b===false){
			ar_failed_tests.push('true===b===false');
		} // if
		var xy={};
		xy.xx={};
		xy.xx.bb=true;
		if(xy.xx.bb===false){
			ar_failed_tests.push('true===xy.xx.bb===false');
		} // if
		//---tests-end--------------------
		var x=ar_failed_tests.length; // FireFox 3.0.x bug workaround.
		if(0<x){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.base.selftests.JS_boolean_ops');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('3b7965f5-00a7-42e0-b26f-53d03170abd7',err);
	} // catch
} // raudrohi.base.selftests.JS_boolean_ops

//------------------------------------------------------------------------
// Returns an integer between minimum_int and maximum_int.
// Part of this function has been Copy/Pasted from:
// http://www.javascriptkit.com/javatutors/randomnum.shtml
raudrohi.base.rand=function(minimum_int, maximum_int) {
	try{
		if(!raudrohi.adapter.isNumber(minimum_int)){
			raudrohi.adapter.log("raudrohi.base.rand:: minimum_int is not a number.");
		} // if
		if(!raudrohi.adapter.isNumber(maximum_int)){
			raudrohi.adapter.log("raudrohi.base.rand: maximum_int is not a number.");
		} // if
		if(minimum_int==maximum_int){
			raudrohi.adapter.log("raudrohi.base.rand: minimum_int==maximum_int");
		} // if
		var mi;
		var ma;
		if(minimum_int<maximum_int){
			mi=minimum_int;
			ma=maximum_int;
		}else {
			mi=maximum_int;
			ma=minimum_int;
			raudrohi.adapter.log("maximum_int < minimum_int");
		} // else
		var interval=ma-mi;
		var x=Math.floor(Math.random()*interval);
		return x+mi;
	} catch (err){
		raudrohi.tmg('cca78245-778d-44c1-936f-53d03170abd7',err);
	} // catch
}; // raudrohi.base.rand


//------------------------------------------------------------------------
raudrohi.base.assert_isString=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	if(!raudrohi.adapter.isString(a_variable)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') is not a string. '+
			s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isString

raudrohi.base.assert_isArray=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	if(!raudrohi.adapter.isArray(a_variable)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') is not an array. '+
			s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isArray

raudrohi.base.assert_isNumber=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	// The ===null part is just in case. The problem is
	// that due to autoconversion ((4+null)===4)===true
	if((!raudrohi.adapter.isNumber(a_variable))||(a_variable===null)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') is not of numeric type. '+
			s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isNumber

raudrohi.base.assert_isBoolean=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	// The ===null part is just in case. The problem is
	// that due to autoconversion ((4+null)===4)===true
	if((!raudrohi.adapter.isBoolean(a_variable))||(a_variable===null)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') is not of boolean type. '+
			s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isBoolean

raudrohi.base.assert_isObject=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	if(!raudrohi.adapter.isObject(a_variable)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') is not of Object type. '+
			s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isObject

raudrohi.base.assert_isUndefined=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	if(!raudrohi.adapter.isUndefined(a_variable)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') is not of Undefined type. '+
			s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isUndefined

raudrohi.base.assert_isValue=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	if(!raudrohi.adapter.isValue(a_variable)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') is not of Value type. '+
			s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isValue

raudrohi.base.assert_isFunction=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	if(!raudrohi.adapter.isFunction(a_variable)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') is not a function.');
	} // if
} // raudrohi.base.assert_isFunction

raudrohi.base.assert_isNotnull=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	if(a_variable===null){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'===null. '+s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isNotnull


raudrohi.base.assert_isKeyeventKeyCode=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	if(!raudrohi.core.isWithinKeyeventKeyCodes(a_variable)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') does not represent a '+
			'JavaScript key event key code. '+s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isKeyeventKeyCode

raudrohi.base.assert_isWithinDomain=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string, an_array_of_domain_set_elements,
	s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	var is_within_domain=false;
	var len=an_array_of_domain_set_elements.length;
	var i=0;
	var elem;
	try{
		raudrohi.base.assert_isString(a_variable_name, 'a_variable_name',
			'94c2513e-2f8a-4864-836f-53d03170abd7');
		raudrohi.base.assert_isString(Globally_Unique_Identifier_as_string,
			'Globally_Unique_Identifier_as_string',
			'387e09d5-7daa-4949-ba6f-53d03170abd7');
		raudrohi.base.assert_isArray(an_array_of_domain_set_elements,
			'an_array_of_domain_set_elements',
			'15ca1961-fa20-47b6-a55f-53d03170abd7');
		for(i=0;i<len;i++){
			elem=an_array_of_domain_set_elements[i];
			if(a_variable===elem){
				is_within_domain=true;
				break;
			} // if
		} // for
	}catch (err){
		raudrohi.tmg('5ab2d2f4-4408-455b-b45f-53d03170abd7',err);
	} // catch
	if(!is_within_domain){
		var s_domain='';
		try{
			i=0;
			for(i=0;i<len;i++){
				elem=an_array_of_domain_set_elements[i];
				if(i===0){
					s_domain=elem;
				} else {
					s_domain=s_domain+', '+elem;
				} // else
			} // for
		} catch (err){
			raudrohi.tmg('52c7dec5-d2e5-4dcb-9c2f-53d03170abd7',err);
		} // catch
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') is not within domain'+
			'{'+s_domain+'}. '+s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isKeyeventKeyCode

raudrohi.base.assert_isGreaterThanOrEqualTo=function(a_supremum,
	a_supremum_variable_name, Globally_Unique_Identifier_as_string,
	upper_bound_candidate, upper_bound_candidate_name,
	s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	if(raudrohi.settings.debug_JavaScript===true){
		raudrohi.base.assert_isNumber(a_supremum, 'a_supremum',
			'1253461b-8ea2-4418-b21f-53d03170abd7');
		raudrohi.base.assert_isString(a_supremum_variable_name,
			'a_supremum_variable_name',
			'c263a146-de69-461e-a51f-53d03170abd7');
		raudrohi.base.assert_isNumber(upper_bound_candidate,
			'upper_bound_candidate',
			'529e67d3-f414-4c9d-b11f-53d03170abd7');
		raudrohi.base.assert_isString(upper_bound_candidate_name,
			'upper_bound_candidate_name',
			'39d56565-db9d-4d92-871f-53d03170abd7');
	} // if
	if(upper_bound_candidate<a_supremum){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			upper_bound_candidate_name+'(=='+upper_bound_candidate+') < '+
			a_supremum_variable_name+'(=='+a_supremum+'). '+
			s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isGreaterThanOrEqualTo


raudrohi.base.assert_keysExist=function(a_hashtable,
	a_hashtable_variable_name, an_array_of_keys,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	var b_throw=false;
	var s_msg="";
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(a_hashtable, 'a_hashtable',
				'5280fd49-8a15-45c5-921f-53d03170abd7');
			raudrohi.base.assert_isString(a_hashtable_variable_name,
				'a_hashtable_variable_name',
				'49419a28-738e-489a-830f-53d03170abd7');
			raudrohi.base.assert_isArray(an_array_of_keys,'an_array_of_keys',
				'f6790a4c-b4e1-404d-810f-53d03170abd7');
			raudrohi.base.assert_isString(Globally_Unique_Identifier_as_string,
				'Globally_Unique_Identifier_as_string',
				'ee260446-b973-4dd8-b10f-53d03170abd7');
		} // if
		var len=an_array_of_keys.length;
		var i=0;
		var key;
		for(i=0;i<len;i++){
			key=an_array_of_keys[i];
			if(a_hashtable.containsKey(key)===false){
				b_throw=true;
				s_msg="Key \""+key+"\" is missing from the hashtable.";
				break;
			} // if
		} // for
	} catch (err){
		raudrohi.tmg('bccad044-c23a-48ce-b50f-53d03170abd7',err);
	} // catch
	if(b_throw===true){
		raudrohi.tmg('9f408875-c223-4503-b3fe-53d03170abd7',s_msg+' '+
			s_optional_errmsg_suffix);
	} // if
} // raudrohi.base.assert_isGreaterThanOrEqualTo

//------------------------------------------------------------------------
raudrohi.base.generate_id_cursor=1;

raudrohi.base.generate_id=function(){
	try{
		// The raudrohi.base.generate_id_cursor is used for compensating
		// a poor random number generator. One just never knows.
		var x=raudrohi.base.generate_id_cursor++;
		if(x<0) {
			raudrohi.base.generate_id_cursor=1;
			x=1;
		} // if
		var y=raudrohi.core.safe_positive_int;
		var answer=x+'_'+raudrohi.base.rand(0, y)+'_'+raudrohi.base.rand(0,y);
		return answer;
	} catch (err){
		raudrohi.tmg('225eb73a-3b90-4bd4-b1fe-53d03170abd7',err);
	} // catch
}; // raudrohi.base.generate_id

//------------------------------------------------------------------------


//------------------------------------------------------------------------
// Returns null, if the s_needle does not exist within the
// s_haystack or the s_needle=="" or the s_haystack==0.
// Otherwise returns a raudrohi.core.pair instance that
// consists of 2 strings:
// the part before the first occurrence of the s_needle and
// the part after the first occurrence of the needle string.
// Example # 1:
//         s_haystack=='hi|||there|||everybody'
//         s_needle=='|||'
//         answer.a=='hi'     answer.b=='there|||everybody'
//
// Example # 2:
//         s_haystack=='welcome|||'
//         s_needle=='|||'
//         answer.a=='welcome'     answer.b==''
raudrohi.base.bisect=function(s_haystack, s_needle){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_haystack,'s_haystack',
				'9242ba3c-1041-4208-92fe-53d03170abd7');
			raudrohi.base.assert_isString(s_needle,'s_needle',
				'e2803f39-756a-46cd-b3fe-53d03170abd7');
			if(s_needle.length===0){
				raudrohi.tmg('8b825617-c8b4-469e-b4fe-53d03170abd7',
					's_needle.length==0');
			}
		} // if
		// For reference:
		// IE8 and Firefox:    ''.indexOf('')==0;
		// IE8 and Firefox:    ''.indexOf('x')==(-1);
		// IE8 and Firefox:    'x'.indexOf('')==0;
		// IE8 and Firefox:    'x'.indexOf('',7)==1;
		// IE8 and Firefox:    ''.indexOf('',7)==0;

		var i_s_needlelen=s_needle.length;
		var ix=s_haystack.indexOf(s_needle);
		if((ix===(-1))||(i_s_needlelen===0)) {
			// Covers also the case, where  i_s_haystacklen < i_s_needlelen
			return null;
		} // if
		var i_s_haystacklen=s_haystack.length;
		if(i_s_haystacklen===0){
			return null;
		} // if
		var answer=new raudrohi.core.pair();
		if(ix===0){
			answer.a='';
			if(i_s_needlelen===i_s_haystacklen){
				answer.b='';
			} else {
				answer.b=s_haystack.substring(i_s_needlelen);
			} // else
		} // if
		answer.a=s_haystack.substring(0,ix);
		ix=ix+i_s_needlelen;
		if(ix===i_s_haystacklen){
			answer.b='';
		} else {
			answer.b=s_haystack.substring(ix);
		} // else
		return answer;
	} catch (err){
		raudrohi.tmg('5020a257-315f-423b-95ee-53d03170abd7',err+
			'  s_haystack=='+s_haystack+
			'  s_needle=='+s_needle);
	} // catch
}; // raudrohi.base.bisect

raudrohi.base.selftests.bisect=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		var s;
		var a_pair;
		//---tests-start------------------
		var s_hay="ABC";
		a_pair=raudrohi.base.bisect(s_hay,'B');
		if(a_pair.a!=="A"){
			ar_failed_tests.push('s_hay=="'+s_hay+
				'" a_pair.a=="'+a_pair.a+'" a_pair.b=="'+a_pair.b+'".');
		} // if
		if(a_pair.b!=="C"){
			ar_failed_tests.push('s_hay=="'+s_hay+
				'" a_pair.a=="'+a_pair.a+'" a_pair.b=="'+a_pair.b+'".');
		} // if
		a_pair=raudrohi.base.bisect(s_hay,'A');
		if(a_pair.a!==""){
			ar_failed_tests.push('s_hay=="'+s_hay+
				'" a_pair.a=="'+a_pair.a+'" a_pair.b=="'+a_pair.b+'".');
		} // if
		if(a_pair.b!=="BC"){
			ar_failed_tests.push('s_hay=="'+s_hay+
				'" a_pair.a=="'+a_pair.a+'" a_pair.b=="'+a_pair.b+'".');
		} // if
		a_pair=raudrohi.base.bisect(s_hay,'C');
		if(a_pair.a!=="AB"){
			ar_failed_tests.push('s_hay=="'+s_hay+
				'" a_pair.a=="'+a_pair.a+'" a_pair.b=="'+a_pair.b+'".');
		} // if
		if(a_pair.b!==""){
			ar_failed_tests.push('s_hay=="'+s_hay+
				'" a_pair.a=="'+a_pair.a+'" a_pair.b=="'+a_pair.b+'".');
		} // if

		s_hay="|||";
		a_pair=raudrohi.base.bisect(s_hay,'|||');
		if(a_pair.a!==""){
			ar_failed_tests.push('s_hay=="'+s_hay+
				'" a_pair.a=="'+a_pair.a+'" a_pair.b=="'+a_pair.b+'".');
		} // if
		if(a_pair.b!==""){
			ar_failed_tests.push('s_hay=="'+s_hay+
				'" a_pair.a=="'+a_pair.a+'" a_pair.b=="'+a_pair.b+'".');
		} // if

		s_hay="a|||b|||c";
		a_pair=raudrohi.base.bisect(s_hay,'|||');
		if(a_pair.a!=="a"){
			ar_failed_tests.push('s_hay=="'+s_hay+
				'" a_pair.a=="'+a_pair.a+'" a_pair.b=="'+a_pair.b+'".');
		} // if
		if(a_pair.b!=="b|||c"){
			ar_failed_tests.push('s_hay=="'+s_hay+
				'" a_pair.a=="'+a_pair.a+'" a_pair.b=="'+a_pair.b+'".');
		} // if

		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.base.selftests.bisect');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('f10aa318-548b-4843-92ee-53d03170abd7',err);
	} // catch
} // raudrohi.base.selftests.bisect

//------------------------------------------------------------------------
raudrohi.base.private_code.replace_all_globalvars={}
raudrohi.base.private_code.replace_all_globalvars.inited=false;

raudrohi.base.private_code.replace_all_init_globalvars_if_uninited=function(){
	try{
		if (raudrohi.base.private_code.replace_all_globalvars.inited===true){
			return;
		} // if
		// To avoid messing up the global arrays.
		raudrohi.base.private_code.replace_all_globalvars.inited=true;
		var ar_in=new Array();
		var ar_in_rgx=new Array();
		var ar_middle=new Array();
		var ar_middle_rgx=new Array();
		var ar_out=new Array();
		var s_prefix="raUdroh6i_bAsE_pRivAte9_co7de_rePlaCe_aLl_miD8dlevalueprefix_";
		var s_middle=null;

		ar_in.push("[");
		ar_in_rgx.push(new RegExp("[\\[]","g"));
		s_middle=s_prefix+"LSQUAREBRACE_34";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[\\[]");

		ar_in.push("]");
		ar_in_rgx.push(new RegExp("[\\]]","g"));
		s_middle=s_prefix+"RSQUAREBRACE_32";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[\\]]");

		ar_in.push("+");
		ar_in_rgx.push(new RegExp("[+]","g"));
		s_middle=s_prefix+"PLUS_";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[+]");

		ar_in.push("{");
		ar_in_rgx.push(new RegExp("[{]","g"));
		s_middle=s_prefix+"LCURLYbRACE_4";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[{]");

		ar_in.push("}");
		ar_in_rgx.push(new RegExp("[}]","g"));
		s_middle=s_prefix+"RCURLYbRACE_9";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[}]");

		ar_in.push("*");
		ar_in_rgx.push(new RegExp("[*]","g"));
		s_middle=s_prefix+"sTAR_99";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[*]");

		ar_in.push("^");
		ar_in_rgx.push(new RegExp("[\\^]","g"));
		s_middle=s_prefix+"LINESTArT_24";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[\\^]");

		ar_in.push("$");
		ar_in_rgx.push(new RegExp("[$]","g"));
		s_middle=s_prefix+"LInEEND_12";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[$]");

		ar_in.push("(");
		ar_in_rgx.push(new RegExp("[(]","g"));
		s_middle=s_prefix+"LBRAcE_37";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[(]");

		ar_in.push(")");
		ar_in_rgx.push(new RegExp("[)]","g"));
		s_middle=s_prefix+"RBrACE_23";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[)]");

		ar_in.push(".");
		ar_in_rgx.push(new RegExp("[.]","g"));
		s_middle=s_prefix+"POInT_168";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[.]");

		ar_in.push("-");
		ar_in_rgx.push(new RegExp("[-]","g"));
		s_middle=s_prefix+"MiNUS_1285";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[-]");

		// Actually, "|" should be sufficient, but
		// by adding the "|||" before the "|"
		// speeds up ProgFTE and formscript routines.
		var rgx_triplepillar=new RegExp("[|]{3}","g");
		ar_in.push("|||");
		ar_in_rgx.push(rgx_triplepillar);
		s_middle=s_prefix+"TrIPLEpILlar_9123";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[|]{3}");
		raudrohi.base.private_code.replace_all_globalvars.rgx_triplepillar=rgx_triplepillar;

		ar_in.push("|");
		ar_in_rgx.push(new RegExp("[|]","g"));
		s_middle=s_prefix+"sinGLEPilLAR_14867";
		ar_middle.push(s_middle);
		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		ar_out.push("[|]");

		raudrohi.base.private_code.replace_all_globalvars.ar_in=ar_in;
		raudrohi.base.private_code.replace_all_globalvars.ar_in_rgx=ar_in_rgx;
		raudrohi.base.private_code.replace_all_globalvars.ar_middle=ar_middle;
		raudrohi.base.private_code.replace_all_globalvars.ar_middle_rgx=ar_middle_rgx;
		raudrohi.base.private_code.replace_all_globalvars.ar_out=ar_out;

	} catch (err){
		raudrohi.tmg('9e21401c-dff3-42c7-91ee-53d03170abd7',err);
	} // catch
} // raudrohi.base.private_code.replace_all_init_globalvars
raudrohi.base.private_code.replace_all_init_globalvars_if_uninited();

raudrohi.base.private_code.replace_all_speedhack_for_triplepillar=function(s_substitution,
	s_haystack){
	try{
		var rgx_triplepillar=raudrohi.base.private_code.replace_all_globalvars.rgx_triplepillar;
		var s_out=s_haystack.replace(rgx_triplepillar,s_substitution);
		return s_out;
	} catch (err){
		raudrohi.tmg('a262cc59-93a9-4475-82ee-53d03170abd7',err);
	} // catch
} // raudrohi.base.private_code.replace_all_speedhack_for_triplepillar

// The reason, why raudrohi.base.replace_all exists at
// all is that as of December 2009 the code
// "var a_string='XXX'.replace('X','Z','g');"
//  assigns 'ZZZ' to the a_string in the case of the FireFox,
//  but 'ZXX' in the case of Microsoft Internet Explorer 8.
// The 'g' is a flag that means 'replace ALL'. So, the M$ team
// has done a "great, bugfree, job" again. Congratulations!
raudrohi.base.replace_all=function(s_substitution,s_needle,s_haystack){
	try{
		raudrohi.base.private_code.replace_all_init_globalvars_if_uninited();
		var len_n=s_needle.length;
		if(len_n==0){
			// One of the reaasons, why this has been declared to be
			// an illegal case is that it's not so clear, whether
			// the haystack should be considered to be
			// prefixed and suffixed with the ''. Another reason is
			// that it's not such an often used case, so it probably
			// does not bother if the case, where the s_needle==''
			// is declared to be illegal.
			raudrohi.tmg('41f12775-9390-4c15-b2ee-53d03170abd7',
				's_needle.length==0');
		} // if
		var len_h=s_haystack.length;
		if(len_h==0){
			return '';
		} // if
		var s_out=null;
		if (len_n===3){
			if (s_needle==="|||"){
				s_out=raudrohi.base.private_code.replace_all_speedhack_for_triplepillar(s_substitution,s_haystack);
				return s_out;
			} // if
		} // if
		// The following code is based on an idea that
		// originates from
		// http://www.webmasterworld.com/javascript/3484761.htm
		// and is written by a user called Fotiman in a message with an
		// id of #:3485093
		//
		// TODO: refactor it to use the raudrohi.lang.str2regexstr.
		// May be one has to move the htQueue  somewhere else. So, anyway,
		// it'll be some substantial code migration between different
		// namespaces. Currently there's a small mess with this all.

		var ar_in=raudrohi.base.private_code.replace_all_globalvars.ar_in;
		var ar_in_rgx=raudrohi.base.private_code.replace_all_globalvars.ar_in_rgx;
		var ar_middle=raudrohi.base.private_code.replace_all_globalvars.ar_middle;
		var ar_middle_rgx=raudrohi.base.private_code.replace_all_globalvars.ar_middle_rgx;
		var ar_out=raudrohi.base.private_code.replace_all_globalvars.ar_out;

		var ar_replacement_ix=new Array();

		var i_len=ar_in.length;
		var i=0;
		var s_needle0=s_needle;
		var s_needle1=s_needle;
		var i_s_needle_len0=s_needle.length;
		var i_s_needle_len1=i_s_needle_len0;
		var rgx_in=null;
		var s_middle=null;
		for (i=0;i<i_len;i=i+1){
			rgx_in=ar_in_rgx[i];
			s_middle=ar_middle[i];
			s_needle1=s_needle0.replace(rgx_in,s_middle);
			i_s_needle_len1=s_needle1.length;
			if (i_s_needle_len1!==i_s_needle_len0){
				ar_replacement_ix.push(i);
			} // if
			i_s_needle_len0=i_s_needle_len1
			s_needle0=s_needle1;
		} // for
		i=0;
		i_len=ar_replacement_ix.length;
		var ii=null;
		var rgx_middle=null;
		var s=null;
		for (i=0;i<i_len;i=i+1){
			ii=ar_replacement_ix[i];
			rgx_middle=ar_middle_rgx[ii];
			s=ar_out[ii];
			s_needle1=s_needle0.replace(rgx_middle,s);
			s_needle0=s_needle1;
		} // for
		s_out=s_haystack.replace(new RegExp(s_needle0,"g"),s_substitution);
		return s_out;
	} catch (err){
		raudrohi.tmg('25253fb8-deed-4c11-bdde-53d03170abd7',err+
			'  s_substitution=='+s_substitution+
			'  s_needle=='+s_needle+
			'  s_haystack=='+s_haystack);
	} // catch
} // raudrohi.base.replace_all

raudrohi.base.selftests.replace_all=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		var s_hay;
		var s_out;
		//---tests-start------------------
		s_hay='XXX';
		s_out=raudrohi.base.replace_all('ZY','X',s_hay);
		if(s_out!=='ZYZYZY'){
			ar_failed_tests.push('X->ZY, s_out=='+s_out);
		} // if
		s_out=raudrohi.base.replace_all('M','XX',s_hay);
		if(s_out!=='MX'){
			ar_failed_tests.push('XX->M, s_out=='+s_out);
		} // if
		s_hay="line1\nline2";
		s_out=raudrohi.base.replace_all('F',"\n",s_hay);
		if(s_out!=='line1Fline2'){
			ar_failed_tests.push("\\n"+'->F, s_out=='+s_out);
		} // if
		s_hay='|||';
		s_out=raudrohi.base.replace_all('LL',"|||",s_hay);
		if(s_out!=='LL'){
			ar_failed_tests.push('|||->LL, s_out=='+s_out);
		} // if
		s_out=raudrohi.base.replace_all('X','Z',s_hay);
		if(s_out!=='|||'){
			ar_failed_tests.push('Z->X, s_out=='+s_out);
		} // if
		s_hay="A+B[D]*"
		s_out=raudrohi.base.replace_all('X','+',s_hay);
		if(s_out!=='AXB[D]*'){
			ar_failed_tests.push('+->X, s_out=='+s_out);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.base.selftests.replace_all');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	}catch (err){
		raudrohi.tmg('2e2091b1-0f25-4270-a1de-53d03170abd7',err);
	} // catch
} // raudrohi.base.selftests.replace_all

//------------------------------------------------------------------------
// Returns a string that contains only "\n" as linebreaks.
raudrohi.base.normalize_linebreaks=function(a_string){
	try{
		raudrohi.base.assert_isString(a_string,'a_string',
			'e5795a1b-60e7-47bb-85de-53d03170abd7');
		if(a_string===''){
			return '';
		} // if
		// A citation from http://en.wikipedia.org/wiki/Newline
		// (visit date: January 2010)
		//
		// The Unicode standard defines a large number of characters that
		// conforming applications should recognize as line terminators: [2]
		//
		//  LF:    Line Feed, U+000A
		//  CR:    Carriage Return, U+000D
		//  CR+LF: CR (U+000D) followed by LF (U+000A)
		//  NEL:   Next Line, U+0085
		//  FF:    Form Feed, U+000C
		//  LS:    Line Separator, U+2028
		//  PS:    Paragraph Separator, U+2029
		var s1=raudrohi.base.replace_all("\n","\r\n",a_string);
		var s2=raudrohi.base.replace_all("\n","\r",s1);
		s1=raudrohi.base.replace_all("\n","\u0085",s2);
		s2=raudrohi.base.replace_all("\n","\u000C",s1);
		s1=raudrohi.base.replace_all("\n","\u2028",s2);
		s2=raudrohi.base.replace_all("\n","\u2029",s1);
		return s2;
	}catch (err){
		raudrohi.tmg('ef81a74f-d8d2-4891-b1de-53d03170abd7',err);
	} // catch
} // normalize_linebreaks


// Returns a string that contains only " " as spaces.
raudrohi.base.normalize_whitespaces=function(a_string){
	try{
		raudrohi.base.assert_isString(a_string,'a_string',
			'1d8016c1-724c-442d-99ce-53d03170abd7');
		// Some of the code points and comments as copy-pasted
		// from http://en.wikipedia.org/wiki/Space_(punctuation)
		// in January, 2010:
		//
		// U 0020,  &#32;
		// Normal space, same as ASCII character 0x20
		//
		// U 00A0, 	&nbsp;
		// Identical to U+0020, but not a point at which a line may be broken.
		//
		// U 2002, &ensp;
		// Width of one en (half of one em). U+2000 En Quad is canonically
		// equivalent to this character (En Space is preferred).
		//
		// U 2003, &emsp;
		// Width of one em. U+2001 Em Quad is canonically equivalent to
		// this character (Em Space is preferred).
		//
		// U 2007, 	&#8199;
		// In fonts with monospaced digits, equal to the width of one digit
		//
		// U 200A, &#8202;
		// Thinner than a thin space
		//
		// U 205F, &#8287;
		// Used in mathematical formulae. Four-eighteenths of an em. In
		// mathematical typography, the widths of spaces are usually given in
		// integral multiples of an eighteenth of an em, and 4/18 em may be
		// used in several situations, for example between the a and the + and
		// between the + and the b in the expression a + b.
		//
		// U 3000, &#12288;
		// As wide as a CJK character cell
		//
		var s1=raudrohi.base.replace_all(' ',"\u00A0",a_string);
		var s2=raudrohi.base.replace_all(' ',"\u2002",s1);
		s1=raudrohi.base.replace_all(' ',"\u2003",s2);
		s2=raudrohi.base.replace_all(' ',"\u2007",s1);
		s1=raudrohi.base.replace_all(' ',"\u200A",s2);
		s2=raudrohi.base.replace_all(' ',"\u205F",s1);
		s1=raudrohi.base.replace_all(' ',"\u3000",s2);
		s2=raudrohi.base.replace_all('    ',"\t",s1);
		return s2;
	} catch (err){
		raudrohi.tmg('36a12c3f-e8f2-4fa9-81ce-53d03170abd7',err);
	} // catch
} // normalize_whitespaces

// Returns a modified version of the s_haystack.
raudrohi.base.replace_allAllLinebreaksSpacesTabs=function(s_haystack){
	try{
		var s1=raudrohi.base.normalize_whitespaces(s_haystack);
		var s2=raudrohi.base.normalize_linebreaks(s1);
		s2=raudrohi.base.replace_all('',' ',s1);
		s1=raudrohi.base.replace_all('',"\n",s2);
		return s2;
	} catch (err){
		raudrohi.tmg('d402d9bc-2320-48fa-9bce-53d03170abd7',err+
			'  s_haystack=='+s_haystack);
	} // catch
} // raudrohi.base.replace_allAllLinebreaksSpacesTabs

// Applies the raudrohi.base.bisect n times and returns
// an array of the prefix sides of the bisections. If it is
// not possible to bisect the string n times, an exception is thrown.
raudrohi.base.snatchNtimes=function(s_haystack,s_needle,n){
	try{
		if(n<1){
			throw 'n=='+n+'<1';
		} // if
		var modulus=n%2;
		var a_pair;
		var a_pair1;
		var s_hay=s_haystack;
		var ar=[];
		if(2<=n){
			var nn=n;
			if(modulus==1){
				nn=nn-1;
			} // if
			var nnn=nn/2;
			var i=0;
			for(i=0;i<nnn;i++){
				a_pair=raudrohi.base.bisect(s_hay, s_needle);
				if(a_pair==null){
					raudrohi.tmg('4fa19575-4c46-4bb8-a3ce-53d03170abd7',
						'a_pair==null '+
						's_haystack=='+s_haystack+
						's_needle=='+s_needle+' n=='+n+' ');
				} // if
				ar.push(a_pair.a);
				a_pair1=raudrohi.base.bisect(a_pair.b, s_needle);
				if(a_pair1==null){
					raudrohi.tmg('212ae5a8-258f-400e-86be-53d03170abd7',
						'a_pair1==null '+
						's_haystack=='+s_haystack+
						's_needle=='+s_needle+' n=='+n+' ');
				} // if
				ar.push(a_pair1.a);
				s_hay=a_pair1.b;
			} // for
		} // if
		if(modulus==1){
			a_pair=raudrohi.base.bisect(s_hay, s_needle);
			if(a_pair==null){
				raudrohi.tmg('3d77e0a3-f1d3-495e-a4be-53d03170abd7',
					'a_pair==null '+
					's_haystack=='+s_haystack+
					's_needle=='+s_needle+' n=='+n+' ');
			} // if
			ar.push(a_pair.a);
		} // if
		return ar;
	} catch (err){
		raudrohi.tmg('a8b3e029-56b9-47dd-95be-53d03170abd7',err);
	} // catch
} // raudrohi.base.snatchNtimes

//------------------------------------------------------------------------
// The reason, why it is in the raudrohi.base namespace is that
// this allows one to get setup related configuration from the server.
raudrohi.base.get_var=function(var_name) {
	try{
		raudrohi.base.assert_isString(var_name,'var_name',
			'3308f6f2-d3b3-4b83-92be-53d03170abd7');
		var x;
		x=document.getElementById('webpage_initiation_data_from_server_'+var_name);
		if(x===null){
			raudrohi.adapter.log("get_var: UI text not found.\nid_string=="+
				var_name);
		} // if
		return x.innerHTML;
	} catch (err){
		raudrohi.tmg('a89940e5-0670-42d9-b3be-53d03170abd7',err);
	} // catch
}; // raudrohi.base.get_var

//------------------------------------------------------------------------
raudrohi.base.commaseparated_list_2_array=function(a_string){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(a_string,'a_string',
				'f2695136-02ca-4c9c-a5ae-53d03170abd7');
		}// if
		var ar1=a_string.split(',')
		var ar=[];
		var len=ar1.length;
		var i=0;
		var elem;
		for(i=0;i<len;i++){
			elem=ar1[i];
			ar.push(raudrohi.adapter.trim(elem));
		} // for
		return ar;
	}catch (err){
		raudrohi.tmg('c003d316-5877-43f2-93ae-53d03170abd7',err);
	} // catch
} // raudrohi.base.commaseparated_list_2_array

//------------------------------------------------------------------------
// Infinite bitfield, where bits are denoted with their names.
// By default all of the bits are considered to be unset.
raudrohi.base.bitfield_htbased=function(){
	var self_public_=this;
	try{
		var ht_=new Hashtable();

		// This is called only, if a call to the set or the unset
		// methods actually changes the state of the bitfield. It's
		// meant to be optionally overridden by application source.
		// By the time this method is called, the value of the new state
		// has already been stored into the bitfield.
		this.toggle_event_handler=function(new_state_boolean_value,
			bitfield_name){}

		// Returns the bit's boolean value.
		this.is_set=function(bit_name_as_a_string){
			var s_bn='b'+bit_name_as_a_string;
			if(ht_.containsKey(s_bn)){
				var b=ht_.get(s_bn);
				return b;
			} // if
			return false;
		} // is_set

		// Assigns boolean value of True to the bit.
		this.set=function(bit_name_as_a_string){
			var s_bn='b'+bit_name_as_a_string;
			var toggle_occurs=false;
			if(!ht_.containsKey(s_bn)){
				toggle_occurs=true;
				ht_.put(s_bn,true);
			} // if
			if(toggle_occurs){
				self_public_.toggle_event_handler(true,bit_name_as_a_string);
			} // if
		} // set

		// Assigns boolean value of True to the bit.
		// Also allows to store data to an attachment space,
		// where each point of the attachment space has a
		// corresponding point in the bitfield space.
		this.set_with_attachment=function(bit_name_as_a_string, attachment){
			var s_bn='b'+bit_name_as_a_string;
			var s_an='a'+bit_name_as_a_string;
			ht_.put(s_bn,true);
			ht_.put(s_an,attachment);
		} // set_with_attachment

		// Returns null, if the bit has a value of False.
		this.get_attachment=function(bit_name_as_a_string){
			var answer=null;
			var s_bn='b'+bit_name_as_a_string;
			if(ht_.containsKey(s_bn)){
				if(ht_.get(s_bn)){
					var s_an='a'+bit_name_as_a_string;
					if(ht_.containsKey(s_an)){
						answer=ht_.get(s_an);
					} // if
				} // if
			} // if
			return answer;
		} // get_attachment

		// Assigns boolean value of False to the bit. By default, all
		// of the bits are considered to have a value of False.
		// If the bit has a corresponding attachment, the attachment
		// is deleted.
		this.unset=function(bit_name_as_a_string){
			var s_bn='b'+bit_name_as_a_string;
			var toggle_occurs=false;
			if(ht_.containsKey(s_bn)){
				toggle_occurs=true;
				ht_.remove(s_bn);
				var s_an='a'+bit_name_as_a_string;
				if(ht_.containsKey(s_an)){
					ht_.remove(s_an);
				} // if
			} // if
			if(toggle_occurs){
				self_public_.toggle_event_handler(false,bit_name_as_a_string);
			} // if
		} // unset

		// Assigns a falue of false to all of the bits
		// within the bitfield.
		this.unset_all_bits=function(){
			ht_.clear();
		} // unset_all_bits

	} catch (err){
		raudrohi.tmg('4384ea5c-c572-408a-a3ae-53d03170abd7',err);
	} // catch
} // raudrohi.base.bitfield_htbased

// A much more lightweight version than the
// raudrohi.base.bitfield_htbased. It's only meant to
// indicate machine states and is used at hide/unhide/shut_dow/star_up
// routines. The idea is that if a widget that contains other widgets,
// has only some of its inner widgets visible, then one needs to maintain
// that state also at the hide and unhide operations. Same applies for
// startup and shutdown.
raudrohi.base.widget_state_bitfield=function(){
	this.is_in_state_startup=false; // false stands for shut down state
	this.is_in_state_hidden=false; // true stands for un-hidden state
	this.is_in_state_readonly=false; // true stands for readonly state
}// raudrohi.base.widget_state_bitfield


//------------------------------------------------------------------------
// Idea behind the raudrohi.base.HashtableUtilizer is that
// in the case of some "classes", each of the instance has a lot of
// Hashtable instances, which might get even generated dynamically.
// The current version of the Hashtable has been implemented in JavaScript,
// which means that it is an interpreted version and therefore
// probably much slower than the JavaScript languate base structures.
// It also takes some computation to initialize a Hashtable, at least,
// in the case of the interpreted version.
//
// One alternative is to use the JavaScript arrays, which are probably
// implemented as part of the JavaScript core, but lack
// the features that Hashtables have.
//
// Another alternative to the
// dynamic instantiation of a lot of hashtables is to use only a
// single hashtable, but systematically prefix all of the keys with
// some string that corresponds to the Hashtable instance that is being
// "simulated". This is exactly waht the raudrohi.base.HashtableUtilizer
// does and has been created for.
//
// The downside of using the key prefixing is that ther's one
// extra string concatenation per call to the Hashtable routine.
// Another issue is that there has to be one array per
// raudrohi.base.HashtableUtilizer for storing keys, which need
// to be returned for hashtable iteration. The erasing of single
// elements is also slow, namely, linear. But, what regards to the
// keys array, then the original Hashtable implementation also
// needs at least one array for storing keys, so the extra
// array in the raudrohi.base.HashtableUtilizer is probably not that
// bad.
//
// The public interface of the raudrohi.base.HashtableUtilizer roughly
// equals that of the Hashtable, so it's relatively
// easy to switch between the two.
raudrohi.base.HashtableUtilizer=function(prefix_string, a_hashtable){
	var self_public_=this;
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(prefix_string, 'prefix_string',
				'f1b6e33b-20b8-4e02-92ae-53d03170abd7');
			raudrohi.base.assert_isObject(a_hashtable, 'a_hashtable',
				'b52b03e3-7e94-459b-919e-53d03170abd7');
		} // if
		var ht_=a_hashtable;
		var prefix_string_='n_'+prefix_string+';throw x;';
		var ar_keys_=[];

		function get_unsafe_impl(key){
			return ht_.get(prefix_string_+key);
		} // get_unsafe_impl

		function get_safe_impl(key){
			try{
				raudrohi.base.assert_isString(key, 'key',
					'579a971e-5cdb-4101-819e-53d03170abd7');
				return get_unsafe_impl(key);
			} catch (err){
				raudrohi.tmg('71517d15-0521-45d2-819e-53d03170abd7',err);
			} // catch
		} // get_safe_impl

		this.get=function(key){}; // A stub for IDE.

		function put_unsafe_impl(key,value){
			var key2=prefix_string_;
			key2+=key;
			if(!ht_.containsKey(key2)){
				// The contains check is to avoid duplicates within the
				// ar_keys_. However, one has to be able to overwrite the
				// value within the hashtable.
				ar_keys_.push(key);
			} // if
			ht_.put(key2,value);
		} // get_unsafe_impl

		function put_safe_impl(key,value){
			try{
				raudrohi.base.assert_isString(key, 'key',
					'564f9a5e-2a84-41b6-939e-53d03170abd7');
				put_unsafe_impl(key,value);
			} catch (err){
				raudrohi.tmg('1863ca36-fd0e-480c-b48e-53d03170abd7',err);
			} // catch
		} // put_safe_impl

		this.put=function(key,value){}; // A stub for IDE.

		function remove_from_keys(a_key){
			try{
				var len=ar_keys_.length;
				var ar_new=[];
				var elem;
				for(var i=0;i<len;i++){
					elem=ar_keys_[i];
					if(elem!=a_key){
						ar_new.push(elem);
					} // if
				} // for
				ar_keys_=ar_new;
			} catch (err){
				raudrohi.tmg('15cb0c4e-754b-4e1a-a28e-53d03170abd7',err);
			} // catch
		} // remove_from_keys

		function remove_unsafe_impl(key){
			remove_from_keys(key);
			ht_.remove(prefix_string_+key);
		} // remove_unsafe_impl

		function remove_safe_impl(key){
			try{
				raudrohi.base.assert_isString(key, 'key',
					'33560d56-0dc9-4d69-a58e-53d03170abd7');
				remove_unsafe_impl(key);
			} catch (err){
				raudrohi.tmg('3d2455e2-9eb5-4903-a28e-53d03170abd7',err);
			} // catch
		} // remove_safe_impl

		this.remove=function(key){}; // A stub for IDE.

		// Quite inefficient, because one has to look up the
		// individual entries from the utilizable hashtable one by one.
		this.clear=function(){
			try{
				var len=ar_keys_.length;
				var key;
				for(var i=0;i<len;i++){
					key=ar_keys_[i];
					ht_.remove(prefix_string_+key);
				} // for
				ar_keys_=[];
			}catch (err){
				raudrohi.tmg('dbd36611-dab6-484c-a57e-53d03170abd7',err);
			} // catch
		} // clear

		this.keys=function(){
			return ar_keys_;
		} // clear


		this.size=function(){
			return ar_keys_.length;
		} // clear


		function containsKey_unsafe_impl(key){
			return ht_.containsKey(prefix_string_+key);
		} // containsKey_unsafe_impl

		function containsKey_safe_impl(key){
			try{
				raudrohi.base.assert_isString(key, 'key',
					'c35a0a38-7ee1-4c3c-b37e-53d03170abd7');
				return containsKey_unsafe_impl(key);
			} catch (err){
				raudrohi.tmg('ee391b14-bff1-4f88-a57e-53d03170abd7',err);
			} // catch
		} // containsKey_safe_impl


		if(raudrohi.settings.debug_JavaScript===true){
			this.get=get_safe_impl;
			this.put=put_safe_impl;
			this.remove=remove_safe_impl;
			this.containsKey=containsKey_safe_impl;
		} else {
			this.get=get_unsafe_impl;
			this.put=put_unsafe_impl;
			this.remove=remove_unsafe_impl;
			this.containsKey=containsKey_unsafe_impl;
		} // else

	} catch (err){
		raudrohi.tmg('1d9c3256-99b1-4179-957e-53d03170abd7',err);
	} // catch
} // raudrohi.base.HashtableUtilizer

//------------------------------------------------------------------------
// It's for avoiding instantiation of Hashtables in cases, where one
// temporarily needs an empty Hashtable, i.e. hahtable that is cleared.
raudrohi.base.pool_of_hashtables=function(){
	try{
		var self_public_=this;

		// The size of the pool shouldn't be "too big", because as of 2011 the
		// JavaScript is by default a single-threaded programming
		// language (unless one does not experiment with worker threads or
		// someting like that), and the filling of the pool might
		// create a noticable delay.
		// The setTimeout deay in the get_empty_hashtable() and the
		// pool size have been chosen experimentally so that the
		// pool filling has some "probabilistic" chance of taking place
		// during "idle" time, while not creating "too big" of a delay, if
		// the time frame has been missed.
		var i_pool_max_size_=600;
		var pooled_hashtables_=[];

		var b_poolfilling_order_exists_=false;
		this.fill_pool=function(){
			try{
				var n_to_add=i_pool_max_size_-pooled_hashtables_.length;
				var i=0;
				for(i=0;i<n_to_add;i++){
					pooled_hashtables_.push(new Hashtable());
				} // for
				b_poolfilling_order_exists_=false;
			} catch (err){
				raudrohi.tmg('df0a2c14-2a36-4bab-817e-53d03170abd7',err);
			} // catch
		} // fill_pool
		self_public_.fill_pool();

		this.get_empty_hashtable=function(){
			try{
				var ht;
				if(200<pooled_hashtables_.length){ // One hopes to gain some speed from lucky timing.
					ht=pooled_hashtables_.pop();
				} else {
					ht=new Hashtable();
					if(b_poolfilling_order_exists_===false){
						b_poolfilling_order_exists_=true;
						setTimeout('raudrohi.base.pool_of_hashtables.fill_pool()',
							5000);
					} // if
				} // if
				return ht;
			} catch (err){
				raudrohi.tmg('99ad2726-264d-40c2-b26e-53d03170abd7',err);
			} // catch
		} // get_empty_hashtable

		this.return_used_hashtable=function(a_hashtable){
			try{
				// As of 2011.05.01 the clearing of the hashtable
				// only wastes cycles, but one just wants to detect
				// "abnormal, extraterrestial, activity".
				a_hashtable.clear();

			// As there's some sort of a weird bug somewhere,
			// I suspect that it's in the browser, then in stead of
			// throwing the hashtable back into the pool like this:
			//
			// if(polhl<60){
			//    ooled_hashtables_.push(a_hashtable);
			// } // if
			//
			// one just lets it to be garbage collected. One hopes
			// that the clearing of the hashtable helps the
			// garbage collector.
			} catch (err){
				raudrohi.tmg('24e9c621-7858-44bd-a56e-53d03170abd7',err);
			} // catch
		} // return_used_hashtable

		// The return_htOfht dismantles the hashtable of hashtables and
		// inserts the individual hashtables to the pool.
		this.return_htOfht=function(a_hashtable_of_hashtables){
			try{
				var keys=a_hashtable_of_hashtables.keys();
				var len=keys.length;
				var key;
				var reference_2_ht2;
				for(var i=0;i<len;i++){
					key=keys[i];
					reference_2_ht2=a_hashtable_of_hashtables.get(key);
					self_public_.return_used_hashtable(reference_2_ht2);
				} // for
				self_public_.return_used_hashtable(a_hashtable_of_hashtables);
			} catch (err){
				raudrohi.tmg('5204d44d-3cff-4f63-916e-53d03170abd7',err);
			} // catch
		} // return_htOfht

	} catch (err){
		raudrohi.tmg('25ba6c87-ef75-46e8-9e5e-53d03170abd7',err);
	} // catch
} // raudrohi.base.pool_of_hashtables
raudrohi.base.pool_of_hashtables=new raudrohi.base.pool_of_hashtables();

//------------------------------------------------------------------------
// Creates a clone of the a_hashtable. The clone instance is taken
// from the raudrohi.base.pool_of_hashtables. The values
// of the a_hashtable are passed by reference, i.e. the values are
// not cloned.
raudrohi.base.clone_hashtable=function(a_hashtable){
	try{
		raudrohi.base.assert_isObject(a_hashtable, 'a_hashtable',
			'2a72244e-3b1b-4d71-a15e-53d03170abd7');
		var ht_clone=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
		var keys=a_hashtable.keys();
		var len=keys.length;
		var key;
		var reference_to_the_value;
		for(var i=0;i<len;i++){
			key=keys[i];
			reference_to_the_value=a_hashtable.get(key);
			ht_clone.put(key,reference_to_the_value);
		} // for
		return ht_clone;
	} catch (err){
		raudrohi.tmg('c01a2517-ea8b-4552-915e-53d03170abd7',err);
	} // catch
} // raudrohi.base.clone_hashtable



//------------------------------------------------------------------------
raudrohi.base.setA_minus_setB_ar=function(set_A_elements_array,
	set_B_elements_array){
	try{
		var ht=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
		var len=set_B_elements_array.length;
		var i=0;
		var elem;
		for(i=0;i<len;i++){
			elem=set_B_elements_array[i];
			ht.put(elem,42)
		} // for
		var answer=[];
		len=set_A_elements_array.length;
		i=0;
		for(i=0;i<len;i++){
			elem=set_A_elements_array[i];
			if(!ht.containsKey(elem)){
				answer.push(elem);
			} // if
		} // for
		raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
		return answer;
	} catch (err){
		raudrohi.tmg('749515b3-ca74-4970-a85e-53d03170abd7',err);
	} // catch
} // raudrohi.base.setA_minus_setB_ar

// http://mathworld.wolfram.com/Intersection.html
raudrohi.base.intersection_of_sets=function(set_A_elements_array,
	set_B_elements_array){
	try{
		var ht=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
		var len=set_B_elements_array.length;
		var i=0;
		var elem;
		for(i=0;i<len;i++){
			elem=set_B_elements_array[i];
			ht.put(elem,42)
		} // for
		var answer=[];
		len=set_A_elements_array.length;
		i=0;
		for(i=0;i<len;i++){
			elem=set_A_elements_array[i];
			if(ht.containsKey(elem)){
				answer.push(elem);
			} // if
		} // for
		raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
		return answer;
	} catch (err){
		raudrohi.tmg('757cec5a-9385-4674-a24e-53d03170abd7',err);
	} // catch
} // raudrohi.base.intersection_of_sets

//------------------------------------------------------------------------
// The main use of the raudrohi.base.state_switcher_t1 is in
// building graphical user interfaces. It implements the "bookkeeping"
// part of the state machine.
//
// In this particular case, the model is that the states, which
// can also be denoted as vertices, have a default entry function and a default
// exit function. However, transitions, which can be denoted as directed
// edges in the graph theory's point of view
// (http://mathworld.wolfram.com/DirectedGraph.html ), can be explicitly
// specified by assigning one function to a transition. The transition
// functions override the default exit and entry functions, i.e. if a
// transition has been specified, the default entry and exit functions are
// not called.
//
// An example:
//     Let, A,B,C,D,E be vertices and
//     enterA() and exitA() vertex A default entry and exit functions,
//     enterB() and exitB() vertex B default entry and exit functions,
//     enterC() and exitC() vertex C default entry and exit functions.
//     Vertex D does not have its default exit function defined, but
//     enterD() has been defined as vertex D default entry function.
//     Vertex E does not have any default functions associated with it.
//
//     In addition, a transition from vertex B to vertex C has been
//     associated with function transB2C(), and a transition from
//     vertex A to vertex E has been associated with function transA2E().
//     A transition from vertex D to vertex E has been
//     associated with function transD2E().
//
//     The following describes the functions that get called for the given
//     transitions:
//
//     From A to B:  exitA(), enterB()
//     From B to C:  transB2C()
//     From B to D:  exitB(), enterD()
//     From A to C:  exitA(), enterC()
//     From A to E:  transA2E()
//
//     From B to E:  Transition is not possible, because vertex E does not
//                   have a default entry function, nor is there a
//                   function declared for that transition.
//
//     From D to A:  Transition is not possible, because vertex D is
//                   missing a default exit function, nor is there a
//                   function declared for that transition.
//
//     From D to E:  transD2E()
//
// In the case of the raudrohi.base.state_switcher_t1, there is one
// vertex defined by default. It's called 'zero'. The vertex 'zero'
// has also stub exit and entry functions defined by default.
// Right after initialization, the state machine is in state 'zero'.
//
// None of the transition, nor the default functions, can be overriden,
// redefined, and it actually serves a purpose in the case of the
// state 'zero'. That way all of the other states are obligated to
// instantiate and clear up their resources, set their own, internal,
// "substates", to a proper order.
//
// Another, architectually very influencial, thing within the
// raudrohi.base.state_switcher_t1 is a concept of state(==vertex)
// clusters (vertex set subsets). It is also possible to define
// entry and exit functions for clusters,
// but their declaration is optional.
//
//--------------------------UDPATE-START-------------------------------
// The current implementation is BUGGY from logic point of veiew.
// It tries to support clusters as if it were a true set, i.e. a
// single vertex can be part of multiple clusters, but in practice,
// a limitation that each vertex can be part of at most one cluster,
// is NECESSARY, VERY USEFUL, because then that single cluster can be
// tested against and it also simplifies the implementation. Also,
// if every vertex is part of at most one cluster, then there is no
// issue of the order of the cluster exit/entry/transition funcions and
// the order of functions that get executed duering a transition from
// one cluster to anohter, can be determined and counted on. In practice
// it has also turned out that there is no need for a state to belong
// to multiple clusters at once.
//
// The current implementation is also buggy in a way that it does not
// execute cluster entry functions, if a state transaction takes place
// from non-clustered vertex to a clustered vertex.
//--------------------------UDPATE-END---------------------------------
//
raudrohi.base.state_switcher_t1=function(){
	var self_public_=this;
	try{
		var initial_state_='zero';
		var previous_state_=null;

		this.current_state_=initial_state_; // to be refactored out
		this.get_current_state=function(){
			return ''+self_public_.current_state_;
		} // get_current_state

		var state_switch_count_=0;
		this.get_state_switch_count=function(){
			return state_switch_count_;
		} // get_state_switch_count

		// The increment_state_switch_count() is  useful for
		// simulating state switch events. For example, if
		// a parent widget changes state then by simulating
		// a state change in the subwidget, one can
		// dismiss the data that the subwidget requested before the
		// parent widget's state change, but which arrives to
		// the sub widget after the parent widgat's state change.
		this.increment_state_switch_count=function(){
			state_switch_count_++;
		} // get_state_switch_count

		// Returns a boolean value.
		this.state_exists=function(state_name){
			try{
				raudrohi.base.assert_isString(state_name,
					'state_name', '1bd98082-cf97-4dd4-ae4e-53d03170abd7');
				var answer=ht_default_entry_funcs_.containsKey(state_name);
				return answer;
			} catch (err){
				raudrohi.tmg('7ea20533-f1ec-4376-b44e-53d03170abd7',err);
			} // catch
		} // state_exists

		var ht_=new Hashtable();
		var ht_transition_funcs_=new raudrohi.base.HashtableUtilizer(
			'trans',ht_);

		// The s_funcsepar_ should, if possible, have some value that
		// can not be part of a JavaScript function name.
		var s_funcsepar_=';throw "x";';
		var ht_default_entry_funcs_=new raudrohi.base.HashtableUtilizer(
			'entry',ht_);
		var ht_default_exit_funcs_=new raudrohi.base.HashtableUtilizer(
			'exit',ht_);

		var ht_vertex_2_clusters_=new raudrohi.base.HashtableUtilizer(
			'v2cl',ht_);
		var ht_cluster_2_vertices_=new raudrohi.base.HashtableUtilizer(
			'cl2v', ht_);

		var ht_genc_=0;
		function create_hashtable(){
			ht_genc_++;
			var ht=new raudrohi.base.HashtableUtilizer('aght'+ht_genc_, ht_);
			return ht;
		} // create_hashtable


		// If the machine state changes to the 'zero', the
		// subwidget's chage_state_2('zero') methods are also called.
		var ar_subwidgets_=[];
		this.register_subwidget=function(a_subwidget_instance){
			try{
				raudrohi.base.assert_isObject(a_subwidget_instance,
					'a_subwidget_instance',
					'b84bbb3a-ef87-4837-814e-53d03170abd7');
				ar_subwidgets_.push(a_subwidget_instance);
			} catch (err){
				raudrohi.tmg('20b76684-db87-47a3-8d3e-53d03170abd7', err);
			} // catch
		} // register_subwidget

		this.unregister_all_subwidgets=function(){
			try{
				ar_subwidgets_=[];
			} catch (err){
				raudrohi.tmg('1ea1b1e2-974f-4fcf-823e-53d03170abd7',err);
			} // catch
		} // unregister_all_subwidgets

		var ht_cluster_entry_funcs_=null;
		this.declare_cluster_entry_func=function(destination_cluster_name,
			a_function){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(
						destination_cluster_name,'destination_cluster_name',
						'299af751-54ca-42d4-b33e-53d03170abd7');
					raudrohi.base.assert_isFunction(a_function,'a_function',
						'269d9c20-6081-4dce-933e-53d03170abd7');
				} // if
				if(ht_cluster_entry_funcs_===null){
					ht_cluster_entry_funcs_=create_hashtable();
				} // if
				ht_cluster_entry_funcs_.put(destination_cluster_name,
					a_function);
			} catch (err){
				raudrohi.tmg('2457d082-0b94-40ac-b22e-53d03170abd7', err);
			} // catch
		} // declare_cluster_entry_func

		var ht_cluster_exit_funcs_=null;
		this.declare_cluster_exit_func=function(origin_cluster_name,
			a_function){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(
						origin_cluster_name,'origin_cluster_name',
						'aba3514c-7f03-4f7e-932e-53d03170abd7');
					raudrohi.base.assert_isFunction(a_function,'a_function',
						'f4be4ee4-55e9-40ab-a42e-53d03170abd7');
				} // if
				if(ht_cluster_exit_funcs_===null){
					ht_cluster_exit_funcs_=create_hashtable();
				} // if
				ht_cluster_exit_funcs_.put(origin_cluster_name,a_function);
			} catch (err){
				raudrohi.tmg('79f85925-f1ab-4241-912e-53d03170abd7', err);
			} // catch
		} // declare_cluster_exit_func

		this.declare_state_transition_func=function(destination_state_name,
			origin_state_name,state_transition_function){
			if(raudrohi.settings.debug_JavaScript===true){
				raudrohi.base.assert_isString(destination_state_name,
					'destination_state_name',
					'4047d414-afe9-4486-821e-53d03170abd7');
				raudrohi.base.assert_isString(origin_state_name,
					'origin_state_name','72309f39-365b-4bdd-b11e-53d03170abd7');
				raudrohi.base.assert_isFunction(
					state_transition_function,
					'state_transition_function',
					'40dbd935-4717-4c7e-941e-53d03170abd7');
				var s_tmp=destination_state_name+s_funcsepar_+origin_state_name;
				if(ht_transition_funcs_.containsKey(s_tmp)){
					raudrohi.tmg('48f88785-cb4d-4c08-a21e-53d03170abd7',
						'State transition from state "'+origin_state_name+
						'" to state "'+destination_state_name+'" has been declare '+
						'more than once. It does not make sense to declare '+
						'state transitions more than once, as the subsequent '+
						'declarations would logically override eachother.');
				} // if
			} // if
			var s_trans=destination_state_name+s_funcsepar_+origin_state_name;
			ht_transition_funcs_.put(s_trans,state_transition_function);
		} // declare_state_transition_func

		this.declare_state_default_entry_func=function(destination_state_name,
			a_function){
			if(raudrohi.settings.debug_JavaScript===true){
				raudrohi.base.assert_isString(destination_state_name,
					'destination_state_name',
					'796bf8fb-c5ad-4672-afdd-53d03170abd7');
				raudrohi.base.assert_isFunction(a_function,'a_function',
					'4a762543-56f5-4717-a4dd-53d03170abd7');
			}// if
			ht_default_entry_funcs_.put(destination_state_name,a_function);
		} // declare_state_default_entry_func

		this.declare_state_default_exit_func=function(origin_state_name,
			a_function){
			if(raudrohi.settings.debug_JavaScript===true){
				raudrohi.base.assert_isString(origin_state_name,
					'origin_state_name','32877115-c531-4730-a1dd-53d03170abd7');
				raudrohi.base.assert_isFunction(a_function,'a_function',
					'bbd1b11b-97d5-4d97-93cd-53d03170abd7');
			}// if
			ht_default_exit_funcs_.put(origin_state_name,a_function);
		} // declare_state_default_exit_func

		self_public_.declare_state_default_entry_func(initial_state_,
			function(){});
		self_public_.declare_state_default_exit_func(initial_state_,
			function(){});

		// The add_cluster_2_vertex_list_of_clusters
		// exists for the 'zero', which belongs to all clusters at once.
		//
		// TODO: That's a stupidity here. Each of the vertices, except
		// zero, should belong to at most one cluster, because that allowes
		// to determine a proper order of cluster entry and exit functions.
		// Refactor it out, because this multiple-cluster incclusion feature
		// is never used in practice, but it does prevent an implementation
		// of a practical feature.
		function add_cluster_2_vertex_list_of_clusters(vertex_name,
			cluster_name){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(cluster_name,'cluster_name',
						'9a2ac828-d3e2-4ce1-b2cd-53d03170abd7');
					raudrohi.base.assert_isString(vertex_name,'vertex_name',
						'40182a26-926c-4440-a4cd-53d03170abd7');
				}// if
				var ht_clusters;
				if(ht_vertex_2_clusters_.containsKey(vertex_name)){
					ht_clusters=ht_vertex_2_clusters_.get(vertex_name);
				} else {
					ht_clusters=create_hashtable();
				} // else
				ht_clusters.put(cluster_name,42);
				ht_vertex_2_clusters_.put(vertex_name,ht_clusters);
			}catch (err){
				raudrohi.tmg('484b9904-e12d-4a78-86bd-53d03170abd7', err);
			} // catch
		} // add_cluster_2_vertex_list_of_clusters

		function add_vertex_2_clusters_list_of_vertices(vertex_name,
			cluster_name){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(cluster_name,'cluster_name',
						'5161fd62-5728-46d2-85bd-53d03170abd7');
					raudrohi.base.assert_isString(vertex_name,'vertex_name',
						'f90a6647-cc80-40eb-b3bd-53d03170abd7');
				}// if
				var ht_vertices;
				if(ht_cluster_2_vertices_.containsKey(cluster_name)){
					ht_vertices=ht_cluster_2_vertices_.get(cluster_name);
				} else {
					ht_vertices=create_hashtable();
				} // else
				ht_vertices.put(vertex_name,42);
				ht_vertices.put('zero',42);
				ht_cluster_2_vertices_.put(cluster_name, ht_vertices);
			} catch (err){
				raudrohi.tmg('3fb50654-a093-4e8a-a2ad-53d03170abd7', err);
			} // catch
		} // add_vertex_2_clusters_list_of_vertices


		this.declare_state_2_be_in_cluster=function(cluster_name,vertex_name){
			if(raudrohi.settings.debug_JavaScript===true){
				raudrohi.base.assert_isString(cluster_name,'cluster_name',
					'41a35311-ca60-4de5-9cad-53d03170abd7');
				raudrohi.base.assert_isString(vertex_name,'vertex_name',
					'847fb2df-056a-412e-88ad-53d03170abd7');
				if(ht_vertex_2_clusters_.containsKey(vertex_name)){
					var ht_cln=ht_vertex_2_clusters_.get(vertex_name);
					var ar=ht_cln.keys();
					if(ht_cln!=cluster_name){
						raudrohi.tmg('d534d585-bc1a-479b-9cad-53d03170abd7',
							' Vertex "'+vertex_name+'" is present in '+
							'cluster "'+ar[0]+'", while a request is '+
							'made to place it to cluster "'+cluster_name+'".');
					} // if
				} // if
				if(vertex_name=='zero'){
					raudrohi.tmg('134f5ddd-8430-4542-8c9d-53d03170abd7',
						'There\'s no point of inserting the state "zero" '+
						'to cluster "'+cluster_name+'", because by default '+
						'the "zero" s present in every cluster.');
				} // if
			}// if
			try{
				add_cluster_2_vertex_list_of_clusters(vertex_name,cluster_name);
				add_cluster_2_vertex_list_of_clusters('zero',cluster_name);
				add_vertex_2_clusters_list_of_vertices(vertex_name,cluster_name);
			} catch (err){
				raudrohi.tmg('b3b30033-349a-4d76-a59d-53d03170abd7', err);
			} // catch
		} // declare_state_2_be_in_cluster

		function get_names_of_zeroables(destination_vertex_name,
			origin_vertex_name){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(destination_vertex_name,
						'destination_vertex_name',
						'84a8292f-accb-4e12-849d-53d03170abd7');
					raudrohi.base.assert_isString(origin_vertex_name,
						'origin_vertex_name',
						'1d083bf2-8f6c-495a-a59d-53d03170abd7');
					if(!ht_vertex_2_clusters_.containsKey(origin_vertex_name)){
						raudrohi.tmg('8abb65c4-66f0-497c-958d-53d03170abd7',
							'origin_vertex_name(=='+origin_vertex_name+
							') is missing from the graph.');
					} // if
					if(!ht_vertex_2_clusters_.containsKey(destination_vertex_name)){
						raudrohi.tmg('a46b5e57-79df-4216-958d-53d03170abd7',
							'destination_vertex_name(=='+
							destination_vertex_name+
							') is missing from the graph.');
					} // if
					if(origin_vertex_name==destination_vertex_name){
						raudrohi.tmg('425b7e23-ec0e-4875-ba8d-53d03170abd7',
							'origin_vertex_name==destination_vertex_name=="'+
							origin_vertex_name+'"');
					} // if
				} // if
				var ar_zeroables=[];
				if(origin_vertex_name=='zero'){
					return ar_zeroables;
				} // if
				var orig_ht_clusters=ht_vertex_2_clusters_.get(
					origin_vertex_name);
				var dest_ht_clusters=ht_vertex_2_clusters_.get(
					destination_vertex_name);
				var orig_ar_cl_keys=orig_ht_clusters.keys();
				var dest_ar_cl_keys=orig_ht_clusters.keys();
				var clusters2scan=raudrohi.base.setA_minus_setB_ar(
					orig_ar_cl_keys, dest_ar_cl_keys)
				var len=clusters2scan.length;
				var i=0;
				var cluster_name;
				var ii;
				var len2;
				var ht_cl_vertices;
				var ar_cl_vertices;
				var cl_vertex_name;
				for(i=0;i<len;i++){
					cluster_name=clusters2scan[i];
					ht_cl_vertices=ht_cluster_2_vertices_.get(cluster_name)
					ar_cl_vertices=ht_cl_vertices.keys();
					len2=ar_cl_vertices.length;
					ii=0;
					for(ii=0;ii<len2;ii++){
						cl_vertex_name=ar_cl_vertices[ii];
						if((origin_vertex_name!=cl_vertex_name)&&(cl_vertex_name!='zero')){
							ar_zeroables.push(cl_vertex_name);
						} // if
					} // for
				} // for
				return ar_zeroables;
			} catch (err){
				raudrohi.tmg('21b7f3f4-ab1c-403a-837d-53d03170abd7', err);
			} // catch
		} // get_names_of_zeroables


		function execute_edge(destination_vertex_name, origin_vertex_name){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(destination_vertex_name,
						'destination_vertex_name',
						'3ff1a5c7-0cec-49e6-937d-53d03170abd7');
					raudrohi.base.assert_isString(origin_vertex_name,
						'origin_vertex_name',
						'3b413954-6839-4d76-917d-53d03170abd7');
					var s_tmp=destination_vertex_name+s_funcsepar_+
					origin_vertex_name;
					if(!ht_transition_funcs_.containsKey(s_tmp)){
						if(!ht_default_exit_funcs_.containsKey(origin_vertex_name)){
							throw 'Transition from state "'+
							origin_vertex_name+'" to state "'+
							destination_vertex_name+'" has not been '+
							'explicitly specified and there\'s no '+
							'default exit function specified for the '+
							'state "'+origin_vertex_name+'".';
						} // if
						if(!ht_default_entry_funcs_.containsKey(destination_vertex_name)){
							throw 'Transition from state "'+
							origin_vertex_name+'" to state "'+
							destination_vertex_name+'" has not been '+
							'explicitly specified and there\'s no '+
							'default entry function specified for the '+
							'state "'+destination_vertex_name+'".';
						} // if
					} // if
				} // if
				if(destination_vertex_name===origin_vertex_name){
					return;
				} // if
				try{
					// Code that uses the state_switch_count_ depends
					// on a fact that the state_switch_count_ is
					// incremented before the call to the edge/default
					// entry/exit execution.
					state_switch_count_++;
					var s_trans=destination_vertex_name+s_funcsepar_+
					origin_vertex_name;
					var a_func;
					if(ht_transition_funcs_.containsKey(s_trans)){
						a_func=ht_transition_funcs_.get(s_trans);
						a_func();
						return;
					} // if
					a_func=ht_default_exit_funcs_.get(origin_vertex_name);
					a_func();
					a_func=ht_default_entry_funcs_.get(destination_vertex_name);
					a_func();
				//				raudrohi.adapter.log('mutt orig=='+origin_vertex_name+
				//					' dest=='+destination_vertex_name);
				}catch (err){
					raudrohi.tmg('f8dc9b5b-9e5e-41b0-a47d-53d03170abd7',
						"origin_vertex_name=="+origin_vertex_name+
						"  destination_vertex_name=="+
						destination_vertex_name+"  "+err);
				} // catch
			} catch (err){
				raudrohi.tmg('21b1b976-bdc9-4711-916d-53d03170abd7', err);
			} // catch
		}// execute_edge

		function vertex2FirstCluster(vertex_name){
			try{
				raudrohi.base.assert_isString(vertex_name,'vertex_name',
					'3ff24ca4-377a-4673-b26d-53d03170abd7');
				var ht_clusters=ht_vertex_2_clusters_.get(vertex_name);
				var ar_cluster_names=ht_clusters.keys();
				return ar_cluster_names[0];
			} catch (err){
				raudrohi.tmg('24bdb44f-5714-4e80-b16d-53d03170abd7', err);
			} // catch
		} // vertex2FirstCluster

		var change_state_2_in_progress_=false;
		var queued_jump_destination_=null;
		function change_state_2_queue_handling(){
			try{
				if(queued_jump_destination_!==null){
					var queued_jump_destination=''+queued_jump_destination_;
					queued_jump_destination_=null;
					change_state_2_in_progress_=false;
					self_public_.change_state_2(queued_jump_destination);
				} // if
				change_state_2_in_progress_=false;
			}catch (err){
				raudrohi.tmg('5432a835-e80e-4579-a95d-53d03170abd7', err);
			} // catch
		} // change_state_2_queue_handling

		this.change_state_2=function(destination_state_name){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(destination_state_name,
						'destination_state_name',
						'24264831-5ccd-4314-925d-53d03170abd7');
				// All of the relevant verification also takes
				// part in the method execute_edge
				} // if
				if(change_state_2_in_progress_===true){
					var b_crash=true;
					if(raudrohi.settings.debug_JavaScript!==true){
						// The content of this if-clause is a
						// dirty way to probabilistically increase
						// the tread-safetiness of the client code.
						// The lack of proper sleep function and
						// hence threading in JavaScript is
						// just plain depressing.
						var i=0;
						var n=500;
						while(i<n){
							raudrohi.core.burnCPUcycles(2);
							if(change_state_2_in_progress_===false){
								b_crash=false;
								i=2*n;
							} // if
							i=i+1;
						} // while
					} // if
					if(b_crash===true){
						if(queued_jump_destination_===null){
							queued_jump_destination_=destination_state_name;
							return;
						} // if
						raudrohi.adapter.log('Warning: '+
							'GUID==16a1ee2c-258d-4070-81a1-00a755b4e179 '+
							'State "'+queued_jump_destination_+'" is in '+
							'the queue and the change_state_2(...) is still '+
							'executing, but a new state jump request (=="'+
							destination_state_name+'") came in.'+
							' In order to avoid possible brancings within '+
							'the state path, the maximum queue length '+
							'has been defined to 1.');
					} // if
				} // if
				change_state_2_in_progress_=true;
				var origin_vertex_name=self_public_.current_state_;
				if(destination_state_name===origin_vertex_name){
					change_state_2_queue_handling();
					return;
				} // if
				var ar_zeroables=get_names_of_zeroables(destination_state_name,
					origin_vertex_name);
				var len=ar_zeroables.length;
				var i=0;
				var zeroable_state_name;
				for(i=0;i<len;i++){
					zeroable_state_name=ar_zeroables[i];
					execute_edge('zero',zeroable_state_name);
				} // for
				if(destination_state_name=='zero'){
					var ar_keys_tmp1_len=ar_subwidgets_.length;
					var a_subwidget;
					for(i=0;i<ar_keys_tmp1_len;i++){
						a_subwidget=ar_subwidgets_[i];
						a_subwidget.state_switcher_.change_state_2('zero');
					} // for
				} // if
				execute_edge(destination_state_name,self_public_.current_state_);
				var origin_cluster_name=vertex2FirstCluster(origin_vertex_name);
				var destination_cluster_name=vertex2FirstCluster(
					destination_state_name);
				//				raudrohi.adapter.log('orig=='+origin_cluster_name +
				//					'  dest=='+destination_cluster_name+'  orig_vx=='+
				//					origin_vertex_name+'  dest_vx=='+destination_state_name);
				if(destination_cluster_name!=origin_cluster_name){
					var a_func;
					if(ht_cluster_exit_funcs_!==null){
						if(ht_cluster_exit_funcs_.containsKey(origin_cluster_name)){
							a_func=ht_cluster_exit_funcs_.get(origin_cluster_name);
							a_func();
						} // if
					} // if
					if(ht_cluster_entry_funcs_!==null){
						if(ht_cluster_entry_funcs_.containsKey(destination_cluster_name)){
							a_func=ht_cluster_entry_funcs_.get(
								destination_cluster_name);
							a_func();
						} // if
					} // if
				} // if
				previous_state_=self_public_.current_state_;
				self_public_.current_state_=destination_state_name;
				change_state_2_queue_handling()
			} catch (err){
				raudrohi.tmg('5b800d32-c35e-4156-b25d-53d03170abd7',
					err+'  ');
			} // catch
		}// change_state_2

		this.clear_declarations=function(new_initial_state){
			try{
				raudrohi.base.assert_isString(new_initial_state,
					'new_initial_state','1fc41cb4-6473-4962-a25d-53d03170abd7');
				ht_default_exit_funcs_.clear();
				ht_default_entry_funcs_.clear();
				ht_transition_funcs_.clear();
				self_public_.current_state_=new_initial_state;
			} catch (err){
				raudrohi.tmg('4e099c6f-43a8-4352-814d-53d03170abd7',err);
			} // catch
		} // clear_declarations

	} catch (err){
		raudrohi.tmg('1769fd23-13b9-4901-964d-53d03170abd7',err);
	} // catch
} // raudrohi.base.state_switcher_t1

//------------------------------------------------------------------------
// This method has been Copy-Pasted from
// http://www.bytemycode.com/snippets/snippet/400/
// in December 2009.
raudrohi.base.reverse_string=function(a_string){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(a_string,'a_string',
				'23007dda-6ea6-4106-ac4d-53d03170abd7');
		} // if
		if(a_string==''){
			return '';
		} // if
		var splitext = a_string.split("");
		var revertext = splitext.reverse();
		var reversed = revertext.join("");
		return reversed;
	} catch (err){
		raudrohi.tmg('0b1a2122-2b32-4146-9e4d-53d03170abd7',err+
			'  a_string=='+a_string);
	} // catch
} // raudrohi.base.reverse_string
//------------------------------------------------------------------------
raudrohi.base.count_substrings=function(s_haystack, s_needle){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_haystack,'s_haystack',
				'5b0b0851-df4c-442a-813d-53d03170abd7');
			raudrohi.base.assert_isString(s_needle,'s_needle',
				'd39a1847-52b5-4201-933d-53d03170abd7');
		} // if
		var len_needle=s_needle.length;
		var len0=s_haystack.length;
		var s=raudrohi.base.replace_all('',s_needle,s_haystack);
		var len1=s.length;
		var len_diff=len0-len1;
		var n=len_diff/len_needle;
		return n;
	} catch (err){
		raudrohi.tmg('27169f41-cc38-4d4c-823d-53d03170abd7',err);
	} // catch
} // raudrohi.base.count_substrings

raudrohi.base.selftests.count_substrings=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		var b;
		//---tests-start------------------
		var s;
		var s_needle;
		var n;
		s='Hi42ωЖ42ωЖThere!42ωЖ';
		s_needle='42ωЖ';
		n=raudrohi.base.count_substrings(s,s_needle);
		if(n!==3){
			ar_failed_tests.push('n=='+n+' | 42ωЖ');
		} // if
		s='HiAbAbAbAbThere!';
		s_needle='AbAb';
		n=raudrohi.base.count_substrings(s,s_needle);
		if(n!==2){
			ar_failed_tests.push('n=='+n+' | AbAb');
		} // if
		s='HiAbAbAbAbThere!';
		s_needle='AFAb';
		n=raudrohi.base.count_substrings(s,s_needle);
		if(n!==0){
			ar_failed_tests.push('n=='+n+' | AFAb');
		} // if
		s='XHi There!'
		s_needle='X';
		n=raudrohi.base.count_substrings(s,s_needle);
		if(n!==1){
			ar_failed_tests.push('n=='+n+' | X');
		} // if
		s='Hi There!Y'
		s_needle='Y';
		n=raudrohi.base.count_substrings(s,s_needle);
		if(n!==1){
			ar_failed_tests.push('n=='+n+' | Y');
		} // if
		s='Hi..There!'
		s_needle='.'; // Tests that it's not interpreted as a regex.
		n=raudrohi.base.count_substrings(s,s_needle);
		if(n!==2){
			ar_failed_tests.push('n=='+n+' | a point');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.base.selftests.count_substrings');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('76b6623a-94e6-470b-a42d-53d03170abd7',err);
	} // catch
} // raudrohi.base.selftests.count_substrings

//------------------------------------------------------------------------
raudrohi.base.regex_has_a_match=function(rgx,s_haystack){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			// The check fails for Google Chrome. For
			// some reason regexes are not objects for the
			// Google Chrome.
			// TODO: fix it.
			//raudrohi.base.assert_isObject(rgx,
			//	'rgx','0d8c4723-6f0e-4663-a42d-53d03170abd7');
			raudrohi.base.assert_isString(s_haystack, 's_haystack',
				'f009e45f-2fba-4d67-912d-53d03170abd7');
		} // if
		var b_out=false;
		var s=s_haystack.replace(rgx,"");
		if (s.length!=s_haystack.length){
			b_out=true;
		} // if
		return b_out;
	} catch (err){
		raudrohi.tmg('8fbd0725-814d-423d-b52d-53d03170abd7',err);
	} // catch
} // raudrohi.base.regex_has_a_match

raudrohi.base.selftests.regex_has_a_match=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var b=null;
		var s_haystack=null;
		var s_rgx=null;
		s_haystack="44..,4,,5..6";
		s_rgx='[.,]+'
		b=raudrohi.base.regex_has_a_match(new RegExp(s_rgx,"g"),s_haystack);
		if(b!==true){
			ar_failed_tests.push('s_haystack="'+s_haystack+'" '+
				's_rgx=="'+s_rgx+'"');
		} // if

		s_haystack="44..,4,,5..6";
		s_rgx='a+'
		b=raudrohi.base.regex_has_a_match(new RegExp(s_rgx,"g"),s_haystack);
		if(b!==false){
			ar_failed_tests.push('s_haystack="'+s_haystack+'" '+
				's_rgx=="'+s_rgx+'"');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.base.selftests.regex_has_a_match');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('28faf52d-36d8-4a3f-a41d-53d03170abd7',err);
	} // catch
} // raudrohi.base.selftests.regex_has_a_match

//------------------------------------------------------------------------

// For a case like "42wow.73"
raudrohi.base.private_code.string2float_regex1=new RegExp("[^\\d.\\-+,]","g");
// For a case like "42...5"
raudrohi.base.private_code.string2float_regex2=new RegExp("[.\\-+,][.\\-+,]+","g");
// For a case like "42.5.7" but it must let through "-5.4"
raudrohi.base.private_code.string2float_regex3=new RegExp("[.,][\\d]+[.,]","g");
// For a case like "42.4+7"
raudrohi.base.private_code.string2float_regex4=new RegExp("[\\d.,]+[\\-+]","g");

// Returns raudrohi.core.triple, where
// a_triple.a==false,  if the interpretation of the field
// content as float succeeded and a_triple.a==true, if
// the interpretation failed.
// If the operation succeeded, the a_triple.b is assigned
// a float value. Otherwise it is assigned null.
// If the a_string has a string value that depicts a whole number,
// then the whole number is converted to a floating point number.
//
// If the a_string is an empty string after trimming, then
// the operation is considered to be failed, i.e. a_triple.a===true,
// and the a_triple.c===true. If the a_string is not empty,
// regardless of the operation success/failure, the a_triple.c===false.
//
// A comma is interpreted as a point.
raudrohi.base.private_code.string2float=function(s_haystack){
	try{
		var s_preprocessed=null;
		var s1=null;
		var b=null;
		var rgx=null;
		s_preprocessed=raudrohi.base.replace_allAllLinebreaksSpacesTabs(s_haystack);
		s1=raudrohi.base.replace_all('.',',',s_preprocessed);
		s_preprocessed=raudrohi.adapter.trim(s1);
		var a_triple=new raudrohi.core.triple();
		a_triple.c=false;
		if(s_preprocessed===""){
			a_triple.a=true;
			a_triple.b=null;
			a_triple.c=true;
			return a_triple;
		} // if
		var fl_1;
		var b_extraction_complete=false;
		var b_sure_failure=false;
		try{
			fl_1=parseFloat(s_preprocessed);
			// The parseFloat parses successfully a string like "45AbracaDabra"
			// to 45.0. So, one has to check the parseability also for the
			// reverse string. In the case of the example:"arbaDacarbA54".
			var fl_trash=parseFloat(raudrohi.base.reverse_string(s_preprocessed));
			if(((''+fl_1)!='NaN')&&((''+fl_trash)!='NaN')){
				var n=raudrohi.base.count_substrings(s_preprocessed,'.');
				if(n<2){
					b_extraction_complete=true;
				} else {
					b_sure_failure=true;
				} // else
			} else {
				b_sure_failure=true;
			} // else
		} catch (err0){
		} // catch
		if(b_extraction_complete&&(!b_sure_failure)){
			b=false;
			// For a case like "42wow.73"
			rgx=raudrohi.base.private_code.string2float_regex1;
			b=raudrohi.base.regex_has_a_match(rgx,s_preprocessed);
			if (b===true){
				b_sure_failure=true;
			} else {
				// For a case like "42...5"
				rgx=raudrohi.base.private_code.string2float_regex2;
				b=raudrohi.base.regex_has_a_match(rgx,s_preprocessed);
				if (b===true){
					b_sure_failure=true;
				} else {
					// For a case like "42.5.7"
					rgx=raudrohi.base.private_code.string2float_regex3;
					b=raudrohi.base.regex_has_a_match(rgx,s_preprocessed);
					if (b===true){
						b_sure_failure=true;
					} else {
						// For a case like "42.4+7"
						rgx=raudrohi.base.private_code.string2float_regex4;
						b=raudrohi.base.regex_has_a_match(rgx,s_preprocessed);
						if (b===true){
							b_sure_failure=true;
						} // if
					} // else
				} // else
			} // else
		} // if
		if(b_extraction_complete&&(!b_sure_failure)){
			a_triple.a=false;
			a_triple.b=fl_1;
		}else {
			a_triple.a=true;
			a_triple.b=null;
		} // else
		return a_triple;
	} catch (err){
		raudrohi.tmg('03943a5c-c62e-4c68-b51d-53d03170abd7',err+
			'  s_haystack=='+s_haystack);
	} // catch
} // raudrohi.base.private_code.string2float


raudrohi.base.selftests.string2float_part1=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var a_triple;
		var b=true;
		a_triple=raudrohi.base.private_code.string2float(' 4,5 '); //Tests also for trimming.
		if(a_triple.a===true){
			b=false;
			ar_failed_tests.push('a) 4,5');
		} // if
		if(a_triple.a===false){
			b=false;
			if(a_triple.b!==4.5){
				ar_failed_tests.push('b) 4,5');
			} // if
			if(a_triple.b<4.5){
				ar_failed_tests.push('c) 4,5');
			} // if
		} // if
		if(b===true){
			ar_failed_tests.push('d) a_triple.a had an illegal value.');
		} // if
		a_triple=raudrohi.base.private_code.string2float('4.6a');
		if(a_triple.a===false){
			ar_failed_tests.push('4.6a');
		} // if
		if(a_triple.c===true){
			ar_failed_tests.push('4.6a  a_triple.c===true');
		} // if
		a_triple=raudrohi.base.private_code.string2float('a4.6');
		if(a_triple.a===false){
			ar_failed_tests.push('a4.6');
		} // if
		a_triple=raudrohi.base.private_code.string2float('4.7.');
		if(a_triple.a===false){
			ar_failed_tests.push('4.7.');
		} // if
		a_triple=raudrohi.base.private_code.string2float('4.8.1');
		if(a_triple.a===false){
			ar_failed_tests.push('4.8.1');
		} // if
		a_triple=raudrohi.base.private_code.string2float('4..9');
		if(a_triple.a===false){
			ar_failed_tests.push('4..9');
		} // if
		a_triple=raudrohi.base.private_code.string2float('5');
		if(a_triple.a===true){
			ar_failed_tests.push('5');
		} // if
		a_triple=raudrohi.base.private_code.string2float('-5');
		if(a_triple.a===true){
			ar_failed_tests.push('-5');
		} // if
		if(a_triple.c===true){
			ar_failed_tests.push('-5 a_triple.c===true');
		} // if
		a_triple=raudrohi.base.private_code.string2float('-5.1');
		if(a_triple.a===true){
			ar_failed_tests.push('-5.1');
		} // if
		a_triple=raudrohi.base.private_code.string2float('');
		if(a_triple.a===false){
			ar_failed_tests.push('an empty string, test 1');
		} // if
		if(a_triple.c===false){
			ar_failed_tests.push('an empty string, test 2');
		} // if
		a_triple=raudrohi.base.private_code.string2float('	 ');
		if(a_triple.a===false){
			ar_failed_tests.push('an empty string after trimming, test 1');
		} // if
		if(a_triple.c===false){
			ar_failed_tests.push('an empty string after trimming, test 2');
		} // if
		a_triple=raudrohi.base.private_code.string2float('69greetingsTo1984');
		if(a_triple.a===false){
			ar_failed_tests.push('69greetingsTo1984 was considered a float.');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.base.selftests.string2float_part1');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('cfba344e-747b-479b-a41d-53d03170abd7',err);
	} // catch
} // raudrohi.base.selftests.string2float_part1

raudrohi.base.string2float=function(a_string){
	try{
		var ht_out=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
		var a_triple=raudrohi.base.private_code.string2float(a_string);
		// The next if-else clause is a very weird hack.
		if(a_triple.a===true){
			ht_out.put('b_failure',true);
		} else {
			ht_out.put('b_failure',false);
		} // else
		if (a_triple.b===null){
			ht_out.put('value',0.0);
		}else {
			ht_out.put('value',a_triple.b);
		} // else
		ht_out.put('b_string_is_empty_after_trimming',a_triple.c);
		return ht_out;
	} catch (err){
		raudrohi.tmg('2170effc-3e6e-4984-a30d-53d03170abd7',
			'a_string=="'+a_string+'"  '+err);
	} // catch
} // raudrohi.base.string2float

raudrohi.base.selftests.string2float_part2=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s_test=null;
		var ht_1=null;
		var b=null;
		var fl=null;
		s_test="44,5";
		ht_1=raudrohi.base.string2float(s_test);
		b=ht_1.get('b_failure');
		if(b!==false){
			ar_failed_tests.push('b, s_test=='+s_test);
		} // if
		fl=ht_1.get('value');
		if(fl<44.5){
			ar_failed_tests.push('fl, s_test=='+s_test);
		} // if

		s_test="44,5,4";
		ht_1=raudrohi.base.string2float(s_test);
		b=ht_1.get('b_failure');
		if(b!==true){
			ar_failed_tests.push('b, s_test=='+s_test);
		} // if

		s_test="44+5";
		ht_1=raudrohi.base.string2float(s_test);
		b=ht_1.get('b_failure');
		if(b!==true){
			ar_failed_tests.push('b, s_test=='+s_test);
		} // if

		s_test="44-";
		ht_1=raudrohi.base.string2float(s_test);
		b=ht_1.get('b_failure');
		if(b!==true){
			ar_failed_tests.push('b, s_test=='+s_test);
		} // if
		raudrohi.base.pool_of_hashtables.return_used_hashtable(ht_1);
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.base.selftests.string2float_part2');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('16a10c34-b2ba-4ed2-920d-53d03170abd7',err);
	} // catch
} // raudrohi.base.selftests.string2float_part2

//-------------------------------------------------------------------------
// Returns a float.  If the origin type is not supported or
// the conversion is not possible, an exception will be thrown.
raudrohi.base.to_fd=function(i_or_s_or_fd){
	try{
		var s_in=''+i_or_s_or_fd;
		var ht=raudrohi.base.string2float(s_in);
		var b_failure=ht.get('b_failure');
		if(b_failure===true){
			raudrohi.tmg('15c92d51-52bc-42e3-910d-53d03170abd7',
				'Failed to convert the i_or_s_or_fd=='+i_or_s_or_fd+
				' to a floating point value.');
		} // if
		var fd_out=ht.get('value');
		return fd_out;
	} catch (err){
		raudrohi.tmg('1f4b0925-e36b-4a89-95fc-53d03170abd7',err);
	} // catch
} // raudrohi.base.to_fd

//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// It's a generic pool that uses an element factory and element resetter
// for creating elements and for resetting returned elemenets.
//
// The element factory is required to have method create_element(), which
// is required to return a new element. The element resetter is rquired
// to have a method named reset_element(element) and it does not have to
// return anything.
raudrohi.base.pool=function(element_factory, element_resetter){
	try{
		// TODO: Refactor it out so that there would be a "new" analogue,
		// like "get_from_pool" and each of the classes is required to
		// have a return_2_pool metohd that resetts the instance and
		// handles it back to the pool. A syntax example:
		//
		// x=get_from_pool(nice_class);
		// plapla
		// x.return_2_pool();
		//
		// The nice_class will probably need to have a field that encapsulates
		// some of the pooling related implementation.

		var self_public_=this;
		var pooled_elements_=[];
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(element_factory,
				'element_factory','3eb96c21-391c-40fb-b1fc-53d03170abd7');
			raudrohi.base.assert_isObject(element_resetter,
				'element_resetter','650cfafa-bf28-4579-b9fc-53d03170abd7');
			if(element_factory['create_element']===undefined){
				raudrohi.tmg('1529d733-b7c4-44a8-bffc-53d03170abd7',
					'The element_factory is missing a public metod '+
					'called "create_element".');
			} // if
			if(element_resetter['reset_element']===undefined){
				raudrohi.tmg('536bda16-d71a-4968-84ec-53d03170abd7',
					'The element_resetter is missing a public metod '+
					'called "reset_element".');
			} // if
			raudrohi.base.assert_isFunction(element_resetter.reset_element,
				'element_resetter.reset_element',
				'1264d050-863a-47ca-a2ec-53d03170abd7');
			raudrohi.base.assert_isFunction(element_factory.create_element,
				'element_factory.create_element',
				'82ea6089-5049-466a-aaec-53d03170abd7');
		} // if
		var element_factory_=element_factory;
		var element_resetter_=element_resetter;
		for(i=0;i<3;i++){
			pooled_elements_.push(element_factory_.create_element());
		} // for

		this.get_element=function(){
			try{
				var len=pooled_elements_.length;
				var elem;
				if(0<len){
					elem=pooled_elements_.pop();
				} else {
					elem=element_factory_.create_element();
				} // if
				return elem;
			} catch (err){
				raudrohi.tmg('a23c071f-b68a-40f9-a3dc-53d03170abd7',err);
			} // catch
		} // get_element


		this.return_used_element=function(an_element){
			try{
				// It might happen that elements that have not been
				// taken from this pool, get returned here. In that
				// case one wants to avoid the "flooding" and memory leak
				// by not taking the elements into the pool, while
				// cleaning them in order to facilitate their release
				// by the garbage collector.
				element_resetter_.reset_element(an_element);
				// The polhl is used for a FireFox 3.0.x bug workaround.
				var polhl=pooled_elements_.length;
				if(polhl<100){
					pooled_elements_.push(an_element);
				} // if
			} catch (err){
				raudrohi.tmg('46804a4d-1835-4a13-b3dc-53d03170abd7',err);
			} // catch
		} // return_used_element

		// The purpose of the method populate is to allow to
		// construct code that instantiates some of the pool
		// elements in a separate thread. The use of this
		// method is optional, i.e. the pool will instanteate
		// new elements whenever it runs out of them.
		this.populate=function(number_of_elements_to_fetch_and_return){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isNumber(
						number_of_elements_to_fetch_and_return,
						'number_of_elements_to_fetch_and_return',
						'251f57bc-79eb-4c24-94dc-53d03170abd7');
				} // if
				var ar=[];
				var len=number_of_elements_to_fetch_and_return
				var i=0;
				var elem;
				for(i=0;i<len;i++){
					elem=self_public_.get_element();
					ar.push(elem);
				} // for
				for(i=0;i<len;i++){
					elem=ar[i];
					self_public_.return_used_element(elem);
				} // for
			} catch (err){
				raudrohi.tmg('89237640-a771-4c2c-b5dc-53d03170abd7',err);
			} // catch
		} // populate

	} catch (err){
		raudrohi.tmg('fd2d8dda-c30e-4bee-93cc-53d03170abd7',err);
	} // catch
} // raudrohi.base.pool

//------------------------------------------------------------------------
// Always returns a boolean value.
raudrohi.base.node_exists=function(html_id){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(html_id, 'html_id',
				'7b53725e-733a-48bc-b3cc-53d03170abd7');
		} // if
		var b_exists=true;
		try{
			var x=document.getElementById(html_id);
			if((x===null)||(x===undefined)){
				b_exists=false;
			} // if
		} catch (err){
			b_exists=false;
		} // catch
		return b_exists;
	} catch (err){
		raudrohi.tmg('5ed4d94c-9d2b-4e20-93cc-53d03170abd7',err);
	} // catch
} // raudrohi.base.node_exists

raudrohi.base.selftests.node_exists=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		var b=false;
		//---tests-start------------------
		var s='ItS_nOt_veRy_liKeLy_tO_h2ve_ThiS6S_nnno0ooDE_InNpN_th9XE_DOM72';
		b=raudrohi.base.node_exists(s);
		if(b===true){
			ar_failed_tests.push('Probably nonexisting DOM node <br/>'+
				'got considered to exist.');
		} // if
		// The node with an id of "output_screen" is
		// part of the run_selftests.html.
		b=raudrohi.base.node_exists('output_screen');
		if(b===false){
			ar_failed_tests.push('Node "output_screen" was <br/>'+
				'considered to be missing.');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.base.selftests.node_exists');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('379ad46f-42a2-4891-aebc-53d03170abd7',err);
	} // catch
} // raudrohi.base.selftests.node_exists

//------------------------------------------------------------------------
window.raudrohi.base.private_code.count_child_nodes_recursively=function(
	parent_node){
	var ar_children_nodes=parent_node.childNodes;
	var len=ar_children_nodes.length;
	var i=0;
	var elem;
	var n=0;
	var x=0;
	// The node with an id of "wow" in the following example has 5 children.
	// One of them is the text node for text that resides between the
	// div-tags with id-s of "A" and "B":
	// <div id="wow">
	//     Text node #1 with nodeType==3
	//     <div id="A">whatever</div>
	//     <div id="B">whatever</div>
	//     Text node #3 with nodeType==3
	// </div>
	// However, one only wants to count the HTML tag nodes.
	while((i<len)&&(0<=n)){
		elem=ar_children_nodes[i];
		if(elem.nodeType===1){
			n++;
			try {
				x=raudrohi.base.private_code.count_child_nodes_recursively(elem);
				if(0<=x){
					n=n+x;
				} else {
					n=(-1);
				} // if
			} catch (exception) {
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.tmg('7a75184b-c440-4473-91bc-53d03170abd7',
						'Exception in the recursive counting '+
						'of the child nodes. '+exception);
				} // if
				n=(-1);
			} // catch
		} // if
		i++;
	} // while
	return n;
} // raudrohi.base.private_code.count_child_nodes_recursively


// Returns an integer. The parent node, i.e. the container node, is
// expected to exist in the DOM or it throws an exception. It checks
// the count at least twice and waits till the number of children
// stabilizes.
raudrohi.base.count_child_nodes_recursively=function(html_id_of_the_parent){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(html_id_of_the_parent,
				'html_id_of_the_parent',
				'68477750-1829-49b2-acbc-53d03170abd7');
			if(raudrohi.base.node_exists(html_id_of_the_parent)!==true){
				raudrohi.tmg('18d7c711-6def-471c-93ac-53d03170abd7',
					'There\'s no node with id=="'+html_id_of_the_parent+
					'" in the DOM tree.');
			} // if
		} // if
		var container_node=document.getElementById(html_id_of_the_parent);
		var number_of_checks_max=3;
		var number_of_checks_done=0;
		var n0=0;
		var n1=0;
		var x;
		var b=true;
		try{
			while(number_of_checks_done<number_of_checks_max){
				number_of_checks_done++;
				x=raudrohi.base.private_code.count_child_nodes_recursively(
					container_node);
				if(x<0){
					number_of_checks_done=0;
				} // if
				if(b===true){
					n1=x;
					b=false;
				} else {
					n0=x;
					b=true;
				} // else
				if(n1!==n0){
					number_of_checks_done=0;
				} // if
			} // while
			return n0;
		} catch (err){
			raudrohi.tmg('4b693065-f1cf-4ae5-8cac-53d03170abd7',err);
		} // catch
	} catch (err){
		raudrohi.tmg('cc021e4d-2aa5-42e8-93ac-53d03170abd7',err);
	} // catch
} // raudrohi.base.count_child_nodes_recursively

raudrohi.base.selftests.count_child_nodes_recursively=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		var b=false;
		//---tests-start------------------
		var id='for_testing_the_raudrohi_base_selftests_count_'+
		'child_nodes_recursively';
		var n=raudrohi.base.count_child_nodes_recursively(id);
		if(n!==6){
			ar_failed_tests.push('6!=n=='+n);
		} // if
		n=raudrohi.base.count_child_nodes_recursively(id+'2');
		if(n!==0){
			ar_failed_tests.push('0!=n=='+n);
		} // if
		n=raudrohi.base.count_child_nodes_recursively(id+'3');
		if(n!==0){
			ar_failed_tests.push('0!=n=='+n);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.base.selftests.count_child_nodes_recursively');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('4f4d0c72-b0dc-4b9d-be9c-53d03170abd7',err);
	} // catch
} // raudrohi.base.selftests.count_child_nodes_recursively
//------------------------------------------------------------------------

raudrohi.base.node_tag_is=function(node_tag_caseinsensitive_name, a_node){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(node_tag_caseinsensitive_name,
				'node_tag_caseinsensitive_name',
				'd768d933-c0cb-4ab8-819c-53d03170abd7');
			raudrohi.base.assert_isObject(a_node, 'a_node',
				'e38f753b-f93a-4e87-919c-53d03170abd7');
		} // if
		var s_expected=node_tag_caseinsensitive_name.toLowerCase();
		var s_tag=a_node.nodeName.toLowerCase();
		if(s_expected===s_tag){
			return true;
		} // if
		return false;
	} catch (err){
		raudrohi.tmg('36c19163-e2f7-432b-845c-53d03170abd7',err);
	} // catch
} // raudrohi.base.node_tag_is

raudrohi.base.selftests.node_tag_is=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		var b=false;
		//---tests-start------------------
		var id='for_testing_the_raudrohi_base_selftests_count_'+
		'child_nodes_recursively';
		var a_node=document.getElementById(id);
		if(raudrohi.base.node_tag_is('div',a_node)!==true){
			ar_failed_tests.push('failure 1 at div');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.base.selftests.node_tag_is');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('85495479-a48c-427f-985c-53d03170abd7',err);
	} // catch
} // raudrohi.base.selftests.node_tag_is

//------------------------------------------------------------------------
// The main and only purpose of this function is to work around
// a set of bugs in the FireFox and the Micro$oft Internet Expolorer,
// whenever it is possible at all.
//
// The main bug, that as of March 2010 seems to be present on both,
// Internet Explorer and FireFox, is that
// the innerHTML does not work properly in
// nested tables. The raudrohi.base.set_innerHTML does not
// contain a workaround to that fault. One can read more about the
// fault at: http://www.jonlee.ca/cant-use-innerhtml-on-tables-in-ie-heres-why/
// and http://www.ericvasilik.com/2006/07/code-karma.html
//
// From the comments of
// http://www.sweetvision.com/2007/04/08/dynamic-tables-in-javascript-for-ie-and-firefox/
// I read that, supposedly, the dom methods of insertRow() and
// insertCell() work in some cases. In practice, as of March 2010
// the innerHTML seems to work on the very first table, but not in
// nested tables.
//
//
// A few references to the FireFox bug, which often emerges from the
// comments of the postings:
// http://www.kenvillines.com/archives/69.html
// http://bytes.com/topic/javascript/answers/478639-innerhtml-bug-mozilla-firefox-ajax
// http://www.designerstalk.com/forums/help-me/9793-javascript-innerhtml-firefox-alternative.html
//
// A few references to the Micro$oft Internet Explorer bug:
// http://domscripting.com/blog/display/99
// http://alexle.net/archives/150
//
// For credits one mentions that the solution of
// creating a fresh DOM node and attatching it to the DOM tree
// originates from the http://domscripting.com/blog/display/99
// According to the http://domscripting.com/blog/display/99 the
// original author of the workaround is Toby Cole.
//
// And last, but not least, the "IE is Being Mean to Me",
// an original song written and performed by Scott Ward, sums it all up.
// http://www.youtube.com/watch?v=vTTzwJsHpU8
raudrohi.base.set_innerHTML=function(html_id, a_string){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(html_id, 'html_id',
				'29935716-0d02-4e86-b15c-53d03170abd7');
			raudrohi.base.assert_isString(a_string, 'a_string',
				'2edfbd4b-a09d-4113-a24c-53d03170abd7');
			if(raudrohi.base.node_exists(html_id)!==true){
				raudrohi.tmg('43483072-e04f-481f-ac4c-53d03170abd7',
					'There\'s no node with id=="'+html_id+
					'" in the DOM tree.');
			} // if
		} // if
		var node_container = document.getElementById(html_id);
		// The following loop has been copy-pasted from
		// http://snippets.jc21.com/snippets/javascript/remove-all-children-from-a-node/
		while (node_container.hasChildNodes()===true) {
			node_container.removeChild(node_container.firstChild);
		}// while
		var node_a=document.createElement('div');
		node_a.innerHTML=a_string;
		node_container.appendChild(node_a);
	} catch (err){
		raudrohi.tmg('b129a779-5d6b-4417-954c-53d03170abd7',err);
	} // catch
} //raudrohi.base.set_innerHTML


// For buffering.
raudrohi.base.private_code.string_contains_spacestabs_regex=new RegExp("[\\s]","g");

raudrohi.base.string_contains_spacestabs=function(s_haystack){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_haystack, 's_haystack',
				'9efd1f36-3eb0-4466-933c-53d03170abd7');
		} // if
		var b_out=false;
		var rgx=raudrohi.base.private_code.string_contains_spacestabs_regex;
		var s=s_haystack.replace(rgx,"");
		if (s.length!==s_haystack.length){
			b_out=true;
		} // if
		return b_out;
	} catch (err){
		raudrohi.tmg('bf31b839-4cca-4856-a13c-53d03170abd7',err);
	} // catch
} // raudrohi.base.string_contains_spacestabs

raudrohi.base.selftests.string_contains_spacestabs=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var b=null;
		var s=null;
		s='NoSpacesTabsHere';
		b=raudrohi.base.string_contains_spacestabs(s);
		if(b!==false){
			ar_failed_tests.push('s=='+s);
		} // if
		s='One SpaceInHere';
		b=raudrohi.base.string_contains_spacestabs(s);
		if(b!==true){
			ar_failed_tests.push('s=='+s);
		} // if
		s='One	TabInHere';
		b=raudrohi.base.string_contains_spacestabs(s);
		if(b!==true){
			ar_failed_tests.push('s=='+s);
		} // if
		s='Both Spaces	and Tabs	in here';
		b=raudrohi.base.string_contains_spacestabs(s);
		if(b!==true){
			ar_failed_tests.push('s=='+s);
		} // if
		s='OneSpaceAtTheEnd ';
		b=raudrohi.base.string_contains_spacestabs(s);
		if(b!==true){
			ar_failed_tests.push('s=='+s);
		} // if
		s=' OneSpaceAtTheStart';
		b=raudrohi.base.string_contains_spacestabs(s);
		if(b!==true){
			ar_failed_tests.push('s=='+s);
		} // if
		s='OneTabAtTheEnd	';
		b=raudrohi.base.string_contains_spacestabs(s);
		if(b!==true){
			ar_failed_tests.push('s=='+s);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.base.selftests.string_contains_spacestabs');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('c4ec159b-443f-4051-b62c-53d03170abd7',err);
	} // catch
} // raudrohi.base.selftests.string_contains_spacestabs

//------------------------------------------------------------------------
// Returns a string. It's useful for debugging.
raudrohi.base.ht2s_t1=function(ht){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(ht,'ht',
				'7913fe2c-cc0c-4a39-822c-53d03170abd7');
		} // if
		var keys=ht.keys();
		var len=keys.length;
		var key;
		var s_out="";
		var lc_s_linebreak="\n";
		var lc_s_equlsequals="==";
		for(var i=0;i<len;i++){
			key=keys[i];
			s_out=s_out+lc_s_linebreak+
			key+lc_s_equlsequals+ht.get(key);
		} // for
		s_out=s_out+lc_s_linebreak;
		return s_out;
	} catch (err){
		raudrohi.tmg('abb80d2f-8c2d-4b64-812c-53d03170abd7',err);
	} // catch
} // raudrohi.base.ht2s_t1

//------------------------------------------------------------------------
