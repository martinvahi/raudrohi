//=========================================================================

//-------------------------------------------------------------------------

if(window.raudrohi_widgets_exists!==true){
	window.raudrohi.widgets={};
	window.raudrohi_widgets_exists=true;
} // if
if(window.raudrohi_widgets_g1_exists!==true){
	window.raudrohi.widgets.g1={};
	window.raudrohi_widgets_g1_exists=true;
} // if
if(window.raudrohi_widgets_g1_theme_exists!==true){
	// The window.raudrohi.widgets.g1.theme
	// is for various style parameters and alike.
	window.raudrohi.widgets.g1.theme={};
	window.raudrohi_widgets_g1_theme_exists=true;
} // if

if(window.raudrohi_widgets_g1_sys_exists!==true){
	window.raudrohi.widgets.g1.sys={}; // a namespace for non-client code
	window.raudrohi_widgets_g1_sys_exists=true;
} // if
//-------------------------------------------------------------------------
window.raudrohi.widgets.g1.theme.s_color_alert='#A30808';
window.raudrohi.widgets.g1.theme.s_color_no='#F75D16';
window.raudrohi.widgets.g1.theme.s_color_yes='#24990C';

//-------------------------------------------------------------------------
// The true_if_update_DOM does not have any effect, if the
// true_if_unhide==true. The hashtable_of_widget_states is
// expected to contain instances of raudrohi.base.widget_state_bitfield.
// Widget phone numbers are expected to be the keys of the hashtable.
//
// The current system is such that the one can not call multiple
// "unhide" or "hide" calls without interlacing them.
raudrohi.widgets.g1.sys.hide_or_unhide_t2=function(array_of_widgets, true_if_unhide,
	true_if_update_DOM, hashtable_of_widget_states){
	if(raudrohi_settings_debug_JavaScript===true){
		raudrohi.base.assert_isArray(array_of_widgets,'array_of_widgets',
			'4767d81c-3efb-4ba8-9487-6230a0219bd7');
		raudrohi.base.assert_isBoolean(true_if_unhide,'true_if_unhide',
			'5417e62f-f6d5-4cf1-a387-6230a0219bd7');
		raudrohi.base.assert_isBoolean(true_if_update_DOM,'true_if_update_DOM',
			'a26afe2e-7815-4ad8-b287-6230a0219bd7');
		raudrohi.base.assert_isObject(hashtable_of_widget_states,
			'hashtable_of_widget_states','83582456-1329-4fa0-a987-6230a0219bd7');
		var arowdgl=array_of_widgets.length; // A FireFox 3.0.x bug workaround.
		if(hashtable_of_widget_states.size()!==arowdgl){
			raudrohi.tmg('4db4ed5d-03fa-492c-8587-6230a0219bd7',' '+
				'hashtable_of_widget_states.size()(=='+
				hashtable_of_widget_states.size()+
				')!==array_of_widgets.length(=='+arowdgl+').');
		} // ifs
	} // if
	try{
		var len=array_of_widgets.length;
		var i=0;
		var a_widget;
		var elem_state;
		var widget_is_graphical=true;
		if(true_if_unhide===true){
			for(i=0;i<len;i++){
				a_widget=array_of_widgets[i];
				widget_is_graphical=a_widget.is_graphical_widget();
				if(widget_is_graphical===true){
					elem_state=hashtable_of_widget_states.get(
						a_widget.phone.get_phone_number());
					if(elem_state.is_in_state_hidden===false){
						a_widget.unhide();
					} // if
				} // if
			} // for
		} else {
			for(i=0;i<len;i++){
				a_widget=array_of_widgets[i];
				widget_is_graphical=a_widget.is_graphical_widget();
				if(widget_is_graphical===true){
					a_widget.hide(true_if_update_DOM);
				} // if
			} // for
		} // else
	} catch (err){
		var phn;
		try{
			phn=a_widget.phone.get_phone_number();
		} catch (err){
			phn='';
		} // catch
		raudrohi.tmg('3e460a21-1452-48be-8187-6230a0219bd7',
			'elem.phone.get_phone_number()=='+phn+
			' '+err);
	} // catch
}// raudrohi.widgets.g1.sys.hide_or_unhide_t2

