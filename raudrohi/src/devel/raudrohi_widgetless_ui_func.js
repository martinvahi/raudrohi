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
//------------------------------------------------------------------------
// This file contains code that converts JavaScript formatted data
// to HTML code and provides some basic UI elements related services.
// Practically this code in this file provides components that can be
// used for assembling the most basic and simplistic widgets.
//========================================================================
if(window.raudrohi.globals.raudrohi_widgetless_ui_exists!==true){
	window.raudrohi.widgetless_ui={}; // The "ui" stands for User Interface.
	window.raudrohi.globals.raudrohi_widgetless_ui_exists=true;
} // if

if(window.raudrohi.globals.raudrohi_ui_exists!==true){
	window.raudrohi.widgetless_ui.func={}; // The "ui" stands for User Interface.
	window.raudrohi.globals.raudrohi_ui_exists=true;
} // if

if(window.liilia_exists!==true){
	window.liilia={};
	window.liilia_exists=true;
} // if

if(window.liilia_widgetless_ui_exists!==true){
	window.liilia.widgetless_ui={};
	window.liilia_widgetless_ui_exists=true;
} // if

if(window.liilia_widgetless_ui_func_exists!==true){
	window.liilia.widgetless_ui.func={};
	window.liilia_widgetless_ui_func_exists=true;
} // if

//------------------------------------------------------------------------
// The following radio button getter-setters are in public domain and
// originate from http://www.somacon.com/p143.php
// ----Citation--Start--------
// This pair of Javascript function can get or set the checked value of a
// group of radio buttons. These functions are specially designed for
// dynamic pages, and work without error with zero, one, or more radio
// buttons. Also, because the radio length is saved before looping, this
// function is much faster. Finally, the functions are granted to the
// public domain
// ----Citation--End----------
//
// They are placed to the window.raudrohi.lang for convenience.
// return the value of the radio button that is checked
// return an empty string if none are checked, or
// there are no radio buttons
liilia.widgetless_ui.func.getCheckedValue=function(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
} // liilia.widgetless_ui.func.getCheckedValue

// set the radio button with the given value as being checked
// do nothing if there are no radio buttons
// if the given value does not exist, all the radio buttons
// are reset to unchecked
liilia.widgetless_ui.func.setCheckedValue=function(radioObj, newValue) {
	if(!radioObj)
		return;
	var radioLength = radioObj.length;
	if(radioLength == undefined) {
		radioObj.checked = (radioObj.value == newValue.toString());
		return;
	}
	for(var i = 0; i < radioLength; i++) {
		radioObj[i].checked = false;
		if(radioObj[i].value == newValue.toString()) {
			radioObj[i].checked = true;
		}
	}
} // liilia.widgetless_ui.func.setCheckedValue

//------------------------------------------------------------------------
window.raudrohi.widgetless_ui.func.set_background_color=function(element_id, colourstring) {
	window.raudrohi.adapter.setAttribute(element_id,'style',
		'background:'+colourstring+';');
} // window.raudrohi.widgetless_ui.func.set_background_color


//------------------------------------------------------------------------
// It always returns an string, i.e. it never returns null.
window.raudrohi.widgetless_ui.func.get_formfield_value=function(element_id){
	try{
		if(!raudrohi_adapter_isString(element_id)){
			window.raudrohi.tmg('5c004b33-5e3f-488b-9213-0280a0219bd7',
				'element_id(=='+element_id+') was not a string.');
			if(window.raudrohi.base.node_exists(element_id)!==true){
				window.raudrohi.tmg('648d0f29-8f6e-447e-b313-0280a0219bd7',
					'There\'s no node with id=="'+element_id+
					'" in the DOM tree.');
			} // if
		} // if
		var field_elem=document.getElementById(element_id);
		if(field_elem==null){
			window.raudrohi.tmg('459a0d27-c20e-4581-9513-0280a0219bd7',
				'Could not find an element with an id of '+element_id+'.');
		} // if
		var field_value=field_elem.value;
		if(field_value==null){
			field_value='';
		} // if
		return field_value;
	} catch (err){
		window.raudrohi.tmg('d83d2a56-d155-41fa-9313-0280a0219bd7',err);
	} // catch
} // window.raudrohi.widgetless_ui.func.get_formfield_value

