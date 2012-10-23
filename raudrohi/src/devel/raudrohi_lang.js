//=========================================================================
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
//=========================================================================
if(window.raudrohi_lang_exists!==true){
	window.raudrohi.lang={};
	window.raudrohi_lang_exists=true;
} // if
if(window.raudrohi_lang_private_code_exists!==true){
	window.raudrohi.lang.private_code={};
	window.raudrohi_lang_private_code_exists=true;
} // if
if(window.raudrohi_lang_debug_exists!==true){
	window.raudrohi.lang.debug={};
	window.raudrohi_lang_debug_exists=true;
} // if
if(window.raudrohi_lang_comm_exists!==true){
	window.raudrohi.lang.comm={};
	window.raudrohi_lang_comm_exists=true;
} // if
if(window.raudrohi_lang_comm_phonestation_exists!==true){
	window.raudrohi.lang.comm.phonestation={};
	window.raudrohi_lang_comm_phonestation_exists=true;
} // if
if(window.raudrohi_lang_comparison_exists!==true){
	window.raudrohi.lang.comparison={};
	window.raudrohi_lang_comparison_exists=true;
} // if
if(window.raudrohi_lang_comparison_goe_exists!==true){
	window.raudrohi.lang.comparison.goe={};
	window.raudrohi_lang_comparison_goe_exists=true;
} // if

if(window.raudrohi_lang_selftests_exists!==true){
	// TODO: move all selftests from this file to the selftests file.
	raudrohi.lang.selftests={};
	window.raudrohi_lang_selftests_exists=true;
} // if


//-------------------------------------------------------------------------
window.raudrohi_core_burnCPUcycles_helpervar_=0;
window.raudrohi_core_burnCPUcycles_helpervar2_=0;
// This is the classic dirty, code monkey way of implementing the delay()
// function. Hooray to the JavaScript language design!!!
raudrohi.core.burnCPUcycles=function(number_of_batches){
	try{
		if(number_of_batches<0){
			raudrohi.tmg('d2b3660a-240d-474d-8b4e-405380b0abd7',
				'number_of_batches(=='+number_of_batches+') < 0');
		} // if
		var i=0;
		while((i++)<=number_of_batches){
			window.raudrohi_core_burnCPUcycles_helpervar_=number_of_batches+
			window.raudrohi_core_burnCPUcycles_helpervar_;
			if((i%3)==0){
				// The if-clause is to make it harder for the interpreter
				// to optimize this loop.
				window.raudrohi_core_burnCPUcycles_helpervar_++;
			} // if
			var s_vardec_in_a_loop=""+(i%23);
			switch(s_vardec_in_a_loop){
				case '1':
					window.raudrohi_core_burnCPUcycles_helpervar_=2+i+
					window.raudrohi_core_burnCPUcycles_helpervar_;
					break;
				case '7':
					window.raudrohi_core_burnCPUcycles_helpervar_=5-i+
					window.raudrohi_core_burnCPUcycles_helpervar_;
					break;
				case '17':
					window.raudrohi_core_burnCPUcycles_helpervar2_=11+
					window.raudrohi_core_burnCPUcycles_helpervar_+
					number_of_batches;
					break;
				default:
			} // switch
		} // while
	} catch (err){
		raudrohi.tmg('39e09042-e07e-4224-af1d-405380b0abd7',err);
	} // catch
} // raudrohi.core.burnCPUcycles


//-------------------------------------------------------------------------
// The htQueue is a hashtable based queue implementaton.
// It's written by martin.vahi@softf1.com and is in
// public domain. It depends on the hashtable library by Tim Down.
//
// The idea is that for every element pushed to the queue,
// one increases a counter N and the element that is the
// first to pop always resides at the least possible index,
// which also increases with every removal of a queue element.
// it's not even meant to be a very efficient implementation,
// but the adding and removing of queue elements does not impose
// any copying or shifting of them, except when the N reaches
// its maximum, which is determined by the integer type.
//
// It has a property that the value of its elements can be
// efectively replaced while the elements stay in the queue.
raudrohi.lang.htQueue=function(){
	// The -100 is a dirty, incorrect, thing for safety due to the
	// non-threadsafetyness of the queue.
	var N_max_=raudrohi.core.safe_positive_int-100;
	var N_high_=1; // 0 is interpreted as null in Hashtable().
	var N_low_=1;
	var ht_=new Hashtable();

	// Element ID-s are the strings that can be used for
	// accessing the elements in the queue from the outer world
	// in a random access manner. The ht_keys_ associates them
	// with the actual keys of the ht_.
	var ht_keys_=new Hashtable();
	var ht_keys_reverse_=new Hashtable();

	function rehash_if_needed(){
		// The sole purpose of this function is to shift the
		// indexes back next to 1.
		try{
			if(N_high_<N_max_) {
				return;
			}
			if(N_low_==1) {
				throw "htQueue.push(): Queue maximum length exceeded.";
			}
			var elemIDs=ht_keys_.keys();
			var new_ht=new Hashtable();
			var elemID;
			var old_ht_key;
			var new_ht_key;
			var len=elemIDs.length;
			for (var i = 0 ; i < len; i++){
				elemID=elemIDs[i];
				old_ht_key=ht_keys_.get(elemID);
				new_ht_key=old_ht_key-N_low_+1;
				new_ht.put(new_ht_key, ht_.get(old_ht_key));
				ht_keys_.put(elemID,new_ht_key);
				ht_keys_reverse_.remove(old_ht_key);
				ht_keys_reverse_.put(new_ht_key,elemID);
			} // for
			N_high_=N_high_-N_low_+1;
			N_low_=1;
			ht_=new_ht;
		}
		catch (err){
			raudrohi.tmg('16597791-6104-4d60-b84d-405380b0abd7',err);
		} // catch
	} // rehash_if_needed()

	// Returns a string that allow one to replace the element
	// within the queue. Returns an element_id that is a key to
	// the element in the hashtable.
	this.push=function(element){
		try{
			rehash_if_needed();
			var elem_id=raudrohi.base.generate_id();
			ht_keys_.put(elem_id,N_high_);
			ht_keys_reverse_.put(N_high_,elem_id);
			ht_.put(N_high_++, element);
			return elem_id;
		} catch (err){
			raudrohi.tmg('355ec1d8-89e8-4590-80cd-405380b0abd7',err);
		} // catch
	}; // this.push

	this.is_empty=function(){
		return (N_high_===N_low_);
	}; // this.is_empty()

	// Returns null, if the queue is empty.
	this.pop=function(){
		try{
			if(N_low_==N_high_) {
				return null;
			}
			var elem=ht_.get(N_low_);
			var elem_id=ht_keys_reverse_.get(N_low_);
			ht_keys_reverse_.remove(N_low_);
			ht_.remove(N_low_++);
			ht_keys_.remove(elem_id);
			if(N_low_==N_high_){
				// We'll avoid the costly rehashing.
				N_low_=1;
				N_high_=1;
			} // if
			return elem;
		} catch (err){
			raudrohi.tmg('641751b0-218f-449e-889d-405380b0abd7',err);
		} // catch
	}; // this.pop

	this.length=function(){
		return N_high_-N_low_;
	}; // this.length

	// Replaces a value of an element. The new element will
	// have exactly the same position in the queue as the old one.
	// Returns true, if operation succeeded. Otherwise returns false.
	this.replace_value=function(element_id,element_new_value){
		if(ht_keys_.containsKey(element_id)!==true) {
			return false;
		}
		try{
			// The try is because some other thread might
			// intervene, for example, the element might be
			// popped or something. In the case of this method.
			// one actually relies on this "thread safety".
			var htkey=ht_keys_.get(element_id);
			ht_.put(htkey,element_new_value);
			return true;
		} catch (err) {
			if(raudrohi.settings.debug_JavaScript===true){
				raudrohi.tmg('1d34a675-f1b5-48c5-8f2d-405380b0abd7',err);
			}
			return false;
		} // catch
		return false; // Just to get rid of IDE warnings.
	}; // this.replace_value

	// Returns a reference to the element. The element_id is
	// expected to be the one that got returned  by the push().
	// Returns null, if the element_id is invalid or the
	// element has been removed from the queue.
	this.get=function(element_id){
		try{
			if(ht_keys_.containsKey(element_id)!==true) {
				return null;
			} // if
			var htkey=ht_keys_.get(element_id);
			var elem=ht_.get(htkey);
			return elem;
		}
		catch (err){
			raudrohi.tmg('54aaaa02-73a2-44be-bc4d-405380b0abd7',err);
		} // catch
	} // get

	// The same as the pop a clone or reference to the
	// element is returned in stead of the real instance and the
	// queue is left unchanged. It returns null, if the queue is
	// empty.
	this.get_a_clone_of_the_first_element_to_exit=function(){
		try{
			if(N_low_==N_high_) {
				return null;
			}
			var elem=ht_.get(N_low_);
			return elem;
		} catch (err){
			raudrohi.tmg('a19c5803-3b23-4801-a54c-405380b0abd7',err);
		} // catch
	}; // this.get_a_clone_of_the_first_element_to_exit

	// Empties the queue.
	this.clear=function(){
		ht_.clear();
		N_low_=1;
		N_high_=1;
	}; // this.clear
}; // raudrohi.lang.htQueue

//-------------------------------------------------------------------------
// a_function_name is expected to be a string.
// ht is an instance of the Tim Down's Hashtable class.
// a_function_argument is whatever, which is not null
raudrohi.lang.map_hashtable=function(ht,a_function_name,a_function_argument){
	try{
		// TODO: refactor it heavily. Further comments reside next to 
		// the raudrohi.lang.map_hashtable_t2
		var keys=ht.keys();
		var ht_key;
		var reference2_ht_value;
		var a_func;
		var cmd='a_func=reference2_ht_value.'+a_function_name+';';
		var len=keys.length;
		for (var i = 0 ; i < len; i++){
			ht_key=keys[i];
			reference2_ht_value=ht.get(ht_key);
			eval(cmd,this);
			a_func(a_function_argument);
		} // for
	}
	catch (err){
		raudrohi.tmg('4247a782-b67c-4f13-b05c-405380b0abd7',err);
	} // catch
}; // raudrohi.lang.map_hashtable

// It's the same as the raudrohi.lang.map_hashtable, except that
// for argumentless functions.
raudrohi.lang.map_hashtable_t2=function(ht,a_function_name){
	try{
		// TODO: refactor it out by merging it with the
		// raudrohi.lang.map_hashtable and turning that
		// to a general version that takes the number of
		// function arguments in as an integer or uses reflection
		// to find that out.
		var keys=ht.keys();
		var ht_key;
		var reference2_ht_value;
		var a_func;
		var cmd='a_func=reference2_ht_value.'+a_function_name+';';
		var len=keys.length;
		for (var i = 0 ; i < len; i++){
			ht_key=keys[i];
			reference2_ht_value=ht.get(ht_key); // It's being used in the eval.
			eval(cmd,this);
			a_func();
		} // for
	}
	catch (err){
		raudrohi.tmg('344a3a75-a784-40b2-885c-405380b0abd7',err);
	} // catch
}; // raudrohi.lang.map_hashtable_t2

//------------------------------------------------------------------------

// multiply_string('Hi',3)==='HiHiHi'. It's inspired by the Ruby
// feature, where 'Hi'*3==='HiHiHi'.
raudrohi.lang.multiply_string=function(a_string, an_integer){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(a_string,'a_string',
				'd613da1c-c557-4f9e-931c-405380b0abd7');
			raudrohi.base.assert_isNumber(an_integer,'an_integer',
				'659326b8-9f43-45d9-ba2c-405380b0abd7');
		} // if
		if(an_integer<0){
			raudrohi.tmg('53b91c21-a40e-4883-a52c-405380b0abd7',
				'an_integer(=='+an_integer+')<0');
		} // if
		if(an_integer===0){
			return '';
		} // if
		var s='';
		for(var i=0;i<an_integer;i++){
			s=s+a_string;
		} // for
		return s;
	}
	catch (err){
		raudrohi.tmg('b108f4c1-2966-4699-921c-405380b0abd7',err);
	} // catch
} // raudrohi.lang.multiply_string


//------------------------------------------------------------------------
// Returns HTML string of a table that has one row and 3 columns.
// Only the center column is visible.
raudrohi.lang.fixed_width_string_html=function(fixed_string_length,
	substring,substring_horizontal_alignment){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isNumber(fixed_string_length,
				'fixed_string_length','48b7ce12-9c4e-4de3-804b-405380b0abd7');
			raudrohi.base.assert_isString(substring,'substring',
				'54689ea2-afe1-43ad-ad4b-405380b0abd7');
			raudrohi.base.assert_isString(substring_horizontal_alignment,
				'substring_horizontal_alignment',
				'24ef00f3-a551-4e4b-834b-405380b0abd7');
			if(fixed_string_length<substring.length){
				raudrohi.tmg('1d408e45-f96c-44d8-882b-405380b0abd7',
					'fixed_string_length == '+fixed_string_length+
					' < substring.length == '+substring.length);
			} // if
		} // if
		var s_left='';
		var s_center=raudrohi.adapter.trim(substring);
		var s_right='';
		var n_of_spaces=fixed_string_length-s_center.length;
		var x;
		var xx;
		var s_an_em='&nbsp;';//'x';
		switch(substring_horizontal_alignment){
			case 'left':
				s_right=raudrohi.lang.multiply_string(s_an_em, n_of_spaces);
				break;
			case 'right':
				s_left=raudrohi.lang.multiply_string(s_an_em, n_of_spaces);
				break;
			case 'center':
				if((n_of_spaces%2)===0){
					x=n_of_spaces/2;
					xx=raudrohi.lang.multiply_string(s_an_em, x);
					s_left=xx;
					s_right=xx;
				} else {
					x=(n_of_spaces-1)/2;
					xx=raudrohi.lang.multiply_string(s_an_em, x);
					s_left=xx;
					s_right=xx+s_an_em;
				} // else
				break;
			default:
				if(raudrohi.settings.debug_JavaScript===true){
					throw raudrohi.tmg(
						'4f831c25-1109-4575-8e1b-405380b0abd7',
						'There\'s no branching for substring_horizontal_alignment(=='+
						substring_horizontal_alignment+').');
				} // if
		} // switch
		//		var answer=''+
		//		'<table class="raudrohi_positioning_table"><tbody>'+
		//		'<tr>'+
		//		'<td><div style="visibility:visible;">'+s_left+'</div></td>'+
		//		'<td><div style="visibility:visible;">'+s_center+'</div></td>'+
		//		'<td><div style="visibility:visible;">'+s_right+'</div></td>'+
		//		'</tr>'+
		//		'</tbody></table>';
		var answer=s_left+s_center+s_right;
		return answer;
	} catch (err){
		raudrohi.tmg('19203f32-8b41-4cb5-984b-405380b0abd7',err);
	} // catch
} // fixed_width_string_html

//------------------------------------------------------------------------
// The impl exist only for easying the testing.
raudrohi.lang.generate_nonexisting_needle_impl=function(haystack_string,
	an_integer){
	try{
		raudrohi.base.assert_isString(haystack_string,'haystack_string',
			'2f1e62f4-bbe7-4a41-964b-405380b0abd7');
		var s0=raudrohi.base.normalize_whitespaces(haystack_string);
		var s1=raudrohi.base.normalize_linebreaks(s0);
		s0=raudrohi.base.replace_all('', ' ', s1);
		s1=raudrohi.base.replace_all('', "\n", s0);
		s0='X'+an_integer;
		while (s1.indexOf(s0,0)!=(-1)){
			s0+='Y';
		} // while
		return s0;
	}
	catch (err){
		raudrohi.tmg('10943a41-67b1-45ad-855b-405380b0abd7',err);
	} // catch
} // generate_nonexisting_needle_impl