//-------------------------------------------------------------------------
// Events like "on click", "focus", "blur", etc, are handled as
// if there were triggered by special keys on a keyboard. In the
// terminology they are called "virtual keys".
raudrohi.widgets.g1.sys.keylisteners_unit=function(owners_instance){
	var self_public_=this;
	try{
		var instance_public_ = owners_instance;
		var prc_=instance_public_.private_code_;


		// key==key_number, value==<an eventhandler function instance>
		var ht_eventhandler_funcs_=new Hashtable();

		// key==key_number   value==<key event handle>
		var ht_eventhandles_=new Hashtable();

		function set_eventlistener(listenable_element_html_id,
			key_number_as_a_string,eventhandler_function){
			try{
				var is_a_virtual_key=true;
				var event_name;
				switch(key_number_as_a_string){
					case 'raudrohi_virtual_key_focus':
						event_name='focus';
						break;
					case 'raudrohi_virtual_key_blur':
						event_name='blur';
						break;
					case 'raudrohi_virtual_key_click':
						event_name='click';
						break;
					case 'raudrohi_virtual_key_mouseenter':
						event_name='mouseenter';
						break;
					case 'raudrohi_virtual_key_mouseexit':
						event_name='mouseleave';
						break;
					default:
						is_a_virtual_key=false;
						event_name='key';
						if(raudrohi_settings_debug_JavaScript===true){
							var key_code_candidate=parseInt(key_number_as_a_string);
							raudrohi.base.assert_isKeyeventKeyCode(
								key_code_candidate, 'key_code_candidate',
								'f33a3f2c-d049-4434-8187-6230a0219bd7');
						} // if
				} // switch
				var eventhandle;
				if(is_a_virtual_key===true){
					eventhandle=raudrohi.adapter.addEventListner(
						listenable_element_html_id,event_name,
						eventhandler_function);
				} else {
					eventhandle=raudrohi.adapter.set_keylistener(
						listenable_element_html_id, key_number_as_a_string,
						eventhandler_function);
				} // else
				return eventhandle;
			} catch (err){
				raudrohi.tmg('98881f2f-4cad-477a-9287-6230a0219bd7',err);
			} // catch
		} // set_eventlistener


		// Due to a logical bug in the YUI 3 library, the
		// same key listener event handler function is not re-attachable
		// to a newly created DOM node that has the same HTML ID. This holds
		// even, if the _yuid attribute is restored. So, for that
		// reason, every time a widget gets un-hidden, the HTML element
		// that is being listened to, must have a slightly different ID. So,
		// temporary HTML-ids are used and the temporary ID-s are expected
		// to be generated by the widget that uses the HTML elements.
		this.add_keylistener=function(listenable_element_html_id,
			key_number_as_a_string,eventhandler_function){
			// TODO: refactor it to use Ctrl keys, etc.
			// One only has to support key combinations, not keypress
			// series. Series are for some other level.
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(listenable_element_html_id,
						'listenable_element_html_id',
						'43f4e44b-5edf-49b2-a187-6230a0219bd7');
					raudrohi.base.assert_isString(key_number_as_a_string,
						'key_number_as_a_string',
						'2504212f-4e67-44dc-8387-6230a0219bd7');
					raudrohi.base.assert_isFunction(eventhandler_function,
						'eventhandler_function',
						'880e451b-4828-424c-b187-6230a0219bd7');
				} // if
				if(ht_eventhandler_funcs_.containsKey(key_number_as_a_string)){
					self_public_.remove_keylistener(key_number_as_a_string);
				} // if
				ht_eventhandler_funcs_.put(key_number_as_a_string,
					eventhandler_function);
				var eventhandle=set_eventlistener(listenable_element_html_id,
					key_number_as_a_string,eventhandler_function);
				if(prc_.self_is_hidden_===true){
					return;
				} // if
				ht_eventhandles_.put(key_number_as_a_string,eventhandle);
			} catch (err){
				raudrohi.tmg('e4f55a4c-dfb6-44d0-8477-6230a0219bd7',err);
			} // catch
		} // add_keylistener

		this.remove_keylistener=function(key_number_as_a_string){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(key_number_as_a_string,
						'key_number_as_a_string',
						'532550ae-2443-48b4-9377-6230a0219bd7');
					switch(key_number_as_a_string){
						case 'raudrohi_virtual_key_focus':
							break;
						case 'raudrohi_virtual_key_blur':
							break;
						case 'raudrohi_virtual_key_click':
							break;
						case 'raudrohi_virtual_key_mouseenter':
							break;
						case 'raudrohi_virtual_key_mouseexit':
							break;
						default:
							var key_code_candidate=parseInt(key_number_as_a_string);
							raudrohi.base.assert_isKeyeventKeyCode(
								key_code_candidate, 'key_code_candidate',
								'5304ef30-ad3e-4b05-a277-6230a0219bd7');
					} // switch
				} // if
				if(!ht_eventhandler_funcs_.containsKey(key_number_as_a_string)){
					return;
				} // if
				if(prc_.self_is_hidden_===false){
					var eventhandle=ht_eventhandles_.get(
						key_number_as_a_string);
					raudrohi.adapter.remove_keylistener(eventhandle);
				} // if
				ht_eventhandler_funcs_.remove(key_number_as_a_string);
				ht_eventhandles_.remove(key_number_as_a_string);
			} catch (err){
				raudrohi.tmg('be188bea-7fba-4fc3-8977-6230a0219bd7',err);
			} // catch
		} //  remove_keylistener

		// The method add_keylistener has a comment about the
		// listenable_element_html_id parameter.
		var listeners_attached_2_DOM_elements_=false;
		this.attach_listeners2_DOM_elements=function(listenable_element_html_id){
			try{
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.base.assert_isString(listenable_element_html_id,
						'listenable_element_html_id',
						'c7766ea1-f190-4d41-a877-6230a0219bd7');
					if(prc_.self_is_hidden_===true){
						raudrohi.tmg('c7a28116-9e87-4973-a177-6230a0219bd7',
							'If the widget is hidden, the DOM elements  '+
							'that the listeners must be attached to, '+
							'are expected to be missing from the DOM.');
					} // if
				} // if
				if(listeners_attached_2_DOM_elements_){
					// If the widget's set_content method is called,
					// one might need to rerender the widget, regardless
					// of whather it is in readonly mode or editable mode, but
					// if the widget is already visible, the listeners
					// have already been attached to the GUI elements.
					return;
				} // if
				var keys=ht_eventhandler_funcs_.keys();
				var len=keys.length;
				var eventhandler_function;
				var key_number_as_a_string;
				var eventhandle;
				for(var i=0;i<len;i++){
					key_number_as_a_string=keys[i];
					eventhandler_function=ht_eventhandler_funcs_.get(
						key_number_as_a_string);
					eventhandle=set_eventlistener(listenable_element_html_id,
						key_number_as_a_string,eventhandler_function);
					ht_eventhandles_.put(key_number_as_a_string,eventhandle);
				} // for
				listeners_attached_2_DOM_elements_=true;
			} catch (err){
				raudrohi.tmg('688bc628-1451-413f-8477-6230a0219bd7',err);
			} // catch
		} // attach_listeners2_DOM_elements

		this.detach_listeners_from_DOM_elements=function(){
			try{
				if(prc_.self_is_hidden_===true){
					raudrohi.tmg('b7a5d948-0c01-423a-b177-6230a0219bd7',
						'If the widget is hidden, the DOM elements that the '+
						'listeners are expected to be attached to, are '+
						'expected to be missing from the DOM.');
				} // if
				if(!listeners_attached_2_DOM_elements_){
					// The reason, why it just returns from here in
					// stead of throwing an exception for warning
					// is that in the case of re-rendering the
					// detachment has to be carried out, but there's
					// nothing to detach, if the widget is being unhidden.
					return;
				} // if
				var eventhandle;
				var keys=ht_eventhandles_.keys();
				var len=keys.length;
				var key;
				for(var i=0;i<len;i++){
					key=keys[i];
					eventhandle=ht_eventhandles_.get(key);
					raudrohi.adapter.remove_keylistener(eventhandle);
				} // for
				ht_eventhandles_.clear();
				listeners_attached_2_DOM_elements_=false;
			} catch (err){
				raudrohi.tmg('106a194f-f9ae-492c-a277-6230a0219bd7',err);
			} // catch
		} // detach_listeners_from_DOM_elements

		// If the elements are gone from the DOM, there's no point of
		// keeping their records.
		this.remove_all_keylisteners=function(){
			try{
				var keys=ht_eventhandler_funcs_.keys();
				var len=keys.length;
				var key;
				for(var i=0;i<len;i++){
					key=keys[i]
					self_public_.remove_keylistener(key);
				} // for
			} catch (err){
				raudrohi.tmg('67f2234d-57a8-429a-9477-6230a0219bd7',err);
			} // catch
		} // remove_all_keylisteners

	} catch (err){
		raudrohi.tmg('22273f14-4808-42dd-a477-6230a0219bd7',err);
	} // catch
} // raudrohi.widgets.g1.sys.keylisteners_unit

