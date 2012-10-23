// This file has been assembled by martin.vahi@softf1.com and it
// contains a mixture of code written by other people and code
// that has been written by the martin.vahi@softf1.com.
//
// Everything in namespace raudrohi, except its dependencies,
// is written by the martin.vahi@softf1.com and is under the BSD license.
// -----The--start--of--the--BSD--license---------------------------------
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
// -----The--end----of--the--BSD--license---------------------------------
//
// The rest of the code here is under various
// licenses, but all of it is commercially usable without paying any
// license fees. If all of the code is necessary anyway, then by
// placing them to a single file reduces the number of HTTP-requests.
//========================================================================

//------------------------------------------------------------------------
// Copyright 2009 Tim Down.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//------------------------------------------------------------------------

//  SHA-256 implementation in JavaScript (c) Chris Veness 2005-2009
//  License: GNU-LGPL
//  Downloaded by martin.vahi@softf1.com in August 2009 from
//  http://www.movable-type.co.uk/scripts/sha256.html
//
//  I(Martin Vahi) also slightly refactored it by changing some of the
//  original functions to private.
//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function sha256hash(msg) {

	function ROTR(n, x) {
		return (x >>> n) | (x << (32-n));
	}
	function Sigma0(x) {
		return ROTR(2,  x) ^ ROTR(13, x) ^ ROTR(22, x);
	}
	function Sigma1(x) {
		return ROTR(6,  x) ^ ROTR(11, x) ^ ROTR(25, x);
	}
	function sigma0(x) {
		return ROTR(7,  x) ^ ROTR(18, x) ^ (x>>>3);
	}
	function sigma1(x) {
		return ROTR(17, x) ^ ROTR(19, x) ^ (x>>>10);
	}
	function Ch(x, y, z)  {
		return (x & y) ^ (~x & z);
	}
	function Maj(x, y, z) {
		return (x & y) ^ (x & z) ^ (y & z);
	}

	// constants [§4.2.2]
	var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
	0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be,
	0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1,
	0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc,
	0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3,
	0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
	0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1,
	0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
	0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3,
	0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814,
	0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
	// initial hash value [§5.3.1]
	var H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
	0x9b05688c, 0x1f83d9ab, 0x5be0cd19];

	// PREPROCESSING

	msg += String.fromCharCode(0x80);  // add trailing '1' bit (+ 0's padding) to string [§5.1.1]

	// convert string msg into 512-bit/16-integer blocks arrays of ints [§5.2.1]
	var l = msg.length/4 + 2;  // length (in 32-bit integers) of msg + ‘1’ + appended length
	var N = Math.ceil(l/16);   // number of 16-integer-blocks required to hold 'l' ints
	var M = new Array(N);

	for (var i=0; i<N; i++) {
		M[i] = new Array(16);
		for (var j=0; j<16; j++) {  // encode 4 chars per integer, big-endian encoding
			M[i][j] = (msg.charCodeAt(i*64+j*4)<<24) | (msg.charCodeAt(i*64+j*4+1)<<16) |
			(msg.charCodeAt(i*64+j*4+2)<<8) | (msg.charCodeAt(i*64+j*4+3));
		} // note running off the end of msg is ok 'cos bitwise ops on NaN return 0
	}
	// add length (in bits) into final pair of 32-bit integers (big-endian) [§5.1.1]
	// note: most significant word would be (len-1)*8 >>> 32, but since JS converts
	// bitwise-op args to 32 bits, we need to simulate this by arithmetic operators
	M[N-1][14] = ((msg.length-1)*8) / Math.pow(2, 32);
	M[N-1][14] = Math.floor(M[N-1][14]);
	M[N-1][15] = ((msg.length-1)*8) & 0xffffffff;


	// HASH COMPUTATION [§6.1.2]

	var W = new Array(64);
	var a, b, c, d, e, f, g, h;
	for (var ii=0; ii<N; ii++) {

		// 1 - prepare message schedule 'W'
		for (var t=0;  t<16; t++) {
			W[t] = M[ii][t];
		}
		for (var tt=16; tt<64; tt++) {
			W[tt] = (sigma1(W[tt-2]) + W[tt-7] +
				sigma0(W[tt-15]) + W[tt-16]) & 0xffffffff;
		} // for

		// 2 - initialise five working variables a, b, c, d, e with previous hash value
		a = H[0];
		b = H[1];
		c = H[2];
		d = H[3];
		e = H[4];
		f = H[5];
		g = H[6];
		h = H[7];

		// 3 - main loop (note 'addition modulo 2^32')
		for (var ttt=0; ttt<64; ttt++) {
			var T1 = h + Sigma1(e) + Ch(e, f, g) + K[ttt] + W[ttt];
			var T2 = Sigma0(a) + Maj(a, b, c);
			h = g;
			g = f;
			f = e;
			e = (d + T1) & 0xffffffff;
			d = c;
			c = b;
			b = a;
			a = (T1 + T2) & 0xffffffff;
		}
		// 4 - compute the new intermediate hash value (note 'addition modulo 2^32')
		H[0] = (H[0]+a) & 0xffffffff;
		H[1] = (H[1]+b) & 0xffffffff;
		H[2] = (H[2]+c) & 0xffffffff;
		H[3] = (H[3]+d) & 0xffffffff;
		H[4] = (H[4]+e) & 0xffffffff;
		H[5] = (H[5]+f) & 0xffffffff;
		H[6] = (H[6]+g) & 0xffffffff;
		H[7] = (H[7]+h) & 0xffffffff;
	}
	return H[0].toHexStr() + H[1].toHexStr() + H[2].toHexStr() +
	H[3].toHexStr() + H[4].toHexStr() + H[5].toHexStr() +
	H[6].toHexStr() + H[7].toHexStr();
} // sha256hash(...)