// It's quite an expensive function. It returns a string that is not
// present within the haystack string. It interprets the haystack_string
// as if all of its linebreaks and spaces were empty strings.
raudrohi.lang.generate_nonexisting_needle=function(haystack_string){
	try{
		var s_needle=raudrohi.lang.generate_nonexisting_needle_impl(
			haystack_string,raudrohi.base.rand(100, 999));
		return s_needle;
	} catch (err){
		raudrohi.tmg('4718e194-5175-4453-bb4a-405380b0abd7',err);
	} // catch
} // generate_nonexisting_needle

raudrohi.lang.selftests.generate_nonexisting_needle=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s='aroundaboutla51wsomebodyX5';
		var s_needle=raudrohi.lang.generate_nonexisting_needle_impl(s,7);
		if(s_needle!=='X7'){
			ar_failed_tests.push('X7, s_needle=='+s_needle);
		} // if
		s_needle=raudrohi.lang.generate_nonexisting_needle_impl(s,5);
		if(s_needle!=='X5Y'){
			ar_failed_tests.push('X5Y, s_needle=='+s_needle);
		} // if
		var b=false;
		try{
			s_needle=raudrohi.lang.generate_nonexisting_needle(s);
		}
		catch (err0){
			b=true;
		}// catch err0
		if(b){
			ar_failed_tests.push('b, s_needle=='+s_needle);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.generate_nonexisting_needle');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	}
	catch (err){
		raudrohi.tmg('22155118-591e-40e8-883a-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.generate_nonexisting_needle

//------------------------------------------------------------------------

// Retunrs an array of lines. The array always contains at
// least one element. Basically, it's almost just a wrapper to the JavaScript
// split() method, but it takes care of the different kinds of
// linebreaks and it assumes that the linebreak always separates
// 2 strings, even if they are empty strings. For example, a string like
// "\nAbba\nCa\dabbra\n" is split to 5 lines, the first and the last
// line are considered to consist of an empty string.
raudrohi.lang.str2lines=function(a_string){
	try{
		raudrohi.base.assert_isString(a_string,'a_string',
			'a96636d3-a6e7-4d32-a34a-405380b0abd7');
		var ar=[];
		if(a_string===''){
			ar.push(a_string);
			return ar;
		} // if
		var s0=raudrohi.base.normalize_linebreaks(a_string);
		// The trickery is due to a fact that the JavaScript
		// standard split does not work with  the "\n".
		var s_needle_linebreak=raudrohi.lang.generate_nonexisting_needle(s0);
		var s_needle_bounds=raudrohi.lang.generate_nonexisting_needle(s0+
			s_needle_linebreak);
		var s1=raudrohi.base.replace_all(
			s_needle_bounds+s_needle_linebreak+s_needle_bounds,"\n",s0);
		ar=s1.split(s_needle_linebreak);
		var ar1=[];
		var len=ar.length;
		var i=0;
		var s_line;
		for(i=0;i<len;i++){
			s_line=ar[i];
			ar1.push(raudrohi.base.replace_all('',s_needle_bounds,s_line));
		} // for
		return ar1;
	} catch (err){
		raudrohi.tmg('94262394-1bd9-44c7-ab1a-405380b0abd7',err);
	} // catch
} // str2lines

raudrohi.lang.selftests.str2lines=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s="line1\nline2";
		var ar=raudrohi.lang.str2lines(s);
		// One has to store the ar.length to the x, because otherwise the
		// FireFox 3.0.x won't handle the case correctly.
		var x=ar.length;
		if(x!=2){
			ar_failed_tests.push('2!=ar.lenght=='+x);
		} // if
		if(ar[0]!=='line1'){
			ar_failed_tests.push('l1 ar[0]!=\'line1\'=='+ar[0]);
		} // if
		if(ar[1]!=='line2'){
			ar_failed_tests.push('l2 ar[1]!=\'line2\'=='+ar[1]);
		} // if
		s="\nline77\nline99\n";
		ar=raudrohi.lang.str2lines(s);
		x=ar.length; // Do not refactor this line out. See the comment above.
		if(x!=4){
			ar_failed_tests.push('4!=ar.lenght=='+x);
		} // if
		if(ar[0]!==''){
			ar_failed_tests.push('4liner ar[0]=='+ar[0]);
		}// if
		if(ar[3]!==''){
			ar_failed_tests.push('4liner ar[3]=='+ar[3]);
		}// if
		if(ar[1]!=='line77'){
			ar_failed_tests.push('4liner ar[1]=='+ar[1]);
		}// if
		if(ar[2]!=='line99'){
			ar_failed_tests.push('4liner ar[2]=='+ar[2]);
		}// if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name','raudrohi.lang.selftests.str2lines');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('2c66b131-0384-43e4-9d4a-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.str2lines


// Converts a multiline string to a HTML string of a table. It retains
// all spaces, including multiple spaces.
raudrohi.lang.fixed_size_string_html=function(a_multiline_string){
	try{
		raudrohi.base.assert_isString(a_multiline_string,'a_multiline_string',
			'270b0a14-8eee-4f33-953a-405380b0abd7');
		var s_html='<table class="raudrohi_positioning_table"><tbody>';
		var s1=raudrohi.base.replace_all('&nbsp;', ' ',
			raudrohi.base.normalize_whitespaces(a_multiline_string));
		var ar=raudrohi.lang.str2lines(s1);
		var len=ar.length;
		var i=0;
		var elem;
		for(i=0;i<len;i++){
			elem=ar[i];
			s_html=s_html+'<tr><td>'+elem+'</td></tr>';
		} // for
		s_html=s_html+'</tbody></table>';
		return s_html;
	} catch (err){
		raudrohi.tmg('5a2a55b1-2c7e-49cc-8eda-405380b0abd7',err);
	} // catch
} // fixed_size_string_html

//-------------------------------------------------------------------------
raudrohi.lang.comm.phonecall=function(origin_phone_number,
	destination_phone_number,data,data2){
	raudrohi.base.assert_isString(data,'data',
		'948f9656-3a90-4460-b6f6-405380b0abd7');
	this.data=data;
	// data2 is for optional binary data transfer
	this.data2=0;
	if(typeof(data2) !== "undefined"){
		this.data2=data2;
	} // if
	this.dest_phone_number=destination_phone_number;
	this.origin_phone_number=origin_phone_number;
}; //raudrohi.lang.comm.phonecall

// key   == raudrohi.lang.comm.phone.phone_number
// value == raudrohi.lang.comm.phone
// It's a list of all phones that are "within the phone network".
raudrohi.lang.comm.phonestation.phones=new Hashtable();

// Basic API for for propagating signals downstream and between objects.
// Practically, a phone is meant to be an object that if it is
// poneowner.properties.phone, then it allows the phoneowner to
// communicate with other phone owners. It also has a function that it
// automatically transmits signals to subordinate objects and keeps
// track of them.
//
// One just has to take care that it won't get stolen, since it is
// among the public properties. :-) The phone also allows to take
// "long distance calls" to the server and cancel the long distance
// calls automatically, if the server has not
// "picked up its phone"(sent a response) yet.
raudrohi.lang.comm.phone=function(a_phone_number_as_a_string){
	// TODO: Refactor the whole phoneing system so that it
	// supports whole-program trace with tracing point classes, i.e.
	// so that one can switch in and out different groups of tracing
	// points. The call-trace should be a list of GUIDs in console and
	// it should cross different programming languages, i.e. It will
	// probably have to travel to the server and back in the debugging
	// mode, so that when there's a crash back at the JavaScript
	// side, one can take a look by navigating to the source code
	// regions that have the GUIDs, what the call graph was.
	var self_public_=this;
	var phone_number_=a_phone_number_as_a_string;
	this.get_phone_number=function(){
		return phone_number_;
	}; // this.get_phone_number
	var is_connected_=false;
	this.is_connected=function(){
		return is_connected_;
	}; // this.is_connected

	this.connect2phonestation=function(){
		try{
			if(is_connected_) {
				return;
			}
			if(raudrohi.lang.comm.phonestation.phones.containsKey(phone_number_)){
				raudrohi.tmg('81053c3f-e826-417e-8336-405380b0abd7',
					'A phone with a phone number of '+phone_number_+
					' has already been registered to the phonestation.');
			}//if
			raudrohi.lang.comm.phonestation.phones.put(phone_number_,self_public_);
			is_connected_=true;
		}
		catch (err){
			raudrohi.tmg('5fb69d31-54ea-4be9-ab36-405380b0abd7',err);
		} // catch
	}; // this.connect2phonestation
	self_public_.connect2phonestation();

	this.disconnect_from_phonestation=function(){
		try{
			if(!is_connected_) {
				return;
			}
			raudrohi.lang.comm.phonestation.phones.remove(phone_number_);
			is_connected_=false;
		}
		catch (err){
			raudrohi.tmg('5d7cd233-1905-44f8-b946-405380b0abd7',err);
		} // catch
	}; // this.disconnect_from_phonestation

	// It's OK for the phone to be connected to the network
	// duering this operation. Calls to the old phone number
	// will be dismissed.
	this.reset_phone_number=function(new_phone_number){
		var b1=is_connected_;
		if(b1) {
			self_public_.disconnect_from_phonestation();
		}
		phone_number_=new_phone_number;
		if(b1) {
			self_public_.connect2phonestation();
		}
	}; // this.reset_phone_number

	this.receive_phonecall=function(a_phonecall_instance){
		throw "\n------------------------\n"+
		'raudrohi.lang.comm.phone.receive_phonecall has to be overriden.'+
		"\nGUID== 608e5b20-70f2-4f44-bf9d-a8c8f1c6c5fe";
	}; // this.receive

	this.call=function(destination_phone_number,data, data2){
		try{
			if (raudrohi.lang.comm.phonestation.phones.containsKey(destination_phone_number)!==true) {
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.tmg('ac57b71a-c7df-4a15-b046-405380b0abd7',
						'Phone # '+destination_phone_number+
						' was not in phonenetwork.');
				} // if
				return;
			} // if
			var phone=raudrohi.lang.comm.phonestation.phones.get(destination_phone_number);
			var data2_local=0;
			if(typeof(data2)!=="undefined"){
				data2_local=data2;
			} // if
			var phonecall=new raudrohi.lang.comm.phonecall(phone_number_,
				destination_phone_number, data, data2_local);
			phone.receive_phonecall(phonecall);
		} catch (err){
			var err_supplement1='';
			try{
				err_supplement1="\n  data=="+data;
			} catch(errr){}
			if(err_supplement1!==''){
				err=err+err_supplement1;
			} else {
				err=err+'err_supplement1===\'\'';
			} // else
			raudrohi.tmg('5f9a4082-23e0-433c-a536-405380b0abd7',
				'self_public_.get_phone_number()=='+
				self_public_.get_phone_number()+
				"\n destination_phone_number=="+destination_phone_number+' '+err);
		} // catch
	}; // this.call


	// It's a kind of maffia-like method: explode the phone with the
	// person, who has it in its pocket.
	this.destruct_phone=function(){
		try{
			raudrohi.lang.comm.phonestation.phones.remove(phone_number_);
		} catch (err){
			raudrohi.tmg('35279935-0d03-4ffd-a615-405380b0abd7',err);
		} // catch
	}; // this.destruct

}; //raudrohi.lang.phone

//-------------------------------------------------------------------------
// I's a black hole for useless phonecalls, just like the /dev/null
// is in Linux.
raudrohi.lang.phonebooth_dev_null=function(){
	this.phone=new raudrohi.lang.comm.phone('/dev/null');
	this.phone.receive_phonecall=function(a_phonecall_instance){}
} // raudrohi.lang.phonebooth_dev_null

//-------------------------------------------------------------------------
raudrohi.lang.userinterface_text=function(){
	try{
		var self_public_=this;
		// TODO: implement a mechanism, where user interface texts
		// are downloaded "on-demand" and are available only
		// to authenticated users. For example there might be a
		// method that takes an array of message numbers and then
		// preorders them from the server. The arrived messages
		// should be placed into the ht_cache_, which makes the pre-ordered
		// texts available through the get(...) method.

		var ht_cache_=new Hashtable(); // key==<s_text_number> value==<text>


		// The DOM operations are said to be rather expensive.
		function get_from_DOM(i_text_number) {
			try{
				var element_id;
				if(raudrohi.settings.debug_JavaScript===true){
					if(raudrohi.adapter.isNumber(i_text_number)!==true){
						raudrohi.adapter.log(i_text_number+" is not a number");
					} // if
					element_id=''+
					'webpage_initiation_data_from_server_sirel_dictionary_msg_'+
					i_text_number;
					if(raudrohi.base.node_exists(element_id)!==true){
						raudrohi.tmg('fa675594-3160-4393-ab55-405380b0abd7',
							'There\'s no node with id=="'+element_id+
							'" in the DOM tree.');
					} // if
				} // if
				element_id=''+
				'webpage_initiation_data_from_server_sirel_dictionary_msg_'+
				i_text_number;
				var x;
				x=document.getElementById(element_id);
				if(x===null){
					raudrohi.adapter.log("UI text not found.\n"+
						'element_id=='+element_id);
				} // if
				return x.innerHTML;
			} catch (err){
				raudrohi.tmg('351b3714-90ac-4f99-a525-405380b0abd7',err);
			} // catch
		} // get_from_DOM

		this.get=function(i_text_number) {
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isNumber(
						i_text_number, 'i_text_number',
						'5fd043a3-4fd3-4077-b625-405380b0abd7');
				} // if
				var s_out=null;
				var s_key=''+i_text_number;
				if (ht_cache_.containsKey(s_key)===true){
					s_out=ht_cache_.get(s_key);
				} else {
					s_out=get_from_DOM(i_text_number);
					ht_cache_.put(s_key,s_out);
				} // else
				return ""+s_out;
			}
			catch (err){
				raudrohi.tmg('492a6b15-f73b-4013-8a55-405380b0abd7',err);
			} // catch
		} // get

	}
	catch (err){
		raudrohi.tmg('42001072-5c22-4387-a055-405380b0abd7',err);
	} // catch
} // raudrohi.lang.userinterface_text


//-------------------------------------------------------------------------
// If show_them==false, the elements are hidden. Otherwise the elements
//  are made visible.
raudrohi.lang.set_visibility_ar=function(an_array_of_element_names, show_them) {
	try{
		var len=an_array_of_element_names.length;
		var an_elem;
		var an_elem_name;
		var cache_func_ras=raudrohi.adapter.setAttribute; // IE optimization
		for(var i=0;i<len;i++){
			an_elem_name=an_array_of_element_names[i];
			if(show_them){
				cache_func_ras(an_elem_name,'style', 'visibility:visible;');
			} else{
				cache_func_ras(an_elem_name,'style', 'visibility:hidden;');
			} // else
		} // for
	} catch (err){
		raudrohi.tmg('a27397e0-847e-42ac-9b45-405380b0abd7',err);
	} // catch
} // raudrohi.lang.set_visibility_ar