//-------------------------------------------------------------------------
// Currently the params_hashtable is not in use and is expected to be
// a random Hashtable, but it's there for future improvements. Namely,
// when the set of supported states is expanded by the
// startup_with_indication_request and shutdown_with_indication_request,
// then one needs to pass some data to this method.
raudrohi.widgets.g1.triggerTransition=function(
	next_state_of_widget_B,next_state_of_widget_A,
	widget_B_phone_number, widget_A_phone_number, params_hashtable){
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			raudrohi.base.assert_isString(next_state_of_widget_B,
				'next_state_of_widget_B',
				'3db80244-1024-4d7b-b367-6230a0219bd7');
			raudrohi.base.assert_isString(next_state_of_widget_A,
				'next_state_of_widget_A','10f9d215-c1da-4df1-8567-6230a0219bd7');
			raudrohi.base.assert_isString(widget_B_phone_number,
				'widget_B_phone_number','2a321494-9a66-4132-9567-6230a0219bd7');
			raudrohi.base.assert_isString(widget_A_phone_number,
				'widget_A_phone_number','711c37d6-0540-4600-b467-6230a0219bd7');
			raudrohi.base.assert_isObject(params_hashtable,
				'params_hashtable','39522c14-e289-4678-8667-6230a0219bd7');

			var ar_state_domain=raudrohi.base.commaseparated_list_2_array(
				'hide,unhide, shutdown, startup, resurrect');
			raudrohi.base.assert_isWithinDomain(next_state_of_widget_A,
				'next_state_of_widget_A', '1d885902-89ac-42a2-8167-6230a0219bd7',
				ar_state_domain);
			raudrohi.base.assert_isWithinDomain(next_state_of_widget_B,
				'next_state_of_widget_B','0c35ed15-55a1-446c-9467-6230a0219bd7',
				ar_state_domain);
			if(next_state_of_widget_A=='hide'){
				raudrohi.base.assert_isWithinDomain(next_state_of_widget_B,
					'next_state_of_widget_B','ddc4ed8a-af98-4d2f-a167-6230a0219bd7',
					raudrohi.base.commaseparated_list_2_array(
						'unhide, startup, resurrect'));
			} // if
		} // if
		var ht=new Hashtable();
		ht.put('destination_phone_number',widget_B_phone_number);
		ht.put('data_for_the_destination',next_state_of_widget_B+'|||');
		ht.put('binary_data_for_the_destination',0);
		switch(next_state_of_widget_A){
			case 'hide':
				raudrohi.lang.phonebooth_dev_null.phone.call(widget_A_phone_number,
					'hide|||',0);
				raudrohi.lang.phonebooth_dev_null.phone.call(widget_B_phone_number,
					next_state_of_widget_B+'|||',0);
				break;
			case 'shutdown':
				raudrohi.lang.phonebooth_dev_null.phone.call(widget_A_phone_number,
					'shutdown_with_indication_request|||',ht);
				break;
			case 'startup':
				raudrohi.lang.phonebooth_dev_null.phone.call(widget_A_phone_number,
					'startup_with_indication_request|||',ht);
				break;
			default:
				if(raudrohi_settings_debug_JavaScript===true){
					raudrohi.tmg('e12c9d31-ae5e-4a6f-8467-6230a0219bd7',
						'There\'s no branching for next_state_of_widget_A(=='+
						next_state_of_widget_A+').');
				} // if
		} // switch
	} catch (err){
		raudrohi.tmg('5eb9d421-84a4-4974-a467-6230a0219bd7',err+
			"\n  next_state_of_widget_B=="+next_state_of_widget_B+
			"\n  next_state_of_widget_A=="+next_state_of_widget_A+
			"\n  widget_B_phone_number=="+widget_B_phone_number+
			"\n  widget_A_phone_number=="+widget_A_phone_number);
	} // catch
} // raudrohi.widgets.g1.triggerTransition

