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
//========================================================================

if(window.raudrohi_ajax_exists!==true){
	window.raudrohi.ajax={};
	window.raudrohi_ajax_exists=true;
} // if
if(window.raudrohi_ajax_comm_exists!==true){
	window.raudrohi.ajax.comm={};
	window.raudrohi_ajax_comm_exists=true;
} // if
if(window.raudrohi_ajax_comm_formscript_exists!==true){
	raudrohi.ajax.comm.formscript={};
	window.raudrohi_ajax_comm_formscript_exists=true;
} // if

//------------------------------------------------------------------------
raudrohi.ajax.comm.formscript.send2server_s_triplepillar="|||";

raudrohi.ajax.comm.formscript.send2server=function(formscript_processor_name,
	phone_number_of_the_response_receiver, formscript_data, server_URL){
	var err_tmp='raudrohi.ajax.comm.formscript.send';
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			if(!raudrohi_adapter_isString(formscript_processor_name)){
				raudrohi.tmg('9337c4f2-6ef4-41c8-ba50-8390a0219bd7',err_tmp);
			}
			if(!raudrohi_adapter_isString(phone_number_of_the_response_receiver)){
				raudrohi.tmg('1825bff4-fef9-47ee-9a40-8390a0219bd7',err_tmp);
			}
			if(!raudrohi_adapter_isString(formscript_data)){
				raudrohi.tmg('1cd5a612-3813-40f7-b710-8390a0219bd7',err_tmp);
			}
			if(!raudrohi_adapter_isString(server_URL)){
				raudrohi.tmg('3e864d75-f0bb-4424-8720-8390a0219bd7',err_tmp);
			}
		} // if
		//TODO: Refactor the JavaScript side and server side so that it uses
		// ProgFTE format in stead of the current one, where phone numbers are
		// not allowed to contain the '|||'.
		var s2=formscript_data;
		var s_trplplr=raudrohi.ajax.comm.formscript.send2server_s_triplepillar;
		var datastr=formscript_processor_name+s_trplplr+
		phone_number_of_the_response_receiver+s_trplplr+s2;
		raudrohi.adapter.send2server(server_URL,datastr);
	} catch (err){
		raudrohi.tmg('18fd15f2-bc87-44d7-a130-8390a0219bd7',err);
	} // catch
}; // raudrohi.ajax.comm.formscript.send2server

//------------------------------------------------------------------------
// Actually, this class is CRAP and should be heavily refactored.
// currently its still in here due to the crash message methods, which are
// useful.
raudrohi.ajax.pagecontrol=function(){
	var self_public_=this;
	this.phone=new raudrohi.lang.comm.phone('raudrohi.ajax.pagecontrol');
	var visible_elems_=[];


	// This metod is meant for displaying only the "official" crash
	// messages, not any kind of debugging stuff.
	this.display_server_side_crash_message=function(a_string_from_server){
		try{
			if(a_string_from_server.indexOf('OPEN_<theTITLEof_I_heaT_up_I_can\''+
				't_cool_down_You_got_me_spinnin_Round_and_Round>')!=(-1)){
				document.write(a_string_from_server);
			} else{
				var s1=raudrohi.lang.userinterface_text.get(11);
				document.write(s1);
			} // else
			return;
		} catch (err){
			if(raudrohi_settings_debug_JavaScript===true){
				raudrohi.tmg('5163abf2-8b20-428e-8f5f-8390a0219bd7',err);
			}
			document.write('<br/><br/>The web application\'s server side '+
				'crashed. This is defenately due to a software fault.'+
				'The developers will find a string like "'+
				'3ad7ebe3-7f96-4b94-aa72-0d13edf7314e" to be useful<br/>');
		} // catch
	}; // display_server_side_crash_message

	this.display_client_side_crash_message=function(){
		try{
			var s1=raudrohi.lang.userinterface_text.get(12);
			document.write(s1);
			return;
		} catch (err){
			if(raudrohi_settings_debug_JavaScript===true){
				raudrohi.tmg('e44d73e0-2e79-4b76-944f-8390a0219bd7',err);
			}
			document.write('<br/><br/>The web application\'s '+
				'browser side crashed. '+
				'This is defenately due to a software fault.'+
				'The developers will find a string like "'+
				'47e1b2dd-c5aa-420a-aa4a-21ab5036a7f8" to be useful<br/>');
		} // catch
	}; // display_client_side_crash_message

	this.display_general_crash_message=function(){
		try{
			var s1=raudrohi.lang.userinterface_text.get(13);
			document.write(s1);
			return;
		} catch (err){
			if(raudrohi_settings_debug_JavaScript===true){
				raudrohi.tmg('4c5d8ea1-cd60-4fcf-9b4f-8390a0219bd7',err);
			}
			document.write('The application crashed. This is defenately a bug.'+
				'The developers might find a string like "'+
				'8947b98b-a7b2-4bf3-9039-667bd346e884" useful');
		} // catch
	}; // display_general_crash_message

	this.declare_visible=function(a_page){
		try{
			visible_elems_.push(a_page);
		} catch (err){
			if(raudrohi_settings_debug_JavaScript===true){
				raudrohi.tmg('0109f393-0b95-46a6-a13f-8390a0219bd7',err);
			} else {
				self_public_.display_client_side_crash_message();
			} // else
		} // catch
	}; // this.declare_visible


	this.hide_all_visible_pages=function(){
		try{
			//raudrohi.lang.map_hashtable(self_public_.visible_elems,'hide','');
			var len=visible_elems_.length;
			var elem;
			for (var i = 0 ; i < len; i++){
				elem=visible_elems_.pop();
				elem.hide();
			} // for
		} catch (err){
			if(raudrohi_settings_debug_JavaScript===true){
				raudrohi.tmg('53c4d7ef-984d-4781-812f-8390a0219bd7',err);
			} else {
				self_public_.display_client_side_crash_message();
			} // else
		} // catch
	}; // this.hide_all_visible_pages

	this.switch2page=function(a_page_phone_number){
		try{
			self_public_.hide_all_visible_pages();
			self_public_.phone.call(a_page_phone_number,'unhide|||',0);
		} catch (err){
			if(raudrohi_settings_debug_JavaScript===true){
				raudrohi.tmg('20e9fce3-63da-40f1-a82f-8390a0219bd7',err);
			} else {
				self_public_.display_client_side_crash_message();
			} // else
		} // catch
	}; // this.switch2page

}; // raudrohi.ajax.pagecontrol

