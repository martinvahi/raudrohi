//=========================================================================
//
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
//-------------------------------------------------------------------------

if (window.raudrohi_adapter_exists !== true) {
	window.raudrohi.adapter = {};
	window.raudrohi_adapter_exists = true;
} // if
if (window.raudrohi_adapter_ports_exists !== true) {
	window.raudrohi.adapter.ports = {};
	window.raudrohi_adapter_ports_exists = true;
} // if

raudrohi.internal_constructor = function() {
	throw 'It\'s assumed that the function named ' +
		'raudrohi.internal_constructor is overriden. ' +
		'GUID=="5448d185-af8f-42b8-9319-e07221313dd7"';
} // raudrohi.internal_constructor

raudrohi.application_main_function = function() {
	throw 'It\'s assumed that the function named ' +
		'raudrohi.application_main_function is overriden. ' +
		'GUID=="2a768501-c972-46c2-b558-e07221313dd7" ';
} // raudrohi.application_main_function

raudrohi.adapter.vars = {};

raudrohi.adapter.vars.func_if_lib_uninited = function(x) {
	throw 'In order to use the raudrohi ' +
		'JavaScript library, one has to initialize it by calling ' +
		'raudrohi.initiate_adapter. ';
} // raudrohi.adapter.vars.func_if_lib_uninited

// The isString will be overriden, but one needs to bypass it
// within the str2bool, which gets called before the overriding.
// That's why it returns just true.
raudrohi_adapter_isString = function(x) {
	return true;
};


raudrohi.adapter.log = function(x) {/*its a temporary stub*/
};

// The following 2 methods are subject to overriding. They're functions
// here only to demonstrate their interface.
raudrohi.adapter.server_response_eventhandler = function(response_as_a_text) {
	raudrohi.adapter.vars.func_if_lib_uninited('')
} // raudrohi.adapter.server_response_eventhandler
raudrohi.adapter.send2server = function(url_string, data_as_text) {
	raudrohi.adapter.vars.func_if_lib_uninited('')
} // raudrohi.adapter.send2server


// the innerHTML parameter exists only, because
// the Internet Explorer 8 (as of 11.2009) has bugs.
raudrohi.adapter.set_innerHTML = function(html_id, a_string) {
	raudrohi.adapter.vars.func_if_lib_uninited('')
} //raudrohi.adapter.set_innerHTML

//------------------------------------------------------------------------
raudrohi.tmg = function(GUID, err) {
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
	var msg = 'GUID=="' + GUID + "\"\n" + err;
	if (raudrohi.settings.runtime.write_exception_stack_2_log) {
		raudrohi.adapter.log(msg);
	} // if
	throw msg;
}; // raudrohi.tmg

//------------------------------------------------------------------------
// The YUI_stoppropagation_preventdefault duplicates the YUI_stoppropagation
// and the YUI_preventdefault and exists only for convenience and
// may be also for slight performance gain.
raudrohi.adapter.YUI_stoppropagation_preventdefault = raudrohi.adapter.vars.func_if_lib_uninited;

raudrohi.adapter.ports.selected_port_name = '';

//------------------------------------------------------------------------
raudrohi.adapter.vars.verify_event_name = function(event_name) {
	try {
		switch (event_name) {
			case 'focus':
				break;
			case 'blur':
				break;
			case 'click':
				break;
			case 'change':
				break;
			default:
				if (raudrohi_settings_debug_JavaScript === true) {
					raudrohi.tmg('GUID=="943299c5-cd08-4760-8148-e07221313dd7"',
						'There\'s no branching for event_name(==' + event_name + ').');
				} // if
		} // switch
	}
	catch (err) {
		throw 'GUID=="5fc16842-15b8-4338-9818-e07221313dd7"' + "\n\r" + err;
	} // catch
} // raudrohi.adapter.vars.verify_event_name

//------------------------------------------------------------------------
raudrohi.adapter.vars.do_something_if_the_connection_to_the_server_failed = function() {
	if (raudrohi_settings_debug_JavaScript === true) {
		raudrohi.tmg('e132ae93-cf32-4219-ba29-e07221313dd7',
			'Connection to the server failed.');
	} // if
}; // raudrohi.adapter.vars.do_something_if_the_connection_to_the_server_failed
//------------------------------------------------------------------------

var raudrohi_adapter_isString = null;
var raudrohi_adapter_isArray = null;
var raudrohi_adapter_isNumber = null;
var raudrohi_adapter_isBoolean = null;
var raudrohi_adapter_isObject = null;
var raudrohi_adapter_isUndefined = null;
var raudrohi_adapter_isValue = null;
var raudrohi_adapter_isFunction = null;

//------------------------------------------------------------------------
var YUI_based_LogReader;
var Y_raudrohi = null;

