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

if(window.raudrohi_base_selftests_exists!==true){
	raudrohi.base.selftests={};
	window.raudrohi_base_selftests_exists=true;
} // if

//-------------------------------------------------------------------------
try{
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.base.selftests.JS_boolean_ops);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.base.selftests.replace_all);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.base.selftests.count_substrings);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.base.selftests.regex_has_a_match);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.base.selftests.string2float_part1);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.base.selftests.string2float_part2);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.base.selftests.node_exists);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.base.selftests.count_child_nodes_recursively);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.base.selftests.node_tag_is);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.base.selftests.bisect);
	raudrohi.selftests.ar_tests_1.push(
		raudrohi.base.selftests.string_contains_spacestabs);
} catch (err){
	raudrohi.tmg('b4b5ce66-4565-4225-b2b5-61f26030abd7',
		'Usually if things throw here, then it is because it is '+
		'in global namespace and the onload mehtod has '+
		'not been loaded yet.'+err);
} // catch


//-------------------------------------------------------------------------
raudrohi.base.selftests.a_set_of_tests_1=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var a_pair=null;
		var s_hay="ABC";
		a_pair=raudrohi.base.bisect(s_hay,'B');
		if(a_pair.a!=="A"){
			ar_failed_tests.push('s_hay=="'+s_hay+
				'" a_pair.a=="'+a_pair.a+'" a_pair.b=="'+a_pair.b+'".');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.base.selftests.a_set_of_tests_1');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('2b95c6a1-fbfb-4cd0-8b25-61f26030abd7',err);
	} // catch
} // raudrohi.base.selftests.a_set_of_tests_1
raudrohi.selftests.ar_tests_1.push(
	raudrohi.base.selftests.a_set_of_tests_1);

//=========================================================================