// extend Number class with a tailored hex-string method
//   (note toString(16) is implementation-dependant, and
//   in IE returns signed numbers when used on full words)
//
Number.prototype.toHexStr = function() {
	var s="";
	var v;
	for (var i=7; i>=0; i--) {
		v = (this>>>(i*4)) & 0xf;
		s += v.toString(16);
	}
	return s;
};

//------------------------------------------------------------------------

// The way the browser loads and initis the JavaScript files
// is really weird.
//
// It seems that JavaScript files get parsed in the order that they are
// received from the server and that order may differ from the
// order that the JavaScript files are listed in the HTML, because browsers may
// use more than one thread and JavaScript files have different sizes.
//
// However, the info does not seem to propagate properly between
// different JavaScript files, so one just finds out experimentally,
// to which file one may/have to place various namespace creation codes.
// It's just plain depressing. Depressing.

//-------------
// Outcommented, because it is in the raudrohi_core_hashtable_t1_v19.js
//if(window.raudrohi_exists!==true){
//	window.raudrohi={};
//	window.raudrohi_exists=true;
//} // if
//if(window.raudrohi_core_exists!==true){
//	window.raudrohi.core={};
//	window.raudrohi_core_exists=true;
//} // if
//if(window.raudrohi_core_selftests!==true){
//	window.raudrohi.core.selftests={};
//	window.raudrohi_core_selftests=true;
//} // if
//-----------

if(window.raudrohi_selftests_exists!==true){
	window.raudrohi.selftests={};
	window.raudrohi_selftests_exists=true;
} // if
if(window.raudrohi_selftests_ar_tests_1_exists!==true){
	window.raudrohi.selftests.ar_tests_1=new Array();
	window.raudrohi_selftests_ar_tests_1_exists=true;
} // if

if(window.raudrohi_core_constans_as_reusable_instances_exists!==true){
	window.raudrohi.core.constans_as_reusable_instances={};
	window.raudrohi_core_constans_as_reusable_instances_exists=true;
} // if
if(window.raudrohi_settings_exists!==true){
	window.raudrohi.settings={};
	window.raudrohi_settings_exists=true;
} // if
if(window.raudrohi_settings_runtime_exists!==true){
	window.raudrohi.settings.runtime={};
	window.raudrohi_settings_runtime_exists=true;
} // if

//---------
// The subject_to_replacement_ns is a namespace that is
// used in a selftests file template. To keep the
// selftests file template up to date, flawless, it is included
// to live selftests. If the testable namespaces are never
// created within the selftests files, then it's possible
// to detect typos that occur at the replacement of the
// subject_to_replacement_ns. To keep the namespace instantiation
// outside of the template while the template itself is
// switched into the selftests system, the
// subject_to_replacement_ns is instantiated here, at the next 3 lines:
if(window.raudrohi_subject_to_replacement_ns_exists!==true){
	raudrohi.subject_to_replacement_ns={};
	window.raudrohi_subject_to_replacement_ns_exists=true;
} // if

//---------