//------------------------------------------------------------------------
raudrohi.ajax.comm.formscript.receiver=function(){
	var self_public_=this;
	this.phone=new raudrohi.lang.comm.phone(
		'raudrohi.ajax.comm.formscript.receiver');
	var rgx_spacechars_=new RegExp("[\\s\\t\\n\\r]+","g");

	// Returns null, if the operation fails. Otherwise
	// returns raudrohi.core.pair, where
	// raudrohi.core.pair.a==<session id as a string>
	// and raudrohi.core.pair.b==formscript
	// A few qualifying sample strings:
	// "no_errors_occurred_at_server_side|||without_debuglog|||y|||id_333|||datawhatever"
	// "no_errors_occurred_at_server_side|||with_debuglog|||greetings|||id_is_this_time42a7|||whatever"
	function try_to_digest_response_text(a_string_from_server){
		var a_phone_number;
		var data;
		var debug=(raudrohi_settings_debug_JavaScript===true)||(raudrohi.settings.debug_SERVERSIDE===true);
		try{
			raudrohi.base.assert_isString(a_string_from_server,
				'a_string_from_server', '3da18b64-02ee-4db9-a41f-8390a0219bd7');
			// The trimming is some sort of a temporary bugfix, 
			// because for some reason the a_string_from_server 
			// starts with a linebreak, which makes things 
			// dificult if one starts to compare 
			// "\nno_errors_occurred_at_server_side" with the 
			//   'no_errors_occurred_at_server_side'
			var s_tmp=raudrohi.adapter.trim(a_string_from_server);
			var servercrash_state=raudrohi.base.bisect(s_tmp,'|||');
			var msg;
			if(servercrash_state===null) {
				msg='servercrash_state===null, Received:'+a_string_from_server;
				raudrohi.adapter.log('raudrohi Warning:'+msg);
				if(a_string_from_server!==''){
					if(debug) {
						document.write(msg);
						raudrohi.tmg('61d62b47-15b2-4379-ab5f-8390a0219bd7',msg);
					} else {
						raudrohi.ajax.pagecontrol.display_server_side_crash_message(a_string_from_server);
					} // else
				} // if
				return;
			} // if
			if(servercrash_state.a!='no_errors_occurred_at_server_side'){
				msg='servercrash_state.a=='+servercrash_state.a+
				' != \'no_errors_occurred_at_server_side\', '+
				'Received:'+a_string_from_server;
				document.write(msg);
				raudrohi.tmg('96feb203-8a66-4cf0-b73f-8390a0219bd7',msg);
			} // if
			var dbglog_presence_pair=raudrohi.base.bisect(servercrash_state.b,
				'|||');
			var dbglog_text_pair=raudrohi.base.bisect(dbglog_presence_pair.b,
				'|||');
			if((raudrohi.settings.debug_SERVERSIDE===true)&&(raudrohi_settings_debug_JavaScript===true)){
				if(dbglog_presence_pair.a=='with_debuglog') {
					var s_dbgl=raudrohi.base.gsub(
						'|','SiNgLepILLAR4',dbglog_text_pair.a);
					var s_dbgl1=s_dbgl.replace(rgx_spacechars_,"");
					if(s_dbgl1!==""){
						raudrohi.adapter.log(s_dbgl);
					} // if
				} // if
			} // if
			var s_session_id_pair=raudrohi.base.bisect(dbglog_text_pair.b, '|||');
			a_phone_number=s_session_id_pair.a;
			data=s_session_id_pair.b;
		} catch (err){
			if(debug) {
				raudrohi.tmg('4f79dec2-2cde-4bc4-b91f-8390a0219bd7',err);
			} else {
				raudrohi.ajax.pagecontrol.display_general_crash_message();
			} // else
		}
		try{
			self_public_.phone.call(a_phone_number,data,0);
		} catch (err2){
			if(debug) {
				raudrohi.tmg('34bb9e73-8676-401e-a03f-8390a0219bd7',err2);
			} else{
				raudrohi.ajax.pagecontrol.display_client_side_crash_message();
			}
		} // catch
	} // try_to_digest_response_text

	this.receive_response_text=function(response_text){
		try{
			try_to_digest_response_text(response_text);
		} catch (err){
			raudrohi.tmg('980a40c9-d098-4b67-a13f-8390a0219bd7',err);
		} // catch
	} // receive_response_text

}; // raudrohi.ajax.comm.formscript.receiver



//------------------------------------------------------------------------
