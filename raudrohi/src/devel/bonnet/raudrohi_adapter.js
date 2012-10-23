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
// This file acts as an interface between JavaScript libraries that
// take care of browser specific picularities and the raudrohi JavaScript
// library.
//
// The idea is that when new browser versions emerge, they
// tend to break compatibility and when the developers of the
// libraries that take care of browser related normalization, update
// their libraries, all of the raudrohi can be brought up to date
// by just updating this file here.
//
// The place, where to start reading this file, is
// raudrohi.initiate_adapter.
//
// Dependencies:
//      YUI toolkit from Yahoo. Currently only version 3 is fully
//      supported.
//------------------------------------------------------------------------
if(window.raudrohi_adapter_exists!==true){
	window.raudrohi.adapter={};
	window.raudrohi_adapter_exists=true;
} // if
if(window.raudrohi_adapter_ports_exists!==true){
	window.raudrohi.adapter.ports={};
	window.raudrohi_adapter_ports_exists=true;
} // if

raudrohi.internal_constructor=function(){
	throw 'It\'s assumed that the function named '+
	'raudrohi.internal_constructor is overriden. '+
	'GUID=="b571362a-932b-4f25-8503-90120020abd7"';
} // raudrohi.internal_constructor

raudrohi.application_main_function=function(){
	throw 'It\'s assumed that the function named '+
	'raudrohi.application_main_function is overriden. '+
	'GUID=="33853349-92a3-4c44-84f2-90120020abd7" ';
} // raudrohi.application_main_function

raudrohi.adapter.vars={};

raudrohi.adapter.vars.func_if_lib_uninited=function(x){
	throw 'In order to use the raudrohi '+
	'JavaScript library, one has to initialize it by calling '+
	'raudrohi.initiate_adapter. ';
} // raudrohi.adapter.vars.func_if_lib_uninited

// The isString will be overriden, but one needs to bypass it
// within the str2bool, which gets called before the overriding.
// That's why it returns just true.
raudrohi.adapter.isString=function(x){
	return true;
};


raudrohi.adapter.log=function(x){/*its a temporary stub*/};

// The following 2 methods are subject to overriding. They're functions
// here only to demonstrate their interface.
raudrohi.adapter.server_response_eventhandler=function(response_as_a_text){
	raudrohi.adapter.vars.func_if_lib_uninited('')
} // raudrohi.adapter.server_response_eventhandler
raudrohi.adapter.send2server=function(url_string,data_as_text){
	raudrohi.adapter.vars.func_if_lib_uninited('')
} // raudrohi.adapter.send2server


// the innerHTML parameter exists only, because
// the Internet Explorer 8 (as of 11.2009) has bugs.
raudrohi.adapter.set_innerHTML=function(html_id, a_string){
	raudrohi.adapter.vars.func_if_lib_uninited('')
} //raudrohi.adapter.set_innerHTML

//------------------------------------------------------------------------
raudrohi.tmg=function(GUID,err){
	// The YAHOO event handler mechanisms supress the exceptions,
	// effectively stopping the exception bubble before it reaches
	// the event handler function. That's one of the reasons, why one
	// feeds the whole thing to the YAHOO log. The other
	// reason is that if the exception message stack is fed to the
	// YAHOO log, one does not have to keep the error console window
	// open. :-)
	//
	// Within the raudrohi_adapter_v1.js one should not use this
	// method before a function has been assigned to the
	// raudrohi.adapter.log.
	var msg='GUID=="'+GUID+"\"\n"+err;
	if(raudrohi.settings.runtime.write_exception_stack_2_log){
		raudrohi.adapter.log(msg);
	} // if
	throw msg;
}; // raudrohi.tmg

//------------------------------------------------------------------------
// The YUI_stoppropagation_preventdefault duplicates the YUI_stoppropagation
// and the YUI_preventdefault and exists only for convenience and
// may be also for slight performance gain.
raudrohi.adapter.YUI_stoppropagation_preventdefault=raudrohi.adapter.vars.func_if_lib_uninited;

raudrohi.adapter.ports.selected_port_name='';

//------------------------------------------------------------------------
raudrohi.adapter.vars.verify_event_name=function(event_name){
	try{
		switch(event_name){
			case 'focus':
				break;
			case 'blur':
				break;
			case 'click':
				break;
			case 'change':
				break;
			default:
				if(raudrohi.settings.debug_JavaScript===true){
					raudrohi.tmg('GUID=="476c2f46-fe47-43a9-85f2-90120020abd7"',
						'There\'s no branching for event_name(=='+event_name+').');
				} // if
		} // switch
	}
	catch (err){
		throw 'GUID=="05297916-28cf-4831-81f2-90120020abd7"'+"\n\r"+err;
	} // catch
} // raudrohi.adapter.vars.verify_event_name

//------------------------------------------------------------------------
raudrohi.adapter.vars.do_something_if_the_connection_to_the_server_failed=function(){
	if(raudrohi.settings.debug_JavaScript===true){
		raudrohi.tmg('1be88111-6adf-443a-a203-90120020abd7',
			'Connection to the server failed.');
	} // if
}; // raudrohi.adapter.vars.do_something_if_the_connection_to_the_server_failed

//------------------------------------------------------------------------
var YUI_based_LogReader;
var YUI_based_LogReader_Y={};
var Y=null;