raudrohi.lang.set_visibility=function(element_id,true_if_element_is_visible){
	var ss_id='';
	try{
		if(!raudrohi.adapter.isString(element_id)){
			raudrohi.tmg('4763a151-33cb-4093-9315-405380b0abd7',
				'The element_id is not a string and has a value of '+
				element_id);
		} // if
		ss_id=element_id;
		if(!raudrohi.adapter.isBoolean(true_if_element_is_visible)){
			raudrohi.tmg('c4a3d3b4-9efd-4375-af64-405380b0abd7',
				'The true_if_element_is_visible is not a boolean and '+
				'has a value of '+true_if_element_is_visible);
		} // if
		if(true_if_element_is_visible){
			raudrohi.adapter.setAttribute(element_id,
				'style', 'visibility:visible;');
		} else{
			raudrohi.adapter.setAttribute(element_id,
				'style', 'visibility:hidden;');
		} // else
	} catch (err){
		raudrohi.tmg('23c41974-b21d-44c7-ae34-405380b0abd7',
			err+' element_id=='+ss_id);
	} // catch
} //raudrohi.lang.set_visibility

//-------------------------------------------------------------------------
// The gate is open to only the first thread that tries to pass it.
// The trhead that got through it, must unlock it before it exits.
// An example:
//
// var gate=new raudrohi.lang.mutex_gate();
// function where_at_most_one_thread_is_in(){
//         if(!gate.lock_it_successfully()){
//                  return;
//                  } // if
//         // Stuff that's being executed only by one thread at a time.
//         gate.unlock();
// } // function
//
// An side effect of the raudrohi.lang.mutex_gate is that if the gate
// is unlocked and at least 2 threads that try to pass it have
// appropriate timing, none of the 2 threads get through the gate.
raudrohi.lang.mutex_gate=function(){
	var number_of_locks_=0;
	var c1_=0;
	var c2_=0;

	this.lock_it_successfully=function(){
		try{
			var answer=false;
			if(number_of_locks_==0){
				c1_++;
				if(c1_==1){
					c2_++;
					if(c2_==1){
						number_of_locks_++;
						answer=true;
					} // if
					c2_--;
				} // if
				c1_--;
			} // if
			return answer;
		} catch (err){
			raudrohi.tmg('3c967d83-22f9-4c05-a534-405380b0abd7',err);
		} // catch
	} // lock_it_successfully

	this.unlock=function(){
		if(0<number_of_locks_){
			number_of_locks_--;
		} // if
	} // unlock

	this.is_locked=function(){
		var answer=false;
		if(0<number_of_locks_){
			answer=true;
		} // if
		return answer;
	} // is_locked

} // raudrohi.lang.threadsafe_flag

//-------------------------------------------------------------------------
// Implements a logic for a "machine" startup and shutdown buttons,
// with an assumption that it takes some time for the machine to
// start up and some time for it to shut down. Sample code:
//
// a_machine=function(){
// var startup_shutdown_handler_=new raudrohi.lang.startup_shutdown_handler(this);
//
//     this.startup=function(){
//     if(startup_shutdown_handler_.hook_startup_started()){
//             return;
//             } // if;
//     // The rest of the start up sequence.
//     startup_shutdown_handler_.hook_startup_complete();
//     } // startup
//
//     this.shutdown=function(){
//     if(startup_shutdown_handler_.hook_shutdown_started()){
//             return;
//             } // if;
//     // The rest of the shut down sequence.
//     startup_shutdown_handler_.hook_shutdown_complete();
//     } // startup
//
// this.onoff_switch=function(turn_machine_on){
//        if(turn_machine_on){
//                startup_shutdown_handler_.startbutton_pushed();
//        } else {
//                startup_shutdown_handler_.stopbutton_pushed();
//                } // else
//        } // onoff_switch
//
// } // a_machine
//
//
// Methods machine_instance_.private_code_.widget_startup_sequence() and
// machine_instance_.only_for_raudrohi_core_developers.widget_shutdown_sequence() are compulsory.
raudrohi.lang.startup_shutdown_handler=function(machine_instance){
	try{
		var self_public_=this;
		var machine_instance_=machine_instance;
		var shutdown_in_progress_=false;
		var startup_in_progress_=false;
		var machine_is_running_=false;
		this.machine_is_running=function(){
			return machine_is_running_;
		} // machine_is_running
		var next_state_is_run_=false;

		var stop_indication_request_={};
		stop_indication_request_.set=false;
		stop_indication_request_.phone_number='not set, '+
		'GUID=="1789ee15-bdc9-4fe5-8d2e-405380b0abd7"';
		stop_indication_request_.data='not set, '+
		'GUID=="205db7b5-c2ed-4bfc-ab5d-405380b0abd7"';
		stop_indication_request_.binary_data=null;

		var start_indication_request_={};
		start_indication_request_.set=false;
		start_indication_request_.phone_number='not set, '+
		'GUID=="e3e01e93-3dc5-46a2-9b5d-405380b0abd7"';
		start_indication_request_.data='not set, '+
		'GUID=="21df8aa3-9ae6-4e75-b54d-405380b0abd7"';
		start_indication_request_.binary_data=null;


		function update_machine_state(){
			try{
				// The idea behind the sIr is that may be
				// some thread might modify the
				// <start/stop>_indication_request_
				// fields while the startup/shutdown takes place.
				// The local copy "saves the state" of the
				// <start/stop>_indication_request_
				var sIr;
				if(next_state_is_run_){
					if(machine_is_running_||startup_in_progress_){
						return;
					} // if
					if(!shutdown_in_progress_){
						sIr=start_indication_request_;
						machine_instance_.only_for_raudrohi_core_developers.widget_startup_sequence();
						if(sIr.set){
							machine_instance_.phone.call(sIr.phone_number,
								sIr.data,sIr.binary_data);
							start_indication_request_.set=false;
						} // if
					} // if
				} else{
					if((!machine_is_running_)||shutdown_in_progress_){
						return;
					} // if
					if(!startup_in_progress_){
						sIr=stop_indication_request_;
						machine_instance_.only_for_raudrohi_core_developers.widget_shutdown_sequence();
						if(stop_indication_request_.set){
							machine_instance_.phone.call(sIr.phone_number,
								sIr.data,sIr.binary_data);
							stop_indication_request_.set=false;
						} // if
					} // if
				} // else
			} catch (err){
				raudrohi.tmg('306cdb63-71c8-4f0e-b844-405380b0abd7',err);
			} // catch
		} // update_machine_state

		this.startbutton_pushed=function(){
			try{
				next_state_is_run_=true;
				update_machine_state();
			} catch (err){
				raudrohi.tmg('db71ef12-fb79-43b4-8f44-405380b0abd7',err);
			} // catch
		} // startbutton_pushed

		this.stopbutton_pushed=function(){
			try{
				next_state_is_run_=false;
				update_machine_state();
			} catch (err){
				raudrohi.tmg('d21f3715-13ba-426e-be94-405380b0abd7',err);
			} // catch
		} // stopbutton_pushed

		// One of the applications of this method is to start one
		// machine right after another machine has stopped. The prerequisite
		// for such an application is that the machines can be started up
		// by making a special "phine call" to them.
		this.stopbutton_pushed_with_indication_request=function(
			phone_number_of_an_instance_to_call_when_shutdown_complete,
			data_string_to_send_for_indication, binary_data_to_send_for_indication){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(
						phone_number_of_an_instance_to_call_when_shutdown_complete,
						'phone_number_of_an_instance_to_call_when_shutdown_complete',
						'e157144c-0734-41f0-9873-405380b0abd7');
					raudrohi.base.assert_isString(
						data_string_to_send_for_indication,
						'data_string_to_send_for_indication',
						'a333b82e-2af9-4730-9713-405380b0abd7');
				} // if
				stop_indication_request_.phone_number=''+
				phone_number_of_an_instance_to_call_when_shutdown_complete;
				stop_indication_request_.data=data_string_to_send_for_indication;
				stop_indication_request_.binary_data=binary_data_to_send_for_indication;
				stop_indication_request_.set=true;
				self_public_.stopbutton_pushed();
			}
			catch (err){
				raudrohi.tmg('84cc7535-6f64-47a3-8653-405380b0abd7',err);
			} // catch
		} // stopbutton_pushed_with_indication_request

		this.startbutton_pushed_with_indication_request=function(
			phone_number_of_an_instance_to_call_when_startup_complete,
			data_string_to_send_for_indication, binary_data_to_send_for_indication){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(
						phone_number_of_an_instance_to_call_when_startup_complete,
						'phone_number_of_an_instance_to_call_when_startup_complete',
						'74c75593-bddb-455b-9e13-405380b0abd7');
					raudrohi.base.assert_isString(
						data_string_to_send_for_indication,
						'data_string_to_send_for_indication',
						'e281dfa3-bfa3-4ed4-aa43-405380b0abd7');
				} // if
				start_indication_request_.phone_number=''+
				phone_number_of_an_instance_to_call_when_startup_complete;
				start_indication_request_.data=data_string_to_send_for_indication;
				start_indication_request_.binary_data=binary_data_to_send_for_indication;
				start_indication_request_.set=true;
				self_public_.startbutton_pushed();
			} catch (err){
				raudrohi.tmg('b58b4163-3144-45f3-b8c3-405380b0abd7',err);
			} // catch
		} // startbutton_pushed_with_indication_request

		this.hook_startup_started=function(){
			try{
				if((machine_is_running_)&&(!shutdown_in_progress_)){
					return true;
				} // if
				if(startup_in_progress_){
					return true;
				} // if
				if(shutdown_in_progress_){
					next_state_is_run_=true;
					return true;
				} // if
				startup_in_progress_=true;
				return false;
			} catch (err){
				raudrohi.tmg('9449dc3e-0eb9-4c77-8353-405380b0abd7',err);
			} // catch
		} // hook_startup_started

		this.hook_startup_complete=function(){
			try{
				machine_is_running_=true;
				startup_in_progress_=false;
				if(!next_state_is_run_){
					machine_instance_.only_for_raudrohi_core_developers.widget_shutdown_sequence();
				} // if
			} catch (err){
				raudrohi.tmg('3b6b0723-b4f8-4913-af22-405380b0abd7',err);
			} // catch
		} // hook_startup_complete

		this.hook_shutdown_started=function(){
			try{
				if((!machine_is_running_)&&(!startup_in_progress_)){
					return true;
				} // if
				if(shutdown_in_progress_){
					return true;
				} // if
				if(startup_in_progress_){
					next_state_is_run_=false;
					return true;
				} // if
				shutdown_in_progress_=true;
				return false;
			}
			catch (err){
				raudrohi.tmg('384d9671-1207-4866-9742-405380b0abd7',err);
			} // catch
		} // hook_shutdown_started

		this.hook_shutdown_complete=function(){
			try{
				machine_is_running_=false;
				shutdown_in_progress_=false;
				if(next_state_is_run_){
					machine_instance_.private_code_.widget_startup_sequence();
				} // if
			} catch (err){
				raudrohi.tmg('5ae75421-8736-442d-b322-405380b0abd7',err);
			} // catch
		} // hook_shutdown_complete

	} catch (err){
		raudrohi.tmg('e260418e-632c-450f-b8d2-405380b0abd7',err);
	} // catch
} // raudrohi.lang.startup_shutdown_handler

//-------------------------------------------------------------------------
raudrohi.lang.startup_shutdown_machines=function(array_of_machines,
	true_if_startup, a_phone_instance){
	if(raudrohi.settings.debug_JavaScript===true){
		if(!raudrohi.adapter.isArray(array_of_machines)){
			raudrohi.tmg('93939dbe-5246-48a6-b722-405380b0abd7',
				'array_of_machines(=='+array_of_machines+
				') is not an array and has a value of '+array_of_machines+'.');
		} // if
		if(!raudrohi.adapter.isBoolean(true_if_startup)){
			raudrohi.tmg('a363122e-5650-4545-aef2-405380b0abd7',
				'The true_if_startup is not a boolean and '+
				'has a value of '+true_if_startup);
		} // if
		if(!raudrohi.adapter.isObject(a_phone_instance)){
			raudrohi.tmg('26425b30-08ae-41d7-be51-405380b0abd7',
				'The a_phone_instance is of some basic type.');
		} // if
	} // if
	try{
		var len=array_of_machines.length;
		var i=0;
		var elem;
		if(true_if_startup){
			for(i=0;i<len;i++){
				elem=array_of_machines[i];
				a_phone_instance.call(elem.phone.get_phone_number(),
					'startup|||','');
			} // for
		} else {
			for(i=0;i<len;i++){
				elem=array_of_machines[i];
				a_phone_instance.call(elem.phone.get_phone_number(),
					'shutdown|||','');
			} // for
		} // else
	}
	catch (err){
		raudrohi.tmg('de2c5dc3-f7b2-4aff-8541-405380b0abd7',err);
	} // catch
} // startup_shutdown_machines


//-------------------------------------------------------------------------
// ProgFTE(Programmer Friendly Text Exchange) is a format, where
// a hashtable that contains only strings as its keys and values,
// is serialized to
// <nuber of key-value pairs>|||<triplepillar substitution>|||<keyX>|||<valueX|||<keyY>|||<valueY>||| etc.
// Some more background info resides at
// http://mv-veebilog.blogspot.com/2009/10/programmer-friendly-text-exchange.html
raudrohi.lang.ht2ProgFTE_impl=function(a_hashtable,
	string_to_substitute_the_triplepillars_within_the_ht_keys_and_values){
	try{
		var tpss=string_to_substitute_the_triplepillars_within_the_ht_keys_and_values;
		var keys=a_hashtable.keys();
		var s_key;
		var reference_to_the_value;
		var answer=keys.length+'|||'+tpss+'|||';
		var len=keys.length;
		// There's the problem that if the JavaScript side has
		// a very heavy load, different threads will collide at
		// global variables. In this case, probably the problem
		// is that the raudrohi.base.replace_all has thread
		// collisions. That's why there's this "newer" version
		// that creates a separate RegExp instace for every call.

		//--start-of-the-new-version----
		var rgx=new RegExp("[|]","g"); // TODO: pool the rgx instances
		for(var i=0;i<len;i++){
			s_key=keys[i];
			// The ''+ on the next line is for converting numbers to strings.
			reference_to_the_value=''+a_hashtable.get(s_key);
			answer+=s_key.replace(rgx,tpss);
			answer+='|||';
			answer+=reference_to_the_value.replace(rgx,tpss);
			answer+='|||';
		} // for
		//--end-of-the-new-version----

		//--start-of-the-old-version----
		//var cache_func_rbr=raudrohi.base.replace_all; // IE optimization
		//for(var i=0;i<len;i++){
		//	key=keys[i];
		//	// The ''+ on the next line is for converting numbers to strings.
		//	reference_to_the_value=''+a_hashtable.get(key);
		//	answer+=cache_func_rbr(tpss,'|',key);
		//	answer+='|||';
		//	answer+=cache_func_rbr(tpss,'|',reference_to_the_value);
		//	answer+='|||';
		//} // for
		//--end-of-the-old-version----
		return answer;
	} catch (err){
		raudrohi.tmg('41049881-c304-4a3d-bc51-405380b0abd7',err);
	} // catch
} // raudrohi.lang.ht2ProgFTE_impl