window.raudrohi.widgetless_ui.func.set_formfield_value=function(element_id,new_text){
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			if(!raudrohi_adapter_isString(element_id)){
				window.raudrohi.tmg('8fce1d2c-91fc-4368-8513-0280a0219bd7',
					'element_id(=='+element_id+') was not a string.');
			} // if
			if(!raudrohi_adapter_isString(new_text)){
				window.raudrohi.tmg('ffb5494c-163c-45ae-b313-0280a0219bd7',
					'new_text(=='+new_text+') was not a string.');
			} // if
			if(window.raudrohi.base.node_exists(element_id)!==true){
				window.raudrohi.tmg('b23ff627-e5db-45df-8213-0280a0219bd7',
					'There\'s no node with id=="'+element_id+
					'" in the DOM tree.');
			} // if
		} // if
		var field_elem=document.getElementById(element_id);
		if(field_elem===null){
			window.raudrohi.tmg('63ba4e5c-a36d-4489-bc13-0280a0219bd7',
				'Could not find an element with an id of '+element_id+'.');
		} // if
		field_elem.value=new_text;
	} catch (err){
		window.raudrohi.tmg('e386c422-b686-4f3e-b113-0280a0219bd7',err);
	} // catch
} // window.raudrohi.widgetless_ui.func.set_formfield_value


//------------------------------------------------------------------------
window.raudrohi.widgetless_ui.func.set_focus_2_formfield=function(element_id){
	try{
		if(!raudrohi_adapter_isString(element_id)){
			window.raudrohi.tmg('b9788226-5929-48f5-8313-0280a0219bd7',
				'element_id(=='+element_id+') was not a string.');
			if(window.raudrohi.base.node_exists(element_id)!==true){
				window.raudrohi.tmg('29931ac2-662c-4e0c-9513-0280a0219bd7',
					'There\'s no node with id=="'+element_id+
					'" in the DOM tree.');
			} // if
		} // if
		var field_elem=document.getElementById(element_id);
		if(field_elem===null){
			window.raudrohi.tmg('0c436d11-59e2-473b-8113-0280a0219bd7',
				'Could not find an element with an id of '+element_id+'.');
		} // if
		field_elem.focus();
	} catch (err){
		window.raudrohi.tmg('f0fc3e01-22da-4d39-b303-0280a0219bd7',
			err+' element_id=='+element_id);
	} // catch
} // window.raudrohi.widgetless_ui.func.set_focus_2_formfield

//------------------------------------------------------------------------
// Returns a string. The reason, why this function exists at all
// is that one can use it for creating buttons in a deeply nested
// tables, where the innerHTML or widget based approach won't work.
window.raudrohi.widgetless_ui.func.create_button_v1_html=function(button_html_id, button_text,
	optional_attrstrings){
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			if(!raudrohi_adapter_isString(button_html_id)){
				window.raudrohi.tmg('85ce162e-7be3-4145-b503-0280a0219bd7',
					'button_html_id(=='+button_html_id+') was not a string.');
			} // if
			if(!raudrohi_adapter_isString(button_text)){
				window.raudrohi.tmg('1e54074b-fc74-446a-b503-0280a0219bd7',
					'button_text(=='+button_text+') was not a string.');
			} // if
			if (optional_attrstrings!==undefined) {
				window.raudrohi.base.assert_isString(optional_attrstrings,
					'optional_attrstrings',
					'a4de9a47-5202-4603-b203-0280a0219bd7');
			} // if
		} // if
		var button_new_html='<button type="button" '+
		'id="'+button_html_id+'" '+
		'name="'+button_html_id+'_name" value="'+button_text+'" ';
		if(optional_attrstrings!==undefined){
			button_new_html=button_new_html+optional_attrstrings;
		} // if
		button_new_html=button_new_html+' >'+button_text+'</button>';
		return button_new_html;
	} catch (err){
		window.raudrohi.tmg('8cb8f528-35cb-4515-8203-0280a0219bd7',err);
	} // catch
} // window.raudrohi.widgetless_ui.func.create_button_v1_html