//------------------------------------------------------------------------
raudrohi.adapter.ports.yui_3_0=function(){
	var self_public_=this;
	this.get_name=function(){
		return 'YUI_3_0';
	} // get_name
	Y=YUI();
	if(raudrohi.settings.debug_JavaScript===true){
		Y.use('console', 'overlay','dd','node','attribute',
			'dom','event', 'get','io-base',
			'io-form','io-upload-iframe','json','json-stringify',
			'json-parse','event-key', 'key',function(Y){


				raudrohi.adapter.isString=Y.Lang.isString;
				raudrohi.adapter.isArray=Y.Lang.isArray;
				raudrohi.adapter.isNumber=Y.Lang.isNumber;
				raudrohi.adapter.isBoolean=Y.Lang.isBoolean;
				raudrohi.adapter.isObject=Y.Lang.isObject;
				raudrohi.adapter.isUndefined=Y.Lang.isUndefined;
				raudrohi.adapter.isValue=Y.Lang.isValue;
				raudrohi.adapter.isFunction=Y.Lang.isFunction;

				raudrohi.internal_constructor();
				raudrohi.application_main_function();
			});
	} else {
		// The console related css seems to mess things up.
		// May be it has something to do with the fact that the console
		// component is still a beta.
		//
		// The reason, why the console component is here, is that
		// some weird errors happened to occur.
		Y.use( 'overlay','dd','node','attribute',
			'dom','event', 'get','io-base',
			'io-form','io-upload-iframe','json','json-stringify',
			'json-parse','event-key','key',function(Y){

				raudrohi.adapter.isString=Y.Lang.isString;
				raudrohi.adapter.isArray=Y.Lang.isArray;
				raudrohi.adapter.isNumber=Y.Lang.isNumber;
				raudrohi.adapter.isBoolean=Y.Lang.isBoolean;
				raudrohi.adapter.isObject=Y.Lang.isObject;
				raudrohi.adapter.isUndefined=Y.Lang.isUndefined;
				raudrohi.adapter.isValue=Y.Lang.isValue;
				raudrohi.adapter.isFunction=Y.Lang.isFunction;

				raudrohi.internal_constructor();
				raudrohi.application_main_function();
			});
	} // else

	raudrohi.adapter.vars.YUI_3_0={};

	raudrohi.adapter.log=function(a_string){
		if(raudrohi.settings.debug_JavaScript===true){
			Y.log(a_string);
		} // if
	} // raudrohi.adapter.log

	raudrohi.adapter.trim=function(a_string){
		try{
			return Y.Lang.trim(a_string);
		} catch (err){
			raudrohi.tmg('0763e61c-7851-486f-8303-90120020abd7',err);
		} // catch
	} // raudrohi.adapter.trim

	raudrohi.adapter.YUI_preventdefault=function(e){
		try{
			e.preventDefault();
		} catch (err){
			raudrohi.tmg('63d32581-f075-4b23-84f2-90120020abd7',err);
		} // catch
	} // raudrohi.adapter.YUI_preventdefault

	raudrohi.adapter.YUI_stoppropagation=function(e){
		try{
			e.stopPropagation();
		} catch (err){
			raudrohi.tmg('e5496535-71d6-4ada-93f2-90120020abd7',err);
		} // catch
	} // raudrohi.adapter.YUI_stoppropagation

	raudrohi.adapter.YUI_stoppropagation_preventdefault=function(e){
		try{
			e.halt();
		} catch (err){
			raudrohi.tmg('b95ebc2c-1a34-4834-83f2-90120020abd7',err);
		} // catch
	} // raudrohi.adapter.YUI_stoppropagation_preventdefault

	raudrohi.adapter.YUI_create_console=function(){
		try{
			if(raudrohi.settings.debug_JavaScript===true){
				YUI_based_LogReader = new Y.Console({
					logSource: Y.Global,
					strings: {
						title : 'Site Debugging Console',
						pause : 'Wait',
						clear : 'Flush',
						collapse : 'Shrink',
						expand : 'Grow'
					},
					plugins: [ Y.Plugin.Drag, Y.Plugin.ConsoleFilters ],
					//plugins: [ Y.Plugin.ConsoleFilters ],
					visible: true
				}).render();
			} // if
		} catch (err){
			raudrohi.tmg('ae949921-1419-48a1-91f2-90120020abd7',err);
		} // catch
	} // raudrohi.adapter.YUI_create_console

	raudrohi.adapter.addEventListner=function(html_id,event_name,
		event_handler_func){
		try{
			if(raudrohi.settings.debug_JavaScript===true){
				if(!raudrohi.adapter.isString(html_id)){
					raudrohi.tmg('61b05120-131a-4acf-b1f2-90120020abd7',
						'(!raudrohi.adapter.isString(html_id))==true')
				} // if
				if(!raudrohi.adapter.isString(event_name)){
					raudrohi.tmg('c051ea47-ce1b-4efd-95e2-90120020abd7',
						'(!raudrohi.adapter.isString(event_name))==true')
				} // if
				if(!raudrohi.adapter.isFunction(event_handler_func)){
					raudrohi.tmg('d4859738-0e09-4a23-94e2-90120020abd7',
						'(!raudrohi.adapter.isFunction(event_handler_func))==true');
				} // if
				raudrohi.adapter.vars.verify_event_name(event_name);
			} // if
			var key_listener_handle = Y.on(event_name, function(e) {
				//e.halt();// stopPropagation() and preventDefault()
				//key_listener_handle.detach();// unsubscribe so this only happens once
				event_handler_func(e);
			}, '#'+html_id);
			// The value is returned in order to be compatible wtih
			// the raudrohi.adapter.set_keylistener. The compatibility is
			// required in the raudrohi.widgets.g1.sys.keylisteners_unit.
			return key_listener_handle;
		} catch (err){
			raudrohi.tmg('bd1af15d-22a6-4681-a4e2-90120020abd7',
				err+' html_id=='+html_id+'  event_name=='+event_name);
		} // catch
	} // raudrohi.adapter.addEventListner

	raudrohi.adapter.set_keylistener=function(html_id, key_number_as_string,
		event_handler_func){
		try{
			if(raudrohi.settings.debug_JavaScript===true){
				if(!raudrohi.adapter.isString(html_id)){
					raudrohi.tmg('0f0e984d-b472-4585-a4e2-90120020abd7',
						'(!raudrohi.adapter.isString(html_id))==true')
				} // if
				if(!raudrohi.adapter.isString(key_number_as_string)){
					raudrohi.tmg('85e14d1d-aafc-4b9f-82e2-90120020abd7',
						'(!raudrohi.adapter.isString(key_number_as_string))==true')
				} // if
				if(!raudrohi.adapter.isFunction(event_handler_func)){
					raudrohi.tmg('2a9f20c4-9adc-4ddf-a5e2-90120020abd7',
						'(!raudrohi.adapter.isFunction(event_handler_func))==true');
				} // if
				// If the parseInt converts something like 'BumBastic' to
				// an int, then there will be trouble. It's not possible to
				// preprocess it here either.
				var key_code_candidate=parseInt(key_number_as_string,10);
				if(!raudrohi.core.isWithinKeyeventKeyCodes(key_code_candidate)){
					raudrohi.tmg('c45d7733-0301-4094-82d2-90120020abd7',
						'key_number(=='+key_number_as_string+
						') does not represent a '+
						'JavaScript key event key code.');
				} // if
			} // if
			var key_listener_handle = Y.on('key', function(e, arg1, arg2, etc) {
				//e.halt();// stopPropagation() and preventDefault()
				//key_listener_handle.detach();// unsubscribe so this only happens once
				event_handler_func(e);
			}, '#'+html_id, 'down:'+key_number_as_string, Y, "arg1", "arg2", "etc");
			return key_listener_handle;
		} catch (err){
			raudrohi.tmg('4a49d2a2-8637-4352-91d2-90120020abd7',err);
		} // catch
	} // raudrohi.adapter.set_keylistener

	raudrohi.adapter.remove_keylistener=function(key_listener_handle){
		try{
			key_listener_handle.detach();
		} catch (err){
			raudrohi.tmg('76c42654-fae0-4e23-93d2-90120020abd7',err);
		} // catch
	} // remove_keylistener

	raudrohi.adapter.JSON2ob=function(a_json_string){
		try{
			var an_object;
			//YUI().use('json-parse', function (Ytmp) {
			// JSON.parse throws a SyntaxError when passed invalid JSON
			try {
				an_object = Y.JSON.parse(a_json_string);
			}
			catch (e) {
				raudrohi.tmg("Invalid JSON string. "+e);
			}
			//});
			return an_object;
		} catch (err){
			raudrohi.tmg('7e48ae17-d5a4-4d01-94d2-90120020abd7',err);
		} // catch
	} // raudrohi.adapter.JSON2ob

	raudrohi.adapter.ob2JSON=function(an_object){
		try{
			var s_json='';
			//YUI().use('json-stringify', function (Ytmp) {
			s_json = Y.JSON.stringify(an_object)+'\n';
			//});
			return s_json;
		} catch (err){
			raudrohi.tmg('a4199d5a-2e5f-40a2-a3d2-90120020abd7',err);
		} // catch
	} // raudrohi.adapter.JSON2ob


	raudrohi.adapter.send2server=function(url_string,data_as_text){
		try{
			var fff =document.getElementById(
				'sirel_data_from_JavaScript_formscript_field');
			fff.value=data_as_text;
			var uri = url_string;

			// Define a function to handle the response data.
			function request_complete(id, o, args) {
				try{
					// id ==Transaction ID.
					var data = o.responseText; // Response data.
					if(data!=null){// IE problems
						if(raudrohi.adapter.isString(data)){
							if(data!=''){
								raudrohi.adapter.server_response_eventhandler(data);
							} // if
						} // if
					} // if
				//  var args = args[1]; // 'ipsum'.
				} catch (err){
					raudrohi.tmg('d6f9ee14-8f0d-41e4-a4d2-90120020abd7',err);
				} // catch
			} // request_complete

			// Subscribe to event "io:complete", and pass an array
			// as an argument to the event handler "complete", since
			// "complete" is global.   At this point in the transaction
			// lifecycle, success or failure is not yet known.
			Y.on('io:complete', request_complete, this,
				['lorem', 'ipsum']);
			// Make an HTTP request to <the url>.
			var cfg= {
				method: 'POST',
				//data: 'debug|||/dev/null|||',
				timeout: raudrohi.settings.ajax_request_timeout*1000,
				on: {
					// start: Dispatch.start,
					complete: request_complete
				//end: Dispatch.end
				},
				form: {
					id: 'sirel_data_from_JavaScript_formscript_form',
					upload: true
				}
			};
			var request = Y.io(uri,cfg);
		} catch (err){
			raudrohi.tmg('c8779113-a4b5-4663-b1d2-90120020abd7',err);
		} // catch
	} // raudrohi.adapter.send2server

	// Due to YUI's architecture there's a separate method for
	// editing the style attribute.
	raudrohi.adapter.setAttribute=function(html_id, attribute_name,
		attribute_value){
		try{
			if(raudrohi.settings.debug_JavaScript===true){
				if(!raudrohi.adapter.isString(html_id)){
					raudrohi.tmg('29bf6063-4b26-44fc-b7d2-90120020abd7',
						'(!raudrohi.adapter.isString(html_id))==true')
				} // if
				if(!raudrohi.adapter.isString(attribute_name)){
					raudrohi.tmg('0234beb8-a581-4f54-b3d2-90120020abd7',
						'(!raudrohi.adapter.isString(attribute_name))==true')
				} // if
				if(!raudrohi.adapter.isString(attribute_value)){
					raudrohi.tmg('3ee90dc2-b40e-4e38-85d2-90120020abd7',
						'(!raudrohi.adapter.isString(attribute_value))==true')
				} // if
			} // if
			var node=Y.Node.get('#'+html_id);
			if(node===null){
				raudrohi.tmg('afa4d224-2016-46c7-95c2-90120020abd7',
					' node===null ');
			} // if
			node.set(attribute_name,attribute_value);
		} catch (err){
			raudrohi.tmg('1eaa8841-d58e-4de7-8dc2-90120020abd7', err+
				'  html_id=='+html_id+' attribute_name=='+attribute_name+
				'  attribute_value=='+attribute_value);
		} // catch
	} // raudrohi.adapter.setAttribute

	raudrohi.adapter.getAttribute=function(html_id, attribute_name){
		try{
			if(raudrohi.settings.debug_JavaScript===true){
				if(!raudrohi.adapter.isString(html_id)){
					raudrohi.tmg('a0758e44-ebed-40a3-b3c2-90120020abd7',
						'(!raudrohi.adapter.isString(html_id))==true')
				} // if
				if(!raudrohi.adapter.isString(attribute_name)){
					raudrohi.tmg('3c275120-c26d-415f-b1c2-90120020abd7',
						'(!raudrohi.adapter.isString(attribute_name))==true')
				} // if
			} // if
			var node=Y.Node.get('#'+html_id);
			if(node===null){
				raudrohi.tmg('575b9cf3-b28a-4390-8ec2-90120020abd7',
					' node===null ');
			} // if
			var attr_value=node.get(attribute_name);
			return attr_value;
		} catch (err){
			raudrohi.tmg('659bb7f1-9893-4798-a4c2-90120020abd7', err+
				'  html_id=='+html_id+' attribute_name=='+attribute_name);
		} // catch
	} // raudrohi.adapter.getAttribute

	raudrohi.adapter.remove_HTML_attribute=function(html_id, attribute_name){
		try{
			if(raudrohi.settings.debug_JavaScript===true){
				if(!raudrohi.adapter.isString(html_id)){
					raudrohi.tmg('4313ee36-1309-49d6-aac2-90120020abd7',
						'(!raudrohi.adapter.isString(html_id))==true')
				} // if
				if(!raudrohi.adapter.isString(attribute_name)){
					raudrohi.tmg('30070244-86cf-415b-b1c2-90120020abd7',
						'(!raudrohi.adapter.isString(attribute_name))==true')
				} // if
			} // if
			var node=Y.Node.get('#'+html_id);
			if(node===null){
				raudrohi.tmg('35b13ef3-6d0e-421b-9dc2-90120020abd7',
					' node===null ');
			} // if
			node.removeAttribute(attribute_name);
		} catch (err){
			raudrohi.tmg('5028302d-7d90-4405-b4b2-90120020abd7', err+
				'  html_id=='+html_id+' attribute_name=='+attribute_name);
		} // catch
	} // raudrohi.adapter.remove_HTML_attribute


	raudrohi.adapter.editStyle=function(html_id, style_param_name,
		style_param_value){
		try{
			if(raudrohi.settings.debug_JavaScript===true){
				if(!raudrohi.adapter.isString(html_id)){
					raudrohi.tmg('54d4cb9e-ac03-404f-84b2-90120020abd7',
						'(!raudrohi.adapter.isString(html_id))==true')
				} // if
				if(!raudrohi.adapter.isString(style_param_name)){
					raudrohi.tmg('162e16f8-fec8-4b36-81b2-90120020abd7',
						'(!raudrohi.adapter.isString(style_param_name))==true')
				} // if
				if(!raudrohi.adapter.isString(style_param_value)){
					raudrohi.tmg('23c50bd5-060c-4e32-93b2-90120020abd7',
						'(!raudrohi.adapter.isString(style_param_value))==true')
				} // if
			} // if
			var node=Y.Node.get('#'+html_id);
			if(node===null){
				raudrohi.tmg('2895b3c1-f1e5-4816-93b2-90120020abd7',
					' node===null, html_id=='+html_id+"\n");
			} // if
			node.setStyle(style_param_name,style_param_value);
		} catch (err){
			raudrohi.tmg('8eb13445-92a3-4ded-94b2-90120020abd7', err+
				"\n html_id=="+html_id+"\n style_param_name=="+style_param_name+
				"  style_param_value=="+style_param_value);
		} // catch
	} // raudrohi.adapter.editStyle

	raudrohi.adapter.set_innerHTML=function(html_id, a_string){
		try{
			var node=Y.Node.get('#'+html_id);
			if(node===null){
				raudrohi.tmg('b93bc056-8682-4761-91b2-90120020abd7',
					' node===null ');
			} // if
			node.set('innerHTML',a_string);
		} catch (err){
			raudrohi.tmg('7e4d43fd-ea1b-4fe3-84b2-90120020abd7', err+
				'  html_id=='+html_id+' a_string=='+a_string);
		} // catch
	} // raudrohi.adapter.set_innerHTML

} // raudrohi.adapter.ports.yui_3_0

