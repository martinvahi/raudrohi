//------------------------------------------------------------------------
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


raudrohi.widgets.g1.button_t1=function(s_html_id, button_label){
	var self_public_=this;
	try{

		var pileofmethods_t1_=new raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'raudrohi.widgets.g1.button_t1_',s_html_id);
		var prc_=self_public_.private_code_;
		if(raudrohi.settings.debug_JavaScript===true){
			raudrohi.base.assert_isString(s_html_id, 's_html_id',
				'1b13b364-5d4d-4385-825a-01f070919bd7');
			raudrohi.base.assert_isString(button_label, 'button_label',
				'792d1dab-1858-4cf3-b2a9-01f070919bd7');
		} // if
		prc_.label_=button_label;
		var label_color_default_='#000000';
		var button_background_color_default_='#EEEEEE';
		var label_color_=label_color_default_;
		var button_background_color_=button_background_color_default_;

		this.evh_button_pushed_impl=function(){
		// This method is subject to overloading by the parent
		// widget.
		} // evh_button_pushed_impl

		this.evh_button_pushed=function(e){
			try{
				raudrohi.adapter.YUI_preventdefault(e);
				self_public_.evh_button_pushed_impl();
			} catch (err){
				raudrohi.tmg('3d6123a2-ffa1-4b36-8d29-01f070919bd7',err);
			} // catch
		} // evh_button_pushed

		prc_.customizable.compulsory.render_editable=function(){
			try{
				raudrohi.ui.create_button_v1(prc_.html_id_, prc_.label_,
					self_public_.evh_button_pushed, '');
				if(prc_.is_readonly_===false){
					raudrohi.adapter.remove_HTML_attribute(prc_.html_id_,
						'disabled');
					raudrohi.adapter.editStyle(prc_.html_id_,
						'color',label_color_);
					raudrohi.adapter.editStyle(prc_.html_id_,
						'background',button_background_color_);
				} else {
					raudrohi.adapter.setAttribute(prc_.html_id_, 'disabled',
						'disabled');
				} // else
			} catch (err){
				raudrohi.tmg('232a2087-6e13-430a-88d9-01f070919bd7',err);
			} // catch
		} // render_editable

		prc_.customizable.compulsory.render_readonly=prc_.customizable.compulsory.render_editable;

		this.set_label=function(a_label){
			try{
				prc_.label_=a_label;
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				raudrohi.tmg('2022a4e3-fb21-44ab-9c39-01f070919bd7',err);
			} // catch
		} // set_label

		this.get_label=function(a_label){
			try{
				return prc_.label_;
			} catch (err){
				raudrohi.tmg('1e618e12-fb22-4a31-be49-01f070919bd7',err);
			} // catch
		} // get_label



		this.set_colors=function(s_button_label_color,s_button_background_color){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.lang.assert_is_an_HTML_color(s_button_label_color,
						's_button_label_color',
						'380462a2-c279-41ee-9d49-01f070919bd7');
					raudrohi.lang.assert_is_an_HTML_color(s_button_background_color,
						's_button_background_color',
						'dbac6c07-b19d-41e2-b9a9-01f070919bd7');
				} // if
				label_color_=s_button_label_color;
				button_background_color_=s_button_background_color;
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				raudrohi.tmg('562e0521-2dcf-42da-a529-01f070919bd7',err);
			} // catch
		} // set_colors

		// Sets the button label and background colors to their default values.
		this.reset_colors=function(){
			try{
				label_color_=label_color_default_;
				button_background_color_=button_background_color_default_;
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				raudrohi.tmg('49bf7171-bbf8-45f6-8629-01f070919bd7',err);
			} // catch
		} // reset_colors

		self_public_.startup_sequence_init();

		this.phone.receive_phonecall=function(a_phonecall_instance){
			try{
				var data=raudrohi.adapter.trim(a_phonecall_instance.data);
				var a_pair=raudrohi.base.bisect(data, '|||');
				raudrohi.base.assert_isNotnull(a_pair,'a_pair',
					'194b01d1-0eb9-47da-a139-01f070919bd7');
				if(pileofmethods_t1_.standard_phonecall_received_t1(a_pair,
					a_phonecall_instance )){
					return;
				} // if
				switch(a_pair.a){
					case 'set_label':
						self_public_.set_label(a_phonecall_instance.data2);
						break;
					default:
						if(raudrohi.settings.debug_JavaScript===true){
							raudrohi.tmg(
								'6232a677-ba1f-4e90-9e39-01f070919bd7',
								'There\'s no message handler for '+a_pair.a);
						} // if
				} // switch
			} catch (err){
				raudrohi.widgets.g1.sys.phonecall_receiver_tmg(
					'61529a92-77ea-430e-b529-01f070919bd7',err,
					a_phonecall_instance);
			} // catch
		} // receive_phonecall
	} catch (err){
		raudrohi.tmg('3197c0b5-afd7-44ee-bb19-01f070919bd7',err);
	} // catch
} // raudrohi.widgets.g1.button_t1

//------------------------------------------------------------------------
raudrohi.widgets.g1.button_t1_fac_reset_default_label='Button Label Not Set';
raudrohi.widgets.g1.button_t1_factory=function(){
	//var self_public_=this;
	var default_label_=raudrohi.widgets.g1.button_t1_fac_reset_default_label;
	try{
		this.create_element=function(){
			try{
				var elem=new raudrohi.widgets.g1.button_t1(
					'button_html_id_'+raudrohi.base.generate_id(),
					default_label_);
				return elem;
			} catch (err){
				raudrohi.tmg('1fdb64b4-7042-4a2f-9959-01f070919bd7',err);
			} // catch
		} // create_element
	} catch (err){
		raudrohi.tmg('5b11ada1-d059-4ad7-8e19-01f070919bd7',err);
	} // catch
} // raudrohi.widgets.g1.button_t1_factory

raudrohi.widgets.g1.button_t1_resetter=function(){
	//var self_public_=this;
	try{
		this.reset_element=function(a_button_widget_instance){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.base.assert_isObject(a_button_widget_instance,
						'a_button_widget_instance',
						'c1c5bcd2-db1b-4cac-8a58-01f070919bd7');
				} // if
				a_button_widget_instance.hide();
				a_button_widget_instance.set_label(
					raudrohi.widgets.g1.button_t1_fac_reset_default_label);
			} catch (err){
				raudrohi.tmg('110ba464-3d32-4d76-b738-01f070919bd7',err);
			} // catch
		} // create_element
	} catch (err){
		raudrohi.tmg('823406a3-8aeb-4f0e-8028-01f070919bd7',err);
	} // catch
} // raudrohi.widgets.g1.button_t1_resetter

//------------------------------------------------------------------------