// The button is placed into <button_id>_div.
window.raudrohi.widgetless_ui.func.create_button_v1=function(button_html_id, button_text,
	eventhandler_function, class_attribute_value_as_a_string){
	if(raudrohi_settings_debug_JavaScript===true){
		if(!raudrohi_adapter_isString(button_html_id)){
			window.raudrohi.tmg('4c09a9d7-d3fa-4b2e-8403-0280a0219bd7',
				'button_html_id(=='+button_html_id+') was not a string.');
		} // if
		if(!raudrohi_adapter_isString(class_attribute_value_as_a_string)){
			window.raudrohi.tmg('72032168-dc88-41a6-a303-0280a0219bd7',
				'class_attribute_value_as_a_string(=='+
				class_attribute_value_as_a_string+
				') was not a string.');
		} // if
		if(!raudrohi_adapter_isString(button_text)){
			window.raudrohi.tmg('1ef4a3f2-c25a-4a1c-a303-0280a0219bd7',
				'button_text(=='+button_text+') was not a string.');
		} // if
		window.raudrohi.base.assert_isFunction(eventhandler_function,
			'eventhandler_function', '21254c72-9678-41c6-b103-0280a0219bd7');
	} // if
	try{
		var button_new_html=window.raudrohi.widgetless_ui.func.create_button_v1_html(
			button_html_id, button_text,
			' class="'+class_attribute_value_as_a_string+'" ');
		window.raudrohi.base.set_innerHTML(button_html_id+'_div',button_new_html);
		window.raudrohi.adapter.addEventListner(button_html_id,"click",
			eventhandler_function)
	} catch (err){
		window.raudrohi.tmg('cbd0fd11-f639-4515-9203-0280a0219bd7',err);
	} // catch
} // window.raudrohi.widgetless_ui.func.create_button_v1

//------------------------------------------------------------------------
window.raudrohi.widgetless_ui.func.toHTML_array2selector=function(id_name, an_array_of_menuitem_names,
	selected_menuitem_name, max_number_of_visible_options){
	if(raudrohi_settings_debug_JavaScript===true){
		window.raudrohi.base.assert_isString(id_name, 'id_name',
			'22df22c1-6458-49d3-a303-0280a0219bd7');
		window.raudrohi.base.assert_isArray(an_array_of_menuitem_names,
			'an_array_of_menuitem_names',
			'0defa618-805a-4f6c-b503-0280a0219bd7');
		window.raudrohi.base.assert_isString(selected_menuitem_name,
			'selected_menuitem_name','5dde14e4-6904-461a-9103-0280a0219bd7');
		window.raudrohi.base.assert_isNumber(max_number_of_visible_options,
			'max_number_of_visible_options',
			'60fc7158-55e8-4027-93f2-0280a0219bd7');
	} // if
	try{
		var s_html='<select id="'+id_name+'" size="'+
		max_number_of_visible_options+'">';
		var len=an_array_of_menuitem_names.length;
		var al;
		for (var i = 0 ; i < len; i++){
			al=an_array_of_menuitem_names[i];
			if(al==selected_menuitem_name){
				s_html=s_html+"\n"+'<option value="'+al+'" selected="true">'+
				al+'</option>';
			}else{
				s_html=s_html+"\n"+'<option value="'+al+'">'+al+'</option>';
			} // else
		} // for
		s_html=s_html+"\n</select>";
		return s_html;
	} catch (err){
		window.raudrohi.tmg('54e1fb4c-e0ce-4f2e-92f2-0280a0219bd7',err);
	} // catch
} // window.raudrohi.widgetless_ui.func.toHTML_array2selector