//------------------------------------------------------------------------
raudrohi.adapter.ports.yui_3_3_0=function(){
	try{
		var self_public_=this;
		this.get_name=function(){
			return 'YUI_3_3_0';
		} // get_name
		Y=YUI();
		if(raudrohi.settings.debug_JavaScript===true){
			Y.use('console', 'overlay','dd','node','attribute',
				'dom','event', 'get','io-base',
				'io-form','io-upload-iframe','json','json-stringify',
				'json-parse','event-key', 'key',function(Y){


					raudrohi.adapter.isString=Y.Lang.isString;
					raudrohi.adapter.isArray=Y.Lang.isArray;
					raudrohi.adapter.isNumber=Y.Lang.isNumber;
					raudrohi.adapter.isBoolean=Y.Lang.isBoolean;
					raudrohi.adapter.isObject=Y.Lang.isObject;
					raudrohi.adapter.isUndefined=Y.Lang.isUndefined;
					raudrohi.adapter.isValue=Y.Lang.isValue;
					raudrohi.adapter.isFunction=Y.Lang.isFunction;

					raudrohi.internal_constructor();
					raudrohi.application_main_function();
				});
		} else {
			// The console related css seems to mess things up.
			// May be it has something to do with the fact that the console
			// component is still a beta.
			//
			// The reason, why the console component is here, is that
			// some weird errors happened to occur.
			Y.use( 'overlay','dd','node','attribute',
				'dom','event', 'get','io-base',
				'io-form','io-upload-iframe','json','json-stringify',
				'json-parse','event-key','key',function(Y){

					raudrohi.adapter.isString=Y.Lang.isString;
					raudrohi.adapter.isArray=Y.Lang.isArray;
					raudrohi.adapter.isNumber=Y.Lang.isNumber;
					raudrohi.adapter.isBoolean=Y.Lang.isBoolean;
					raudrohi.adapter.isObject=Y.Lang.isObject;
					raudrohi.adapter.isUndefined=Y.Lang.isUndefined;
					raudrohi.adapter.isValue=Y.Lang.isValue;
					raudrohi.adapter.isFunction=Y.Lang.isFunction;

					raudrohi.internal_constructor();
					raudrohi.application_main_function();
				});
		} // else

		raudrohi.adapter.vars.YUI_3_3_0={};

		raudrohi.adapter.isString=Y.Lang.isString;
		raudrohi.adapter.isArray=Y.Lang.isArray;
		raudrohi.adapter.isNumber=Y.Lang.isNumber;
		raudrohi.adapter.isBoolean=Y.Lang.isBoolean;
		raudrohi.adapter.isObject=Y.Lang.isObject;
		raudrohi.adapter.isUndefined=Y.Lang.isUndefined;
		raudrohi.adapter.isValue=Y.Lang.isValue;
		raudrohi.adapter.isFunction=Y.Lang.isFunction;

		raudrohi.adapter.log=function(a_string){
			if(raudrohi.settings.debug_JavaScript===true){
				Y.log(a_string);
			} // if
		} // raudrohi.adapter.log

		raudrohi.adapter.trim=function(a_string){
			try{
				return Y.Lang.trim(a_string);
			} catch (err){
				raudrohi.tmg('da27c63b-32e5-4918-b3b2-90120020abd7',err);
			} // catch
		} // raudrohi.adapter.trim

		raudrohi.adapter.YUI_preventdefault=function(e){
			try{
				e.preventDefault();
			} catch (err){
				raudrohi.tmg('0a94a014-d5ec-46f6-b3b2-90120020abd7',err);
			} // catch
		} // raudrohi.adapter.YUI_preventdefault

		raudrohi.adapter.YUI_stoppropagation=function(e){
			try{
				e.stopPropagation();
			} catch (err){
				raudrohi.tmg('2123d001-f0ce-43f0-84a2-90120020abd7',err);
			} // catch
		} // raudrohi.adapter.YUI_stoppropagation

		raudrohi.adapter.YUI_stoppropagation_preventdefault=function(e){
			try{
				e.halt();
			} catch (err){
				raudrohi.tmg('2a856694-9c80-44db-82a2-90120020abd7',err);
			} // catch
		} // raudrohi.adapter.YUI_stoppropagation_preventdefault

		raudrohi.adapter.YUI_create_console=function(){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					YUI_based_LogReader = new Y.Console({
						logSource: Y.Global,
						strings: {
							title : 'Site Debugging Console',
							pause : 'Wait',
							clear : 'Flush',
							collapse : 'Shrink',
							expand : 'Grow'
						},
						plugins: [ Y.Plugin.Drag, Y.Plugin.ConsoleFilters ],
						//plugins: [ Y.Plugin.ConsoleFilters ],
						visible: true
					}).render();
				} // if
			} catch (err){
				raudrohi.tmg('1b2d53c2-539a-4ee0-a1a2-90120020abd7',err);
			} // catch
		} // raudrohi.adapter.YUI_create_console

		raudrohi.adapter.addEventListner=function(html_id,event_name,
			event_handler_func){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					if(!raudrohi.adapter.isString(html_id)){
						raudrohi.tmg('83099d2c-7dd4-4145-b4a2-90120020abd7',
							'(!raudrohi.adapter.isString(html_id))==true')
					} // if
					if(!raudrohi.adapter.isString(event_name)){
						raudrohi.tmg('168c4147-5d19-461c-94a2-90120020abd7',
							'(!raudrohi.adapter.isString(event_name))==true')
					} // if
					if(!raudrohi.adapter.isFunction(event_handler_func)){
						raudrohi.tmg('58ab2c1d-39eb-418e-a5a2-90120020abd7',
							'(!raudrohi.adapter.isFunction(event_handler_func))==true');
					} // if
					raudrohi.adapter.vars.verify_event_name(event_name);
				} // if
				var key_listener_handle = Y.on(event_name, function(e) {
					//e.halt();// stopPropagation() and preventDefault()
					//key_listener_handle.detach();// unsubscribe so this only happens once
					event_handler_func(e);
				}, '#'+html_id);
				// The value is returned in order to be compatible wtih
				// the raudrohi.adapter.set_keylistener. The compatibility is
				// required in the raudrohi.widgets.g1.sys.keylisteners_unit.
				return key_listener_handle;
			} catch (err){
				raudrohi.tmg('dc344d84-de7c-4aa2-95a2-90120020abd7',
					err+' html_id=='+html_id+'  event_name=='+event_name);
			} // catch
		} // raudrohi.adapter.addEventListner

		raudrohi.adapter.set_keylistener=function(html_id, key_number_as_string,
			event_handler_func){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					if(!raudrohi.adapter.isString(html_id)){
						raudrohi.tmg('b16a1e29-b2a7-43aa-84a2-90120020abd7',
							'(!raudrohi.adapter.isString(html_id))==true')
					} // if
					if(!raudrohi.adapter.isString(key_number_as_string)){
						raudrohi.tmg('f547eb3c-a418-4c81-a5a2-90120020abd7',
							'(!raudrohi.adapter.isString(key_number_as_string))==true')
					} // if
					if(!raudrohi.adapter.isFunction(event_handler_func)){
						raudrohi.tmg('f3bc1d33-9a01-4310-81a2-90120020abd7',
							'(!raudrohi.adapter.isFunction(event_handler_func))==true');
					} // if
					// If the parseInt converts something like 'BumBastic' to
					// an int, then there will be trouble. It's not possible to
					// preprocess it here either.
					var key_code_candidate=parseInt(key_number_as_string,10);
					if(!raudrohi.core.isWithinKeyeventKeyCodes(key_code_candidate)){
						raudrohi.tmg('98d2e6b0-590f-46de-9792-90120020abd7',
							'key_number(=='+key_number_as_string+
							') does not represent a '+
							'JavaScript key event key code.');
					} // if
				} // if
				var key_listener_handle = Y.on('key', function(e, arg1, arg2, etc) {
					//e.halt();// stopPropagation() and preventDefault()
					//key_listener_handle.detach();// unsubscribe so this only happens once
					event_handler_func(e);
				}, '#'+html_id, 'down:'+key_number_as_string, Y, "arg1", "arg2", "etc");
				return key_listener_handle;
			} catch (err){
				raudrohi.tmg('2a3a4c22-aaa9-42d9-9192-90120020abd7',err);
			} // catch
		} // raudrohi.adapter.set_keylistener

		raudrohi.adapter.remove_keylistener=function(key_listener_handle){
			try{
				key_listener_handle.detach();
			} catch (err){
				raudrohi.tmg('1be9615f-6997-471f-b392-90120020abd7',err);
			} // catch
		} // remove_keylistener

		raudrohi.adapter.JSON2ob=function(a_json_string){
			try{
				var an_object;
				//YUI().use('json-parse', function (Ytmp) {
				// JSON.parse throws a SyntaxError when passed invalid JSON
				try {
					an_object = Y.JSON.parse(a_json_string);
				}
				catch (e) {
					raudrohi.tmg("Invalid JSON string. "+e);
				}
				//});
				return an_object;
			} catch (err){
				raudrohi.tmg('9d0db4e1-1d55-46b8-b592-90120020abd7',err);
			} // catch
		} // raudrohi.adapter.JSON2ob

		raudrohi.adapter.ob2JSON=function(an_object){
			try{
				var s_json='';
				//YUI().use('json-stringify', function (Ytmp) {
				s_json = Y.JSON.stringify(an_object)+'\n';
				//});
				return s_json;
			} catch (err){
				raudrohi.tmg('d419b921-a013-4d39-8592-90120020abd7',err);
			} // catch
		} // raudrohi.adapter.JSON2ob


		raudrohi.adapter.send2server=function(url_string,data_as_text){
			try{
				var fff =document.getElementById(
					'sirel_data_from_JavaScript_formscript_field');
				fff.value=data_as_text;
				var uri = url_string;

				// Define a function to handle the response data.
				function request_complete(id, o, args) {
					try{
						// id ==Transaction ID.
						var data = o.responseText; // Response data.
						if(data!=null){// IE problems
							if(raudrohi.adapter.isString(data)){
								if(data!=''){
									raudrohi.adapter.server_response_eventhandler(data);
								} // if
							} // if
						} // if
					//  var args = args[1]; // 'ipsum'.
					} catch (err){
						raudrohi.tmg('5a4063bd-89f2-4187-b592-90120020abd7',err);
					} // catch
				} // request_complete

				// Subscribe to event "io:complete", and pass an array
				// as an argument to the event handler "complete", since
				// "complete" is global.   At this point in the transaction
				// lifecycle, success or failure is not yet known.
				Y.on('io:complete', request_complete, this,
					['lorem', 'ipsum']);
				// Make an HTTP request to <the url>.
				var cfg= {
					method: 'POST',
					//data: 'debug|||/dev/null|||',
					timeout: raudrohi.settings.ajax_request_timeout*1000,
					on: {
						// start: Dispatch.start,
						complete: request_complete
					//end: Dispatch.end
					},
					form: {
						id: 'sirel_data_from_JavaScript_formscript_form',
						upload: true
					}
				};
				var request = Y.io(uri,cfg);
			} catch (err){
				raudrohi.tmg('537f1e73-9d6d-4654-a592-90120020abd7',err);
			} // catch
		} // raudrohi.adapter.send2server

		// Due to YUI's architecture there's a separate method for
		// editing the style attribute.
		raudrohi.adapter.setAttribute=function(html_id, attribute_name,
			attribute_value){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					if(!raudrohi.adapter.isString(html_id)){
						raudrohi.tmg('4b341f5d-d825-4c9a-9392-90120020abd7',
							'(!raudrohi.adapter.isString(html_id))==true')
					} // if
					if(!raudrohi.adapter.isString(attribute_name)){
						raudrohi.tmg('df25f54b-5949-4c21-9282-90120020abd7',
							'(!raudrohi.adapter.isString(attribute_name))==true')
					} // if
					if(!raudrohi.adapter.isString(attribute_value)){
						raudrohi.tmg('5d6d19da-1937-476f-9382-90120020abd7',
							'(!raudrohi.adapter.isString(attribute_value))==true')
					} // if
				} // if
				var node=Y.one('#'+html_id);
				if(node===null){
					raudrohi.tmg('2039a9e1-1777-4bff-9e82-90120020abd7',
						' node===null ');
				} // if
				node.set(attribute_name,attribute_value);
			} catch (err){
				raudrohi.tmg('dfb16b4c-8e2a-4e42-a482-90120020abd7', err+
					'  html_id=='+html_id+' attribute_name=='+attribute_name+
					'  attribute_value=='+attribute_value);
			} // catch
		} // raudrohi.adapter.setAttribute

		raudrohi.adapter.getAttribute=function(html_id, attribute_name){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					if(!raudrohi.adapter.isString(html_id)){
						raudrohi.tmg('39dbe792-da82-423b-ab82-90120020abd7',
							'(!raudrohi.adapter.isString(html_id))==true')
					} // if
					if(!raudrohi.adapter.isString(attribute_name)){
						raudrohi.tmg('f870a22b-5ba0-4fa9-b182-90120020abd7',
							'(!raudrohi.adapter.isString(attribute_name))==true')
					} // if
				} // if
				var node=Y.one('#'+html_id);
				if(node===null){
					raudrohi.tmg('4d302983-f2db-40a4-9282-90120020abd7',
						' node===null ');
				} // if
				var attr_value=node.get(attribute_name);
				return attr_value;
			} catch (err){
				raudrohi.tmg('436bd742-6295-4463-9582-90120020abd7', err+
					'  html_id=='+html_id+' attribute_name=='+attribute_name);
			} // catch
		} // raudrohi.adapter.getAttribute

		raudrohi.adapter.remove_HTML_attribute=function(html_id, attribute_name){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					if(!raudrohi.adapter.isString(html_id)){
						raudrohi.tmg('23cf6c9d-fef2-4426-8382-90120020abd7',
							'(!raudrohi.adapter.isString(html_id))==true')
					} // if
					if(!raudrohi.adapter.isString(attribute_name)){
						raudrohi.tmg('cba6785f-7fd1-47d6-a572-90120020abd7',
							'(!raudrohi.adapter.isString(attribute_name))==true')
					} // if
				} // if
				var node=Y.one('#'+html_id);
				if(node===null){
					raudrohi.tmg('165b6583-2695-48b7-8c72-90120020abd7',
						' node===null ');
				} // if
				node.removeAttribute(attribute_name);
			} catch (err){
				raudrohi.tmg('f6db831d-d9be-45b5-8472-90120020abd7', err+
					'  html_id=='+html_id+' attribute_name=='+attribute_name);
			} // catch
		} // raudrohi.adapter.remove_HTML_attribute


		raudrohi.adapter.editStyle=function(html_id, style_param_name,
			style_param_value){
			try{
				if(raudrohi.settings.debug_JavaScript===true){
					if(!raudrohi.adapter.isString(html_id)){
						raudrohi.tmg('27950f72-eb87-4fd3-a172-90120020abd7',
							'(!raudrohi.adapter.isString(html_id))==true')
					} // if
					if(!raudrohi.adapter.isString(style_param_name)){
						raudrohi.tmg('20f67621-4064-4b0b-a172-90120020abd7',
							'(!raudrohi.adapter.isString(style_param_name))==true')
					} // if
					if(!raudrohi.adapter.isString(style_param_value)){
						raudrohi.tmg('76cab501-6d6c-4dcb-8572-90120020abd7',
							'(!raudrohi.adapter.isString(style_param_value))==true')
					} // if
				} // if
				var node=Y.one('#'+html_id);
				if(node===null){
					raudrohi.tmg('333ac01b-c16e-44cf-9472-90120020abd7',
						' node===null, html_id=='+html_id+"\n");
				} // if
				node.setStyle(style_param_name,style_param_value);
			} catch (err){
				raudrohi.tmg('6987b253-bedb-4df1-9472-90120020abd7', err+
					"\n html_id=="+html_id+"\n style_param_name=="+style_param_name+
					"  style_param_value=="+style_param_value);
			} // catch
		} // raudrohi.adapter.editStyle

		raudrohi.adapter.set_innerHTML=function(html_id, a_string){
			try{
				var node=Y.one('#'+html_id);
				if(node===null){
					raudrohi.tmg('4c7dfe53-75cd-46be-b262-90120020abd7',
						' node===null ');
				} // if
				node.set('innerHTML',a_string);
			} catch (err){
				raudrohi.tmg('28b1992a-e0e3-4cb4-9462-90120020abd7', err+
					'  html_id=='+html_id+' a_string=='+a_string);
			} // catch
		} // raudrohi.adapter.set_innerHTML

	} catch (err){
		raudrohi.tmg('e386155b-306b-40a2-8362-90120020abd7', err);
	} // catch
} // raudrohi.adapter.ports.yui_3_3_0