// Implements the ProgFTE format in a way that it is safe to serialize
// one hashtable, store the serialization result into anohter hashtable
// and then to serialize the latter hashtable.
raudrohi.lang.ht2ProgFTE=function(a_hashtable){
	try{
		var keys=a_hashtable.keys();
		var key;
		var len=keys.length;
		var s_all='';
		for(var i=0; i<len;i++){
			key=keys[i];
			s_all+=key;
			s_all+=a_hashtable.get(key);
		} // for
		var s_trplsbsts=raudrohi.lang.generate_nonexisting_needle(s_all);
		var s_progte=raudrohi.lang.ht2ProgFTE_impl(a_hashtable,s_trplsbsts);
		return s_progte;
	} catch (err){
		raudrohi.tmg('44783015-b5c3-44f6-8311-405380b0abd7',err);
	} // catch
} // raudrohi.lang.ht2ProgFTE

//-------------------------------------------------------------------------
raudrohi.lang.ProgFTE2ht=function(a_string){
	try{
		var ar1=raudrohi.base.snatchNtimes(a_string, '|||', 2);
		var ht_length=parseInt(ar1[0],10);
		var ht=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
		if(ht_length<1){
			return ht;
		} // if
		var tpss=ar1[1];
		var ar2=raudrohi.base.snatchNtimes(a_string, '|||',(2+ht_length*2));
		var i1=1;
		var i2;
		var s_key;
		var value;
		// Comment is at the ht2Progfre code
		//var rgx=new RegExp("[|]","g"); // TODO: pool the rgx instances
		var cache_func_rbr=raudrohi.base.replace_all; // IE optimization
		while(i1<=ht_length){
			i2=i1*2;
			s_key=cache_func_rbr('|',tpss,ar2[i2]);
			value=cache_func_rbr('|',tpss,(ar2[i2+1]));
			ht.put(s_key,value);
			i1++;
		} // while
		return ht;
	}
	catch (err){
		raudrohi.tmg('a2aad12f-e080-44ec-ae11-405380b0abd7',err+"\n\n"+
			' a_string=='+a_string);
	} // catch
} // raudrohi.lang.ProgFTE2ht


raudrohi.lang.selftests.ProgFTE2ht=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s;
		var ht_progfte;
		s='1|||ZZ|||cute|||kitten|||';
		try{
			ht_progfte=raudrohi.lang.ProgFTE2ht(s);
			if(ht_progfte.get('cute')!=='kitten'){
				ar_failed_tests.push('1 1');
			} // if
			if(ht_progfte.size()!==1){
				ar_failed_tests.push('1 2');
			} // if
		} catch (err){
			ar_failed_tests.push('1 try, err=='+err);
		} // catch
		s='1|||BB|||rr|||aBBg|||';
		try{
			ht_progfte=raudrohi.lang.ProgFTE2ht(s);
			if(ht_progfte.get('rr')!=='a|g'){
				ar_failed_tests.push('2 1');
			} // if
			if(ht_progfte.size()!==1){
				ar_failed_tests.push('2 2');
			} // if
		} catch (err){
			ar_failed_tests.push('2 try, err=='+err);
		} // catch
		s='2|||BB4|||rrBB4BB4|||arfg|||ll|||_Z|||';
		try{
			ht_progfte=raudrohi.lang.ProgFTE2ht(s);
			if(ht_progfte.get('rr||')!=='arfg'){
				ar_failed_tests.push('3 1');
			} // if
			if(ht_progfte.get('ll')!=='_Z'){
				ar_failed_tests.push('3 2');
			} // if
			if(ht_progfte.size()!==2){
				ar_failed_tests.push('3 3');
			} // if
		} catch (err){
			ar_failed_tests.push('3 try, err=='+err);
		} // catch
		s='2|||zz|||rrzz|||val1|||key2||||||';
		try{
			ht_progfte=raudrohi.lang.ProgFTE2ht(s);
			if(ht_progfte.get('key2')!==''){
				ar_failed_tests.push('4 1');
			} // if
			if(ht_progfte.size()!==2){
				ar_failed_tests.push('4 2');
			} // if
		} catch (err){
			ar_failed_tests.push('4 try, err=='+err);
		} // catch
		s='0|||zz|||';
		try{
			ht_progfte=raudrohi.lang.ProgFTE2ht(s);
			if(ht_progfte.size()!==0){
				ar_failed_tests.push('5 1');
			} // if
		}
		catch (err){
			ar_failed_tests.push('5 try, err=='+err);
		} // catch
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.ProgFTE2ht');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	}
	catch (err){
		raudrohi.tmg('847eba67-54e9-463f-a811-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.ProgFTE2ht

//-------------------------------------------------------------------------
raudrohi.lang.deserialize_htOfht_from_ProgFTE=function(a_string){
	try{
		var htOfht=raudrohi.lang.ProgFTE2ht(a_string);
		var ht_out=raudrohi.base.pool_of_hashtables.get_empty_hashtable();
		var keys=htOfht.keys();
		var len=keys.length;
		var key;
		var ref_2_s_progfte;
		var cache_func_rlP=raudrohi.lang.ProgFTE2ht; // IE optimization
		for(var i=0;i<len;i++){
			key=keys[i];
			ref_2_s_progfte=htOfht.get(key);
			ht_out.put(key,cache_func_rlP(ref_2_s_progfte));
		} // for
		raudrohi.base.pool_of_hashtables.return_used_hashtable(htOfht);
		return ht_out;
	} catch (err){
		raudrohi.tmg('616cc26e-5b2c-42b1-9130-405380b0abd7',err+
			' a_string=='+a_string);
	} // catch
} // raudrohi.lang.deserialize_htOfht_from_ProgFTE

//-------------------------------------------------------------------------
raudrohi.lang.extract_column_from_htOfht=function(hashtable_of_hashtables,
	column_name){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(hashtable_of_hashtables,
				'hashtable_of_hashtables',
				'6ec25185-cf31-45bc-a750-405380b0abd7');
			raudrohi.base.assert_isString(column_name,'column_name',
				'fce9ec85-aa5c-432e-9350-405380b0abd7');
		} // if
		var ar_out=[];
		var keys=hashtable_of_hashtables.keys();
		var len=keys.length;
		var key;
		var ref2ht;
		var elemht;
		var i;
		if(raudrohi.settings.debug_JavaScript===true){
			for(i=0;i<len;i++){
				key=keys[i];
				raudrohi.base.assert_isString(key,'key',
					'589e79b5-b902-498e-9410-405380b0abd7');
				ref2ht=hashtable_of_hashtables.get(key);
				raudrohi.base.assert_isObject(ref2ht,'ref2ht',
					'3eb3b8f3-fd1b-4166-b340-405380b0abd7');
				if(!ref2ht.containsKey(column_name)){
					raudrohi.tmg('d532d50b-da02-45f9-9870-405380b0abd7',
						'ref2ht does not contain key "'+
						column_name+'" for htOfht key of "'+key+
						' and i=='+i);
				} // if
				ar_out.push(ref2ht.get(column_name));
			} // for
		} else {
			for(i=0;i<len;i++){
				key=keys[i];
				ref2ht=hashtable_of_hashtables.get(key);
				ar_out.push(ref2ht.get(column_name));
			} // for
		} // else
		return ar_out;
	} catch (err){
		raudrohi.tmg('7572115d-a9c2-43c7-bef0-405380b0abd7',err);
	} // catch
} // raudrohi.lang.deserialize_htOfht_from_ProgFTE


//-------------------------------------------------------------------------
// Returns a string that consist of all of the key-falue pairs concatenated
// to a single string. It's practically the same as ht2ProgFTE,
// but without the structure and without any randomly generated parts within
// the string. There's also an extra requirement that
raudrohi.lang.hashtable_signature=function(a_hashtable){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isObject(a_hashtable, 'a_hashtable',
				'e835049d-5506-4437-968f-405380b0abd7')
		} // if
		var keys=a_hashtable.keys();
		var len=keys.length;
		var key;
		var reference_to_the_value;
		var s='';
		var i;
		if(raudrohi.settings.debug_JavaScript===true){
			for(i=0;i<len;i++){
				key=keys[i];
				raudrohi.base.assert_isString(key, 'key',
					'f134f57b-6d94-4309-912f-405380b0abd7')
				s+=':';
				s+=key;
				s+=':';
				reference_to_the_value=a_hashtable.get(key);
				if(!raudrohi.adapter.isString(reference_to_the_value)){
					if(!raudrohi.adapter.isBoolean(reference_to_the_value)){
						raudrohi.base.assert_isNumber(reference_to_the_value,
							'reference_to_the_value',
							'3c12b753-ba76-43f9-892f-405380b0abd7',
							'key=='+key);
					} // if
				} // if
				s+=reference_to_the_value;
			} // for
		} else {
			for(i=0;i<len;i++){
				key=keys[i];
				s+=':';
				s+=key;
				s+=':';
				reference_to_the_value=a_hashtable.get(key);
				s+=reference_to_the_value;
			} // for
		} // else
		return s;
	} catch (err){
		raudrohi.tmg('437d3fa6-aebb-445c-b71f-405380b0abd7',err);
	} // catch
} // raudrohi.lang.hashtable_signature


raudrohi.lang.is_a_hexadecimal_digit=function(hex_digit_candidate_as_a_string){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(hex_digit_candidate_as_a_string,
				'hex_digit_candidate_as_a_string',
				'5f3baf04-6fe3-42af-b32f-405380b0abd7')
		} // if
		if(hex_digit_candidate_as_a_string.length!=1){
			return false;
		} // if
		var answer=true;
		var s=hex_digit_candidate_as_a_string.toLowerCase();
		switch(s){
			case '0':
				break;
			case '1':
				break;
			case '2':
				break;
			case '3':
				break;
			case '4':
				break;
			case '5':
				break;
			case '6':
				break;
			case '7':
				break;
			case '8':
				break;
			case '9':
				break;
			case 'a':
				break;
			case 'b':
				break;
			case 'c':
				break;
			case 'd':
				break;
			case 'e':
				break;
			case 'f':
				break;
			default:
				answer=false;
		} // switch
		return answer;
	} catch (err){
		raudrohi.tmg('76b54d41-8960-4106-a01e-405380b0abd7',err);
	} // catch
} // raudrohi.lang.is_a_hexadecimal_digit

raudrohi.lang.is_a_hexadecimal_number=function(hex_digit_candidate_as_a_string){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(hex_digit_candidate_as_a_string,
				'hex_digit_candidate_as_a_string',
				'd1926785-b006-470d-895e-405380b0abd7')
		} // if
		var answer=true;
		var len=hex_digit_candidate_as_a_string.length
		var i;
		var chr;
		for(i=0;i<len;i++){
			chr=hex_digit_candidate_as_a_string.charAt(i);
			if(raudrohi.lang.is_a_hexadecimal_digit(chr)!==true){
				answer=false;
				break;
			} // if
		} // for
		return answer;
	} catch (err){
		raudrohi.tmg('887422a1-f64a-4423-893e-405380b0abd7',err);
	} // catch
} // raudrohi.lang.is_a_hexadecimal_number

raudrohi.lang.selftests.is_a_hexadecimal_number=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		if(raudrohi.lang.is_a_hexadecimal_number('ff')!==true){
			ar_failed_tests.push('ff');
		} // if
		if(raudrohi.lang.is_a_hexadecimal_number('ff00ff')!==true){
			ar_failed_tests.push('ff00ff');
		} // if
		if(raudrohi.lang.is_a_hexadecimal_number('0000')!==true){
			ar_failed_tests.push('0000');
		} // if
		if(raudrohi.lang.is_a_hexadecimal_number('1234567890')!==true){
			ar_failed_tests.push('1234567890');
		} // if
		if(raudrohi.lang.is_a_hexadecimal_number('ABCDEF')!==true){
			ar_failed_tests.push('ABCDEF');
		} // if
		if(raudrohi.lang.is_a_hexadecimal_number('ABcDeF')!==true){
			ar_failed_tests.push('ABcDeF');
		} // if
		if(raudrohi.lang.is_a_hexadecimal_number('XX')!==false){
			ar_failed_tests.push('XX, value=='+raudrohi.lang.is_a_hexadecimal_number('XX'));
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.is_a_hexadecimal_number');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('1f60a825-2bd6-43ad-b21e-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.is_a_hexadecimal_number

//-------------------------------------------------------------------------
raudrohi.lang.private_code.is_a_whole_number_x_or_s=function(
	i_or_s_whole_number_candidate,b_allow_string_representation){
	try{
		if(i_or_s_whole_number_candidate===null){
			// This if-clause exists here to overcome
			// autoconversion sideeffects. For example,
			// Math.abs(null)===0 and 3.14+null===3.14
			return false;
		} // if
		var i_x1=null;
		var i_x2=null;
		// According to // http://ecma262-5.com/ELS5_HTML.htm#Section_8.5
		// JavaScript integers are stored in a form of the
		// double's (8B), but some of the JavaScript buit-in functions
		// use autoconversion and work only with the 4B integers.
		if(raudrohi.adapter.isString(i_or_s_whole_number_candidate)){
			if(b_allow_string_representation===false){
				return false;
			} // if
		} else {
			// It might be that in stead of the Number type
			// the i_or_s_whole_number_candidate is of an Object type or
			// Null type, etc. The inappropreite types will probably
			// cause an exception to be thrown.
			try{
				i_x1=Math.abs(i_or_s_whole_number_candidate);
				i_x2=Math.floor(i_x1);
				if(0<(i_x1-i_x2)){
					return false;
				} // if
				return true;
			} catch (err){
				return false;
			} // catch
		} // if
		var s_1=i_or_s_whole_number_candidate;
		var rgx_space=new RegExp("[\\s\\t]","g");
		var s_2=s_1.replace(rgx_space,'');
		if(s_2.length===0){
			return false;
		} // if
		var rgx=new RegExp("[^\\d]","g");
		// s_1 is used in stead of the s_2 because
		// one wants to return false for strings like "1 2"
		var s_3=s_1.replace(rgx,'');
		if(s_3.length!=s_1.length){
			return false;
		} // if
		return true;
	} catch (err){
		raudrohi.tmg('b4de8875-d55c-44b3-8c2e-405380b0abd7',err);
	} // catch
} // raudrohi.lang.private_code.is_a_whole_number_x_or_s

raudrohi.lang.is_a_whole_number_x_or_s=function(whole_number_candidate_as_int_or_string){
	try{
		var b_allow_string_representation=true;
		var b_out=raudrohi.lang.private_code.is_a_whole_number_x_or_s(
			whole_number_candidate_as_int_or_string,
			b_allow_string_representation);
		return b_out;
	} catch (err){
		raudrohi.tmg('36c7c6b2-f477-464d-bc4e-405380b0abd7',err);
	} // catch
} // raudrohi.lang.is_a_whole_number_x_or_s


raudrohi.lang.is_a_whole_number=function(whole_number_candidate_as_int_or_string){
	try{
		var b_allow_string_representation=false;
		var b_out=raudrohi.lang.private_code.is_a_whole_number_x_or_s(
			whole_number_candidate_as_int_or_string,
			b_allow_string_representation);
		return b_out;
	} catch (err){
		raudrohi.tmg('326fe6be-91b5-4470-9a4d-405380b0abd7',err);
	} // catch
} // raudrohi.lang.is_a_whole_number

raudrohi.lang.assert_is_a_whole_number=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	if(!raudrohi.lang.is_a_whole_number(a_variable)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') is not '+
			'a whole number of class Number. '+s_optional_errmsg_suffix);
	} // if
} // raudrohi.lang.assert_is_a_whole_number