if(window.angervaks_exists!==true){
	window.angervaks={};
	window.angervaks_exists=true;
} // if
if(window.angervaks_settings_exists!==true){
	window.angervaks.settings={};
	window.angervaks_settings_exists=true;
} // if
if(window.angervaks_globals_exists!==true){
	window.angervaks.globals={};
	window.angervaks_globals_exists=true;
} // if
if(window.angervaks_instances_exists!==true){
	window.angervaks.instances={};
	window.angervaks_instances_exists=true;
} // if
if(window.angervaks_ui_exists!==true){
	window.angervaks.ui={};
	window.angervaks_ui_exists=true;
} // if
if(window.angervaks_ui_widgets_exists!==true){
	window.angervaks.ui.widgets={};
	window.angervaks_ui_widgets_exists=true;
} // if
if(window.angervaks_ui_widgets_globals_exists!==true){
	window.angervaks.ui.widgets.globals={};
	window.angervaks_ui_widgets_globals_exists=true;
} // if


raudrohi.settings.debug_JavaScript=true;
raudrohi.settings.debug_SERVERSIDE=false;
raudrohi.settings.ajax_request_timeout=3600  // seconds

window.raudrohi.settings.runtime.write_exception_stack_2_log=false;

// We'll keep 1 bit "safety distance" (32-signbit-1=30).
// After all, we're deeling with a crappy webstuff
// here and one never knows, what a hell the JavaScript
// core developperes have done again.
raudrohi.core.safe_positive_int=1073741823; //==2^30-1, 0 is a positive number.


raudrohi.core.pair=function(){
	this.a=null;
	this.b=null;
}; // raudrohi.core.pair

raudrohi.core.triple=function(){
	this.a=null;
	this.b=null;
	this.c=null;
}; // raudrohi.core.triple
//------------------------------------------------------------------------
raudrohi.tmg=function(GUID,err){
	// The raudrohi.tmg will be overridden in the raudrohi_adapter_v1.js
	var msg="23597041-c925-4974-948e-2190a0219bd7"+
	GUID+"\"\n"+err;
	throw msg;
	return msg;
}; // raudrohi.tmg

//------------------------------------------------------------------------
// ECMAScript
// (http://www.ecma-international.org/publications/standards/Ecma-262.htm )
// does not support constants.
window.raudrohi.core.constans_as_reusable_instances.glc_s_emptystring="";
window.raudrohi.core.constans_as_reusable_instances.glc_s_space=" ";
window.raudrohi.core.constans_as_reusable_instances.glc_s_point=".";
window.raudrohi.core.constans_as_reusable_instances.glc_s_br="<br/>";
window.raudrohi.core.constans_as_reusable_instances.glc_s_linebreak="\n";
window.raudrohi.core.constans_as_reusable_instances.glc_sb_true="t";
window.raudrohi.core.constans_as_reusable_instances.glc_sb_false="f";
window.raudrohi.core.constans_as_reusable_instances.glc_s_zero="0";
window.raudrohi.core.constans_as_reusable_instances.glc_s_unix_time="unix_time";
window.raudrohi.core.constans_as_reusable_instances.glc_s_label1="s_label1";
window.raudrohi.core.constans_as_reusable_instances.glc_s_label2="s_label2";
//------------------------------------------------------------------------
// 't'->true
// 'f'->false
raudrohi.core.str2bool=function(a_string){
	try{
		var answer;
		if(!raudrohi.adapter.isString(a_string)){
			raudrohi.tmg('93452d5a-6cd0-4e6c-b58e-2190a0219bd7',
				'a_string is not a string.');
		} // if
		if(a_string=='t'){
			answer=true
		}
		else{
			if(a_string=='f'){
				answer=false
			}
			else{
				raudrohi.tmg('28c12428-a7fc-4048-b57e-2190a0219bd7',
					'a_string=='+a_string+'TheEndOf_the_a_string');
			} // else
		} // else
		return answer;
	} catch (err){
		raudrohi.tmg('19024835-cc20-44d3-8b7e-2190a0219bd7',err);
	} // catch
} // raudrohi.core.str2bool

raudrohi.core.bool2str=function(a_boolean){
	try{
		if(!raudrohi.adapter.isBoolean(a_boolean)){
			raudrohi.tmg('50bbcb26-05f3-4f0d-b27e-2190a0219bd7',
				'The a_boolean is not a boolean and it '+
				'has a value of '+a_boolean);
		} // if
		var answer;
		switch(a_boolean){
			case true:
				answer='t';
				break;
			case false:
				answer='f';
				break;
			default:
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.tmg('GUID=="6d90a613-ee2b-4153-a17e-2190a0219bd7"',
						'There\'s no branching for a_boolean(=='+a_boolean+
						').');
				} // if
		} // switch
		return answer;
	} catch (err){
		raudrohi.tmg('2e313702-a123-45c8-be7e-2190a0219bd7',err);
	} // catch
} // raudrohi.core.bool2str