//------------------------------------------------------------------------


// As the data from the server arrives much later than the JavaScript
// files, this method must not be executed before everything has been
// downloaded. Otherwise the elem_id within this method ends up being null,
// because the element does not yet exist at the time of theis
// method execution.
//
// If b_make_no_assumptions_about_setup_availability==true, the library
// gets initiated with default setup values. Otherwise it is assumed
// that the server provides setup info.
raudrohi.initiate_adapter=function(b_make_no_assumptions_about_setup_availability){
	try{
		var port_name;
		try{
			if(b_make_no_assumptions_about_setup_availability===true){
				//port_name='YUI_3_3_0';
				port_name='YUI_3_0';
			//  The following 3 are determined in raudrohi_core_v1.js
			//  raudrohi.settings.debug_JavaScript=true;
			//  raudrohi.settings.debug_SERVERSIDE=false;
			//  raudrohi.settings.ajax_request_timeout=3600; // seconds
			} else{
				var s_err_prefix=" The "+
				"b_make_no_assumptions_about_setup_availability!==true, but ";
				var elem_id="webpage_initiation_data_from_server_raudrohi_port";
				var elem=document.getElementById(elem_id);
				if(elem===null){
					throw s_err_prefix+" the html document does not "+
					"contain an element with an id of "+
					"\"webpage_initiation_data_from_server_raudrohi_port\"."+
					'GUID=="336eb3c7-cc1a-4211-94f2-90120020abd7"';
				} // if
				port_name=elem.innerHTML;
				elem_id="webpage_initiation_data_from_server_debug_SERVERSIDE";
				elem=document.getElementById(elem_id);
				if(elem===null){
					throw "keyword: debug_SERVERSIDE, "+
					'GUID=="3ca05657-0025-4fe5-b2f2-90120020abd7"';
				} // if
				raudrohi.settings.debug_SERVERSIDE=raudrohi.core.str2bool(
					elem.innerHTML);
				elem_id="webpage_initiation_data_from_server_debug_JavaScript";
				elem=document.getElementById(elem_id);
				if(elem===null){
					throw "keyword: debug_JavaScript, "+
					'GUID=="7c434f48-7b36-4485-81f2-90120020abd7"';
				} // if
				raudrohi.settings.debug_JavaScript=raudrohi.core.str2bool(
					elem.innerHTML);
				elem_id="webpage_initiation_data_from_server_javascript_side_ajax_timeout";
				elem=document.getElementById(elem_id);
				if(elem!==null){
					var seconds=parseInt(elem.innerHTML);
					raudrohi.settings.ajax_request_timeout=seconds;
				} // if
			} // else
		} catch (err){
			throw 'GUID=="3dc9414c-1b63-48ae-85e2-90120020abd7", '+err;
		} // catch
		raudrohi.adapter.ports.selected_port_name=port_name;
		switch(port_name){
			case 'YUI_3_3_0':
				raudrohi.adapter.ports.yui_3_3_0();
				break;
			case 'YUI_3_0':
				raudrohi.adapter.ports.yui_3_0();
				break;
			default:
				if(raudrohi.settings.debug_JavaScript===true){
					throw 'GUID=="2c3def10-0881-4cce-86e2-90120020abd7"  '+
					'There\'s no branching for port_name(=='+port_name+
					').';
				} // if
		} // switch
	} catch (err){
		throw 'GUID=="20465c44-a74e-40db-a1e2-90120020abd7", '+err;
	} // catch
} // raudrohi.initiate_adapter

//------------------------------------------------------------------------
//------------------------------------------------------------------------