//-------------------------------------------------------------------------
// HTML colors are expected to be in the form of #xxxxxx, where x={0...9,A..F}
raudrohi.lang.is_an_HTML_color=function(color_candidate_as_a_string){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(color_candidate_as_a_string,
				'color_candidate_as_a_string',
				'19655aa5-a3cf-4488-922d-405380b0abd7')
		} // if
		if(color_candidate_as_a_string.length!=7){
			return false;
		} // if
		if(color_candidate_as_a_string.charAt(0)!='#'){
			return false;
		} // if
		var hex_number_candidate_as_a_string=color_candidate_as_a_string.substr(
			1,6);
		var answer=true;
		var i;
		var chr;
		for(i=0;i<6;i++){
			chr=hex_number_candidate_as_a_string.charAt(i);
			if(raudrohi.lang.is_a_hexadecimal_digit(chr)!==true){
				answer=false;
				break;
			} // if
		} // for
		return answer;
	}
	catch (err){
		raudrohi.tmg('635b8126-0958-455c-b04d-405380b0abd7',err);
	} // catch
} // raudrohi.lang.is_an_HTML_color

raudrohi.lang.assert_is_an_HTML_color=function(a_variable,a_variable_name,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
	if(!raudrohi.adapter.isString(a_variable)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') is not a string. '+
			s_optional_errmsg_suffix);
	} // if
	if(!raudrohi.lang.is_an_HTML_color(a_variable)){
		raudrohi.tmg(Globally_Unique_Identifier_as_string,
			a_variable_name+'(=='+a_variable+') does not '+
			'qualify to be an HTML color.  '+s_optional_errmsg_suffix);
	} // if
} // raudrohi.lang.assert_is_an_HTML_color

//-------------------------------------------------------------------------
raudrohi.lang.number2str=function(a_number,
	a_string_that_marks_the_floating_point){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isNumber(a_number,'a_number',
				'e1b67b55-deac-4950-8b2d-405380b0abd7');
			raudrohi.base.assert_isString(
				a_string_that_marks_the_floating_point,
				'a_string_that_marks_the_floating_point',
				'32b74714-564c-4b5c-be5d-405380b0abd7')
			if(a_string_that_marks_the_floating_point===''){
				raudrohi.tmg('474e88c2-abdb-4f04-a74d-405380b0abd7',
					'The floating point separator is not allowed '+
					'to be an empty string.');
			} // if
		} // if
		var s=raudrohi.base.replace_all(a_string_that_marks_the_floating_point,
			'.', ''+a_number);
		return s;
	} catch (err){
		raudrohi.tmg('a35541ed-3524-40e2-ab3c-405380b0abd7',err);
	} // catch
} // number2str


raudrohi.lang.selftests.number2str=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s=raudrohi.lang.number2str(44.72,'Z');
		if(s!=='44Z72'){
			ar_failed_tests.push('44Z72, s=='+s);
		} // if
		s=raudrohi.lang.number2str(99,',');
		if(s!=='99'){
			ar_failed_tests.push('99, s=='+s);
		} // if
		s=raudrohi.lang.number2str(33.7,',');
		if(s!=='33,7'){
			ar_failed_tests.push('33,7 , s=='+s);
		} // if
		s=raudrohi.lang.number2str(55.61,'.');
		if(s!=='55.61'){
			ar_failed_tests.push('55.61 , s=='+s);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.number2str');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('299cc342-b149-460c-ad1c-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.number2str
//-------------------------------------------------------------------------

// Needles are [CODEGENERATION_BLANK_0], [CODEGENERATION_BLANK_1], etc.
// The needle suffixes 0], 1], etc., depict
// ar_needle_replacement_values indices.
raudrohi.lang.fill_form=function(ar_needle_replacement_values,s_form){
	try{
		// RENESSAATOR_BLOCK_START
		// RENESSAATOR_BLOCK_ID=block_7dab1510-3323-43cd-5df2-0149f5b1e752_city
		// RENESSAATOR_SOURCE_LANGUAGE=Ruby
		// RENESSAATOR_SOURCE_START
		// RAUDROHI_CODE_GENERATION=ENV['RAUDROHI_CODE_GENERATION']
		// require(RAUDROHI_CODE_GENERATION+"/raudrohi_cg1.rb")
		// puts Raudrohi_cg_debug_verification.new(
		// ['Array','ar_needle_replacement_values'],['String','s_form']).to_s
		// RENESSAATOR_SOURCE_END
		//
		// RENESSAATOR_AUTOGENERATED_TEXT_START
		if(raudrohi.settings.debug_JavaScript===true){
			// WARNING: This function resides in an autogeneration region.
			// This code has been autogenerated by: Raudrohi_cg_debug_verification
			raudrohi.base.assert_isArray(ar_needle_replacement_values,'ar_needle_replacement_values',
				'403e33e3-cb5f-4eae-bd1c-405380b0abd7');
			raudrohi.base.assert_isString(s_form,'s_form',
				'219b78a3-01bf-4689-9d29-405380b0abd7');
		} // if

		// RENESSAATOR_AUTOGENERATED_TEXT_END
		// RENESSAATOR_BLOCK_END
		var s_out=''+s_form;
		var len=ar_needle_replacement_values.length;
		var i=0;
		var s=null;
		var s_needle=null;
		var s_needle_prefix='[CODEGENERATION_BLANK_';
		var s_substitution=null;
		for(i=0;i<len;i++){
			s_needle=s_needle_prefix+i+']';
			s_substitution=ar_needle_replacement_values[i];
			s=raudrohi.base.replace_all(s_substitution,s_needle,s_out);
			s_out=s
		} // for
		return s_out;
	} catch (err){
		raudrohi.tmg('e4cb78ec-5ca1-4865-b318-405380b0abd7',err);
	} // catch
} // raudrohi.lang.fill_form


raudrohi.lang.selftests.fill_form=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s_form="X[CODEGENERATION_BLANK_0]Y"+
		"[CODEGENERATION_BLANK_1]\nZ[CODEGENERATION_BLANK_2]WW";
		var ar=['AA','BB']
		var s_expected="XAAY"+
		"BB\nZ[CODEGENERATION_BLANK_2]WW";
		var s_filled=raudrohi.lang.fill_form(ar, s_form);
		if(s_filled!==s_expected){
			ar_failed_tests.push('test 1, s_filled=="'+s_filled+'"');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.fill_form');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('19137663-f05a-4f0c-8828-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.fill_form

//-------------------------------------------------------------------------
raudrohi.lang.queueCache=function(i_max_size){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isNumber(i_max_size,'i_max_size',
				'51ffb522-af81-4a35-9628-405380b0abd7');
		} // if
		var self_public_=this;
		var ht_cache_=new Hashtable();
		var queue_=new raudrohi.lang.htQueue();
		var i_max_size_=i_max_size;
		var i_dismissal_size_=Math.floor((i_max_size*1.0)/20.0);
		if (i_dismissal_size_<1){
			i_dismissal_size_=1;
		} // if


		this.containsKey=ht_cache_.containsKey;

		this.put=function(s_key,x){
			try{
				var b=ht_cache_.containsKey(s_key);
				ht_cache_.put(s_key,x);
				if(b===true){
					return;
				} // if
				queue_.push(x);
				var i_size=queue_.length();
				if(i_max_size_<i_size){
					if((i_size+1)<i_dismissal_size_){
						return;
					} // if
					// TODO: There's a bug in the Hashtable class, which
					// is that the remove(<a key>) does not work.
					//raudrohi.adapter.log("i_dismissal_size_=="+i_dismissal_size_);
					//raudrohi.adapter.log("i_size=="+i_size);
					try{
						var s;
						var i=0;
						for(i=0;i<i_dismissal_size_;i++){
							s=queue_.pop();
							ht_cache_.remove(s);
						//raudrohi.adapter.log("s=="+s);
						} // for
					} catch (err){
						raudrohi.tmg('157adbd1-f99d-4a13-8a58-405380b0abd7',err);
					} // catch
				} // if
			} catch (err){
				raudrohi.tmg('32d6e804-1d3d-40a0-a428-405380b0abd7',err);
			} // catch
		} // put

		this.get=ht_cache_.get;


		this.clear=function(){
			try{
				ht_cache_.clear();
				queue_.clear();
			} catch (err){
				raudrohi.tmg('971f6322-fff6-458a-bc57-405380b0abd7',err);
			} // catch
		} // containsKey


	} catch (err){
		raudrohi.tmg('5babd8a5-1840-4458-9c27-405380b0abd7',err);
	} // catch
} // raudrohi.lang.queueCache

raudrohi.lang.selftests.queueCache=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var ob_cache=new raudrohi.lang.queueCache(10);
		var len=20;
		var i=0;
		var s_key=null;
		for(i=0;i<len;i++){
			s_key=""+i;
			ob_cache.put(s_key,i);
		} // for
		if(ob_cache.containsKey("1")===true){
			ar_failed_tests.push('test 1 ');
		} // if
		if(ob_cache.containsKey("3")===true){
			ar_failed_tests.push('test 2 ');
		} // if
		if(ob_cache.containsKey("19")===false){
			ar_failed_tests.push('test 3 ');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.queueCache');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('4d00a811-d244-4328-9327-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.queueCache


//-------------------------------------------------------------------------

// This one is expensive.
raudrohi.lang.private_code.str2regexstr_do_it=function(s_needle){
	try{
		// From raudrohi.base....:
		//      ar_in.push("|");
		//		ar_in_rgx.push(new RegExp("[|]","g"));
		//		s_middle=s_prefix+"sinGLEPilLAR_14867";
		//		ar_middle.push(s_middle);
		//		ar_middle_rgx.push(new RegExp(s_middle,"g"));
		//		ar_out.push("[|]");

		var ar_in=raudrohi.base.private_code.replace_all_globalvars.ar_in;
		var ar_in_rgx=raudrohi.base.private_code.replace_all_globalvars.ar_in_rgx;
		var ar_middle=raudrohi.base.private_code.replace_all_globalvars.ar_middle;
		var ar_middle_rgx=raudrohi.base.private_code.replace_all_globalvars.ar_middle_rgx;
		var ar_out=raudrohi.base.private_code.replace_all_globalvars.ar_out;
		var len=ar_in.length;
		var i=0;
		var rgx_in=null;
		var rgx_middle=null;
		var s_middle=null;
		var s_arout=null;
		var s1=s_needle;
		var s2=null;
		for(i=0;i<len;i++){
			rgx_in=ar_in_rgx[i];
			s_middle=ar_middle[i];
			s2=s1.replace(rgx_in,s_middle);
			s1=s2;
		} // for
		for(i=0;i<len;i++){
			rgx_middle=ar_middle_rgx[i];
			s_arout=ar_out[i];
			s2=s1.replace(rgx_middle,s_arout);
			s1=s2;
		} // for
		var s_out=s1;
		return s_out;
	} catch (err){
		raudrohi.tmg('1dd0c7b5-b092-42c1-8f47-405380b0abd7',err);
	} // catch
} // raudrohi.base.private_code.str2regexstr_do_it

// TODO: refactor it to use the queueCache.
raudrohi.lang.private_code.str2regexstr_ht_cache=new Hashtable();
// The queue is for throwing the oldest cached items out of the
// cache first. By putting a limit on the cache size, one avoids
// a memory leak.
raudrohi.lang.private_code.str2regexstr_ht_cache_queue=new raudrohi.lang.htQueue();

raudrohi.lang.str2regexstr=function(s_needle){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_needle,'s_needle',
				'1e2ebfc2-4814-4de2-b327-405380b0abd7');
		} // if
		var ht_cache=raudrohi.lang.private_code.str2regexstr_ht_cache;
		var s_out=null;
		if(ht_cache.containsKey(s_needle)===true){
			s_out=ht_cache.get(s_needle);
			return ""+s_out;
		} // if
		s_out=raudrohi.lang.private_code.str2regexstr_do_it(s_needle);
		var queue=raudrohi.lang.private_code.str2regexstr_ht_cache_queue;
		var s=null;
		if(400<=queue.length()){
			var len=20;
			var i=0;
			for(i=0;i<len;i++){
				s=queue.pop();
				ht_cache.remove(s);
			} // for
		} // if
		queue.push(s_needle);
		ht_cache.put(s_needle,s_out);
		return ""+s_out;
	} catch (err){
		raudrohi.tmg('2e808491-e826-4e80-8146-405380b0abd7',err);
	} // catch
} // raudrohi.lang.str2regexstr

raudrohi.lang.selftests.str2regexstr=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s=null;
		var s_needle=null;
		var s_expected=null;
		s_needle="|$";
		s_expected="[|][$]";
		s=raudrohi.lang.str2regexstr('-^ff');
		s=raudrohi.lang.str2regexstr('(FF]');
		s=raudrohi.lang.str2regexstr('^44');
		s=raudrohi.lang.str2regexstr(s_needle);
		if(s!==s_expected){
			ar_failed_tests.push('test 1, s=="'+s+'"');
		} // if
		s_needle="([";
		s_expected="[(][\\[]";
		s=raudrohi.lang.str2regexstr(s_needle);
		if(s!==s_expected){
			ar_failed_tests.push('test 2, s=="'+s+'"');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.str2regexstr');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('5451ff34-f08a-4c35-be36-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.str2regexstr

//-------------------------------------------------------------------------
// Returns a string, where all of the ar elements have
// been surrounded by the s_left and s_right and separated
// from eachother by the s_separator. An example:
// ["A","B"]  -> "XAY,XBY"
// if the s_separator==",", s_left=="X", s_right=="Y".
raudrohi.lang.ar2xseparated_list=function(ar,s_separator,s_left,s_right){
	try{
		s_left = typeof(s_left) !== 'undefined' ? s_left : "";
		s_right = typeof(s_right) !== 'undefined' ? s_right : "";
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isArray(ar,'ar',
				'29bc47e4-502f-49d1-9d36-405380b0abd7');
			raudrohi.base.assert_isString(s_separator,'s_separator',
				'954e9965-2d22-4695-b546-405380b0abd7');
			raudrohi.base.assert_isString(s_left,'s_left',
				'507cad02-bc45-457f-8b26-405380b0abd7');
			raudrohi.base.assert_isString(s_right,'s_right',
				'2c468268-5e46-4a70-8925-405380b0abd7');
		} // if
		var s_out="";
		var b_is_nonfirst=false;
		var len=ar.length;
		var i=0;
		var elem=null;
		for(i=0;i<len;i++){
			elem=ar[i];
			if(b_is_nonfirst===true){
				s_out=s_out+s_separator;
			} // if
			s_out=s_out+s_left+elem+s_right;
			b_is_nonfirst=true;
		} // for
		return s_out;
	} catch (err){
		raudrohi.tmg('d2cbfeea-e52a-4e50-9255-405380b0abd7',err);
	} // catch
} // raudrohi.lang.ar2xseparated_list

