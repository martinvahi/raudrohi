//------------------------------------------------------------------------
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
//------------------------------------------------------------------------

// If it crashes here due to the lack of the window.raudrohi.adapter,
// then one must make sure that the JavaSript file that
// creates the window.raudrohi.adapter is loaded before
// this file, because the tests depend on the content
// of the window.raudrohi.adapter.
if(window.raudrohi_adapter_selftests_exists!==true){
	window.raudrohi.adapter.selftests={};
	window.raudrohi_adapter_selftests_exists=true;
} // if

window.raudrohi.adapter.selftests.common={};
window.raudrohi.adapter.selftests.common.typechecks={};

//------------------------------------------------------------------------

window.raudrohi.adapter.selftests.common.isString=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		/*
		var x='xx';
		if(raudrohi.adapter.selftests.common.isString(x)!==true){
			ar_failed_tests.push('!==true, x=='+x);
		} // if
		x=42;
		if(raudrohi.adapter.selftests.common.isString(x)!==false){
			ar_failed_tests.push('!==false, x=='+x);
		} // if
		*/
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.adapter.selftests.common.isString');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('b428c438-1aad-4786-a211-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.common.isString

window.raudrohi.adapter.selftests.common.isArray=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		/*
		var x=new Array();
		if(raudrohi.adapter.selftests.common.isArray(x)!==true){
			ar_failed_tests.push('!==true, x=='+x);
		} // if
		x=42;
		if(raudrohi.adapter.selftests.common.isArray(x)!==false){
			ar_failed_tests.push('!==false, x=='+x);
		} // if
		*/
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.adapter.selftests.common.isArray');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('90e38344-6b72-4a34-a311-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.common.isArray

window.raudrohi.adapter.selftests.common.isNumber=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		/*
		var x=42;
		if(raudrohi.adapter.selftests.common.isNumber(x)!==true){
			ar_failed_tests.push('!==true, x=='+x);
		} // if
		x='this is not a number';
		if(raudrohi.adapter.selftests.common.isNumber(x)!==false){
			ar_failed_tests.push('!==false, x=='+x);
		} // if
		*/
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.adapter.selftests.common.isNumber');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('7660d55a-675b-4699-8301-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.common.isNumber

window.raudrohi.adapter.selftests.common.isBoolean=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		/*
		var x=true;
		if(raudrohi.adapter.selftests.common.isBoolean(x)!==true){
			ar_failed_tests.push('!==true, for true, x=='+x);
		} // if
		x=false;
		if(raudrohi.adapter.selftests.common.isBoolean(x)!==true){
			ar_failed_tests.push('!==true, for false, x=='+x);
		} // if
		x=42;
		if(raudrohi.adapter.selftests.common.isBoolean(x)!==false){
			ar_failed_tests.push('!==false, x=='+x);
		} // if
		*/
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.adapter.selftests.common.isBoolean');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('42425831-fde3-48e3-8501-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.common.isBoolean

window.raudrohi.adapter.selftests.common.isObject=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		/*
		var a_class=function(){}
		var x=new a_class();
		if(raudrohi.adapter.selftests.common.isObject(x)!==true){
			ar_failed_tests.push('!==true, x=='+x);
		} // if
		x=42;
		if(raudrohi.adapter.selftests.common.isObject(x)!==false){
			ar_failed_tests.push('!==false, x=='+x);
		} // if
		*/
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.adapter.selftests.common.isObject');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('a5017c51-70e5-47d8-9501-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.common.isObject

window.raudrohi.adapter.selftests.common.isUndefined=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		/*
		if(raudrohi.adapter.selftests.common.isUndefined(x)!==true){
			ar_failed_tests.push('!==true, x=='+x);
		} // if
		var x=null;
		if(raudrohi.adapter.selftests.common.isUndefined(x)!==false){
			ar_failed_tests.push('!==false, for null, x=='+x);
		} // if
		x=42;
		if(raudrohi.adapter.selftests.common.isUndefined(x)!==false){
			ar_failed_tests.push('!==false, for 42, x=='+x);
		} // if
		*/
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.adapter.selftests.common.isUndefined');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('4593d9b3-7c8b-4bce-ab01-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.common.isUndefined