//-------------------------------------------------------------------------
raudrohi.widgets.g1.sys.phonecall_receiver_tmg=function(GUID,err,
	a_phonecall_instance){
	var a_phonecall_instance_data='';
	try{
		a_phonecall_instance_data=a_phonecall_instance.data;
	} catch(errr){}
	if(a_phonecall_instance_data!==''){
		err=err+' a_phonecall_instance.data=='+
		a_phonecall_instance_data;
	} // if
	raudrohi.tmg(GUID,err);
} // raudrohi.widgets.g1.sys.phonecall_receiver_tmg


// It's assumed that the origin_hashtable consists of only
// raudrohi.base.widget_state_bitfield instances. The
// destination_hashtable is cleared prior to the copying operation.
// the elements are copyied by value, not by reference.
raudrohi.widgets.g1.sys.copy_ht_of_bitfields=function(destination_hashtable,
	origin_hashtable){
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			raudrohi.base.assert_isObject(destination_hashtable,
				'destination_hashtable','d75a8c24-18f3-44a2-9567-6230a0219bd7');
			raudrohi.base.assert_isObject(origin_hashtable,
				'origin_hashtable','ec470540-1f42-4ec7-b157-6230a0219bd7');
		} // if
		destination_hashtable.clear();
		var keys=origin_hashtable.keys();
		var len=keys.length;
		var key;
		var reference_to_the_value;
		var new_bitfield;
		for(var i=0;i<len;i++){
			key=keys[i];
			reference_to_the_value=origin_hashtable.get(key);
			new_bitfield=new raudrohi.base.widget_state_bitfield();
			new_bitfield.is_in_state_startup=reference_to_the_value.is_in_state_startup;
			new_bitfield.is_in_state_hidden=reference_to_the_value.is_in_state_hidden;
			destination_hashtable.put(key,new_bitfield);
		} // for
	} catch (err){
		raudrohi.tmg('9eec0a3a-be70-450e-8557-6230a0219bd7',err);
	} // catch
} // raudrohi.widgets.g1.sys.copy_ht_of_bitfields