raudrohi.lang.selftests.ar2xseparated_list=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s=raudrohi.lang.ar2xseparated_list(["A","B"],":","X","Y");
		var s_expected="XAY:XBY";
		if(s!==s_expected){
			ar_failed_tests.push('test 1, s=="'+s+'"');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.ar2xseparated_list');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('57f6fc65-c2c6-4ea5-8745-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.ar2xseparated_list


//-------------------------------------------------------------------------

window.raudrohi.lang.private_code.word_wrap_fake_but_fast_ht_rgx=new Hashtable();
var x=new Array((new RegExp("^[\\s]+","g")),(new RegExp("[\\s]+","g")),(new RegExp("[\\s]+$","g")));
// TODO: There's some sort of a bug that the FireFox JavaScript
// parser goes crazy, if a totally correct instantiation of the queueCache is used.
// Hence the dull and weird cache size limitation mechanism in the funcs.
window.raudrohi.lang.private_code.word_wrap_fake_but_fast_ht_rgx.put(" ",x);

// Returns an array of words that does not contain emptystrings or separators.
window.raudrohi.lang.private_code.word_wrap_fake_but_fast_get_ar_rgx=function(s_separator){
	try{
		var s1=null;
		var s2=null;
		var ar_rgx=null;
		var ht_rgx=window.raudrohi.lang.private_code.word_wrap_fake_but_fast_ht_rgx;
		if (ht_rgx.containsKey(s_separator)===true){
			ar_rgx=ht_rgx.get(s_separator);
			return ar_rgx;
		} // if
		var s_rgx=raudrohi.lang.str2regexstr(s_separator);
		var rgx_start=new RegExp("^("+s_rgx+")+","g");
		var rgx_middle=new RegExp("("+s_rgx+")+","g");
		var rgx_end=new RegExp("("+s_rgx+")+$","g");
		ar_rgx=[rgx_start,rgx_middle,rgx_end];
		if(ht_rgx.size()<20){
			ht_rgx.put(s_separator,ar_rgx);
		} // if
		return ar_rgx;
	} catch (err){
		raudrohi.tmg('351c5945-700b-496b-8735-405380b0abd7',err);
	} // catch
} // window.raudrohi.lang.private_code.word_wrap_fake_but_fast_get_ar_rgx

window.raudrohi.lang.private_code.word_wrap_fake_but_fast=function(s_text,
	i_max_line_width,s_linebreak,s_separator){
	try{
		var s_space=" ";
		var s_emptystring="";
		var ar_rgx=window.raudrohi.lang.private_code.word_wrap_fake_but_fast_get_ar_rgx(s_separator);
		var rgx_start=ar_rgx[0];
		var rgx_middle=ar_rgx[1];
		var rgx_end=ar_rgx[2];
		var s_in=""+s_text;
		// The result of the use of the regexes is that the
		// array will not contain any empty strings, which
		// saves one from manually comparing all elements
		// of the array with an ampty-string, and copying
		// all the rest of the elements, which are words,
		// to a new array.
		var s1=s_in.replace(rgx_start,s_emptystring);
		var s2=s1.replace(rgx_end,s_emptystring);
		s1=s2.replace(rgx_middle,s_separator);
		var ar_words=s1.split(s_separator);

		var s_out="";
		var i_lenarwords=ar_words.length;
		if (i_lenarwords==0){
			return s_out;
		} // if
		if (i_lenarwords==1){
			s_out=ar_words[0];
			return s_out;
		} // if

		var ar_lines=new Array();
		var i_word_ix=1;
		var s_word=null;
		var i_s_wordlen=null;
		var s_line=ar_words[0];
		var i_line_wordcount=1;
		var i_assembled_line_width=s_line.length;
		var i_separatorlen=s_separator.length
		var i_afterconcat=null;
		while(i_word_ix<i_lenarwords){
			s_word=ar_words[i_word_ix];
			i_s_wordlen=s_word.length;
			if(i_max_line_width<=i_s_wordlen){
				if(0<i_line_wordcount){
					ar_lines.push(s_line);
					s_line="";
					i_line_wordcount=0;
					i_assembled_line_width=0;
				}  // if
				ar_lines.push(s_word);
			} else {
				i_afterconcat=i_assembled_line_width+i_separatorlen+i_s_wordlen;
				if(i_max_line_width<i_afterconcat){
					ar_lines.push(s_line);
					s_line=s_word;
					i_line_wordcount=1;
					i_assembled_line_width=i_s_wordlen;
				} else {
					s_line=s_line+s_separator+s_word;
					i_assembled_line_width=i_afterconcat;
					i_line_wordcount++;
				} // else
			} // else
			i_word_ix++;
		} // while
		if(0<i_line_wordcount){
			ar_lines.push(s_line);
		} // if
		s_out=raudrohi.lang.ar2xseparated_list(ar_lines,s_linebreak);
		return s_out;
	} catch (err){
		raudrohi.tmg('a21f9337-308d-4317-afc5-405380b0abd7',err);
	} // catch
} // window.raudrohi.lang.private_code.word_wrap_fake_but_fast

window.raudrohi.lang.private_code.word_wrap_correct_but_slow=function(s_text,
	i_max_line_width, s_linebreak,s_separator){
	try{
		throw "This still has to be implemented.";
	} catch (err){
		raudrohi.tmg('5369abd5-6dfd-45d7-bf44-405380b0abd7',err);
	} // catch
} // window.raudrohi.lang.private_code.word_wrap_correct_but_slow


raudrohi.lang.word_wrap=function(s_text,i_max_line_width,
	s_linebreak,s_separator,b_use_fake_but_fast){
	try{
		b_use_fake_but_fast = typeof(b_use_fake_but_fast) !== 'undefined' ? b_use_fake_but_fast : true;
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_text,'s_text',
				'4d6ae7eb-3654-43f6-bdb4-405380b0abd7');
			raudrohi.base.assert_isNumber(i_max_line_width,'i_max_line_width',
				'38f47cb3-215d-4e50-a454-405380b0abd7');
			raudrohi.base.assert_isString(s_linebreak,'s_linebreak',
				'613467ca-5052-492a-a644-405380b0abd7');
			raudrohi.base.assert_isString(s_separator,'s_separator',
				'493ca4cc-5975-48f3-89e4-405380b0abd7');
			raudrohi.base.assert_isBoolean(b_use_fake_but_fast,'b_use_fake_but_fast',
				'3e651952-8a31-4f16-8943-405380b0abd7');
			if(s_separator.length==0){
				throw "s_separator.length=="+s_separator.length
			} // if
			if(s_linebreak.length==0){
				throw "s_linebreak.length=="+s_linebreak.length
			} // if
			if(i_max_line_width<1){
				throw "i_max_line_width=="+i_max_line_width+" < 1 "
			} // if
		} // if
		var s_out="";
		if(b_use_fake_but_fast===true){
			s_out=window.raudrohi.lang.private_code.word_wrap_fake_but_fast(s_text,
				i_max_line_width,s_linebreak,s_separator);
		} else {
			s_out=window.raudrohi.lang.private_code.word_wrap_correct_but_slow(s_text,
				i_max_line_width,s_linebreak,s_separator);
		} // else
		return s_out;
	} catch (err){
		raudrohi.tmg('4c516f53-093b-4031-9b43-405380b0abd7',err);
	} // catch
} // raudrohi.lang.word_wrap

raudrohi.lang.selftests.word_wrap=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s_hay='';
		var s_expected='';
		var s_wrapped='';
		s_hay="A B C";
		s_expected="AXBXC";
		s_wrapped=raudrohi.lang.word_wrap(s_hay,1,"X"," ",true);
		if(s_wrapped!==s_expected){
			ar_failed_tests.push('test 1, s_wrapped=="'+s_wrapped+'"');
		} // if
		s_hay="A B C";
		s_expected="A\nB\nC";
		s_wrapped=raudrohi.lang.word_wrap(s_hay,2,"\n"," ",true);
		if(s_wrapped!==s_expected){
			ar_failed_tests.push('test 2, s_wrapped=="'+s_wrapped+'"');
		} // if
		s_hay="AA B CC";
		s_expected="AAXBXCC";
		s_wrapped=raudrohi.lang.word_wrap(s_hay,2,"X"," ",true);
		if(s_wrapped!==s_expected){
			ar_failed_tests.push('test 3, s_wrapped=="'+s_wrapped+'"');
		} // if
		s_hay="AAA B CC";
		s_expected="AAAXBXCC";
		s_wrapped=raudrohi.lang.word_wrap(s_hay,2,"X"," ",true);
		if(s_wrapped!==s_expected){
			ar_failed_tests.push('test 4, s_wrapped=="'+s_wrapped+'"');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.word_wrap');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('1ae208f4-bab8-4592-8453-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.word_wrap

//-------------------------------------------------------------------------
raudrohi.lang.private_code.normalize_linebreaks_rgx_CR_LF=new RegExp("[\\r][\\n]","g");
raudrohi.lang.private_code.normalize_linebreaks_rgx_CR=new RegExp("[\\r]","g");
raudrohi.lang.private_code.normalize_linebreaks_rgx_LF=new RegExp("[\\n]","g");
// Returns a string.
raudrohi.lang.normalize_linebreaks=function(s_haystack,s_resultant_linebreak){
	try{
		s_resultant_linebreak = typeof(s_resultant_linebreak) !== 'undefined' ? s_resultant_linebreak : "\n";
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_haystack,'s_haystack',
				'61bc0560-80fa-45d1-baa3-405380b0abd7');
			raudrohi.base.assert_isString(s_resultant_linebreak,
				's_resultant_linebreak',
				'3cd15bd4-6690-4417-b333-405380b0abd7');
		} // if
		var rgx_cr_lf=raudrohi.lang.private_code.normalize_linebreaks_rgx_CR_LF;
		var rgx_cr=raudrohi.lang.private_code.normalize_linebreaks_rgx_CR;
		var rgx_lf=raudrohi.lang.private_code.normalize_linebreaks_rgx_LF;
		var s_lf="\n";
		var s1=s_haystack.replace(rgx_cr_lf,s_lf);
		var s2=s1.replace(rgx_cr,s_lf);
		s1=s2.replace(rgx_lf,s_resultant_linebreak);
		return s1;
	} catch (err){
		raudrohi.tmg('57c51c91-7aa1-4404-8e32-405380b0abd7',err);
	} // catch
} // raudrohi.lang.normalize_linebreaks

raudrohi.lang.selftests.normalize_linebreaks=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s_hay="AA\nBB\rCC\r\nDD"
		var s_normalized=raudrohi.lang.normalize_linebreaks(s_hay,"x");
		var s_expected="AAxBBxCCxDD";
		if(s_normalized!==s_expected){
			ar_failed_tests.push('test 1, s_normalized=="'+s_normalized+'"');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.normalize_linebreaks');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('34d79e5a-f822-4c9a-a012-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.normalize_linebreaks


//-------------------------------------------------------------------------
raudrohi.lang.private_code.word_wrap_with_normalization_t1_rgx_S_T=new RegExp("[\\s\\t]","g");
raudrohi.lang.word_wrap_with_normalization_t1=function(s_text,
	i_max_line_width,s_linebreak){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_text,'s_text',
				'490b8681-f763-4127-a552-405380b0abd7');
			raudrohi.base.assert_isNumber(i_max_line_width,'i_max_line_width',
				'55f20acc-cb44-4b14-9542-405380b0abd7');
			raudrohi.base.assert_isString(s_linebreak,'s_linebreak',
				'711af7bb-a506-4393-af42-405380b0abd7');
			if(s_linebreak.length==0){
				throw "s_linebreak.length=="+s_linebreak.length
			} // if
			if(i_max_line_width<1){
				throw "i_max_line_width=="+i_max_line_width+" < 1 "
			} // if
		} // if
		var rgx_s_t=raudrohi.lang.private_code.word_wrap_with_normalization_t1_rgx_S_T;
		// The "\n" at the next line is not a mistake.
		var s_normalized=raudrohi.lang.normalize_linebreaks(s_text,"\n");
		var s_space=" ";
		var s1=s_normalized.replace(rgx_s_t,s_space);
		var s_wrapped=raudrohi.lang.word_wrap(s1,i_max_line_width,
			s_linebreak,s_space,true);
		return s_wrapped;
	} catch (err){
		raudrohi.tmg('4fdb5885-6267-47f8-9f21-405380b0abd7',err);
	} // catch
} // raudrohi.lang.word_wrap_with_normalization_t1

raudrohi.lang.selftests.word_wrap_with_normalization_t1=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s_hay="AA   BB\n CC\r\n D E  "
		var s_wrapped=raudrohi.lang.word_wrap_with_normalization_t1(s_hay,
			3,"x");
		var s_expected="AAxBBxCCxD E";
		if(s_wrapped!==s_expected){
			ar_failed_tests.push('test 1, s_wrapped=="'+s_wrapped+'"');
		} // if
		s_hay="AABB CC"
		s_wrapped=raudrohi.lang.word_wrap_with_normalization_t1(s_hay,
			2,"<br/>");
		s_expected="AABB<br/>CC";
		if(s_wrapped!==s_expected){
			ar_failed_tests.push('test 2, s_wrapped=="'+s_wrapped+'"');
		} // if
		s_hay="AA BB CC"
		s_wrapped=raudrohi.lang.word_wrap_with_normalization_t1(s_hay,
			6,"<br/>");
		s_expected="AA BB<br/>CC";
		if(s_wrapped!==s_expected){
			ar_failed_tests.push('test 3, s_wrapped=="'+s_wrapped+'"');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.word_wrap_with_normalization_t1');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('261a0645-a531-41da-b771-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.word_wrap_with_normalization_t1

//-------------------------------------------------------------------------
raudrohi.lang.get_from_ht_by_array_of_keys_index=function(i_index,ht){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isNumber(i_index,'i_index',
				'25085085-4efa-4aab-bb31-405380b0abd7');
			raudrohi.base.assert_isObject(ht,'ht',
				'4877f945-b2c3-4657-8211-405380b0abd7');
			if(i_index<0){
				raudrohi.tmg('54d846f2-a279-4bfa-9f41-405380b0abd7',
					"i_index=="+i_index+" < 0");
			} // if
		} // if
		var keys=ht.keys();
		var max_index=keys.length-1;
		if(max_index<i_index){
			raudrohi.tmg('f12c5f8d-00bb-4e75-9710-405380b0abd7',
				"There are "+keys.length+" elements in the "+
				"array of hashtable keys, but i_index=="+i_index+" .");
		} // if
		var key=keys[i_index];
		var reference_to_the_value=ht.get(key);
		return 	reference_to_the_value;
	} catch (err){
		raudrohi.tmg('f3f81e27-3a1f-4191-9280-405380b0abd7',err);
	} // catch
} // raudrohi.lang.get_from_ht_by_array_of_keys_index

raudrohi.lang.selftests.get_from_ht_by_array_of_keys_index=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var ht_test=new Hashtable();
		var s_expected='Value of AA';
		ht_test.put('AA',s_expected);
		var s=raudrohi.lang.get_from_ht_by_array_of_keys_index(0,ht_test);
		if(s!==s_expected){
			ar_failed_tests.push('test 1, s=="'+s+'"');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.get_from_ht_by_array_of_keys_index');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('482a11a2-3701-475f-a720-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.get_from_ht_by_array_of_keys_index

//-------------------------------------------------------------------------
raudrohi.lang.cg_table_t1=function(s_lines_HTML_code,ar_class_names){
	try{
		var s;
		var i=0;
		var len=null;
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_lines_HTML_code,
				's_lines_HTML_code',
				'3f50f5d3-e28b-43f9-9010-405380b0abd7');
			raudrohi.base.assert_isArray(ar_class_names,'ar_class_names',
				'639707e4-12bd-4fa7-b650-405380b0abd7');
			len=ar_class_names.length;
			for(i=0;i<len;i++){
				s=ar_class_names[i];
				raudrohi.base.assert_isString(s,'s',
					'a1be2153-997a-41ca-976f-405380b0abd7');
			} // for
		} // if
		var s_classes="";
		len=ar_class_names.length;
		for(i=0;i<len;i++){
			s=ar_class_names[i];
			s_classes=" "+s;
		} // for
		var s_out="\n"+
		"<table class=\""+s_classes+"\">\n"+
		"<tbody>\n"+
		""+
		s_lines_HTML_code+
		"\n"+
		"</tbody>\n"+
		"</table>\n";
		return s_out;
	} catch (err){
		raudrohi.tmg('59afe484-159c-4239-9b2f-405380b0abd7',err);
	} // catch
} // raudrohi.lang.cg_table_t1

