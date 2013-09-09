//=========================================================================


window.raudrohi.widgets.g1.button_t1=function(s_html_id, button_label){
	var self_public_=this;
	try{

		var pileofmethods_t1_=new window.raudrohi.widgets.g1.pileofmethods_t1(
			self_public_,'window.raudrohi.widgets.g1.button_t1_',s_html_id);
		var prc_=self_public_.private_code_;
		if(raudrohi_settings_debug_JavaScript===true){
			window.raudrohi.base.assert_isString(s_html_id, 's_html_id',
				'1b13b364-5d4d-4385-825a-01f070919bd7');
			window.raudrohi.base.assert_isString(button_label, 'button_label',
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
				window.raudrohi.adapter.YUI_preventdefault(e);
				self_public_.evh_button_pushed_impl();
			} catch (err){
				window.raudrohi.tmg('3d6123a2-ffa1-4b36-8d29-01f070919bd7',err);
			} // catch
		} // evh_button_pushed

		prc_.customizable.compulsory.render_editable=function(){
			try{
				window.raudrohi.widgetless_ui.func.create_button_v1(prc_.html_id_, prc_.label_,
					self_public_.evh_button_pushed, '');
				if(prc_.is_readonly_===false){
					window.raudrohi.adapter.remove_HTML_attribute(prc_.html_id_,
						'disabled');
					window.raudrohi.adapter.editStyle(prc_.html_id_,
						'color',label_color_);
					window.raudrohi.adapter.editStyle(prc_.html_id_,
						'background',button_background_color_);
				} else {
					window.raudrohi.adapter.setAttribute(prc_.html_id_, 'disabled',
						'disabled');
				} // else
			} catch (err){
				window.raudrohi.tmg('232a2087-6e13-430a-88d9-01f070919bd7',err);
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
				window.raudrohi.tmg('2022a4e3-fb21-44ab-9c39-01f070919bd7',err);
			} // catch
		} // set_label

		this.get_label=function(a_label){
			try{
				return prc_.label_;
			} catch (err){
				window.raudrohi.tmg('1e618e12-fb22-4a31-be49-01f070919bd7',err);
			} // catch
		} // get_label



		this.set_colors=function(s_button_label_color,s_button_background_color){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					window.raudrohi.lang.assert_is_an_HTML_color(s_button_label_color,
						's_button_label_color',
						'380462a2-c279-41ee-9d49-01f070919bd7');
					window.raudrohi.lang.assert_is_an_HTML_color(s_button_background_color,
						's_button_background_color',
						'dbac6c07-b19d-41e2-b9a9-01f070919bd7');
				} // if
				label_color_=s_button_label_color;
				button_background_color_=s_button_background_color;
				if(self_public_.is_hidden()===false){
					self_public_.unhide();
				} // if
			} catch (err){
				window.raudrohi.tmg('562e0521-2dcf-42da-a529-01f070919bd7',err);
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
				window.raudrohi.tmg('49bf7171-bbf8-45f6-8629-01f070919bd7',err);
			} // catch
		} // reset_colors

		self_public_.startup_sequence_init();

		this.phone.receive_phonecall=function(a_phonecall_instance){
			try{
				var data=window.raudrohi.adapter.trim(a_phonecall_instance.data);
				var a_pair=window.raudrohi.base.bisect(data, '|||');
				window.raudrohi.base.assert_isNotnull(a_pair,'a_pair',
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
						if(raudrohi_settings_debug_JavaScript===true){
							window.raudrohi.tmg(
								'6232a677-ba1f-4e90-9e39-01f070919bd7',
								'There\'s no message handler for '+a_pair.a);
						} // if
				} // switch
			} catch (err){
				window.raudrohi.widgets.g1.sys.phonecall_receiver_tmg(
					'61529a92-77ea-430e-b529-01f070919bd7',err,
					a_phonecall_instance);
			} // catch
		} // receive_phonecall
	} catch (err){
		window.raudrohi.tmg('3197c0b5-afd7-44ee-bb19-01f070919bd7',err);
	} // catch
} // window.raudrohi.widgets.g1.button_t1

//------------------------------------------------------------------------
window.raudrohi.widgets.g1.button_t1_fac_reset_default_label='Button Label Not Set';
window.raudrohi.widgets.g1.button_t1_factory=function(){
	//var self_public_=this;
	var default_label_=window.raudrohi.widgets.g1.button_t1_fac_reset_default_label;
	try{
		this.create_element=function(){
			try{
				var elem=new window.raudrohi.widgets.g1.button_t1(
					'button_html_id_'+window.raudrohi.base.generate_id(),
					default_label_);
				return elem;
			} catch (err){
				window.raudrohi.tmg('1fdb64b4-7042-4a2f-9959-01f070919bd7',err);
			} // catch
		} // create_element
	} catch (err){
		window.raudrohi.tmg('5b11ada1-d059-4ad7-8e19-01f070919bd7',err);
	} // catch
} // window.raudrohi.widgets.g1.button_t1_factory

window.raudrohi.widgets.g1.button_t1_resetter=function(){
	//var self_public_=this;
	try{
		this.reset_element=function(a_button_widget_instance){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					window.raudrohi.base.assert_isObject(a_button_widget_instance,
						'a_button_widget_instance',
						'c1c5bcd2-db1b-4cac-8a58-01f070919bd7');
				} // if
				a_button_widget_instance.hide();
				a_button_widget_instance.set_label(
					window.raudrohi.widgets.g1.button_t1_fac_reset_default_label);
			} catch (err){
				window.raudrohi.tmg('110ba464-3d32-4d76-b738-01f070919bd7',err);
			} // catch
		} // create_element
	} catch (err){
		window.raudrohi.tmg('823406a3-8aeb-4f0e-8028-01f070919bd7',err);
	} // catch
} // window.raudrohi.widgets.g1.button_t1_resetter

//------------------------------------------------------------------------