//------------------------------------------------------------------------
raudrohi.adapter.ports.yui_3_0 = function() {
	var self_public_ = this;
	this.get_name = function() {
		return 'YUI_3_0';
	} // get_name
	Y_raudrohi = YUI();
	if (raudrohi_settings_debug_JavaScript === true) {
		Y_raudrohi.use('console', 'overlay', 'dd', 'node', 'attribute',
			'dom', 'event', 'get', 'io-base',
			'io-form', 'io-upload-iframe', 'json', 'json-stringify',
			'json-parse', 'event-key', 'key', function(Y) {

			raudrohi_adapter_isString = Y.Lang.isString;
			raudrohi_adapter_isArray = Y.Lang.isArray;
			raudrohi_adapter_isNumber = Y.Lang.isNumber;
			raudrohi_adapter_isBoolean = Y.Lang.isBoolean;
			raudrohi_adapter_isObject = Y.Lang.isObject;
			raudrohi_adapter_isUndefined = Y.Lang.isUndefined;
			raudrohi_adapter_isValue = Y.Lang.isValue;
			raudrohi_adapter_isFunction = Y.Lang.isFunction;

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
		Y_raudrohi.use('overlay', 'dd', 'node', 'attribute',
			'dom', 'event', 'get', 'io-base',
			'io-form', 'io-upload-iframe', 'json', 'json-stringify',
			'json-parse', 'event-key', 'key', function(Y) {

			raudrohi_adapter_isString = Y.Lang.isString;
			raudrohi_adapter_isArray = Y.Lang.isArray;
			raudrohi_adapter_isNumber = Y.Lang.isNumber;
			raudrohi_adapter_isBoolean = Y.Lang.isBoolean;
			raudrohi_adapter_isObject = Y.Lang.isObject;
			raudrohi_adapter_isUndefined = Y.Lang.isUndefined;
			raudrohi_adapter_isValue = Y.Lang.isValue;
			raudrohi_adapter_isFunction = Y.Lang.isFunction;

			raudrohi.internal_constructor();
			raudrohi.application_main_function();
		});
	} // else

	raudrohi.adapter.vars.YUI_3_0 = {};

	raudrohi.adapter.log = function(a_string) {
		if (raudrohi_settings_debug_JavaScript === true) {
			Y_raudrohi.log(a_string);
		} // if
	} // raudrohi.adapter.log

	raudrohi.adapter.trim = function(a_string) {
		try {
			return Y_raudrohi.Lang.trim(a_string);
		} catch (err) {
			raudrohi.tmg('64e1e4e0-6df5-4249-86b9-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.trim

	raudrohi.adapter.YUI_preventdefault = function(e) {
		try {
			e.preventDefault();
		} catch (err) {
			raudrohi.tmg('b94593fc-4fdc-4ef1-a038-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.YUI_preventdefault

	raudrohi.adapter.YUI_stoppropagation = function(e) {
		try {
			e.stopPropagation();
		} catch (err) {
			raudrohi.tmg('25f85183-f53b-4435-ad38-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.YUI_stoppropagation

	raudrohi.adapter.YUI_stoppropagation_preventdefault = function(e) {
		try {
			e.halt();
		} catch (err) {
			raudrohi.tmg('8246d7fc-b932-4f31-ae18-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.YUI_stoppropagation_preventdefault

	raudrohi.adapter.YUI_create_console = function() {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				YUI_based_LogReader = new Y_raudrohi.Console({
					logSource: Y_raudrohi.Global,
					strings: {
						title: 'Site Debugging Console',
						pause: 'Wait',
						clear: 'Flush',
						collapse: 'Shrink',
						expand: 'Grow'
					},
					plugins: [Y_raudrohi.Plugin.Drag, Y_raudrohi.Plugin.ConsoleFilters],
					//plugins: [ Y_raudrohi.Plugin.ConsoleFilters ],
					visible: true
				}).render();
			} // if
		} catch (err) {
			raudrohi.tmg('a20ad5e1-078f-4674-b158-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.YUI_create_console

	raudrohi.adapter.addEventListner = function(html_id, event_name,
		event_handler_func) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('53989920-811f-4c01-9338-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(event_name)) {
					raudrohi.tmg('45b709b4-63ef-4219-8458-e07221313dd7',
						'(!raudrohi_adapter_isString(event_name))==true')
				} // if
				if (!raudrohi_adapter_isFunction(event_handler_func)) {
					raudrohi.tmg('7145ed3b-92c9-4db9-8747-e07221313dd7',
						'(!raudrohi_adapter_isFunction(event_handler_func))==true');
				} // if
				raudrohi.adapter.vars.verify_event_name(event_name);
			} // if
			var key_listener_handle = Y_raudrohi.on(event_name, function(e) {
				//e.halt();// stopPropagation() and preventDefault()
				//key_listener_handle.detach();// unsubscribe so this only happens once
				event_handler_func(e);
			}, '#' + html_id);
			// The value is returned in order to be compatible wtih
			// the raudrohi.adapter.set_keylistener. The compatibility is
			// required in the raudrohi.widgets.g1.sys.keylisteners_unit.
			return key_listener_handle;
		} catch (err) {
			raudrohi.tmg('3ee79673-d53c-4b3e-8e47-e07221313dd7',
				err + ' html_id==' + html_id + '  event_name==' + event_name);
		} // catch
	} // raudrohi.adapter.addEventListner

	raudrohi.adapter.set_keylistener = function(html_id, key_number_as_string,
		event_handler_func) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('1d03eaf3-88c2-40a8-a937-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(key_number_as_string)) {
					raudrohi.tmg('52837e32-c83f-45c0-b627-e07221313dd7',
						'(!raudrohi_adapter_isString(key_number_as_string))==true')
				} // if
				if (!raudrohi_adapter_isFunction(event_handler_func)) {
					raudrohi.tmg('ac62c365-5cad-4376-b157-e07221313dd7',
						'(!raudrohi_adapter_isFunction(event_handler_func))==true');
				} // if
				// If the parseInt converts something like 'BumBastic' to
				// an int, then there will be trouble. It's not possible to
				// preprocess it here either.
				var key_code_candidate = parseInt(key_number_as_string, 10);
				if (!raudrohi.core.isWithinKeyeventKeyCodes(key_code_candidate)) {
					raudrohi.tmg('45969ad1-c497-489c-8637-e07221313dd7',
						'key_number(==' + key_number_as_string +
						') does not represent a ' +
						'JavaScript key event key code.');
				} // if
			} // if
			var key_listener_handle = Y_raudrohi.on('key',
				function(e, arg1, arg2, etc) {
					//e.halt();// stopPropagation() and preventDefault()
					//key_listener_handle.detach();// unsubscribe so this only happens once
					event_handler_func(e);
				}, '#' + html_id, 'down:' + key_number_as_string,
				Y_raudrohi, "arg1", "arg2", "etc");
			return key_listener_handle;
		} catch (err) {
			raudrohi.tmg('7107e22b-4d4c-4bce-b327-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.set_keylistener

	raudrohi.adapter.remove_keylistener = function(key_listener_handle) {
		try {
			key_listener_handle.detach();
		} catch (err) {
			raudrohi.tmg('2f5a56f4-5f90-4b7b-a817-e07221313dd7', err);
		} // catch
	} // remove_keylistener

	raudrohi.adapter.JSON2ob = function(a_json_string) {
		try {
			var an_object;
			//YUI().use('json-parse', function (Ytmp) {
			// JSON.parse throws a SyntaxError when passed invalid JSON
			try {
				an_object = Y_raudrohi.JSON.parse(a_json_string);
			}
			catch (e) {
				raudrohi.tmg("Invalid JSON string. " + e);
			}
			//});
			return an_object;
		} catch (err) {
			raudrohi.tmg('b0395243-2f0b-48e1-9956-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.JSON2ob

	raudrohi.adapter.ob2JSON = function(an_object) {
		try {
			var s_json = '';
			//YUI().use('json-stringify', function (Ytmp) {
			s_json = Y_raudrohi.JSON.stringify(an_object) + '\n';
			//});
			return s_json;
		} catch (err) {
			raudrohi.tmg('554dbc50-7c2c-453c-9ef6-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.JSON2ob


	raudrohi.adapter.send2server = function(url_string, data_as_text) {
		try {
			var fff = document.getElementById(
				'sirel_data_from_JavaScript_formscript_field');
			fff.value = data_as_text;
			var uri = url_string;

			// Define a function to handle the response data.
			function request_complete(id, o, args) {
				try {
					// id ==Transaction ID.
					var data = o.responseText; // Response data.
					if (data != null) {// IE problems
						if (raudrohi_adapter_isString(data)) {
							if (data != '') {
								raudrohi.adapter.server_response_eventhandler(data);
							} // if
						} // if
					} // if
					//  var args = args[1]; // 'ipsum'.
				} catch (err) {
					raudrohi.tmg('fd2f5184-b426-4563-8486-e07221313dd7', err);
				} // catch
			} // request_complete

			// Subscribe to event "io:complete", and pass an array
			// as an argument to the event handler "complete", since
			// "complete" is global.   At this point in the transaction
			// lifecycle, success or failure is not yet known.
			Y_raudrohi.on('io:complete', request_complete, this,
				['lorem', 'ipsum']);
			// Make an HTTP request to <the url>.
			var cfg = {
				method: 'POST',
				//data: 'debug|||/dev/null|||',
				timeout: raudrohi.settings.ajax_request_timeout * 1000,
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
			var request = Y_raudrohi.io(uri, cfg);
		} catch (err) {
			raudrohi.tmg('352f7995-2437-41a2-9f46-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.send2server

	// Due to YUI's architecture there's a separate method for
	// editing the style attribute.
	raudrohi.adapter.setAttribute = function(html_id, attribute_name,
		attribute_value) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('1b96b5e4-4dda-4b05-ad26-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(attribute_name)) {
					raudrohi.tmg('02614023-5739-43f4-9956-e07221313dd7',
						'(!raudrohi_adapter_isString(attribute_name))==true')
				} // if
				if (!raudrohi_adapter_isString(attribute_value)) {
					raudrohi.tmg('d6616897-784f-448c-95e6-e07221313dd7',
						'(!raudrohi_adapter_isString(attribute_value))==true')
				} // if
			} // if
			var node = Y_raudrohi.Node.get('#' + html_id);
			if (node === null) {
				raudrohi.tmg('538b60a2-6b3c-4d46-af46-e07221313dd7',
					' node===null ');
			} // if
			node.set(attribute_name, attribute_value);
		} catch (err) {
			raudrohi.tmg('5e18faa5-902b-4e48-b356-e07221313dd7', err +
				'  html_id==' + html_id + ' attribute_name==' + attribute_name +
				'  attribute_value==' + attribute_value);
		} // catch
	} // raudrohi.adapter.setAttribute

	raudrohi.adapter.getAttribute = function(html_id, attribute_name) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('8c2af845-9fc5-44ae-8755-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(attribute_name)) {
					raudrohi.tmg('5ebf0655-d223-4a87-b222-e07221313dd7',
						'(!raudrohi_adapter_isString(attribute_name))==true')
				} // if
			} // if
			var node = Y_raudrohi.Node.get('#' + html_id);
			if (node === null) {
				raudrohi.tmg('3a341dd4-c80c-4220-a732-e07221313dd7',
					' node===null ');
			} // if
			var attr_value = node.get(attribute_name);
			return attr_value;
		} catch (err) {
			raudrohi.tmg('49bc6875-65cb-4664-bb11-e07221313dd7', err +
				'  html_id==' + html_id + ' attribute_name==' + attribute_name);
		} // catch
	} // raudrohi.adapter.getAttribute

	raudrohi.adapter.remove_HTML_attribute = function(html_id, attribute_name) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('b3914496-da49-4a24-9d11-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(attribute_name)) {
					raudrohi.tmg('1324e999-bafa-45e2-b861-e07221313dd7',
						'(!raudrohi_adapter_isString(attribute_name))==true')
				} // if
			} // if
			var node = Y_raudrohi.Node.get('#' + html_id);
			if (node === null) {
				raudrohi.tmg('12c98d72-2ef2-4a04-a631-e07221313dd7',
					' node===null ');
			} // if
			node.removeAttribute(attribute_name);
		} catch (err) {
			raudrohi.tmg('288358b3-3776-4bf5-a411-e07221313dd7', err +
				'  html_id==' + html_id + ' attribute_name==' + attribute_name);
		} // catch
	} // raudrohi.adapter.remove_HTML_attribute


	raudrohi.adapter.editStyle = function(html_id, style_param_name,
		style_param_value) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('665c4686-d15e-44c9-8241-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(style_param_name)) {
					raudrohi.tmg('f208fc79-4a5c-45ad-bc11-e07221313dd7',
						'(!raudrohi_adapter_isString(style_param_name))==true')
				} // if
				if (!raudrohi_adapter_isString(style_param_value)) {
					raudrohi.tmg('300fa273-919f-44ed-ac20-e07221313dd7',
						'(!raudrohi_adapter_isString(style_param_value))==true')
				} // if
			} // if
			var node = Y_raudrohi.Node.get('#' + html_id);
			if (node === null) {
				raudrohi.tmg('23dad005-16b8-4b2f-8310-e07221313dd7',
					' node===null, html_id==' + html_id + "\n");
			} // if
			node.setStyle(style_param_name, style_param_value);
		} catch (err) {
			raudrohi.tmg('4f17c844-b0e5-49b6-a530-e07221313dd7', err +
				"\n html_id==" + html_id + "\n style_param_name==" + style_param_name +
				"  style_param_value==" + style_param_value);
		} // catch
	} // raudrohi.adapter.editStyle

	raudrohi.adapter.set_innerHTML = function(html_id, a_string) {
		try {
			var node = Y_raudrohi.Node.get('#' + html_id);
			if (node === null) {
				raudrohi.tmg('249b1af3-7120-4f75-ae50-e07221313dd7',
					' node===null ');
			} // if
			node.set('innerHTML', a_string);
		} catch (err) {
			raudrohi.tmg('98ea36bb-9664-4410-a5d0-e07221313dd7', err +
				'  html_id==' + html_id + ' a_string==' + a_string);
		} // catch
	} // raudrohi.adapter.set_innerHTML

} // raudrohi.adapter.ports.yui_3_0

//------------------------------------------------------------------------

raudrohi.adapter.ports.yui_3_9_0 = function() {
	var self_public_ = this;
	this.get_name = function() {
		return 'YUI_3_9_0';
	} // get_name
	Y_raudrohi = YUI();
	if (raudrohi_settings_debug_JavaScript === true) {
		Y_raudrohi.use('console', "console-filters", "dd-plugin",
			'overlay', 'dd', 'node', 'attribute',
			'dom', 'event', 'get', 'io-base', 'node-load',
			'io-form', 'io-upload-iframe', 'json', 'json-stringify',
			'json-parse', 'event-key', 'key', function(Y) {

			raudrohi_adapter_isString = Y.Lang.isString;
			raudrohi_adapter_isArray = Y.Lang.isArray;
			raudrohi_adapter_isNumber = Y.Lang.isNumber;
			raudrohi_adapter_isBoolean = Y.Lang.isBoolean;
			raudrohi_adapter_isObject = Y.Lang.isObject;
			raudrohi_adapter_isUndefined = Y.Lang.isUndefined;
			raudrohi_adapter_isValue = Y.Lang.isValue;
			raudrohi_adapter_isFunction = Y.Lang.isFunction;

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
		Y_raudrohi.use("dd-plugin",
			'overlay', 'dd', 'node', 'attribute',
			'dom', 'event', 'get', 'io-base', 'node-load',
			'io-form', 'io-upload-iframe', 'json', 'json-stringify',
			'json-parse', 'event-key', 'key', function(Y) {

			raudrohi_adapter_isString = Y.Lang.isString;
			raudrohi_adapter_isArray = Y.Lang.isArray;
			raudrohi_adapter_isNumber = Y.Lang.isNumber;
			raudrohi_adapter_isBoolean = Y.Lang.isBoolean;
			raudrohi_adapter_isObject = Y.Lang.isObject;
			raudrohi_adapter_isUndefined = Y.Lang.isUndefined;
			raudrohi_adapter_isValue = Y.Lang.isValue;
			raudrohi_adapter_isFunction = Y.Lang.isFunction;

			raudrohi.internal_constructor();
			raudrohi.application_main_function();
		});
	} // else

	raudrohi.adapter.vars.YUI_3_9_0 = {};

	raudrohi.adapter.log = function(a_string) {
		if (raudrohi_settings_debug_JavaScript === true) {
			Y_raudrohi.log(a_string);
		} // if
	} // raudrohi.adapter.log

	raudrohi.adapter.trim = function(a_string) {
		try {
			return Y_raudrohi.Lang.trim(a_string);
		} catch (err) {
			raudrohi.tmg('5e7b5082-7518-4cb0-a410-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.trim

	raudrohi.adapter.YUI_preventdefault = function(e) {
		try {
			e.preventDefault();
		} catch (err) {
			raudrohi.tmg('38fd12a4-cc96-48ba-9b50-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.YUI_preventdefault

	raudrohi.adapter.YUI_stoppropagation = function(e) {
		try {
			e.stopPropagation();
		} catch (err) {
			raudrohi.tmg('2e68eac3-984b-4d51-b710-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.YUI_stoppropagation

	raudrohi.adapter.YUI_stoppropagation_preventdefault = function(e) {
		try {
			e.halt();
		} catch (err) {
			raudrohi.tmg('75300327-7c10-4779-a13f-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.YUI_stoppropagation_preventdefault

	raudrohi.adapter.YUI_create_console = function() {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				YUI_based_LogReader = new Y_raudrohi.Console({
					strings: {
						title: 'Raudrohi Debugging Console',
						pause: 'Wait',
						clear: 'Flush',
						collapse: 'Shrink',
						expand: 'Grow'
					},
					visible: true// hidden at instantiation
				}).plug(Y_raudrohi.Plugin.ConsoleFilters)
					.plug(Y_raudrohi.Plugin.Drag, {handles: ['.yui3-console-hd']})
					.render();
			} // if
		} catch (err) {
			raudrohi.tmg('3383993d-00b2-426f-baff-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.YUI_create_console

	raudrohi.adapter.addEventListner = function(html_id, event_name,
		event_handler_func) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('1e403781-cb13-4f21-bf4f-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(event_name)) {
					raudrohi.tmg('b83bfd4a-324e-4e74-9e5f-e07221313dd7',
						'(!raudrohi_adapter_isString(event_name))==true')
				} // if
				if (!raudrohi_adapter_isFunction(event_handler_func)) {
					raudrohi.tmg('255809d3-55d2-4f89-ba3f-e07221313dd7',
						'(!raudrohi_adapter_isFunction(event_handler_func))==true');
				} // if
				raudrohi.adapter.vars.verify_event_name(event_name);
			} // if
			var key_listener_handle = Y_raudrohi.on(event_name, function(e) {
				//e.halt();// stopPropagation() and preventDefault()
				//key_listener_handle.detach();// unsubscribe so this only happens once
				event_handler_func(e);
			}, '#' + html_id);
			// The value is returned in order to be compatible wtih
			// the raudrohi.adapter.set_keylistener. The compatibility is
			// required in the raudrohi.widgets.g1.sys.keylisteners_unit.
			return key_listener_handle;
		} catch (err) {
			raudrohi.tmg('f490a506-5f95-46ff-903f-e07221313dd7',
				err + ' html_id==' + html_id + '  event_name==' + event_name);
		} // catch
	} // raudrohi.adapter.addEventListner

	raudrohi.adapter.set_keylistener = function(html_id, key_number_as_string,
		event_handler_func) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('1c2a23e2-0595-4369-b41f-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(key_number_as_string)) {
					raudrohi.tmg('3c39f823-1b12-4125-831f-e07221313dd7',
						'(!raudrohi_adapter_isString(key_number_as_string))==true')
				} // if
				if (!raudrohi_adapter_isFunction(event_handler_func)) {
					raudrohi.tmg('39ee6034-2377-4f41-ad3e-e07221313dd7',
						'(!raudrohi_adapter_isFunction(event_handler_func))==true');
				} // if
				// If the parseInt converts something like 'BumBastic' to
				// an int, then there will be trouble. It's not possible to
				// preprocess it here either.
				var key_code_candidate = parseInt(key_number_as_string, 10);
				if (!raudrohi.core.isWithinKeyeventKeyCodes(key_code_candidate)) {
					raudrohi.tmg('f16b4c07-082a-4528-9f1e-e07221313dd7',
						'key_number(==' + key_number_as_string +
						') does not represent a ' +
						'JavaScript key event key code.');
				} // if
			} // if
			var key_listener_handle = Y_raudrohi.on('key',
				function(e, arg1, arg2, etc) {
					//e.halt();// stopPropagation() and preventDefault()
					//key_listener_handle.detach();// unsubscribe so this only happens once
					event_handler_func(e);
				}, '#' + html_id, 'down:' + key_number_as_string,
				Y_raudrohi, "arg1", "arg2", "etc");
			return key_listener_handle;
		} catch (err) {
			raudrohi.tmg('4c4a78b3-31c8-434b-933e-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.set_keylistener

	raudrohi.adapter.remove_keylistener = function(key_listener_handle) {
		try {
			key_listener_handle.detach();
		} catch (err) {
			raudrohi.tmg('46573f55-5a44-4732-b45e-e07221313dd7', err);
		} // catch
	} // remove_keylistener

	raudrohi.adapter.JSON2ob = function(a_json_string) {
		try {
			var an_object;
			//YUI().use('json-parse', function (Ytmp) {
			// JSON.parse throws a SyntaxError when passed invalid JSON
			try {
				an_object = Y_raudrohi.JSON.parse(a_json_string);
			}
			catch (e) {
				raudrohi.tmg("Invalid JSON string. " + e);
			}
			//});
			return an_object;
		} catch (err) {
			raudrohi.tmg('a1d05533-4f44-4778-af3e-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.JSON2ob

	raudrohi.adapter.ob2JSON = function(an_object) {
		try {
			var s_json = '';
			//YUI().use('json-stringify', function (Ytmp) {
			s_json = Y_raudrohi.JSON.stringify(an_object) + '\n';
			//});
			return s_json;
		} catch (err) {
			raudrohi.tmg('3518d234-1910-4ebe-bf4e-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.JSON2ob


	raudrohi.adapter.send2server = function(url_string, data_as_text) {
		try {
			var fff = document.getElementById(
				'sirel_data_from_JavaScript_formscript_field');
			fff.value = data_as_text;
			var uri = url_string;

			// Define a function to handle the response data.
			function request_complete(id, o, args) {
				try {
					// id ==Transaction ID.
					var data = o.responseText; // Response data.
					if (data != null) {// IE problems
						if (raudrohi_adapter_isString(data)) {
							if (data != '') {
								raudrohi.adapter.server_response_eventhandler(data);
							} // if
						} // if
					} // if
					//  var args = args[1]; // 'ipsum'.
				} catch (err) {
					raudrohi.tmg('563952e3-8acc-436a-872e-e07221313dd7', err);
				} // catch
			} // request_complete

			// Subscribe to event "io:complete", and pass an array
			// as an argument to the event handler "complete", since
			// "complete" is global.   At this point in the transaction
			// lifecycle, success or failure is not yet known.
			Y_raudrohi.on('io:complete', request_complete, this,
				['lorem', 'ipsum']);
			// Make an HTTP request to <the url>.
			var cfg = {
				method: 'POST',
				//data: 'debug|||/dev/null|||',
				timeout: raudrohi.settings.ajax_request_timeout * 1000,
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
			var request = Y_raudrohi.io(uri, cfg);
		} catch (err) {
			raudrohi.tmg('4a6ae471-9a36-4c16-a32d-e07221313dd7', err);
		} // catch
	} // raudrohi.adapter.send2server

	// Due to YUI's architecture there's a separate method for
	// editing the style attribute.
	raudrohi.adapter.setAttribute = function(html_id, attribute_name,
		attribute_value) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('14788541-49fd-4428-93fd-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(attribute_name)) {
					raudrohi.tmg('1987d431-b89b-4d86-971d-e07221313dd7',
						'(!raudrohi_adapter_isString(attribute_name))==true')
				} // if
				if (!raudrohi_adapter_isString(attribute_value)) {
					raudrohi.tmg('ca50fee1-9ea8-45db-b33d-e07221313dd7',
						'(!raudrohi_adapter_isString(attribute_value))==true')
				} // if
			} // if
			var node = Y_raudrohi.Node.get('#' + html_id);
			if (node === null) {
				raudrohi.tmg('5e18a643-aa05-48e1-a82d-e07221313dd7',
					' node===null ');
			} // if
			node.set(attribute_name, attribute_value);
		} catch (err) {
			raudrohi.tmg('43f0c4a4-72d5-4a5e-871d-e07221313dd7', err +
				'  html_id==' + html_id + ' attribute_name==' + attribute_name +
				'  attribute_value==' + attribute_value);
		} // catch
	} // raudrohi.adapter.setAttribute

	raudrohi.adapter.getAttribute = function(html_id, attribute_name) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('24c05f44-ed9c-40c4-b22d-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(attribute_name)) {
					raudrohi.tmg('a81c7e07-2107-4aa0-984c-e07221313dd7',
						'(!raudrohi_adapter_isString(attribute_name))==true')
				} // if
			} // if
			var node = Y_raudrohi.Node.get('#' + html_id);
			if (node === null) {
				raudrohi.tmg('2a0f6445-ea58-4c51-a63c-e07221313dd7',
					' node===null ');
			} // if
			var attr_value = node.get(attribute_name);
			return attr_value;
		} catch (err) {
			raudrohi.tmg('562471c3-3c15-41ba-8d5c-e07221313dd7', err +
				'  html_id==' + html_id + ' attribute_name==' + attribute_name);
		} // catch
	} // raudrohi.adapter.getAttribute

	raudrohi.adapter.remove_HTML_attribute = function(html_id, attribute_name) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('538aca0d-7ff6-4cdc-af2c-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(attribute_name)) {
					raudrohi.tmg('29e0beb5-21ac-4438-924c-e07221313dd7',
						'(!raudrohi_adapter_isString(attribute_name))==true')
				} // if
			} // if
			var node = Y_raudrohi.Node.get('#' + html_id);
			if (node === null) {
				raudrohi.tmg('f40b0f74-fc1b-45f9-97ec-e07221313dd7',
					' node===null ');
			} // if
			node.removeAttribute(attribute_name);
		} catch (err) {
			raudrohi.tmg('e17ff876-0523-46ba-ad3c-e07221313dd7', err +
				'  html_id==' + html_id + ' attribute_name==' + attribute_name);
		} // catch
	} // raudrohi.adapter.remove_HTML_attribute


	raudrohi.adapter.editStyle = function(html_id, style_param_name,
		style_param_value) {
		try {
			if (raudrohi_settings_debug_JavaScript === true) {
				if (!raudrohi_adapter_isString(html_id)) {
					raudrohi.tmg('546ccdf1-f441-47ef-9b5b-e07221313dd7',
						'(!raudrohi_adapter_isString(html_id))==true')
				} // if
				if (!raudrohi_adapter_isString(style_param_name)) {
					raudrohi.tmg('4cb14d33-9bc0-45d8-bd4b-e07221313dd7',
						'(!raudrohi_adapter_isString(style_param_name))==true')
				} // if
				if (!raudrohi_adapter_isString(style_param_value)) {
					raudrohi.tmg('1bd6f003-9047-4e42-8e2b-e07221313dd7',
						'(!raudrohi_adapter_isString(style_param_value))==true')
				} // if
			} // if
			var node = Y_raudrohi.Node.get('#' + html_id);
			if (node === null) {
				raudrohi.tmg('1c520f32-467f-4f1d-974b-e07221313dd7',
					' node===null, html_id==' + html_id + "\n");
			} // if
			node.setStyle(style_param_name, style_param_value);
		} catch (err) {
			raudrohi.tmg('4b019273-10e6-44fa-812b-e07221313dd7', err +
				"\n html_id==" + html_id + "\n style_param_name==" + style_param_name +
				"  style_param_value==" + style_param_value);
		} // catch
	} // raudrohi.adapter.editStyle

	raudrohi.adapter.set_innerHTML = function(html_id, a_string) {
		try {
			var node = Y_raudrohi.Node.get('#' + html_id);
			if (node === null) {
				raudrohi.tmg('46cc28a2-8d49-4ae4-945b-e07221313dd7',
					' node===null ');
			} // if
			node.set('innerHTML', a_string);
		} catch (err) {
			raudrohi.tmg('11433c92-d35e-442b-aa5a-e07221313dd7', err +
				'  html_id==' + html_id + ' a_string==' + a_string);
		} // catch
	} // raudrohi.adapter.set_innerHTML

} // raudrohi.adapter.ports.yui_3_9_0

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
raudrohi.initiate_adapter = function(b_make_no_assumptions_about_setup_availability) {
	try {
		var port_name;
		try {
			if (b_make_no_assumptions_about_setup_availability === true) {
// RENESSAATOR_BLOCK_START
// RENESSAATOR_BLOCK_ID=raudrohi_initiate_adapter_block_1
// RENESSAATOR_SOURCE_LANGUAGE=Ruby
// RENESSAATOR_SOURCE_START
// RAUDROHI_HOME=ENV['RAUDROHI_HOME']
// require(RAUDROHI_HOME+"/src/dev_tools/code_generation/raudrohi_cg0.rb")
// puts "port_name='"+RAUDROHI_PORT_NAME+"';"
// RENESSAATOR_SOURCE_END
//
// RENESSAATOR_AUTOGENERATED_TEXT_START
port_name='YUI_3_9_0';

// RENESSAATOR_AUTOGENERATED_TEXT_END
// RENESSAATOR_BLOCK_END
				//  The following 3 are determined in raudrohi_core_v1.js
				//  raudrohi_settings_debug_JavaScript=true;
				//  raudrohi.settings.debug_SERVERSIDE=false;
				//  raudrohi.settings.ajax_request_timeout=3600; // seconds
			} else {
				var s_err_prefix = " The " +
					"b_make_no_assumptions_about_setup_availability!==true, but ";
				var elem_id = "webpage_initiation_data_from_server_raudrohi_port";
				var elem = document.getElementById(elem_id);
				if (elem === null) {
					throw s_err_prefix + " the html document does not " +
						"contain an element with an id of " +
						"\"webpage_initiation_data_from_server_raudrohi_port\"." +
						'GUID=="ce217028-0c8f-41b2-8948-e07221313dd7"';
				} // if
				port_name = elem.innerHTML;
				elem_id = "webpage_initiation_data_from_server_debug_SERVERSIDE";
				elem = document.getElementById(elem_id);
				if (elem === null) {
					throw "keyword: debug_SERVERSIDE, " +
						'GUID=="3e356132-921e-4a91-ae48-e07221313dd7"';
				} // if
				raudrohi.settings.debug_SERVERSIDE = raudrohi.core.str2bool(
					elem.innerHTML);
				elem_id = "webpage_initiation_data_from_server_debug_JavaScript";
				elem = document.getElementById(elem_id);
				if (elem === null) {
					throw "keyword: debug_JavaScript, " +
						'GUID=="f9b43d73-d117-46f7-a548-e07221313dd7"';
				} // if
				raudrohi_settings_debug_JavaScript = raudrohi.core.str2bool(
					elem.innerHTML);
				elem_id = "webpage_initiation_data_from_server_javascript_side_ajax_timeout";
				elem = document.getElementById(elem_id);
				if (elem !== null) {
					var seconds = parseInt(elem.innerHTML);
					raudrohi.settings.ajax_request_timeout = seconds;
				} // if
			} // else
		} catch (err) {
			throw 'GUID=="4ed9d733-349e-4080-9357-e07221313dd7", ' + err;
		} // catch
		raudrohi.adapter.ports.selected_port_name = port_name;
		switch (port_name) {
			case 'YUI_3_9_0':
				raudrohi.adapter.ports.yui_3_9_0();
				break;
			case 'YUI_3_0':
				raudrohi.adapter.ports.yui_3_0();
				break;
			default:
				if (raudrohi_settings_debug_JavaScript === true) {
					throw 'GUID=="14909572-b229-42d4-9727-e07221313dd7"  ' +
						'There\'s no branching for port_name(==' +
						port_name + ').';
				} // if
		} // switch
	} catch (err) {
		throw 'GUID=="5d535804-8e4f-495b-8c27-e07221313dd7", ' + err;
	} // catch
} // raudrohi.initiate_adapter

//------------------------------------------------------------------------