raudrohi.lang.selftests.cg_table_t1=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		// Just to execute it.
		var s=raudrohi.lang.cg_table_t1("",["a_class_name"]);
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.cg_table_t1');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('1e466401-b0e7-4901-875f-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.cg_table_t1


//-------------------------------------------------------------------------
raudrohi.lang.s_dec2hex=function(i_int){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isNumber(i_int,'i_int',
				'b8952672-b49e-4488-a42f-405380b0abd7');
		} // if
		// Credits for the singleliner go to 
		// http://javascript.about.com/library/blh2d.htm
		// access date: September 2011
		var s_out=i_int.toString(16).toLowerCase();
		return s_out;
	} catch (err){
		raudrohi.tmg('520334bf-139b-4eeb-b45f-405380b0abd7',err);
	} // catch
} // raudrohi.lang.s_dec2hex

raudrohi.lang.selftests.s_dec2hex=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var s=null;
		s=raudrohi.lang.s_dec2hex(15);
		if(s!=='f'){
			ar_failed_tests.push('test 1, s=="'+s+'"');
		} // if
		s=raudrohi.lang.s_dec2hex(0);
		if(s!=='0'){
			ar_failed_tests.push('test 2, s=="'+s+'"');
		} // if
		s=raudrohi.lang.s_dec2hex(17);
		if(s!=='11'){
			ar_failed_tests.push('test 3, s=="'+s+'"');
		} // if
		s=raudrohi.lang.s_dec2hex(-18);
		if(s!=='-12'){
			ar_failed_tests.push('test 4, s=="'+s+'"');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.s_dec2hex');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('32c837d2-6b19-48e6-a21e-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.s_dec2hex

raudrohi.lang.i_hex2dec=function(s_integer_in_base_16_format){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_integer_in_base_16_format,
				's_integer_in_base_16_format',
				'166c0f72-36b0-4e0b-b25e-405380b0abd7');
		} // if
		// Credits for the singleliner go to
		// http://javascript.about.com/library/blh2d.htm
		// access date: September 2011
		var i_out=parseInt(s_integer_in_base_16_format.toLowerCase(),16);
		return i_out;
	} catch (err){
		raudrohi.tmg('5798a8e1-5662-41fc-a22e-405380b0abd7',err);
	} // catch
} // raudrohi.lang.i_hex2dec

raudrohi.lang.selftests.i_hex2dec=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var i=null;
		i=raudrohi.lang.i_hex2dec('a');
		if(i!==10){
			ar_failed_tests.push('test 1, i=="'+i+'"');
		} // if
		i=raudrohi.lang.i_hex2dec('11');
		if(i!==17){
			ar_failed_tests.push('test 2, i=="'+i+'"');
		} // if
		i=raudrohi.lang.i_hex2dec('a0');
		if(i!==160){
			ar_failed_tests.push('test 3, i=="'+i+'"');
		} // if
		i=raudrohi.lang.i_hex2dec('-f3');
		if(i!==(-15*16-3)){
			ar_failed_tests.push('test 4, i=="'+i+'"');
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.i_hex2dec');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('179e3201-221f-421f-8a1e-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.i_hex2dec

//-------------------------------------------------------------------------
// This function here is mostly in a role of a 
// set of "functional notes". In practice there are 
// less things to look up during the reading of code 
// if the single-liner is used in stead of this function.
//
// The extra computational expense  of using
// this function is probably not that favourable either, if
// compared to the direct use of the singleliner.
raudrohi.lang.i_number_of_digits=function(i_int,i_base){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			// The number of digits does not make that
			// much sense, if the number is the same
			// for 10000, 0.123, 10,11, 101,1
			raudrohi.lang.assert_is_a_whole_number(i_int,'i_int',
				'37c73154-6c8b-4b3f-a33d-405380b0abd7');
			raudrohi.lang.assert_is_a_whole_number(i_base,'i_base',
				'16ef2d83-b740-4bc1-8e3d-405380b0abd7');
		} // if
		// Credits for the singleliner go to
		// http://javascript.about.com/library/blh2d.htm
		// access date: September 2011
		var i_out=Math.abs(i_int).toString(i_base).length;
		return i_out;
	} catch (err){
		raudrohi.tmg('2006def1-ed13-4b92-804d-405380b0abd7',err);
	} // catch
} // raudrohi.lang.i_number_of_digits

raudrohi.lang.selftests.i_number_of_digits=function(){
	try{
		var ht=new Hashtable();
		ht.put('test_passed','t');
		var ar_failed_tests=[];
		//---tests-start------------------
		var i=null;
		i=raudrohi.lang.i_number_of_digits(15,10);
		if(i!==2){
			ar_failed_tests.push('test 1, i=='+i);
		} // if
		i=raudrohi.lang.i_number_of_digits(15,16);
		if(i!==1){
			ar_failed_tests.push('test 2, i=='+i);
		} // if
		i=raudrohi.lang.i_number_of_digits(17,16);
		if(i!==2){
			ar_failed_tests.push('test 3, i=='+i);
		} // if
		i=raudrohi.lang.i_number_of_digits(-18,10); // the minus sign
		if(i!==2){
			ar_failed_tests.push('test 4, i=='+i);
		} // if
		//---tests-end--------------------
		var x_FireFox_bug_workaround=ar_failed_tests.length;
		if(0<x_FireFox_bug_workaround){
			ht.put('test_passed','f');
			ht.put('code_region_name',
				'raudrohi.lang.selftests.i_number_of_digits');
			ht.put('ar_failed_tests',ar_failed_tests);
		} // if
		return ht;
	} catch (err){
		raudrohi.tmg('12a22a22-3d94-40ce-b83d-405380b0abd7',err);
	} // catch
} // raudrohi.lang.selftests.i_number_of_digits

//-------------------------------------------------------------------------
// Retunrs an array that has the fd_min at index 0 and
// the fd_max at its greatest index.
// It's OK for the fd_min==fd_max, but then the array
// will always contain only a single element, which is
// the fd_min, bacause the elements of the array
// will always differ from one another.
//
// A requirement: 0<=i_maximum_number_of_intermittant_numbers
//
// if b_use_integer_mode==true, then the fd_min and 
// the fd_max are required to be whole numbers and 
// all of the elements of the output array are integers.
raudrohi.lang.ar_interpolate=function(fd_min,fd_max,
	i_maximum_number_of_intermittant_numbers,
	b_use_integer_mode){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isNumber(fd_min,'fd_min',
				'500b3294-209e-497e-a91d-405380b0abd7');
			raudrohi.base.assert_isNumber(fd_max,'fd_max',
				'2f3c0553-5c2d-437f-9d5c-405380b0abd7');
			raudrohi.base.assert_isBoolean(
				b_use_integer_mode,'b_use_integer_mode',
				'51366cc1-56eb-43dd-a63c-405380b0abd7');
		} // if
		if(fd_max<fd_min){
			raudrohi.tmg('1bd0ed42-6635-4630-921c-405380b0abd7',
				'fd_max == '+fd_max+' < fd_min == '+fd_min);
		} // if
		raudrohi.lang.assert_is_a_whole_number(
			i_maximum_number_of_intermittant_numbers,
			'i_maximum_number_of_intermittant_numbers',
			'4585abcc-b177-47d1-8c1c-405380b0abd7');
		if(i_maximum_number_of_intermittant_numbers<0){
			raudrohi.tmg('2b2895b1-f824-4569-813b-405380b0abd7',
				'i_maximum_number_of_intermittant_numbers == '+
				i_maximum_number_of_intermittant_numbers+' < 0 ');
		} // if
		var ar_out=new Array();
		ar_out.push(fd_min);
		if(fd_min===fd_max){
			return ar_out;
		} // if
		var i=0;
		var elem;
		var fd_location=null;
		var ar_tmp=new Array();
		var i_len=42;
		if(b_use_integer_mode===true){
			raudrohi.lang.assert_is_a_whole_number(fd_min,'fd_min',
				'419db214-9e78-45ed-ae38-405380b0abd7');
			raudrohi.lang.assert_is_a_whole_number(fd_max,'fd_max',
				'4c7238a2-399e-416a-b438-405380b0abd7');
			// fd_min==1, 2, 3, 4, 5==fd_max
			var i_length=fd_max-fd_min+1; // like number of pixels
			if(i_length<=(i_maximum_number_of_intermittant_numbers+2)){
				// fd_min is aready in the ar_out
				for(i=(fd_min+1);i<=fd_max;i++){
					ar_out.push(i);
				} // for
				return ar_out;
			} // if
			// think of a situation, were 
			// i_maximum_number_of_intermittant_numbers==2, 
			// fd_min==1, 2, 3, 4, 5==fd_max
			var i_n_of_subparts=i_maximum_number_of_intermittant_numbers+1;
			var fd_delta=i_length/i_n_of_subparts;
			// The trickery is due to a fact that not all subparts
			// are equal in length and one does not want the last
			// subpart length to "considerably" differ from the
			// lengths of the other subparts.

			// Further comments are in the branch, where
			// b_use_integer_mode==false
			var fd_location=fd_min;
			ar_tmp.push(fd_location);
			i=0;
			for(i=0;i<i_maximum_number_of_intermittant_numbers;i++){
				fd_location=fd_location+fd_delta;
				ar_tmp.push(Math.floor(fd_location));
			} // for
			ar_tmp.push(fd_max);
			i_len=ar_tmp.length;
			fd_1=ar_tmp[0]; // ==fd_min
			for(i=1;i<i_len;i++){
				elem=ar_tmp[i];
				if(fd_1!==elem){
					ar_out.push(elem);
					fd_1=elem;
				} // if
			} // for
		} else { // b_use_integer_mode!==true
			var fd_1=42.1;
			// fd_min==0...1...2...3==fd_max
			// If arbitrary precision real numbers are used
			// and fd_min!=fd_max, then
			// it's always possible to divide the range [fd_min,fd_max]
			// to arbitrary number of subranges. In the case of
			// limited number of bits, like in the case of the 
			// floats and doubles, there are rounding related
			// issues in a form of x+delta_x==x
			var fd_len=fd_max-fd_min;
			var i_n_of_subranges=i_maximum_number_of_intermittant_numbers+1;
			var fd_delta=fd_len/i_n_of_subranges;

			fd_location=fd_min;
			// It's like with the tree-building algorithm.
			// Once the root node is in place, one just adds
			// components that consist of an edge and a node that
			// is connected to one side of the edge.
			ar_tmp.push(fd_location); // the "root node" analoque
			i=0;
			// The i_maximum_number_of_intermittant_numbers is not a
			// mistake, because ... comments after the loop.
			for(i=0;i<i_maximum_number_of_intermittant_numbers;i++){
				fd_location=fd_location+fd_delta;
				ar_tmp.push(fd_location); // the new-edge-new-node component
			} // for
			// To counterbalance various rounding effects, the
			// fd_max is used in stead of the fd_location+fd_delta
			// for the last subrange endpoint, i.e. "node".
			ar_tmp.push(fd_max);
			// ar_out loop is partly for the x+delta_x==x counterbalancing.
			i_len=ar_tmp.length;
			fd_1=ar_tmp[0]; // hence the i=1 in stead of i=0 in the for-clause
			for(i=1;i<i_len;i++){
				elem=ar_tmp[i];
				if(fd_1!==elem){
					ar_out.push(elem);
					fd_1=elem;
				} // if
			} // for
		// There's no problems even, if the number of iterations ==0.
		} // else
		if(raudrohi.settings.debug_JavaScript===true){			
			i=ar_out.length;
			if((i_maximum_number_of_intermittant_numbers+2)<i){
				raudrohi.tmg('2564ef55-0c4e-4665-b748-405380b0abd7',
					'(i_maximum_number_of_intermittant_numbers+2)=='+
					(i_maximum_number_of_intermittant_numbers+2)+
					' < ar_out.length=='+i);
			} // if
		} // if
		return ar_out;
	} catch (err){
		raudrohi.tmg('2f2b7d06-cc88-43fd-9927-405380b0abd7',err);
	} // catch
} // raudrohi.lang.ar_interpolate

//-------------------------------------------------------------------------
raudrohi.lang.assert_hashtable_contains_key=function(
	a_variable,a_variable_name,s_key,
	Globally_Unique_Identifier_as_string,s_optional_errmsg_suffix){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_key,'s_key',
				'e355c39b-5d87-4fb6-a317-405380b0abd7');
		} // if
		s_optional_errmsg_suffix = typeof(s_optional_errmsg_suffix) !== 'undefined' ? s_optional_errmsg_suffix : '';
		if(!raudrohi.base.isObject(a_variable)){
			raudrohi.tmg(Globally_Unique_Identifier_as_string,
				a_variable_name+'(=='+a_variable+') is not a hashtable. '+
				s_optional_errmsg_suffix);
		} // if
		if(!a_variable_name.containsKey(s_key)){
			raudrohi.tmg(Globally_Unique_Identifier_as_string,
				'A hashtable candidate '+a_variable_name+
				' does not contain a key named "'+s_key+'".');
		} // if
	} catch (err){
		raudrohi.tmg('518c063f-f78c-42dc-a727-405380b0abd7',err);
	} // catch
} // raudrohi.lang.assert_hashtable_contains_key

//-------------------------------------------------------------------------
// In JavaScript the array assignment is by reference.
// For example:
// var ar1=["Hello","World"];
// var ar2=ar1;  ar2.pop();
// if(ar1.length==1){
//     document.write(' The World dissapeared from ar1.');
//     } // if
//
// The raudrohi.lang.ar_clone_array makes a copy of the ar_in.
raudrohi.lang.ar_clone_array=function(ar_in){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isArray(ar_in,'ar_in',
				'44618651-3f5c-4eaf-af16-405380b0abd7');
		} // if
		var ar_out=new Array();
		var i_len=ar_in.length;
		var i=0;
		var elem;
		for(i=0;i<i_len;i++){
			elem=ar_in[i];
			ar_out.push(elem); 
		} // for
		return ar_out;
	} catch (err){
		raudrohi.tmg('52e7de12-fa99-4fc9-8656-405380b0abd7',err);
	} // catch
} // raudrohi.lang.ar_clone_array

//-------------------------------------------------------------------------
raudrohi.lang.comparison.goe.number=function(a,b){
	try{
		var b_out=false;
		if(a<=b){
			b_out=true;
		} // if
		return b_out;
	} catch (err){
		raudrohi.tmg('35bf28f3-924f-41b7-b236-405380b0abd7',err);
	} // catch
} // raudrohi.lang.comparison.goe.funcs.number

//-------------------------------------------------------------------------
// One of the valid values for the func_comparison is
// raudrohi.lang.comparison.goe.funcs.number
//
// Another example of the func_comparison:
// func_comparison=function(a,b){return (a<=b);}
raudrohi.lang.comparison.equals=function(a,b,func_comparison){
	try{
		var b_a_equals_b=(func_comparison(a,b)&&func_comparison(b,a));
		return b_a_equals_b;
	} catch (err){
		raudrohi.tmg('5a3c85c5-efeb-4d08-9e56-405380b0abd7',err);
	} // catch
} // raudrohi.lang.comparison.equals

