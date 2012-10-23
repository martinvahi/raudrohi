///------------------------------------------------------------------------
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
if(window.raudrohi_exists!==true){
	window.raudrohi={};
	window.raudrohi_exists=true;
} // if

if(window.raudrohi_core_exists!==true){
	window.raudrohi.core={};
	window.raudrohi_core_exists=true;
} // if

if(window.raudrohi_core_selftests!==true){
	window.raudrohi.core.selftests={};
	window.raudrohi_core_selftests=true;
} // if

window.raudrohi.core.sring_1_for_instance_reuse="_tron_";


// The purpose of this class is to replace the
// Tim Down version of the Hashtable class with
// a different implementation.
//
// The style of the  public API of this class is
// explaned by the fact that the purpose of
// this implementation is to be an almost-drop-in-replacement
// to the Tim Down's 2009 version.
//
// Some code for copy-pasting:
//
// var ht=new Hashtable();
// ht.put('apple', 41)
// ht.put('pie', 42)
// var keys=ht.keys(); var len=keys.length;
// var key; var reference_to_the_value;
// for(var i=0;i<len;i++){
//     key=keys[i];
//     reference_to_the_value=ht.get(key);
//     } // for
//
// This implementation is NOT threadsafe, except for
// the get method, but as hashtable is a data container,
// then at places, where thread safety matters the hashtable
// is wrapped to a critical section anyway at application level.
var Hashtable=function(){

	// lookup optimization
	var lc_s_pfx_=window.raudrohi.core.sring_1_for_instance_reuse;

	var ar_keys_=new Array();
	var ht_={};

	// Throws an exception, if the value does not exist.
	this.get=function(s_key){
		var s_k=lc_s_pfx_+s_key;
		var x_out=ht_[s_k];
		if(x_out===undefined){
			throw "There's no key named \""+s_key+"\"."+
			'GUID="5d3eab17-0f45-4bd8-b26f-a190a0219bd7"'
		} // if
		return x_out;
	} // get

	this.put=function(s_key,x_value){
		var s_k=lc_s_pfx_+s_key;
		// From thread safety point of view it's safer,
		// if a key exists in ht_ and is missing from the
		// ar_keys_ than vice versa. That explains, why the
		// ht_[s_k]=x_value; is not after the if-statement.
		if(ht_[s_k]===undefined){
			ht_[s_k]=x_value;
			ar_keys_.push(s_key);
		} else {
			ht_[s_k]=x_value;
		} // if
	} // put

	this.containsKey=function(s_key){
		var s_k=lc_s_pfx_+s_key;
		if(ht_[s_k]===undefined){
			return false;
		} // if
		return true;
	} // containsKey

	this.clear=function(){
		delete ar_keys_;
		ar_keys_=new Array();
		delete ht_;
		ht_={};
	} // clear

	this.keys=function(){
		return ar_keys_
	} // keys

	this.remove=function(s_key){
		var len=ar_keys_.length;
		if(len===0){
			return;
		} // if
		var s_k=lc_s_pfx_+s_key;
		if(ht_[s_k]===undefined){
			return;
		} // if
		var ar_keys_new=new Array(len-1);
		var ar_keys_old=ar_keys_;
		var i=0;
		var ii=0;
		var elem;
		for(i=0;i<len;i++){
			elem=ar_keys_old[i];
			if(elem!==s_key){
				ar_keys_new[ii]=elem;
				ii++;
			} // if
		} // for
		ar_keys_=ar_keys_new;
		delete ht_[s_k];
		delete ar_keys_old;
	} // remove

	this.size=function(){
		var i=ar_keys_.length
		return i;
	} // size
} // Hashtable

raudrohi.core.selftests.hashtable=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var ht_t=new Hashtable();
		var s=null;
		s="HunkZone";
		ht_t.put(s,"hi");
		if(ht_t.containsKey("HunkZone")===false){
			ar_failed_tests.push(s);
		} // if
		if(ht_t.get("HunkZone")!=="hi"){
			ar_failed_tests.push(s+" wrong value=="+ht_t.get("HunkZone"));
		} // if
		ht_t.put("Wow","wwww");
		if(ht_t.containsKey("HunkZone")===false){
			// Checks for changes after additional pair entry.
			ar_failed_tests.push('test 2');
		} // if
		if(ht_t.containsKey("Wow")===false){
			ar_failed_tests.push('test 3');
		} // if
		if(ht_t.containsKey("wow")===true){ // Case sensitivity test
			ar_failed_tests.push('test 4');
		} // if
		if(ht_t.size()!==2){
			ar_failed_tests.push('test 5');
		} // if
		if(ht_t.get("Wow")!=="wwww"){
			ar_failed_tests.push("test 6 wrong value=="+ht_t.get("Wow"));
		} // if
		if(ht_t.containsKey("HunkZone")===false){
			// Just in case, because the "Wow" key got added.
			ar_failed_tests.push('test 7');
		} // if
		ht_t.remove("HunkZone");
		if(ht_t.containsKey("HunkZone")===true){
			ar_failed_tests.push('test 8');
		} // if
		if(ht_t.containsKey("Wow")===false){
			ar_failed_tests.push('test 9');
		} // if
		if(ht_t.size()!==1){
			ar_failed_tests.push('test 10');
		} // if
		ht_t.put("Gee","Weeeee");
		if(ht_t.size()!==2){
			ar_failed_tests.push('test 11');
		} // if
		ht_t.clear();
		if(ht_t.size()!==0){
			ar_failed_tests.push('test 12');
		} // if
		if(ht_t.containsKey("Gee")===true){
			ar_failed_tests.push('test 13');
		} // if
		ht_t.put("Gee","mmmmmm");
		if(ht_t.size()!==1){
			ar_failed_tests.push('test 14');
		} // if
		ht_t.put("Gee","Overwrite a value at key Gee");
		if(ht_t.size()!==1){
			ar_failed_tests.push('test 15');
		} // if
		ht_t.put("Weee","A value");
		if(ht_t.size()!==2){
			ar_failed_tests.push('test 16');
		} // if
		ht_t.remove("Gee");
		if(ht_t.size()!==1){
			ar_failed_tests.push('test 17');
		} // if
		// Multiple remove to test size accountancy.
		ht_t.remove("Gee");
		if(ht_t.size()!==1){
			ar_failed_tests.push('test 18');
		} // if
		if(ht_t.containsKey("Weee")===false){
			ar_failed_tests.push('test 19');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.core.selftests.hashtable');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		throw 'GUID=="cb76e659-feee-4aa8-836f-a190a0219bd7", err=='+err;
	} // catch
} // raudrohi.core.selftests.hashtable

//------------------------------------------------------------------------