// A citation from YUI 3.3.0 documentation:
//
// -----citation--start------
// A convenience method for detecting a legitimate non-null value.
// Returns false for null/undefined/NaN, true for other values, including 0/false/''.
// -----citation--end -------
//
window.raudrohi.adapter.selftests.common.isValue=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		/*
		var x='xx';
		if(raudrohi.adapter.selftests.common.isValue(x)!==true){
			ar_failed_tests.push('!==true, x=='+x);
		} // if
		x=42;
		if(raudrohi.adapter.selftests.common.isValue(x)!==false){
			ar_failed_tests.push('!==false, x=='+x);
		} // if
		*/
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.adapter.selftests.common.isValue');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('61315b41-a00c-4687-b901-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.common.isValue

window.raudrohi.adapter.selftests.common.isFunction=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		/*
		var x='xx';
		if(raudrohi.adapter.selftests.common.isFunction(x)!==true){
			ar_failed_tests.push('!==true, x=='+x);
		} // if
		x=42;
		if(raudrohi.adapter.selftests.common.isFunction(x)!==false){
			ar_failed_tests.push('!==false, x=='+x);
		} // if
		*/
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.adapter.selftests.common.isFunction');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('f400f011-7689-40e1-a101-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.common.isFunction


window.raudrohi.adapter.selftests.common.typechecks.all=function(ar_of_ht){
	try{
		ar_of_ht.push(window.raudrohi.adapter.selftests.common.isString());
		ar_of_ht.push(window.raudrohi.adapter.selftests.common.isArray());
		ar_of_ht.push(window.raudrohi.adapter.selftests.common.isNumber());
		ar_of_ht.push(window.raudrohi.adapter.selftests.common.isBoolean());
		ar_of_ht.push(window.raudrohi.adapter.selftests.common.isObject());
		ar_of_ht.push(window.raudrohi.adapter.selftests.common.isUndefined());
		ar_of_ht.push(window.raudrohi.adapter.selftests.common.isValue());
		ar_of_ht.push(window.raudrohi.adapter.selftests.common.isFunction());
	} catch (err){
		raudrohi.tmg('7ec06653-c953-4d5f-8301-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.common.typechecks.all

//------------------------------------------------------------------------
window.raudrohi.adapter.selftests.common.all=function(ar_of_ht){
	try{
		window.raudrohi.adapter.selftests.common.typechecks.all(ar_of_ht);
	} catch (err){
		raudrohi.tmg('e1041c4f-2286-4867-a501-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.common.all

//------------------------------------------------------------------------

//------------------------------------------------------------------------
window.raudrohi.adapter.selftests.yui_3_0=function(ar_of_ht){
	try{
		window.raudrohi.adapter.selftests.common.all(ar_of_ht);
	} catch (err){
		raudrohi.tmg('58f9f8e4-521e-4b4c-b301-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.yui_3_0


window.raudrohi.adapter.selftests.yui_3_3_0=function(ar_of_ht){
	try{
		window.raudrohi.adapter.selftests.common.all(ar_of_ht);
	} catch (err){
		raudrohi.tmg('6df7c34e-3ba9-47e6-b401-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.yui_3_3_0

//------------------------------------------------------------------------

// In addition of being a single point of entry to the
// whole set of raudrohi.adapter selftests, this
// function exists to allow raudrohi port specific
// testing. Indeed, ports can differ, because the
// raudrohi evolves and the backbones that
// handle web browser normalization, also evolves,
// just like web browesers do.
window.raudrohi.adapter.selftests.all_in_port=function(ar_of_ht,port_name){
	try{
		port_name = typeof(port_name) !== 'undefined' ? port_name : raudrohi.adapter.ports.selected_port_name;
		switch(port_name){
			case 'YUI_3_0':
				window.raudrohi.adapter.selftests.yui_3_0(ar_of_ht);
				break;
			case 'YUI_3_3_0':
				window.raudrohi.adapter.selftests.yui_3_3_0(ar_of_ht);
				break;
			default:
				if(raudrohi.settings.debug_JavaScript===true){
					throw 'GUID=="6e635927-134c-43d0-a311-e140a0219bd7"  '+
					'There\'s no branching for port_name(=='+port_name+
					').';
				} // if
		} // switch
	} catch (err){
		raudrohi.tmg('fc9d1e4c-3c72-42c2-a301-e140a0219bd7',err);
	} // catch
} // window.raudrohi.adapter.selftests.all_in_port

//------------------------------------------------------------------------
//------------------------------------------------------------------------