//-------------------------------------------------------------------------
// The raudrohi.lang.sort differs from the classical sort function
// by a fact that it facilitates the recursive sorting of 
// tables, where first all rows are sorted by the first column, 
// then, those rows that have equal values within their  
// first column, are sorted amongst themselves according to the
// second column, etc.
//
// If one were to sort only according to the first 3 columns,
// starting from 1. column, then sorting according to the 2. column 
// and then sorting according to the 3. column, then 
// the content of the ar_or_func_comparison is:
// ar_or_func_comparison[0]===<comparison function for the 3. column>
// ar_or_func_comparison[1]===<comparison function for the 2. column>
// ar_or_func_comparison[2]===<comparison function for the 1. column>
//
// The comparizon functions, func(a,b), are expected to return only
// boolean values and the returned value must be "false", unless the a<=b.
// For short: comparison_function=function(a,b){return (a<=b);}
//
// s_mode inSet {'ascending','descending'}
//
// If the b_sort_in_place==true, the ar_data is modified.
raudrohi.lang.sort=function(ar_data,ar_or_func_comparison,
	s_mode,b_sort_in_place){
	try{
		b_sort_in_place= typeof(b_sort_in_place) !== 'undefined' ? b_sort_in_place : true ;
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isArray(ar_data,'ar_data',
				'b144bf01-d6d1-403c-bd35-405380b0abd7');
			raudrohi.base.assert_isString(s_mode,'s_mode',
				'572e7471-3c29-4aa7-8c35-405380b0abd7');
			raudrohi.base.assert_isBoolean(b_sort_in_place,'b_sort_in_place',
				'62d118f2-301b-445d-bb65-405380b0abd7');
		} // if
		var ar_data_out=null;
		if(b_sort_in_place){
			ar_data_out=ar_data;
		} else {
			ar_data_out=raudrohi.lang.ar_clone_array(ar_data);
		} // else
		if(ar_data_out.length<2){
			return ar_data_out; // there's nothing to sort
		} // if
		var ar_funcs=null;
		var s=null;
		if(raudrohi.adapter.isArray(ar_or_func_comparison)){
			ar_funcs=ar_or_func_comparison;
		} else {
			if(raudrohi.adapter.isFunction(ar_or_func_comparison)){
				ar_funcs=[ar_or_func_comparison];
			} else {
				s=''+typeof(ar_comparizon_functions);
				raudrohi.tmg('52a68ff4-dbc0-4502-88c5-405380b0abd7',
					'typeof(ar_comparizon_functions) == '+s+
					'but it is allowed to be an array or a function.');
			} // else
		} // else
		if(ar_funcs.length==0){
			return ar_data_out;
		} // if
		var b_ascending=false;
		switch(s_mode){
			case 'ascending':
				b_ascending=true;
				break;
			case 'descending':
				break;
			default:
				if(raudrohi.settings.debug_JavaScript){
					throw raudrohi.tmg(
						'33e70d10-a0d2-4e73-8224-405380b0abd7',
						'There\'s no branching for s_mode(=='+
						s_mode+').');
				} // if
		} // switch
		var ar_funcs_minus_one=raudrohi.lang.ar_clone_array(ar_funcs);
		var func_comparison=ar_funcs_minus_one.pop();
		ar_data_out.sort(func_comparison);
		// By default the 
		// ar.sort(function(a,b){return (a<=b);}) 
		// sorts in a descending order.
		if(b_ascending){
			ar_data_out.reverse();
		} // if
		if(ar_funcs_minus_one.length==0){
			return ar_data_out;
		} // if
		// TODO: Optimize it in terms of the reuse of
		// the comparison functions arrays and may be,
		// if possible, also in terms of in-place sorting.
		var i=null;
		var ar_data_out_2=new Array();
		var func_equals=raudrohi.lang.comparison.equals; // function lookup optimization
		var func_sort=raudrohi.lang.sort;
		var i_len=ar_data_out.length;
		var elem_0=ar_data_out[0];
		var ar_subpart=new Array();
		ar_subpart.push(elem_0);
		var elem=null;
		// a b b b c c d e f f
		for(i=1;i<i_len;i++){ // i==1 due to elem_0 preassignment
			elem=ar_data_out[i];
			if(func_equals(elem_0,elem,func_comparison)===false){
				if(1<ar_subpart.length){ // just for speed
					ar_subpart=func_sort(ar_subpart,ar_funcs_minus_one,
						s_mode,true);
				} // if
				ar_data_out_2=ar_data_out_2.concat(ar_subpart);
				ar_subpart=new Array();
			} // if
			ar_subpart.push(elem);
			elem_0=elem;
		} // for
		if(1<ar_subpart.length){ // just for speed
			ar_subpart=func_sort(ar_subpart,ar_funcs_minus_one,
				s_mode,true);
		} // if
		ar_data_out_2=ar_data_out_2.concat(ar_subpart);
		return ar_data_out_2;
	} catch (err){
		raudrohi.tmg('a1f8c6c4-b7a3-4321-a024-405380b0abd7',err);
	} // catch
} // raudrohi.lang.sort

//-------------------------------------------------------------------------
raudrohi.lang.private_code.ar_scale_number_of_frames_ix_short2long=function(i_ar_in_len,
	i_number_of_frames_in_the_output_series){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			if(i_number_of_frames_in_the_output_series<=i_ar_in_len){
				raudrohi.tmg('2db643ef-da31-442f-aa34-405380b0abd7',
					'i_number_of_frames_in_the_output_series == '+
					i_number_of_frames_in_the_output_series+' <= '+
					'i_ar_in_len == '+i_ar_in_len);
			} // if
			if(i_ar_in_len<2){
				raudrohi.tmg('c479d5e9-6c33-48e8-8f13-405380b0abd7',
					'i_ar_in_len == '+i_ar_in_len+' < 2');
			} // if
			if(i_number_of_frames_in_the_output_series<2){
				raudrohi.tmg('2b1a5a34-4d3c-4794-ba13-405380b0abd7',
					'i_number_of_frames_in_the_output_series == '+
					i_number_of_frames_in_the_output_series+' < 2');
			} // if
		} // if
		var ar_ix=new Array();
		var i=null;
		var i_ix=null;
		for(i=0;i<i_number_of_frames_in_the_output_series;i++){
			ar_ix.push(-1); // no valid index has the value of (-1)
		} // for
		ar_ix[0]=0;
		ar_ix[i_number_of_frames_in_the_output_series-1]=i_ar_in_len-1;
		// X o o o X
		// X o o X
		var i_n_of_frames_left_2_distribute=i_ar_in_len-2;
		if(0<i_n_of_frames_left_2_distribute){
			var i_n_of_deltas=i_n_of_frames_left_2_distribute+1;
			var fd_delta=(i_number_of_frames_in_the_output_series-2)/
			i_n_of_deltas;
			var fd_location=1; // ar_ix[0] is already set
			for(i=0;i<i_n_of_frames_left_2_distribute;i++){
				i_ix=Math.floor(fd_location+fd_delta);
				ar_ix[i_ix]=i+1; // == ar_input_frame_series index
			} // for
		} // if
		return ar_ix;
	} catch (err){
		raudrohi.tmg('611b392b-2cde-4165-a923-405380b0abd7',err);
	} // catch
} //raudrohi.lang.private_code.ar_scale_number_of_frames

// One of the valid values for the func_comparison is
// raudrohi.lang.comparison.goe.funcs.number
//
// Another example of the func_comparison:
// func_comparison=function(a,b){return (a<=b);}
//
// This function makes a copy of the ar_input_frame_series
// and then multiplies or removes frames from 
// the copy. If the ar_input_frame_series contained movie frames,
// then this function could be used for creating
// slow motion clips and fast motion clips
raudrohi.lang.ar_scale_number_of_frames=function(
	ar_input_frame_series, i_number_of_frames_in_the_output_series){
	try{
		var i=null;
		if(raudrohi.settings.debug_JavaScript===true){			
			raudrohi.base.assert_isArray(ar_input_frame_series,
				'ar_input_frame_series',
				'192d8914-9a43-46f3-8a13-405380b0abd7');
			raudrohi.lang.assert_is_a_whole_number(
				i_number_of_frames_in_the_output_series, 
				'i_number_of_frames_in_the_output_series',
				'3ace5e51-f5f3-4d97-9533-405380b0abd7');
		} // if
		var i_ar_in_len=ar_input_frame_series.length;
		if(i_ar_in_len<1){
			raudrohi.tmg('e14a4351-3e0e-45d3-bbb2-405380b0abd7',
				'ar_frames_series.length == '+i_ar_in_len+' < 1');
		} // if
		if(i_number_of_frames_in_the_output_series<1){
			raudrohi.tmg('4ac88d02-ed4c-485d-8f42-405380b0abd7',
				'i_number_of_frames_in_the_output_series=='+
				i_number_of_frames_in_the_output_series+' < 1');
		} // if
		var ar_output_series=null;
		if(i_ar_in_len===i_number_of_frames_in_the_output_series){
			ar_output_series=raudrohi.lang.ar_clone_array(ar_input_frame_series);
			return ar_output_series;
		} // if
		ar_output_series=new Array();
		var x_frame=null;
		if(i_ar_in_len===1){
			x_frame=ar_input_frame_series[0];
			for(i=0;i<i_number_of_frames_in_the_output_series;i++){
				ar_output_series.push(x_frame);
			} // for
			return ar_output_series;
		} // if
		// On this line the 1<i_ar_in_len
		if(i_number_of_frames_in_the_output_series===1){
			x_frame=ar_input_frame_series[0];
			ar_output_series.push(x_frame);
			return ar_output_series;
		} // if
		// On this line the 1<i_number_of_frames_in_the_output_series
		var ar_ix=null; // indexes of the ar_input_frame_series
		var i_ix=null;
		if(i_ar_in_len<i_number_of_frames_in_the_output_series){
			ar_ix=raudrohi.lang.private_code.ar_scale_number_of_frames_ix_short2long(
				i_ar_in_len,i_number_of_frames_in_the_output_series);
			x_frame=ar_input_frame_series[0];
			for(i=0;i<i_number_of_frames_in_the_output_series;i++){
				i_ix=ar_ix[i];
				if((-1)<i_ix){
					x_frame=ar_input_frame_series[i_ix];
				} // if
				ar_output_series.push(x_frame);
			} // for
		} else { // i_number_of_frames_in_the_output_series<i_ar_in_len
			// "Shringing" the input array of frames is an
			// inverse of expanding the input array.
			var ar_ix_short2long=raudrohi.lang.private_code.ar_scale_number_of_frames_ix_short2long(
				i_number_of_frames_in_the_output_series,i_ar_in_len);
			for(i=0;i<i_ar_in_len;i++){
				// If this were an expansion, then the
				// (-1) would indicate a copy of a frame.
				if(ar_ix_short2long[i]!==(-1)){
					x_frame=ar_input_frame_series[i];
					ar_output_series.push(x_frame);
				} // if
			} // for
		} // else
		return ar_output_series;
	} catch (err){
		raudrohi.tmg('494fa8e2-0bf0-471d-bd42-405380b0abd7',err);
	} // catch
} // raudrohi.lang.ar_scale_number_of_frames

//-------------------------------------------------------------------------
// Converts an integer to base i_base and writes the value
// to a string that has exactly i_maximum_number_of_digits.
// The string length is adjusted by adding leading zeros.
//
// It's useful for assembling HTML color strings from
// arrays like [15,7,0] (==="#ff0700")
//
// This function throws, if the toString(i_base)
// produces a string that is longer than the
// i_maximum_number_of_digits.
raudrohi.lang.s_num2s_with_leading_zero_normalization=function(i_or_fd_in,
	i_base,i_number_of_characters){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isNumber(i_or_fd_in,'i_or_fd_in',
				'4568a0a2-91e2-465c-9322-405380b0abd7');
			raudrohi.lang.assert_is_a_whole_number(i_base,'i_base',
				'c30be6c5-b6e6-4059-9821-405380b0abd7');
			raudrohi.lang.assert_is_a_whole_number(
				i_number_of_characters,'i_number_of_characters',
				'15a9abac-12c3-43d1-b8c1-405380b0abd7');
			if(i_base<2){
				raudrohi.tmg('53340e82-67cb-4ba3-a831-405380b0abd7',
					'i_base == '+i_base+' < 2');
			} // if
			if(i_number_of_characters<1){
				raudrohi.tmg('a8c1fc63-459f-41f7-9911-405380b0abd7',
					'i_maximum_number_of_digits== '+
					i_number_of_characters+' < 2');
			} // if
		} // if
		var s_converted=i_or_fd_in.toString(i_base).toLowerCase();
		var i_len=s_converted.length;
		if(i_number_of_characters<i_len){
			// The point of a floating point number is also a character.
			raudrohi.tmg('962cd886-60c9-4428-ba10-405380b0abd7',
				'i_number_of_characters=='+i_number_of_characters+
				' < i_or_fd_in.toString(i_base).length=='+i_len);
		} // if
		var i_number_of_leading_zeros_to_add=i_number_of_characters-i_len;
		var i=null;
		var s_lc_zero='0';
		var s_zeros='';
		for(i=0;i<i_number_of_leading_zeros_to_add;i++){
			s_zeros=s_zeros+s_lc_zero;
		} // for
		var s_out=s_zeros+s_converted;
		return s_out;
	} catch (err){
		raudrohi.tmg('b1de9247-09a4-4f99-b340-405380b0abd7',err);
	} // catch
} //raudrohi.lang.s_num2s_with_leading_zero_normalization

//-------------------------------------------------------------------------
// If the b_will_be_wrapped_in_JavaScript_source_by_singlequotes==false,
// then the quotation marks that will be used for wrapping the 
// output of this method are expected to be double quotes.
//
// This function is useful for assembling JavaScript source that
// is intended to be fed into the eval(...).
raudrohi.lang.s_escape_for_eval=function(s_in,
	b_will_be_wrapped_in_JavaScript_source_by_singlequotes){
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_in,'s_in',
				'0c576467-f7c6-475f-9150-405380b0abd7');
			raudrohi.base.assert_isBoolean(
				b_will_be_wrapped_in_JavaScript_source_by_singlequotes,
				'b_will_be_wrapped_in_JavaScript_source_by_singlequotes',
				'36068825-bf20-4ec5-9530-405380b0abd7');
		} // if
		// ---verbatim--start----
		// var s_0='ab"c\'\\d/\\n$\n@';
		// var s_1="ab\"c'\\d/\\n$\n@";
		// var s_2=s_0+'HH'+s_1;
		// document.write('<pre>'+s_2+'</pre>');
		// ---verbatim--end------
		//
		// The output:
		// ---verbatim--start----
		// ab"c'\d/\n$
		// @HHab"c'\d/\n$
		// @
		// ---verbatim--end------
		//
		var s_lc_g='g';
		var rgx_backslash=new RegExp('[\\\\]',s_lc_g);
		var s_1=''+s_in;
		var s_2=s_1.replace(rgx_backslash,'\\\\');
		var rgx_q=null;
		if(b_will_be_wrapped_in_JavaScript_source_by_singlequotes){
			rgx_q=new RegExp("[']",s_lc_g);
			s_1="\\'";
		} else {
			rgx_q=new RegExp('["]',s_lc_g);
			s_1='\\"';
		} // else
		var s_out=s_2.replace(rgx_q,s_1);
		return s_out;
	} catch (err){
		raudrohi.tmg('935ab422-e4e1-4231-9c3f-405380b0abd7',err);
	} // catch
} //raudrohi.lang.s_escape_for_eval

//=========================================================================
