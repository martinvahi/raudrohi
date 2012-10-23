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

raudrohi.widgets.g1.b_phonebooth_t1_initialization_started_at_least_once=false;

// It's a singleton. It's main purpose is to make it possible to
// send messages from a static, generated, HTML, to compound, i.e. 
// nontrivial, widgets.
//
// The main usage case is, where the number of widgets gets
// so huge, for example, a matrix of buttons, that the computational
// expense is not coverable. In that case one may want to
// generate some temporary HTML that contains the raw
// HTML versions of the elements, for example, buttons, and
// where the on<Event>, like onClick, property has some
// code that is able to send some ID/data to some widget.
// The singleton, raudrohi.widgets.g1.phonebooth_t1,
// facilitates the creation of such on<Event> code.
//
// It's instantiated in the library constructor.
raudrohi.widgets.g1.phonebooth_t1=function(s_html_id){
	var self_public_=this;
	try{
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_html_id, 's_html_id',
				'371aa14b-ca33-4e85-82c8-d24380b0abd7');
		} // if
		//-----------------------------------------------------------------
		if(raudrohi.widgets.g1.b_phonebooth_t1_initialization_started_at_least_once!==false){
			raudrohi.tmg('7c757616-dafe-43ea-92c8-d24380b0abd7',
				'The raudrohi.widgets.g1.phonebooth_t1 is '+
				'expected to be a singleton, but at least two '+
				'instantiation attempts have been made.');
		} // if
		raudrohi.widgets.g1.b_phonebooth_t1_initialization_started_at_least_once=true;
		//-----------------------------------------------------------------
		var pileofmethods_t1_=new raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'raudrohi.widgets.g1.phonebooth_t1_',s_html_id);
		var prc_=self_public_.private_code_;
		self_public_.phone=new raudrohi.lang.comm.phone(
			'raudrohi.widgets.g1.phonebooth_t1');
		prc_.self_is_graphical_widget_=false;
		//-----------------------------------------------------------------
		var s_lc_dev_null_='/dev/null';
		var s_lc_data='data';
		//-----------------------------------------------------------------
		this.send_command=function(s_cmd,s_data,s_destination_phone_number){
			try{
				if(raudrohi.settings.debug_JavaScript===true){			
					raudrohi.base.assert_isString(s_cmd,'s_cmd',
						'52dcfa53-a453-4791-b4c8-d24380b0abd7');
					raudrohi.base.assert_isString(s_data,'s_data',
						'4d284e30-864b-4c28-b1c8-d24380b0abd7');
					raudrohi.base.assert_isString(
						s_destination_phone_number,'s_destination_phone_number',
						'c61bb031-23c4-4954-82c8-d24380b0abd7');
				} // if
				var ht_data=new Hashtable();
				ht_data.put(s_lc_data,s_data);
				prc_.threadjump_send(s_destination_phone_number,
					s_cmd, ht_data, s_lc_dev_null_);
			} catch (err){
				raudrohi.tmg('581f51e2-b96d-4d1e-86c8-d24380b0abd7',err);
			} // catch
		} // this.send_command

		//-----------------------------------------------------------------
		// The idea is that one can use the output string
		// of this method within the onClick event handler of
		// generated HTML. The following example explanes the
		// usage context of the b_will_be_wrapped_by_singlequotes
		//
		// var b_will_be_wrapped_by_singlequotes=true;
		// var s_html="<button type='button' onClick='"+
		// raudrohi.widgets.g1.phonebooth_t1.s_get_embeddable_javascript(...,
		// b_will_be_wrapped_by_singlequotes)+"'>Hi</button>";
		//
		// var b_will_be_wrapped_by_singlequotes=false; // ===double-quotes
		// var s_html='<button type="button" onClick="'+
		// raudrohi.widgets.g1.phonebooth_t1.s_get_embeddable_javascript(...,
		// b_will_be_wrapped_by_singlequotes)+'">Hi</button>';
		//
		this.s_get_embeddable_javascript=function(s_cmd,s_data,
			s_destination_phone_number,b_will_be_wrapped_by_singlequotes){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isString(s_cmd,'s_cmd',
						'75835828-8825-4e0f-93c8-d24380b0abd7');
					raudrohi.base.assert_isString(s_data,'s_data',
						'837340cb-1419-459c-bfc8-d24380b0abd7');
					raudrohi.base.assert_isString(
						s_destination_phone_number,'s_destination_phone_number',
						'f775fd33-0d72-4369-95c8-d24380b0abd7');
					raudrohi.base.assert_isBoolean(
						b_will_be_wrapped_by_singlequotes,
						'b_will_be_wrapped_by_singlequotes',
						'1ba385d2-a12f-48fe-91c8-d24380b0abd7');
				} // if
				var b_s_x_uses_singlequotes=true;
				var s_cmd_s_x=raudrohi.lang.s_escape_for_eval(
					s_cmd,b_s_x_uses_singlequotes);
				var s_data_s_x=raudrohi.lang.s_escape_for_eval(
					s_data,b_s_x_uses_singlequotes);
				var s_dphnn_s_x=raudrohi.lang.s_escape_for_eval(
					s_destination_phone_number,b_s_x_uses_singlequotes);
				var s_x="raudrohi.widgets.g1.phonebooth_t1."+
				"send_command('"+s_cmd_s_x+"','"+s_data_s_x+"','"+
				s_dphnn_s_x+"');";
				var s_out=raudrohi.lang.s_escape_for_eval(s_x,
					b_will_be_wrapped_by_singlequotes);
				return s_out;
			} catch (err){
				raudrohi.tmg('bb619b3f-538f-4018-b4c8-d24380b0abd7',err);
			} // catch
		} // this.s_get_embeddable_javascript

		//-----------------------------------------------------------------
		self_public_.startup_sequence_init();
	} catch (err){
		raudrohi.tmg('5b32745f-eab9-4bd5-b4c8-d24380b0abd7',err);
	} // catch
} // raudrohi.widgets.g1.phonebooth_t1

//-------------------------------------------------------------------------