//------------------------------------------------------------------------
window.raudrohi_core_burnCPUcycles_helpervar=0;
// This is the classic dirty, code monkey way of implementing the delay()
// function. Hooray to the JavaScript language design!!!
raudrohi.core.burnCPUcycles=function(number_of_batches){
	try{
		if(number_of_batches<0){
			raudrohi.tmg('c08f5c29-700f-4200-837e-2190a0219bd7',
				'number_of_batches(=='+number_of_batches+') < 0');
		} // if
		var i=0;
		while((i++)<=number_of_batches){
			window.raudrohi_core_burnCPUcycles_helpervar=number_of_batches+
			window.raudrohi_core_burnCPUcycles_helpervar;
			if((i%3)==0){
				// The if-clause is to make it harder for the interpreter
				// to optimize this loop.
				window.raudrohi_core_burnCPUcycles_helpervar++;
			} // if
		} // while
	} catch (err){
		raudrohi.tmg('5cc8d722-3ec9-45b8-987e-2190a0219bd7',err);
	} // catch
} // raudrohi.core.burnCPUcycles
//------------------------------------------------------------------------
raudrohi.core.isWithinClosedInterval=function(infimum,candidate,supremum){
	try{
		if(candidate<infimum){
			return false;
		} // if
		if(supremum<candidate){
			return false;
		} // if
		return true;
	} catch (err){
		raudrohi.tmg('2413f495-b8b4-45f7-857e-2190a0219bd7',err);
	} // catch
} // raudrohi.core.isWithinClosedInterval

//------------------------------------------------------------------------
raudrohi.core.isWithinKeyeventKeyCodes_bounds=[8,9,  13,13,  16,20,  27,27,
	33,40,  45,57, 65,93,  96,107,  109,123,  144,145,  186,192,  219,222];
raudrohi.core.isWithinKeyeventKeyCodes=function(key_code_candidate){
	try{
		var halve_len=Math.floor(
			raudrohi.core.isWithinKeyeventKeyCodes_bounds.length/2+0.01);
		var i=0;
		var ii=0;
		var b;
		var lower_bound;
		var upper_bound;
		for(i=0;i<halve_len;i++){
			ii=i*2;
			lower_bound=raudrohi.core.isWithinKeyeventKeyCodes_bounds[ii];
			upper_bound=raudrohi.core.isWithinKeyeventKeyCodes_bounds[ii+1];
			b=raudrohi.core.isWithinClosedInterval(lower_bound,
				key_code_candidate,upper_bound);
			if(b){
				return true;
			} // if
		} // for
		return false;
	} catch (err){
		raudrohi.tmg('10ba6f46-5012-4262-a47e-2190a0219bd7',err);
	} // catch

} // raudrohi.core.isWithinKeyeventKeyCodes

//------------------------------------------------------------------------

// The is_defined method can not be defined, because one
// can not pass undefined values to functions/methods in JavaScript.
//
// This selftest is for testing the workaround of the is_defined
// method. The COMMENTS.txt has a more indepth conception of the topic.
raudrohi.core.selftests.a_woraround_to_is_defined=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		if(typeof(window.a_woraround_to_is_defined_CraZyMrLove)!=="undefined"){
			ar_failed_tests.push('a_woraround_to_is_defined_CraZyMrLove');
		} // if
		if(typeof(window.Hashtable)==="undefined"){
			ar_failed_tests.push('Hashtable');
		} // if
		var ggg=4;
		if((typeof(window.ggg)==="undefined")&&(typeof(ggg)==="undefined")){
			ar_failed_tests.push('ggg 1');
		} // if
		function ct(){
			if(((typeof(window.ggg)==="undefined")&&(typeof(ggg)==="undefined"))){
				ar_failed_tests.push('ggg 2');
			} // if
		} // ct
		if(typeof(window.raudrohi.core)==="undefined"){
			ar_failed_tests.push('raudrohi.core');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.core.selftests.a_woraround_to_is_defined');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('d58ead2e-46cf-4649-b37e-2190a0219bd7',err);
	} // catch
} // raudrohi.core.selftests.a_woraround_to_is_defined

//------------------------------------------------------------------------