//-------------------------------------------------------------------------

raudrohi.widgets.g1.sys.change_state_2=function(array_of_widgets, state_name){
	if(raudrohi_settings_debug_JavaScript===true){
		raudrohi.base.assert_isArray(array_of_widgets, 'array_of_widgets',
			'233d1121-f15f-4eca-ad57-6230a0219bd7');
		raudrohi.base.assert_isString(state_name, 'state_name',
			'846b575f-41d4-4651-b357-6230a0219bd7');
	} // if
	try{
		var len=array_of_widgets.length;
		var i=0;
		var elem;
		for(i=0;i<len;i++){
			elem=array_of_widgets[i];
			elem.state_switcher_.change_state_2(state_name);
		} // for
	} catch (err){
		var phn;
		try{
			phn=elem.phone.get_phone_number();
		} catch (err){
			phn='';
		} // catch
		raudrohi.tmg('eb00962e-2c04-42b3-b157-6230a0219bd7',
			'elem.phone.get_phone_number()=='+phn+' '+err);
	} // catch
}// change_state_2

//-------------------------------------------------------------------------
raudrohi.widgets.g1.sys.shutdown_t1=function(array_of_widgets){
	var a_widget;
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			raudrohi.base.assert_isArray(array_of_widgets, 'array_of_widgets',
				'03ecf024-e2a1-41a3-9157-6230a0219bd7');
		} // if
		var len=array_of_widgets.length;
		var i=0;
		for(i=0;i<len;i++){
			a_widget=array_of_widgets[i];
			raudrohi.lang.phonebooth_dev_null.phone.call(
				a_widget.phone.get_phone_number(),'shutdown|||',0);
		} // for
	} catch (err){
		var phn;
		try{
			phn=a_widget.phone.get_phone_number();
		} catch (err){
			phn='';
		} // catch
		raudrohi.tmg('3a996885-72da-4623-b157-6230a0219bd7',
			'a_widget.phone.get_phone_number()=='+phn+' '+err);
	} // catch
}// raudrohi.widgets.g1.sys.shutdown_t1