// alignment values={north,south,east,west,northeast,northwest,
// southeast,southwest, center}
// Returns a hashtable, where ht.get('vertical-align')=PickOne({top,middle,bottom})
// ht.get('text-align')=PickOne({left,center,right})
window.raudrohi.widgetless_ui.func.get_alignment_style_values=function(alignment_as_a_cardinal_point){
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			window.raudrohi.base.assert_isString(alignment_as_a_cardinal_point,
				'alignment_as_a_cardinal_point',
				'277800b3-16b2-440e-92f2-0280a0219bd7');
		} // if
		var vertical_style_value;
		var horizontal_style_value;
		switch(alignment_as_a_cardinal_point){
			case 'center':
				vertical_style_value='middle';
				horizontal_style_value='center';
				break;
			case 'west':
				vertical_style_value='middle';
				horizontal_style_value='left';
				break;
			case 'east':
				vertical_style_value='middle';
				horizontal_style_value='right';
				break;
			case 'north':
				vertical_style_value='top';
				horizontal_style_value='center';
				break;
			case 'south':
				vertical_style_value='bottom';
				horizontal_style_value='center';
				break;
			case 'northeast':
				vertical_style_value='top';
				horizontal_style_value='right';
				break;
			case 'southeast':
				vertical_style_value='bottom';
				horizontal_style_value='right';
				break;
			case 'southwest':
				vertical_style_value='bottom';
				horizontal_style_value='left';
				break;
			case 'northwest':
				vertical_style_value='top';
				horizontal_style_value='left';
				break;
			default:
				if(raudrohi_settings_debug_JavaScript===true){
					throw window.raudrohi.tmg(
						'467b6419-2ff1-42e1-b3f2-0280a0219bd7',
						'There\'s no branching for alignment(=='+
						alignment_as_a_cardinal_point+
						'). Possible valid values are:'+
						'north, south, east, west,'+
						'northeast, southeast, southwest, northwest.');
				} // if
		} // switch
		var ht=window.raudrohi.base.pool_of_hashtables.get_empty_hashtable();
		ht.put('vertical-align',vertical_style_value);
		ht.put('text-align',horizontal_style_value);
		return ht;
	} catch (err){
		window.raudrohi.tmg('3d1d7593-2ae1-4892-b9f2-0280a0219bd7',err);
	} // catch
} // get_alignment_style_values

// alignment values={north,south,east,west,northeast,northwest,
// southeast,southwest, center}
window.raudrohi.widgetless_ui.func.set_alignment=function(alignment_as_a_cardinal_point,
	DOM_element_HTML_id){
	try{
		if(raudrohi_settings_debug_JavaScript===true){
			window.raudrohi.base.assert_isString(alignment_as_a_cardinal_point,
				'alignment_as_a_cardinal_point',
				'bfed5b55-2c35-43cb-a2f2-0280a0219bd7');
			window.raudrohi.base.assert_isString(DOM_element_HTML_id,
				'DOM_element_HTML_id',
				'0c3b0b40-6091-494f-b2f2-0280a0219bd7');
		} // if
		var ht=window.raudrohi.widgetless_ui.func.get_alignment_style_values(alignment_as_a_cardinal_point);
		window.raudrohi.adapter.editStyle(DOM_element_HTML_id, 'vertical-align',
			ht.get('vertical-align'));
		window.raudrohi.adapter.editStyle(DOM_element_HTML_id, 'text-align',
			ht.get('text-align'));
		window.raudrohi.base.pool_of_hashtables.return_used_hashtable(ht);
	} catch (err){
		window.raudrohi.tmg('10057c41-90bb-4d58-84f2-0280a0219bd7',err);
	} // catch
} // set_alignment


window.raudrohi.widgetless_ui.func.assert_alignment_value=function(alignment_as_a_cardinal_point){
	try{
		window.raudrohi.base.assert_isString(alignment_as_a_cardinal_point,
			'alignment_as_a_cardinal_point',
			'82172f2a-2f79-4df3-85f2-0280a0219bd7');
		switch(alignment_as_a_cardinal_point){
			case 'center':
				break;
			case 'west':
				break;
			case 'east':
				break;
			case 'north':
				break;
			case 'south':
				break;
			case 'northeast':
				break;
			case 'southeast':
				break;
			case 'southwest':
				break;
			case 'northwest':
				break;
			default:
				if(raudrohi_settings_debug_JavaScript===true){
					throw window.raudrohi.tmg(
						'1a6857c1-e73a-4aa8-93f2-0280a0219bd7',
						'There\'s no branching for alignment(=='+
						alignment_as_a_cardinal_point+
						'). Possible valid values are:'+
						'north, south, east, west,'+
						'northeast, southeast, southwest, northwest.');
				} // if
		} // switch
	} catch (err){
		window.raudrohi.tmg('5994071e-e484-4df2-85f2-0280a0219bd7',err);
	} // catch
} // assert_alignment_value

//------------------------------------------------------------------------

//------------------------------------------------------------------------