//-------------------------------------------------------------------------
raudrohi.widgets.g1.sys.startup_t1=function(array_of_widgets,
	hashtable_of_widget_states){
	if(raudrohi_settings_debug_JavaScript===true){
		raudrohi.base.assert_isArray(array_of_widgets,'array_of_widgets',
			'009cbe3d-e3bb-4d73-a557-6230a0219bd7');
		raudrohi.base.assert_isObject(hashtable_of_widget_states,
			'hashtable_of_widget_states','b55e2691-a297-48d2-9757-6230a0219bd7');
		var arowdgl=array_of_widgets.length;// A FireFox 3.0.x bug workaround.
		if(hashtable_of_widget_states.size()!==arowdgl){
			raudrohi.tmg('83e2e455-d990-4399-b357-6230a0219bd7',err+' '+
				'hashtable_of_widget_states.size()(=='+
				hashtable_of_widget_states.size()+
				')!==array_of_widgets.length(=='+arowdgl+').');
		} // if
	} // if
	var a_widget;
	var phn;
	try{
		var len=array_of_widgets.length;
		var i=0;
		var elem_state;
		for(i=0;i<len;i++){
			a_widget=array_of_widgets[i];
			phn=a_widget.phone.get_phone_number()
			elem_state=hashtable_of_widget_states.get(phn);
			if(elem_state.is_in_state_startup){
				raudrohi.lang.phonebooth_dev_null.phone.call(
					phn,'startup|||',0);
			} // if
		} // for
	} catch (err){
		try{
			phn=a_widget.phone.get_phone_number();
		} catch (err){
			phn='';
		} // catch
		raudrohi.tmg('109bc549-9ee1-4de6-8447-6230a0219bd7',
			'a_widget.phone.get_phone_number()=='+phn+' Error message:'+err);
	} // catch
}// raudrohi.widgets.g1.sys.startup_t1


//-------------------------------------------------------------------------
// hashtable_of_microsessions.key == <microsession name>
// hashtable_of_microsessions.value == <microsession id>
raudrohi.widgets.g1.sys.close_microsessions_t1=function(
	hashtable_of_microsessions){
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			raudrohi.base.assert_isObject(hashtable_of_microsessions,
				'hashtable_of_microsessions',
				'1fa56275-7b4e-42a4-9147-6230a0219bd7');
		} // if
		var ar_keys=hashtable_of_microsessions.keys();
		var len=ar_keys.length;
		var i=0;
		var microsession_name;
		for(i=0;i<len;i++){
			microsession_name=ar_keys[i];
			hashtable_of_microsessions.put(microsession_name,(-1));
		} // for
	} catch (err){
		raudrohi.tmg('82926b4b-dfbb-4f54-8247-6230a0219bd7',err);
	} // catch
} // raudrohi.widgets.g1.sys.close_microsessions_t1

//=========================================================================
